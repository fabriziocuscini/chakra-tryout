import { Rating } from '@types';
import {
  Alert,
  Card,
  DataList,
  DataListItem,
  DataListItemLabel,
  DataListItemValue,
  Heading,
  Link,
  Separator,
} from '@chakra-ui/react';
import { RiskRatingSummary, RiskRatingBadge } from '@components';
import { ArrowRight } from '@phosphor-icons/react';
import { Link as RouterLink } from 'react-router-dom';
import { convertScoreToRating } from '@utils';

interface RiskSummaryProps {
  score: number;
  lastUpdated?: string;
  navigateTo?: string;
  FCCReview?: boolean;
  riskOverride?: Rating;
  overrideDescription?: string;
}

export function RiskSummary({
  score,
  lastUpdated,
  navigateTo,
  FCCReview = false,
  riskOverride,
  overrideDescription = '',
}: RiskSummaryProps) {
  return (
    <Card.Root>
      <Card.Header>
        <Heading size="lg">Risk summary</Heading>
      </Card.Header>
      <Card.Body>
        <RiskRatingSummary rating={convertScoreToRating(score)} lastUpdated={lastUpdated} />
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
                  <RiskRatingBadge rating={riskOverride} />
                </DataListItemValue>
              </DataListItem>
            </DataList.Root>
          </Card.Body>
          <Separator />
          <Card.Body>
            <DataList.Root orientation="vertical">
              <DataListItem>
                <DataListItemLabel>Manual override rationale</DataListItemLabel>
                <DataListItemValue>{overrideDescription}</DataListItemValue>
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
