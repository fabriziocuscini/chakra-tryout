import { createSystem, defaultConfig, defineConfig, defineRecipe } from '@chakra-ui/react';
import { breakpoints, tokens, semanticTokens, recipes } from './config';

const config = defineConfig({
  theme: {
    breakpoints: breakpoints,
    recipes: recipes,
    tokens: tokens,
    semanticTokens: semanticTokens,
  },
});

export const system = createSystem(defaultConfig, config);
