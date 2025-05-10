import { Card, Separator } from '@chakra-ui/react';
import { RiskCategoryDetails } from './risk-category-details';
export function RiskCategories() {
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

const categories = [
  {
    name: 'Entity risk',
    calculatedRisk: 3.25,
    items: [
      { id: 1, factor: 'Entity type', description: 'Limited Company', score: 2 },
      { id: 2, factor: 'Entity ownership', description: 'Privately owned', score: 6 },
      {
        id: 3,
        factor: 'Oversight',
        description: 'No regulatory/exchange oversight',
        score: 5,
      },
      { id: 4, factor: 'Transparency', description: 'Transparent structure', score: 0 },
    ],
  },
  {
    name: 'Geographic information',
    calculatedRisk: 2.5,
    items: [
      {
        id: 1,
        factor: 'Jurisdiction of establishment',
        description: 'Australia',
        score: 2.5,
      },
      {
        id: 2,
        factor: 'Domiciliation',
        description: 'Australia',
        score: 2.5,
      },
      {
        id: 3,
        factor: 'UBO Jurisdictions',
        description: 'n/a',
        score: -1,
      },
      {
        id: 4,
        factor: 'Controller Jurisdictions',
        description: 'Australia',
        score: 2.5,
      },
    ],
  },
  {
    name: 'Nature and purpose of relationship',
    calculatedRisk: 8.33,
    items: [
      {
        id: 1,
        factor: 'Relationship type',
        description: 'Client',
        score: 10,
      },
      {
        id: 2,
        factor: 'Distribution channel',
        description: 'Voice, Electronic (incl. Instant Messenger)',
        score: 10,
      },
      {
        id: 3,
        factor: 'Existing relationship',
        description: 'Relationship under three years',
        score: 5,
      },
    ],
  },
  {
    name: 'Products and services',
    calculatedRisk: 5,
    items: [
      {
        id: 1,
        factor: 'Physical/Financial',
        description: 'Financial',
        score: 5,
      },
      {
        id: 2,
        factor: 'Products',
        description: 'Energy - Power',
        score: 5,
      },
      {
        id: 3,
        factor: 'Services',
        description: 'Clearing, Execution',
        score: 5,
      },
      {
        id: 4,
        factor: 'Currencies',
        description: 'AUD (Australian Dollar)',
        score: -1,
      },
    ],
  },
];
