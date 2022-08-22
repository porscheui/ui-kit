/* Auto Generated File */
import { PScroller } from '@porsche-design-system/components-react';

export const ScrollerPage = (): JSX.Element => {
  const style = `
    p-scroller {
      white-space: nowrap;
      max-width: 600px;
    }
    p-scroller > *:not(:last-child) {
      margin-right: 0.5rem;
    }
    p-scroller > button {
      font-size: 16px;
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: style }} />

      <div className="playground light" title="should render scroller">
        <PScroller>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
        </PScroller>
        <PScroller>
          <a href="#">Some link</a>
          <a href="#">Some link</a>
          <a href="#">Some link</a>
          <a href="#">Some link</a>
          <a href="#">Some link</a>
          <a href="#">Some link</a>
          <a href="#">Some link</a>
          <a href="#">Some link</a>
          <a href="#">Some link</a>
          <a href="#">Some link</a>
          <a href="#">Some link</a>
          <a href="#">Some link</a>
          <a href="#">Some link</a>
          <a href="#">Some link</a>
        </PScroller>
        <PScroller>
          <p>Paragraph</p>
          <p>Paragraph</p>
          <p>Paragraph</p>
          <p>Paragraph</p>
          <p>Paragraph</p>
          <p>Paragraph</p>
          <p>Paragraph</p>
          <p>Paragraph</p>
          <p>Paragraph</p>
          <p>Paragraph</p>
          <p>Paragraph</p>
          <p>Paragraph</p>
          <p>Paragraph</p>
          <p>Paragraph</p>
        </PScroller>
      </div>

      <div className="playground dark" title="should render scroller on dark theme">
        <PScroller theme="dark">
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
        </PScroller>
      </div>

      <div className="playground light-electric" title="should render scroller light-electric">
        <PScroller theme="light-electric">
          <button>Light electric</button>
          <button>Light electric</button>
          <button>Light electric</button>
          <button>Light electric</button>
          <button>Light electric</button>
          <button>Light electric</button>
          <button>Light electric</button>
        </PScroller>
      </div>

      <div className="playground dark-electric" title="should render scroller dark-electric">
        <PScroller theme="dark-electric">
          <button>Dark electric</button>
          <button>Dark electric</button>
          <button>Dark electric</button>
          <button>Dark electric</button>
          <button>Dark electric</button>
          <button>Dark electric</button>
          <button>Dark electric</button>
        </PScroller>
      </div>

      <div className="playground light surface" title="should render scroller gradientColorScheme surface on light background">
        <PScroller gradientColorScheme="surface">
          <button>Light surface</button>
          <button>Light surface</button>
          <button>Light surface</button>
          <button>Light surface</button>
          <button>Light surface</button>
          <button>Light surface</button>
          <button>Light surface</button>
        </PScroller>
      </div>

      <div className="playground dark surface" title="should render scroller gradientColorScheme surface on dark background">
        <PScroller theme="dark" gradientColorScheme="surface">
          <button>Dark surface</button>
          <button>Dark surface</button>
          <button>Dark surface</button>
          <button>Dark surface</button>
          <button>Dark surface</button>
          <button>Dark surface</button>
          <button>Dark surface</button>
        </PScroller>
      </div>

      <div className="playground" title="should render scroller with scroll indicator position top">
        <div style={{ height: '50px', border: '1px solid deeppink', maxWidth: '600px' }}>
          <PScroller scrollIndicatorPosition="top">
            <a href="#">Scroll indicator position top</a>
            <a href="#">Scroll indicator position top</a>
            <a href="#">Scroll indicator position top</a>
            <a href="#">Scroll indicator position top</a>
            <a href="#">Scroll indicator position top</a>
            <a href="#">Scroll indicator position top</a>
            <a href="#">Scroll indicator position top</a>
          </PScroller>
        </div>
      </div>

      <div className="playground light" title="should render scroller with scroll indicator size according to fontsize large">
        <PScroller style={{ fontSize: 'large' }}>
          <a href="#">Medium font</a>
          <a href="#">Medium font</a>
          <a href="#">Medium font</a>
          <a href="#">Medium font</a>
          <a href="#">Medium font</a>
          <a href="#">Medium font</a>
          <a href="#">Medium font</a>
        </PScroller>
      </div>

      <div className="playground light" title="should render scroller with scroll indicator size according to inherit size">
        <div style={{ fontSize: 'large' }}>
          <PScroller style={{ fontSize: 'inherit' }}>
            <a href="#">Size inherit</a>
            <a href="#">Size inherit</a>
            <a href="#">Size inherit</a>
            <a href="#">Size inherit</a>
            <a href="#">Size inherit</a>
            <a href="#">Size inherit</a>
            <a href="#">Size inherit</a>
          </PScroller>
        </div>
      </div>

      <div className="playground light" title="should render scroller only on screen size too small to show 8 buttons">
        <PScroller style={{ maxWidth: 'none' }}>
          <button>Without max width</button>
          <button>Without max width</button>
          <button>Without max width</button>
          <button>Without max width</button>
          <button>Without max width</button>
          <button>Without max width</button>
          <button>Without max width</button>
          <button>Without max width</button>
        </PScroller>
      </div>

      <div className="playground light" title="should render scroller only on screen size too small to show 8 buttons">
        <PScroller style={{ whiteSpace: 'normal' }}>
          <button>Button text that breaks line</button>
          <button>Button text that breaks line</button>
          <button>Button text that breaks line</button>
        </PScroller>
      </div>
    </>
  );
};
