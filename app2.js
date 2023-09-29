console.log("CONECTADO");

const formulario = document.getElementById("formulario");
//CAPTURAR VALUE : ID
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
//CAPTURAR VALUE : querySelector
const userName2 = document.querySelector("input[name='userName']");
const userEmail2 = document.querySelector("input[name='userEmail']");

const alertSuccess = document.getElementById("alertSuccess");
const alertName = document.getElementById("alertName");
const alertEmail = document.getElementById("alertEmail");

//EXPRESIONES REGULARES: 
const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/; //Solo letras
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/; //email

const pintarMensajeExito = () => {
    alertSuccess.classList.remove('d-none');
    alertSuccess.textContent = "Mensaje enviado con exito";
};

const pintarMensajeError = (errores) => {
    errores.forEach((item) => {
        item.tipo.classList.remove("d-none");
        item.tipo.textContent = item.msg;
    });
};

formulario.addEventListener('submit', e =>{
    e.preventDefault(); //detiene lo que ahce el navegador por defecto
    alertSuccess.classList.add("d-none");

    const errores = [];

    console.log(userName.value);
    console.log(userEmail.value);

    if(!regUserName.test(userName.value) || !userName.value.trim()) {
        userName.classList.add("is-invalid");

        errores.push({
            tipo: alertName,
            msg: "Formato no válido campo nombre, solo letras",
        });
    } else {
        userName.classList.remove("is-invalid");
        userName.classList.add("is-valid");
        alertName.classList.add("d-none");
    }
    
    if(!regUserEmail.test(userEmail.value) || !userEmail.value.trim()){
        userEmail.classList.add("is-invalid");

        errores.push({
            tipo: alertEmail, 
            msg: "Escriba un correo valido"
        });
    }else{
        userEmail.classList.remove("is-invalid");
        userEmail.classList.add("is-valid");
        alertEmail.classList.add("d-none");
    };

    if(errores.length !==0){
        pintarMensajeError(errores);
        return
    }

    pintarMensajeExito();

});