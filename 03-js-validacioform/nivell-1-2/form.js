// VALIDATE FORMS

/****** EMAIL & PASSWORD ***************/ 

const form = document.getElementById('myFormId');

//Función llamada x evento onsubmit

function registerValidate(){
  var acumErrores = 0;
  form.classList.remove('is-invalid');

  //Recojo email en variable
  var inputEmail = document.getElementById('inputEmail');
  var inputPassword = document.forms["myForm"]["inputPassword"];
  
  //si no hay texto  da error en el siguiente div
  if(inputEmail.value == ""){
    inputEmail.classList.add("is-invalid");
    document.getElementById("errorEmail").textContent = "Email obligatorio";
    acumErrores ++;
  //si la validacion del email retorna false
  }else if(!validar_email(inputEmail.value)){
    inputEmail.classList.add("is-invalid");
    document.getElementById("errorEmail").textContent = "Incorrect email";
    acumErrores ++;
  }
  
  if(inputPassword.value == ""){
    inputPassword.classList.add("is-invalid");
    document.getElementById("errorPassword").textContent = "Contraseña obligatoria";
    acumErrores ++;
  }


  
  //Si hay algún error retornará falso
  if (acumErrores > 0){
    return false;
  }else{
  return true;
  }

}




/**********SEARCH********************/

const form2 = document.getElementById("myFormId2");

function registerValidate2(){
  var acumErrores = 0;
  form2.classList.remove('is-invalid');

  var inputSearch = document.getElementById("inputSearch");

  
  if(inputSearch.value == ""){
    inputSearch.classList.add("is-invalid");
    document.getElementById("errorSearch").textContent = "Introduce búsqueda";
    acumErrores ++;
  }else if(!validar_search(inputSearch.value)){
    inputSearch.classList.add("is-invalid");
    document.getElementById("errorSearch").textContent = "Búsqueda incorrecta";
    acumErrores ++;
  }


  //Si hay algún error retornará falso
  if (acumErrores > 0){
    return false;
  }else{
  return true;
  }

}




/******Register*****************/

const form3 = document.getElementById('myFormId3');

function registerValidate3(){
  var acumErrores = 0;
  form3.classList.remove('is-invalid');

  var inputName = document.getElementById("inputName");
  var inputEmail2 = document.getElementById("inputEmail2");
  var inputPassword2 = document.getElementById("inputPassword2");
  var inputPassword3 = document.getElementById("inputPassword3");
  var inputMobile = document.getElementById("inputMobile");
  var inputProvince = document.getElementById("inputProvince");


  if(inputName.value == ""){
    inputName.classList.add("is-invalid");
    document.getElementById("errorName").textContent = "Enter name";
    acumErrores ++;
  }else if(!validar_name(inputName.value)){
    inputName.classList.add("is-invalid");
    document.getElementById("errorName").textContent = "Enter name and surname please";
    acumErrores ++;
  }


  if(inputEmail2.value == ""){
    inputEmail2.classList.add("is-invalid");
    document.getElementById("errorEmail2").textContent = "Enter email";
    acumErrores ++;
  }else if(!validar_email(inputEmail2.value)){
    inputEmail2.classList.add("is-invalid");
    document.getElementById("errorEmail2").textContent = "Invalid email";
    acumErrores ++;
  } 

  if(inputPassword2.value == ""){
    inputPassword2.classList.add("is-invalid");
    document.getElementById("errorPassword2").textContent = "Enter password";
    acumErrores ++;
  }else if(!validar_password(inputPassword2.value)){
    inputPassword2.classList.add("is-invalid");
    document.getElementById("errorPassword2").textContent = "Invalid password";
    acumErrores ++;
  }

  if(inputPassword3.value == ""){
    inputPassword3.classList.add("is-invalid");
    document.getElementById("errorPassword3").textContent = "Enter password confirmation";
    acumErrores ++;
  }else if(inputPassword2.value != inputPassword3.value){
    inputPassword3.classList.add("is-invalid");
    document.getElementById("errorPassword3").textContent = "Enter the same password";
    acumErrores ++;
  }else if(inputPassword2.value == inputPassword3.value){
    inputPassword3.classList.remove("is-invalid");
    document.getElementById("errorPassword3").textContent = "";
  }
  

  if(inputMobile.value == ""){
    inputMobile.classList.add("is-invalid");
    document.getElementById("errorMobile").textContent = "Enter mobile";
    acumErrores ++;
  }else if(!validar_mobile(inputMobile.value)){
    inputMobile.classList.add("is-invalid");
    document.getElementById("errorMobile").textContent = "Invalid mobile";
    acumErrores ++;
  }else if(validar_mobile(inputMobile.value)){
    document.getElementById("errorMobile").textContent = "";
  }

  if(inputProvince.value == "") {
		inputProvince.classList.add("is-invalid");
		document.getElementById("errorProvince").textContent = "Province is mandatory";
		acumErrores ++;
	}

  //Si hay algún error retornará falso
  if (acumErrores > 0){
    return false;
  }else{
    return true;
    }
} 


//VALIDACIONES

function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}

function validar_password(password){
  //expresion lookahead para situarlo en cualquier posición
  var regex = /^(?=(.*[0-9]))(?=(.*[A-Z])).{8,}$/
  return regex.test(password) ? true : false;
}

function validar_search(search){
  //Tres o más
  var regex = /[a-zA-Z]{3,}/g;
  return regex.test(search) ? true : false;
}

function validar_name(name){
  var regex = /[a-zA-Z]+\s[a-zA-Z]+/;
  return regex.test(name) ? true : false;
}

function validar_mobile(mobile){
  var regex = /(\d{3})(\s\d{2}){3}/;
  return regex.test(mobile) ? true : false;
}



//EVENT BLUR

form.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);


form2.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);


form3.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);








