

const nombre   = 'Amaury';
const apellido = 'Herrera';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

/* console.log( nombreCompleto ); */


export function getSaludo(nombre='Julio') {
    return 'Hola ' + nombre;
}

/* console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` ); */

