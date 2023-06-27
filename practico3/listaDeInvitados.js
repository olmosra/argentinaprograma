let personas = ["Jose","Maria","Juan","Andres","Lionel","Sofia","Leandro","Emilia"];
let admitidos = [];
let rechazados = [];
for ( let i = 0; i < personas.length; i++ ) {
    if ( personas[i] === "Jose" || personas[i] === "Sofia") {
rechazados.push(personas[i])
    } else {
        admitidos.push(personas[i])
    }
}
console.log("La lista de invitados admitidos es: " + admitidos)
console.log("La lista de invitados rechazados es: " + rechazados)
console.log("La lista ordenada de invitados admitidos es: " + admitidos.sort())
console.log("La lista ordenada de invitados rechazados es: " + rechazados.sort())