import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';
import { generateColorRamp, generateSemanticPalette } from './utils';

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        purple: generateColorRamp(
          '#1e0b1a, #250e20, #3c1734, #602453, #8f347b, #c047a5, #d378bf, #e3a6d6, #efcbe7, #f6e3f2, #f9ecf6'
        ),
      },
      fonts: {
        body: { value: 'Inter, sans-serif' },
        heading: { value: 'Inter, sans-serif' },
      },
    },
    semanticTokens: {
      colors: {
        purple: generateSemanticPalette('purple', {
          contrast: { light: '#ffffff', dark: '#ffffff' },
          fg: { light: 700, dark: 300 },
          subtle: { light: 100, dark: 900 },
          muted: { light: 200, dark: 800 },
          emphasized: { light: 300, dark: 700 },
          solid: { light: 600, dark: 600 },
          focusRing: { light: 400, dark: 400 },
        }),
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
