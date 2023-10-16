var email = document.getElementById("email");
var pass = document.getElementById("pass");
var btn = document.getElementById("btnlog");


btn.addEventListener("click", () =>{

    const emailValue = "nabil.chabab@gmail.com";
    const passValue = "123456";

    // console.log("123456" === pass.value);
    if( emailValue ===  email.value && passValue === pass.value) {
        alert("Welcoime!!");
        window.location.href="../index.html"
    }
    else if(email.value === "" || pass.value === "" ){
        alert("fill all inputs");
    }
    else{
        alert("user not found");
    }
});

