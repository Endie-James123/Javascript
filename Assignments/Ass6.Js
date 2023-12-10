const timeOfDay = prompt("What is the time? (hour) am/pm");
switch (timeOfDay) {
  case "1am":
  case "2am":
  case "3am":
  case "4am":
  case "5am":
  case "6am":
  case "7am":
  case "8am":
  case "9am":
  case "10am":
  case "11am":
  case "12am":
    alert("It is Morning");
    break;
  case "1pm":
  case "2pm":
  case "3pm":
  case "4pm":
  case "5pm":
  case "6pm":
  case "7pm":
  case "8pm":
  case "9pm":
  case "10pm":
  case "11pm":
  case "12pm":
    alert("It is Afternoon");
    break;
  default:
    alert("Unknown Time");
}
