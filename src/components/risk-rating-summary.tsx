import { Badge, Flex, Heading, VStack } from '@chakra-ui/react';
import { ClockCounterClockwise } from '@phosphor-icons/react';
import { RiskRatingIndicator } from '@components';
import { Tooltip } from '@components/ui/tooltip';
import { Rating } from '@types';
import { formatDistanceToNow } from 'date-fns';
import { formatDate } from '@utils';
// Props interface for the component
interface RiskRatingSummaryProps {
  rating: Rating;
  lastUpdated?: string;
}

// Define a comprehensive structure for each rating
interface RatingSummaryConfig {
  label: string;
  color: string;
}

/**
 * RiskRatingSummary displays a prominent risk level with a visual indicator
 * and a badge showing when the risk was set
 */
export function RiskRatingSummary({ rating, lastUpdated }: RiskRatingSummaryProps) {
  const elapsed = lastUpdated
    ? formatDistanceToNow(new Date(lastUpdated), { addSuffix: true })
    : '';
  // Create a single record with all rating information
  const ratingConfigs: Record<Rating, RatingSummaryConfig> = {
    low: { label: 'Low', color: 'green.solid' },
    medium: { label: 'Medium', color: 'orange.solid' },
    high: { label: 'High', color: 'red.solid' },
  };

  // Get the configuration for the current rating
  const config = ratingConfigs[rating];

  return (
    <VStack gap={2} alignItems="stretch" width="100%">
      {/* Risk indicator bars */}
      <RiskRatingIndicator rating={rating} />

      {/* Rating label and time badge */}
      <Flex justifyContent="space-between" alignItems="center">
        <Heading
          as="h2"
          size={{ base: '2xl', sm: '4xl', md: '2xl', lg: '4xl' }}
          color={config.color}
        >
          {config.label}
        </Heading>

        {lastUpdated && (
          <Tooltip content={`The risk score was updated on ${formatDate(lastUpdated)}`}>
            <Badge size="lg" rounded="full">
              <ClockCounterClockwise weight="fill" /> {elapsed}
            </Badge>
          </Tooltip>
        )}
      </Flex>
    </VStack>
  );
}
