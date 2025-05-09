import { Button, DataList, Heading, Stack, Text, Wrap } from '@chakra-ui/react';

export default function Overview() {
  const colorPalettes = [
    'accent',
    'neutral',
    'success',
    'warning',
    'danger',
    'blue',
    'teal',
    'pink',
    'purple',
    'cyan',
    'yellow',
  ];

  return (
    <Stack gap={4} alignItems="flex-start">
      <Heading>Buttons</Heading>
      {colorPalettes.map(colorPalette => (
        <DataList.Root orientation="horizontal">
          <DataList.Item>
            <DataList.ItemLabel>{colorPalette}</DataList.ItemLabel>
            <DataList.ItemValue>
              <Wrap key={colorPalette}>
                <Button colorPalette={colorPalette} variant="solid">
                  Solid
                </Button>
                <Button colorPalette={colorPalette} variant="surface">
                  Surface
                </Button>
                <Button colorPalette={colorPalette} variant="subtle">
                  Subtle
                </Button>
                <Button colorPalette={colorPalette} variant="outline">
                  Outline
                </Button>
                <Button colorPalette={colorPalette} variant="ghost">
                  Ghost
                </Button>
              </Wrap>
            </DataList.ItemValue>
          </DataList.Item>
        </DataList.Root>
      ))}
    </Stack>
  );
}
