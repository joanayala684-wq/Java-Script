# CHULETA DE DATE EN JAVASCRIPT
**DAW2 — Desarrollo Web en Entorno Cliente — RA3**  
**Objetos predefinidos del lenguaje**

## 1. ¿Qué es el objeto Date?

El objeto `Date` permite trabajar con fechas y horas: obtener la fecha actual, consultar el día, el mes o el año, modificar fechas y calcular diferencias entre ellas.

JavaScript representa internamente las fechas mediante milisegundos transcurridos desde el **1 de enero de 1970 a las 00:00:00 UTC**, conocido como época UNIX.

## 2. Crear objetos Date

### Fecha y hora actuales

```javascript
let fecha = new Date();

alert(fecha);
```

Crea una fecha con la fecha y hora actuales del sistema.

### A partir de milisegundos

```javascript
let fecha = new Date(1398984992375);

alert(fecha);
```

Los milisegundos se cuentan desde el 1 de enero de 1970.

### A partir de una cadena de texto

Es recomendable utilizar el formato `AAAA-MM-DD`.

```javascript
let fecha = new Date("2023-10-18");

alert(fecha);
```

Otros ejemplos:

```javascript
new Date("2024-01-17"); // Formato recomendado
new Date("01/17/2024"); // Formato estadounidense
```

**Importante:** evita formatos ambiguos como `"17/01/2024"`, ya que su interpretación puede variar o producir una fecha inválida.

### A partir de números

```javascript
let fecha = new Date(año, mes, día, hora, minuto, segundo, milisegundo);
```

Los parámetros de hora, minuto, segundo y milisegundo son opcionales.

```javascript
let fecha1 = new Date(1999, 9, 7);
let fecha2 = new Date(2023, 9, 18, 14, 30, 0);

alert(fecha1);
alert(fecha2);
```

**¡Cuidado con el mes!** Los meses empiezan en `0`, no en `1`.

| Número | Mes |
|---:|---|
| `0` | Enero |
| `1` | Febrero |
| `2` | Marzo |
| `3` | Abril |
| `4` | Mayo |
| `5` | Junio |
| `6` | Julio |
| `7` | Agosto |
| `8` | Septiembre |
| `9` | Octubre |
| `10` | Noviembre |
| `11` | Diciembre |

Por ejemplo:

```javascript
new Date(2023, 0, 1);  // 1 de enero de 2023
new Date(2023, 5, 15); // 15 de junio de 2023
new Date(2023, 9, 18); // 18 de octubre de 2023
```

## 3. ¿Qué ocurre con fechas incorrectas?

Observa estos casos:

```javascript
let fecha1 = new Date(2022, 12, 45);
let fecha2 = new Date(2022, 9);
let fecha3 = new Date(2022, 12, "a");

alert(fecha1);
alert(fecha2);
alert(fecha3);
```

- `fecha1`: JavaScript normaliza los valores que se salen de rango. El mes `12` pasa a enero del año siguiente y el día `45` se ajusta al mes correspondiente.
- `fecha2`: como no indicamos el día, se utiliza el día `1`. El mes `9` es octubre.
- `fecha3`: al utilizar `"a"` como día, no se puede construir una fecha válida y se obtiene `Invalid Date`.

Para comprobar si una fecha es válida:

```javascript
let fecha = new Date("fecha incorrecta");

alert(isNaN(fecha)); // true
```

También puedes utilizar:

```javascript
let fecha = new Date("2024-01-17");

alert(Number.isNaN(fecha.getTime())); // false
```

**Truco:** si `isNaN(fecha)` devuelve `true`, la fecha es inválida. Si devuelve `false`, es válida.

## 4. Métodos de lectura: get

Los métodos que empiezan por `get` sirven para consultar partes de una fecha.

| Método | Qué devuelve | Valores posibles |
|---|---|---|
| `getDate()` | Día del mes | 1-31 |
| `getDay()` | Día de la semana | 0-6 |
| `getMonth()` | Mes | 0-11 |
| `getFullYear()` | Año completo | Por ejemplo, 2026 |
| `getHours()` | Hora | 0-23 |
| `getMinutes()` | Minutos | 0-59 |
| `getSeconds()` | Segundos | 0-59 |
| `getMilliseconds()` | Milisegundos | 0-999 |
| `getTime()` | Milisegundos desde la época UNIX | Número |

### Diferencia entre getDate() y getDay()

Esta diferencia es muy importante para el examen.

```javascript
let fecha = new Date(2024, 0, 17);

alert(fecha.getDate()); // 17: día del mes
alert(fecha.getDay());  // 3: miércoles
```

- `getDate()` devuelve el número del día del mes.
- `getDay()` devuelve el día de la semana: `0` domingo, `1` lunes, ..., `6` sábado.

No existe un método estándar `setDay()` para establecer directamente el día de la semana.

### Ejemplo de lectura

```javascript
let fechaHoy = new Date();

alert("Hoy es día " + fechaHoy.getDate());
alert("Estamos en el mes " + fechaHoy.getMonth());
alert("Año: " + fechaHoy.getFullYear());

alert("Son las " + fechaHoy.getHours() +
      " horas y " + fechaHoy.getMinutes() + " minutos");
```

Recuerda que `getMonth()` devuelve el mes empezando por cero. Para mostrar el número de mes habitual, puedes sumar `1`.

```javascript
alert(fechaHoy.getMonth() + 1);
```

### getTime()

Devuelve los milisegundos transcurridos desde la época UNIX.

```javascript
let fecha = new Date();

alert(fecha.getTime());
```

Sirve, por ejemplo, para calcular cuánto tiempo ha pasado entre dos fechas.

```javascript
let inicio = new Date("2024-01-01");
let fin = new Date("2024-01-10");

let diferencia = fin.getTime() - inicio.getTime();

alert(diferencia / (1000 * 60 * 60 * 24)); // 9 días
```

## 5. Métodos de escritura: set

Los métodos que empiezan por `set` sirven para modificar una fecha existente.

| Método | Qué modifica |
|---|---|
| `setDate(día)` | Día del mes |
| `setMonth(mes)` | Mes, de 0 a 11 |
| `setFullYear(año)` | Año |
| `setHours(hora)` | Hora |
| `setMinutes(minutos)` | Minutos |
| `setSeconds(segundos)` | Segundos |
| `setMilliseconds(milisegundos)` | Milisegundos |
| `setTime(milisegundos)` | Fecha completa mediante milisegundos |

### Ejemplo

```javascript
let fecha = new Date();

fecha.setDate(19);
fecha.setMonth(5);
fecha.setFullYear(2023);

alert(fecha);
```

El resultado tendrá el día `19`, el mes de junio y el año `2023`. La hora se conserva si no la modificamos.

**Importante:** `setMonth(5)` significa junio, porque enero es el mes `0`.

### Los métodos set pueden ajustar la fecha automáticamente

```javascript
let fecha = new Date(2024, 0, 31);

fecha.setMonth(1);

alert(fecha);
```

Al intentar pasar del 31 de enero a febrero, JavaScript ajusta automáticamente los días que se salen del rango. Por eso el resultado puede caer en marzo.

## 6. Métodos de conversión

Permiten convertir una fecha en una cadena de texto con distintos formatos.

| Método | Qué devuelve |
|---|---|
| `toDateString()` | Fecha en formato textual |
| `toTimeString()` | Hora y zona horaria |
| `toLocaleDateString()` | Fecha en formato local |
| `toLocaleTimeString()` | Hora en formato local |
| `toISOString()` | Fecha y hora en formato ISO, en UTC |
| `toString()` | Representación textual de la fecha |

Ejemplo:

```javascript
let fecha = new Date(2022, 9, 8, 11, 20, 22);

alert(fecha.toDateString());
alert(fecha.toTimeString());
alert(fecha.toLocaleDateString());
alert(fecha.toLocaleTimeString());
```

El resultado exacto depende del idioma, la zona horaria y la configuración del sistema. Además, el mes `9` corresponde a octubre.

Si quieres un formato local específico, puedes indicar el idioma:

```javascript
let fecha = new Date();

alert(fecha.toLocaleDateString("es-ES"));
alert(fecha.toLocaleTimeString("es-ES"));
```

## 7. Ejemplo completo

Obtener y mostrar la fecha actual:

```javascript
let fecha = new Date();

let dia = fecha.getDate();
let mes = fecha.getMonth() + 1;
let año = fecha.getFullYear();

alert("Fecha: " + dia + "/" + mes + "/" + año);
```

El `+ 1` se utiliza para mostrar el mes como lo escribimos normalmente.

## 8. Resumen para el examen

| Si te piden... | Utiliza... |
|---|---|
| Crear la fecha actual | `new Date()` |
| Crear una fecha concreta | `new Date(año, mes, día)` |
| Obtener el día del mes | `getDate()` |
| Obtener el día de la semana | `getDay()` |
| Obtener el mes | `getMonth()` |
| Obtener el año | `getFullYear()` |
| Obtener la hora | `getHours()` |
| Obtener los minutos | `getMinutes()` |
| Obtener los milisegundos desde 1970 | `getTime()` |
| Cambiar el día | `setDate()` |
| Cambiar el mes | `setMonth()` |
| Cambiar el año | `setFullYear()` |
| Mostrar la fecha local | `toLocaleDateString()` |
| Mostrar la hora local | `toLocaleTimeString()` |
| Comprobar si una fecha es inválida | `isNaN(fecha)` |

## 9. Errores típicos que debes evitar

1. **Los meses empiezan en cero:** enero es `0`, junio es `5` y diciembre es `11`.
2. `getDate()` es el día del mes; `getDay()` es el día de la semana.
3. `getMonth()` devuelve valores entre `0` y `11`.
4. Para mostrar el mes habitual, utiliza `getMonth() + 1`.
5. `getFullYear()` devuelve el año completo.
6. Si no indicas el día al crear una fecha con números, se utiliza el día `1`.
7. JavaScript puede ajustar automáticamente días o meses fuera de rango, en lugar de considerarlos inválidos.
8. Para comprobar una fecha, puedes utilizar `isNaN(fecha)` o `Number.isNaN(fecha.getTime())`.
9. `setMonth()` también utiliza meses de `0` a `11`.
10. `getTime()` devuelve milisegundos, no segundos.

new Date()	Una fecha y hora	Date (objeto)
Inicio.getTime()	Milisegundos desde 1970	Number
fin.getTime()	Milisegundos desde 1970	Number
fin.getTime() - Inicio.getTime()	Diferencia en milisegundos	Number