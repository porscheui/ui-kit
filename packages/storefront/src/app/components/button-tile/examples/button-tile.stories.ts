'use client';

import type { Story } from '@/components/playground/componentStory';

export const buttonTileStory: Story = {
  state: {
    properties: { label: 'Some label', description: 'Some Description' },
  },
  generator: ({ properties } = {}) => [
    {
      tag: 'p-button-tile',
      properties,
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
};
