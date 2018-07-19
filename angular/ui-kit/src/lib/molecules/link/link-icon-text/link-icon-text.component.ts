import { Component, ViewEncapsulation, Input, Renderer2, ElementRef } from '@angular/core';
//import { PuiIcon } from "@porsche/ui-kit-angular";
import {PuiIcon} from "../../../atoms/icon";

@Component({
  selector: `pui-link-icon-text`,
  exportAs: 'puiLinkIconText',
  templateUrl: 'link-icon-text.component.html',
  styleUrls: [
    '../../../../../node_modules/@porsche/ui-kit-core/src/modules/icon/icon.scss',
    '../../../../../node_modules/@porsche/ui-kit-core/src/modules/link/link-icon-text.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class PuiLinkIconTextComponent {
  @Input() linkUrl = '';
  @Input() linkText = '';
  @Input() labelBlack = false;
  @Input() styleModifier = '';
  @Input() icon: PuiIcon =PuiIcon.ARROW_RIGHT_HAIR;
}
