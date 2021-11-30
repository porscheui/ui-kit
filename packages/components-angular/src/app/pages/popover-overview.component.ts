import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-popover-overview',
  template: `
    <div title="should render multiple popovers on edge" style="height: 800px; width: 100%">
      <span style="position: fixed; top: 0; left: 0; right: 0; height: 1rem; background: rgba(0, 0, 255, 0.1)"></span>
      <span
        style="position: fixed; bottom: 0; left: 0; right: 0; height: 1rem; background: rgba(0, 0, 255, 0.1)"
      ></span>
      <span style="position: fixed; top: 0; left: 0; bottom: 0; width: 1rem; background: rgba(0, 0, 255, 0.1)"></span>
      <span style="position: fixed; top: 0; right: 0; bottom: 0; width: 1rem; background: rgba(0, 0, 255, 0.1)"> </span>
      <!--   Top Left to right   -->
      <span style="position: absolute; top: 1.5rem; left: 1rem">
        <p-popover [direction]="'right'">
          <div>Some popover</div>
          <div>Some popover</div>
          <div>Some popover</div>
        </p-popover>
      </span>
      <span style="position: absolute; top: 2rem; left: 13rem">
        <p-popover [direction]="'right'">
          <div>Some popover</div>
          <div>Some popover</div>
          <div>Some popover</div>
        </p-popover>
      </span>
      <span style="position: absolute; top: 3rem; left: 25rem">
        <p-popover [direction]="'right'">
          <div>Some popover</div>
          <div>Some popover</div>
          <div>Some popover</div>
        </p-popover>
      </span>
      <!--   Bottom Left to right   -->
      <span style="position: absolute; bottom: 1.5rem; left: 1rem">
        <p-popover [direction]="'right'">
          <div>Some popover</div>
          <div>Some popover</div>
          <div>Some popover</div>
        </p-popover>
      </span>
      <span style="position: absolute; bottom: 2rem; left: 13rem">
        <p-popover [direction]="'right'">
          <div>Some popover</div>
          <div>Some popover</div>
          <div>Some popover</div>
        </p-popover>
      </span>
      <span style="position: absolute; bottom: 3rem; left: 25rem">
        <p-popover [direction]="'right'">
          <div>Some popover</div>
          <div>Some popover</div>
          <div>Some popover</div>
        </p-popover>
      </span>
      <!--   Top  Right to left   -->
      <span style="position: absolute; top: 1.5rem; right: 1rem">
        <p-popover [direction]="'left'">
          <div>Some popover</div>
          <div>Some popover</div>
          <div>Some popover</div></p-popover
        >
      </span>
      <span style="position: absolute; top: 2rem; right: 13rem">
        <p-popover [direction]="'left'">
          <div>Some popover</div>
          <div>Some popover</div>
          <div>Some popover</div></p-popover
        >
      </span>
      <span style="position: absolute; top: 3rem; right: 25rem">
        <p-popover [direction]="'left'">
          <div>Some popover</div>
          <div>Some popover</div>
          <div>Some popover</div></p-popover
        >
      </span>
      <!--   Bottom  Right to left   -->
      <span style="position: absolute; bottom: 1.5rem; right: 1rem">
        <p-popover [direction]="'left'">
          <div>Some popover</div>
          <div>Some popover</div>
          <div>Some popover</div></p-popover
        >
      </span>
      <span style="position: absolute; bottom: 2rem; right: 13rem">
        <p-popover [direction]="'left'">
          <div>Some popover</div>
          <div>Some popover</div>
          <div>Some popover</div></p-popover
        >
      </span>
      <span style="position: absolute; bottom: 3rem; right: 25rem">
        <p-popover [direction]="'left'">
          <div>Some popover</div>
          <div>Some popover</div>
          <div>Some popover</div></p-popover
        >
      </span>
      <!--    Top Center-->
      <span style="position: absolute; top: 4.5rem; right: 50rem">
        <p-popover [direction]="'top'"><div>Direction Top</div></p-popover>
      </span>
      <span style="position: absolute; top: 4rem; right: 65rem">
        <p-popover [direction]="'top'"><div>Direction Top</div></p-popover>
      </span>
      <!--    Bottom Center-->
      <span style="position: absolute; bottom: 4.5rem; right: 50rem">
        <p-popover [direction]="'bottom'"><div>Direction Bottom</div></p-popover>
      </span>
      <span style="position: absolute; bottom: 4rem; right: 65rem">
        <p-popover [direction]="'bottom'"><div>Direction Bottom</div></p-popover>
      </span>
      <!--    Left Center-->
      <span style="position: absolute; top: 10rem; left: 10rem">
        <p-popover [direction]="'left'"><div>Direction Left</div></p-popover>
      </span>
      <span style="position: absolute; top: 15rem; left: 9rem">
        <p-popover [direction]="'left'"><div>Direction Left</div></p-popover>
      </span>
      <!--    Right Center-->
      <span style="position: absolute; top: 10rem; right: 10.5rem">
        <p-popover [direction]="'right'"><div>Direction Right</div></p-popover>
      </span>
      <span style="position: absolute; top: 15rem; right: 9rem">
        <p-popover [direction]="'right'"><div>Direction Right</div></p-popover>
      </span>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopoverOverviewComponent implements OnInit {
  ngOnInit() {
    // remove selection from screenshot
    document.querySelector('select').remove();
    // Enable multiple open popovers
    document.addEventListener(
      'mousedown',
      (e) => {
        e.stopPropagation();
      },
      true
    );
  }
}
