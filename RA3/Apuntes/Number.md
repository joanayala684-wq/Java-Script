# CHULETA DE NUMBER EN JAVASCRIPT
## DAW2 — Desarrollo Web en Entorno Cliente — RA3
### Curso 2026-2027

## 1. ¿QUÉ ES EL OBJETO NUMBER?

El objeto `Number` permite trabajar con valores numéricos en JavaScript. Dispone de propiedades que representan límites numéricos y métodos para comprobar, convertir o dar formato a números.

JavaScript utiliza el tipo `number` para representar tanto números enteros como decimales.

```javascript
let entero = 25;
let decimal = 3.1416;

alert(entero);  // 25
alert(decimal); // 3.1416
```

IMPORTANTE: `number` es el tipo de dato y `Number` es el objeto incorporado de JavaScript que contiene propiedades y métodos relacionados con los números.

---

## 2. PROPIEDADES DE NUMBER

### `Number.MAX_VALUE`

Devuelve el mayor número finito positivo que JavaScript puede representar.

```javascript
alert(Number.MAX_VALUE);
// Aproximadamente 1.7976931348623157e+308
```

### `Number.MIN_VALUE`

Devuelve el menor número positivo distinto de cero que JavaScript puede representar.

```javascript
alert(Number.MIN_VALUE);
// Aproximadamente 5e-324
```

IMPORTANTE: `MIN_VALUE` no es el número negativo más pequeño. Es el número positivo más cercano a cero.

### `Number.NaN`

Representa un valor especial que significa *Not a Number*.

```javascript
alert(Number.NaN); // NaN
```

Se utiliza para representar resultados numéricos no válidos.

```javascript
let resultado = Number("hola");

alert(resultado); // NaN
```

Para comprobar si un valor es `NaN`, se recomienda utilizar `Number.isNaN()`.

```javascript
alert(Number.isNaN(NaN)); // true
alert(Number.isNaN(25));  // false
```

### `Number.NEGATIVE_INFINITY`

Representa el infinito negativo.

```javascript
alert(Number.NEGATIVE_INFINITY); // -Infinity
```

### `Number.POSITIVE_INFINITY`

Representa el infinito positivo.

```javascript
alert(Number.POSITIVE_INFINITY); // Infinity
```

Se puede producir un infinito al realizar determinadas operaciones.

```javascript
alert(1 / 0);  // Infinity
alert(-1 / 0); // -Infinity
```

### Resumen de propiedades

| Propiedad | Significado |
|---|---|
| `Number.MAX_VALUE` | Mayor número finito positivo. |
| `Number.MIN_VALUE` | Menor número positivo distinto de cero. |
| `Number.NaN` | Valor numérico no válido. |
| `Number.NEGATIVE_INFINITY` | Infinito negativo. |
| `Number.POSITIVE_INFINITY` | Infinito positivo. |

---

## 3. MÉTODOS DE FORMATO DE LOS NÚMEROS

### `toExponential()`

Convierte un número en notación exponencial o científica.

```javascript
let n = 100000000;

alert(n.toExponential()); // 1e+8
```

También permite indicar cuántos decimales queremos mostrar.

```javascript
let n = 1234.567;

alert(n.toExponential(2)); // 1.23e+3
```

### `toFixed(decimales)`

Devuelve una cadena de texto con el número de decimales indicado, redondeando cuando corresponda.

```javascript
let n = 3.1416;

alert(n.toFixed(2)); // "3.14"
alert(n.toFixed(0)); // "3"
alert(n.toFixed(3)); // "3.142"
```

IMPORTANTE: `toFixed()` devuelve un `string`, no un `number`.

```javascript
let n = 3.1416;
let resultado = n.toFixed(2);

alert(resultado);        // "3.14"
alert(typeof resultado); // string
```

### `toPrecision(cantidad)`

Devuelve una cadena con el número de cifras significativas indicado. Puede utilizar notación científica cuando sea necesario.

```javascript
let n = 50000.986;

alert(n.toPrecision(6)); // "50001.0"
alert(n.toPrecision(2)); // "5.0e+4"
```

Otro ejemplo:

```javascript
let n = 3.141592;

alert(n.toPrecision(3)); // "3.14"
alert(n.toPrecision(5)); // "3.1416"
```

IMPORTANTE: las cifras significativas cuentan todos los dígitos relevantes, no solamente los decimales.

### Diferencia entre los métodos

| Método | ¿Qué controla? | Ejemplo con `3.1416` |
|---|---|---|
| `toExponential(2)` | Decimales en notación científica. | `"3.14e+0"` |
| `toFixed(2)` | Número de decimales. | `"3.14"` |
| `toPrecision(3)` | Número total de cifras significativas. | `"3.14"` |

---

## 4. COMPROBAR SI UN NÚMERO ES VÁLIDO

### `Number.isInteger(valor)`

Comprueba si el valor es un número entero. No convierte cadenas de texto a números.

```javascript
alert(Number.isInteger(123));   // true
alert(Number.isInteger(12.5));  // false
alert(Number.isInteger("123")); // false
```

### IMPORTANTE: EL ERROR HABITUAL CON PROMPT

`prompt()` devuelve una cadena de texto, aunque el usuario escriba un número.

```javascript
let num = prompt("Introduce un número");

alert(Number.isInteger(num)); // false si se escribe 123
```

Esto sucede porque `num` contiene el texto `"123"`, no el número `123`.

La solución es convertir el valor antes de comprobarlo:

```javascript
let num = Number(prompt("Introduce un número"));

alert(Number.isInteger(num)); // true si se escribe 123
```

Ahora bien, si el usuario escribe `12.5`, el resultado será `false`, porque es decimal.

### `Number.isNaN(valor)`

Comprueba si un valor es exactamente `NaN`, sin convertirlo previamente.

```javascript
alert(Number.isNaN(NaN));     // true
alert(Number.isNaN("hola"));  // false
alert(Number.isNaN(123));     // false
```

Para comprobar si una entrada de texto se puede convertir en un número válido:

```javascript
let num = Number(prompt("Introduce un número"));

if (Number.isNaN(num)) {
    alert("No has introducido un número válido");
} else {
    alert("Número introducido: " + num);
}
```

### `Number.isFinite(valor)`

Comprueba si el valor es un número finito y no es `Infinity`, `-Infinity` ni `NaN`.

```javascript
alert(Number.isFinite(100));       // true
alert(Number.isFinite(Infinity));  // false
alert(Number.isFinite(NaN));       // false
alert(Number.isFinite("100"));     // false
```

### `Number.isSafeInteger(valor)`

Comprueba si un valor es un entero seguro, es decir, un entero que JavaScript puede representar de forma exacta dentro de su rango seguro.

```javascript
alert(Number.isSafeInteger(100)); // true
alert(Number.isSafeInteger(3.5)); // false
```

---

## 5. CONVERTIR TEXTO A NÚMERO

### `Number(valor)`

Convierte un valor en número cuando es posible.

```javascript
alert(Number("123"));  // 123
alert(Number("3.14")); // 3.14
alert(Number("hola")); // NaN
alert(Number(""));     // 0
```

### `parseInt(texto)`

Extrae un número entero al principio de una cadena.

```javascript
alert(parseInt("123"));    // 123
alert(parseInt("123abc")); // 123
alert(parseInt("3.14"));   // 3
```

### `parseFloat(texto)`

Extrae un número decimal al principio de una cadena.

```javascript
alert(parseFloat("3.14"));    // 3.14
alert(parseFloat("12.5abc")); // 12.5
```

### Diferencias importantes

```javascript
alert(Number("123abc"));    // NaN
alert(parseInt("123abc"));  // 123
alert(parseFloat("12.5abc")); // 12.5
```

- `Number()` intenta convertir el valor completo.
- `parseInt()` extrae un entero inicial.
- `parseFloat()` extrae un número decimal inicial.

---

## 6. EJEMPLO COMPLETO PARA DAW2

Este ejemplo solicita un número, comprueba si es válido y si es entero, y muestra distintos formatos.

```javascript
let entrada = prompt("Introduce un número");
let num = Number(entrada);

if (entrada === null || entrada.trim() === "") {
    alert("No has introducido ningún número");
} else if (Number.isNaN(num)) {
    alert("El valor introducido no es un número válido");
} else {
    alert("Número introducido: " + num);

    if (Number.isInteger(num)) {
        alert("Es un número entero");
    } else {
        alert("Es un número decimal");
    }

    alert("Con dos decimales: " + num.toFixed(2));
    alert("Notación exponencial: " + num.toExponential());
}
```

---

## 7. RESUMEN RÁPIDO PARA EL EXAMEN

| Propiedad o método | Función |
|---|---|
| `Number.MAX_VALUE` | Mayor número finito positivo. |
| `Number.MIN_VALUE` | Menor número positivo distinto de cero. |
| `Number.NaN` | Valor no numérico. |
| `Number.NEGATIVE_INFINITY` | Infinito negativo. |
| `Number.POSITIVE_INFINITY` | Infinito positivo. |
| `toExponential()` | Convierte a notación exponencial. |
| `toFixed(n)` | Devuelve el número con `n` decimales. |
| `toPrecision(n)` | Devuelve el número con `n` cifras significativas. |
| `Number.isInteger()` | Comprueba si es entero. |
| `Number.isNaN()` | Comprueba si es `NaN`. |
| `Number.isFinite()` | Comprueba si es finito. |
| `Number.isSafeInteger()` | Comprueba si es un entero seguro. |
| `Number(valor)` | Convierte un valor a número. |
| `parseInt()` | Extrae un entero inicial. |
| `parseFloat()` | Extrae un número decimal inicial. |

## 8. TRUCOS QUE DEBES RECORDAR

1. `prompt()` devuelve texto, no un número.
2. Para convertir lo introducido por el usuario, utiliza `Number()`.
3. `Number.isInteger("123")` devuelve `false` porque `"123"` es un `string`.
4. `Number.isInteger(Number("123"))` devuelve `true`.
5. `toFixed()` controla los decimales.
6. `toPrecision()` controla las cifras significativas.
7. `toExponential()` utiliza notación científica.
8. `Number.MIN_VALUE` no es el número negativo mínimo: es el positivo más próximo a cero.
9. `NaN` significa *Not a Number*.
10. `toFixed()`, `toPrecision()` y `toExponential()` devuelven cadenas de texto.

