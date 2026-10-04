/* ============================================================
   LABORATORIO DE JAVASCRIPT - GJ Medina
   ============================================================
   Este archivo se enlaza desde index.html con <script src="script.js">.
   Cada bloque corresponde a una sección de la página y demuestra un
   concepto distinto: variables y tipos de dato, arreglos y objetos,
   condicionales, bucles, funciones, y alcance/clausuras.
   ============================================================ */


/* ------------------------------------------------------------
   1. VARIABLES, SALIDA DE INFORMACIÓN Y TIPOS DE DATO
   ------------------------------------------------------------
   Se declaran variables con let y const, usando distintos tipos
   de dato de JavaScript: string, number, boolean, array y object.
   ------------------------------------------------------------ */
document.getElementById("btn-variables").addEventListener("click", function () {

    // Tipos de dato primitivos
    let nombreEstudiante = "Gerardo J. Medina";   // string
    let numeroEstudiante = 2507056253;            // number
    let esEstudianteActivo = true;                // boolean

    // Tipo de dato compuesto: arreglo (array)
    let cursosInscritos = ["WADE 1000L", "Sistemas de Información", "PROG 2400L"];

    // Tipo de dato compuesto: objeto (object)
    let perfilEstudiante = {
        nombre: nombreEstudiante,
        numero: numeroEstudiante,
        activo: esEstudianteActivo,
        cursos: cursosInscritos
    };

    // Salida de información en la consola del navegador
    console.log("---- Sección 1: Variables y tipos de dato ----");
    console.log("Nombre (string):", nombreEstudiante, "| typeof:", typeof nombreEstudiante);
    console.log("Número de estudiante (number):", numeroEstudiante, "| typeof:", typeof numeroEstudiante);
    console.log("¿Activo? (boolean):", esEstudianteActivo, "| typeof:", typeof esEstudianteActivo);
    console.log("Cursos inscritos (array):", cursosInscritos);
    console.log("Perfil completo (object):", perfilEstudiante);

    // Salida de información en la página
    const resultado =
        "Nombre: " + nombreEstudiante + " (string)\n" +
        "Número de estudiante: " + numeroEstudiante + " (number)\n" +
        "¿Activo?: " + esEstudianteActivo + " (boolean)\n" +
        "Cursos: " + cursosInscritos.join(", ") + " (array)\n" +
        "Perfil (object): " + JSON.stringify(perfilEstudiante, null, 2);

    document.getElementById("salida-variables").textContent = resultado;
});


/* ------------------------------------------------------------
   2. ARREGLOS Y OBJETOS
   ------------------------------------------------------------
   Se crea un arreglo de objetos (estudiantes con nombre y nota),
   se recorre con forEach, y se le agrega un nuevo elemento con push().
   ------------------------------------------------------------ */

// Arreglo de objetos: cada estudiante es un objeto con sus propias propiedades.
// Se declara afuera de la función para que otras secciones (bucles, funciones)
// también puedan usarlo.
let estudiantes = [
    { nombre: "Gerardo Medina", nota: 92 },
    { nombre: "Hinata Uzumaki", nota: 78 },
    { nombre: "Luis Quirindongo", nota: 65 },
    { nombre: "Carla Ortiz", nota: 88 }
];

document.getElementById("btn-arreglos").addEventListener("click", function () {

    console.log("---- Sección 2: Arreglos y objetos ----");
    console.log("Arreglo original de estudiantes:", estudiantes);

    // Manipulación del arreglo: se agrega un nuevo objeto con push()
    estudiantes.push({ nombre: "Pedro Ortiz", nota: 95 });
    console.log("Arreglo después de agregar un estudiante (push):", estudiantes);

    // Manipulación de un objeto: se modifica la nota de un estudiante existente
    estudiantes[1].nota = 80;
    console.log("Nota de Hinata Uzumaki actualizada:", estudiantes[1]);

    // Recorrer el arreglo con forEach() y mostrar cada objeto en la página
    const lista = document.getElementById("salida-arreglos");
    lista.innerHTML = "";
    estudiantes.forEach(function (estudiante, indice) {
        const item = document.createElement("li");
        item.textContent = (indice + 1) + ". " + estudiante.nombre + " — Nota: " + estudiante.nota;
        lista.appendChild(item);
    });
});


/* ------------------------------------------------------------
   3. ESTRUCTURAS DE CONTROL CONDICIONALES (if / else if / else)
   ------------------------------------------------------------ */
document.getElementById("btn-condicionales").addEventListener("click", function () {

    const nota = Number(document.getElementById("input-nota").value);
    let letra;

    // Lógica de toma de decisiones con if / else if / else
    if (nota >= 90) {
        letra = "A";
    } else if (nota >= 80) {
        letra = "B";
    } else if (nota >= 70) {
        letra = "C";
    } else if (nota >= 60) {
        letra = "D";
    } else {
        letra = "F";
    }

    const mensaje = "La nota " + nota + " corresponde a la letra: " + letra;

    console.log("---- Sección 3: Condicionales ----");
    console.log(mensaje);

    document.getElementById("salida-condicionales").textContent = mensaje;
});


/* ------------------------------------------------------------
   4. BUCLES (for, while, do...while)
   ------------------------------------------------------------
   Se recorre el arreglo "estudiantes" de tres formas distintas
   para sumar las notas y calcular el promedio del grupo.
   ------------------------------------------------------------ */
document.getElementById("btn-bucles").addEventListener("click", function () {

    console.log("---- Sección 4: Bucles ----");

    // --- Bucle for ---
    let sumaFor = 0;
    for (let i = 0; i < estudiantes.length; i++) {
        sumaFor += estudiantes[i].nota;
    }
    const promedioFor = (sumaFor / estudiantes.length).toFixed(2);
    console.log("Bucle for -> suma:", sumaFor, "| promedio:", promedioFor);

    // --- Bucle while ---
    let sumaWhile = 0;
    let indice = 0;
    while (indice < estudiantes.length) {
        sumaWhile += estudiantes[indice].nota;
        indice++;
    }
    const promedioWhile = (sumaWhile / estudiantes.length).toFixed(2);
    console.log("Bucle while -> suma:", sumaWhile, "| promedio:", promedioWhile);

    // --- Bucle do...while ---
    let sumaDoWhile = 0;
    let j = 0;
    do {
        sumaDoWhile += estudiantes[j].nota;
        j++;
    } while (j < estudiantes.length);
    const promedioDoWhile = (sumaDoWhile / estudiantes.length).toFixed(2);
    console.log("Bucle do...while -> suma:", sumaDoWhile, "| promedio:", promedioDoWhile);

    const resultado =
        "Bucle for:        suma = " + sumaFor + "  | promedio = " + promedioFor + "\n" +
        "Bucle while:      suma = " + sumaWhile + "  | promedio = " + promedioWhile + "\n" +
        "Bucle do...while: suma = " + sumaDoWhile + "  | promedio = " + promedioDoWhile;

    document.getElementById("salida-bucles").textContent = resultado;
});


/* ------------------------------------------------------------
   5. FUNCIONES
   ------------------------------------------------------------
   Se definen funciones para tareas específicas: una función
   declarada (function) y una función flecha (arrow function).
   ------------------------------------------------------------ */

// Función declarada: calcula el promedio de un arreglo de estudiantes.
function calcularPromedio(listaEstudiantes) {
    let suma = 0;
    for (let i = 0; i < listaEstudiantes.length; i++) {
        suma += listaEstudiantes[i].nota;
    }
    return suma / listaEstudiantes.length;
}

// Función flecha: encuentra al estudiante con la nota más alta.
const encontrarMejorNota = (listaEstudiantes) => {
    let mejor = listaEstudiantes[0];
    for (const estudiante of listaEstudiantes) {
        if (estudiante.nota > mejor.nota) {
            mejor = estudiante;
        }
    }
    return mejor;
};

document.getElementById("btn-funciones").addEventListener("click", function () {

    const promedio = calcularPromedio(estudiantes).toFixed(2);
    const mejorEstudiante = encontrarMejorNota(estudiantes);

    console.log("---- Sección 5: Funciones ----");
    console.log("calcularPromedio(estudiantes) ->", promedio);
    console.log("encontrarMejorNota(estudiantes) ->", mejorEstudiante);

    const resultado =
        "Promedio del grupo (función declarada): " + promedio + "\n" +
        "Mejor estudiante (función flecha): " + mejorEstudiante.nombre + " con " + mejorEstudiante.nota + " puntos";

    document.getElementById("salida-funciones").textContent = resultado;
});


/* ------------------------------------------------------------
   6. ALCANCE (SCOPE) Y CLAUSURAS (CLOSURES)
   ------------------------------------------------------------ */

// Función que crea un contador usando una CLAUSURA: la función interna
// "recuerda" la variable "cuenta" de la función externa, incluso después
// de que crearContador() ya terminó de ejecutarse.
function crearContador() {
    let cuenta = 0; // esta variable queda "encerrada" dentro de la clausura
    return function () {
        cuenta++;
        return cuenta;
    };
}

// Cada llamada a crearContador() genera un contador independiente,
// con su propia variable "cuenta" privada.
const contadorA = crearContador();
const contadorB = crearContador();

document.getElementById("btn-clausuras").addEventListener("click", function () {

    console.log("---- Sección 6: Alcance (scope) y clausuras ----");

    // --- Alcance con var (de función) vs let (de bloque) ---
    // Con var, la variable "i" es la MISMA en las tres vueltas del bucle,
    // por lo que al final las tres funciones comparten el mismo valor final.
    const funcionesVar = [];
    for (var i = 0; i < 3; i++) {
        funcionesVar.push(function () { return i; });
    }

    // Con let, cada vuelta del bucle crea una "i" NUEVA y propia de ese
    // bloque, por lo que cada función recuerda su propio valor.
    const funcionesLet = [];
    for (let k = 0; k < 3; k++) {
        funcionesLet.push(function () { return k; });
    }

    const resultadosVar = funcionesVar.map(function (f) { return f(); });
    const resultadosLet = funcionesLet.map(function (f) { return f(); });

    console.log("Alcance con var (todas comparten el último valor):", resultadosVar);
    console.log("Alcance con let (cada una recuerda su propio valor):", resultadosLet);

    // --- Clausura: dos contadores independientes ---
    const valorA1 = contadorA(); // 1
    const valorA2 = contadorA(); // 2 (sigue sumando sobre el mismo contadorA)
    const valorB1 = contadorB(); // 1 (contadorB es independiente de contadorA)

    console.log("contadorA() ->", valorA1);
    console.log("contadorA() otra vez ->", valorA2);
    console.log("contadorB() (independiente) ->", valorB1);

    const resultado =
        "Alcance con var -> " + resultadosVar.join(", ") + " (las tres funciones comparten el último valor de i)\n" +
        "Alcance con let -> " + resultadosLet.join(", ") + " (cada función recuerda su propio valor de k)\n\n" +
        "Clausura - contadorA(): " + valorA1 + "\n" +
        "Clausura - contadorA() otra vez: " + valorA2 + "\n" +
        "Clausura - contadorB() (independiente de A): " + valorB1;

    document.getElementById("salida-clausuras").textContent = resultado;
});


/* ------------------------------------------------------------
   Mensaje inicial en consola, para confirmar que el archivo
   externo se enlazó correctamente desde el HTML.
   ------------------------------------------------------------ */
console.log("script.js cargado correctamente. Usa los botones de la página para ejecutar cada sección.");
