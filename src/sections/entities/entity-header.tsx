import { Heading, Icon, VStack, Text, Separator, Button, HStack, Stack } from '@chakra-ui/react';
import { Check, ClockCounterClockwise } from '@phosphor-icons/react';
import { X } from '@phosphor-icons/react';

interface EntityHeaderProps {
  name: string;
  createdAt: string;
  updatedAt?: string;
}

export function EntityHeader({ name, createdAt }: EntityHeaderProps) {
  return (
    <Stack direction={{ base: 'column', md: 'row' }} gap={4} alignItems="flex-start">
      <VStack flex={1} alignItems="flex-start">
        <Heading as="h1" textStyle="4xl">
          {name}
        </Heading>
        <Text color="text.muted">First onboarded on {createdAt}</Text>
      </VStack>
      <HStack gap="{spacing.gutter.sm}" flexWrap="wrap">
        <Button variant={{ base: 'subtle', md: 'ghost' }}>
          <Icon display={{ base: 'none', md: 'block' }}>
            <ClockCounterClockwise />
          </Icon>
          Show activity log
        </Button>
        <Button variant="subtle">Send for review</Button>
        <Separator
          orientation="vertical"
          height={6}
          mx={2}
          display={{ base: 'none', md: 'block' }}
        />
        <Button variant="subtle" colorPalette="green">
          <Check />
          Approve
        </Button>
        <Button variant="subtle" colorPalette="red">
          <X />
          Reject
        </Button>
      </HStack>
    </Stack>
  );
}
