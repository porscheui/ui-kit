import {
  calcSpaceForDirections,
  getAutoDirection,
  getOffset,
  isWithinViewport,
  observeClickOutside,
  onClickOutside,
  POPOVER_DIRECTIONS,
  PopoverDirection,
  registeredPopovers,
  unobserveClickOutside,
} from './popover-utils';
import * as popoverUtils from './popover-utils';
import { Popover } from './popover';
import * as console from 'console';

type BoundingClientRectOpts = {
  element: HTMLDivElement;
  width?: number;
  height?: number;
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
};

const exceedSpaceTopLeft = 15;
const exceedSpaceBottomRight = 985;

const mockBoundingClientRect = (opts?: BoundingClientRectOpts): void => {
  // defaults to center of viewport
  const { element, width = 100, height = 100, top = 450, left = 450, bottom = 450, right = 450 } = opts;

  jest.spyOn(element, 'getBoundingClientRect').mockImplementation(
    () =>
      ({
        width,
        height,
        top,
        left,
        bottom,
        right,
      } as DOMRect)
  );
};

const setViewport = () => {
  // clientWidth/Height is always 0 in JSDOM so we mock it
  Object.defineProperties(document.documentElement, {
    clientWidth: {
      value: 1000,
      configurable: true,
    },
    clientHeight: {
      value: 1000,
      configurable: true,
    },
  });
};

const placeElementOutside = (direction): number => {
  return direction === 'top' || direction === 'left' ? exceedSpaceTopLeft : exceedSpaceBottomRight;
};

const spacer = document.createElement('div');
const popover = document.createElement('div');

describe('mockBoundingClientRect()', () => {
  it('should mock boundingClient of element', () => {
    expect(popover.getBoundingClientRect()).toEqual({
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0,
      x: 0,
      y: 0,
    });
    mockBoundingClientRect({ element: popover });

    expect(popover.getBoundingClientRect()).toEqual({
      bottom: 450,
      height: 100,
      left: 450,
      right: 450,
      top: 450,
      width: 100,
    });
  });
});

describe('setViewport()', () => {
  it('should set viewport to 1000 x 1000', () => {
    Object.defineProperties(document.documentElement, {
      clientWidth: {
        value: 0,
        configurable: true,
      },
      clientHeight: {
        value: 0,
        configurable: true,
      },
    });
    expect(document.documentElement.clientWidth).toBe(0);
    expect(document.documentElement.clientHeight).toBe(0);

    setViewport();
    expect(document.documentElement.clientWidth).toBe(1000);
    expect(document.documentElement.clientHeight).toBe(1000);
  });
});

describe('placeElementOutside()', () => {
  it.each<PopoverDirection>(['top', 'left'])('should be 15 on %s', (popoverDirection) => {
    expect(placeElementOutside(popoverDirection)).toBe(exceedSpaceTopLeft);
  });
  it.each<PopoverDirection>(['bottom', 'right'])('should be 985 on %s', (popoverDirection) => {
    expect(placeElementOutside(popoverDirection)).toBe(exceedSpaceBottomRight);
  });
});

describe('isWithinViewport()', () => {
  setViewport();

  describe('centered', () => {
    it.each<PopoverDirection>(POPOVER_DIRECTIONS)(
      'should be true when inside viewport for direction %s',
      (direction) => {
        mockBoundingClientRect({ element: spacer });
        mockBoundingClientRect({ element: popover });

        expect(isWithinViewport(spacer, popover, direction)).toBe(true);
      }
    );
  });

  it.each<PopoverDirection>(POPOVER_DIRECTIONS)('should be false when popover exceeds %s', (popoverDirection) => {
    const popoverPosition = {
      [popoverDirection]: placeElementOutside(popoverDirection),
    };

    mockBoundingClientRect({ element: spacer });
    mockBoundingClientRect({ element: popover, ...popoverPosition });

    expect(isWithinViewport(spacer, popover, popoverDirection)).toBe(false);
  });

  describe('isWithinXAxis', () => {
    mockBoundingClientRect({ element: popover });

    it.each<PopoverDirection>(['top', 'bottom'])(
      'should be false when spacer exceeds xAxis for direction %s',
      (direction) => {
        // left
        mockBoundingClientRect({ element: spacer, left: exceedSpaceTopLeft });
        expect(isWithinViewport(spacer, popover, direction)).toBe(false);
        // right
        mockBoundingClientRect({ element: spacer, right: exceedSpaceBottomRight });
        expect(isWithinViewport(spacer, popover, direction)).toBe(false);
      }
    );
  });

  describe('isWithinYAxis', () => {
    mockBoundingClientRect({ element: popover });

    it.each<PopoverDirection>(['left', 'right'])(
      'should be false when spacer exceeds yAxis for direction %s',
      (direction) => {
        // top
        mockBoundingClientRect({ element: spacer, top: exceedSpaceTopLeft });
        expect(isWithinViewport(spacer, popover, direction)).toBe(false);
        // bottom
        mockBoundingClientRect({ element: spacer, bottom: exceedSpaceBottomRight });
        expect(isWithinViewport(spacer, popover, direction)).toBe(false);
      }
    );
  });
});

describe('calcSpaceForDirections()', () => {
  it('should return correct space for all directions', () => {
    setViewport();
    mockBoundingClientRect({ element: spacer });
    mockBoundingClientRect({ element: popover });

    expect(calcSpaceForDirections(spacer, popover)).toEqual({
      bottom: 450,
      left: 350,
      right: 450,
      top: 350,
    });
  });
});

describe('getAutoDirection()', () => {
  it('should call calcSpaceForDirections', () => {
    const spy = jest.spyOn(popoverUtils, 'calcSpaceForDirections');

    getAutoDirection(spacer, popover);
    expect(spy).toBeCalledTimes(1);
  });

  it.each<PopoverDirection>(POPOVER_DIRECTIONS)('should return %s as direction with most space', (popoverDirection) => {
    jest.spyOn(popoverUtils, 'calcSpaceForDirections').mockImplementationOnce(() => {
      const directions = {
        top: 1,
        right: 1,
        bottom: 1,
        left: 1,
      };
      directions[popoverDirection] = 2;

      return directions;
    });

    expect(getAutoDirection(spacer, popover)).toBe(popoverDirection);
  });
});

describe('getOffset', () => {
  setViewport();

  it.each<PopoverDirection>(POPOVER_DIRECTIONS)('should return 0 if within viewport', (popoverDirection) => {
    mockBoundingClientRect({ element: spacer });
    mockBoundingClientRect({ element: popover });
    expect(getOffset(spacer, popover, popoverDirection)).toBe('0');
  });

  describe('axis offset', () => {
    describe('left or top side exceeded', () => {
      it.each<PopoverDirection>(POPOVER_DIRECTIONS)(
        'should move popover out of safeZone for direction %s',
        (popoverDirection) => {
          const position = popoverDirection === 'top' || popoverDirection === 'bottom' ? 'left' : 'top';
          mockBoundingClientRect({ element: popover, [position]: exceedSpaceTopLeft });

          const expected = position === 'left' ? '0 0 0 -15px' : '-15px 0 0 0';

          expect(getOffset(spacer, popover, popoverDirection)).toEqual(expected);
        }
      );

      it.each<PopoverDirection>(POPOVER_DIRECTIONS)(
        'should move popover to edge of spacer for direction %s',
        (popoverDirection) => {
          const position = popoverDirection === 'top' || popoverDirection === 'bottom' ? 'left' : 'top';
          mockBoundingClientRect({ element: spacer, [position]: exceedSpaceTopLeft });
          mockBoundingClientRect({ element: popover, width: 150, height: 150, [position]: 14 });

          const expected = position === 'left' ? '0 0 0 1px' : '1px 0 0 0';

          expect(getOffset(spacer, popover, popoverDirection)).toEqual(expected);
        }
      );
    });

    describe('right or bottom side exceeded', () => {
      it.each<PopoverDirection>(POPOVER_DIRECTIONS)(
        'should move popover out of safeZone for direction %s',
        (popoverDirection) => {
          const position = popoverDirection === 'top' || popoverDirection === 'bottom' ? 'right' : 'bottom';
          mockBoundingClientRect({ element: popover, [position]: placeElementOutside(position) });

          const expected = position === 'right' ? '0 0 0 -1px' : '-1px 0 0 0';

          expect(getOffset(spacer, popover, popoverDirection)).toEqual(expected);
        }
      );

      it.each<PopoverDirection>(POPOVER_DIRECTIONS)(
        'should move popover to edge of spacer for direction %s',
        (popoverDirection) => {
          const position = popoverDirection === 'top' || popoverDirection === 'bottom' ? 'right' : 'bottom';
          mockBoundingClientRect({ element: spacer, [position]: exceedSpaceBottomRight });
          mockBoundingClientRect({ element: popover, width: 150, height: 150, [position]: 986 });

          console.log(spacer.getBoundingClientRect(), popover.getBoundingClientRect());
          const expected = position === 'right' ? '0 0 0 -1px' : '-1px 0 0 0';

          expect(getOffset(spacer, popover, popoverDirection)).toEqual(expected);
        }
      );
    });
  });
});

describe('onClickOutside()', () => {
  beforeEach(() => {
    registeredPopovers.length = 0;
  });

  it('should keep popover open when composedPath contains host', () => {
    const popover = new Popover();
    popover.open = true;
    registeredPopovers.push(popover);

    const clickEvent = new MouseEvent('mousedown');
    jest.spyOn(clickEvent, 'composedPath').mockImplementation(() => [popover.host]);
    onClickOutside(clickEvent);

    expect(popover.open).toBe(true);
  });

  it('should close popover when composedPath does not include host', () => {
    const popover = new Popover();
    popover.open = true;
    registeredPopovers.push(popover);

    onClickOutside(new MouseEvent('mousedown'));

    expect(popover.open).toBe(false);
  });

  it('should check composedPath only when open', () => {
    const popover = new Popover();
    registeredPopovers.push(popover);

    const clickEvent = new MouseEvent('mousedown');
    const spy = jest.spyOn(clickEvent, 'composedPath');
    onClickOutside(clickEvent);
    expect(spy).toBeCalledTimes(0);

    popover.open = true;
    onClickOutside(clickEvent);
    expect(spy).toBeCalledTimes(1);
  });

  it('should check every popover in registeredPopovers', () => {
    const popover1 = new Popover();
    const popover2 = new Popover();
    registeredPopovers.push(popover1);
    registeredPopovers.push(popover2);

    registeredPopovers.forEach((x) => (x.open = true));

    const clickEvent = new MouseEvent('mousedown');
    const spy = jest.spyOn(clickEvent, 'composedPath');
    onClickOutside(clickEvent);
    expect(spy).toBeCalledTimes(2);
  });
});

describe('observeClickOutside()', () => {
  beforeEach(() => {
    registeredPopovers.length = 0;
  });

  it('should register eventListener', () => {
    const popover = new Popover();

    const spy = jest.spyOn(document, 'addEventListener');
    observeClickOutside(popover);

    expect(spy).toBeCalledWith('mousedown', expect.anything());
  });

  it('should push popover into registeredPopovers array', () => {
    const popover = new Popover();
    observeClickOutside(popover);

    expect(registeredPopovers.length).toBe(1);
    expect(registeredPopovers[0]).toBe(popover);
  });

  it('should not push popover into registeredPopovers array when already exists', () => {
    const popover = new Popover();
    registeredPopovers.push(popover);
    observeClickOutside(popover);

    expect(registeredPopovers.length).toBe(1);
  });
});

describe('unobserveClickOutside()', () => {
  beforeEach(() => {
    registeredPopovers.length = 0;
  });

  it('should remove correct element from registeredPopovers', () => {
    const popover1 = new Popover();
    const popover2 = new Popover();
    const popover3 = new Popover();

    observeClickOutside(popover1);
    observeClickOutside(popover2);
    observeClickOutside(popover3);
    expect(registeredPopovers.length).toBe(3);

    unobserveClickOutside(popover1);
    expect(registeredPopovers.length).toBe(2);
    expect(registeredPopovers[0]).toEqual(popover2);
    expect(registeredPopovers[1]).toEqual(popover3);

    unobserveClickOutside(popover3);
    expect(registeredPopovers.length).toBe(1);
    expect(registeredPopovers[0]).toEqual(popover2);
  });

  it('should removeEventListener if registeredPopovers gets empty', () => {
    const popover1 = new Popover();
    const spy = jest.spyOn(document, 'removeEventListener');

    registeredPopovers.push(popover1);
    expect(registeredPopovers.length).toBe(1);

    unobserveClickOutside(popover1);
    expect(registeredPopovers.length).toBe(0);
    expect(spy).toBeCalledWith('mousedown', expect.anything());
  });
});
