import {
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
import { CaretUp, CaretDown } from '@phosphor-icons/react';
import { RiskRatingBadge, RiskRatingIndicator } from '@components';
import { convertScoreToRating } from '@utils';

interface RiskCategory {
  name: string;
  calculatedRisk: number;
  items: RiskItem[];
}

interface RiskItem {
  id: number;
  factor: string;
  description: string;
  score: number;
}

interface CalculatedRiskProps {
  score: number;
  riskCategories: RiskCategory[];
}

export function CalculatedRisk({ score, riskCategories }: CalculatedRiskProps) {
  const { open, onToggle } = useDisclosure({ defaultOpen: true });
  return (
    <Card.Root>
      <Collapsible.Root open={open}>
        <Card.Header pb={6}>
          <Flex justifyContent="space-between" alignItems="center">
            <Heading size="lg">Calculated risk</Heading>
            <Group>
              <Text fontSize="sm">{score}</Text>
              <RiskRatingBadge score={score} />
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
              {riskCategories.map(category => (
                <RiskRatingIndicator
                  key={category.name}
                  rating={convertScoreToRating(category.calculatedRisk)}
                  category={category.name}
                  score={category.calculatedRisk}
                />
              ))}
            </Stack>
          </Card.Body>
        </Collapsible.Content>
      </Collapsible.Root>
    </Card.Root>
  );
}
