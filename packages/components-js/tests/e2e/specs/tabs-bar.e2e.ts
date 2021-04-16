import { ConsoleMessage, ElementHandle, Page } from 'puppeteer';
import {
  addEventListener,
  expectedStyleOnFocus,
  getAttribute,
  getBrowser,
  getElementPositions,
  getElementStyle,
  getLifecycleStatus,
  getOutlineStyle,
  getProperty,
  getStyleOnFocus,
  initAddEventListener,
  isElementAtIndexFocused,
  reattachElement,
  removeAttribute,
  selectNode,
  setAttribute,
  setContentWithDesignSystem,
  waitForComponentsReady,
  waitForInheritedCSSTransition,
  waitForStencilLifecycle,
} from '../helpers';
import type { TabSize } from '@porsche-design-system/components/dist/types/types';

export const CSS_ANIMATION_DURATION = 1000;
export const FOCUS_PADDING = 8;
const TABS_SCROLL_PERCENTAGE = 0.2;

describe('tabs-bar', () => {
  let page: Page;
  beforeEach(async () => (page = await getBrowser().newPage()));
  afterEach(async () => await page.close());

  type InitOptions = {
    amount?: number;
    activeTabIndex?: number;
    size?: TabSize;
    isWrapped?: boolean;
    otherMarkup?: string;
    tag?: 'a' | 'button';
  };
  const clickHandlerScript = `
    <script>
      const tabsBar = document.querySelector('p-tabs-bar')
      tabsBar.addEventListener('tabChange', (tabChangeEvent) => {
          const { activeTabIndex } = tabChangeEvent.detail;
          tabChangeEvent.target.setAttribute('active-tab-index', activeTabIndex);
      });
    </script>`;
  const initTabsBar = async (opts?: InitOptions) => {
    const { amount = 8, activeTabIndex, size = 'small', isWrapped, otherMarkup = '', tag = 'button' } = opts ?? {};

    const attributes = tag === 'a' ? ' onclick="return false" href="#"' : '';
    const content = `<p-tabs-bar size="${size}" ${
      activeTabIndex !== undefined ? `active-tab-index="${activeTabIndex}"` : ''
    }>
  ${Array.from(Array(amount))
    .map((_, i) => `<${tag}${attributes}>Tab Button ${i + 1}</${tag}>`)
    .join('')}
</p-tabs-bar>${otherMarkup}`;

    await setContentWithDesignSystem(page, isWrapped ? `<div style="width: 300px">${content}</div>` : content);
  };

  const getHost = () => selectNode(page, 'p-tabs-bar');
  const getAllButtons = () => page.$$('button');
  const getAllLinks = () => page.$$('a');
  const getScrollArea = () => selectNode(page, 'p-tabs-bar >>> .scroll-area');
  const getStatusBar = () => selectNode(page, 'p-tabs-bar >>> .status-bar');
  const getGradientNext = () => selectNode(page, 'p-tabs-bar >>> .gradient--next');
  const getActionContainers = async () => {
    const actionPrev = await selectNode(page, 'p-tabs-bar >>> .action--prev');
    const actionNext = await selectNode(page, 'p-tabs-bar >>> .action--next');
    return { actionPrev, actionNext };
  };
  const getPrevNextButton = async () => {
    const prevButton = await selectNode(page, 'p-tabs-bar >>> .action--prev > p-button-pure');
    const nextButton = await selectNode(page, 'p-tabs-bar >>> .action--next > p-button-pure');
    return { prevButton, nextButton };
  };
  const getScrollLeft = (element: ElementHandle) => getProperty(element, 'scrollLeft');
  const getOffsetLeft = (element: ElementHandle) => getProperty(element, 'offsetLeft');
  const getOffsetWidth = (element: ElementHandle) => getProperty(element, 'offsetWidth');
  const getClassList = async (element: ElementHandle): Promise<string[]> =>
    Object.values(await getProperty(element, 'classList'));

  const getScrollDistance = (scrollAreaWidth: number): number => Math.round(scrollAreaWidth * TABS_SCROLL_PERCENTAGE);
  const getStatusBarWidth = async (statusBar: ElementHandle) => await getElementStyle(statusBar, 'width');

  const clickElement = async (el: ElementHandle) => {
    await el.click();
    await waitForStencilLifecycle(page);
    await page.waitForTimeout(CSS_ANIMATION_DURATION);
  };

  describe('activeTabIndex', () => {
    it('should have a statusBar width of 0 when no activeTabIndex is set', async () => {
      await setContentWithDesignSystem(page, '');

      // initialize tabs bar to be able to see the state right after initialization
      await page.evaluate(() => {
        const tabsBar = document.createElement('p-tabs-bar');
        const newTabsButton = document.createElement('button');
        tabsBar.appendChild(newTabsButton);
        document.body.appendChild(tabsBar);
      });
      await waitForComponentsReady(page);

      expect(await getStatusBarWidth(await getStatusBar())).toBe('0px');
    });

    it('should render no active tab if no activeTabIndex is set ', async () => {
      await initTabsBar({ amount: 3 });
      const allButtons = await getAllButtons();
      await page.waitForTimeout(40); // class gets set through js, this takes a little time

      expect(await getAttribute(allButtons[0], 'aria-selected')).toBe('false');
      expect(await getAttribute(allButtons[1], 'aria-selected')).toBe('false');
      expect(await getAttribute(allButtons[2], 'aria-selected')).toBe('false');
    });

    it('should render correct active tab if activeTabIndex is set ', async () => {
      await initTabsBar({ amount: 3, activeTabIndex: 1 });
      const allButtons = await getAllButtons();
      await page.waitForTimeout(40); // class gets set through js, this takes a little time

      expect(await getAttribute(allButtons[0], 'aria-selected')).toBe('false');
      expect(await getAttribute(allButtons[1], 'aria-selected')).toBe('true');
      expect(await getAttribute(allButtons[2], 'aria-selected')).toBe('false');
    });

    it('should render no active tab if activeTabIndex is removed ', async () => {
      await initTabsBar({ amount: 3, activeTabIndex: 1 });
      const allButtons = await getAllButtons();
      const host = await getHost();
      await page.waitForTimeout(40); // class gets set through js, this takes a little time

      expect(await getAttribute(allButtons[0], 'aria-selected')).toBe('false');
      expect(await getAttribute(allButtons[1], 'aria-selected')).toBe('true');
      expect(await getAttribute(allButtons[2], 'aria-selected')).toBe('false');

      await removeAttribute(host, 'active-tab-index');
      await waitForStencilLifecycle(page);
      await page.waitForTimeout(40); // class gets set through js, this takes a little time

      expect(await getAttribute(allButtons[0], 'aria-selected')).toBe('false');
      expect(await getAttribute(allButtons[1], 'aria-selected')).toBe('false');
      expect(await getAttribute(allButtons[2], 'aria-selected')).toBe('false');
    });
  });

  describe('slotted content changes', () => {
    it('should adjust status bar style when name of tab is changed', async () => {
      await initTabsBar({ amount: 3, activeTabIndex: 0 });
      const [firstButton] = await getAllButtons();
      const statusBar = await getStatusBar();
      await page.waitForTimeout(CSS_ANIMATION_DURATION);

      expect(Math.floor((await getElementPositions(page, statusBar)).right)).toEqual(
        95,
        'should have correct initial position'
      );

      await firstButton.evaluate((el) => (el.innerHTML = 'New long button mame on this button'));
      await waitForStencilLifecycle(page);
      await page.waitForTimeout(CSS_ANIMATION_DURATION);

      expect(Math.floor((await getElementPositions(page, statusBar)).right)).toEqual(
        265,
        'should have correct position after button name change'
      );
    });

    it('should adjust status bar style when new tab element is added and clicked', async () => {
      await initTabsBar({ amount: 1, activeTabIndex: 0, otherMarkup: clickHandlerScript });
      const statusBar = await getStatusBar();

      //add a new button
      await page.evaluate(() => {
        const tabsBar = document.querySelector('p-tabs-bar');
        const tab = document.createElement('button');
        tab.innerText = `Added Tab Text`;
        tabsBar.append(tab);
      });
      await waitForStencilLifecycle(page);
      await page.waitForTimeout(CSS_ANIMATION_DURATION);

      expect(Math.floor((await getElementPositions(page, statusBar)).left)).toEqual(
        8,
        'should have correct position after adding a new button'
      );

      const [, secondButton] = await getAllButtons();
      await clickElement(secondButton);

      expect(Math.floor((await getElementPositions(page, statusBar)).left)).toEqual(
        115,
        'should have correct position after click'
      );
    });

    it('should stay selected and have same status bar style when tab after current active tab is removed', async () => {
      await initTabsBar({ amount: 3, activeTabIndex: 1 });
      const statusBar = await getStatusBar();

      expect(Math.floor((await getElementPositions(page, statusBar)).left)).toEqual(
        111,
        'should have correct position before removing a button'
      );

      await page.evaluate(() => {
        const tabsBar = document.querySelector('p-tabs-bar');
        tabsBar.removeChild(tabsBar.children[2]);
      });

      await waitForStencilLifecycle(page);
      await page.waitForTimeout(CSS_ANIMATION_DURATION);
      const [, secondButton] = await getAllButtons();

      expect(await getAttribute(secondButton, 'tabindex')).toBe('0');
      expect(await getAttribute(secondButton, 'aria-selected')).toBe('true');
      expect(Math.floor((await getElementPositions(page, statusBar)).left)).toEqual(
        111,
        'should have correct position after removing a button'
      );
    });

    it('should reset tabindex and status bar styles when active tab on last position is removed', async () => {
      await initTabsBar({ amount: 3, activeTabIndex: 2 });
      const statusBar = await getStatusBar();
      const [firstButton] = await getAllButtons();

      await page.evaluate(() => {
        const tabsBar = document.querySelector('p-tabs-bar');
        tabsBar.removeChild(tabsBar.children[2]);
      });

      await waitForStencilLifecycle(page);
      await page.waitForTimeout(CSS_ANIMATION_DURATION);

      expect(await getStatusBarWidth(statusBar)).toBe('0px');
      expect(await getAttribute(firstButton, 'tabindex')).toBe('0');
      expect(await getAttribute(firstButton, 'aria-selected')).toBe('false');
      expect(Math.floor((await getElementPositions(page, statusBar)).left)).toEqual(
        8,
        'should have correct position after removing last active button'
      );
    });

    it('should reset tabindex when last tab is active and a tab is removed in the middle', async () => {
      await initTabsBar({ amount: 3, activeTabIndex: 2 });
      const statusBar = await getStatusBar();

      await page.evaluate(() => {
        const tabsBar = document.querySelector('p-tabs-bar');
        tabsBar.removeChild(tabsBar.children[1]);
      });

      await waitForStencilLifecycle(page);
      await page.waitForTimeout(CSS_ANIMATION_DURATION);

      const [firstButton, secondButton] = await getAllButtons();

      expect(await getAttribute(firstButton, 'tabindex')).toBe('0');
      expect(await getAttribute(firstButton, 'aria-selected')).toBe('false');
      expect(await getAttribute(secondButton, 'tabindex')).toBe('-1');
      expect(await getAttribute(secondButton, 'aria-selected')).toBe('false');
      expect(Math.floor((await getElementPositions(page, statusBar)).left)).toEqual(
        8,
        'should have correct position after removing button in the middle'
      );
      expect(await getStatusBarWidth(statusBar)).toBe('0px');
    });

    it('should set tabindex and aria-selected on next tab when active tab in the middle is removed', async () => {
      await initTabsBar({ amount: 3, activeTabIndex: 1 });
      const statusBar = await getStatusBar();

      await page.evaluate(() => {
        const tabsBar = document.querySelector('p-tabs-bar');
        tabsBar.removeChild(tabsBar.children[1]);
      });

      await waitForStencilLifecycle(page);
      await page.waitForTimeout(CSS_ANIMATION_DURATION);

      const [, secondButton] = await getAllButtons();

      expect(await getAttribute(secondButton, 'tabindex')).toBe('0');
      expect(Math.floor((await getElementPositions(page, statusBar)).left)).toEqual(
        111,
        'should have correct position after removing active button in the middle'
      );
      expect(await getStatusBarWidth(statusBar)).toBe('87px');
    });
  });

  describe('scrollArea', () => {
    it('should scroll by 20% on button prev/next click', async () => {
      await initTabsBar({ isWrapped: true, activeTabIndex: 0 });
      const { prevButton, nextButton } = await getPrevNextButton();
      const scrollArea = await getScrollArea();
      const scrollAreaWidth = await getOffsetWidth(scrollArea);
      const scrollDistance = await getScrollDistance(+scrollAreaWidth);

      expect(await getScrollLeft(scrollArea)).toEqual(0);

      await clickElement(nextButton);
      expect(await getScrollLeft(scrollArea)).toEqual(scrollDistance);

      await clickElement(nextButton);
      expect(await getScrollLeft(scrollArea)).toEqual(scrollDistance * 2);

      await clickElement(prevButton);
      expect(await getScrollLeft(scrollArea)).toEqual(scrollDistance);

      await clickElement(prevButton);
      expect(await getScrollLeft(scrollArea)).toEqual(0);
    });

    it('should scroll to max scroll-position on multiple next clicks', async () => {
      await initTabsBar({ amount: 6, isWrapped: true, activeTabIndex: 0 });
      const [firstButton] = await getAllButtons();
      const { nextButton } = await getPrevNextButton();
      const scrollArea = await getScrollArea();

      expect(await getScrollLeft(scrollArea)).toEqual(0);

      await clickElement(nextButton);
      await clickElement(nextButton);
      await clickElement(nextButton);
      await clickElement(nextButton);
      await clickElement(nextButton);

      const scrollPosition = await getScrollLeft(scrollArea);

      await clickElement(firstButton);
      const scrollMax = await scrollArea.evaluate((el): number => {
        el.scrollTo({ left: el.scrollWidth });
        return el.scrollLeft;
      });

      expect(scrollPosition).toEqual(scrollMax);
    });

    it('should scroll to correct position initially', async () => {
      await initTabsBar({ activeTabIndex: 3, isWrapped: true });
      const allButtons = await getAllButtons();
      const selectedButtonOffset = await getOffsetLeft(allButtons[3]);
      const gradientWidth = await getOffsetWidth(await getGradientNext());
      const scrollArea = await getScrollArea();
      const scrollDistance = +selectedButtonOffset - +gradientWidth + FOCUS_PADDING;

      await waitForStencilLifecycle(page);

      expect(await getScrollLeft(scrollArea)).toEqual(scrollDistance);
    });

    it('should scroll to correct position on tab click', async () => {
      await initTabsBar({ isWrapped: true, activeTabIndex: 0, otherMarkup: clickHandlerScript });
      const [, , , button4, button5] = await getAllButtons();
      const gradient = await getGradientNext();
      const gradientWidth = await getOffsetWidth(gradient);
      const scrollArea = await getScrollArea();
      const scrollAreaWidth = await getOffsetWidth(scrollArea);

      expect(await getScrollLeft(scrollArea)).toEqual(0);

      await clickElement(button5);
      const button5offset = await getOffsetLeft(button5);
      const scrollDistanceRight = +button5offset - +gradientWidth + FOCUS_PADDING;
      expect(await getScrollLeft(scrollArea)).toEqual(scrollDistanceRight);

      await clickElement(button4);
      const button4offset = await getOffsetLeft(button4);
      const buttonWidth = await getOffsetWidth(button4);
      const scrollDistanceLeft = +button4offset + +buttonWidth + +gradientWidth - +scrollAreaWidth;
      expect(await getScrollLeft(scrollArea)).toEqual(scrollDistanceLeft);
    });

    it('should keep old selected tab on scrollArea click', async () => {
      await initTabsBar({ amount: 4, activeTabIndex: 3 });
      const allButtons = await getAllButtons();
      const scrollArea = await getScrollArea();

      await page.waitForTimeout(40); // class gets set through js, this takes a little time
      expect(await getAttribute(allButtons[0], 'aria-selected')).toBe('false');
      expect(await getAttribute(allButtons[3], 'aria-selected')).toBe('true');

      await clickElement(scrollArea);
      expect(await getAttribute(allButtons[0], 'aria-selected')).toBe('false');
      expect(await getAttribute(allButtons[3], 'aria-selected')).toBe('true');
    });

    it('should have same offsetLeft on statusbar and active tab', async () => {
      await initTabsBar({ amount: 6, activeTabIndex: 2, isWrapped: true, otherMarkup: clickHandlerScript });
      const [firstButton, , thirdButton] = await getAllButtons();
      const statusBar = await getStatusBar();
      const thirdButtonPosition = (await getElementPositions(page, thirdButton)).left;

      expect(Math.round(thirdButtonPosition)).toEqual(Math.floor((await getElementPositions(page, statusBar)).left));

      await clickElement(firstButton);

      expect((await getElementPositions(page, firstButton)).left).toEqual(
        Math.floor((await getElementPositions(page, statusBar)).left),
        'should have correct offsetLeft after click'
      );
    });

    it('should have offsetLeft on statusbar as the center of unset tab', async () => {
      await initTabsBar({ amount: 6, activeTabIndex: 0, isWrapped: true, otherMarkup: clickHandlerScript });
      const [firstButton, , thirdButton] = await getAllButtons();
      const statusBar = await getStatusBar();
      const firstButtonPosition = (await getElementPositions(page, firstButton)).left;
      const buttonWidth = await getOffsetWidth(thirdButton);
      const buttonCenter = +buttonWidth / 2;
      const host = await getHost();
      await removeAttribute(host, 'active-tab-index');
      await waitForStencilLifecycle(page);
      await page.waitForTimeout(CSS_ANIMATION_DURATION);

      expect(Math.floor(firstButtonPosition + buttonCenter)).toEqual(
        Math.floor((await getElementPositions(page, statusBar)).left)
      );

      await clickElement(thirdButton);
      await page.waitForTimeout(CSS_ANIMATION_DURATION);

      expect(Math.floor((await getElementPositions(page, thirdButton)).left)).toEqual(
        Math.floor((await getElementPositions(page, statusBar)).left),
        'should have correct offset width after click on third button'
      );
    });

    it('should have correct scroll position after tab click and arrow left', async () => {
      await initTabsBar({ amount: 8, isWrapped: true, activeTabIndex: 0, otherMarkup: clickHandlerScript });
      const { prevButton } = await getPrevNextButton();
      const allButtons = await getAllButtons();
      const button3 = allButtons[2];
      const scrollArea = await getScrollArea();
      const scrollAreaWidth = await getOffsetWidth(scrollArea);
      const scrollDistance = await getScrollDistance(+scrollAreaWidth);

      const gradient = await getGradientNext();
      const gradientWidth = await getOffsetWidth(gradient);

      await clickElement(button3);
      const button3offset = await getOffsetLeft(button3);
      const scrollDistanceLeft = +button3offset - +gradientWidth + FOCUS_PADDING;

      expect(await getScrollLeft(scrollArea)).toBe(scrollDistanceLeft, 'scroll left active button after click');

      await clickElement(prevButton);
      expect(await getScrollLeft(scrollArea)).toBe(
        scrollDistanceLeft - scrollDistance,
        'scroll left active button after first prev click'
      );

      await clickElement(prevButton);
      expect(await getScrollLeft(scrollArea)).toBe(0, 'scroll left active button after second prev click');
    });

    it('should have correct scroll position after tab click and arrow right', async () => {
      await initTabsBar({ amount: 8, isWrapped: true, activeTabIndex: 7, otherMarkup: clickHandlerScript });
      const { nextButton } = await getPrevNextButton();
      const allButtons = await getAllButtons();
      const button7 = allButtons[6];

      const scrollArea = await getScrollArea();
      const scrollAreaWidth = await getOffsetWidth(scrollArea);

      const gradient = await getGradientNext();
      const gradientWidth = await getOffsetWidth(gradient);

      const maxScrollDistance = await getScrollLeft(scrollArea);

      await clickElement(button7);
      const button7offset = await getOffsetLeft(button7);
      const buttonWidth = await getOffsetWidth(button7);
      const scrollDistanceRight = +button7offset + +buttonWidth + +gradientWidth - +scrollAreaWidth;

      expect(await getScrollLeft(scrollArea)).toBe(scrollDistanceRight, 'scroll left active button after click');

      await clickElement(nextButton);
      expect(await getScrollLeft(scrollArea)).toBe(maxScrollDistance, 'scroll left active button after prev click');
    });

    describe('when not wrapped', () => {
      it('should set correct statusBarStyle when no activeTabIndex is set initially', async () => {
        await initTabsBar({ amount: 3 });
        const statusBar = await getStatusBar();

        expect(await getOffsetWidth(statusBar)).toBe(0);
      });

      it('should set correct statusBarStyle for activeTabIndex 0', async () => {
        await initTabsBar({ amount: 3, activeTabIndex: 0 });
        const [firstButton] = await getAllButtons();
        const statusBar = await getStatusBar();

        expect(await getOffsetWidth(statusBar)).toBe(await getOffsetWidth(firstButton));
      });

      it('should set correct statusBarStyle initially with last index', async () => {
        await initTabsBar({ amount: 3, activeTabIndex: 2 });
        const [lastButton] = (await getAllButtons()).slice(-1);
        const statusBar = await getStatusBar();

        expect(await getOffsetWidth(statusBar)).toBe(await getOffsetWidth(lastButton));
      });
    });

    describe('when wrapped', () => {
      it('should set correct statusBarStyle when no activeTabIndex is set initially', async () => {
        await initTabsBar({ isWrapped: true });
        const statusBar = await getStatusBar();

        expect(await getOffsetWidth(statusBar)).toBe(0);
      });

      it('should set correct statusBarStyle for activeTabIndex 0', async () => {
        await initTabsBar({ isWrapped: true, activeTabIndex: 0 });
        const [firstButton] = await getAllButtons();
        const statusBar = await getStatusBar();

        expect(await getOffsetWidth(statusBar)).toBe(await getOffsetWidth(firstButton));
      });

      it('should set correct statusBarStyle initially with last index', async () => {
        await initTabsBar({ isWrapped: true, activeTabIndex: 7 });
        const [lastButton] = (await getAllButtons()).slice(-1);
        const statusBar = await getStatusBar();

        expect(await getOffsetWidth(statusBar)).toBe(await getOffsetWidth(lastButton));
      });
    });
  });

  describe('keyboard', () => {
    it('should render focus on first tab when no tab is selected on keyboard "tab" press', async () => {
      await initTabsBar({ amount: 3 });
      const getButtonFocus = async () => {
        const snapshot = await page.accessibility.snapshot();
        const button = snapshot.children[0];
        return button.focused;
      };
      expect(await getButtonFocus()).toBeUndefined();

      await page.keyboard.press('Tab');

      expect(await getButtonFocus()).toBe(true);
    });
    it('should render focus on selected tab on keyboard "tab" press', async () => {
      await initTabsBar({ amount: 3, activeTabIndex: 0 });
      const getButtonFocus = async () => {
        const snapshot = await page.accessibility.snapshot();
        const button = snapshot.children[0];
        return button.focused;
      };
      expect(await getButtonFocus()).toBeUndefined();

      await page.keyboard.press('Tab');

      expect(await getButtonFocus()).toBe(true);
    });

    it('should render focus on content on keyboard "tab" press', async () => {
      await initTabsBar({ amount: 3, otherMarkup: '<p-text>Hallo <a href="#">Link</a></p-text>', activeTabIndex: 0 });
      expect(await isElementAtIndexFocused(page, 4)).toBeFalsy();

      await page.keyboard.press('Tab');
      expect(await isElementAtIndexFocused(page, 4)).toBeFalsy();
      await page.keyboard.press('Tab');

      expect(await isElementAtIndexFocused(page, 4)).toBe(true);
    });

    it('should render correct focusedTab on arrow-key press', async () => {
      await initTabsBar({ amount: 3, activeTabIndex: 0 });
      expect(await isElementAtIndexFocused(page, 0)).toBeFalsy();

      await page.keyboard.press('Tab');
      await waitForStencilLifecycle(page);

      expect(await isElementAtIndexFocused(page, 0)).toBeTrue();

      await page.keyboard.press('ArrowRight');
      await waitForStencilLifecycle(page);

      expect(await isElementAtIndexFocused(page, 0)).toBeFalsy();
      expect(await isElementAtIndexFocused(page, 1)).toBeTrue();

      await page.keyboard.press('ArrowLeft');
      await waitForStencilLifecycle(page);

      expect(await isElementAtIndexFocused(page, 0)).toBeTrue();
      expect(await isElementAtIndexFocused(page, 1)).toBeFalsy();
    });

    it('should render correct active tab on first/last or home/end press', async () => {
      await initTabsBar({ amount: 3, activeTabIndex: 1 });
      expect(await isElementAtIndexFocused(page, 2)).toBeFalsy();

      await page.keyboard.press('Tab');
      await page.keyboard.press('End');
      await waitForStencilLifecycle(page);

      expect(await isElementAtIndexFocused(page, 2)).toBeTrue();

      await page.keyboard.press('Home');
      await waitForStencilLifecycle(page);

      expect(await isElementAtIndexFocused(page, 0)).toBeTrue();
      expect(await isElementAtIndexFocused(page, 2)).toBeFalsy();
    });

    it('should render correct active tab on focus change and enter press', async () => {
      await initTabsBar({ amount: 3, activeTabIndex: 0, otherMarkup: clickHandlerScript });
      const [firstButton, secondButton] = await getAllButtons();

      expect(await getAttribute(firstButton, 'aria-selected')).toBe('true');
      expect(await getAttribute(secondButton, 'aria-selected')).toBe('false');

      await page.keyboard.press('Tab');
      await page.keyboard.press('ArrowRight');
      await page.keyboard.press('Enter');
      await waitForStencilLifecycle(page);

      expect(await getAttribute(firstButton, 'aria-selected')).toBe('false');
      expect(await getAttribute(secondButton, 'aria-selected')).toBe('true');
    });

    it('should have correct scroll-position on keyboard arrow press when wrapped by p-tabs', async () => {
      await setContentWithDesignSystem(
        page,
        `
        <div style="width: 300px">
          <p-tabs>
            <p-tabs-item label="Tab Button 1">Content 1</p-tabs-item>
            <p-tabs-item label="Tab Button 2">Content 2</p-tabs-item>
            <p-tabs-item label="Tab Button 3">Content 3</p-tabs-item>
            <p-tabs-item label="Tab Button 4">Content 4</p-tabs-item>
            <p-tabs-item label="Tab Button 5">Content 5</p-tabs-item>
            <p-tabs-item label="Tab Button 6">Content 6</p-tabs-item>
            <p-tabs-item label="Tab Button 7">Content 7</p-tabs-item>
            <p-tabs-item label="Tab Button 8">Content 8</p-tabs-item>
          </p-tabs>
        </div>`
      );
      const allButtons = await (await selectNode(page, 'p-tabs >>> p-tabs-bar')).$$('button');
      const gradientNext = await selectNode(page, 'p-tabs >>> p-tabs-bar >>> .gradient--next');
      const gradientWidth = await getOffsetWidth(gradientNext);
      const scrollArea = await selectNode(page, 'p-tabs >>> p-tabs-bar >>> .scroll-area');
      const scrollAreaWidth = await getOffsetWidth(scrollArea);

      expect(await getScrollLeft(scrollArea)).toEqual(0);

      const pressKey = async (key: string) => {
        await page.keyboard.press(key);
        await page.waitForTimeout(CSS_ANIMATION_DURATION);
      };

      await pressKey('Tab');
      await pressKey('ArrowRight');
      await pressKey('ArrowRight');
      await pressKey('ArrowRight');
      await pressKey('ArrowRight');

      const button5offset = await getOffsetLeft(allButtons[4]);
      const scrollDistanceRight = +button5offset - +gradientWidth + FOCUS_PADDING;
      expect(await getScrollLeft(scrollArea)).toEqual(scrollDistanceRight);

      await pressKey('ArrowLeft');

      const button4offset = await getOffsetLeft(allButtons[3]);
      const button4width = await getOffsetWidth(allButtons[3]);
      const scrollDistanceLeft = +button4offset + +button4width + +gradientWidth - +scrollAreaWidth;
      expect(await getScrollLeft(scrollArea)).toEqual(scrollDistanceLeft);
    });
  });

  describe('events', () => {
    beforeEach(async () => await initAddEventListener(page));

    it('should trigger event on button click', async () => {
      await initTabsBar({ amount: 3, activeTabIndex: 1 });
      const host = await selectNode(page, 'p-tabs-bar');
      const [firstButton, secondButton, thirdButton] = await getAllButtons();
      let eventCounter = 0;
      await addEventListener(host, 'tabChange', () => eventCounter++);

      // Remove and re-attach component to check if events are duplicated / fire at all
      await reattachElement(page, 'p-tabs-bar');

      await firstButton.click();
      await waitForStencilLifecycle(page);

      expect(eventCounter).toBe(1);

      await secondButton.click();
      await waitForStencilLifecycle(page);

      expect(eventCounter).toBe(2);

      await thirdButton.click();
      await waitForStencilLifecycle(page);

      expect(eventCounter).toBe(3);
    });

    it('should not dispatch event initially with valid activeTabIndex', async () => {
      const COUNTER_KEY = 'pdsEventCounter';
      await setContentWithDesignSystem(page, ''); // empty page

      // render p-tabs with attached event listener at once
      await page.evaluate((COUNTER_KEY: string) => {
        const el = document.createElement('p-tabs-bar');

        Array.from(Array(2)).forEach((_, i) => {
          const child = document.createElement('button');
          child.innerText = `Tab ${i + 1}`;
          el.appendChild(child);
        });

        // count events in browser
        window[COUNTER_KEY] = 0;
        el.addEventListener('tabChange', () => window[COUNTER_KEY]++);

        document.body.appendChild(el);
      }, COUNTER_KEY);

      await waitForStencilLifecycle(page);

      // retrieve counted events from browser
      const getCountedEvents = (): Promise<number> =>
        page.evaluate((COUNTER_KEY: string) => window[COUNTER_KEY], COUNTER_KEY);

      expect(await getCountedEvents()).toBe(0);

      const [, secondButton] = await getAllButtons();
      await secondButton.click();
      await waitForStencilLifecycle(page);

      expect(await getCountedEvents()).toBe(1);
    });
  });

  describe('next/prev buttons', () => {
    const hiddenClass = 'action--hidden';
    const tabSizes: TabSize[] = ['small', 'medium'];

    tabSizes.forEach((size) => {
      describe(`size = ${size} `, () => {
        it('should not show prev/next buttons only on vertical scroll', async () => {
          await initTabsBar({ amount: 5, activeTabIndex: 1, size, otherMarkup: '<div style="height: 120vh"></div>' });
          const { actionPrev, actionNext } = await getActionContainers();

          await page.evaluate(() => window.scroll(0, 20));
          await waitForStencilLifecycle(page);

          expect(await getClassList(actionPrev)).toContain(hiddenClass);
          expect(await getClassList(actionNext)).toContain(hiddenClass);
        });

        it('should only show next button', async () => {
          await initTabsBar({ amount: 4, size, isWrapped: true, activeTabIndex: 0 });
          const { actionPrev, actionNext } = await getActionContainers();

          expect(await getClassList(actionNext)).not.toContain(hiddenClass);
          expect(await getClassList(actionPrev)).toContain(hiddenClass);
        });

        it('should only show prev button', async () => {
          await initTabsBar({ amount: 20, activeTabIndex: 19, size, isWrapped: true });
          const { actionPrev, actionNext } = await getActionContainers();

          expect(await getClassList(actionNext)).toContain(hiddenClass);
          expect(await getClassList(actionPrev)).not.toContain(hiddenClass);
        });

        it('should show prev and next button', async () => {
          await initTabsBar({ amount: 7, activeTabIndex: 1, size, isWrapped: true });
          const { actionPrev, actionNext } = await getActionContainers();

          expect(await getClassList(actionNext)).not.toContain(hiddenClass);
          expect(await getClassList(actionPrev)).not.toContain(hiddenClass);
        });

        it('should not show prev/next buttons without children', async () => {
          await setContentWithDesignSystem(page, `<p-tabs-bar active-tab-index="0" size="${size}"></p-tabs-bar>`);
          const { actionPrev, actionNext } = await getActionContainers();

          expect(await getClassList(actionNext)).toContain(hiddenClass);
          expect(await getClassList(actionPrev)).toContain(hiddenClass);
        });

        it('should have label of prev/next buttons in dom', async () => {
          await initTabsBar({ size, activeTabIndex: 0 });

          const { nextButton, prevButton } = await getPrevNextButton();

          expect(await getProperty(prevButton, 'innerHTML')).toBe('prev');
          expect(await getProperty(nextButton, 'innerHTML')).toBe('next');
        });

        it('should not show prev/next buttons only on vertical scroll', async () => {
          await initTabsBar({ amount: 5, activeTabIndex: 1, size, otherMarkup: '<div style="height: 120vh"></div>' });
          const { actionPrev, actionNext } = await getActionContainers();

          await page.evaluate(() => window.scroll(0, 20));
          await waitForStencilLifecycle(page);

          expect(await getClassList(actionPrev)).toContain(hiddenClass);
          expect(await getClassList(actionNext)).toContain(hiddenClass);
        });
      });
    });

    describe('gradient next rounding edge case', () => {
      // There seems to be an rounding issue that causes the <button> elements to exceed the scroll container,
      // therefore the trigger gets pushed outside and the gradient is always shown.
      // To ensure the buttons exceed the width of the wrapping div we need to assign static width values.
      const DECIMAL_FACTOR = 0.1;
      for (let i = 150; i <= 151; i = i + DECIMAL_FACTOR) {
        it(`should not show actionNext for second button with a width of ${i}px`, async () => {
          const style = `style="width:${i}px"`;

          await setContentWithDesignSystem(
            page,
            `
              <div style="width: 300px">
                <p-tabs-bar size="medium" active-tab-index="1">
                  <button style="width: 150px" type="button">A</button>
                  <button ${style} type="button">B</button>
                </p-tabs-bar>
              </div>`
          );
          const { actionNext } = await getActionContainers();

          expect(await getClassList(actionNext)).toContain(hiddenClass, `On size ${i}`);
        });
      }
    });
  });

  describe('errors', () => {
    const getErrorsAmount = (messages: ConsoleMessage[]) => messages.filter((x) => x.type() === 'error').length;

    it('should not cause TypeError within scrollActiveTabIntoView', async () => {
      const consoleMessages: ConsoleMessage[] = [];
      page.on('console', (msg) => {
        consoleMessages.push(msg);
        if (msg.type() === 'error') {
          const { description } = msg.args()[0]['_remoteObject'];
          if (description) {
            console.log(description);
          }
        }
      });

      await setContentWithDesignSystem(page, ''); // empty page
      await page.evaluate(() => {
        const el = document.createElement('p-tabs-bar');
        el.setAttribute('active-tab-index', '-1');

        Array.from(Array(2)).forEach((_, i) => {
          const child = document.createElement('button');
          child.innerText = `Content ${i + 1}`;
          el.appendChild(child);
        });
        document.body.appendChild(el);
      });

      await waitForStencilLifecycle(page);
      expect(getErrorsAmount(consoleMessages)).toBe(0);

      await page.evaluate(() => console.error('test error'));
      expect(getErrorsAmount(consoleMessages)).toBe(1);
    });

    it('should not crash without children', async () => {
      const consoleMessages: ConsoleMessage[] = [];
      page.on('console', (msg) => {
        consoleMessages.push(msg);
        if (msg.type() === 'error') {
          const { description } = msg.args()[0]['_remoteObject'];
          if (description) {
            console.log(description);
          }
        }
      });

      await setContentWithDesignSystem(page, `<p-tabs-bar active-tab-index="0"></p-tabs-bar>`);
      expect(getErrorsAmount(consoleMessages)).toBe(0);

      await page.evaluate(() => console.error('test error'));
      expect(getErrorsAmount(consoleMessages)).toBe(1);
    });
  });

  describe('focus state', () => {
    it('should be shown by keyboard navigation only with buttons', async () => {
      await initTabsBar({ amount: 3, activeTabIndex: 0, otherMarkup: clickHandlerScript });

      const [, secondButton] = await getAllButtons();
      const hidden = expectedStyleOnFocus({ color: 'transparent', offset: '1px' });
      const visible = expectedStyleOnFocus({ color: 'hover', offset: '1px' });

      expect(await getOutlineStyle(secondButton)).toBe(hidden);

      await secondButton.click();
      await waitForInheritedCSSTransition(page);

      expect(await getOutlineStyle(secondButton)).toBe(hidden);

      await page.keyboard.down('ShiftLeft');
      await page.keyboard.press('Tab');
      await page.keyboard.up('ShiftLeft');
      await page.keyboard.press('Tab');

      expect(await getOutlineStyle(secondButton)).toBe(visible);
    });

    it('should be shown by keyboard navigation only with anchors', async () => {
      await initTabsBar({ amount: 3, tag: 'a', activeTabIndex: 0, otherMarkup: clickHandlerScript });

      const [, secondLink] = await getAllLinks();
      const hidden = expectedStyleOnFocus({ color: 'transparent', offset: '1px' });
      const visible = expectedStyleOnFocus({ color: 'hover', offset: '1px' });

      expect(await getOutlineStyle(secondLink)).toBe(hidden);

      await secondLink.click();
      await waitForInheritedCSSTransition(page);

      expect(await getOutlineStyle(secondLink)).toBe(hidden);

      await page.keyboard.down('ShiftLeft');
      await page.keyboard.press('Tab');
      await page.keyboard.up('ShiftLeft');
      await page.keyboard.press('Tab');

      expect(await getOutlineStyle(secondLink)).toBe(visible);
    });

    it('should show outline of slotted <button> when it is focused', async () => {
      await initTabsBar({ amount: 3, activeTabIndex: 0 });

      const host = await getHost();
      const allButtons = await getAllButtons();

      expect(await getStyleOnFocus(allButtons[0])).toBe(expectedStyleOnFocus({ color: 'active', offset: '1px' }));
      expect(await getStyleOnFocus(allButtons[1])).toBe(expectedStyleOnFocus({ offset: '1px' }));
      expect(await getStyleOnFocus(allButtons[2])).toBe(expectedStyleOnFocus({ offset: '1px' }));

      await setAttribute(host, 'theme', 'dark');
      await waitForStencilLifecycle(page);
      await waitForInheritedCSSTransition(page);

      expect(await getStyleOnFocus(allButtons[0])).toBe(
        expectedStyleOnFocus({ color: 'active', theme: 'dark', offset: '1px' })
      );
      expect(await getStyleOnFocus(allButtons[1])).toBe(expectedStyleOnFocus({ theme: 'dark', offset: '1px' }));
      expect(await getStyleOnFocus(allButtons[2])).toBe(expectedStyleOnFocus({ theme: 'dark', offset: '1px' }));
    });

    it('should show outline of slotted <a> when it is focused', async () => {
      await initTabsBar({ amount: 3, tag: 'a', activeTabIndex: 0 });

      const host = await getHost();
      const allLinks = await getAllLinks();

      expect(await getStyleOnFocus(allLinks[0])).toBe(expectedStyleOnFocus({ color: 'active', offset: '1px' }));
      expect(await getStyleOnFocus(allLinks[1])).toBe(expectedStyleOnFocus({ offset: '1px' }));
      expect(await getStyleOnFocus(allLinks[2])).toBe(expectedStyleOnFocus({ offset: '1px' }));

      await setAttribute(host, 'theme', 'dark');
      await waitForStencilLifecycle(page);
      await waitForInheritedCSSTransition(page);

      expect(await getStyleOnFocus(allLinks[0])).toBe(
        expectedStyleOnFocus({ color: 'active', theme: 'dark', offset: '1px' })
      );
      expect(await getStyleOnFocus(allLinks[1])).toBe(expectedStyleOnFocus({ theme: 'dark', offset: '1px' }));
      expect(await getStyleOnFocus(allLinks[2])).toBe(expectedStyleOnFocus({ theme: 'dark', offset: '1px' }));
    });
  });

  describe('lifecycle', () => {
    it('should work without unnecessary round trips on init', async () => {
      await initTabsBar({ amount: 3, tag: 'a', activeTabIndex: 0 });
      const status = await getLifecycleStatus(page);

      expect(status.componentDidLoad['p-tabs-bar']).toBe(1, 'componentDidLoad: p-tabs-bar');
      expect(status.componentDidLoad['p-button-pure']).toBe(2, 'componentDidLoad: p-button-pure');
      expect(status.componentDidLoad['p-icon']).toBe(2, 'componentDidLoad: p-icon');
      expect(status.componentDidLoad['p-text']).toBe(2, 'componentDidLoad: p-text');

      expect(status.componentDidLoad.all).toBe(7, 'componentDidLoad: all');
      expect(status.componentDidUpdate.all).toBe(0, 'componentDidUpdate: all');
    });

    it('should work without unnecessary round trips on prop change', async () => {
      await initTabsBar({ amount: 3, tag: 'button', activeTabIndex: 0 });
      const host = await getHost();

      await setAttribute(host, 'active-tab-index', '2');
      await waitForStencilLifecycle(page);

      const status = await getLifecycleStatus(page);

      expect(status.componentDidUpdate['p-tabs-bar']).toBe(1, 'componentDidUpdate: p-tabs-bar');

      expect(status.componentDidLoad.all).toBe(7, 'componentDidLoad: all');
      expect(status.componentDidUpdate.all).toBe(1, 'componentDidUpdate: all');
    });
  });
});
