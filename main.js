//2.	Determinar la hipotenusa de un triángulo rectángulo conocidas las longitudes de sus dos catetos. Desarrolle el algoritmo correspondiente. Formula: (HIP = √CATa + √CATb)

//let HIP = Math.SQRT2(catA*catA + catB*catB);


let catA = prompt("Introdusca el Valor del Cateto A:", "0");
catA = parseInt(catA);
let catetoA = (catA*catA);

let catB = prompt("Introdusca el Valor del Cateto B:", "0");
catB = parseInt(catB);
let catetoB = (catB*catB);

let HIP = Math.sqrt(catetoA + catetoB)

alert(`El valor de la Hipotenusa es: ${HIP}`)