import dayjs from "dayjs";

export const date2Kor = (date: string) => {
  dayjs.locale('ko');
  const year = dayjs(date).format('YYYY');
  const month = dayjs(date).format('MM');
  const day = dayjs(date).format('DD');

  return `${year}년 ${month}월 ${day}일`;
}