import { defineRecipe } from '@chakra-ui/react';

const headingRecipe = defineRecipe({
  base: {
    fontWeight: 'medium',
  },
});

export const recipes = { heading: headingRecipe };
