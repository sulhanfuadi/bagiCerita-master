const showFormattedDateTime = (timezone, date) => {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return new Date(date).toLocaleDateString(timezone, options);
};

export { showFormattedDateTime };
