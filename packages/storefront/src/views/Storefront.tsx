import React, { useState, useEffect } from "react";
import { throttle } from "throttle-debounce";
import cx from "classnames";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Sidebar } from "../components/sidebar/Sidebar";
import { Story } from "../components/story/Story";
import styles from "./storefront.module.scss";
import { Home as GeneralHome } from "../pages/general/home/Home";
import { About } from "../pages/getting-started/about-porsche-ui-kit/About";
import { StartDesigning } from "../pages/getting-started/start-designing/StartDesigning";
import { DesignWorkflow } from "../pages/getting-started/design-workflow/DesignWorkflow";
import { StartCoding } from "../pages/getting-started/start-coding/StartCoding";
import { Support as GeneralSupport } from "../pages/help/support/Support";
import { FAQ as GeneralFAQ } from "../pages/help/faq/FAQ";
import { Updates as GeneralUpdates } from "../pages/news/updates/Updates";
import { Versioning as GeneralVersioning } from "../pages/news/versioning/Versioning";
import { Roadmap as GeneralRoadmap } from "../pages/news/roadmap/Roadmap";
import { BrowserCompatibility as BasicsBrowserCompatibility } from "../pages/basics/browser-compatibility/BrowserCompatibility";
import { QualityCriteria as BasicsQualityCriteria } from "../pages/basics/quality-criteria/QualityCriteria";
import { Accessibility as BasicsAccessibility } from "../pages/basics/accessibility/Accessibility";
import { License as GeneralLicense } from "../pages/general/license/License";
import { SketchPlugins as DesignSketchPlugins } from "../pages/getting-started/sketch-plugins/SketchPlugins";
import { Markdown } from "../pages/demo/markdown/Markdown";

export const Storefront: React.FunctionComponent = () => {
  const [hideSidebar, setHideSidebar] = useState(false);
  const [featureShowV1, setFeatureShowV1] = useState("");

  const handleHideSidebarClicked = () => {
    setHideSidebar(!hideSidebar);
  };

  const updateIsMobile = () => {
    window.innerWidth < 1000 ? setHideSidebar(hideSidebar === false) : setHideSidebar(hideSidebar === true);
  };

  const appSidebarClasses = cx(styles["area-sidebar"], {
    [styles.close]: hideSidebar
  });

  const appContentClasses = cx(styles["area-content"], {
    [styles.fullscreen]: hideSidebar
  });

  useEffect(() => {
    window.location.hash.indexOf("featureV1") > -1 ? setFeatureShowV1("?featureV1") : setFeatureShowV1("");

    updateIsMobile();

    window.addEventListener(
      "resize",
      throttle(500, () => {
        updateIsMobile();
      })
    );
  }, []);

  return (
    <Router>
      <button className={styles["sidebar-toggle"]} onClick={handleHideSidebarClicked}>
        {hideSidebar ? "+ Show" : "- Hide"}
      </button>
      <div className={appSidebarClasses}>
        <Sidebar featureV1={featureShowV1} />
      </div>
      <main className={appContentClasses}>
        <Switch>
          <Route exact path="/" component={() => <Redirect to={"/general/home" + featureShowV1} />} />
          <Route path="/general/home" component={GeneralHome} />
          <Route path="/getting-started/about" component={About} />
          <Route path="/getting-started/start-designing" component={StartDesigning} />
          <Route path="/getting-started/start-coding" component={StartCoding} />
          <Route path="/getting-started/design-workflow" component={DesignWorkflow} />
          <Route path="/getting-started/sketch-plugins" component={DesignSketchPlugins} />
          <Route path="/help/support" component={GeneralSupport} />
          <Route path="/help/faq" component={GeneralFAQ} />
          <Route path="/news/updates" component={GeneralUpdates} />
          <Route path="/news/versioning" component={GeneralVersioning} />
          <Route path="/news/roadmap" component={GeneralRoadmap} />
          <Route path="/general/license" component={GeneralLicense} />
          <Route path="/basics/quality-criteria" component={BasicsQualityCriteria} />
          <Route path="/basics/browser-compatibility" component={BasicsBrowserCompatibility} />
          <Route path="/basics/accessibility" component={BasicsAccessibility} />
          <Route path="/demo/markdown" component={Markdown} />
          <Route path="/:category/:story" render={(props) => <Story featureV1={featureShowV1} {...props} />} />
        </Switch>
      </main>
    </Router>
  );
};
