const noOfOps = 3;
const tableSize = 5;
const colors = ["red", "green", "blue", "orange"];
let generatedNumbers;
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".table");
  function createTable() {
    for (let tz = 0; tz < noOfOps; tz++) {
      const table = document.createElement("table");
      table.setAttribute("id", `table-${tz}`);
      table.classList.add(colors[tz]);
      let arr = shuffle(
        Array.from({ length: tableSize * tableSize }, (v, k) => k + 1)
      );
      let iter = 0;
      for (let i = 0; i < tableSize; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < tableSize; j++) {
          const td = document.createElement("td");
          td.setAttribute("id", `table-${tz}-${i}-${j}`);
          td.innerText = arr[iter++];
          row.appendChild(td);
        }
        table.appendChild(row);
      }
      container.appendChild(table);
    }
  }
  createTable();
  bingoDisplay();
  generatedNumbers = shuffle(
    Array.from({ length: tableSize * tableSize }, (v, k) => k + 1)
  );
});

function generateRandom(min, max) {
  return (
    (Math.floor(Math.pow(10, 14) * Math.random() * Math.random()) %
      (max - min + 1)) +
    min
  );
}
function shuffle(arr) {
  return arr
    .map(function (n) {
      return [Math.random(), n];
    })
    .sort()
    .map(function (n) {
      return n[1];
    });
}
function bingoDisplay() {
  let char = Array.from("BINGO");
  const container = document.querySelector(".bingo-display");
  for (let tz = 0; tz < noOfOps; tz++) {
    let elem = document.createElement("div");
    elem.setAttribute("id", `bingo-table-${tz}`);
    char.forEach((c) => {
      let span = document.createElement("span");
      span.innerText = c;
      elem.appendChild(span);
    });
    container.appendChild(elem);
  }
}
function generateBingo() {
  generatedNumbers = shuffle(generatedNumbers);

  let [genNum] = generatedNumbers.splice(0, 1);
  if (genNum) {
    document.getElementById("bingoNumber").innerText = genNum;
    updateTable(genNum);
    checkBingo();
  }
}
function updateTable(num) {
  let querySelector = document.querySelectorAll(".table td");
  querySelector.forEach((elem) => {
    if (elem.innerText == num) {
      elem.classList.add("strike");
    }
  });
}
function checkBingo() {
  for (let i = 0; i < noOfOps; i++) {
    let bingoCount = 0;
    bingoCount += checkStraight(i);
    // console.log(bingoCount);
    // bingoCount += checkDiagonal(i)
    updateBingoDisplay(bingoCount, i);
    if (bingoCount >= 5) {
      document.querySelector(".bingo-button").style.pointerEvents = "none";
    }
  }
}
function updateBingoDisplay(count, id) {
  let elem = document.getElementById(`bingo-table-${id}`);
  elem.childNodes.forEach((e, i) => {
    if (i < count) {
      e.classList.add("enable");
    }
  });
}
function checkStraight(table) {
  let bingoCount = 0,
    d1Count = 0,
    d2Count = 0;
  for (let i = 0; i < tableSize; i++) {
    let hCount = 0,
      vCount = 0;
    for (j = 0; j < tableSize; j++) {
      // TODO: ADD YOUR SOLUTION HERE
      // console.log(i+" "+j);
      if (checkElement(table, i, j)) {
        hCount++;
      }
      if (checkElement(table, j, i)) {
        vCount++;
      }
      if (i === j) {
        if (checkElement(table, i, j)) {
          d1Count++;
        }
      }
      if (i + j === tableSize - 1) {
        if (checkElement(table, i, j)) {
          d2Count++;
        }
      }
    }
    if (hCount >= tableSize) {
      bingoCount++;
    }
    if (d1Count >= tableSize) {
      bingoCount++;
    }
    if (d2Count >= tableSize) {
      bingoCount++;
    }
    if (vCount >= tableSize) {
      bingoCount++;
    }
  }
//   console.log(bingoCount);
  return bingoCount;
}
function checkElement(table, i, j) {
  let elem = document.getElementById(`table-${table}-${i}-${j}`);
  return elem && elem.classList.contains("strike");
}
