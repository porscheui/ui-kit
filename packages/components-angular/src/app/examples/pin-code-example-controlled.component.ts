import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { PinCodeUpdateEvent } from '@porsche-design-system/components-angular';

@Component({
  selector: 'page-pin-code-example-controlled',
  template: `
    <p-pin-code
      [label]="'Some Label'"
      [length]="length"
      [value]="currentValue"
      (update)="onUpdate($event)"
    ></p-pin-code>
    <p-text>Current value: [{{ currentValue }}]</p-text>
    <p-text>Completely filled: {{ isComplete }}</p-text>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PinCodeExampleControlledComponent {
  length = 4;
  currentValue = ['', '', '', ''];
  isComplete = this.currentValue.join('').length === this.length;

  onUpdate(e: CustomEvent<PinCodeUpdateEvent>) {
    this.currentValue = e.detail.value;
    this.isComplete = e.detail.value.join('').length === this.length;
  }
}
