let bookType = "";
let book = "";

function rasskazCheck(event) {
  const e = document.getElementById("rasskaz-select");
  const rasskaz = e.value;
  if (rasskaz === "1") {
    bookType = "rasskaz";
    document.getElementById("ZUV-select-div").hidden = false;
  }
  else {
    document.getElementById("povest-select-div").hidden = false;
  }
}

function zuvCheck(event) {
  const e = document.getElementById("ZUV-select");
  const zuv = e.value;
  if (zuv === "1") {
    document.getElementById("patient-dead-select-div").hidden = false;
  }
  else {
    document.getElementById("gg-select-div").hidden = false;
  }
}

function povestCheck(event) {
  const e = document.getElementById("povest-select");
  const povest = e.value;
  if (povest === "1") {
    bookType = "povest";
    document.getElementById("gg-select-div").hidden = false;
  }
  else {
    bookType = "roman";
    document.getElementById("war-select-div").hidden = false;
  }
}

function ggCheck(event) {
  const e = document.getElementById("gg-select");
  const gg = e.value;
  if (gg === "1") {
    book = "SS";
    if (bookType === "rasskaz") {
      document.getElementById("war-select-div").hidden = false;
    }
    else {
      console.log("ss");

      document.getElementById("SS-result").hidden = false;
    }
  }
  else {
    if (bookType === "rasskaz") {
      console.log("korona");

      document.getElementById("KORONA-result").hidden = false;
    }
    else {
      document.getElementById("year-select-div").hidden = false;
    }
  }
}

function warCheck(event) {
  const e = document.getElementById("war-select");
  const war = e.value;
  if (war === "1") {
    if (bookType === "rasskaz") {
      console.log("YAUBIL");
      document.getElementById("YAUBIL-result").hidden = false;
    }
    else {
      console.log("BG");

      document.getElementById("BG-result").hidden = false;
    }
  }
  else {
    if (bookType === "rasskaz") {
      console.log("MORFI");

      document.getElementById("MORFII-result").hidden = false;
    }
    else {
      console.log("MM");

      document.getElementById("MM-result").hidden = false;
    }
  }
}

function yearCheck(event) {
  const e = document.getElementById("year-select");
  const year = e.value;
  if (year === "1") {
    book = "DIAV";
    console.log("DIA");

    document.getElementById("DIAV-result").hidden = false;
  }
  else {
    book = "RYA";
    console.log("RYA");

    document.getElementById("RYA-result").hidden = false;
  }
}

function patientCheck(event) {
  const e = document.getElementById("patient-dead-select");
  const dead = e.value;
  if (dead === "1") {
    book = "VIUGA";
    console.log("viuga");

    document.getElementById("VIUGA-result").hidden = false;
  }
  else {
    book = "ZVSYP";
    console.log("syp'");

    document.getElementById("ZVSYP-result").hidden = false;
  }
}
