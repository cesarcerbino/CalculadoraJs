// ? ========== VARIABLES ========== ? //

var num1 = null;
var resultado = null;
var ultima_accion = null;

// ! =========== SUMA =========== ! //

const suma = () => {
  ultima_accion = "suma";
  console.log(ultima_accion);
  let dsresult = document.getElementById("resultado");
  let display = document.getElementById("display");
  if (display.value != null) {
    if (num1 == null) {
      num1 = parseFloat(display.value);
      display.value = null;
    } else {
      if (resultado == null) {
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
  return resultado;
};

// ! =========== RESTA =========== ! //

const resta = () => {
  ultima_accion = "resta";
  let dsresult = document.getElementById("resultado");
  let display = document.getElementById("display");
  if (display.value != null) {
    if (num1 == null) {
      num1 = parseFloat(display.value);
      display.value = null;
    } else {
      if (resultado == null) {
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
  return resultado;
};

// ! =========== MULTIPLICACION =========== ! //

const multiplicacion = () => {
  ultima_accion = "multiplicacion";
  let dsresult = document.getElementById("resultado");
  let display = document.getElementById("display");
  if (display.value != null) {
    if (num1 == null) {
      num1 = parseFloat(display.value);
      display.value = null;
    } else {
      if (resultado == null) {
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

// ! =========== DIVISION =========== ! //

const division = () => {
  ultima_accion = "division";
  let dsresult = document.getElementById("resultado");
  let display = document.getElementById("display");
  if (display.value != null) {
    if (num1 == null) {
      num1 = parseFloat(display.value);
      display.value = null;
    } else {
      if (resultado == null) {
        let num2 = parseFloat(display.value);
        resultado = num1 / num2;
        dsresult.value = resultado;
        display.value = null;
      } else {
        let num2 = parseFloat(display.value);
        resultado /= num2;
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
  num1 = null;
  resultado = null;
};

// * ========== IGUAL ========== * //

const igual = () => {
  let dsresult = document.getElementById("resultado");
  let display = document.getElementById("display");
  if (ultima_accion === "suma") {
    let num2 = parseFloat(display.value);
    if (resultado == null) {
      resultado = num1 + num2;
      display.value = resultado;
    } else {
      resultado += num2;
      dsresult.value = null;
      display.value = resultado;
    }
  }
  if (ultima_accion === "resta") {
    let num2 = parseFloat(display.value);
    if (resultado == null) {
      resultado = num1 - num2;
      display.value = resultado;
    } else {
      resultado -= num2;
      dsresult.value = null;
      display.value = resultado;
    }
  }
  if (ultima_accion === "multiplicacion") {
    let num2 = parseFloat(display.value);
    if (resultado == null) {
      resultado = num1 * num2;
      display.value = resultado;
    } else {
      resultado *= num2;
      dsresult.value = null;
      display.value = resultado;
    }
  }
  if (ultima_accion === "division") {
    let num2 = parseFloat(display.value);
    if (resultado == null) {
      resultado = num1 / num2;
      display.value = resultado;
    } else {
      resultado /= num2;
      dsresult.value = null;
      display.value = resultado;
    }
  }
};
