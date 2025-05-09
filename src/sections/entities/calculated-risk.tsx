import { Card, Heading, Stack } from '@chakra-ui/react';
import { RiskRatingIndicator } from '@components';

export function CalculatedRisk() {
  return (
    <Card.Root>
      <Card.Header>
        <Heading size="lg">Calculated risk</Heading>
      </Card.Header>
      <Card.Body>
        <Stack gap="{spacing.gutter.lg}">
          <RiskRatingIndicator rating="low" category="Entity risk" score={3.4} />
          <RiskRatingIndicator rating="low" category="Geographic risk" score={2.5} />
          <RiskRatingIndicator rating="high" category="Relationship risk" score={6.78} />
          <RiskRatingIndicator rating="medium" category="Products and services" score={5} />
        </Stack>
      </Card.Body>
    </Card.Root>
  );
}
