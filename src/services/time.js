// https://stackoverflow.com/questions/5091888/how-to-update-time-regularly
export const currentTime = () => {
  const date = new Date(),
    mins = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
    time = date.getHours() + ":" + mins;
  return time;
};

export const updateTime = (time, setTime) => {
  setTime(time);
};

// https://stackoverflow.com/questions/8583694/determine-minutes-until-midnight
export const minsToMidnight = () => {
  var now = new Date();
  var then = new Date(now);
  then.setHours(24, 0, 0, 0);
  return (then - now) / 6e4;
};
