import { createSystem, defineTokens } from '@chakra-ui/react';

const tokens = defineTokens({
  fonts: {
    body: { value: 'Inter, sans-serif' },
    heading: { value: 'Inter, sans-serif' },
  },
});

export default createSystem({
  theme: { tokens },
});
