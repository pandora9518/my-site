export default function (timestamp, showTime) {
  const date = new Date(+timestamp);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  let str = `${date.getFullYear()}-${month}-${day}`;
  if (showTime) {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    str += ` ${hours}:${minutes}:${seconds}`;
  }
  return str;
}
