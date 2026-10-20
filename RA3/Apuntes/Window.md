# CHULETA DE WINDOW EN JAVASCRIPT
**DAW2 — Desarrollo Web en Entorno Cliente — RA3**  
**Objetos predefinidos del lenguaje II**

## 1. ¿Qué es el objeto window?

El objeto `window` representa la ventana o pestaña del navegador donde se está ejecutando JavaScript.

Es el objeto principal del navegador y permite abrir ventanas, mostrar mensajes, solicitar datos, controlar temporizadores y acceder a otros objetos del navegador.

```javascript
window.alert("Hola");
window.confirm("¿Quieres continuar?");
```

En muchos casos, `window` se puede omitir porque sus métodos están disponibles directamente:

```javascript
alert("Hola");
confirm("¿Quieres continuar?");
```

Ambas formas funcionan en el navegador.

## 2. Abrir una ventana: window.open()

El método `open()` permite abrir una página en una ventana o pestaña.

```javascript
let nuevaVentana = window.open("https://www.google.com");
```

Guardamos la ventana en una variable para poder trabajar con ella posteriormente, por ejemplo, para cerrarla.

### Sintaxis

```javascript
window.open(URL, nombre, especificaciones);
```

| Parámetro | Descripción |
|---|---|
| `URL` | Dirección de la página que queremos abrir. |
| `nombre` | Destino de la página: `_blank`, `_self` o el nombre de una ventana. |
| `especificaciones` | Opciones como anchura, altura y posición de la ventana. |

### Ejemplos

```javascript
// Abrir una página en una pestaña o ventana nueva
let ventana1 = window.open("https://www.google.com", "_blank");

// Cargar la página en la ventana actual
window.open("https://www.google.com", "_self");

// Abrir una ventana con dimensiones concretas
let ventana2 = window.open(
    "https://www.google.com",
    "miVentana",
    "width=600,height=400,left=100,top=100"
);
```

Especificaciones habituales:

- `width=600`: anchura de 600 píxeles.
- `height=400`: altura de 400 píxeles.
- `left=100`: posición horizontal.
- `top=100`: posición vertical.

**Importante:** los navegadores pueden bloquear las ventanas emergentes si no se abren como consecuencia de una acción del usuario, por ejemplo, al pulsar un botón.

## 3. Cerrar una ventana: close()

El método `close()` cierra una ventana.

```javascript
let nuevaVentana = window.open("https://www.google.com");

// Más adelante:
nuevaVentana.close();
```

Para cerrar la ventana actual se utilizaría:

```javascript
window.close();
```

Sin embargo, los navegadores normalmente no permiten que un script cierre una pestaña que el usuario ha abierto manualmente. Por lo general, solo pueden cerrarse mediante JavaScript las ventanas abiertas por un script.

## 4. Cuadros de diálogo

### alert() — Mostrar un mensaje

Muestra un mensaje y un botón para aceptar.

```javascript
alert("Bienvenido a la página");
```

No devuelve un valor útil para tomar decisiones.

### confirm() — Confirmar una acción

Muestra un mensaje con los botones Aceptar y Cancelar.

- Devuelve `true` si el usuario acepta.
- Devuelve `false` si el usuario cancela.

```javascript
let respuesta = confirm("¿Quieres continuar?");

if (respuesta) {
    alert("Has aceptado");
} else {
    alert("Has cancelado");
}
```

**Truco:** `confirm()` devuelve un booleano: `true` o `false`.

También se puede utilizar directamente en un `if`:

```javascript
if (confirm("¿Quieres borrar el archivo?")) {
    alert("Has confirmado el borrado");
}
```

### prompt() — Pedir datos

Muestra un cuadro de texto para que el usuario escriba información.

```javascript
let nombre = prompt("¿Cómo te llamas?");

alert("Hola, " + nombre);
```

También permite indicar un valor por defecto:

```javascript
let nombre = prompt("¿Cómo te llamas?", "Usuario");
```

**Importante:** `prompt()` devuelve texto. Si el usuario pulsa Cancelar, devuelve `null`.

Si necesitamos un número, debemos convertirlo:

```javascript
let edad = Number(prompt("Introduce tu edad"));

alert(edad + 1);
```

Para distinguir entre cancelar y escribir un número, conviene comprobar primero si el resultado es `null`.

### Resumen de los tres métodos

| Método | Para qué sirve | Qué devuelve |
|---|---|---|
| `alert()` | Mostrar un mensaje | `undefined` |
| `confirm()` | Pedir confirmación | `true` o `false` |
| `prompt()` | Pedir texto al usuario | Una cadena o `null` |

## 5. Mover y redimensionar ventanas

Existen métodos para cambiar el tamaño o la posición de una ventana. Los navegadores actuales pueden limitar su funcionamiento.

| Método | Función |
|---|---|
| `resizeBy(ancho, alto)` | Aumenta o reduce el tamaño respecto al actual. |
| `resizeTo(ancho, alto)` | Intenta establecer un tamaño concreto. |
| `moveBy(x, y)` | Mueve la ventana respecto a su posición actual. |
| `moveTo(x, y)` | Intenta mover la ventana a una posición concreta. |

Ejemplos:

```javascript
nuevaVentana.resizeBy(100, 50);
nuevaVentana.resizeTo(800, 600);

nuevaVentana.moveBy(50, 50);
nuevaVentana.moveTo(100, 100);
```

En estos ejemplos, `nuevaVentana` debe ser una ventana que se haya podido abrir y controlar mediante JavaScript.

## 6. Temporizadores

Los temporizadores permiten ejecutar una función después de un tiempo o repetirla periódicamente.

El tiempo se expresa en **milisegundos**:

- `1000` milisegundos = 1 segundo.
- `3000` milisegundos = 3 segundos.
- `5000` milisegundos = 5 segundos.

### setInterval() — Repetir una función

Ejecuta una función repetidamente, esperando el intervalo indicado entre ejecuciones.

```javascript
let temporizador = window.setInterval(function () {
    alert("Hola");
}, 3000);
```

El navegador intentará ejecutar la función cada 3 segundos.

Para detener la repetición utilizamos `clearInterval()`:

```javascript
clearInterval(temporizador);
```

### Ejemplo con funciones

```javascript
let temporizador;

function saludar() {
    temporizador = window.setInterval(function () {
        alert("Hola");
    }, 3000);
}

function parar() {
    clearInterval(temporizador);
}
```

En este ejemplo, `saludar()` inicia el temporizador y `parar()` lo detiene.

**Importante:** la variable `temporizador` debe estar declarada fuera de las funciones si queremos que ambas puedan utilizarla.

### setTimeout() — Ejecutar una sola vez

Ejecuta una función una vez después del tiempo indicado.

```javascript
window.setTimeout(function () {
    alert("Hola");
}, 3000);
```

El mensaje aparecerá aproximadamente 3 segundos después.

Para cancelar un `setTimeout()` antes de que se ejecute, utilizamos `clearTimeout()`:

```javascript
let temporizador = window.setTimeout(function () {
    alert("Hola");
}, 3000);

clearTimeout(temporizador);
```

### Diferencia entre setInterval() y setTimeout()

| Método | Comportamiento | Cómo cancelarlo |
|---|---|---|
| `setInterval()` | Repite la función periódicamente. | `clearInterval()` |
| `setTimeout()` | Ejecuta la función una sola vez tras esperar. | `clearTimeout()` |

**Truco de examen:**
- `Interval` = intervalo que se repite.
- `Timeout` = espera antes de ejecutarse una vez.

## 7. Ejemplo completo: iniciar y detener un contador

```javascript
let contador = 0;
let temporizador;

function iniciar() {
    temporizador = setInterval(function () {
        contador++;
        console.log(contador);
    }, 1000);
}

function parar() {
    clearInterval(temporizador);
}
```

Cada segundo aumenta el contador en uno y lo muestra en la consola. Al llamar a `parar()`, deja de repetirse.

En una página HTML podríamos tener:

```html
<button onclick="iniciar()">Iniciar</button>
<button onclick="parar()">Parar</button>
```

## 8. Otros objetos relacionados con window

Del objeto `window` podemos acceder a otros objetos del navegador:

| Objeto | Para qué sirve |
|---|---|
| `window.navigator` | Información sobre el navegador y el entorno. |
| `window.screen` | Información sobre la pantalla del dispositivo. |
| `window.location` | Dirección URL actual y navegación. |
| `window.history` | Historial de navegación de la pestaña. |

Ejemplos básicos:

```javascript
alert(window.location.href); // URL actual

window.history.back();        // Volver a la página anterior

alert(window.navigator.language); // Idioma preferido del navegador

alert(window.screen.width);   // Anchura de la pantalla
```

Estos objetos se estudian con más detalle por separado.

## 9. Resumen para el examen

| Si te piden... | Utiliza... |
|---|---|
| Abrir una página | `window.open()` |
| Cerrar una ventana abierta por script | `ventana.close()` |
| Mostrar un mensaje | `alert()` |
| Pedir confirmación | `confirm()` |
| Pedir datos | `prompt()` |
| Repetir una función cada cierto tiempo | `setInterval()` |
| Detener una repetición | `clearInterval()` |
| Ejecutar una función una sola vez tras esperar | `setTimeout()` |
| Cancelar una ejecución pendiente | `clearTimeout()` |
| Cambiar el tamaño de una ventana | `resizeBy()` / `resizeTo()` |
| Cambiar la posición de una ventana | `moveBy()` / `moveTo()` |
| Consultar la URL actual | `location.href` |
| Volver a la página anterior | `history.back()` |

## 10. Errores típicos

1. Confundir `setInterval()` con `setTimeout()`.
2. Olvidar guardar el identificador del temporizador si después queremos cancelarlo.
3. Utilizar `clearInterval()` para cancelar un `setTimeout()`; para este último se utiliza `clearTimeout()`.
4. Pensar que `prompt()` devuelve un número: devuelve texto o `null`.
5. Pensar que `confirm()` devuelve una cadena: devuelve `true` o `false`.
6. Intentar cerrar con JavaScript una pestaña que no se abrió mediante un script.
7. Olvidar que los tiempos se expresan en milisegundos.
8. Escribir `setTimeoutl()` con una ele final: el nombre correcto es `setTimeout()`.