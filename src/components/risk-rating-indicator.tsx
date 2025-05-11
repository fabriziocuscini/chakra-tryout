import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import { Tooltip } from '@components/ui/tooltip';
import { Rating } from '@types';
import { convertScoreToRating } from '@utils';
interface WithScore {
  score: number;
  rating?: Rating;
  category?: string;
}

interface WithRating {
  rating: Rating;
  score?: number;
  category?: string;
}

type RiskRatingIndicatorProps = WithScore | WithRating;

// Define a more comprehensive structure for each rating
interface RatingConfig {
  color: string;
  position: number;
  label: string;
}

/**
 * RiskRatingIndicator displays a visual indicator for risk levels
 * with color-coded bars (green for low, orange for medium, red for high)
 */
export function RiskRatingIndicator({ rating, category, score }: RiskRatingIndicatorProps) {
  // Create a single record with all rating information
  const ratingConfigs: Record<Rating, RatingConfig> = {
    low: { color: 'green.solid', position: 0, label: 'Low risk' },
    medium: { color: 'orange.solid', position: 1, label: 'Medium risk' },
    high: { color: 'red.solid', position: 2, label: 'High risk' },
  };

  // Get the configuration for the current rating
  const config = rating ? ratingConfigs[rating] : ratingConfigs[convertScoreToRating(score)];

  // Helper function to determine if a bar is active
  const isActive = (position: number) => config.position === position;

  return (
    <VStack alignItems="flex-start">
      <Tooltip content={config.label}>
        {/* Risk bars container */}
        <Flex gap="{spacing.gutter.xs}" height="8px" width="100%">
          {/* Generate 3 bars using array mapping */}
          {[0, 1, 2].map(position => (
            <Box
              key={position}
              height="100%"
              borderRadius="full"
              bg={isActive(position) ? config.color : 'neutral.muted'}
              flex={isActive(position) ? 1 : 'none'}
              width={isActive(position) ? 'auto' : { base: '60px', sm: '80px' }}
            />
          ))}
        </Flex>
      </Tooltip>
      {category && score && (
        <Text>
          {category}{' '}
          <Text as="span" color="text.muted">
            {score}
          </Text>
        </Text>
      )}
    </VStack>
  );
}
