//https://javascript.espaciolatino.com/evaluar/dom_basico.html
//https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction

//Cambiar el color del titular del negro actual a rojo y además debe quedar centrado.
// El único cambio será en el bloque cambiar y el código de función cambiar()


// function cambiar() {
//     let titulo = document.getElementById('titular');
//     titulo.style.color = "red";
//     titulo.style.textAlign = 'center';
// }


//========================================================================== IMPORTANTE ==================================================================================
//                                                                  REPASAR Y VER PASO A PASO
//========================================================================== IMPORTANTE ==================================================================================


// Dscribe un script de nombre creaDiv() que crea un nuevo bloque div en la página modelo. 
//El bloque se creará al pulsar el botón con texto Crear, sus colores serán texto blanco con fondo rojo y el texto quedará centrado. 
//Este texto consiste en la cadena  Javascript permite crear páginas dinámicas.
// El botón ya existe solo es necesario escribir la función, procurando usar los métodos de document para crear nodos.



// function crearDiv() {

//     const newDiv = document.createElement('div'); //SE CREA EL ELEMENTO DIV
//     const txt = document.createTextNode('Javascript permite crear páginas dinámicas.') //SE CREA EL TEXTO
//     newDiv.style.color = "white";                                                     //ESTILO DE LETRA BLANCO
//     newDiv.style.textAlign = "center";                                                //SE ALINEA EL TEXTO EN EL CENTRO
//     newDiv.style.backgroundColor = "red";                                             //SE PONE EL ESTILO BACKGROUND COLOR RED
//     newDiv.appendChild(txt);                                                          //SE INTRODUCE EL TEXTO EN EL APPENDCHILD
//     document.body.appendChild(newDiv);                                                //

// }

//========================================================================== IMPORTANTE ==================================================================================
//                                                                  REPASAR Y VER PASO A PASO
//========================================================================== IMPORTANTE ==================================================================================

// En la página web modelo debes lograr que al pulsar el botón con el texto borrar se deberá eliminar el bloque que aparece bajo el titular, 
// no ocultar, sino borrarlo. Para detalles mira el código fuente de la página. Solo tienes que escribir el código de la función borrar()
// Al pulsar el botón el subtítulo debe dejar de existir en el código de la página. No deb producirse error al volver a pulsar el botón.

// function borrarDiv() {
//     const borrar = document.getElementById('subtitulo');
//     borrar.remove()
// }
// function borrarDiv(){                                       //Se hace una funcion borrarDiv()
//     var borrar = document.getElementById('subtitulo');      //Se crea una variable (Borrar),
//     if(borrar != null){
//        	document.body.removeChild(borrar);
//     }
// }

// La página web modelo contiene tres imágenes. Cada imagen está en un bloque figure con un elemento figcaption para un pie de foto. 
// Al pulsar sobre cualquier imagen se debe mostar su atributo alt en su pie de foto. Si el pie ya está relleno se borrará su contenido y no se escribirá nada.
// Cada imagen es como un botón que alterna el pie de foto entre vacio (sin texto) y el valor del atributo alt de cada una.

// function ponerPie(figure){                             

// var pie = figure.getElementByTagName('figcaption');    
// var img = figure.getElementByTagName('img');
// if(){
//        pie.innerText ;
// }


// }

// function ponerPie(fig) {                                     //Se hace la funcion haciendo la referencia a la fig
//     let pie = fig.getElementsByTagName('figcaption')[0];    //Se crea una var, en la que se referencia al parametro fig. con el metodo getElementByTagName(), Se pone el [0] porque se hace referencia , en este caso al primer elemento de figure  coge el elemento del array. 
//      let img = fig.getElementsByTagName('img')[0];           //Se crea una var, en la que se referencia al parametro fig. con el metodo getElementByTagName(), Se pone el [0] porque se hace referencia , en este caso al primer elemento de figure coge el elemento del array. 
//     if (pie.innerText == '') {                                //Se crea la condicion en la que se dice si el contenido del pie(pie.innterText) es igual a nada  '', se debe printar el img.alt(Que son los string, Numero 1/2/3)
//          pie.innerText = img.alt;
//     }
//      else {                                                  //Se crea el Else , en la que si la condicion anterior no se cumple, se printa nada(borrar)
//          pie.innerText = '';
//      }
// }

//  let a = document.querySelectorAll('figcaption')
//  console.log(a)
// ======= EL METODO ( querrySelector ) se puede emplear en cualquier busqueda, sin afectar 

//EJERCICIO
// En este script debes leer todos los elementos tipo imagen de la página
//  y mostrar sus urls en un bloque tipo div cuyo id es fuentes y que ya existe en la página modelo usada para estos ejercicios. 
//  El script se ejecutará al pulsar el botón con el texto fuentes
// El bloque ya está creado solo tienes que crear
//  la función denominada fuentesImg() asociada al botón fuentes

function fuentesImg(){
let ElementoImg = document.getElementsByTagName('img');
//console.log(ElementoImg);
let mostrar =  document.getElementsById('fuentes');
}
//console.log(fuentesImg())




