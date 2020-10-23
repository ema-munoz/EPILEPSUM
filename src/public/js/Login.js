
$(".toggle").click(function () {
    $(".formulario").animate({
        height:"toggle",
        "padding-top" : "toggle",
        "padding-bottom" : "toggle",
        opacity : "toggle"
    }, "slow");
});


function validar2(){
    /*Obtener datos almacenados*/
    var nombre = sessionStorage.getItem("Nombre");
    var apellido = sessionStorage.getItem("Apellido");
    /*Captura de datos escrito en los inputs*/        
    var nom = document.getElementById("nombreIntxt").value;
    var apel = document.getElementById("apellidoIntxt").value;
if(nombre == nom && apellido == apel)
{
    alert("EPILEPSUM TE DA LA BIENVENIDA");
    location.href ="Página_Principal.html";
}
else
{
    alert("Verifique sus credenciales");
}
}


/*Funcion inicia login*/
$(document).ready(function(){    
$('#boton-login').click(function(){                       
    /*Obtener datos almacenados*/
    var nombre = sessionStorage.getItem("Nombre");
    var passw = sessionStorage.getItem("Pass");
    /*Captura de datos escrito en los inputs*/        
    var nom = document.getElementById("nombreIntxt").value;
    var pass = document.getElementById("passIntxt").value;
if(nombre == nom && passw == pass)
{
    alert("EPILEPSUM TE DA LA BIENVENIDA");
    location.href ="Página_Principal.html";
}
else
{
    alert("Verifique sus credenciales");
}
});   
});



/*Funcion de Capturar, Almacenar datos y Limpiar campos*/
$(document).ready(function(){    
    $('#boton-guardar').click(function(){        
        /*Captura de datos escrito en los inputs*/        
        var nom = document.getElementById("nombretxt").value;
        var pas = document.getElementById("pastxt").value; 
        var email = document.getElementById("emailtxt").value;
        var telefono = document.getElementById("telefonotxt").value;
        var apel = document.getElementById("apellidotxt").value;
        /*Guardando los datos en el LocalStorage*/
        sessionStorage.setItem("Nombre", nom);
        sessionStorage.setItem("Pass", pas);
        sessionStorage.setItem("Email", email);
        sessionStorage.setItem("Telefono", telefono);
        sessionStorage.setItem("Apellido", apel);
        /*Limpiando los campos o inputs*/
        document.getElementById("nombretxt").value = "";
        document.getElementById("pastxt").value = "";
        document.getElementById("emailtxt").value = "";
        document.getElementById("telefonotxt").value = "";
        document.getElementById("apellidotxt").value = "";
    });   
});
    


/*Funcion Cargar y Mostrar datos*/
$(document).ready(function(){    
    $('#boton-cargar').click(function(){                       
        /*Obtener datos almacenados*/
        var nombre = sessionStorage.getItem("Nombre");
        var pass = sessionStorage.getItem("Pass");
        var apellido = sessionStorage.getItem("Apellido");
        var email = sessionStorage.getItem ("Email");
        var telefono = sessionStorage.getItem ("Telefono")
        /*Mostrar datos almacenados txt*/      
        document.getElementById("nombre").innerHTML = nombre;
        document.getElementById("passM").innerHTML = pass;
        document.getElementById("apellido").innerHTML = apellido; 
        document.getElementById("emailM").innerHTML = email;
        document.getElementById ("telefonoM").innerHTML = telefono;
    });   
});