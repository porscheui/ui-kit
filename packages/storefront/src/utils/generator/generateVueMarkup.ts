import type { ElementConfig, HTMLTagOrComponent } from '@/components/playground/ConfiguratorControls';
import { pascalCase } from 'change-case';

const getVueCode = (code: string | undefined) => `<script setup lang="ts"></script>

<template>
${code}
</template>`;

export const generateVueMarkup = (
  configs: (string | ElementConfig<HTMLTagOrComponent> | undefined)[],
  indentLevel = 1
): string => {
  const outputs = configs.map((config) => createVueMarkup(config, indentLevel));
  return getVueCode(outputs.join('\n\n'));
};

const createVueMarkup = (config: string | ElementConfig<HTMLTagOrComponent> | undefined, indentLevel = 0): string => {
  const indent = '  '.repeat(indentLevel);

  if (!config) return '';
  if (typeof config === 'string') return `${indent}${config}`;

  const { tag, properties = {}, children = [] } = config;
  const isPDSComponent = tag.startsWith('p-');

  let transformedTag: string = tag;
  if (isPDSComponent) {
    transformedTag = pascalCase(tag);
  }

  const propertiesArray = Object.entries(properties).map(([key, value]) => {
    if (typeof value === 'string') return `${key}=\"${value}\"`;
    return `:${key}=\"${JSON.stringify(value)}\"`;
  });

  const propertiesString = propertiesArray.length > 0 ? ` ${propertiesArray.join(' ')}` : '';
  const processedChildren = (children || []).map((child) => createVueMarkup(child, indentLevel + 1)).join('\n');

  const markup =
    children.length > 0
      ? `${'  '.repeat(indentLevel)}<${transformedTag}${propertiesString}>\n${processedChildren}\n${'  '.repeat(indentLevel)}</${transformedTag}>`
      : `${'  '.repeat(indentLevel)}<${transformedTag}${propertiesString} />`;

  return markup;
};
