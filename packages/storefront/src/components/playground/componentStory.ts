import type { ConfiguratorTagNames, ElementConfig } from '@/components/playground/Configurator';

/**
 * Questions:
 * How to deal with string values which have a default value? p-checkbox value default is "on". Text-field prop is not only deleted onBlur.
 * How to deal with mix of options and string? p-crest "allowedValues": ["_self", "_blank", "_parent", "_top", "string"] - Remove "string" from options
 * How to specify which slot/prop is shown/rendered in the markup? Currently all slots have to be specified in the story.
 * Add story information to componentMeta directly?
 * How to deal with href vs slotted anchor (slotsMeta already has hasAltProp but only for named slots )? p-popover description/default
 * ButtonGroup/LinkTileModelSignature has breakpoint customizable as default value. Currently not shown in the select of direction.
 * Some edge cases like p-carousel slidesPerPages which is type number | 'auto'
 * How to deal with aria attributes? Currently not shown in the configurator ('p-icon'). Shown for ('p-spinner') .
 *
 * Should we delete empty string text-field from props? Usually the default is undefined.
 * Model Signature size inherit?
 * How to handle styles in examples? style tag currently works. Inline style is missing conversion react/vanilla.js. Tailwind would be also an option. Currently affecting p-carousel, p-radio-button-wrapper (Missing spacing)
 * How to render allowedValues ['string' | 'number'] like in p-segmented-control? Currently textfield since string can be any value.
 * How to deal with relations? e.g. p-text-field-wrapper needs input with type number when unit is used => Make stories function which gets the current state and returns the correct story
 * How to show undefined default value in select props?
 *
 * TODO:
 * - [ ] - Dynamic import of React Component in Configurator
 * - [x] - Render Example
 * - [x] - Render markup
 * - [ ] - Sync Playground Theme
 * - [ ] - Sync Playground Dir
 * - [x] - Show if prop is default in select & select default
 * - [x] - AllowedValue string[] - select
 * - [x] - AllowedValue string - text input
 * - [x] - Show string attribute if configured in example in text field
 * - [x] - AllowedValue boolean - select (true/false)
 * - [x] - string[] - Remove prop from markup if its default
 * - [x] - string - Remove prop from markup if its default or empty string
 * - [x] - boolean - Remove prop from markup if its default
 * - [ ] - type string[] - multi-select currently filtered in ComponentProps
 * - [x] - filter deprecated props
 * - [x] - filter deprecated prop values (deprecatedValues)
 * - [x] - split element config and only keep config which changes in state, render rest separately
 * - [x] - fix keys
 * - [x] - AllowedValue string with default value
 * - [ ] - AllowedValue number - text field
 * - [ ] - ComponentSlots checkboxes/switches
 * - [x] - syntax highlight broken for p-fieldset-wrapper, radio-button-wrapper
 * - [ ] - console error when initially loading image of p-link-tile (image is still shown)
 * - [ ] - Add breakpoint customizable icon to configurator props p-tag
 * - [ ] - Refactor value conversions (default value, selects...)
 * - [ ] - Weird error when changing form prop of p-select to empty string => form property gets set to null. Seems to be a general error when resetting a text-field prop. The example and generatedOutput looks good so maybe there is a problem when the component quickly disconnects and conntects again?
 * - [ ] - Link social icon error when switching icon back to undefined
 */

export type ComponentsStory = {
  [Tag in ConfiguratorTagNames]: ElementConfig[];
};

/**
 * Properties have to be written in jsx syntax. (class => className, style => object). Property values have to be the real value (boolean, object etc.).
 */
export const componentsStory: ComponentsStory = {
  'p-accordion': [
    {
      tag: 'p-accordion',
      // TODO: Add story
    },
  ],
  'p-banner': [
    {
      tag: 'p-banner',
      properties: { open: true },
    },
  ],
  'p-button': [
    {
      tag: 'p-button',
      properties: { icon: 'arrow-right' },
      children: ['Some label'],
    },
  ],
  'p-button-group': [
    {
      tag: 'p-button-group',
      children: [
        { tag: 'p-button', properties: { variant: 'primary' }, children: ['Some label'] },
        { tag: 'p-button', properties: { variant: 'secondary' }, children: ['Some label'] },
      ],
    },
  ],
  'p-button-pure': [
    {
      tag: 'p-button-pure',
      children: ['Some label'],
    },
  ],
  'p-button-tile': [
    {
      tag: 'p-button-tile',
      properties: { label: 'Some label', description: 'Some Description' },
      children: [
        {
          tag: 'p-tag',
          properties: { slot: 'header', theme: 'dark', color: 'background-frosted', compact: true },
          children: ['Some tag'],
        },
        { tag: 'img', properties: { src: 'assets/lights.jpg', alt: 'Some image description' } },
      ],
    },
  ],
  'p-canvas': [
    {
      tag: 'p-canvas',
      // TODO: Add story
    },
  ],
  'p-carousel': [
    {
      tag: 'p-carousel',
      properties: { heading: 'Some heading' },
      children: [
        { tag: 'div', properties: { className: 'slide' }, children: ['Slide 1'] },
        { tag: 'div', properties: { className: 'slide' }, children: ['Slide 2'] },
        { tag: 'div', properties: { className: 'slide' }, children: ['Slide 3'] },
        { tag: 'div', properties: { className: 'slide' }, children: ['Slide 4'] },
      ],
    },
    {
      tag: 'style',
      children: [
        `.slide {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #00b0f4;
    height: 150px;
    color: #010205;
  }`,
      ],
    },
  ],
  'p-checkbox': [
    {
      tag: 'p-checkbox',
      properties: { label: 'Some label', hideLabel: false, name: 'some-name' },
    },
  ],
  'p-checkbox-wrapper': [
    {
      tag: 'p-checkbox-wrapper',
      properties: { label: 'Some label', hideLabel: false },
      children: [{ tag: 'input', properties: { type: 'checkbox', name: 'some-name' } }],
    },
  ],
  'p-content-wrapper': [
    {
      tag: 'p-content-wrapper',
      properties: { width: 'extended' },
      children: [{ tag: 'div', properties: { className: 'example-content' }, children: ['Some content'] }],
    },
  ],
  'p-crest': [
    {
      tag: 'p-crest',
    },
  ],
  'p-display': [
    {
      tag: 'p-display',
      children: ['The quick brown fox jumps over the lazy dog'],
    },
  ],
  'p-divider': [
    {
      tag: 'p-divider',
    },
  ],
  'p-fieldset': [
    {
      tag: 'p-fieldset',
      properties: { label: 'Some legend label' },
      children: [
        {
          tag: 'p-text-field-wrapper',
          properties: { label: 'Some label' },
          children: [{ tag: 'input', properties: { type: 'text', name: 'some-name' } }],
        },
      ],
    },
  ],
  'p-fieldset-wrapper': [
    {
      tag: 'p-fieldset-wrapper',
      properties: { label: 'Some legend label' },
      children: [
        {
          tag: 'p-text-field-wrapper',
          properties: { label: 'Some label' },
          children: [{ tag: 'input', properties: { type: 'text', name: 'some-name' } }],
        },
      ],
    },
  ],
  'p-flex': [
    {
      tag: 'p-flex',
      properties: { className: 'example-flex' },
      children: [
        { tag: 'p-flex-item', children: ['1'] },
        { tag: 'p-flex-item', children: ['2'] },
      ],
    },
    {
      tag: 'p-flex',
      properties: { className: 'example-flex' },
      children: [
        { tag: 'p-flex-item', children: ['1'] },
        { tag: 'p-flex-item', children: ['2'] },
      ],
    },
    {
      tag: 'style',
      children: [
        `.example-flex > :nth-child(1n) {
    background-color: #87cefa;
  }
  .example-flex > :nth-child(2n) {
    background-color: #00bfff;
  }
  .example-flex > * {
    padding: 0 6vw;
    color: #010205;
    text-align: center;
  }`,
      ],
    },
  ],
  'p-flyout': [
    {
      tag: 'p-flyout',
      properties: { open: false, aria: { 'aria-label': 'Some Heading' } },
      children: [
        {
          tag: 'p-heading',
          properties: { slot: 'header', size: 'large', tag: 'h2' },
          children: ['Some Heading'],
        },
        { tag: 'p-text', properties: { slot: '' }, children: ['Some Content'] },
        {
          tag: 'p-button-group',
          properties: { slot: 'footer' },
          children: [
            { tag: 'p-button', properties: { type: 'button' }, children: ['Proceed'] },
            { tag: 'p-button', properties: { type: 'button', variant: 'secondary' }, children: ['Cancel'] },
          ],
        },
        { tag: 'p-text', properties: { slot: 'sub-footer' }, children: ['Some additional Sub-Footer'] },
      ],
    },
  ],
  'p-flyout-multilevel': [
    {
      tag: 'p-flyout-multilevel',
      // TODO: Add story
    },
  ],
  'p-grid': [
    {
      tag: 'p-grid',
      children: [{ tag: 'p-grid-item', properties: { size: 12 }, children: ['12'] }],
    },
    {
      tag: 'p-grid',
      children: [
        { tag: 'p-grid-item', properties: { size: 1 }, children: ['1'] },
        { tag: 'p-grid-item', properties: { size: 11 }, children: ['11'] },
      ],
    },
    {
      tag: 'p-grid',
      children: [
        { tag: 'p-grid-item', properties: { size: 2 }, children: ['2'] },
        { tag: 'p-grid-item', properties: { size: 10 }, children: ['10'] },
      ],
    },
    {
      tag: 'p-grid',
      children: [
        { tag: 'p-grid-item', properties: { size: 3 }, children: ['3'] },
        { tag: 'p-grid-item', properties: { size: 9 }, children: ['9'] },
      ],
    },
    {
      tag: 'p-grid',
      children: [
        { tag: 'p-grid-item', properties: { size: 4 }, children: ['4'] },
        { tag: 'p-grid-item', properties: { size: 8 }, children: ['8'] },
      ],
    },
    {
      tag: 'p-grid',
      children: [
        { tag: 'p-grid-item', properties: { size: 5 }, children: ['5'] },
        { tag: 'p-grid-item', properties: { size: 7 }, children: ['7'] },
      ],
    },
    {
      tag: 'p-grid',
      children: [
        { tag: 'p-grid-item', properties: { size: 6 }, children: ['6'] },
        { tag: 'p-grid-item', properties: { size: 6 }, children: ['6'] },
      ],
    },
    {
      tag: 'p-grid',
      children: [
        { tag: 'p-grid-item', properties: { size: 7 }, children: ['7'] },
        { tag: 'p-grid-item', properties: { size: 5 }, children: ['5'] },
      ],
    },
    {
      tag: 'p-grid',
      children: [
        { tag: 'p-grid-item', properties: { size: 8 }, children: ['8'] },
        { tag: 'p-grid-item', properties: { size: 4 }, children: ['4'] },
      ],
    },
    {
      tag: 'p-grid',
      children: [
        { tag: 'p-grid-item', properties: { size: 9 }, children: ['9'] },
        { tag: 'p-grid-item', properties: { size: 3 }, children: ['3'] },
      ],
    },
    {
      tag: 'p-grid',
      children: [
        { tag: 'p-grid-item', properties: { size: 10 }, children: ['10'] },
        { tag: 'p-grid-item', properties: { size: 2 }, children: ['2'] },
      ],
    },
    {
      tag: 'p-grid',
      children: [
        { tag: 'p-grid-item', properties: { size: 11 }, children: ['11'] },
        { tag: 'p-grid-item', properties: { size: 1 }, children: ['1'] },
      ],
    },
    {
      tag: 'style',
      children: [
        `p-grid {
    margin-top: 8px;
  }
        p-grid-item {
    color: #010205;
    text-align: center;
    background: #87cefa;
    background-clip: content-box;
  }`,
      ],
    },
  ],
  'p-heading': [
    {
      tag: 'p-heading',
      children: ['The quick brown fox jumps over the lazy dog'],
    },
  ],
  'p-headline': [
    {
      tag: 'p-headline',
      children: ['The quick brown fox jumps over the lazy dog'],
    },
  ],
  'p-icon': [
    {
      tag: 'p-icon',
      properties: { name: '360' },
    },
  ],
  'p-inline-notification': [
    {
      tag: 'p-inline-notification',
      properties: { heading: 'Some heading', headingTag: 'h3', description: 'Some description.' },
    },
  ],
  'p-link': [
    {
      tag: 'p-link',
      properties: { href: 'https://porsche.com' },
      children: ['Some label'],
    },
  ],
  'p-link-pure': [
    {
      tag: 'p-link-pure',
      properties: { href: 'https://porsche.com' },
      children: ['Some label'],
    },
  ],
  'p-link-social': [
    {
      tag: 'p-link-social',
      properties: { href: 'https://example.com', icon: 'logo-facebook', target: '_blank', rel: 'nofollow noopener' },
      children: ['Facebook'],
    },
  ],
  'p-link-tile': [
    {
      tag: 'p-link-tile',
      properties: { href: 'https://porsche.com', label: 'Some label', description: 'Some Description' },
      children: [
        {
          tag: 'p-tag',
          properties: { slot: 'header', color: 'background-frosted', compact: true },
          children: ['Some tag'],
        },
        { tag: 'img', properties: { src: 'assets/lights.jpg', alt: 'Some image description' } },
      ],
    },
  ],
  'p-link-tile-model-signature': [
    {
      tag: 'p-link-tile-model-signature',
      properties: { heading: 'Some heading' },
      children: [
        {
          tag: 'p-tag',
          properties: { slot: 'header', color: 'background-frosted', compact: true },
          children: ['Some tag'],
        },
        { tag: 'img', properties: { src: 'assets/lights.jpg', alt: 'Some image description' } },
        {
          tag: 'p-link',
          properties: { slot: 'primary', href: 'https://porsche.com/#primary' },
          children: ['Primary label'],
        },
        {
          tag: 'p-link',
          properties: { slot: 'secondary', href: 'https://porsche.com/#secondary' },
          children: ['Secondary label'],
        },
      ],
    },
  ],
  'p-link-tile-product': [
    {
      tag: 'p-link-tile-product',
      properties: { heading: 'Some heading', price: '1.911,00 €', href: 'https://porsche.com' },
      children: [{ tag: 'img', properties: { src: 'assets/weekender.webp', alt: 'Some alt text' } }],
    },
  ],
  'p-marque': [
    {
      tag: 'p-marque',
    },
  ],
  'p-modal': [
    {
      tag: 'p-modal',
      // TODO: Add story
    },
  ],
  'p-model-signature': [
    {
      tag: 'p-model-signature',
      properties: { model: '911' },
    },
  ],
  'p-multi-select': [
    {
      tag: 'p-multi-select',
      properties: { name: 'name', label: 'Some Label', description: 'Some description' },
      children: [
        { tag: 'p-multi-select-option', properties: { value: 'a' }, children: ['Option A'] },
        { tag: 'p-multi-select-option', properties: { value: 'b' }, children: ['Option B'] },
        { tag: 'p-multi-select-option', properties: { value: 'c' }, children: ['Option C'] },
        { tag: 'p-multi-select-option', properties: { value: 'd' }, children: ['Option D'] },
        { tag: 'p-multi-select-option', properties: { value: 'e' }, children: ['Option E'] },
        { tag: 'p-multi-select-option', properties: { value: 'f' }, children: ['Option F'] },
      ],
    },
  ],
  // 'p-multi-select': {
  //   propsStory: {
  //     name: { value: 'options' },
  //     label: { value: 'Some label' },
  //     description: { value: 'Some description' },
  //   },
  // }],
  'p-optgroup': [
    {
      tag: 'p-optgroup',
      // TODO: Add story
    },
  ],
  'p-pagination': [
    {
      tag: 'p-pagination',
      properties: { totalItemsCount: 500, itemsPerPage: 25, activePage: 1 },
    },
  ],
  'p-pin-code': [
    {
      tag: 'p-pin-code',
      properties: { label: 'Some label' },
    },
  ],
  'p-popover': [
    {
      tag: 'p-popover',
      children: ['Some additional content.'],
    },
  ],
  'p-radio-button-wrapper': [
    {
      tag: 'p-radio-button-wrapper',
      properties: { label: 'Some label' },
      children: [{ tag: 'input', properties: { type: 'radio', name: 'some-name' } }],
    },
    {
      tag: 'p-radio-button-wrapper',
      properties: { label: 'Some label' },
      children: [{ tag: 'input', properties: { type: 'radio', name: 'some-name' } }],
    },
  ],
  'p-scroller': [
    {
      tag: 'p-scroller',
      properties: { className: 'scroller' },
      children: [
        {
          tag: 'p-tag',
          properties: { color: 'primary' },
          children: [
            {
              tag: 'button',
              properties: { type: 'button' },
              children: ['Some tag content'],
            },
          ],
        },
        {
          tag: 'p-tag',
          properties: { color: 'notification-info-soft' },
          children: [
            {
              tag: 'button',
              properties: { type: 'button' },
              children: ['Some tag content'],
            },
          ],
        },
        {
          tag: 'p-tag',
          properties: { color: 'notification-warning-soft' },
          children: [
            {
              tag: 'button',
              properties: { type: 'button' },
              children: ['Some tag content'],
            },
          ],
        },
        {
          tag: 'p-tag',
          properties: { color: 'primary' },
          children: [
            {
              tag: 'button',
              properties: { type: 'button' },
              children: ['Some tag content'],
            },
          ],
        },
        {
          tag: 'p-tag',
          properties: { color: 'notification-info-soft' },
          children: [
            {
              tag: 'button',
              properties: { type: 'button' },
              children: ['Some tag content'],
            },
          ],
        },
        {
          tag: 'p-tag',
          properties: { color: 'notification-warning-soft' },
          children: [
            {
              tag: 'button',
              properties: { type: 'button' },
              children: ['Some tag content'],
            },
          ],
        },
        {
          tag: 'p-tag',
          properties: { color: 'primary' },
          children: [
            {
              tag: 'button',
              properties: { type: 'button' },
              children: ['Some tag content'],
            },
          ],
        },
        {
          tag: 'p-tag',
          properties: { color: 'notification-info-soft' },
          children: [
            {
              tag: 'button',
              properties: { type: 'button' },
              children: ['Some tag content'],
            },
          ],
        },
      ],
    },
    {
      tag: 'style',
      children: [
        `.scroller {
    max-width: 600px;
    & > :not(:last-child) {
      margin-inline-end: 16px;
    }
  }`,
      ],
    },
  ],
  'p-segmented-control': [
    {
      tag: 'p-segmented-control',
      children: [
        { tag: 'p-segmented-control-item', properties: { value: '1' }, children: ['Option 1'] },
        { tag: 'p-segmented-control-item', properties: { value: '2' }, children: ['Option 2'] },
        { tag: 'p-segmented-control-item', properties: { value: '3' }, children: ['Option 3'] },
        { tag: 'p-segmented-control-item', properties: { value: '4' }, children: ['Option 4'] },
        { tag: 'p-segmented-control-item', properties: { value: '5' }, children: ['Option 5'] },
      ],
    },
  ],
  'p-select': [
    {
      tag: 'p-select',
      properties: { name: 'options', label: 'Some Label', description: 'Some description', value: 'a', required: true },
      children: [
        { tag: 'p-select-option', properties: { value: 'a' }, children: ['Option A'] },
        { tag: 'p-select-option', properties: { value: 'b' }, children: ['Option B'] },
        { tag: 'p-select-option', properties: { value: 'c' }, children: ['Option C'] },
        { tag: 'p-select-option', properties: { value: 'd' }, children: ['Option D'] },
        { tag: 'p-select-option', properties: { value: 'e' }, children: ['Option E'] },
        { tag: 'p-select-option', properties: { value: 'f' }, children: ['Option F'] },
      ],
    },
  ],
  'p-select-wrapper': [
    {
      tag: 'p-select-wrapper',
      properties: { label: 'Some label', hideLabel: false },
      children: [
        {
          tag: 'select',
          properties: { name: 'some-name' },
          children: [
            { tag: 'option', properties: { value: 'a' }, children: ['Option A'] },
            { tag: 'option', properties: { value: 'b' }, children: ['Option B'] },
            { tag: 'option', properties: { value: 'c' }, children: ['Option C'] },
            { tag: 'option', properties: { value: 'd' }, children: ['Option D'] },
            { tag: 'option', properties: { value: 'e' }, children: ['Option E'] },
            { tag: 'option', properties: { value: 'f' }, children: ['Option F'] },
          ],
        },
      ],
    },
  ],
  'p-sheet': [
    {
      tag: 'p-sheet',
      // TODO: Add story
    },
  ],
  'p-spinner': [
    {
      tag: 'p-spinner',
      properties: { aria: { 'aria-label': 'Loading page content' } },
    },
  ],
  'p-stepper-horizontal': [
    {
      tag: 'p-stepper-horizontal',
      children: [
        { tag: 'p-stepper-horizontal-item', properties: { state: 'complete' }, children: ['Step 1'] },
        { tag: 'p-stepper-horizontal-item', properties: { state: 'warning' }, children: ['Step 2'] },
        { tag: 'p-stepper-horizontal-item', properties: { state: 'current' }, children: ['Step 3'] },
        { tag: 'p-stepper-horizontal-item', children: ['Step 4'] },
      ],
    },
  ],
  'p-switch': [
    {
      tag: 'p-switch',
      children: ['Some label'],
    },
  ],
  'p-table': [
    {
      tag: 'p-table',
      properties: { caption: 'Some caption' },
      children: [
        {
          tag: 'p-table-head',
          children: [
            {
              tag: 'p-table-head-row',
              children: [
                { tag: 'p-table-head-cell', children: ['Model'] },
                { tag: 'p-table-head-cell', children: ['Date'] },
                { tag: 'p-table-head-cell', children: ['Purchase Intention'] },
                { tag: 'p-table-head-cell', children: ['Status'] },
                { tag: 'p-table-head-cell', children: ['Lead ID'] },
              ],
            },
          ],
        },
        {
          tag: 'p-table-body',
          children: [
            {
              tag: 'p-table-row',
              children: [
                { tag: 'p-table-cell', children: ['718 Cayman'] },
                { tag: 'p-table-cell', children: ['23.06.2021'] },
                { tag: 'p-table-cell', children: ['New Car'] },
                { tag: 'p-table-cell', children: ['Won'] },
                { tag: 'p-table-cell', children: ['0000824402'] },
              ],
            },
            {
              tag: 'p-table-row',
              children: [
                { tag: 'p-table-cell', children: ['Panamera 4S'] },
                { tag: 'p-table-cell', children: ['19.06.2021'] },
                { tag: 'p-table-cell', children: ['New Car'] },
                { tag: 'p-table-cell', children: ['Lost'] },
                { tag: 'p-table-cell', children: ['0000824409'] },
              ],
            },
            {
              tag: 'p-table-row',
              children: [
                { tag: 'p-table-cell', children: ['911 Carrera S'] },
                { tag: 'p-table-cell', children: ['19.05.2021'] },
                { tag: 'p-table-cell', children: ['Used Car'] },
                { tag: 'p-table-cell', children: ['Won'] },
                { tag: 'p-table-cell', children: ['0000824408'] },
              ],
            },
            {
              tag: 'p-table-row',
              children: [
                { tag: 'p-table-cell', children: ['Macan Turbo'] },
                { tag: 'p-table-cell', children: ['10.05.2021'] },
                { tag: 'p-table-cell', children: ['Used Car'] },
                { tag: 'p-table-cell', children: ['Lost'] },
                { tag: 'p-table-cell', children: ['0000824407'] },
              ],
            },
            {
              tag: 'p-table-row',
              children: [
                { tag: 'p-table-cell', children: ['Taycan'] },
                { tag: 'p-table-cell', children: ['03.05.2021'] },
                { tag: 'p-table-cell', children: ['New Car'] },
                { tag: 'p-table-cell', children: ['Won'] },
                { tag: 'p-table-cell', children: ['0000824406'] },
              ],
            },
          ],
        },
      ],
    },
  ],
  'p-tabs': [
    {
      tag: 'p-tabs',
      children: [
        {
          tag: 'p-tabs-item',
          properties: { label: 'Tab One' },
          children: [{ tag: 'p-text', children: ['Tab Content One'] }],
        },
        {
          tag: 'p-tabs-item',
          properties: { label: 'Tab Two' },
          children: [{ tag: 'p-text', children: ['Tab Content Two'] }],
        },
        {
          tag: 'p-tabs-item',
          properties: { label: 'Tab Three' },
          children: [{ tag: 'p-text', children: ['Tab Content Three'] }],
        },
      ],
    },
  ],
  'p-tabs-bar': [
    {
      tag: 'p-tabs-bar',
      // TODO: Add story
    },
  ],
  'p-tag': [
    {
      tag: 'p-tag',
      children: ['Some label'],
    },
  ],
  'p-tag-dismissible': [
    {
      tag: 'p-tag-dismissible',
      children: ['Some label'],
    },
  ],
  'p-text': [
    {
      tag: 'p-text',
      children: ['The quick brown fox jumps over the lazy dog'],
    },
  ],
  'p-text-field-wrapper': [
    {
      tag: 'p-text-field-wrapper',
      properties: { label: 'Some label' },
      children: [{ tag: 'input', properties: { type: 'text', name: 'some-name' } }],
    },
  ],
  'p-text-list': [
    {
      tag: 'p-text-list',
      children: [
        { tag: 'p-text-list-item', children: ['The quick brown fox jumps over the lazy dog'] },
        {
          tag: 'p-text-list-item',
          children: [
            'The quick brown fox jumps over the lazy dog',
            {
              tag: 'p-text-list',
              children: [
                { tag: 'p-text-list-item', children: ['The quick brown fox jumps over the lazy dog'] },
                { tag: 'p-text-list-item', children: ['The quick brown fox jumps over the lazy dog'] },
              ],
            },
          ],
        },
        { tag: 'p-text-list-item', children: ['The quick brown fox jumps over the lazy dog'] },
      ],
    },
  ],
  'p-textarea': [
    {
      tag: 'p-textarea',
      properties: { name: 'some-name', label: 'Some label' },
    },
  ],
  'p-textarea-wrapper': [
    {
      tag: 'p-textarea-wrapper',
      properties: { label: 'Some label' },
      children: [{ tag: 'textarea', properties: { name: 'some-name' } }],
    },
  ],
  'p-toast': [
    {
      tag: 'p-toast',
      // TODO: Add story
    },
  ],
  'p-wordmark': [
    {
      tag: 'p-wordmark',
    },
  ],
  // Unused only for typing purposes
  'p-flex-item': [],
  'p-flyout-multilevel-item': [],
  'p-grid-item': [],
  'p-multi-select-option': [],
  'p-segmented-control-item': [],
  'p-select-option': [],
  'p-stepper-horizontal-item': [],
  'p-table-body': [],
  'p-table-cell': [],
  'p-table-head-cell': [],
  'p-table-row': [],
  'p-table-head-row': [],
  'p-table-head': [],
  'p-tabs-item': [],
  'p-text-list-item': [],
};

// TODO: Revised config for dynamic generation of children based on active slots
// type Config = {
//   tag: TagName | keyof HTMLElementTagNameMap; // The component tag e.g. 'p-button'
//   properties?: Record<string, string | boolean | object>; // The component attributes/props written in camelCase e.g. { hideLabel: 'true' }
//   children?: (string | Config)[]; // Nested children either as string for text or ElementConfig for nested components
// };
//
// type Configuration = {
//   props: object;
//   activeSlots: string[];
// };
//
// type ConfigGen = (config: Configuration) => Config[];
//
// type SlotConfig = {
//   name: string;
//   slot: ConfigGen;
// };
//
// const defaultFlyoutSlots: SlotConfig[] = [
//   {
//     name: 'header',
//     slot: () => [
//       {
//         tag: 'p-heading',
//         properties: { slot: 'header', size: 'large', tag: 'h2' },
//         children: ['Some Heading'],
//       },
//     ],
//   },
//   {
//     name: '',
//     slot: () => [{ tag: 'p-text', properties: { slot: '' }, children: ['Some Content'] }],
//   },
// ];
//
// /**
//  * Utility function to generate children dynamically based on active slot names.
//  */
// const generateChildren = (config: Configuration, content: SlotConfig[]) =>
//   content
//     .filter((slot) => config.activeSlots.includes(slot.name)) // Only include active slots
//     .flatMap((slot) => slot.slot(config, content));
//
// const newConfigTest: Record<string, ConfigGen> = {
//   'p-flyout': (config) => [
//     {
//       tag: 'p-flyout',
//       attributes: { open: 'false', aria: '{ "aria-label": "Some Heading" }' },
//       children: generateChildren(config, defaultFlyoutSlots),
//     },
//   ],
// };
//
// type Config = {
//   tag: TagName | keyof HTMLElementTagNameMap; // The component tag e.g. 'p-button'
//   properties?: Record<string, string | boolean | object>; // The component attributes/props written in camelCase e.g. { hideLabel: 'true' }
//   children?: (string | Config)[]; // Nested children either as string for text or ElementConfig for nested components
// };
//
// const test2 = {
//   'p-flyout': (config = { activeSlots: ['header'] }) => [
//     {
//       tag: 'p-flyout',
//       attributes: { open: 'false', aria: '{ "aria-label": "Some Heading" }' },
//       children: [
//         ...(config.activeSlots.includes('header') && {
//           tag: 'p-heading',
//           properties: { slot: 'header', size: 'large', tag: 'h2' },
//           children: ['Some Heading'],
//         }),
//       ],
//     },
//   ],
// };
