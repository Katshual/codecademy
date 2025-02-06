//création d'une fonction qui indique le nombre d'heure de sommeil en fonction du jour.
function getSleepHours(day) {
  day = day.toLowerCase();
  switch (day) {
    case "monday":
      return 6;
      break;
    case "tuesday":
      return 7;
      break;
    case "wednesday":
      return 6;
      break;
    case "thursday":
      return 7;
      break;
    case "friday":
      return 7;
      break;
    case "saturday":
      return 7;
      break;
    case "sunday":
      return 7;
      break;
    default:
      return "invalid choice";
      break;
  }
}
console.log(getSleepHours("friday"));

//création d'une fonction qui calcule le nombre total d'heure de sommeil
function getActualSleepHours() {
  let totalSleep = 0;
  totalSleep += getSleepHours("monday");
  totalSleep += getSleepHours("tuesday");
  totalSleep += getSleepHours("wednesday");
  totalSleep += getSleepHours("thursday");
  totalSleep += getSleepHours("friday");
  totalSleep += getSleepHours("saturday");
  totalSleep += getSleepHours("sunday");

  return totalSleep;
}

//création d'une fonction pour déterminer le nombre d'heures idéales
function getIdealSleepHours() {
  let idealHours = 8;
  return idealHours * 7;
}

//je teste mes 2 fonctions
console.log(getActualSleepHours());
console.log(getIdealSleepHours());

//création d'une fonction pour calculer la dette de sommeil
function calculateSleepDebt() {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log(
      `You're ${
        actualSleepHours - idealSleepHours
      } hours the ideal sleep hours ! Congrats! You've got the perfect amount of sleep`
    );
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      `You're ${
        actualSleepHours - idealSleepHours
      } hours over the ideal sleep hours! Wow! You've got more sleep than needed!`
    );
  } else {
    console.log(
      `You're ${
        actualSleepHours - idealSleepHours
      } hours under the ideal sleep hours... You should get some rest, dude!`
    );
  }
}
calculateSleepDebt();
