var email = document.getElementById("email");
var pass = document.getElementById("pass");
var btn = document.getElementById("btnlog");

btn.onclick = () => {
    if(email.value == "" || pass.value == ""){
        alert("Please Fill all inputs !");
    }
    else if(email.value == "nabil.chabab@gmail.com" && pass.value == "123456"){
        window.location.replace("https://digital-agency-1.vercel.app/index.html");
    }
    else{
        alert("Ghayerha");
    }
};