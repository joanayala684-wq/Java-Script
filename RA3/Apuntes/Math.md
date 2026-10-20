# CHULETA DE MATH EN JAVASCRIPT
**DAW2 — Desarrollo Web en Entorno Cliente — RA3**  
**Objetos predefinidos del lenguaje**

## 1. ¿Qué es el objeto Math?

El objeto `Math` permite realizar operaciones matemáticas, como redondear números, calcular raíces cuadradas, obtener valores absolutos y generar números aleatorios.

**Importante:** `Math` no es un constructor. No debemos crear objetos con `new Math()`. Se utiliza directamente:

```javascript
alert(Math.PI);
alert(Math.sqrt(25));
```

## 2. Propiedades de Math

Las propiedades permiten acceder a constantes matemáticas. Son de solo lectura.

| Propiedad | Descripción | Ejemplo |
|---|---|---|
| `Math.E` | Constante de Euler, aproximadamente 2.718 | `Math.E` |
| `Math.LN2` | Logaritmo natural de 2 | `Math.LN2` |
| `Math.LN10` | Logaritmo natural de 10 | `Math.LN10` |
| `Math.LOG2E` | Logaritmo en base 2 de E | `Math.LOG2E` |
| `Math.LOG10E` | Logaritmo en base 10 de E | `Math.LOG10E` |
| `Math.PI` | Constante π, aproximadamente 3.1416 | `Math.PI` |
| `Math.SQRT1_2` | Raíz cuadrada de 1/2 | `Math.SQRT1_2` |
| `Math.SQRT2` | Raíz cuadrada de 2 | `Math.SQRT2` |

Ejemplo:

```javascript
alert(Math.PI); // 3.141592...
```

## 3. Métodos más importantes

### `Math.abs(valor)` — Valor absoluto

Devuelve el valor de un número sin su signo. El resultado nunca es negativo.

```javascript
Math.abs(-5);    // 5
Math.abs(5);     // 5
Math.abs(-12.8); // 12.8
Math.abs(0);     // 0
```

**¿Para qué sirve?**

Para obtener la distancia entre dos números sin importar cuál sea mayor:

```javascript
let a = 10;
let b = 25;

let diferencia = Math.abs(a - b);

alert(diferencia); // 15
```

Aunque cambiemos el orden, el resultado sigue siendo positivo:

```javascript
Math.abs(10 - 25); // 15
Math.abs(25 - 10); // 15
```

**Truco de examen:** `Math.abs()` no redondea. Solo elimina el signo negativo si lo hay.

### `Math.floor(valor)` — Redondear hacia abajo

Devuelve el mayor número entero que sea menor o igual que el valor recibido.

```javascript
Math.floor(4.9);   // 4
Math.floor(4.1);   // 4
Math.floor(4.0);   // 4
Math.floor(-4.1);  // -5
```

**¡Cuidado!** No significa quitar los decimales sin más. Con números negativos, baja al entero siguiente en la recta numérica.

```javascript
Math.floor(-3.2); // -4
```

### Diferencia entre `floor`, `ceil` y `round`

| Método | Qué hace | Ejemplo |
|---|---|---|
| `Math.floor()` | Redondea hacia abajo | `Math.floor(7.8)` → `7` |
| `Math.ceil()` | Redondea hacia arriba | `Math.ceil(7.2)` → `8` |
| `Math.round()` | Redondea al entero más próximo | `Math.round(7.6)` → `8` |

Más ejemplos:

```javascript
Math.floor(33.3); // 33
Math.ceil(33.3);  // 34
Math.round(33.3); // 33
Math.round(33.7); // 34
```

**Regla para recordar:**
- `floor`: hacia abajo.
- `ceil`: hacia arriba.
- `round`: al más cercano.
- `abs`: sin signo negativo.

### `Math.random()` — Número aleatorio

Devuelve un número aleatorio mayor o igual que `0` y menor que `1`.

```javascript
Math.random(); // Por ejemplo: 0.5831
```

Puede devolver `0`, pero nunca devuelve `1`.

Para obtener un número entero entre dos extremos, utilizamos `Math.random()` junto con `Math.floor()`.

### `Math.floor(Math.random() * (max - min + 1) + min)`

Esta fórmula permite obtener un entero aleatorio entre `min` y `max`, **incluyendo ambos extremos**.

```javascript
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

alert(aleatorio(1, 10)); // Un entero entre 1 y 10
```

**¿Cómo funciona?** Si queremos un número entre 1 y 10:

1. `Math.random()` genera un decimal desde 0 hasta menos de 1.
2. `Math.random() * 10` genera un valor desde 0 hasta menos de 10.
3. Al sumar `1`, el valor queda entre 1 y menos de 11.
4. `Math.floor()` elimina la parte decimal redondeando hacia abajo. El resultado será un entero entre 1 y 10.

El `+ 1` dentro de la fórmula es importante para incluir el extremo máximo.

Otros ejemplos:

```javascript
aleatorio(1, 6);    // Dado: entre 1 y 6
aleatorio(1, 100);  // Entre 1 y 100
aleatorio(0, 9);    // Entre 0 y 9
aleatorio(10, 20);  // Entre 10 y 20
```

### `Math.max()` — Número mayor

Devuelve el número más grande entre los argumentos recibidos.

```javascript
Math.max(2, 6, 3, 7); // 7
Math.max(10, 25, 4);  // 25
```

### `Math.min()` — Número menor

Devuelve el número más pequeño entre los argumentos recibidos.

```javascript
Math.min(2, 6, 3, 7); // 2
Math.min(10, 25, 4);  // 4
```

### `Math.pow(base, exponente)` — Potencia

Eleva un número a otro.

```javascript
Math.pow(2, 4); // 16, porque 2⁴ = 16
Math.pow(3, 2); // 9, porque 3² = 9
```

También podemos usar el operador `**`:

```javascript
2 ** 4; // 16
```

### `Math.sqrt(valor)` — Raíz cuadrada

Devuelve la raíz cuadrada de un número.

```javascript
Math.sqrt(25); // 5
Math.sqrt(9);  // 3
Math.sqrt(2);  // Aproximadamente 1.4142
```

Si el valor es negativo, devuelve `NaN`:

```javascript
Math.sqrt(-4); // NaN
```

## 4. Otros métodos de Math

| Método | Descripción | Ejemplo |
|---|---|---|
| `Math.sin(valor)` | Calcula el seno en radianes | `Math.sin(0)` → `0` |
| `Math.cos(valor)` | Calcula el coseno en radianes | `Math.cos(0)` → `1` |
| `Math.tan(valor)` | Calcula la tangente en radianes | `Math.tan(0)` → `0` |
| `Math.asin(valor)` | Calcula el arcoseno | `Math.asin(0)` → `0` |
| `Math.acos(valor)` | Calcula el arcocoseno | `Math.acos(1)` → `0` |
| `Math.atan(valor)` | Calcula el arcotangente | `Math.atan(0)` → `0` |
| `Math.atan2(y, x)` | Calcula el ángulo según las coordenadas | `Math.atan2(0, 1)` → `0` |
| `Math.exp(valor)` | Calcula E elevado al valor | `Math.exp(1)` → aproximadamente `2.718` |
| `Math.log(valor)` | Calcula el logaritmo natural | `Math.log(1)` → `0` |

**Importante:** las funciones trigonométricas trabajan con radianes, no con grados.

## 5. ¿Qué significa NaN?

`NaN` significa *Not a Number* (no es un número válido para esa operación).

Algunos métodos matemáticos devuelven `NaN` cuando no pueden realizar el cálculo con el valor recibido.

```javascript
Math.sqrt(-9); // NaN
```

Podemos comprobarlo con:

```javascript
let resultado = Math.sqrt(-9);

alert(Number.isNaN(resultado)); // true
```

## 6. Ejemplo completo

```javascript
let numero = -8.7;

alert(Math.abs(numero));   // 8.7
alert(Math.floor(numero)); // -9
alert(Math.ceil(numero));  // -8
alert(Math.round(numero)); // -9

alert(Math.sqrt(64));      // 8
alert(Math.pow(2, 3));     // 8
alert(Math.max(4, 9, 2));  // 9
alert(Math.min(4, 9, 2));  // 2
```

## 7. Resumen para el examen

| Si te piden... | Utiliza... |
|---|---|
| Eliminar el signo negativo | `Math.abs(numero)` |
| Redondear hacia abajo | `Math.floor(numero)` |
| Redondear hacia arriba | `Math.ceil(numero)` |
| Redondear al entero más cercano | `Math.round(numero)` |
| Generar un decimal aleatorio entre 0 y 1, sin incluir el 1 | `Math.random()` |
| Generar un entero aleatorio entre dos extremos incluidos | `Math.floor(Math.random() * (max - min + 1) + min)` |
| Obtener el mayor de varios números | `Math.max(a, b, c)` |
| Obtener el menor de varios números | `Math.min(a, b, c)` |
| Calcular una potencia | `Math.pow(base, exponente)` |
| Calcular una raíz cuadrada | `Math.sqrt(numero)` |
| Obtener el valor de π | `Math.PI` |

**Consejos importantes:**

1. `Math` se utiliza directamente, sin `new`.
2. Los nombres de los métodos distinguen mayúsculas y minúsculas: `Math.floor()` es correcto.
3. `Math.abs(-10)` devuelve `10`, pero `Math.floor(-10.2)` devuelve `-11`.
4. `Math.random()` nunca devuelve `1`.
5. Para incluir el máximo en un aleatorio entero, utiliza `max - min + 1`.
6. Las operaciones que no pueden realizarse correctamente pueden devolver `NaN`.