import { Button, Heading, HStack, VStack } from '@chakra-ui/react';

export default function Overview() {
  return (
    <VStack gap={4} alignItems="flex-start">
      <Heading as="h1">Overview</Heading>
      <HStack gap="{spacing.gutter}" flexWrap="wrap">
        <Button colorPalette="blue" variant="solid">
          Solid
        </Button>
        <Button colorPalette="blue" variant="surface">
          Surface
        </Button>
        <Button colorPalette="blue" variant="subtle">
          Subtle
        </Button>
        <Button colorPalette="blue" variant="outline">
          Outline
        </Button>
        <Button colorPalette="blue" variant="ghost">
          Ghost
        </Button>
      </HStack>
      <HStack gap="{spacing.gutter}" flexWrap="wrap">
        <Button colorPalette="accent" variant="solid">
          Solid
        </Button>
        <Button colorPalette="accent" variant="surface">
          Surface
        </Button>
        <Button colorPalette="accent" variant="subtle">
          Subtle
        </Button>
        <Button colorPalette="accent" variant="outline">
          Outline
        </Button>
        <Button colorPalette="accent" variant="ghost">
          Ghost
        </Button>
      </HStack>
      <HStack gap="{spacing.gutter}" flexWrap="wrap">
        <Button colorPalette="neutral" variant="solid">
          Solid
        </Button>
        <Button colorPalette="neutral" variant="surface">
          Surface
        </Button>
        <Button colorPalette="neutral" variant="subtle">
          Subtle
        </Button>
        <Button colorPalette="neutral" variant="outline">
          Outline
        </Button>
        <Button colorPalette="neutral" variant="ghost">
          Ghost
        </Button>
      </HStack>
    </VStack>
  );
}
