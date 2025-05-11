import { format as formatDateFns } from 'date-fns';
import { DATE_TIME_FORMAT } from '@config/dates';

export function formatDateTime(date: string, format: string = DATE_TIME_FORMAT) {
  return formatDateFns(new Date(date), format);
}
