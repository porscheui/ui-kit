import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
  PuiTextSize1Component,
  PuiTextSize1Directive
} from './index';

const declarations = [
  PuiTextSize1Component,
  PuiTextSize1Directive
];

@NgModule({
  imports: [CommonModule],
  declarations: declarations,
  exports: declarations
})
export class PuiTextModule {}
