import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'page-inline-notification-example-events',
  template: `
    <button type="button" (click)="onShow()">Show Inline Notification</button>
    <p-inline-notification
      *ngIf="isActive"
      [heading]="'Some heading'"
      [heading-tag]="'h4'"
      [description]="'Some description.'"
      (dismiss)="onDismiss()"
    ></p-inline-notification>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class InlineNotificationExampleEventsComponent {
  isActive = false;

  onShow() {
    this.isActive = true;
  }
  onDismiss() {
    this.isActive = false;
  }
}
