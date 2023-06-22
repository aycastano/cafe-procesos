document.getElementById('guardarmuestraproducto').addEventListener('submit',guardarmuestraproducto);

    let nombre;            
    let apellido;        
    let telefono;       
    let direccion;       
    let departamento  ;  
    let municipio;       
    let finca ;          
    let codigointerno ;   
    let codigoexterno;  
    let codigoproductor  ;
    let fecha   ;        
    let codigomuestra ;  
    let proceso ;         
    let humedad ;         
    let origen ;          
    let observaciones   ; 
    let tipoanalisis;
    let presentacionmuestra;


function guardarmuestraproducto(e){
 e.preventDefault();
    console.log("estoy dentro");
    nombre           = document.getElementById("nombre").value;
    console.log("nombre"+nombre);
    apellido         = document.getElementById("apellido").value;
    telefono         = document.getElementById("telefono").value;
    direccion        = document.getElementById("direccion").value;
    departamento     = document.getElementById("departamento").value;
    municipio        = document.getElementById("municipio").value;
    finca            = document.getElementById("finca").value;
    codigointerno    = document.getElementById("codigointerno").value;
    codigoexterno    = document.getElementById("codigoexterno").value;
    codigoproductor  = document.getElementById("codigoproductor").value;
    fecha            = document.getElementById("fecha").value;
    codigomuestra    = document.getElementById("codigomuestra").value;
    proceso          = document.getElementById("proceso").value;
    humedad          = document.getElementById("humedad").value;
    origen           = document.getElementById("origen").value;
    observaciones    = document.getElementById("observaciones").value;
    tipoanalisis     = document.getElementById("tipoanalisis").value;
    presentacionmuestra = document.getElementById("presentacionmuestra").value;

    console.log("tipo: "+tipoanalisis);
    console.log("presentacionmuestra: "+presentacionmuestra);

   db.collection("Muestrasproducto").add({
        
        tipoanalisis : tipoanalisis,
        presentacionmuestra : presentacionmuestra,
        nombre   :nombre,       
        apellido : apellido,  
        telefono :telefono,
        direccion:direccion,
        departamento:departamento,
        municipio : municipio,     
        finca : finca,
        codigointerno : codigointerno,
        codigoexterno : codigoexterno,
        codigoproductor : codigoproductor,
        fecha: fecha,       
        codigomuestra  : codigomuestra,
        proceso   : proceso,     
        humedad   : humedad,     
        origen    : origen,     
        observaciones  
    })
    .then((docRef) => {
        alert("Registros exitoso");
    })
    .catch((error) => {
        alert("Registros no exitoso");
    });

}
