export const handleGearClick = (event) => {
  document
    .getElementById("statusRowControlGear")
    .classList.toggle("status-row__control__gear--spin");
  document
    .getElementById("statusRowControlCover")
    .classList.toggle("status-row__control__cover--hidden");
};
