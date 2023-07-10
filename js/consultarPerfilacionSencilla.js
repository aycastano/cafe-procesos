/*document.getElementById('btnconsultar').addEventListener('submit',consultar);*/


function PerfilacionSencilla(){
    let muestrasproducto= [];
    let longitud;
    let dataTable;


    dataSet=[];
    dataTable=$("#tabla_perfilacion_sencilla").DataTable({
        pageLength : 10,
        lengthMenu :[[10,15,20,-1],[10,15,20,'Todos']],
        data:dataSet,
        columnDefs:[
            {
                targets:[0],
                visible:true,
            },
            {
                targets:-1,
                defaultContent:"<img src ='resources/icon_ver.png' class='icon_ver' onclick='verMuestra()'>"
            }
        ]
    });
 
    //function consultar(){
    db.collection("Muestrasproducto").get().then((querySnapshot) => {
        document.getElementById("listamuestrasproducto").innerHTML = '';
            querySnapshot.forEach((doc) => {  
                console.log(doc.data());
                    muestrasproducto.push(doc.data().tipoanalisis);
                    muestrasproducto.push(doc.data().nombre);  
                    muestrasproducto.push(doc.data().apellido);  
                    muestrasproducto.push(doc.data().codigoproductor);  
                    muestrasproducto.push(doc.data().fecha);  
                    muestrasproducto.push(doc.data().proceso);  
                    muestrasproducto.push(doc.data().humedad);
                    muestrasproducto.push(doc.data().origen); 
                    muestrasproducto.push(doc.data().observaciones);

                    if(doc.data().tipoanalisis == "3"){

                        dataSet =[doc.data().tipoanalisis,doc.data().nombre,doc.data().apellido,doc.data().codigoproductor,
                            doc.data().fecha,doc.data().proceso,doc.data().humedad,doc.data().origen,doc.data().observaciones];
                        console.log("dataSet:"+dataSet);
                        dataTable.rows.add([dataSet]).draw();

                    }
                });
        });
        
        setTimeout(() => {
        longitud = muestrasproducto.length;
        console.log("longitud:"+longitud)
        }, 3000);
        muestrasproducto.forEach((cada ,i,muestrasproducto)=>{
            console.log("tipo: "+muestrasproducto[i]);
        })
    //}
}



