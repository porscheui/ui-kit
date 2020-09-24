import {
  getAttribute,
  getBrowser,
  getProperty,
  initAddEventListener,
  selectNode,
  setContentWithDesignSystem,
  waitForStencilLifecycle
} from '../helpers';
import { ElementHandle, Page } from 'puppeteer';

fdescribe('tabs', () => {
  let page: Page;
  beforeEach(async () => {
    page = await getBrowser().newPage();
    await initAddEventListener(page);
  });
  afterEach(async () => await page.close());

  const getTab = () => selectNode(page, 'p-tabs');
  const getAllTabItems = () => page.$$('p-tabs-item');
  const getScrollArea = () => selectNode(page, 'p-tabs >>> .p-tabs__scroll-area');
  const getAllTabs = async () => (await getScrollArea()).$$('.p-tabs__tab');
  const getStatusBar = () => selectNode(page, 'p-tabs >>> .p-tabs__status-bar');
  const getElementPositions = async (element: ElementHandle) => {
    return await page.evaluate((element) => {
      const { top, left, bottom, right } = element.getBoundingClientRect();
      return { top, left, bottom, right };
    }, element);
  };
  const getPrev = async () =>
    (await selectNode(page, 'p-tabs >>> .p-tabs__action--prev')).$('.p-tabs__action--prev p-button-pure');
  const getNext = async () =>
    (await selectNode(page, 'p-tabs >>> .p-tabs__action--next ')).$('.p-tabs__action--next p-button-pure');
  const getScrollLeft = (element: ElementHandle) => getProperty(element, 'scrollLeft');

  it('should render', async () => {
    await setContentWithDesignSystem(
      page,
      `
       <p-tabs>
        <p-tabs-item label="Button1">
          Content1
        </p-tabs-item>
        <p-tabs-item label="Button2">
          Content2
        </p-tabs-item>
        <p-tabs-item label="Button3">
          Content3
        </p-tabs-item>
      </p-tabs>
    `
    );
    const tabs = await getTab();
    const tabItems = await getAllTabItems();

    expect(tabs).toBeDefined();
    expect(tabItems.length).toBe(3);
  });

  it('should render correct content of tab-item on click', async () => {
    await setContentWithDesignSystem(
      page,
      `
      <p-tabs>
        <p-tabs-item label="Button1">
          Content1
        </p-tabs-item>
        <p-tabs-item label="Button2">
          Content2
        </p-tabs-item>
        <p-tabs-item label="Button3">
          Content3
        </p-tabs-item>
      </p-tabs>
    `
    );

    const allTabItems = await getAllTabItems();
    const firstTabItem = allTabItems[0];
    const secondTabItem = allTabItems[1];
    const allTabs = await getAllTabs();

    expect(await getAttribute(firstTabItem, 'selected')).toBe('');
    expect(await getAttribute(secondTabItem, 'selected')).toBeNull();

    await allTabs[1].click();
    await waitForStencilLifecycle(page);

    expect(await getAttribute(firstTabItem, 'selected')).toBeNull();
    expect(await getAttribute(secondTabItem, 'selected')).toBe('');
  });

  it('should update buttons when tab label is changed', async () => {
    await setContentWithDesignSystem(
      page,
      `
      <p-tabs>
        <p-tabs-item label="Button1">
          Content1
        </p-tabs-item>
        <p-tabs-item label="Button2">
          Content2
        </p-tabs-item>
        <p-tabs-item label="Button3" href="https://porsche.com" target="_blank">
          Content3
        </p-tabs-item>
      </p-tabs>
    `
    );
    const allTabsItems = await getAllTabItems();
    const allTabs = await getAllTabs();
    const getLabelOfFirstButton = () => getProperty(allTabs[0], 'innerHTML');

    expect(await getLabelOfFirstButton()).toBe('Button1');

    await allTabsItems[0].evaluate((el) => el.setAttribute('label', 'newButtonName'));
    await waitForStencilLifecycle(page);

    expect(await getLabelOfFirstButton()).toBe('newButtonName');
  });

  it('should select correct button when selected attribute is set', async () => {
    await setContentWithDesignSystem(
      page,
      `
      <p-tabs>
        <p-tabs-item label="Button1">
          Content1
        </p-tabs-item>
        <p-tabs-item label="Button2" selected>
          Content2
        </p-tabs-item>
        <p-tabs-item label="Button3">
          Content3
        </p-tabs-item>
      </p-tabs>
    `
    );
    const allTabs = await getAllTabs();
    const firstButton = allTabs[0];
    const secondButton = allTabs[1];
    const thirdButton = allTabs[2];

    expect(await getAttribute(firstButton, 'aria-selected')).toBe('false');
    expect(await getAttribute(secondButton, 'aria-selected')).toBe('true');
    expect(await getAttribute(thirdButton, 'aria-selected')).toBe('false');
  });

  it('should behave correctly when multiple tabs have selected attribute', async () => {
    await setContentWithDesignSystem(
      page,
      `
      <p-tabs>
        <p-tabs-item label="Button1">
          Content1
        </p-tabs-item>
        <p-tabs-item label="Button2" selected>
          Content2
        </p-tabs-item>
        <p-tabs-item label="Button3" selected>
          Content3
        </p-tabs-item>
      </p-tabs>
    `
    );
    const allTabs = await getAllTabs();
    const firstButton = allTabs[0];
    const secondButton = allTabs[1];
    const thirdButton = allTabs[2];

    expect(await getAttribute(firstButton, 'aria-selected')).toBe('false');
    expect(await getAttribute(secondButton, 'aria-selected')).toBe('true');
    expect(await getAttribute(thirdButton, 'aria-selected')).toBe('false');
  });

  it('should focus first button on tab click', async () => {
    await setContentWithDesignSystem(
      page,
      `
      <p-tabs>
        <p-tabs-item label="Button1">
          Content1
        </p-tabs-item>
        <p-tabs-item label="Button2">
          Content2
        </p-tabs-item>
        <p-tabs-item label="Button3">
          Content3
        </p-tabs-item>
      </p-tabs>
    `
    );
    const getButtonFocus = async () => {
      const snapshot = await page.accessibility.snapshot();
      const button = snapshot.children[0];
      return button.focused;
    };
    expect(await getButtonFocus()).toBeUndefined();

    await page.keyboard.press('Tab');

    expect(await getButtonFocus()).toBe(true);
  });

  it('should focus content on tab click', async () => {
    await setContentWithDesignSystem(
      page,
      `
      <p-tabs>
        <p-tabs-item label="Button1">
          Content1 <a href="porsche.com">Link</a>
        </p-tabs-item>
        <p-tabs-item label="Button2">
          Content2
        </p-tabs-item>
        <p-tabs-item label="Button3">
          Content3
        </p-tabs-item>
      </p-tabs>
    `
    );
    const getLinkFocus = async () => {
      const snapshot = await page.accessibility.snapshot();
      const link = snapshot.children[snapshot.children.length - 1];
      return link.focused;
    };
    expect(await getLinkFocus()).toBeUndefined();

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    expect(await getLinkFocus()).toBe(true);
  });

  it('should switch active tab on arrow-key press', async () => {
    await setContentWithDesignSystem(
      page,
      `
      <p-tabs>
        <p-tabs-item label="Button1">
          Content1
        </p-tabs-item>
        <p-tabs-item label="Button2">
          Content2
        </p-tabs-item>
        <p-tabs-item label="Button3">
          Content3
        </p-tabs-item>
      </p-tabs>
    `
    );
    const allTabs = await getAllTabs();

    expect(await getAttribute(allTabs[0], 'aria-selected')).toBe('true');
    expect(await getAttribute(allTabs[1], 'aria-selected')).toBe('false');

    await page.keyboard.press('Tab');
    await page.keyboard.press('ArrowRight');
    await waitForStencilLifecycle(page);

    expect(await getAttribute(allTabs[1], 'aria-selected')).toBe('true');
    expect(await getAttribute(allTabs[0], 'aria-selected')).toBe('false');

    await page.keyboard.press('ArrowLeft');
    await waitForStencilLifecycle(page);

    expect(await getAttribute(allTabs[0], 'aria-selected')).toBe('true');
    expect(await getAttribute(allTabs[1], 'aria-selected')).toBe('false');
  });

  it('should set active tab as first/last on home/end press', async () => {
    await setContentWithDesignSystem(
      page,
      `
      <p-tabs>
        <p-tabs-item label="Button1">
          Content1
        </p-tabs-item>
        <p-tabs-item selected label="Button2">
          Content2
        </p-tabs-item>
        <p-tabs-item label="Button3">
          Content3
        </p-tabs-item>
      </p-tabs>
    `
    );
    const allTabs = await getAllTabs();
    const firstButton = allTabs[0];
    const lastButton = allTabs[allTabs.length - 1];

    expect(await getAttribute(firstButton, 'aria-selected')).toBe('false');
    expect(await getAttribute(allTabs[1], 'aria-selected')).toBe('true');
    expect(await getAttribute(lastButton, 'aria-selected')).toBe('false');

    await page.keyboard.press('Tab');
    await page.keyboard.press('End');
    await waitForStencilLifecycle(page);

    expect(await getAttribute(lastButton, 'aria-selected')).toBe('true');
    expect(await getAttribute(firstButton, 'aria-selected')).toBe('false');

    await page.keyboard.press('Home');
    await waitForStencilLifecycle(page);

    expect(await getAttribute(firstButton, 'aria-selected')).toBe('true');
    expect(await getAttribute(lastButton, 'aria-selected')).toBe('false');
  });

  fit('should scroll 20% on Button next', async () => {
    await setContentWithDesignSystem(
      page,
      `
      <div style="width: 400px" size="medium">
        <p-tabs>
          <p-tabs-item label="Button1">
            Content1
          </p-tabs-item>
          <p-tabs-item label="Button2">
            Content2
          </p-tabs-item>
          <p-tabs-item label="Button3">
            Content3
          </p-tabs-item>
          <p-tabs-item label="Button4">
            Content4
          </p-tabs-item>
          <p-tabs-item label="Button5">
            Content5
          </p-tabs-item>
          <p-tabs-item label="Button6">
            Content6
          </p-tabs-item>
        </p-tabs>
      </div>
    `
    );
    const nextButton = await getNext();
    const nav = await getScrollArea();
    const width = await getProperty(nav, 'offsetWidth');
    const scrollDistance = +width * 0.2;

    expect(await getScrollLeft(nav)).toEqual(0);

    await nextButton.click();
    await waitForStencilLifecycle(page);
    await page.waitFor(10000);

    expect(await getScrollLeft(nav)).toEqual(Math.round(scrollDistance));
  });

  it('should scroll 20% on Button prev', async () => {
    await setContentWithDesignSystem(
      page,
      `
      <div style="width: 400px">
        <p-tabs size="medium">
          <p-tabs-item label="Button1">
            Content1
          </p-tabs-item>
          <p-tabs-item label="Button2">
            Content2
          </p-tabs-item>
          <p-tabs-item label="Button3">
            Content3
          </p-tabs-item>
          <p-tabs-item label="Button4">
            Content4
          </p-tabs-item>
          <p-tabs-item label="Button5">
            Content5
          </p-tabs-item>
          <p-tabs-item label="Button6">
            Content6
          </p-tabs-item>
        </p-tabs>
      </div>
    `
    );

    const nextButton = await getNext();
    const prevButton = await getPrev();
    const scrollArea = await getScrollArea();
    const scrollAreaWidth = await getProperty(scrollArea, 'offsetWidth');
    const scrollDistance = +scrollAreaWidth * 0.2;

    expect(await getScrollLeft(scrollArea)).toEqual(0);

    await nextButton.click();
    await waitForStencilLifecycle(page);
    await page.waitFor(1000);

    expect(await getScrollLeft(scrollArea)).toEqual(scrollDistance);

    await nextButton.click();
    await waitForStencilLifecycle(page);
    await page.waitFor(1000);

    expect(await getScrollLeft(scrollArea)).toEqual(scrollDistance * 2);

    await prevButton.click();
    await waitForStencilLifecycle(page);
    await page.waitFor(1000);

    expect(await getScrollLeft(scrollArea)).toEqual(scrollDistance);
  });

  it('should have same offsetLeft on Statusbar and active tab', async () => {
    await setContentWithDesignSystem(
      page,
      `
      <p-tabs>
        <p-tabs-item label="Button1">
          Content1
        </p-tabs-item>
        <p-tabs-item label="Button2">
          Content2
        </p-tabs-item>
        <p-tabs-item label="Button3">
          Content3
        </p-tabs-item>
      </p-tabs>
    `
    );
    const allTabs = await getAllTabs();
    const statusBar = await getStatusBar();

    expect((await getElementPositions(allTabs[0])).left).toEqual((await getElementPositions(statusBar)).left);

    await allTabs[2].click();
    await waitForStencilLifecycle(page);
    await page.waitFor(1000);

    expect((await getElementPositions(allTabs[2])).left).toEqual((await getElementPositions(statusBar)).left);
  });
});
