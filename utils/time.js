export const converSecondsToHM = seconds => {
  const d = new Date(seconds * 1000);
  const hh = d.getUTCHours();
  const mm = d.getUTCMinutes();
  return [hh, mm];
};