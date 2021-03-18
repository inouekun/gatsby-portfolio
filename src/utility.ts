export const GetYear = () => {
  var diff_ms = Date.now();
  var age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear() - 2016);
};
