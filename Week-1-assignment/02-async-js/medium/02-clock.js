// Using `1-counter.md` or `2-counter.md` from the easy section, create a clock that shows you the current machine time?

// make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function updateClock() {
  const now = new Date();
  const options = {
    // hour: "numeric",
    // minute: "2-digit",
    // second: "2-digit",
    // hour12: false,
  };

  const timeString = now.toLocaleTimeString([], options);
  console.clear();
  console.log(timeString);

  //   ALTERNATIVE
  //   const hours = now.getHours().toString().padStart(2, "0");
  //   const minutes = now.getMinutes().toString().padStart(2, "0");
  //   const seconds = now.getSeconds().toString().padStart(2, "0");
  //   const timeString = `${hours}:${minutes}:${seconds} ${hours > 12 ? "P.M" : "A.M"}`;
}

// Update the clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);
