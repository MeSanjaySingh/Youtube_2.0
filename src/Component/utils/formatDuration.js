// export function formatDuration(duration) {
//   // Extract hours, minutes and seconds
//   const regex = /PT(\d+H)?(\d+M)?(\d+S)?/;
//   const matches = duration.match(regex);

//   let hours = 0;
//   let minutes = 0;
//   let seconds = 0;

//   // If hours are present, remove 'H' and parse integer value
//   if (matches[1]) hours = parseInt(matches[1].replace("H", ""), 10);

//   // If minutes are present, remove 'M' and parse integer value
//   if (matches[2]) minutes = parseInt(matches[2].replace("M", ""), 10);

//   // If seconds are present, remove 'S' and parse integer value
//   if (matches[3]) seconds = parseInt(matches[3].replace("S", ""), 10);

//   // Convert hours to minutes and add to total minutes
//   minutes += hours * 60;

//   // Return an object with minutes and seconds
//   return { minutes, seconds };
// }
