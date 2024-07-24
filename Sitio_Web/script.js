// Leer nodos por id, clase, etiqueta
// const elemento=document.getElementById('Contactos');
// const clase=document.getElementsByClassName('Detalles');
// const tag=getelementsbytagname('img');
// const selector=document.querySelector('Inicio');
// const selector=document.querySelectorAll('h1');

// Crear y agregar un nodo siempre se agrega al ultimo del padre
// Tomamos la seccion
let padre=document.querySelector('section.Detalles')
// Agregamos un nuevo elemento con appenchild
let nuevoNodo= document.createElement('h2')
padre.appendChild(nuevoNodo);
// Agregamos texto al nodo creado
let texto=document.createTextNode('Hola')
nuevoNodo.appendChild(texto)
// Todo en una linea
padre.append('Modelos nuevos', document.createElement('p'))
// Agregarmos un elemento al principio del padre
let nuevo=document.createElement('h2')
let final=document.querySelector('div.caja-contenedor')
padre.insertBefore(nuevo, final)
let text=document.createTextNode('Nuevo nodo creado')
nuevo.appendChild(text)