function onSubmitA() {

    var nombre = jQuery("input[name='nombre1']").val();
    var tel = jQuery("input[name='telefono1']").val();

    var expresionregular1=/^[0-9]{9}$/gm;//<--- validar número
    var expresionregular2=/\s/;//<--- validar sin espacios en blanco

    if(!jQuery("input[name='inputAviso1']").prop('checked')){
        alert('Tienes que leer el aviso legal');
        enviar = false;
        event.preventDefault();
    }else{
        if(!jQuery("input[name='inputPolitica1']").prop('checked')){
            alert('Tienes que leer la política de privacidad');
            enviar = false;
            event.preventDefault();
        }
        else if(nombre == ''){
            alert('El campo nombre esta vacío');
            enviar = false;
            event.preventDefault();
        }else if(tel == ''){
            alert('El campo teléfono esta vacío o no es válido 1');
            enviar = false;
            event.preventDefault();
		}else if(expresionregular2.test(tel)){
            alert('El campo teléfono esta vacío o no es válido 2');
            enviar = false;
            event.preventDefault();
        }else if(!expresionregular1.test(tel)){
            alert('El teléfono debe tener nueve (9) dígitos. ejemplo: 666123456');
            enviar = false;
            event.preventDefault();
        }else{
            alert("Vamos a enviar tus datos. Espera un momento por favor");
            enviar = true;
            event.preventDefault();
        }
    }

    if(enviar) {
        document.getElementById("homeserve1").submit();
    }
}

function onSubmitB() {

    var nombre = jQuery("input[name='nombre2']").val();
    var tel = jQuery("input[name='telefono2']").val();

    var expresionregular1=/^[0-9]{9}$/gm;//<--- validar número
    var expresionregular2=/\s/;//<--- validar sin espacios en blanco

    if(!jQuery("input[name='inputAviso2']").prop('checked')){
        alert('Tienes que leer el aviso legal');
        enviar = false;
        event.preventDefault();
    }else{
        if(!jQuery("input[name='inputPolitica2']").prop('checked')){
            alert('Tienes que leer la política de privacidad');
            enviar = false;
            event.preventDefault();
        }
        else if(nombre == ''){
            alert('El campo nombre esta vacío');
            enviar = false;
            event.preventDefault();
        }else if(tel == ''){
            alert('El campo teléfono esta vacío o no es válido 1');
            enviar = false;
            event.preventDefault();
        }else if(expresionregular2.test(tel)){
            alert('El campo teléfono esta vacío o no es válido 2');
            enviar = false;
            event.preventDefault();
        }else if(!expresionregular1.test(tel)){
            alert('El teléfono debe tener nueve (9) dígitos. ejemplo: 666123456');
            enviar = false;
            event.preventDefault();
        }else{
            enviar = true;
            event.preventDefault();
        }
    }

    if(enviar) {
        document.getElementById("homeserve2").submit();
    }
}