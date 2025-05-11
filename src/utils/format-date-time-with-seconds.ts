import { format as formatDateFns } from 'date-fns';
import { DATE_TIME_FORMAT_WITH_SECONDS } from '@config/dates';

export function formatDateTimeWithSeconds(
  date: string,
  format: string = DATE_TIME_FORMAT_WITH_SECONDS
) {
  return formatDateFns(new Date(date), format);
}
