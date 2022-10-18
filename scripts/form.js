const regExpressions = {
	name: /^[a-zA-ZÀ-ÿ\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    message: /.*\S.*/
}

const form = document.getElementById("form");
const inputs = document.querySelectorAll("#form .form-input");
const fields = {name: false, email: false, message: false};

inputs.forEach((input) => {
    input.addEventListener('keyup', ValidateForm);
    input.addEventListener('blur', ValidateForm);
})

function ValidateField(expression, input, idName) {
    if (expression.test(input.value)) {
        document.querySelector(`#form-${idName} p`).classList.remove("form-input-error-active");
        document.getElementById(`${idName}`).style.border = "3px solid rgb(69, 209, 130)";
        fields[idName] = true;
    } else {
        document.querySelector(`#form-${idName} p`).classList.add("form-input-error-active");
        document.getElementById(`${idName}`).style.border = "3px solid #F66060";
        fields[idName] = false;
    }
}

function ValidateForm(event) {
    //console.log(event.target);
    if (event.target.name == "name") {
        ValidateField(regExpressions.name, event.target, "name");
    }
    else if (event.target.name == "email") {
        ValidateField(regExpressions.email, event.target, "email");
    }
    else if (event.target.name == "message") {
        ValidateField(regExpressions.message, event.target, "message");
    }

    let validName = regExpressions.name.test(document.getElementById("name").value);
    let validEmail = regExpressions.email.test(document.getElementById("email").value);
    let validMessage = regExpressions.message.test(document.getElementById("message").value);
    let allValid = validName && validEmail && validMessage;
    if (allValid) {
        document.getElementById("btn-send").disabled = false;
    }
    else {
        document.getElementById("btn-send").disabled = true;
    }
}

function resetFormStyle() {
    inputs.forEach( (input) => {
        input.style.border = "3px solid transparent";
    });
    document.getElementById("btn-send").disabled = true;
}

function closeAlert() {
    document.querySelector("#form-alert p").innerHTML = "<b>Error:</b> Verificar que se ha rellenado el formulario correctamente.";
    document.getElementById("form-alert").style.backgroundColor = "#F66060";
    document.getElementById("form-alert").style.display = "none";
}

document.querySelector("#form-alert a").addEventListener('click', closeAlert);

// function openAlert() {
//     document.getElementById("form-alert").style.display = "grid";
// }

// function goodAlert() {
//     document.querySelector("#form-alert p").innerHTML = "<b>Enviado:</b> Gracias, se ha enviado tu mensaje a nuestra casilla.";
//     document.getElementById("form-alert").style.backgroundColor = "rgb(69, 209, 130)";
//     document.getElementById("form-alert").style.display = "grid";
// }