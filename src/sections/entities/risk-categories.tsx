import {
  Card,
  Group,
  Collapsible,
  Flex,
  Heading,
  Separator,
  useDisclosure,
  IconButton,
  Table,
  Text,
} from '@chakra-ui/react';
import { RiskRatingBadge } from '@components';
import { CaretDown, CaretUp } from '@phosphor-icons/react';

interface RiskItem {
  id: number;
  factor: string;
  description: string;
  score: number;
}

interface RiskCategory {
  name: string;
  calculatedRisk: number;
  items: RiskItem[];
}

interface RiskCategoriesProps {
  categories: RiskCategory[];
}

export function RiskCategories({ categories }: RiskCategoriesProps) {
  return (
    <Card.Root>
      {categories.map((category, index) => (
        <>
          <RiskCategoryDetails
            name={category.name}
            calculatedRisk={category.calculatedRisk}
            items={category.items}
          />
          {index < categories.length - 1 && <Separator />}
        </>
      ))}
    </Card.Root>
  );
}

function RiskCategoryDetails({ name, calculatedRisk, items }: RiskCategory) {
  const { open, onToggle } = useDisclosure({ defaultOpen: true });
  return (
    <Collapsible.Root open={open}>
      <Card.Header pb={6}>
        <Flex justifyContent="space-between" alignItems="center">
          <Heading size="lg">{name}</Heading>
          <Group>
            <Text fontSize="sm">{calculatedRisk}</Text>
            <RiskRatingBadge score={calculatedRisk} />
            <Collapsible.Trigger>
              <IconButton variant="ghost" size="xs" onClick={onToggle}>
                {open ? <CaretUp /> : <CaretDown />}
              </IconButton>
            </Collapsible.Trigger>
          </Group>
        </Flex>
      </Card.Header>
      <Collapsible.Content>
        <Card.Body pt={0.5}>
          <Table.Root variant="outline">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader width="34%">Factor</Table.ColumnHeader>
                <Table.ColumnHeader width="50%">Description</Table.ColumnHeader>
                <Table.ColumnHeader width="8%" textAlign="end">
                  Score
                </Table.ColumnHeader>
                <Table.ColumnHeader width="8%" textAlign="end">
                  Rating
                </Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {items.map(item => (
                <Table.Row key={item.id}>
                  <Table.Cell>{item.factor}</Table.Cell>
                  <Table.Cell>{item.description}</Table.Cell>
                  <Table.Cell textAlign="end">
                    {item.score === -1 ? <Text color="text.subtle">n/a</Text> : item.score}
                  </Table.Cell>
                  <Table.Cell textAlign="end">
                    <RiskRatingBadge score={item.score} />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Card.Body>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
