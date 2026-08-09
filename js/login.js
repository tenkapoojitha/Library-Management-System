function registerUser(){

    const username=document.getElementById("username").value.trim();

    const password=document.getElementById("password").value.trim();

    if(username=="" || password==""){

        alert("Please fill all fields");

        return;

    }

    localStorage.setItem("username",username);

    localStorage.setItem("password",password);

    alert("Registration Successful");

    window.location="index.html";

}

function login(){

    const username=document.getElementById("username").value.trim();

    const password=document.getElementById("password").value.trim();

    const savedUser=localStorage.getItem("username");

    const savedPass=localStorage.getItem("password");

    if(username===savedUser && password===savedPass){

        alert("Login Successful");

        window.location="dashboard.html";

    }

    else{

        alert("Invalid Username or Password");

    }

}