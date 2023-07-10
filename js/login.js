function login(){

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

   

 

}