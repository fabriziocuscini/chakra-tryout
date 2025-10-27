import { tooltipAnatomy } from '@chakra-ui/react/anatomy';
import { defineSlotRecipe } from '@chakra-ui/react';

const tooltipRecipe = defineSlotRecipe({
  slots: tooltipAnatomy.keys(),
  base: {
    content: {
      bg: 'neutral.solid',
      borderRadius: 'full',
    },
  },
});

export const slotRecipes = { tooltip: tooltipRecipe };
