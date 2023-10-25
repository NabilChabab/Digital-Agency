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

    const namedata = localStorage.getItem("data");
    const emaildata = localStorage.getItem("dataemail");
    const passdata = localStorage.getItem("datapass");
    console.log(namedata);
    console.log(emaildata);
    console.log(passdata);
    //email
    if(email.value.trim()==''){
        setError(email);
        email.nextElementSibling.textContent = "email can't be empty";
    }
    else if(email.value !== emaildata){
        setError(email);
        email.nextElementSibling.textContent = "email not found";
    }
    else{
        setSuccess(email);
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
    else if(pass.value !== passdata){
        setError(pass);
        pass.nextElementSibling.textContent = "password not correct";
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






