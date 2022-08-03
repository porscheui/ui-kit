import sdk from '@stackblitz/sdk';
import { version as pdsVersion } from '../../../../components-js/projects/components-wrapper/package.json';
import { dependencies } from '../../../../components-angular/package.json';
import { paramCase } from 'change-case';
import { getAdditionalDependencies, replaceSharedTableImports } from '@/utils/stackblitz/openInStackBlitz';
import type { StackBlitzFrameworkOpts, DependenciesMap } from '@/utils/stackblitz/openInStackBlitz';

export const openAngular = (props: StackBlitzFrameworkOpts): void => {
  const { markup, description, title, hasFrameworkMarkup, bodyStyles, sharedTableMarkup, additionalDependencies } =
    props;

  const dependenciesMap: DependenciesMap = {
    IMask: {
      imask: `${dependencies['angular-imask']}`,
      'angular-imask': `${dependencies['angular-imask']}`,
    },
  };

  const usesIMask = additionalDependencies && additionalDependencies.filter((x) => x === 'IMask');

  const [, matchedClassName] = markup.match(/export class ([A-z]+) {/) ?? [];
  const className = hasFrameworkMarkup ? matchedClassName : 'AppComponent';
  const classNameParamCase = paramCase(className);

  const selector = hasFrameworkMarkup
    ? `<${classNameParamCase}></${classNameParamCase}>`
    : '<porsche-design-system-app></porsche-design-system-app>';

  const appComponentTsFrameworkMarkup = sharedTableMarkup
    ? replaceSharedTableImports(markup, sharedTableMarkup)
    : markup;
  const appComponentTsDefaultMarkup = `import { Component } from '@angular/core';

@Component({
  selector: 'porsche-design-system-app',
  template: \`
    ${markup}\`,
})
export class AppComponent  {}`;

  sdk.openProject({
    files: {
      // root folder
      'index.html': `${selector}
${`<style>${bodyStyles}</style>`}`,
      'main.ts': `import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import 'zone.js/dist/zone';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));`,
      // app folder
      'app/app.component.ts': hasFrameworkMarkup ? appComponentTsFrameworkMarkup : appComponentTsDefaultMarkup,
      'app/app.module.ts': `import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PorscheDesignSystemModule } from '@porsche-design-system/components-angular';
${usesIMask ? `import { IMaskModule } from 'angular-imask';` : ''}
import { ${className} } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule,${
    usesIMask ? 'IMaskModule,' : ''
  } PorscheDesignSystemModule.load({ prefix: '' }),],
  declarations: [${className}],
  bootstrap: [${className}],
})
export class AppModule {}`,
    },
    template: 'angular-cli',
    title,
    description,
    dependencies: {
      '@porsche-design-system/components-angular': `${pdsVersion}`,
      ...(additionalDependencies && getAdditionalDependencies(additionalDependencies, dependenciesMap)),
    },
  });
};
