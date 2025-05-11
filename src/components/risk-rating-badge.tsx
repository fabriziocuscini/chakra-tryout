import { Badge, BadgeProps } from '@chakra-ui/react';
import { Rating } from '@types';
import { convertScoreToRating } from '@utils';

// Base props without rating or score
type BaseRiskRatingBadgeProps = Omit<BadgeProps, 'children'>;

// Props with rating
interface WithRating extends BaseRiskRatingBadgeProps {
  rating: Rating;
  score?: number;
}

// Props with score
interface WithScore extends BaseRiskRatingBadgeProps {
  rating?: Rating;
  score: number;
}

// Union type that requires at least one of rating or score
type RiskRatingBadgeProps = WithRating | WithScore;

// Define the config type for the rating
interface RatingConfig {
  label: string;
  colorPalette: string;
}

/**
 * RiskRatingBadge displays a badge with color and text based on risk rating
 * Can accept either a rating string (low, medium, high) or a score number (0-10)
 */
export function RiskRatingBadge({ rating, score, ...props }: RiskRatingBadgeProps) {
  // Create a record with all rating information
  const ratingConfigs: Record<Rating, RatingConfig> = {
    low: { label: 'Low', colorPalette: 'green' },
    medium: { label: 'Medium', colorPalette: 'orange' },
    high: { label: 'High', colorPalette: 'red' },
  };

  // Handle N/A case for score of -1
  if (score === -1) {
    return (
      <Badge colorPalette="gray" {...props}>
        n/a
      </Badge>
    );
  }

  // Determine rating from score if provided
  let derivedRating: Rating = rating || 'medium';

  if (score !== undefined) {
    derivedRating = convertScoreToRating(score);
  }

  // Get the configuration for the current rating
  const config = ratingConfigs[derivedRating];

  return (
    <Badge colorPalette={config.colorPalette} {...props}>
      {config.label}
    </Badge>
  );
}
