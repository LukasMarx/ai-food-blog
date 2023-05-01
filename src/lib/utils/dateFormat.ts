const dateFormat = (datetime: string | Date) => {
  let dateTime = new Date(datetime);

  if (dateTime.getTime() > new Date("2023-05-01").getTime()) {
    dateTime = new Date("2023-05-01");
  }

  const date = dateTime.toLocaleDateString([], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const time = dateTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return date;
};

export default dateFormat;
