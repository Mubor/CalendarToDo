export type MonthDataType = {
  dateDay: string;
  dayWeek: string;
  dayWeekShort: string;
  year: string;
};

export type MonthMatrixType = {
  monthMatrix: MonthDataType[][];
};

export type ActiveType = {
  isActive: boolean;
};
