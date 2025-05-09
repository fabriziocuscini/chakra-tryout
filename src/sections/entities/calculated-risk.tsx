import {
  Badge,
  Card,
  Flex,
  Group,
  Heading,
  IconButton,
  Stack,
  Text,
  Presence,
  useDisclosure,
} from '@chakra-ui/react';
import { RiskRatingIndicator } from '@components';
import { CaretUp, CaretDown } from '@phosphor-icons/react';

export function CalculatedRisk() {
  const { open, onToggle } = useDisclosure();
  return (
    <Card.Root>
      <Card.Header pb={open ? '{6}' : 0}>
        <Flex justifyContent="space-between" alignItems="center">
          <Heading size="lg">Calculated risk</Heading>
          <Group>
            <Text fontSize="sm">3.4</Text>
            <Badge colorPalette="green">Low</Badge>
            <IconButton variant="ghost" size="xs" onClick={onToggle}>
              {open ? <CaretDown /> : <CaretUp />}
            </IconButton>
          </Group>
        </Flex>
      </Card.Header>
      <Presence
        present={!open}
        animationName={{
          _open: 'slide-from-bottom, fade-in',
          _closed: 'slide-to-bottom, fade-out',
        }}
        animationDuration="moderate"
      >
        <Card.Body>
          <Stack gap="{spacing.gutter.lg}">
            <RiskRatingIndicator rating="low" category="Entity risk" score={3.4} />
            <RiskRatingIndicator rating="low" category="Geographic risk" score={2.5} />
            <RiskRatingIndicator rating="high" category="Relationship risk" score={6.78} />
            <RiskRatingIndicator rating="medium" category="Products and services" score={5} />
          </Stack>
        </Card.Body>
      </Presence>
    </Card.Root>
  );
}
