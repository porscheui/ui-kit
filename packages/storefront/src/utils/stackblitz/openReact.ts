import { version as pdsVersion } from '../../../../components-js/projects/components-wrapper/package.json';
import { devDependencies as reactDevDependencies } from '../../../../components-react/package.json';
import { themeDarkBodyStyles } from '@/utils/stackblitz/openInStackBlitz';
import type { StackBlitzFrameworkOpts } from '@/utils/stackblitz/openInStackBlitz';
import sdk from '@stackblitz/sdk';

export const openReact = (props: StackBlitzFrameworkOpts): void => {
  const { markup, description, title, hasFrameworkMarkup, isThemeDark, componentNames } = props;

  const cleanedFragmentsMarkup = markup.replace(/(<\/?)(>)/g, '$1React.Fragment$2');

  const appTsx = hasFrameworkMarkup
    ? `import React from 'react';
${cleanedFragmentsMarkup}`
    : `import * as React from 'react';
import { ${componentNames} } from '@porsche-design-system/components-react'
export default function App() {
  return (
    <div>
      ${cleanedFragmentsMarkup}
    </div>
  );
}`;

  const [, extractComponentName] = markup.match(/const ([A-z]+) = \(\): JSX.Element => {/) ?? [];
  const reactComponentName = hasFrameworkMarkup ? extractComponentName : 'App';
  const reactImport = hasFrameworkMarkup ? `{ ${reactComponentName} }` : reactComponentName;

  sdk.openProject(
    {
      files: {
        'App.tsx': appTsx,
        'index.html': `<div id="root"></div>`,
        'index.tsx': `import * as React from 'react';
import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import ${reactImport} from "./App";
import { PorscheDesignSystemProvider } from "@porsche-design-system/components-react";
import './style.css';

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <PorscheDesignSystemProvider>
      <${reactComponentName} />
    </PorscheDesignSystemProvider>
  </StrictMode>
);`,
        'style.css': isThemeDark ? themeDarkBodyStyles : '',
      },
      template: 'create-react-app',
      title,
      description,
      dependencies: {
        '@porsche-design-system/components-react': `${pdsVersion}`,
        '@types/react': `${reactDevDependencies['@types/react']}`,
        '@types/react-dom': `${reactDevDependencies['@types/react-dom']}`,
      },
    },
    {
      openFile: 'App.tsx',
    }
  );
};
