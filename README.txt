PROYECTO: Creación de una página web responsiva con Bootstrap y CSS
          (Fundamentos de JavaScript)
CURSO: NCBTO - 2026-5CC - WADE 1000L - 3663ONL (Front-End Technologies and
       User Interface (UI) and Laboratory)
UNIVERSIDAD: Northbridge University
ESTUDIANTE: Gerardo J. Medina (GJ)
NUMERO DE ESTUDIANTE: 2507056253

DESCRIPCIÓN
-----------
Este proyecto es una página HTML5 que enlaza un archivo JavaScript externo
(script.js) mediante la etiqueta <script>, y que practica los conceptos
fundamentales de JavaScript pedidos en la tarea. La página está dividida
en seis secciones, cada una con un botón que ejecuta el código
correspondiente y muestra el resultado tanto en la página como en la
consola del navegador (F12 → pestaña "Console"). Demuestra el uso de:

1. Variables, salida de información y tipos de dato:
   - Declaración de variables con let y const.
   - Tipos de dato: string, number, boolean, array y object.
   - Salida de información con console.log() y en la página.

2. Arreglos y objetos:
   - Un arreglo de objetos (estudiantes con nombre y nota).
   - Manipulación del arreglo con push() (agregar) y modificación directa
     de una propiedad de un objeto dentro del arreglo.
   - Recorrido del arreglo con forEach() para mostrar cada estudiante.

3. Estructuras de control condicionales:
   - if / else if / else para convertir una nota numérica en una letra
     (A, B, C, D, F).

4. Bucles (loops):
   - for, while y do...while, cada uno recorriendo el mismo arreglo de
     estudiantes para calcular la suma y el promedio de las notas.

5. Funciones:
   - Una función declarada (calcularPromedio) y una función flecha
     (encontrarMejorNota), cada una con una tarea específica.

6. Alcance (scope) y clausuras (closures):
   - Ejemplo del alcance de var (de función) comparado con let (de
     bloque) dentro de un bucle for.
   - Una clausura (crearContador) que genera contadores independientes,
     cada uno con su propia variable privada que "recuerda" su valor
     entre llamadas.

ARCHIVOS INCLUIDOS
-------------------
- index.html  -> Estructura HTML5 de la página, con comentarios que
                  explican cada sección y enlaza style.css y script.js.
- script.js   -> Archivo JavaScript externo con todo el código de los
                  seis conceptos, comentado en detalle.
- style.css   -> Hoja de estilos propia (selectores, modelo de caja y
                  ajustes responsivos).
- imagenes/   -> Carpeta con consola.png, una captura de la consola del
                  navegador con la salida de los ejercicios (se muestra al
                  final de la página dentro de un <figure>).
- README.txt  -> Este archivo.

ENLACE DEL REPOSITORIO DE GITHUB
---------------------------------
https://github.com/medinalab3/laboratorio-javascript

CÓMO VISUALIZAR Y PROBAR EL PROYECTO
---------------------------------------
1. Abrir la carpeta del proyecto en Visual Studio Code.
2. Abrir el archivo "index.html" con la extensión Live Server o
   directamente con el navegador de preferencia.
3. Abrir las herramientas de desarrollador (F12) y seleccionar la
   pestaña "Console".
4. Hacer clic en el botón "Ejecutar" (o "Evaluar") de cada sección, en
   orden, y observar la salida tanto en la página como en la consola.
5. En la sección 3 (condicionales), se puede cambiar el número de la
   nota antes de hacer clic en "Evaluar" para probar distintos
   resultados (A, B, C, D o F).
