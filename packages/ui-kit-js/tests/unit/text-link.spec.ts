import { newSpecPage } from '@stencil/core/testing';
import { TextLink } from '../../src/components/action/text-link/text-link';

describe('Component <p-text-link>', () => {

  it('builds', () => {
    expect(new TextLink()).toBeTruthy();
  });

  it('should render correctly in default mode with shadow dom', async () => {
    const page = await newSpecPage({
      components: [TextLink],
      html: `<p-text-link href="https://ui.porsche.com">Text Link</p-text-link>`,
    });
    expect(page.root.shadowRoot).toBeTruthy();
    expect(page.root.querySelector('.p-text-link')).toBeFalsy();
    expect(page.root.shadowRoot.querySelector('.p-text-link')).toBeTruthy();
    expect(page.root).toMatchSnapshot();
  });

  it('should render with href attribute', async () => {
    const page = await newSpecPage({
      components: [TextLink],
      html: `<p-text-link href="https://ui.porsche.com">Text Link</p-text-link>`,
    });
    expect(page.root.shadowRoot).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('[href="https://ui.porsche.com"]')).toBeTruthy();
  });

  it('should render with target attribute of "_blank"', async () => {
    const page = await newSpecPage({
      components: [TextLink],
      html: `<p-text-link href="https://ui.porsche.com" target="blank">Text Link</p-text-link>`,
    });
    expect(page.root.shadowRoot).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('[target="_blank"]')).toBeTruthy();
  });

  it('should render with download attribute of "picture"', async () => {
    const page = await newSpecPage({
      components: [TextLink],
      html: `<p-text-link href="https://ui.porsche.com" download="picture">Text Link</p-text-link>`,
    });
    expect(page.root.shadowRoot).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('[download="picture"]')).toBeTruthy();
  });

  it('should render with <span> tag instead of <a>', async () => {
    const page = await newSpecPage({
      components: [TextLink],
      html: `<p-text-link tag="span">Text Link</p-text-link>`,
    });
    expect(page.root.shadowRoot).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('span')).toBeTruthy();
  });


});
