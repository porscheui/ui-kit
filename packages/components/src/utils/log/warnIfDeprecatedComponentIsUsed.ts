import { getTagNameWithoutPrefix } from '../tag-name';

// TODO: add missing unit test
export const warnIfDeprecatedComponentIsUsed = (host: HTMLElement, message?: string): void => {
  console.warn(
    `[Porsche Design System] Component "${getTagNameWithoutPrefix(
      host
    )}" is deprecated and will be removed with next major release. ${message}`
  );
};
