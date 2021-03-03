import { JSX, Component, Host, Prop, h } from '@stencil/core';
import { mapBreakpointPropToPrefixedClasses } from '../../../../utils';
import type { BreakpointCustomizable } from '../../../../types';

@Component({
  tag: 'p-grid-item',
  styleUrl: 'grid-item.scss',
  shadow: true,
})
export class GridItem {
  /** The size of the column. Can be between 1 and 12. Also defines the size of the column for specific breakpoints, like {base: 6, l: 3}. You always need to provide a base value when doing this. */
  @Prop() public size?: BreakpointCustomizable<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12> = 1;

  /** The offset of the column. Can be between 0 and 11. Also defines the offset of the column for specific breakpoints, like {base: 6, l: 3}. You always need to provide a base value when doing this. */
  @Prop() public offset?: BreakpointCustomizable<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11> = 0;

  public render(): JSX.Element {
    const gridItemClasses = {
      ...mapBreakpointPropToPrefixedClasses('size', this.size),
      ...(this.offset !== 0 && mapBreakpointPropToPrefixedClasses('offset', this.offset)),
    };

    return (
      <Host class={gridItemClasses}>
        <slot />
      </Host>
    );
  }
}
