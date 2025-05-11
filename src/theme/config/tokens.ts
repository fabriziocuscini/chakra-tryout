import { generatePalette } from '../utils';

export const tokens = {
  colors: {
    blue: generatePalette(
      '#171f35, #1a233c, #222e52, #2e3f75, #3b54a2, #5672c7, #8499da, #afbde9, #d3dbf4, #eaeefa, #f3f5fc'
    ),
    magenta: generatePalette(
      '#1e0b1a, #250e20, #3c1734, #602453, #8f347b, #c047a5, #d378bf, #e3a6d6, #efcbe7, #f6e3f2, #f9ecf6'
    ),
    mauve: generatePalette(
      '#242328, #29282d, #37363d, #4e4c56, #6a6875, #8b8996, #adabb5, #cbcbd1, #e4e3e7, #f3f3f5, #f9f9f9'
    ),
    orange: generatePalette(
      '#241302, #2e1803, #4d2905, #7c4208, #b4620f, #e68524, #e9a868, #efc8a1, #f6e2cd, #fbf2e9, #fdf7f2'
    ),
    red: generatePalette(
      '#220604, #2c0805, #480d09, #75160f, #ab2319, #db3b2f, #e2776f, #ebaaa5, #f4d2cf, #faebea, #fcf3f3'
    ),
    green: generatePalette(
      '#0f1710, #131e15, #1f3122, #305236, #407f4c, #4cb860, #74d586, #a0e7ad, #c6f2ce, #dff8e4, #e8faec'
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
  sizes: {
    navbar: { value: '4rem' },
  },
};
