import {
  Badge,
  Card,
  Flex,
  Group,
  Heading,
  IconButton,
  Stack,
  Text,
  useDisclosure,
  Collapsible,
} from '@chakra-ui/react';
import { RiskRatingIndicator } from '@components';
import { CaretUp, CaretDown } from '@phosphor-icons/react';

export function CalculatedRisk() {
  const { open, onToggle } = useDisclosure({ defaultOpen: true });
  return (
    <Card.Root>
      <Collapsible.Root open={open}>
        <Card.Header pb={6}>
          <Flex justifyContent="space-between" alignItems="center">
            <Heading size="lg">Calculated risk</Heading>
            <Group>
              <Text fontSize="sm">3.4</Text>
              <Badge colorPalette="green">Low</Badge>
              <Collapsible.Trigger>
                <IconButton variant="ghost" size="xs" onClick={onToggle}>
                  {open ? <CaretUp /> : <CaretDown />}
                </IconButton>
              </Collapsible.Trigger>
            </Group>
          </Flex>
        </Card.Header>
        <Collapsible.Content>
          <Card.Body pt={0}>
            <Stack gap="{spacing.gutter.lg}">
              <RiskRatingIndicator rating="low" category="Entity risk" score={3.4} />
              <RiskRatingIndicator rating="low" category="Geographic risk" score={2.5} />
              <RiskRatingIndicator rating="high" category="Relationship risk" score={6.78} />
              <RiskRatingIndicator rating="medium" category="Products and services" score={5} />
            </Stack>
          </Card.Body>
        </Collapsible.Content>
      </Collapsible.Root>
    </Card.Root>
  );
}
