import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';
import { generateColorRamp, generateSemanticPalette } from './utils';

const config = defineConfig({
  theme: {
    breakpoints: {
      xs: '480px',
      sm: '768px',
      md: '1024px',
      lg: '1280px',
      xl: '1536px',
      '2xl': '1920px',
    },
    tokens: {
      colors: {
        blue: generateColorRamp(
          '#171f35, #1a233c, #222e52, #2e3f75, #3b54a2, #5672c7, #8499da, #afbde9, #d3dbf4, #eaeefa, #f3f5fc'
        ),
        magenta: generateColorRamp(
          '#1e0b1a, #250e20, #3c1734, #602453, #8f347b, #c047a5, #d378bf, #e3a6d6, #efcbe7, #f6e3f2, #f9ecf6'
        ),
        mauve: generateColorRamp(
          '#242328, #29282d, #37363d, #4e4c56, #6a6875, #8b8996, #adabb5, #cbcbd1, #e4e3e7, #f3f3f5, #f9f9f9'
        ),
      },
      fonts: {
        body: { value: 'Inter, sans-serif' },
        heading: { value: 'Inter, sans-serif' },
      },
      spacing: {
        gutter: {
          DEFAULT: { value: '{spacing.4}' },
          xs: { value: '{spacing.1}' },
          sm: { value: '{spacing.2}' },
          md: { value: '{spacing.4}' },
          lg: { value: '{spacing.6}' },
          xl: { value: '{spacing.8}' },
        },
      },
    },
    semanticTokens: {
      colors: {
        blue: generateSemanticPalette('blue', {
          contrast: { light: '#ffffff', dark: '#ffffff' },
          fg: { light: 700, dark: 300 },
          subtle: { light: 100, dark: 900 },
          muted: { light: 200, dark: 800 },
          emphasized: { light: 300, dark: 700 },
          solid: { light: 500, dark: 600 },
          focusRing: { light: 400, dark: 400 },
        }),
        accent: generateSemanticPalette('magenta', {
          contrast: { light: '#ffffff', dark: '#ffffff' },
          fg: { light: 700, dark: 300 },
          subtle: { light: 100, dark: 900 },
          muted: { light: 200, dark: 800 },
          emphasized: { light: 300, dark: 700 },
          solid: { light: 500, dark: 600 },
          focusRing: { light: 400, dark: 400 },
        }),
        neutral: generateSemanticPalette('mauve', {
          contrast: { light: '#ffffff', dark: '#000000' },
          fg: { light: 800, dark: 200 },
          subtle: { light: 100, dark: 900 },
          muted: { light: 200, dark: 800 },
          emphasized: { light: 300, dark: 700 },
          solid: { light: 900, dark: 100 },
          focusRing: { light: 400, dark: 400 },
        }),
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
