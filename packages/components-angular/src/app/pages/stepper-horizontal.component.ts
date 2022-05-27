/* Auto Generated File */
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'page-stepper-horizontal',
  template: `
    <div class="playground light" title="should render stepper on light background">
      <p-stepper-horizontal>
        <p-stepper-horizontal-item [state]="'current'">Step Current</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'warning'">Step Warning</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'complete'">Step Complete</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'warning'" disabled>Step Warning Disabled</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'complete'" disabled>Step Warning Complete</p-stepper-horizontal-item>
        <p-stepper-horizontal-item>Step</p-stepper-horizontal-item>
      </p-stepper-horizontal>
    </div>

    <div class="playground dark" title="should render stepper on dark background">
      <p-stepper-horizontal [theme]="'dark'">
        <p-stepper-horizontal-item [theme]="'dark'" [state]="'current'">Step Current</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [theme]="'dark'" [state]="'warning'">Step Warning</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [theme]="'dark'" [state]="'complete'">Step Complete</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [theme]="'dark'" [state]="'warning'" disabled>Step Warning Disabled</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [theme]="'dark'" [state]="'complete'" disabled>Step Warning Complete</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [theme]="'dark'">Step</p-stepper-horizontal-item>
      </p-stepper-horizontal>
    </div>

    <div class="playground light" title="should render arrow left on smaller viewports on light background">
      <p-stepper-horizontal>
        <p-stepper-horizontal-item [state]="'complete'">Step 1</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'complete'">Step 2</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'complete'">Step 3</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'complete'">Step 4</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'complete'">Step 5</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'complete'">Step 6</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'complete'">Step 7</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'complete'">Step 8</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'current'">Step Current</p-stepper-horizontal-item>
      </p-stepper-horizontal>
    </div>

    <div class="playground dark" title="should render arrow left on smaller viewports on dark background">
      <p-stepper-horizontal [theme]="'dark'">
        <p-stepper-horizontal-item [theme]="'dark'" [state]="'complete'">Step 1</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [theme]="'dark'" [state]="'complete'">Step 2</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [theme]="'dark'" [state]="'complete'">Step 3</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [theme]="'dark'" [state]="'complete'">Step 4</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [theme]="'dark'" [state]="'complete'">Step 5</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [theme]="'dark'" [state]="'complete'">Step 6</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [theme]="'dark'" [state]="'complete'">Step 7</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [theme]="'dark'" [state]="'complete'">Step 8</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [theme]="'dark'" [state]="'current'">Step Current</p-stepper-horizontal-item>
      </p-stepper-horizontal>
    </div>

    <div class="playground light" title="should render arrow left and right on smaller viewports on light background">
      <p-stepper-horizontal>
        <p-stepper-horizontal-item [state]="'complete'">Step 1</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'complete'">Step 2</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'complete'">Step 3</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'complete'">Step 4</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [state]="'current'">Step Current</p-stepper-horizontal-item>
        <p-stepper-horizontal-item>Step 6</p-stepper-horizontal-item>
        <p-stepper-horizontal-item>Step 7</p-stepper-horizontal-item>
        <p-stepper-horizontal-item>Step 8</p-stepper-horizontal-item>
        <p-stepper-horizontal-item>Step 9</p-stepper-horizontal-item>
      </p-stepper-horizontal>
    </div>

    <div class="playground dark" title="should render arrow left and right on smaller viewports on dark background">
      <p-stepper-horizontal [theme]="'dark'">
        <p-stepper-horizontal-item [theme]="'dark'" [state]="'complete'">Step 1</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [theme]="'dark'" [state]="'complete'">Step 2</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [theme]="'dark'" [state]="'complete'">Step 3</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [theme]="'dark'" [state]="'complete'">Step 4</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [theme]="'dark'" [state]="'current'">Step Current</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [theme]="'dark'">Step 6</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [theme]="'dark'">Step 7</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [theme]="'dark'">Step 8</p-stepper-horizontal-item>
        <p-stepper-horizontal-item [theme]="'dark'">Step 9</p-stepper-horizontal-item>
      </p-stepper-horizontal>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperHorizontalComponent {}
