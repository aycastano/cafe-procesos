import {  getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
//import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

import {auth} from './firebase.js'

const user = document.getElementById("User");
const password = document.getElementById ("password");
const form = document.getElementById("form");

form.addEventListener("submit",e=>{
   e.preventDefault()
   console.log("user"+user.value);
   console.log("pass"+password.value);
   
   const email = user.value;
   const password = password.value;


   const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("logueado"+user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
   
   


})







/*function Login(){

    let usuario  = document.getElementById("User").value;
    let password = document.getElementById("password").value;
    let existe = "0";
    let email ="";
    let contraseña = "";
    console.log("password"+password);

}*/




/*function login(){

   let usuario  = document.getElementById("usuario").value;
   let password = document.getElementById("password").value;
   let existe = "0";
   let email ="";
   let contraseña = "";

   console.log("usuario:"+usuario);
   console.log("password"+password);


   db.collection("Usuarios").where("email", "==", usuario)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots

            email = doc.data().email;
            console.log("email"+email);
            contraseña = doc.data().contraseña;
            console.log("contraseña"+contraseña);
            existe="1";
            console.log(existe);

        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
        console.log(existe);
    });
    setTimeout(() => {
     //comparar si contraseña es igual al password.
    if((contraseña == password) && (usuario == email)){
        console.log("entré");
        location.replace('landing.html');

    }else{
        alert("datos incorrectos");
    }
        
    }, 2000);

  

 

} */