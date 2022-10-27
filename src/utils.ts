import dayjs from 'dayjs';
import { MonthDataType } from './types/types';

const formatDate = (date: any): MonthDataType => {
  return {
    dateDay: date.format('D'),
    dayWeek: date.format('MMMM'),
    dayWeekShort: date.format('ddd'),
    year: date.format('YYYY'),
  };
};

export const getMonthMatrix = (month = dayjs().month()): MonthDataType[][] => {
  const year = dayjs().year();
  const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfMonth;
  return new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return formatDate(dayjs(new Date(year, month, currentMonthCount)));
    });
  });
};
