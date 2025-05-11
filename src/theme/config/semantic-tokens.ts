import { generateSemanticPalette } from '../utils';

const redSemanticPalette = generateSemanticPalette('red', {
  contrast: { light: '#ffffff', dark: '#ffffff' },
  fg: { light: 600, dark: 500 },
  subtle: { light: 100, dark: 900 },
  muted: { light: 200, dark: 800 },
  emphasized: { light: 300, dark: 700 },
  solid: { light: 500, dark: 600 },
  focusRing: { light: 400, dark: 400 },
});

const orangeSemanticPalette = generateSemanticPalette('orange', {
  contrast: { light: '#ffffff', dark: '#ffffff' },
  fg: { light: 600, dark: 500 },
  subtle: { light: 100, dark: 900 },
  muted: { light: 200, dark: 800 },
  emphasized: { light: 300, dark: 700 },
  solid: { light: 500, dark: 600 },
  focusRing: { light: 400, dark: 400 },
});

const greenSemanticPalette = generateSemanticPalette('green', {
  contrast: { light: '#ffffff', dark: '#ffffff' },
  fg: { light: 600, dark: 500 },
  subtle: { light: 100, dark: 900 },
  muted: { light: 200, dark: 800 },
  emphasized: { light: 300, dark: 700 },
  solid: { light: 500, dark: 600 },
  focusRing: { light: 400, dark: 400 },
});

export const semanticTokens = {
  colors: {
    accent: generateSemanticPalette('magenta', {
      contrast: { light: '#ffffff', dark: '#ffffff' },
      fg: { light: 600, dark: 500 },
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
    blue: generateSemanticPalette('blue', {
      contrast: { light: '#ffffff', dark: '#ffffff' },
      fg: { light: 700, dark: 300 },
      subtle: { light: 100, dark: 900 },
      muted: { light: 200, dark: 800 },
      emphasized: { light: 300, dark: 700 },
      solid: { light: 500, dark: 600 },
      focusRing: { light: 400, dark: 400 },
    }),
    green: greenSemanticPalette,
    success: greenSemanticPalette,
    positive: greenSemanticPalette,
    orange: orangeSemanticPalette,
    warning: orangeSemanticPalette,
    red: redSemanticPalette,
    danger: redSemanticPalette,
    error: redSemanticPalette,
    negative: redSemanticPalette,
    bg: {
      DEFAULT: { value: { _light: '#FBFBFD', _dark: '#09090b' } },
    },
    text: {
      fg: { value: { _light: '{colors.mauve.950}', _dark: '{colors.mauve.50}' } },
      DEFAULT: { value: { _light: '{colors.text.fg}', _dark: '{colors.text.fg}' } },
      default: { value: { _light: '{colors.text.fg}', _dark: '{colors.text.fg}' } },
      muted: { value: { _light: '{colors.mauve.500}', _dark: '{colors.mauve.400}' } },
      subtle: { value: { _light: '{colors.mauve.400}', _dark: '{colors.mauve.500}' } },
      inverted: { value: { _light: '{colors.mauve.50}', _dark: '#000000' } },
      accent: { value: { _light: '{colors.accent.fg}', _dark: '{colors.accent.fg}' } },
    },
  },
};
