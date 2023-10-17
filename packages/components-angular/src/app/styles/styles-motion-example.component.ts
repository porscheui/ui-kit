import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'page-styles-motion-example',
  styles: [
    `
      @use '@porsche-design-system/components-angular/styles' as *;

      // Wrapper
      .wrapper {
        display: flex;
        gap: $pds-grid-gap;
        padding: $pds-spacing-fluid-medium;
        flex-wrap: wrap;
        justify-content: center;
      }

      // Typography
      .heading {
        @include pds-heading-medium;
        color: $pds-theme-light-primary;
        text-align: center;
        width: 100%;
      }

      // Tile
      .tile {
        @include pds-text-small;
        color: $pds-theme-light-primary;
        background: $pds-theme-light-background-surface;
        border: none;
        border-radius: $pds-border-radius-large;
        cursor: pointer;
      }

      .tile-moving {
        width: 70px;
        height: 70px;
        transition-duration: $pds-motion-duration-short;
        transition-timing-function: $pds-motion-easing-base;
        transform: translateX(-200px);
      }

      .tile-enter-exit {
        width: 200px;
        height: 100px;
        transition-duration: $pds-motion-duration-moderate;
        transition-timing-function: $pds-motion-easing-in;
        transform: translateY(0px);
      }

      .tile-show-hide {
        width: 200px;
        height: 100px;
        transition-duration: $pds-motion-duration-long;
        transition-timing-function: $pds-motion-easing-base;
      }

      .tile-expand {
        width: 200px;
        height: 40px;
        transition: height;
        transition-duration: $pds-motion-duration-short;
        transition-timing-function: $pds-motion-easing-in;
      }

      // Motion
      .tile-moving.active {
        transform: translateX(200px);
      }

      .tile-enter-exit.active {
        transition-duration: $pds-motion-duration-short;
        transition-timing-function: $pds-motion-easing-out;
        transform: translateY(40%);
        opacity: 0;
      }

      .tile-show-hide.active {
        opacity: 0;
      }

      .tile-expand.active {
        height: 160px;
        transition: height;
        transition-duration: $pds-motion-duration-moderate;
        transition-timing-function: $pds-motion-easing-base;
      }
    `,
  ],
  template: `
    <div>
      <div class="wrapper">
        <h3 class="heading">Moving</h3>
        <button class="tile tile-moving" (click)="onClick($event)">play</button>
      </div>
      <div class="wrapper">
        <h3 class="heading">Enter / Exit</h3>
        <button class="tile tile-enter-exit" (click)="onClick($event)">play</button>
      </div>
      <div class="wrapper">
        <h3 class="heading">Show / Hide</h3>
        <button class="tile tile-show-hide" (click)="onClick($event)">play</button>
      </div>
      <div class="wrapper">
        <h3 class="heading">Expand</h3>
        <button class="tile tile-expand" (click)="onClick($event)">play</button>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StylesMotionExampleComponent {
  onClick = (e: MouseEvent): void => {
    (e.target as HTMLDivElement).classList.toggle('active');
  };
}
