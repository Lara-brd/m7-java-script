
//Ejercicio 1

function exer1(){
    var nombre = ['A', 'n', 'a', ' ', 'M', 'a', 'r', 'i', 'a'];
    for(var i = 0; i<nombre.length;i++){
    console.log(nombre[i]);
    }
    var boton = document.getElementById('btn1');
    efectoBtn(boton);
    
}


//Ejercicio 2

function exer2(){
    var nombre = ['A', 'N', 'A', 7, 'M', 'A', 'R', 'I','A'];
    for(var i = 0; i<nombre.length;i++){
        //numero
        if(typeof nombre[i] == 'number'){
            console.log('Els noms de persones no contenen el número: ' + nombre[i]);
        //vocal
        }else if(nombre[i] == 'A' || nombre[i] == 'E' || nombre[i] == 'I' || nombre[i] == 'O' || nombre[i] == ''){
            console.log('He trobat la VOCAL: ' + nombre[i]);
        //consonant
        }else{
            console.log('He trobat la CONSONANT: ' + nombre[i]);
        }
    }
    var boton = document.getElementById('btn2');
    efectoBtn(boton);
}

//Ejercicio 3

function exer3(){
    const repeated = [];
    var miNombre = ["A", "N", "A", "M", "A", "R", "I", "A"];

    miNombre.map(function(letra){
        repeated[letra] = ((repeated[letra] || 0 )+ 1);
    });

    console.log(repeated);
    var boton = document.getElementById('btn3');
    efectoBtn(boton);
}

//Ejercicio 4

function exer4(){
    const nom = ['A', 'N', 'A'];
    nom.push(' ');
    const cognom = ['S','A','N','Z'];
    const fullName = nom.concat(cognom);
    console.log(fullName);

    var boton = document.getElementById('btn4');
    efectoBtn(boton);
}

//Ejercicio 5

function exer5(){
    var str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email'; 

    var expresion = /[a-z1-9ñ._-]+@[a-z1-9ñ._-]+/gi;

    var correos = str.match(expresion);

    let result = correos.filter((item,index)=>{
        //si el índice no es igual al indexof -> de esta manera identifica un duplicado
        return correos.indexOf(item) === index;
    });

    console.log(result);

    var boton = document.getElementById('btn5');
    efectoBtn(boton);
}



//////efecto botón///////////////////

function efectoBtn(boton){
    boton.style.borderColor = '#ED4C67';
    boton.style.boxShadow = 'none';
}


