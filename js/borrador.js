var igual = function () {
  if (accion == "suma") {
    var sumatotal = 0;
    nums.push(parseFloat(document.getElementById("display").value));
    for (i = nums.length - 1; i >= 0; i--) {
      sumatotal = sumatotal + nums[i];
    }
    document.getElementById("display").value = sumatotal;
    nums.length = 0;
    numeros.length = 0;
  } else if (accion == "resta") {
    var restatotal = 0;
    var numeropararestar = parseFloat(document.getElementById("display").value);
    nums = nums - numeropararestar;
    restatotal = nums;
    document.getElementById("display").value = restatotal;
    nums.length = 0;
    numeros.length = 0;
  } else if (accion == "multiplicacion") {
    var numeroparamultiplicar = parseFloat(
      document.getElementById("display").value
    );
    nums = nums * numeroparamultiplicar;
    var multiplicaciontotal = 0;
    multiplicaciontotal = nums;
    document.getElementById("display").value = multiplicaciontotal;
    nums.length = 0;
    numeros.length = 0;
  }
};

var resta = () => {
  accion = "resta";
  if (nums.length == 0) {
    nums.push(parseFloat(document.getElementById("display").value));
    numeros.length = 0;
    document.getElementById("display").value = numeros.join("");
  } else {
    var numeropararestar = parseFloat(document.getElementById("display").value);
    nums = nums - numeropararestar;
    numeros.length = 0;
    document.getElementById("display").value = numeros.join("");
  }
};

// ! var multiplicacion = () => {
// !   accion = "multiplicacion";
// !   if (nums.length == 0) {
// !     nums.push(parseFloat(document.getElementById("display").value));
// !     numeros.length = 0;
// !     document.getElementById("display").value = numeros.join("");
// !   } else {
// !     var numeroparamultiplicar = parseFloat(
// !       document.getElementById("display").value
// !     );
// !     nums = nums * numeroparamultiplicar;
// !     numeros.length = 0;
// !     document.getElementById("display").value = numeros.join("");
// !   }
// ! };
