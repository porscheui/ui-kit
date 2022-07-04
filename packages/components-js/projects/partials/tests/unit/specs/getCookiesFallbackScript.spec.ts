import { getCookiesFallbackScript } from '../../../src';
import { render } from '@testing-library/react';

const scriptCom = 'https://cdn.ui.porsche.com/porsche-design-system/fallbacks/cookies.[a-z0-9]{32}.js';
const scriptCn = 'https://cdn.ui.porsche.cn/porsche-design-system/fallbacks/cookies.[a-z0-9]{32}.js';

jest.mock('../../../src/shared');

describe('format: html', () => {
  it('should return script', () => {
    const result = getCookiesFallbackScript();
    const regex = new RegExp(scriptCom);

    expect(result).toMatch(regex);
  });

  it('should return script for china cdn', () => {
    const result = getCookiesFallbackScript({ cdn: 'cn', format: 'html' });
    const regex = new RegExp(scriptCn);

    expect(result).toMatch(regex);
  });
});

describe('format: jsx', () => {
  it('should return script', () => {
    const { container } = render(getCookiesFallbackScript({ format: 'jsx' }));
    const regex = new RegExp(scriptCom);

    expect(container.innerHTML).toMatch(regex);
  });

  it('should return script for china cdn', () => {
    const { container } = render(getCookiesFallbackScript({ cdn: 'cn', format: 'jsx' }));
    const regex = new RegExp(scriptCn);

    expect(container.innerHTML).toMatch(regex);
  });
});
