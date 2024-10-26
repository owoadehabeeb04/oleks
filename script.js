const countdown = () => {
    const launchDate = new Date("Feb 3, 2025 23:59:59").getTime();
    const now = new Date().getTime();
    const gap = launchDate - now;

    // Time calculations
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Calculate remaining time
    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    // Display the countdown
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Check if the launch date has passed
    if (gap < 0) {
      document.querySelector(".launch-title").innerText = "We're Live!";
      document.querySelector(".countdown").style.display = "none";
      document.querySelector(".launch-subtext").innerText = "Thank you for your patience!";
    }
};

// Update the countdown every second
setInterval(countdown, 1000);