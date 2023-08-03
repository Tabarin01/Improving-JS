/******************************************* 
     Exercise 1 get the date and the time  *
********************************************/

function getCurrentDay() {   
  const daysOfWeek = [  
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]; // array di stringhe contenenti i giorni della settimana
  const date = new Date(); // oggetto Date di JS
  const dayIndex = date.getDay(); 
  return daysOfWeek[dayIndex];  // restituisce il giorno della settimana come stringa
}

function getCurrentTime() { 
  const date = new Date();  // istanza del tempo corrente
  let hours = date.getHours(); // memorrizza in hours le ore correnti
  const ampm = hours >= 12 ? "PM" : "AM";  //ternary operator le ore sono >= 12 ? se si "PM" se no "AM"
  hours = hours % 12 || 12;  // Operzione che restituisce le ore nel formato a 12 e non 24
  const minutes = String(date.getMinutes()).padStart(2, "0"); //ottiene i minuti e li converte in stringa assicurando sempre 2 cifre
  const seconds = String(date.getSeconds()).padStart(2, "0"); //stessa cosa con i secondi
  return `${hours} ${ampm} : ${minutes} : ${seconds}`;
}

function updateDateTime() {
  const currentDay = getCurrentDay();
  const currentTime = getCurrentTime();

  const dayElement = document.getElementById("day");
  const timeElement = document.getElementById("time");

  dayElement.textContent = `Today is: ${currentDay}.`;
  timeElement.textContent = `Current time is: ${currentTime}`;
}

// Aggiorna il contenuto ogni secondo per visualizzare l'orario corrente in tempo reale
setInterval(updateDateTime, 1000);

// Chiama la funzione updateDateTime per visualizzare l'orario iniziale all'avvio della pagina
updateDateTime();

/******************************************* 
     Exercise 2 print the page             *
********************************************/
function printPage() {
  window.print();
}

/******************************************* 
Exercise 3 get the date in various format  *
********************************************/

function getCurrentDateFormatted() {
  const currentDate = new Date();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const year = currentDate.getFullYear();
  return `${month}-${day}-${year}`;
}

function getAlternateDateFormats() {
  let currentFormat = 0;
  const formats = ["mm-dd-yyyy", "dd-mm-yyyy", "yyyy/mm/dd"];
  const dateDisplayElement = document.getElementById("dateDisplay");

  function updateDateDisplay(formattedDate) {
    dateDisplayElement.textContent = formattedDate;
  }

  setInterval(() => {
    currentFormat = (currentFormat + 1) % formats.length;
    const format = formats[currentFormat];
    let formattedDate;

    switch (format) {
      case "mm-dd-yyyy":
        formattedDate = getCurrentDateFormatted();
        break;
      case "dd-mm-yyyy":
        formattedDate = new Date().toLocaleDateString("en-GB");
        break;
      case "yyyy/mm/dd":
        formattedDate = getCurrentDateFormatted()
          .split("-")
          .reverse()
          .join("/");
        break;
    }

    updateDateDisplay(formattedDate);
  }, 30000);

  // Display the initial date format
  updateDateDisplay(getCurrentDateFormatted());
}

getAlternateDateFormats();

/******************************************* 
Exercise 4 get triangle Area               *
********************************************/

function calculateArea(event) {
  event.preventDefault();

  const sideA = parseFloat(document.getElementById("sideA").value);
  const sideB = parseFloat(document.getElementById("sideB").value);
  const sideC = parseFloat(document.getElementById("sideC").value);

  if (
    isNaN(sideA) ||
    isNaN(sideB) ||
    isNaN(sideC) ||
    sideA <= 0 ||
    sideB <= 0 ||
    sideC <= 0
  ) {
    document.getElementById("result").textContent =
      "Please enter valid positive numbers for all sides.";
    return;
  }

  const s = (sideA + sideB + sideC) / 2;
  const area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC)).toFixed(
    2
  );

  document.getElementById(
    "result"
  ).textContent = `The area of the triangle is: ${area}`;
}

/******************************************* 
Exercise 5 animated string                 *
********************************************/

let intervalId;
let rotating = false;
let originalString = "w3resource";

function rotateString() {
  const rotatedString =
    originalString.charAt(originalString.length - 1) +
    originalString.slice(0, -1);
  document.getElementById("rotatedString").innerText = rotatedString;
  originalString = rotatedString;
}

function toggleRotation() {
  if (!rotating) {
    rotating = true;
    intervalId = setInterval(rotateString, 200); // Adjust the interval (in milliseconds) for speed
    document.getElementById("rotateButton").innerText = "Stop Rotation";
  } else {
    clearInterval(intervalId);
    if (originalString === "w3resource") {
      alert("NICE");
    }
    rotating = false;
    document.getElementById("rotateButton").innerText = "Start Rotation";
  }
}

/******************************************* 
Exercise 9  Xmas counter                   *
********************************************/

function daysLeftUntilChristmas() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const christmasDate = new Date(currentYear, 11, 25); // December is represented as 11 (0-based index)

  // Check if Christmas has already passed this year, if yes, set the date for next year
  if (today.getMonth() === 11 && today.getDate() > 25) {
    christmasDate.setFullYear(currentYear + 1);
  }

  // Calculate the difference in time (in milliseconds) between today and Christmas
  const timeDifference = christmasDate.getTime() - today.getTime();

  // Convert the time difference to days
  const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysLeft;
}

function updateDaysLeft() {
  const daysLeft = daysLeftUntilChristmas();
  const resultElement = document.getElementById("resultXmas");
  resultElement.textContent = `There are ${daysLeft} days left until Christmas.`;
}
// Update days left on page load
updateDaysLeft();

/******************************************* 
Exercise 10  Multiply Divider              *
********************************************/

function multiply() {
  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);
  const resultElement = document.getElementById("resultCalc");

  if (isNaN(number1) || isNaN(number2)) {
    resultElement.textContent = "Please enter valid numbers.";
    return;
  }

  const multiplicationResult = number1 * number2;
  resultElement.textContent = `Result: ${multiplicationResult}`;
}

function divide() {
  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);
  const resultElement = document.getElementById("resultCalc");

  if (isNaN(number1) || isNaN(number2)) {
    resultElement.textContent = "Please enter valid numbers.";
    return;
  }

  if (number2 === 0) {
    resultElement.textContent = "Error: Division by zero is not allowed.";
  } else {
    const divisionResult = number1 / number2;
    resultElement.textContent = `Result: ${divisionResult}`;
  }
}