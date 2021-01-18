// ! =========== SUMA =========== ! //

let num1 = "";
let resultado = "";
let ultima_accion = "";

const suma = () => {
  ultima_accion = "suma";
  let dsresult = document.getElementById("resultado");
  let display = document.getElementById("display");
  if (display.value != "") {
    if (num1 == "") {
      num1 = parseFloat(display.value);
      display.value = null;
    } else {
      if (resultado == "") {
        let num2 = parseFloat(display.value);
        resultado = num1 + num2;
        dsresult.value = resultado;
        display.value = null;
      } else {
        let num2 = parseFloat(display.value);
        resultado += num2;
        dsresult.value = resultado;
        display.value = null;
      }
    }
  }
};

// ! =========== RESTA =========== ! //

const resta = () => {
  ultima_accion = "resta";
  let dsresult = document.getElementById("resultado");
  let display = document.getElementById("display");
  if (display.value != "") {
    if (num1 == "") {
      num1 = parseFloat(display.value);
      display.value = null;
    } else {
      if (resultado == "") {
        let num2 = parseFloat(display.value);
        resultado = num1 - num2;
        dsresult.value = resultado;
        display.value = null;
      } else {
        let num2 = parseFloat(display.value);
        resultado -= num2;
        dsresult.value = resultado;
        display.value = null;
      }
    }
  }
};

// ! =========== MULTIPLICACION =========== ! //

const multiplicacion = () => {
  ultima_accion = "multiplicacion";
  let dsresult = document.getElementById("resultado");
  let display = document.getElementById("display");
  if (display.value != "") {
    if (num1 == "") {
      num1 = parseFloat(display.value);
      display.value = null;
    } else {
      if (resultado == "") {
        let num2 = parseFloat(display.value);
        resultado = num1 * num2;
        dsresult.value = resultado;
        display.value = null;
      } else {
        let num2 = parseFloat(display.value);
        resultado *= num2;
        dsresult.value = resultado;
        display.value = null;
      }
    }
  }
};

// ! =========== BORRAR =========== ! //

const Borrar = () => {
  document.getElementById("display").value = null;
  document.getElementById("resultado").value = null;
  let num1 = "";
  let resultado = "";
};

// * ========== IGUAL ========== * //

const igual = () => {
  if (ultima_accion === "suma") {
  }
};
