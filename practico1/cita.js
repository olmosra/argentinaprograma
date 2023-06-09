let cita = "Tres tristes tigres comen trigo en un trigal";
let substring = "tigres comen trigo";
console.log("El tamaño de la cita es: " + cita.length);
let indice = cita.indexOf(substring);
console.log("El indice del substring es: " + indice);
let citaRevisada = cita.slice(0,31);
console.log(citaRevisada);