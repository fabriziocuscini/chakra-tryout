import { Rating } from '@types';

export function convertScoreToRating(score: number): Rating {
  if (score >= 0 && score < 4) {
    return 'low';
  } else if (score >= 4 && score < 8) {
    return 'medium';
  } else if (score >= 8 && score <= 10) {
    return 'high';
  }
  throw new Error('Invalid score');
}
