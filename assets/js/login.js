const form = document.querySelector("#account-form");
const email = document.querySelector("#email");
const pass = document.querySelector("#password");



const test = (event) => {
    
    validateForm();
    if(isFormValid() == true){
        form.submit();
        
    }
    else{
        event.preventDefault();
    }
}



form.addEventListener('submit' , test);


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

const validateForm = () => {
 

    //email
    if(email.value.trim()==''){
        setError(email);
        email.nextElementSibling.textContent = "email can't be empty";
    }
    else if(isEmailValid(email.value)){
        setSuccess(email);
    }
    else{
        setError(email);
        email.nextElementSibling.textContent = "entre a valid email";
    }

    //password
    if(pass.value.trim()==''){
        setError(pass);
        pass.nextElementSibling.textContent = "password can't be empty";
    }
    else if(pass.value.trim().length < 6 || pass.value.trim().length > 25 ){
        setError(pass);
        pass.nextElementSibling.textContent = "password can't be less than 6 characters";
    }
    else{
        setSuccess(pass);
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






