import { Component, Element, h, Host, JSX, Method, Prop } from '@stencil/core';
import { addComponentCss } from './toast-styles';
import { ToastManager, toastManager, ToastManagerInternal } from './toast-manager';
import { Theme } from '../../../types';
import { ToastOffsetValue } from './toast-utils';
import { parseJSON } from './toast-utils';
import { getContentAriaAttributes } from './toast-utils';
import { getPrefixedTagNames } from '../../../utils';
import { getIconName } from '../inline-notification/inline-notification-utils';

@Component({
  tag: 'p-toast',
  shadow: true,
})
export class Toast {
  /** Adapts the toast-item color depending on the theme. */
  @Prop() public theme?: Theme = 'light';

  /** The offset of the toast-item. */
  @Prop() public offset?: ToastOffsetValue = { bottom: 55 };

  @Element() public host!: HTMLElement;

  private manager: ToastManagerInternal;
  private key = 0;

  /* eslint-disable @typescript-eslint/require-await */
  @Method()
  public async getManager(): Promise<ToastManager> {
    return this.manager;
  }
  /* eslint-enable @typescript-eslint/require-await */

  public connectedCallback(): void {
    // addComponentCss(this.host, parseJSON(this.offset));
    this.manager = toastManager.register(this.host);
    // eslint-disable-next-line no-console
    console.log('connectedCallback', this.manager);
  }

  public componentWillRender(): void {
    const { state } = this.manager.getToast() || {};
    this.key++;

    addComponentCss(this.host, state, this.theme, parseJSON(this.offset));
  }

  public componentDidRender(): void {
    this.manager.startToast();
  }

  public disconnectedCallback(): void {
    toastManager.unregister();
    // eslint-disable-next-line no-console
    console.log('disconnectedCallback', this.manager);
  }

  public render(): JSX.Element {
    const toastId = 'toast';
    const messageId = 'message';
    const PrefixedTagNames = getPrefixedTagNames(this.host);

    // eslint-disable-next-line no-console
    console.log('render', this.manager);
    const toast = this.manager.getToast();

    return (
      <Host>
        {toast && (
          <div key={this.key} class="root">
            <PrefixedTagNames.pIcon class="icon" name={getIconName(toast.state)} color="inherit" aria-hidden="true" />
            <PrefixedTagNames.pText id={messageId} class="content" {...getContentAriaAttributes(messageId)}>
              {toast.message}
            </PrefixedTagNames.pText>
            <PrefixedTagNames.pButtonPure
              class="close"
              type="button"
              icon="close"
              hideLabel={true}
              aria-controls={toastId}
              onClick={this.manager.dismissToast}
            >
              Close toast
            </PrefixedTagNames.pButtonPure>
          </div>
        )}
        <span key={this.key} class="progress" />
      </Host>
    );
  }
}
