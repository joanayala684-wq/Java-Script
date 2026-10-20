let numeroSecreto;
let maxDias;

function getCookie(c_name) {
    let miCookie = document.cookie;
    let busca = c_name + "=";
    let esta = miCookie.indexOf(busca);
    if (esta != -1) {
        ini = miCookie.indexOf("=", esta) + 1;
        fin = miCookie.indexOf(";", esta);
        if (fin != -1)
            valor = miCookie.substr(ini, fin - ini);
        else
            valor = miCookie.substr(ini);
        return valor;
    }
    else
        return null;
}

function setCookie(c_name, c_value, caducidad) {
    if (caducidad != null) {
        let d = new Date();
        d.setTime(d.getTime() + (caducidad));
        let expires = "expires=" + d.toGMTString();
        document.cookie = c_name + "=" + c_value + ";" + expires;
    }
    else {
        document.cookie = c_name + "=" + c_value;
    }
}

function preguntar() {
    let windows = getCookie("ventanas");
    if (windows == null) {
        permisos = confirm("Quieres que te mostremos la ventanas?");
        if (permisos == true) {
            setCookie("ventanas", "yes", 86400000);
        } else {
            setCookie("ventanas", "no", null);
        }
    }
}

function validar() {
    let mesTxt = document.getElementById("mes").value;

    if (mesTxt == "") {
        document.getElementById("errores").innerHTML =
            "<ul>" +
            "<li>Debes rellenar el campo Mes</li>" +
            "</ul>";
        document.getElementById("mes").focus();
        return;
    }

    let mes = Number(mesTxt);

    if (isNaN(mes)) {
        document.getElementById("errores").innerHTML =
            "<ul>" +
            "<li>DEBES RELLENAR CON NUMEROS</li>" +
            "</ul>";
        document.getElementById("mes").focus();
        return;
    }

    if (!Number.isInteger(mes)) {
        document.getElementById("errores").innerHTML =
            "<ul>" +
            "<li>EL MES DEBE SER UN NUMERO ENTERO</li>" +
            "</ul>";
        document.getElementById("mes").focus();
        return;
    }

    if (mes < 1 || mes > 12) {
        document.getElementById("errores").innerHTML =
            "<ul>" +
            "<li>NUMERO DE MES INVALIDO</li>" +
            "</ul>";
        document.getElementById("mes").focus();
        return;
    }

    let añoTxt = document.getElementById("año").value;

    if (añoTxt == "") {
        document.getElementById("errores").innerHTML =
            "<ul>" +
            "<li>DEBES RELLENAR EL CAMPO AÑO</li>" +
            "</ul>";
        document.getElementById("año").focus();
        return;
    }

    let año = Number(añoTxt);

    if (isNaN(año)) {
        document.getElementById("errores").innerHTML =
            "<ul>" +
            "<li>DEBES RELLENAR CON NUMEROS</li>" +
            "</ul>";
        document.getElementById("año").focus();
        return;
    }

    if (!Number.isInteger(año)) {
        document.getElementById("errores").innerHTML =
            "<ul>" +
            "<li>EL AÑO DEBE SER UN NUMERO ENTERO</li>" +
            "</ul>";
        document.getElementById("año").focus();
        return;
    }

    let fecha = new Date();

    let añoActual = fecha.getFullYear();

    if (año < añoActual) {
        document.getElementById("errores").innerHTML =
            "<ul>" +
            "<li>EL AÑO DEBE SER SUPERIOR AL DEL SISTEMA</li>" +
            "</ul>";
        document.getElementById("año").focus();
        return;
    }

    let fechaInicio = new Date(año, mes - 1, 1);

    let fechaFin = new Date(año, mes, 0);

    let dias = ["Domingo", "lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

    let diaInicio = dias[fechaInicio.getDay()];
    let diaFin = dias[fechaFin.getDay()];
    maxDias = fechaFin.getDate();

    if (getCookie("ventanas") == "yes") {
        let web = window.open("", "Fechas", "width=400,height=200,left=700,top=100");
        web.document.write("<p>DATOS SELECCIONADOS DEL MES</p>");
        web.document.write("<p>Comienza " + fechaInicio + diaInicio + "</p>");
        web.document.write("<p>Acaba el " + fechaFin + diaFin + "</p>");
        web.document.write('<input type="button" value="Cerrar" onclick="window.close()">');
    } else {
        alert("DATOS SELECCIONADOS DEL MES\n" +
            "Comienza el día " + fechaInicio.getDate() + ": " + diaInicio + "\n" +
            "Acaba el día " + fechaFin.getDate() + ": " + diaFin);
    }

    document.getElementById("juego").style.display = "block";

}

function ir() {
    if (getCookie("ventanas") == "yes") {
        let web = window.open("https://www.canva.com/es_es/calendarios/plantillas/", "CANVA", "width=400,height=200,left=700,top=100");
    } else {
        window.location.href = "https://www.canva.com/es_es/calendarios/plantillas/";
    }
}

let temporizador;

function jugar() {
    numeroSecreto = Math.floor(Math.random() * maxDias) + 1;
    temporizador = setInterval(contar, 3000);
}

function comprobar() {
    let num = Number(document.getElementById("numero").value);
    let premio = document.getElementById("premio");
    if (numeroSecreto == num) {
        alert("Has ganado " + premio.textContent + " euros");
        clearInterval(temporizador);
    }
}

function contar() {
    let premio = document.getElementById("premio");
    let cantidad = Number(premio.textContent);
    if (cantidad > 0) {
        let resultado = cantidad - 1;
        premio.textContent = resultado;
        //document.getElementById("premio").innerHTML = resultado ;
        if (resultado == 0) {
            clearInterval(temporizador);
        }
    }
}