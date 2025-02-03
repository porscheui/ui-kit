import {
  borderRadiusMedium,
  borderRadiusSmall,
  fontFamily,
  fontSizeTextSmall,
  themeDarkBackgroundBase,
  themeDarkBackgroundFrosted,
  themeDarkBackgroundSurface,
  themeDarkContrastLow,
  themeDarkNotificationError,
  themeDarkNotificationInfo,
  themeDarkNotificationSuccess,
  themeDarkPrimary,
  themeDarkStateFocus,
  themeDarkStateHover,
  themeLightBackgroundBase,
  themeLightBackgroundFrosted,
  themeLightBackgroundSurface,
  themeLightContrastLow,
  themeLightNotificationError,
  themeLightNotificationInfo,
  themeLightNotificationSuccess,
  themeLightPrimary,
  themeLightStateFocus,
  themeLightStateHover,
} from '@porsche-design-system/components-js/styles';
import { Theme, iconOverrides, themeQuartz } from 'ag-grid-community';

const pdsSvgIcons = iconOverrides({
  type: 'image',
  mask: true,
  icons: {
    aggregation: {
      url: 'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 24 24" viewBox="0 0 24 24"><path d="M17.2 19.3H5.7l6.5-7.6-6.5-7h11.5v1H7.9l5.7 6-5.7 6.6h9.3z" style="fill:%23020202"/></svg>',
    },
    arrows: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 24 24" viewBox="0 0 24 24"><path d="m22 12-2-3h-1.4l1.7 2.5H15v1h5.3L18.6 15H20l2-3zM12 2 9 4v1.4l2.5-1.7V9h1V3.7L15 5.4V4zM12.5 20.3V15h-1v5.3L9 18.6V20l3 2 3-2v-1.4zM9 11.5H3.7L5.4 9H4l-2 3 2 3h1.4l-1.7-2.5H9z"/></svg>',
    },
    asc: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m5.5 9.48.642.77L11.5 5.732V20h1V5.732l5.358 4.518.642-.768-6.494-5.476L12.001 4h-.002l-.002.003z" style="fill:%23000"/></svg>',
    },
    cancel: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 6.706 12.706 12 18 17.294l-.706.706L12 12.706 6.706 18 6 17.294 11.294 12 6 6.706 6.706 6 12 11.294 17.294 6z" style="fill:%23000"/></svg>',
    },
    chart: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 21v-1H2v1zM21 5.829V3h-2.828l1.06 1.06L12 11.293l-2-2-7 7v1.414l7-7 2 2 7.94-7.94zM18 19h-1V9h1zm-4 0h-1v-5h1zm-4 0H9v-6h1zm-4 0H5v-2h1z" style="fill:%23000"/></svg>',
    },
    'color-picker': {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 24 24" viewBox="0 0 24 24"><path d="M19.3 6.7c0-1.1-.9-2-2-2-.6 0-.9.2-1.4.6L13.1 8l-1.2-1.2c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l1.2 1.2-7.7 7.9v2.7h2.8l7.7-7.7 1.2 1.2c.1.1.2.1.4.1s.3 0 .4-.1c.2-.2.2-.5 0-.7L16 10.9l2.6-2.6c.4-.5.7-1 .7-1.6zM7.1 18.3H5.7V17l7.4-7.5 1.4 1.4-7.4 7.4z"/></svg>',
    },
    columns: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 16v4H4v-4zm6 0v4h-4v-4zm6 0v4h-4v-4zM7 17H5v2.008h2zm6 0h-2v2.008h2zm6 0h-2v2.008h2zM8 10v4H4v-4zm6 0v4h-4v-4zm6 0v4h-4v-4zM7 11H5v2.008h2zm6 0h-2v2.008h2zm6 0h-2v2.008h2zM8 4v4H4V4zm6 0v4h-4V4zm6 0v4h-4V4zM7 5H5v2.008h2zm6 0h-2v2.008h2zm6 0h-2v2.008h2z" style="fill:%23000"/></svg>',
    },
    contracted: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.121 11.997 9.644 5.5l-.769.642L13.815 12l-4.94 5.858.768.642 5.476-6.494.006-.005V12z" style="fill:%23000"/></svg>',
    },
    copy: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.003 4c.549 0 .998.45.998 1v10c0 .55-.45 1-.998 1h-1.009v1h1.009C19.101 17 20 16.1 20 15V5c0-1.1-.899-2-1.997-2H12.01c-1.099 0-1.998.9-1.998 2h.999c0-.55.45-1 .999-1zm-4.005 3c.55 0 .999.45.999 1v11c0 .55-.45 1-.999 1h-7c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1zm0-1h-7C5.898 6 5 6.9 5 8v11c0 1.1.899 2 1.997 2h7.001c1.098 0 1.997-.9 1.997-2V8c0-1.1-.899-2-1.997-2" style="fill:%23000"/></svg>',
    },
    cross: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 6.706 12.706 12 18 17.294l-.706.706L12 12.706 6.706 18 6 17.294 11.294 12 6 6.706 6.706 6 12 11.294 17.294 6z" style="fill:%23000"/></svg>',
    },
    csv: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 24 24" viewBox="0 0 24 24"><path d="M13 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8l-6-6zm0 1.4L17.6 8H13V3.4zM6 20V4c0-.6.4-1 1-1h5v6h6v11c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1"/><path d="M7.1 17.7c0-1.6.4-2.1 1.6-2.1 1.2 0 1.4.5 1.4 1.6h-.7c0-.8-.2-1-.8-1-.7 0-.9.3-.9 1.5 0 1.4.1 1.6.9 1.6.6 0 .7-.3.8-1h.7c0 1.1-.4 1.6-1.4 1.6-1.3 0-1.6-.6-1.6-2.2zM11.2 18.5c0 .6.2.8.7.8.5 0 .7-.2.7-.6 0-.4-.2-.5-.7-.6l-.2-.1c-.7-.2-1.1-.4-1.1-1.2 0-.7.4-1.2 1.3-1.2 1 0 1.3.5 1.4 1.4h-.7c0-.6-.2-.8-.7-.8-.4 0-.7.2-.7.6 0 .4.2.5.7.6l.3.1c.7.2 1.1.5 1.1 1.2s-.4 1.2-1.4 1.2c-1 0-1.3-.4-1.4-1.3h.7zM13.5 15.6h.7l1 3.4 1-3.4h.6l-1.2 4.2h-.8l-1.3-4.2z"/></svg>',
    },
    cut: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 24 24" viewBox="0 0 24 24"><path d="M10.2 9.2c.3-.4.5-1 .5-1.5C10.6 6.2 9.5 5 8 5S5.4 6.2 5.4 7.7s1.2 2.6 2.6 2.6c.5 0 1-.2 1.4-.4l1.8 1.9-1.9 2c-.3-.2-.8-.3-1.3-.3-1.5 0-2.6 1.2-2.6 2.6 0 1.5 1.2 2.6 2.6 2.6s2.6-1.2 2.6-2.6c0-.6-.2-1.1-.5-1.5l1.8-2L17 18h1.3l-8.1-8.8zM8 9.3c-.9 0-1.6-.7-1.6-1.6S7.1 6.1 8 6.1c.9 0 1.6.7 1.6 1.6S8.9 9.3 8 9.3zm0 8.4c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6z"/><path d="m18.4 5.6-1.3-.1-4.4 4.8.7.8zM57.2 6.7c0-1.1-.9-2-2-2-.6 0-.9.2-1.4.6L51 8.1l2.8 2.8 2.7-2.7c.4-.4.7-.9.7-1.5z"/><path d="m51.1 9.5 1.4 1.4-7.4 7.4h-1.4V17l7.4-7.5m0-1.4-8.4 8.6v2.7h2.8l8.4-8.4-2.8-2.9z"/><path d="m54.8 12.4-5.3-5.3" style="fill:none;stroke:%23000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10"/></svg>',
    },
    desc: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.858 13.75 12.5 18.27V4h-1v14.267L6.142 13.75l-.642.768 6.494 5.476.005.005h.002l.002-.003L18.5 14.52z"/></svg>',
    },
    down: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.858 13.75 12.5 18.27V4h-1v14.267L6.142 13.75l-.642.768 6.494 5.476.005.005h.002l.002-.003L18.5 14.52z"/></svg>',
    },
    excel: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="Layer_1" x="0" y="0" style="enable-background:new 0 0 24 24" version="1.1" viewBox="0 0 24 24"><style>.st0{fill:%23030104}</style><path d="M13 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8l-6-6zm0 1.4L17.6 8H13V3.4zM6 20V4c0-.6.4-1 1-1h5v6h6v11c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1"/><path d="M16.3 11.4H13v1.1h1.1v.7H13v.7h1.1v.7H13v.7h1.1v.7H13v.7h1.1v.7H13v1.1h3.3c.2 0 .3-.1.3-.3v-6.5c0-.1-.1-.3-.3-.3zm-.4 6.1h-1.4v-.7h1.4v.7zm0-1.4h-1.4v-.7h1.4v.7zm0-1.5h-1.4v-.7h1.4v.7zm0-1.4h-1.4v-.7h1.4v.7zM7.4 11.4v7.2l5.3 1v-9.2l-5.3 1zm3.4 5.4-.6-1.2s0-.1-.1-.2c0 .1 0 .1-.1.3l-.6 1.2h-1L9.5 15l-1.1-1.8h1l.5 1.1c0 .1.1.2.1.3 0-.1.1-.2.1-.3l.6-1.1h.9l-1 1.8 1.1 1.8h-.9z" class="st0"/></svg>',
    },
    expanded: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.875 12zl.006-.005L14.357 5.5l.768.642L10.185 12l4.939 5.858-.768.642-5.477-6.497z" style="fill:%23000"/></svg>',
    },
    'eye-slash': {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m13.985 12.146.9-.9q.105.37.115.754a3 3 0 0 1-3 3 3 3 0 0 1-.754-.115l.9-.9a1.99 1.99 0 0 0 1.84-1.84m-3.983-.278-.92.92a2.97 2.97 0 0 1 .468-2.638c.77-1.026 2.065-1.397 3.227-1.058l-.908.908a1.96 1.96 0 0 0-1.009.339c-.53.362-.824.934-.858 1.529M22 12s-3.042 5.991-10 6a11.3 11.3 0 0 1-3.358-.511l.817-.817c.83.211 1.683.326 2.541.328a10.64 10.64 0 0 0 8.86-5 11 11 0 0 0-3.344-3.385l.731-.731C20.056 9.087 22 12 22 12zM2 12s3-6 10-6c1.144 0 2.273.176 3.356.513l-.795.795A10 10 0 0 0 12 7a10.63 10.63 0 0 0-8.87 5c.866 1.366 2.035 2.494 3.388 3.352l-.718.717C2.867 14.16 2 12.001 2 12M21.283 2 2 21.283l.717.717L22 2.717z" style="fill:%23000"/></svg>',
    },
    eye: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0-1a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 9c-7 0-10-6-10-6s3-6 10-6 10 6 10 6-3.5 6-10 6m-8.87-6A10.64 10.64 0 0 0 12 17a10.62 10.62 0 0 0 8.86-5A10.63 10.63 0 0 0 12 7a10.63 10.63 0 0 0-8.85 5z" style="fill:%23000"/></svg>',
    },
    filter: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 4v3l5 6.428v1.573L11 16v-3.004L6.337 7h11.326L13 12.996V18l1 1v-5.572L19 7V4zm13 2H6V5h12z" style="fill:%23000"/></svg>',
    },
    first: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m17 4-6 8 6 8h-1.26l-6-8 6-8zM8 4v16H7V4z" style="fill:%23000"/></svg>',
    },
    group: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 24 24" viewBox="0 0 24 24"><path d="M8.5 6.4H18v1H8.5zM8.5 8.4H18v1H8.5zM8 11H5.5V5H8v1H6.5v4H8zM8.5 14.4H18v1H8.5zM8.5 16.4H18v1H8.5zM8 19H5.5v-6H8v1H6.5v4H8z"/></svg>',
    },
    last: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m8.26 4 6 8-6 8H7l6-8-6-8zM17 4v16h-1V4z" style="fill:%23000"/></svg>',
    },
    left: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.249 17.858 5.732 12.5H20v-1H5.732l4.518-5.358-.768-.642-5.476 6.494-.006.005v.002l.004.002L9.481 18.5z" style="fill:%23000"/></svg>',
    },
    linked: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="Layer_1" x="0" y="0" style="enable-background:new 0 0 24 24" version="1.1" viewBox="0 0 24 24"><style>.st0{fill:%23020202}</style><path d="m16.5 13.4-.9-.9 1.8-1.8c1.1-1.1 1.1-3 0-4.1-1.1-1.1-3-1.1-4.1 0l-1.8 1.8-.9-.9 1.8-1.8c1.6-1.6 4.3-1.6 5.9 0 1.6 1.6 1.6 4.3 0 5.9l-1.8 1.8zM8.7 19.5c-1.1 0-2.1-.4-2.9-1.2-1.6-1.6-1.6-4.3 0-5.9l1.8-1.8.9.9-1.8 1.8c-1.1 1.1-1.1 3 0 4.1 1.1 1.1 3 1.1 4.1 0l1.8-1.8.9.9-1.8 1.8c-.9.8-2 1.2-3 1.2z" class="st0"/><path d="m8.464 14.687 6.223-6.222.919.919-6.222 6.222z" class="st0"/></svg>',
    },
    loading: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 24 24" viewBox="0 0 24 24"><path d="M12 19.5c-4.1 0-7.5-3.4-7.5-7.5S7.9 4.5 12 4.5s7.5 3.4 7.5 7.5-3.4 7.5-7.5 7.5zm0-14.1c-3.6 0-6.6 2.9-6.6 6.6 0 3.6 2.9 6.6 6.6 6.6 3.6 0 6.6-2.9 6.6-6.6 0-3.6-3-6.6-6.6-6.6z" style="fill:%23eeeff2"/><path d="M7 17.4c-.1 0-.2 0-.3-.1C5.3 15.9 4.5 14 4.5 12s.8-3.9 2.2-5.3C8.1 5.3 10 4.5 12 4.5s3.9.8 5.3 2.2c.2.2.2.5 0 .7s-.5.2-.7 0c-1.2-1.2-2.9-1.9-4.6-1.9-1.8 0-3.4.7-4.6 1.9s-2 2.8-2 4.6c0 1.8.7 3.4 1.9 4.6.2.2.2.5 0 .7 0 .1-.2.1-.3.1z"/></svg>',
    },
    maximize: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 12.996V17.3l4.75-4.798.75.75L6.7 18h4.303v1H4.999v-6.005zM13.003 5v1h4.295L12.5 10.75l.75.75L18 6.701v4.295h1V5z" style="fill:%23000"/></svg>',
    },
    menu: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 16v1H6v-1zm0-5v1H6v-1zm0-5v1H6V6z" style="fill:%23000"/></svg>',
    },
    'menu-alt': {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.5 17c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M11 12c0 .83.67 1.5 1.5 1.5S14 12.83 14 12s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5m0-6.5c0 .83.67 1.5 1.5 1.5S14 6.33 14 5.5 13.33 4 12.5 4 11 4.67 11 5.5" style="fill:%23000"/></svg>',
    },
    minimize: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 19v-4.298L5.25 19.5l-.75-.75L9.298 14H5v-1h6v6zm9-8v-1h-4.298L19.5 5.25l-.75-.75L14 9.298V5h-1v6z" style="fill:%23000"/></svg>',
    },
    minus: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 11.5v1h16v-1z" style="fill:%23000"/></svg>',
    },
    next: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.121 11.997 9.644 5.5l-.769.642L13.815 12l-4.94 5.858.768.642 5.476-6.494.006-.005V12z" style="fill:%23000"/></svg>',
    },
    none: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 17.456h12v-1H8zm0-5h12v-1H8zm0-5h12v-1H8zm-4-.5a1.001 1.001 0 0 0 2 0 1.001 1.001 0 0 0-2 0m0 5a1.001 1.001 0 0 0 2 0 1.001 1.001 0 0 0-2 0m0 5a1.001 1.001 0 0 0 2 0 1.001 1.001 0 0 0-2 0" style="fill:%23000"/></svg>',
    },
    'not-allowed': {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18m-8 9c0-4.411 3.589-8 8-8 2.026 0 3.873.763 5.284 2.01L6.009 17.283A7.96 7.96 0 0 1 4 12m8 8a7.96 7.96 0 0 1-5.284-2.01L17.991 6.717A7.96 7.96 0 0 1 20 12c0 4.411-3.59 8-8 8" style="fill:%23000"/></svg>',
    },
    paste: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 24 24" viewBox="0 0 24 24"><path d="M4.6 19.1h3.9v-.8H5.3V5.7h1.6v1.6h7.8V5.7h1.6V8h.3l.5.3V4.9h-2.4v-.7h-2.4c0-.9-.7-1.6-1.6-1.6s-1.4.7-1.4 1.6H6.9V5H4.6v14.1zM7.7 4.9H10v-1c0-.3.2-.5.5-.5h.6c.3 0 .5.2.5.5V5H14v1.6H7.7V4.9zm3.1 11h7.1v.8h-7.1v-.8zm-1.5-7v12.5h10.2v-9.7l-2.8-2.8H9.3zm9.4 11.7H10v-11h5.5v3.1h3.1v7.9zm0-8.6h-2.4V9.6h.2l2.1 2.1v.3zm-7.9 1.6h7.1v.8h-7.1v-.8zm0 4.7h5.5v.8h-5.5v-.8z"/></svg>',
    },
    pin: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15 10V4h1.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-8c-.28 0-.5.22-.5.5s.22.5.5.5H10v6c-3 1-4 3.79-4 6h6v5c0 .28.22.5.5.5s.5-.22.5-.5v-5h6c0-2.21-1-5-4-6m-7.92 5c.2-1.31.91-3.28 3.24-4.05l.68-.23V4h3v6.72l.68.23c2.33.78 3.03 2.74 3.24 4.05z" style="fill:%23000"/></svg>',
    },
    pivot: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 24 24" viewBox="0 0 24 24"><path d="M19.8 3.7H4.2c-.3 0-.5.2-.5.5v15.6c0 .3.2.5.5.5h15.6c.3 0 .5-.2.5-.5V4.2c0-.3-.2-.5-.5-.5zm-.5 3.7H8.6V4.7h10.7v2.7zM7.6 4.7v2.7H4.7V4.7h2.9zM4.7 8.4h2.9v10.9H4.7V8.4zm3.9 10.9V8.4h10.7v10.9H8.6z"/><path d="m15.9 10.3-2.2 1.9.6.8 1.1-1v3.6h-3l1-1.3-.7-.6-2.1 2.3v.1l2 2.2.7-.6-.9-1.1h4V12l1.3 1.1.6-.8-2.4-2z"/></svg>',
    },
    plus: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 11.5h-7.5V4h-1v7.5H4v1h7.5V20h1v-7.5H20z" style="fill:%23000"/></svg>',
    },
    previous: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.875 12zl.006-.005L14.357 5.5l.768.642L10.185 12l4.939 5.858-.768.642-5.477-6.497z" style="fill:%23000"/></svg>',
    },
    right: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m13.75 6.142 4.518 5.358H4v1h14.268l-4.518 5.358.768.642 5.476-6.494.006-.005-.001-.002H20l-.004-.002L14.519 5.5z" style="fill:%23000"/></svg>',
    },
    save: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m20.497 7.513-3.4-3.84A2 2 0 0 0 15.6 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839a2 2 0 0 0-.503-1.326M13.5 4v3H7V4zM7 20v-8h10v8zm13-1c0 .551-.449 1-1 1h-1v-8a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v8H5c-.551 0-1-.449-1-1V5c0-.551.449-1 1-1h1v3a1 1 0 0 0 1 1h6.5a1 1 0 0 0 1-1V4h1.1a1 1 0 0 1 .748.337l3.4 3.839a1 1 0 0 1 .252.663z" style="fill:%23000"/></svg>',
    },
    'small-down': {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 24 24" viewBox="0 0 24 24"><path d="m7.8 9.7 4.2 4.6 4.2-4.6z"/></svg>',
    },
    'small-left': {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 24 24" viewBox="0 0 24 24"><path d="M14.3 7.8 9.7 12l4.6 4.2z"/></svg>',
    },
    'small-right': {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 24 24" viewBox="0 0 24 24"><path d="m9.7 16.2 4.6-4.2-4.6-4.2z"/></svg>',
    },
    'small-up': {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 24 24" viewBox="0 0 24 24"><path d="M16.2 14.3 12 9.7l-4.2 4.6z"/></svg>',
    },
    tick: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m10 16.02-4.242-4.14-.758.74 5 4.88 10-9.76-.758-.74z" style="fill:%23000"/></svg>',
    },
    'tree-closed': {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.121 11.997 9.644 5.5l-.769.642L13.815 12l-4.94 5.858.768.642 5.476-6.494.006-.005V12z" style="fill:%23000"/></svg>',
    },
    'tree-indeterminate': {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 11.5v1h16v-1z" style="fill:%23000"/></svg>',
    },
    'tree-open': {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m12 15.125-.005-.006L5.5 9.643l.642-.768L12 13.815l5.858-4.94.642.769-6.497 5.477z"/></svg>',
    },
    unlinked: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="Layer_1" x="0" y="0" style="enable-background:new 0 0 24 24" version="1.1" viewBox="0 0 24 24"><style>.st0{fill:%23020202}</style><path d="m8.487 14.65 1.768-1.769.92.92-1.768 1.767zM18.3 5.7c-1.6-1.6-4.3-1.6-5.9 0l-1.8 1.8.9.9 1.8-1.8c1.1-1.1 3-1.1 4.1 0 1.1 1.1 1.1 3 0 4.1l-1.8 1.8.9.9 1.8-1.8c1.6-1.6 1.6-4.3 0-5.9z" class="st0"/><path d="M10.8 17.4c-1.1 1.1-3 1.1-4.1 0-1.1-1.1-1.1-3 0-4.1l1.8-1.8-.9-.9-1.8 1.8c-1.6 1.6-1.6 4.3 0 5.9.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 3-1.2l1.8-1.8-.9-.9-1.8 1.8zM5.595 6.483l.92-.92 11.737 11.738-.919.92zM12.937 10.27l1.768-1.768.92.92-1.769 1.767z" class="st0"/></svg>',
    },
    up: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m5.5 9.48.642.77L11.5 5.732V20h1V5.732l5.358 4.518.642-.768-6.494-5.476L12.001 4h-.002l-.002.003z" style="fill:%23000"/></svg>',
    },
    grip: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 24 24" viewBox="0 0 24 24"><path d="M18 14v1H6v-1h12zm0-5v1H6V9h12z"/></svg>',
    },
    settings: {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m13.18 4 .451 2.254c.93.263 1.811.733 2.55 1.453l2.157-.729 1.18 2.044-1.722 1.513a6 6 0 0 1 0 2.93l1.722 1.514-1.18 2.044-2.156-.73a5.93 5.93 0 0 1-2.55 1.453L13.18 20h-2.36l-.451-2.254a5.94 5.94 0 0 1-2.55-1.453l-2.157.729-1.18-2.044 1.722-1.513a6 6 0 0 1 0-2.93L4.482 9.022l1.18-2.044 2.156.73a5.94 5.94 0 0 1 2.55-1.454L10.82 4zM14 3h-4l-.497 2.486A6.9 6.9 0 0 0 7.59 6.575l-2.384-.807-2 3.464 1.904 1.672a7 7 0 0 0 0 2.192l-1.904 1.672 2 3.464 2.384-.806q.857.691 1.913 1.088L10 21h4l.498-2.486a6.9 6.9 0 0 0 1.912-1.089l2.384.808 2-3.464-1.903-1.673a7 7 0 0 0 0-2.192l1.903-1.672-2-3.464-2.384.806a6.9 6.9 0 0 0-1.912-1.088zm-2 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0-1c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3" style="fill:%23000"/></svg>',
    },
  },
});

// Different icons for light/dark (All other icons are inverted with filter)
// @ts-ignore
const pdsLightThemeSvgIcons = iconOverrides({
  type: 'image',
  mask: true,
  icons: {
    'checkbox-checked': {
      url: 'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="%23FBFCFF" d="m20.22,7.47l-1.47-1.42-9.26,9.02-4.24-4.15-1.47,1.42,5.71,5.6,10.73-10.47Z"/></svg>',
    },
    'checkbox-indeterminate': {
      url: 'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="%23010205" d="m20,11v2H4v-2h16Z"/></svg>',
    },
    'radio-button-on': {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle fill="%23FBFCFF" cx="12" cy="12" r="6"/></svg>',
    },
  },
});

// @ts-ignore
const pdsDarkThemeSvgIcons = iconOverrides({
  type: 'image',
  mask: true,
  icons: {
    'checkbox-checked': {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="%23010205" d="m20.22,7.47l-1.47-1.42-9.26,9.02-4.24-4.15-1.47,1.42,5.71,5.6,10.73-10.47Z"/></svg>',
    },
    'checkbox-indeterminate': {
      url: 'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="%23FBFCFF" d="m20,11v2H4v-2h16Z"/></svg>',
    },
    'radio-button-on': {
      url: 'data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle fill="%23010205" cx="12" cy="12" r="6"/></svg>',
    },
  },
});

export const pdsDarkTheme: Theme = themeQuartz
  .withParams({
    browserColorScheme: 'dark',
    accentColor: themeDarkNotificationInfo, // active-color
    backgroundColor: themeDarkBackgroundBase,
    foregroundColor: themeDarkPrimary,
    headerBackgroundColor: themeDarkBackgroundSurface,
    // headerHeight: calc(var(--ag-font-size) + var(--ag-grid-size) * 2.9),
    // disabled-foreground-color: $pds-theme-dark-state-disabled,
    // TODO: PDS Sass variable missing
    selectedRowBackgroundColor: '#040405',
    oddRowBackgroundColor: themeDarkBackgroundSurface,
    modalOverlayBackgroundColor: themeDarkBackgroundFrosted,
    // rowHeight: calc(var(--ag-font-size) + var(--ag-grid-size) * 4),
    rowHoverColor: themeDarkStateHover,
    columnHoverColor: themeDarkStateHover,
    rangeSelectionBorderColor: themeDarkStateFocus,
    borderColor: themeDarkContrastLow,
    // borders-input: 1px solid,
    // 1px to be consistent with other borders of ag-grid.
    // input-border-color: $pds-theme-dark-contrast-medium,
    // input-border-color-invalid: $pds-theme-dark-notification-error,
    // input-disabled-border-color: $pds-theme-dark-state-disabled,
    inputDisabledBackgroundColor: themeDarkBackgroundBase,
    borderRadius: borderRadiusSmall,
    wrapperBorderRadius: borderRadiusMedium,
    invalidColor: themeDarkNotificationError,
    // checkbox-checked-color: $pds-theme-dark-primary,
    // checkbox-unchecked-color: $pds-theme-dark-contrast-medium,
    // checkbox-indeterminate-color: $pds-theme-dark-background-base,
    checkboxBorderRadius: borderRadiusSmall,
    // checkboxBackgroundColor: themeDarkBackgroundBase,
    // toggle-button-border-width: 2px,
    // toggle-button-on-border-color: $pds-theme-dark-notification-success,
    // toggle-button-off-border-color: $pds-theme-dark-state-disabled,
    // toggle-button-switch-border-color: transparent,
    toggleButtonOnBackgroundColor: themeDarkNotificationSuccess,
    toggleButtonOffBackgroundColor: themeDarkBackgroundBase,
    toggleButtonSwitchBackgroundColor: themeDarkPrimary,
    toggleButtonHeight: 28,
    toggleButtonWidth: 48,
    // input-focus-box-shadow: none,
    // input-focus-border-color: $pds-theme-dark-primary,
    // grid-size: 10px,
    iconSize: 24,
    fontFamily: fontFamily,
    fontSize: fontSizeTextSmall,
    // icon-font-family: none,
  })
  .withParams({
    browserColorScheme: 'light',
    accentColor: themeLightNotificationInfo, // active-color
    backgroundColor: themeLightBackgroundBase,
    foregroundColor: themeLightPrimary,
    headerBackgroundColor: themeLightBackgroundSurface,
    // headerHeight: calc(var(--ag-font-size) + var(--ag-grid-size) * 2.9),
    // disabled-foreground-color: $pds-theme-dark-state-disabled,
    // TODO: PDS Sass variable missing
    selectedRowBackgroundColor: '#cbced7',
    oddRowBackgroundColor: themeLightBackgroundSurface,
    modalOverlayBackgroundColor: themeLightBackgroundFrosted,
    // rowHeight: calc(var(--ag-font-size) + var(--ag-grid-size) * 4),
    rowHoverColor: themeLightStateHover,
    columnHoverColor: themeLightStateHover,
    rangeSelectionBorderColor: themeLightStateFocus,
    borderColor: themeLightContrastLow,
    // borders-input: 1px solid,
    // 1px to be consistent with other borders of ag-grid.
    // input-border-color: $pds-theme-dark-contrast-medium,
    // input-border-color-invalid: $pds-theme-dark-notification-error,
    // input-disabled-border-color: $pds-theme-dark-state-disabled,
    inputDisabledBackgroundColor: themeLightBackgroundBase,
    borderRadius: borderRadiusSmall,
    wrapperBorderRadius: borderRadiusMedium,
    invalidColor: themeLightNotificationError,
    // checkbox-checked-color: $pds-theme-dark-primary,
    // checkbox-unchecked-color: $pds-theme-dark-contrast-medium,
    // checkbox-indeterminate-color: $pds-theme-dark-background-base,
    checkboxBorderRadius: borderRadiusSmall,
    // checkboxBackgroundColor: themeDarkBackgroundBase,
    // toggle-button-border-width: 2px,
    // toggle-button-on-border-color: $pds-theme-dark-notification-success,
    // toggle-button-off-border-color: $pds-theme-dark-state-disabled,
    // toggle-button-switch-border-color: transparent,
    toggleButtonOnBackgroundColor: themeLightNotificationSuccess,
    toggleButtonOffBackgroundColor: themeLightBackgroundBase,
    toggleButtonSwitchBackgroundColor: themeLightPrimary,
    toggleButtonHeight: 28,
    toggleButtonWidth: 48,
    // input-focus-box-shadow: none,
    // input-focus-border-color: $pds-theme-dark-primary,
    // grid-size: 10px,
    iconSize: 24,
    fontFamily: fontFamily,
    fontSize: fontSizeTextSmall,
    // icon-font-family: none,
  })
  .withPart(pdsSvgIcons);
