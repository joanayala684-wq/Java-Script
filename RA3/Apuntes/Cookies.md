# CHULETA DE COOKIES EN JAVASCRIPT
**DAW2 — Desarrollo Web en Entorno Cliente — RA3**  
**Tratamiento de cookies**

## 1. ¿Qué son las cookies?

Las cookies son pequeños datos que una página web puede guardar en el navegador del usuario.

Se utilizan, por ejemplo, para recordar:
- El nombre o apodo del usuario.
- El idioma elegido.
- Las preferencias de la página.
- La fecha de la última visita.

En JavaScript, las cookies accesibles desde el navegador se manejan mediante `document.cookie`.

## 2. ¿Qué es document.cookie?

`document.cookie` permite consultar y establecer cookies asociadas al documento actual.

```javascript
console.log(document.cookie);
```

Devuelve una cadena de texto con las cookies accesibles para esa página, con este formato:

```text
nombre=valor; nombre2=valor2
```

Por ejemplo:

```javascript
document.cookie = "usuario=Yolanda";
document.cookie = "idioma=es";

console.log(document.cookie);
```

Podríamos obtener:

```text
usuario=Yolanda; idioma=es
```

**Importante:** `document.cookie` no devuelve un array ni un objeto. Devuelve una cadena de texto.

Además, si una cookie tiene el atributo `HttpOnly`, JavaScript no puede leerla mediante `document.cookie`.

## 3. Crear una cookie

La forma más sencilla es:

```javascript
document.cookie = "usuario=Yolanda";
```

Esto crea una cookie llamada `usuario` con el valor `Yolanda`.

Podemos crear varias cookies:

```javascript
document.cookie = "usuario=Yolanda";
document.cookie = "idioma=es";
document.cookie = "estado=contento";
```

Cada asignación crea o actualiza una cookie concreta. No borra automáticamente las demás.

## 4. Modificar una cookie

Si volvemos a crear una cookie con el mismo nombre y los mismos atributos de identificación —especialmente el mismo `path` y dominio—, modificamos su valor.

```javascript
document.cookie = "usuario=Yolanda";
document.cookie = "usuario=Ana";
```

El valor de `usuario` pasará a ser `Ana`.

**Truco:** para modificar una cookie, utiliza su mismo nombre y establece el nuevo valor.

## 5. Atributos de las cookies

Los atributos permiten controlar cuánto dura una cookie, desde dónde se puede acceder a ella y en qué situaciones se envía.

### expires

Indica la fecha y hora de caducidad. La fecha debe expresarse en formato GMT/UTC.

```javascript
document.cookie =
    "usuario=Yolanda; expires=Fri, 31 Dec 2027 23:59:59 GMT";
```

Si no se indica `expires` ni `max-age`, la cookie normalmente se considera de sesión.

### max-age

Indica cuánto tiempo durará la cookie, en segundos.

```javascript
document.cookie = "usuario=Yolanda; max-age=3600";
```

La cookie durará aproximadamente una hora.

| Tiempo | Segundos |   Milisegundos
|---|---:|
| 1 minuto | `60` |     60000
| 1 hora | `3600` |     3600000
| 1 día | `86400` |
| 1 año de 365 días | `31536000` |

También podemos calcularlo:

```javascript
document.cookie = "usuario=Yolanda; max-age=" + (60 * 60 * 24);
```

### path

Indica en qué rutas del sitio estará disponible la cookie.

```javascript
document.cookie = "usuario=Yolanda; path=/";
```

Con `path=/`, la cookie estará disponible en las distintas rutas del sitio que correspondan a ese dominio.

### secure

Indica que la cookie solo debe enviarse a través de conexiones seguras HTTPS.

```javascript
document.cookie = "tema=oscuro; Secure";
```

En general, no se utiliza para las pruebas con archivos abiertos directamente mediante `file://`.

### SameSite

Controla cuándo se envía una cookie en solicitudes que se originan desde otros sitios. Ayuda a reducir ciertos ataques CSRF.

| Valor | Significado |
|---|---|
| `Strict` | Restringe el envío de la cookie a contextos del mismo sitio. |
| `Lax` | Permite algunos accesos desde otros sitios, especialmente navegaciones normales mediante enlaces. |
| `None` | Permite el envío en contextos entre sitios; requiere `Secure` en navegadores modernos. |

Ejemplo:

```javascript
document.cookie = "tema=oscuro; path=/; SameSite=Strict";
```

### Ejemplo con varios atributos

```javascript
document.cookie =
    "tema=oscuro; max-age=3600; path=/; SameSite=Strict; Secure";
```

En este ejemplo se establece una cookie llamada `tema`, con una duración de una hora, disponible en la ruta `/`, con `SameSite=Strict` y marcada como `Secure`.

**Importante:** no todos los atributos se pueden leer desde `document.cookie`. Por ejemplo, `expires`, `max-age`, `path` y `SameSite` no aparecen como parte del texto que devuelve.

## 6. Leer una cookie con getCookie()

Como `document.cookie` devuelve una cadena, necesitamos localizar el nombre de la cookie y extraer su valor.

Una función como la de tus apuntes sería:

```javascript
function getCookie(c_name) {
    let miCookie = document.cookie;
    let busca = c_name + "=";
    let esta = miCookie.indexOf(busca);

    if (esta != -1) {
        let ini = miCookie.indexOf("=", esta) + 1;
        let fin = miCookie.indexOf(";", esta);
        let valor;

        if (fin != -1) {
            valor = miCookie.substring(ini, fin);
        } else {
            valor = miCookie.substring(ini);
        }

        return valor;
    } else {
        return null;
    }
}
```

### ¿Cómo funciona?

1. Guarda todas las cookies accesibles en `miCookie`.
2. Construye el texto que busca, por ejemplo, `"usuario="`.
3. Utiliza `indexOf()` para localizar ese texto.
4. Si lo encuentra, localiza dónde empieza el valor.
5. Busca el siguiente `;`, que separa las cookies.
6. Si no encuentra `;`, significa que el valor llega hasta el final de la cadena.
7. Devuelve el valor o `null` si no encuentra la cookie.

Ejemplo:

```javascript
document.cookie = "usuario=Yolanda";
document.cookie = "idioma=es";

alert(getCookie("usuario")); // Yolanda
alert(getCookie("idioma"));  // es
alert(getCookie("edad"));    // null, si no existe
```

**Ojo:** la función de los apuntes puede confundir nombres parecidos, por ejemplo `id` e `id2`, porque busca el texto sin comprobar bien el límite del nombre. Una versión más robusta sería:

```javascript
function getCookie(nombre) {
    let cookies = document.cookie.split("; ");

    for (let i = 0; i < cookies.length; i++) {
        let partes = cookies[i].split("=");
        let nombreCookie = partes.shift();
        let valorCookie = partes.join("=");

        if (nombreCookie === nombre) {
            return valorCookie;
        }
    }

    return null;
}
```

Esta segunda versión utiliza `split()` y compara el nombre completo. Para tu examen, aprende primero la versión que os haya enseñado el profesor.

## 7. Crear una función setCookie()

La versión básica permite establecer una cookie:

```javascript
function setCookie(c_name, c_value) {
    document.cookie = c_name + "=" + c_value;
}
```

Ejemplo:

```javascript
setCookie("usuario", "Yolanda");
setCookie("idioma", "es");

alert(getCookie("usuario")); // Yolanda
```

### setCookie() con duración

Podemos ampliar la función para que reciba la duración en segundos.

```javascript
function setCookie(c_name, c_value, caducidad) {
    let fechaCaduca = new Date();

    fechaCaduca.setTime(
        fechaCaduca.getTime() + caducidad * 1000
    );

    document.cookie =
        c_name + "=" + c_value +
        "; expires=" + fechaCaduca.toUTCString() +
        "; path=/";
}
```

Ejemplo:

```javascript
setCookie("usuario", "Yolanda", 3600);
```

La cookie durará una hora.

### ¿Cómo funciona el cálculo?

```javascript
fechaCaduca.getTime() + caducidad * 1000
```

- `getTime()` devuelve la fecha actual en milisegundos.
- `caducidad` está expresada en segundos.
- Multiplicamos por `1000` para convertir los segundos en milisegundos.
- Sumamos ambos valores para obtener la fecha de caducidad.

Después, `toUTCString()` convierte la fecha en un formato válido para el atributo `expires`.

## 8. Borrar una cookie: delCookie()

Para borrar una cookie, se establece una caducidad inmediata o una fecha pasada.

```javascript
function delCookie(c_name) {
    document.cookie =
        c_name + "=; max-age=0; path=/";
}
```

Ejemplo:

```javascript
delCookie("usuario");
```

La cookie se elimina porque su duración se establece en cero.

Otra forma, como en tus apuntes, es utilizar una fecha pasada:

```javascript
document.cookie =
    "usuario=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
```

**Importante:** para borrar una cookie, utiliza el mismo `path` y dominio con los que se creó. Si no coinciden, puede que no se elimine la cookie que querías borrar.

## 9. Ejemplo completo

Este ejemplo crea una cookie con duración de un día, la lee y permite borrarla.

```javascript
function setCookie(nombre, valor, segundos) {
    let fecha = new Date();

    fecha.setTime(fecha.getTime() + segundos * 1000);

    document.cookie =
        nombre + "=" + valor +
        "; expires=" + fecha.toUTCString() +
        "; path=/";
}

function getCookie(nombre) {
    let cookies = document.cookie.split("; ");

    for (let i = 0; i < cookies.length; i++) {
        let partes = cookies[i].split("=");
        let nombreCookie = partes.shift();
        let valorCookie = partes.join("=");

        if (nombreCookie === nombre) {
            return valorCookie;
        }
    }

    return null;
}

function delCookie(nombre) {
    document.cookie =
        nombre + "=; max-age=0; path=/";
}

// Crear una cookie que dure un día
setCookie("usuario", "Yolanda", 86400);

// Leerla
alert(getCookie("usuario"));

// Borrarla
delCookie("usuario");

// Comprobar si existe
alert(getCookie("usuario")); // null
```

## 10. Dónde probar las cookies

Para que las pruebas funcionen correctamente, abre la página mediante un servidor local, por ejemplo con **Live Server** en Visual Studio Code.

También puedes revisar las cookies desde las herramientas de desarrollo del navegador, en la sección de almacenamiento o aplicación. La ubicación exacta depende del navegador.

Las cookies pueden comportarse de forma diferente según el dominio, la ruta, el protocolo y las políticas del navegador. Para las prácticas de clase, utiliza el entorno recomendado por tu profesor.

## 11. Resumen para el examen

| Si te piden... | Utiliza... |
|---|---|
| Crear una cookie | `document.cookie = "usuario=Ana"` |
| Consultar las cookies accesibles | `document.cookie` |
| Modificar una cookie | Establecer otra vez el mismo nombre y los mismos atributos de identificación |
| Dar una duración en segundos | `max-age=3600` |
| Establecer una fecha de caducidad | `expires=fecha` |
| Hacer que esté disponible en todas las rutas del sitio | `path=/` |
| Leer el valor de una cookie | Una función como `getCookie()` |
| Crear una función para guardar cookies | `setCookie()` |
| Borrar una cookie | `max-age=0` o una fecha pasada |
| Convertir una fecha a texto para `expires` | `toUTCString()` |
| Buscar un texto dentro de una cadena | `indexOf()` |
| Separar las cookies por el delimitador | `split("; ")` |

## 12. Errores típicos

1. Pensar que `document.cookie` devuelve un objeto: devuelve una cadena.
2. Pensar que cada asignación a `document.cookie` elimina las demás cookies: normalmente solo crea o actualiza la cookie indicada.
3. Olvidar que `prompt()` devuelve texto si se utiliza para introducir datos que después se guardan en cookies.
4. Olvidar que `max-age` se expresa en segundos.
5. Olvidar multiplicar por `1000` al sumar segundos a `getTime()`.
6. No utilizar el mismo `path` al borrar una cookie.
7. Confundir el valor de una cookie con sus atributos: `path`, `expires` y `SameSite` no forman parte del valor.
8. Creer que JavaScript puede leer una cookie `HttpOnly`: no puede.
9. Olvidar que las cookies pueden no funcionar igual al abrir un archivo directamente con `file://`.
10. No comprobar si una cookie existe antes de utilizar su valor: `getCookie()` puede devolver `null`.