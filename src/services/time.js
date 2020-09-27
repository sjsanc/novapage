// https://stackoverflow.com/questions/5091888/how-to-update-time-regularly
export const currentTime = () => {
  const date = new Date(),
    mins = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
    time = date.getHours() + ":" + mins;
  return time;
};

export const updateTime = (time, setTime) => {
  // console.log(time);
  setTime(time);
};
