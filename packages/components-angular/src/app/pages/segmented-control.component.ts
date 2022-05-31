/* Auto Generated File */
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'page-segmented-control',
  template: `
    <div class="playground light" title="should render default segmented-control">
      <p-segmented-control>
        <p-segmented-control-item>Size S</p-segmented-control-item>
        <p-segmented-control-item>Size M</p-segmented-control-item>
        <p-segmented-control-item>Size L</p-segmented-control-item>
        <p-segmented-control-item>Size XL</p-segmented-control-item>
      </p-segmented-control>
    </div>

    <div class="playground light surface" title="should render default segmented-control on surface">
      <p-segmented-control [backgroundColor]="'background-surface'">
        <p-segmented-control-item>Size S</p-segmented-control-item>
        <p-segmented-control-item>Size M</p-segmented-control-item>
        <p-segmented-control-item>Size L</p-segmented-control-item>
        <p-segmented-control-item>Size XL</p-segmented-control-item>
      </p-segmented-control>
    </div>

    <div class="playground dark" title="should render default segmented-control on dark theme">
      <p-segmented-control [theme]="'dark'">
        <p-segmented-control-item>Size S</p-segmented-control-item>
        <p-segmented-control-item>Size M</p-segmented-control-item>
        <p-segmented-control-item>Size L</p-segmented-control-item>
        <p-segmented-control-item>Size XL</p-segmented-control-item>
      </p-segmented-control>
    </div>

    <div class="playground dark surface" title="should render default segmented-control on dark theme surface">
      <p-segmented-control [theme]="'dark'" [backgroundColor]="'background-surface'">
        <p-segmented-control-item>Size S</p-segmented-control-item>
        <p-segmented-control-item>Size M</p-segmented-control-item>
        <p-segmented-control-item>Size L</p-segmented-control-item>
        <p-segmented-control-item>Size XL</p-segmented-control-item>
      </p-segmented-control>
    </div>

    <div class="playground light" title="should render segmented-control with labels">
      <p-segmented-control>
        <p-segmented-control-item [label]="'Size'">S</p-segmented-control-item>
        <p-segmented-control-item [label]="'Size'">M</p-segmented-control-item>
        <p-segmented-control-item [label]="'Size'">L</p-segmented-control-item>
        <p-segmented-control-item [label]="'Size'">XL</p-segmented-control-item>
      </p-segmented-control>
    </div>

    <div class="playground light surface" title="should render segmented-control with labels on surface">
      <p-segmented-control [backgroundColor]="'background-surface'">
        <p-segmented-control-item [label]="'Size'">S</p-segmented-control-item>
        <p-segmented-control-item [label]="'Size'">M</p-segmented-control-item>
        <p-segmented-control-item [label]="'Size'">L</p-segmented-control-item>
        <p-segmented-control-item [label]="'Size'">XL</p-segmented-control-item>
      </p-segmented-control>
    </div>

    <div class="playground dark" title="should render segmented-control with labels on dark theme">
      <p-segmented-control [theme]="'dark'">
        <p-segmented-control-item [label]="'Size'">S</p-segmented-control-item>
        <p-segmented-control-item [label]="'Size'">M</p-segmented-control-item>
        <p-segmented-control-item [label]="'Size'">L</p-segmented-control-item>
        <p-segmented-control-item [label]="'Size'">XL</p-segmented-control-item>
      </p-segmented-control>
    </div>

    <div class="playground dark surface" title="should render segmented-control with labels on dark theme surface">
      <p-segmented-control [theme]="'dark'" [backgroundColor]="'background-surface'">
        <p-segmented-control-item [label]="'Size'">S</p-segmented-control-item>
        <p-segmented-control-item [label]="'Size'">M</p-segmented-control-item>
        <p-segmented-control-item [label]="'Size'">L</p-segmented-control-item>
        <p-segmented-control-item [label]="'Size'">XL</p-segmented-control-item>
      </p-segmented-control>
    </div>

    <div class="playground light" title="should render segmented-control with icons">
      <p-segmented-control>
        <p-segmented-control-item [icon]="'increase'">Start</p-segmented-control-item>
        <p-segmented-control-item [icon]="'lock'">Stop</p-segmented-control-item>
        <p-segmented-control-item [icon]="'question'">FAQ</p-segmented-control-item>
        <p-segmented-control-item [icon]="'shopping-cart'">Checkout</p-segmented-control-item>
        <p-segmented-control-item [iconSource]="'./assets/icon-custom-kaixin.svg'">Confirmation</p-segmented-control-item>
      </p-segmented-control>
    </div>

    <div class="playground light surface" title="should render segmented-control with icons on surface">
      <p-segmented-control [backgroundColor]="'background-surface'">
        <p-segmented-control-item [icon]="'increase'">Start</p-segmented-control-item>
        <p-segmented-control-item [icon]="'lock'">Stop</p-segmented-control-item>
        <p-segmented-control-item [icon]="'question'">FAQ</p-segmented-control-item>
        <p-segmented-control-item [icon]="'shopping-cart'">Checkout</p-segmented-control-item>
        <p-segmented-control-item [iconSource]="'./assets/icon-custom-kaixin.svg'">Confirmation</p-segmented-control-item>
      </p-segmented-control>
    </div>

    <div class="playground dark" title="should render segmented-control with icons on dark theme">
      <p-segmented-control [theme]="'dark'">
        <p-segmented-control-item [icon]="'increase'">Start</p-segmented-control-item>
        <p-segmented-control-item [icon]="'lock'">Stop</p-segmented-control-item>
        <p-segmented-control-item [icon]="'question'">FAQ</p-segmented-control-item>
        <p-segmented-control-item [icon]="'shopping-cart'">Checkout</p-segmented-control-item>
        <p-segmented-control-item [iconSource]="'./assets/icon-custom-kaixin.svg'">Confirmation</p-segmented-control-item>
      </p-segmented-control>
    </div>

    <div class="playground dark surface" title="should render segmented-control with icons on dark theme surface">
      <p-segmented-control [theme]="'dark'" [backgroundColor]="'background-surface'">
        <p-segmented-control-item [icon]="'increase'">Start</p-segmented-control-item>
        <p-segmented-control-item [icon]="'lock'">Stop</p-segmented-control-item>
        <p-segmented-control-item [icon]="'question'">FAQ</p-segmented-control-item>
        <p-segmented-control-item [icon]="'shopping-cart'">Checkout</p-segmented-control-item>
        <p-segmented-control-item [iconSource]="'./assets/icon-custom-kaixin.svg'">Confirmation</p-segmented-control-item>
      </p-segmented-control>
    </div>

    <div class="playground light" title="should render segmented-control with labels and icons">
      <p-segmented-control>
        <p-segmented-control-item [label]="'Variant'" [icon]="'wrench'">Default</p-segmented-control-item>
        <p-segmented-control-item [label]="'Variant'" [icon]="'wrenches'">Advanced</p-segmented-control-item>
        <p-segmented-control-item [label]="'Variant'" [icon]="'truck'">Large</p-segmented-control-item>
        <p-segmented-control-item [label]="'Variant'" [icon]="'tachometer'">Custom</p-segmented-control-item>
      </p-segmented-control>
    </div>

    <div class="playground light" title="should render default segmented-control with many items">
      <p-segmented-control>
        <p-segmented-control-item>Size XXS</p-segmented-control-item>
        <p-segmented-control-item>Size XS</p-segmented-control-item>
        <p-segmented-control-item>Size S</p-segmented-control-item>
        <p-segmented-control-item>Size M</p-segmented-control-item>
        <p-segmented-control-item>Size L</p-segmented-control-item>
        <p-segmented-control-item>Size XL</p-segmented-control-item>
        <p-segmented-control-item>Size XXL</p-segmented-control-item>
        <p-segmented-control-item>Size XXXL</p-segmented-control-item>
      </p-segmented-control>
    </div>

    <div class="playground light" title="should render segmented-control with value edge case">
      <p-segmented-control>
        <p-segmented-control-item>S</p-segmented-control-item>
        <p-segmented-control-item>M is very long with a line break</p-segmented-control-item>
        <p-segmented-control-item>L</p-segmented-control-item>
        <p-segmented-control-item>XL</p-segmented-control-item>
      </p-segmented-control>
    </div>

    <div class="playground light" title="should render segmented-control with label edge case">
      <p-segmented-control>
        <p-segmented-control-item [label]="'Size is longer'">S</p-segmented-control-item>
        <p-segmented-control-item [label]="'Size'">M</p-segmented-control-item>
        <p-segmented-control-item [label]="'Size'">L</p-segmented-control-item>
        <p-segmented-control-item [label]="'Size'">XL</p-segmented-control-item>
      </p-segmented-control>
    </div>

    <div class="playground light" title="should render segmented-control with multiple edge cases">
      <p-segmented-control>
        <p-segmented-control-item [label]="'Size is wider than value'">S</p-segmented-control-item>
        <p-segmented-control-item [label]="'Size with icon'" [icon]="'truck'">M is very wide with icon</p-segmented-control-item>
        <p-segmented-control-item [label]="'Icon only'" [icon]="'user'"></p-segmented-control-item>
        <p-segmented-control-item>XL without label</p-segmented-control-item>
        <p-segmented-control-item [label]="'Label only'"></p-segmented-control-item>
        <p-segmented-control-item [icon]="'truck'"></p-segmented-control-item>
      </p-segmented-control>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SegmentedControlComponent {}
