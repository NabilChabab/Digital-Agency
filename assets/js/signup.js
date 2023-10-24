const form = document.querySelector("#account-form");
const username = document.querySelector("#name");
const email = document.querySelector("#email");
const pass = document.querySelector("#password");
const co_pass = document.querySelector("#confirm");








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
        setError(username,"name can't be empty");
        console.log("name can't be empty");
    }
    else if(username.value.trim().length < 5 || username.value.trim().length > 15 ){
        setError(username,"name must be max than 5 and less than 15");
    }
    else{
        setSuccess(username);
        save();
    }

    //email
    if(email.value.trim()==''){
        setError(email,"email can't be empty");
        console.log("email can't be empty");
    }
    else if(isEmailValid(email.value)){
        setSuccess(email);
    }
    else{
        setError(email,"choose a valid email");
    }

    //password
    if(pass.value.trim()==''){
        setError(pass,"password can't be empty");
        console.log("password can't be empty");
    }
    else if(pass.value.trim().length < 6 || pass.value.trim().length > 25 ){
        setError(pass,"name must be max than 5 and less than 15");
    }
    else{
        setSuccess(pass);
    }

    // //co-password

    if(co_pass.value.trim()==''){
        setError(co_pass,"can't be empty");
        console.log("confirm password can't be empty");
    }
    else if(co_pass.value !== pass.value){
        setError(co_pass,"confirm password not equal the password");
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



