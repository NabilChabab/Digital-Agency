const form = document.querySelector("#account-form");
const username = document.querySelector("#name");
const email = document.querySelector("#email");
const pass = document.querySelector("#password");
const co_pass = document.querySelector("#confirm");
const msg1 = document.querySelector(".err-msg");


form.addEventListener('submit' , (event) =>{
    
    validateForm();
    if(isFormValid() == true){
        form.submit();
        
    }
    else{
        event.preventDefault();
    }
});


function isFormValid(){
    const input = form.querySelectorAll(".form");
    let res = true;
    input.forEach((container)=>{
        if(container.classList.contains('error')){
            res = false;
        }
    });

    return res;
}

function validateForm() {
    //username
    if(username.value.trim()==''){
        setError(username);
    }
    else if(username.value.trim().length < 5 || username.value.trim().length > 15 ){
        setError(username);
    }
    else{
        setSuccess(username);
        save();
    }

    //email
    if(email.value.trim()==''){
        setError(email);
    }
    else if(isEmailValid(email.value)){
        setSuccess(email);
    }
    else{
        setError(email);
    }

    //password
    if(pass.value.trim()==''){
        setError(pass);
    }
    else if(pass.value.trim().length < 6 || pass.value.trim().length > 25 ){
        setError(pass);
    }
    else{
        setSuccess(pass);
    }

    // //co-password

    if(co_pass.value.trim()==''){
        setError(co_pass);
    }
    else if(co_pass.value !== pass.value){
        setError(co_pass);
    }
    else{
        setSuccess(co_pass);
    }
}

function setError(element){

    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');


}

function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}

function isEmailValid(email){
    const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return reg.test(email);
}



function save(){
    localStorage.setItem("data",username.value);
}



