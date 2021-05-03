// toggleSlider() {
//     //
//      let botonViaje = document.getElementById("ocultar")
//       if(botonViaje != null)
//       {
//             botonViaje.style.display="block";
//       }

//         //funcion que se encarga de hacer una codificación  SHA 256
//         async function encriptar_cadena(strCadena)
//         {
//             const msgUint8 = new TextEncoder().encode(strCadena);
//             const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
//             const hashArray = Array.from(new Uint8Array(hashBuffer));
//             const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
//             return hashHex;
//         }


//         //Funcion que se encarga de transformar una FECHA en formato
//         // yyyy-MM--dd
//         function formato_fecha_yyyymmdd(date)
//         {
//             var d = new Date(date),
//                 month = '' + (d.getMonth() + 1),
//                 day = '' + d.getDate(),
//                 year = d.getFullYear();

//             if (month.length < 2)
//                 month = '0' + month;
//             if (day.length < 2)
//                 day = '0' + day;

//             return [year, month, day].join('-');
//         }

//         //Invocamos la funcion de encriptación
//         // Esto es para la forma asincrona
//         function startEncriptacion(strFecha) {
//             return encriptar_cadena(strFecha);
//         }

//       //  console.log("hola")
//         var boton = document.getElementById('json_post');
//         boton.addEventListener('click', function () {

//             //Agregamos una funcion que se ejecuta asincrono
//             // bueno en realidad es porque la funcion SHA256 requiere una invocacion asincrona, asi que
//             // todo debe ser invocado asincronamente.
//             (async () => {
//                 var strCadenaEncriptada = '';
//                 var strURL = 'https://travel.sae.siiab.app/API/V1/Actions/Cancel_Travel/'
//                 var ahoraGMT0 = new Date(new Date()).toISOString();
//                 //Obtenemos la fecha hora en el formato
//                 let strFecha = formato_fecha_yyyymmdd(ahoraGMT0)

//                 //Invocamos la encriptacion de la cadena
//                 strCadenaEncriptada = await startEncriptacion(strFecha);

//                 //La mandamos pintar.
//                 console.log(strCadenaEncriptada);

//                  //Autobus a eliminar
//                 var data = JSON.stringify({"AUTOBUS":window.$selectBus});

//                 var config = {
//                   method: 'post',
//                   url: strURL,
//                   headers: {
//                       'Authorization': `Bearer ` + strCadenaEncriptada,
//                       'Content-Type': 'application/json'
//                   },
//                   data : data
//                 };

//                 //Mandamos invocar el AXIOS el POST
//                 axios(config)


//                 .then(function(res) {
//                     if (res.status == 200) {
//                         //Lo que hacemos cuando la respuesta es correcta
//                         console.log('La petición fue enviada. Respuesta: ' + res.data);
//                     }
//                 })
//                 .catch(function (err) {
//                     //Lo que hacemos cuando falla
//                     console.log(err);
//                 })
//                 .then(function () {
//                     //Lo que pasa despues de ejecutar las lineas sin importar el resultado
//                    // loading.style.display = 'none';
//                 });


//              })();
//         });

//          alert('Se ha quitado el viaje');

// }