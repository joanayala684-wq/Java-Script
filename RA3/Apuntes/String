# STRING EN JAVASCRIPT — APUNTES DAW2 RA3
## Objetos predefinidos del lenguaje I — Curso 2026-2027

## 1. ¿QUÉ ES STRING?

- En JavaScript, cualquier cadena de caracteres tiene acceso a las propiedades y métodos de `String`.
- Su propiedad principal es `length`, que contiene el número de unidades de código UTF-16 que componen la cadena.
- Podemos acceder a cada carácter mediante su posición o índice, empezando por 0.

```javascript
let texto = "pepe";

alert(texto.length); // 4
alert(texto[2]);     // p
alert(texto[0]);     // p
alert(texto[3]);     // e
```

IMPORTANTE:
- `length` es una propiedad, por eso no lleva paréntesis.
- Los índices empiezan en 0.
- Las cadenas son inmutables: sus métodos no modifican el texto original.

## 2. MÉTODOS MÁS INTERESANTES DEL OBJETO STRING

### 2.1. `concat(cadena1, ..., cadenaN)`

Concatena una o varias cadenas al final de otra. No modifica la cadena original.

```javascript
let texto = "pepe";
let otro = "luis";

alert(texto.concat(otro)); // pepeluis
alert(texto);              // pepe
```

También se puede utilizar el operador `+`:

```javascript
alert(texto + otro); // pepeluis
```

### 2.2. `indexOf(aguja[, inicio])`

Devuelve la primera posición en la que se encuentra un texto dentro de una cadena, empezando a buscar desde la posición indicada.

Si no encuentra el texto, devuelve `-1`.

```javascript
let texto = "pepe";

alert(texto.indexOf("e"));    // 1
alert(texto.indexOf("e", 2)); // 3
alert(texto.indexOf("x"));    // -1
```

- `"e"` aparece por primera vez en la posición 1.
- Al comenzar desde la posición 2, encuentra la siguiente `"e"` en la posición 3.
- Si no encuentra el texto, devuelve `-1`.

### 2.3. `lastIndexOf(aguja[, fin])`

Busca la última aparición de un texto dentro de una cadena, recorriéndola desde la derecha.

```javascript
let texto = "pepe";

alert(texto.lastIndexOf("e")); // 3
```

La última letra `"e"` está en la posición 3.

### 2.4. `split(separador)`

Divide una cadena y devuelve un array cuyos elementos son los fragmentos separados por el separador indicado.

```javascript
let nombres = "Pepe, Luis, Juan";

alert(nombres.split(",")[0]); // Pepe
alert(nombres.split(",")[1]); //  Luis
```

IMPORTANTE: el espacio que hay después de la coma se conserva. Para obtener `"Luis"` sin el espacio:

```javascript
let nombres = "Pepe, Luis, Juan";
let lista = nombres.split(",");

alert(lista[1].trim()); // Luis
```

También se puede separar por espacios:

```javascript
let texto = "Hola mundo";
let palabras = texto.split(" ");

alert(palabras[0]); // Hola
alert(palabras[1]); // mundo
```

`split()` se puede considerar la operación contraria a `join()`, que es un método de los arrays y permite unir sus elementos en una cadena.

```javascript
let nombres = ["Pepe", "Luis", "Juan"];

alert(nombres.join(", ")); // Pepe, Luis, Juan
```

### 2.5. `slice(inicio[, fin])`

Devuelve los caracteres comprendidos entre `inicio` (incluido) y `fin` (excluido). Si se omite `fin`, devuelve el texto hasta el final.

```javascript
let texto = "Hola Pepe, qué tal?";

alert(texto.slice(5, 8)); // Pep
alert(texto.slice(5));    // Pepe, qué tal?
```

Admite índices negativos para contar desde el final.

```javascript
alert("JavaScript".slice(-6)); // Script
```

### 2.6. `substring(inicio[, fin])`

Devuelve los caracteres comprendidos entre `inicio` (incluido) y `fin` (excluido). Si se omite `fin`, devuelve el resto de la cadena.

```javascript
let texto = "Hola Pepe, qué tal?";

alert(texto.substring(5, 8)); // Pep
alert(texto.substring(5));    // Pepe, qué tal?
```

DIFERENCIA ENTRE `slice()` Y `substring()`:

- `slice()` admite índices negativos para contar desde el final.
- `substring()` trata los índices negativos como 0.
- Ambos excluyen el índice final.

### 2.7. `substr(inicio[, cantidad])`

Devuelve una cantidad determinada de caracteres desde la posición inicial indicada.

```javascript
let texto = "Hola Pepe, qué tal?";

alert(texto.substr(5, 4)); // Pepe
```

- `5` indica dónde empieza.
- `4` indica cuántos caracteres devuelve.

Si se omite la cantidad, devuelve el texto hasta el final.

```javascript
alert(texto.substr(5)); // Pepe, qué tal?
```

IMPORTANTE: `substr()` está obsoleto en las especificaciones modernas de JavaScript. Para código nuevo, se recomienda utilizar `slice()` o `substring()`.

### 2.8. `toLowerCase()`

Devuelve la cadena convertida a minúsculas.

```javascript
let texto = "PEPE";

alert(texto.toLowerCase()); // pepe
```

### 2.9. `toUpperCase()`

Devuelve la cadena convertida a mayúsculas.

```javascript
let texto = "pepe";

alert(texto.toUpperCase()); // PEPE
```

### 2.10. `trim()`, `trimStart()`, `trimEnd()`, `trimLeft()` y `trimRight()`

Eliminan los espacios en blanco al principio, al final o en ambos extremos.

```javascript
let texto = "  Hola mundo  ";

alert(texto.trim());        // "Hola mundo"
alert(texto.trimStart());   // "Hola mundo  "
alert(texto.trimEnd());     // "  Hola mundo"
alert(texto.trimLeft());    // "Hola mundo  "
alert(texto.trimRight());   // "  Hola mundo"
```

- `trim()` elimina los espacios iniciales y finales.
- `trimStart()` elimina los espacios iniciales.
- `trimEnd()` elimina los espacios finales.
- `trimLeft()` es un alias de `trimStart()`.
- `trimRight()` es un alias de `trimEnd()`.

Estos métodos eliminan los espacios exteriores, pero no los espacios que hay entre palabras.

```javascript
let texto = "Hola    mundo";

alert(texto.trim()); // Hola    mundo
```

### 2.11. `search(cadena1)`

Busca una coincidencia mediante una expresión regular y devuelve la posición donde comienza la primera coincidencia. Si no encuentra ninguna, devuelve `-1`.

```javascript
let texto = "hola manola";

alert(texto.search("la")); // 2
alert(texto.search("xyz")); // -1
```

En este ejemplo, `"la"` comienza en la posición 2.

Aunque se puede pasar una cadena, `search()` está pensado para trabajar con expresiones regulares y no admite un segundo argumento para indicar desde dónde buscar.

### 2.12. `replace(cadena1, cadena2)`

Busca una coincidencia y la sustituye por otra cadena. Cuando el primer argumento es una cadena de texto, reemplaza solamente la primera coincidencia.

```javascript
let texto = "hola manola";

alert(texto.replace("hola", "adios")); // adios manola
alert(texto);                          // hola manola
```

Para reemplazar todas las coincidencias literales, se puede utilizar `replaceAll()`.

```javascript
let texto = "hola hola hola";

alert(texto.replaceAll("hola", "adios"));
// adios adios adios
```

### 2.13. `padStart(longitud, texto)`

Rellena el principio de una cadena hasta alcanzar la longitud indicada.

```javascript
alert("abc".padStart(10));          // "       abc"
alert("abc".padStart(10, "foo"));   // "foofoofabc"
alert("abc".padStart(6, "123465")); // "123abc"
```

Si no se indica el texto de relleno, se utilizan espacios.

Si el texto de relleno es demasiado largo, se utiliza solamente la parte necesaria.

### 2.14. `padEnd(longitud, texto)`

Rellena el final de una cadena hasta alcanzar la longitud indicada.

```javascript
alert("abc".padEnd(10));        // "abc       "
alert("abc".padEnd(10, "foo")); // "abcfoofoof"
alert("abc".padEnd(6, "123"));  // "abc123"
```

Estos métodos son útiles para completar números con ceros o alinear textos.

```javascript
let numero = "5";

alert(numero.padStart(3, "0")); // 005
```

## 3. OTROS MÉTODOS IMPORTANTES DE STRING

### `includes(texto)`

Comprueba si una cadena contiene otra.

```javascript
alert("Hola mundo".includes("mundo")); // true
```

### `startsWith(texto)`

Comprueba si la cadena empieza por el texto indicado.

```javascript
alert("JavaScript".startsWith("Java")); // true
```

### `endsWith(texto)`

Comprueba si la cadena termina por el texto indicado.

```javascript
alert("archivo.pdf".endsWith(".pdf")); // true
```

### `charAt(posicion)`

Devuelve el carácter de la posición indicada.

```javascript
alert("pepe".charAt(2)); // p
```

También puedes acceder mediante corchetes:

```javascript
alert("pepe"[2]); // p
```

### `repeat(cantidad)`

Repite la cadena el número de veces indicado.

```javascript
alert("Ja".repeat(3)); // JaJaJa
```

### `String(valor)`

Convierte un valor a texto.

```javascript
let edad = 20;
let texto = String(edad);

alert(texto);        // 20
alert(typeof texto); // string
```

---

## 4. RESUMEN RÁPIDO PARA EL EXAMEN

| Propiedad o método | Función |
|---|---|
| `length` | Devuelve la longitud de la cadena. |
| `texto[posicion]` | Accede a un carácter por su índice. |
| `concat()` | Une cadenas sin modificar la original. |
| `indexOf()` | Busca la primera aparición desde la izquierda. |
| `lastIndexOf()` | Busca la última aparición. |
| `split()` | Divide una cadena y devuelve un array. |
| `slice()` | Extrae una parte de la cadena. |
| `substring()` | Extrae una parte de la cadena. |
| `substr()` | Extrae una cantidad de caracteres; está obsoleto. |
| `toLowerCase()` | Convierte a minúsculas. |
| `toUpperCase()` | Convierte a mayúsculas. |
| `trim()` | Elimina espacios al principio y al final. |
| `trimStart()` | Elimina espacios iniciales. |
| `trimEnd()` | Elimina espacios finales. |
| `search()` | Busca una coincidencia y devuelve su posición. |
| `replace()` | Sustituye la primera coincidencia literal. |
| `replaceAll()` | Sustituye todas las coincidencias literales. |
| `padStart()` | Rellena por la izquierda. |
| `padEnd()` | Rellena por la derecha. |
| `includes()` | Comprueba si contiene un texto. |
| `startsWith()` | Comprueba cómo empieza. |
| `endsWith()` | Comprueba cómo termina. |
| `charAt()` | Devuelve un carácter. |
| `repeat()` | Repite el texto. |

## 5. TRUCOS QUE DEBES RECORDAR

1. `length` es una propiedad: `texto.length`.
2. Los índices empiezan en 0.
3. En `slice()` y `substring()`, el índice final no se incluye.
4. `indexOf()` y `lastIndexOf()` devuelven `-1` cuando no encuentran el texto.
5. `split()` devuelve un array.
6. `join()` pertenece a los arrays y sirve para unir sus elementos.
7. `trim()` no elimina los espacios que hay entre palabras.
8. `replace()` con una cadena de búsqueda reemplaza solo la primera coincidencia.
9. Los métodos de `String` no modifican la cadena original.
10. Para guardar el resultado, hay que asignarlo: `texto = texto.toUpperCase()`.

