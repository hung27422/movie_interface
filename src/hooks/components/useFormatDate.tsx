interface Props {
  isoDateStr: string;
}
function useFormatDate({ isoDateStr }: Props) {
  // Chuỗi thời gian ISO 8601
  //   const isoDateStr = "2024-07-01T05:28:01.000Z";

  // Chuyển đổi sang đối tượng Date
  const dateObj = new Date(isoDateStr);

  // Lấy ngày tháng năm
  const year = dateObj.getUTCFullYear();
  const month = String(dateObj.getUTCMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getUTCDate()).padStart(2, "0");

  const dateStr = `${day}-${month}-${year}`;

  return { dateStr };
}

export default useFormatDate;
