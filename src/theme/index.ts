import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';
import { breakpoints, tokens, semanticTokens, recipes, slotRecipes } from './config';

const config = defineConfig({
  theme: {
    breakpoints: breakpoints,
    recipes: recipes,
    slotRecipes: slotRecipes,
    tokens: tokens,
    semanticTokens: semanticTokens,
  },
});

export const system = createSystem(defaultConfig, config);
