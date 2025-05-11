import { format as formatDateFns } from 'date-fns';
import { DATE_FORMAT } from '@config/dates';

export function formatDate(date: string, format: string = DATE_FORMAT) {
  return formatDateFns(new Date(date), format);
}
