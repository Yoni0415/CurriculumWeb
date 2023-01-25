
//FUNCION QUE TRAE EL JSON QUE SAQUE DE LA PAGINA QUE ME PASARON
//EN EL HAY 75 REGISTROS Y USE EL REGISTRO 5 DE EJEMPLO PARA MIS DATOS PERSONALES
//TAMBIEN EN EL REG 5 LE AGREGUE ALGUNOS DATOS
//NO SE SI ESTARA BIEN PERO USANDO GOOGLE LLEGUE A ESTE ALGORITMO QUE INSERTA ETIQUETAS 
// Y LO INTEGRO CON BOOTSTRAP, DE ESTA FORMA SE PODRIA PONER UNA BOTON Y HACERLO DINAMICO
//COMO UN RANDOM QUE SELECCIONE REGISTROS Y ASI NO DEPENDER DE DATOS FIJOS

function cargarDatosPersonales(){
    fetch('datos.json')
    .then(respuesta => respuesta.json())//indicamos el formato que muestra la info
  
    .then(datos => { 
        //tomo los datos del registro 5 del json al cual le agregué algunos datos mas
      
        const jsonmisDatos = datos[5];

        const misDatos = [];

        var tituloEncabezado = document.getElementById('tituloEncabezado');
        tituloEncabezado.innerHTML='Datos Personales';
        tituloEncabezado.style= "color: #f1ed16 ";
      
        for(var x in jsonmisDatos) {
            misDatos.push([x,jsonmisDatos[x]]);
        }

        

        const titulos = ["Nombre: ","Apellido: ","Correo: ","Dirección: ","Fecha Nacimiento: ","Edad: ","Sexo: "];

        for(var i=0; i <= 5; i++){
        
            var capa = document.getElementById("datosLista");
            var etiqueta = document.createElement('label');
            etiqueta.className = "list-group-item";   
            etiqueta.textContent= titulos[i];
            etiqueta.style = "color: #3137de;font-weight: bolder;background-color: #8fc6ec; ";
            capa.appendChild(etiqueta);

           
            var capa1 = document.getElementById("datosLista");
            var li = document.createElement('li'); 
            li.className = "list-group-item";   
            li.textContent= misDatos[i][1];
            li.style="background-color: #B4D9EE;"

            
            capa1.appendChild(li);

        }
        
})

}



function cargarDatosExperiencia(){
    fetch('datos.json')
    .then(respuesta => respuesta.json())//indicamos el formato que muestra la info
  
    .then(datos => { 
        //tomo los datos del registro 5 del json al cual le agregué algunos datos mas
      

    
        const jsonmisDatos = datos[5];

        const misDatos = [];

        var tituloEncabezado = document.getElementById('tituloEncabezado');
        tituloEncabezado.innerHTML='Experiencia';
        tituloEncabezado.style= "color: #34f034 ";

        for(var x in jsonmisDatos) {
            misDatos.push([x,jsonmisDatos[x]]);
        }

       

        const titulos = ["Estudios: ","Carrera: ","Lugar: ","Experiencia: "];
        
        
       
        

        for(var i=7; i <= 10; i++){
            indiceTitulo=i;
            var capa = document.getElementById("datosLista");
            var etiqueta = document.createElement('label');
            etiqueta.className = "list-group-item";   
            etiqueta.textContent= titulos[indiceTitulo-7];
            etiqueta.style = "color: #3137de;font-weight: bolder;background-color: #8fc6ec; ";
            capa.appendChild(etiqueta);

           
            var capa1 = document.getElementById("datosLista");
            var li = document.createElement('li'); 
            li.className = "list-group-item";   
            li.textContent= misDatos[i][1];
            li.style="background-color: #B4D9EE;"
            
            capa1.appendChild(li);
            
        }
        
        
})

}


function cargarDatosHabilidades(){
    fetch('datos.json')
    .then(respuesta => respuesta.json())//indicamos el formato que muestra la info
  
    .then(datos => { 
        //tomo los datos del registro 5 del json al cual le agregué algunos datos mas
      
    
        const jsonmisDatos = datos[5];

        const misDatos = [];

        var tituloEncabezado = document.getElementById('tituloEncabezado');
        tituloEncabezado.innerHTML='Habilidades';
        tituloEncabezado.style= "color: #a70483 ";
        for(var x in jsonmisDatos) {
            misDatos.push([x,jsonmisDatos[x]]);
        }

        

        const titulos = ["Lenguajes: ","Proyectos: "];
        
        
        for(var i=11; i <= 12; i++){
            indiceTitulo=i;
            var capa = document.getElementById("datosLista");
            var etiqueta = document.createElement('label');
            etiqueta.className = "list-group-item";   
            etiqueta.textContent= titulos[indiceTitulo-11];
            etiqueta.style = "color: #3137de;font-weight: bolder;background-color: #8fc6ec; ";
            capa.appendChild(etiqueta);

           
            var capa1 = document.getElementById("datosLista");
            var li = document.createElement('li'); 
            li.className = "list-group-item";   
            li.textContent= misDatos[i][1];
            li.style="background-color: #B4D9EE;"  
            
            capa1.appendChild(li);

        }
        
})

}

function borrarElemento(){
    document.getElementById("datosLista").innerHTML = '';
    

}







 

//al presionar en el menu datos personales se ejecuta dicha funcion
document.getElementById('info').onclick = function(){
    borrarElemento()
    cargarDatosPersonales();
}

//al presionar en el menu datos experiencia se ejecuta dicha funcion
document.getElementById('experiencia').onclick = function(){
    borrarElemento()
    cargarDatosExperiencia();
}


//al presionar en el menu datos habilidades se ejecuta dicha funcion
document.getElementById('habilidades').onclick = function(){
    borrarElemento()
    cargarDatosHabilidades();
}



 







