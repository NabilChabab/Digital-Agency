const form = document.querySelector("#account-form");
const username = document.querySelector("#name");
const email = document.querySelector("#email");
const pass = document.querySelector("#password");
const co_pass = document.querySelector("#confirm");
const msg1 = document.querySelector(".err-msg");


form.addEventListener('submit' , (e)=>{
    validateForm();
    if(isFormValid() == true){
        form.submit();
    }
    else{
        e.preventDefault();
    }
})

function isEmailValid(){
    const input = document.querySelector(".form");
    let res = true;
    input.forEach((border)=>{
        if(border.classList.contains('error')){
            res = false;
        }
    })
    return res;
}

function validateForm() {
    if(username.value.trim() == ''){
        setError(username);
        username.nextElementSibling.textContent = "azert";
    }
}

function setError(element){
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success')
    }
    else{
        parent.classList.add('error')
    }
}

function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error')
    }
    else{
        parent.classList.add('success')
    }
}

