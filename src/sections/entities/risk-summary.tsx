import { Rating } from '@types';
import {
  Alert,
  Badge,
  Card,
  DataList,
  DataListItem,
  DataListItemLabel,
  DataListItemValue,
  Heading,
  Link,
  Separator,
} from '@chakra-ui/react';
import { RiskRatingSummary } from '@components';
import { ArrowRight } from '@phosphor-icons/react';
import { Link as RouterLink } from 'react-router-dom';

interface RiskSummaryProps {
  rating: Rating;
  timeAgo?: string;
  navigateTo?: string;
  FCCReview?: boolean;
  riskOverride?: Rating;
}

export function RiskSummary({
  rating,
  timeAgo,
  navigateTo,
  FCCReview = false,
  riskOverride,
}: RiskSummaryProps) {
  return (
    <Card.Root>
      <Card.Header>
        <Heading size="lg">Risk summary</Heading>
      </Card.Header>
      <Card.Body>
        <RiskRatingSummary rating={rating} timeAgo={timeAgo} />
      </Card.Body>
      {FCCReview && (
        <Card.Body pt={0}>
          <Alert.Root status="warning">
            <Alert.Indicator />
            <Alert.Title>Review from FCC Advisory required</Alert.Title>
          </Alert.Root>
        </Card.Body>
      )}
      {riskOverride && (
        <>
          <Card.Body pt={0}>
            <DataList.Root orientation="horizontal">
              <DataListItem>
                <DataListItemLabel>Risk rating override</DataListItemLabel>
                <DataListItemValue justifyContent="flex-end">
                  <Badge colorPalette="orange">Medium</Badge>
                </DataListItemValue>
              </DataListItem>
            </DataList.Root>
          </Card.Body>
          <Separator />
          <Card.Body>
            <DataList.Root orientation="vertical">
              <DataListItem>
                <DataListItemLabel>Manual override rationale</DataListItemLabel>
                <DataListItemValue>
                  We have some reservations based on a few factors that warrant a more cautious
                  approach at this stage. The entity is privately owned, which can present a
                  slightly higher transparency and governance risk compared to public or regulated
                  entities. Additionally, there is no regulatory or exchange oversight, which
                  further contributes to the potential risk profile.
                </DataListItemValue>
              </DataListItem>
            </DataList.Root>
          </Card.Body>
        </>
      )}

      {navigateTo && (
        <>
          <Separator />
          <Card.Body alignItems="flex-start" py={4}>
            <Link asChild fontSize="sm" fontWeight="medium">
              <RouterLink to={navigateTo}>
                See full risk assessment
                <ArrowRight />
              </RouterLink>
            </Link>
          </Card.Body>
        </>
      )}
    </Card.Root>
  );
}
