// Función que suma o resta días a la fecha indicada
 
sumaFecha = function(d, fecha){
    var Fecha = new Date();
    var sFecha = fecha || (Fecha.getDate() + "/" + (Fecha.getMonth() +1) + "/" + Fecha.getFullYear());
    var sep = sFecha.indexOf('/') != -1 ? '/' : '-'; 
    var aFecha = sFecha.split(sep);
    var fecha = aFecha[2]+'/'+aFecha[1]+'/'+aFecha[0];
    fecha= new Date(fecha);
    fecha.setDate(fecha.getDate()+parseInt(d));
    var anno=fecha.getFullYear();
    var mes= fecha.getMonth()+1;
    var dia= fecha.getDate();
    mes = (mes < 10) ? ("0" + mes) : mes;
    dia = (dia < 10) ? ("0" + dia) : dia;
    var fechaFinal = dia+sep+mes+sep+anno;
    return (fechaFinal);
}

function restaFechas(f1,f2,destino){  
     //DD/MM/YYYY
    var fechaInicio=document.getElementById(f1).value;
    var fechaFinal=document.getElementById(f2).value;
    if (fechaInicio!="" && fechaFinal!=""){
      var aFecha2 = fechaInicio.split('/'); 
      var aFecha1 = fechaFinal.split('/'); 
      var fFecha1 = Date.UTC(aFecha1[2],aFecha1[1]-1,aFecha1[0]); 
      var fFecha2 = Date.UTC(aFecha2[2],aFecha2[1]-1,aFecha2[0]); 
      var dif = fFecha2 - fFecha1;
      var dias = Math.floor(dif / (1000 * 60 * 60 * 24)); 
      //var dias = Math.floor(dif /86400000);
      document.getElementById(destino).value=dias;
      //return dias;
    }
}
function changeCase(frmObj) {
    var index;
    var tmpStr;
    var tmpChar;
    var preString;
    var postString;
    var strlen;
    tmpStr = frmObj.value.toLowerCase();
    strLen = tmpStr.length;
    if (strLen > 0)  {
        for (index = 0; index < strLen; index++)  {
            if (index == 0)  {
                tmpChar = tmpStr.substring(0,1).toUpperCase();
                postString = tmpStr.substring(1,strLen);
                tmpStr = tmpChar + postString;
            }else{
                tmpChar = tmpStr.substring(index, index+1);
                if (tmpChar == " " && index < (strLen-1))  {
                    tmpChar = tmpStr.substring(index+1, index+2).toUpperCase();
                    preString = tmpStr.substring(0, index+1);
                    postString = tmpStr.substring(index+2,strLen);
                    tmpStr = preString + tmpChar + postString;
                }
            }
        }
    }
    frmObj.value = tmpStr;
}
//  End -->

//DA SOLO FORMATO NUMERICO A LOS INPUTS
function solonumero(e){
    key=e.keyCode || e.which;
    teclado=String.fromCharCode(key);
    numeros="0123456789";
    especiales="8-37-38-46-48-49-50-51-52-53-54-55-56-57";
    teclado_especial=false;
    for(var i in especiales){
        if(key==especiales[i]){
            teclado_especial=true;
        }
    }
    if(numeros.indexOf(teclado)==-1 && !teclado_especial){
        return false;
    }
}

//FORMATO CON SEPARADORES DE MILES
function formatnumber(input){
    var num = input.value.replace(/\./g,'');
    if(!isNaN(num)){
        num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
        num = num.split('').reverse().join('').replace(/^[\.]/,'');
        input.value = num;
    }else{ 
        alert('Solo se permiten numeros');
        input.value = input.value.replace(/[^\d\.]*/g,'');
    }
}

//FORMATO CON SEPARADORES DE MILES
function dar_formato(num){
    var cadena = ""; var aux;
    var cont = 1,m,k;
    if(num<0) aux=1; else aux=0;
    num=num.toString();
    for(m=num.length-1; m>=0; m--){
       cadena = num.charAt(m) + cadena;
       if(cont%3 == 0 && m >aux)  cadena = "." + cadena; else cadena = cadena;
       if(cont== 3) cont = 1; else cont++;
   }
   cadena = cadena.replace(".",",");
   return cadena;
}


//FUNCION DEL DATAPIKER EN ESPAÑOL
jQuery(function ($) {
    $.datepicker.regional['es'] = {
       closeText: 'Cerrar',
       prevText: '<Ant',
       nextText: 'Sig>',
       currentText: 'Hoy',
       monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
       monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
       dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
       dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
       dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
       weekHeader: 'Sm',
       dateFormat: 'dd/mm/yy',
       firstDay: 1,
       isRTL: false,
       showMonthAfterYear: false,
       yearSuffix: ''
   };

   //DA EL FORMATO DATEPICKER EN ESPAÑOL A LOS INPUTS DE FECHA
   $.datepicker.setDefaults($.datepicker.regional['es']);
});


$(document).ready(function() {
   $(".fecha").datepicker({
      changeMonth: true,
      changeYear: true,
      dateFormat:"dd/mm/yy",
      minDate:"+0D",
      yearRange:"+0:+0",
      beforeShowDay: $.datepicker.noWeekends
      });

   $( ".fechaperitaje" ).datepicker({
    changeMonth: true,
    changeYear: true,
    dateFormat: 'dd/mm/yy',
    minDate:"2D",
    beforeShowDay: $.datepicker.noWeekends,
  });

   $( ".fechahabil" ).datepicker({
      changeMonth: true,
      changeYear: true,
      dateFormat:"dd/mm/yy",
      minDate:"+0D",
      beforeShowDay: $.datepicker.noWeekends,
    });
});
//DESABILITA BOTON ATRAS DEL NAVEGADOR
function nobackbutton(){
   window.location.hash="no-back-button";
   window.location.hash="Again-No-back-button" //chrome
   window.onhashchange=function(){window.location.hash="no-back-button";}
}

//CARGA LAS OBSERVACIONES EN EL POPUP DE OBSERVACIONES
function cargarObservaciones(id,ti) {
  var nuevaid = id;
  var nuevati = ti;
    $.ajax({
      url: 'include/guardar_observaciones.php',
      type: 'POST',
      data: {id: nuevaid, ti: nuevati, type: '2'},
      dataType: 'json',
    })
    .done(function(data) {
      if (data.estatus) {
        $("#comentarioviejo").val(data.observacion);
        $("#hidid").val(nuevaid);
        $("#hidti").val(nuevati);
      }else{
        $("#comentarioviejo").val("");
        $("#hidid").val(nuevaid);
        $("#hidti").val(nuevati);
      };
      console.log(data);
    })
    .fail(function(data) {
      console.log("error cargarObservaciones " + data);
    })
    .always(function() {
      //console.log("complete");
    }); 
}


//*** FUNCIONES DE APERTURAS DE POPUP ***//

//ABRE POPUP DE OBSERVACIONES
$(document).ready(function() {
  $('.open-popup-link').magnificPopup({
    type: 'inline',
  })
});

//ABRE EL POPUP DE DETALLES
$(document).ready(function() {
  $('.open-popup-detalles').magnificPopup({
    type: 'inline',
  })
});

//ABRE POP UP DE ADJUNTOS
$(document).ready(function() {
  $('.open-popup-adjuntos').magnificPopup({
    removalDelay: 500, 
    callbacks: {
      beforeOpen: function() {
         this.st.mainClass = this.st.el.attr('data-effect');
      }
    },
    type: 'inline',
  })
});

//ABRE POPUP DE DOCUMENTO
$(document).ready(function() {
  $('.open-popup-verdoc').magnificPopup({
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
      beforeOpen: function() {
         this.st.mainClass = this.st.el.attr('data-effect');
      }
    },
    type: 'inline',
    // other options
  })
});

//ABRE EL POPUP DE FINALIZADO
$(document).ready(function() {
  $('.open-popup-todok').magnificPopup({
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
      beforeOpen: function() {
         this.st.mainClass = this.st.el.attr('data-effect');
      }
    },
    type: 'inline',
  })
});

//ABRE EL POPUP DE OBSERVACIONES Y DE DETALLES
function abrirPopup(tipo){
  if (tipo==0) {
    if ($('.parent-container').length) {
        $.magnificPopup.open({
            items: {
                src: '.parent-container' 
            },
            type: 'inline'
        });
      }else{
        $.magnificPopup.open();
      }
  }else if(tipo==1){
    if ($('.parent-detalles').length) {
        $.magnificPopup.open({
            items: {
                src: '.parent-detalles' 
            },
            type: 'inline'
        });
      }else{
        $.magnificPopup.open();
      }
  };
}

//*** FIN FUNCIONES DE APERTURAS DE POPUP ***//


//GUARDA LAS OBSERVACIONES ESCRITAS EN EL POPUP
function guardaroblla(){
    var nuevaid  =$("#hidid").val();
    var nuevati  =$("#hidti").val();
    var estatus  =$("#estatus").val();
    var fecha    =$("#fecha").val();
    var hora     =$("#hora").val();
    var operador = $("#operador").val();
    if ($("#guardar").is(':checked')) {
        if(operador==""){
          alert('Debe ingresar el nombre del operador');
          return false;
        }
        if ((estatus==0 || estatus==1) && (($.trim($("#comentarionuevo").val())=="") || (fecha=="") || (hora=="")) ) {
            alert("Debe rellenar todos los campos");
            return false;
        }else{
            guardarllamada(true);
        }
    }else{
        alert('Debe seleccionar la casilla de asignar llamada');
    }
}

//FUNCION PARA VER LOS DATOS DE LA LLAMADA EN EL POPUP
function verllamada(id,tipo) {
    $.ajax({
      url: 'include/guardar_llamada.php',
      type: 'POST',
      data: {id: id, tipo: tipo, type: '2'},
      dataType: 'json',
    })
    .done(function(data) {
      if (data.estat) {
        $("#llamadasp").val(data.llamadas);
        $("#idhistorial").html(data.idhist);
        $("#datoscliente").html(data.datoscliente);
      }else{
        //$("#comentarioviejo").html("");
        $("#llamadasp").val("");
      };
      console.log(data);
    })
    .fail(function(data) {
      console.log("error verllamada " + data);
    })
    .always(function() {
      console.log("complete");
    }); 
}
//GUARDAR LA LLAMADA PROGRAMADA
function guardarllamada(validate) {
    var fecha    =$("#fecha").val();
    var hora     =$("#hora").val();
    var estatus  =$("#estatus").val();
    var nuevaid  =$("#hidid").val();
    var nuevati  =$("#hidti").val();
    var operador = $("#operador").val();
    var comentarionuevo = $("#comentarionuevo").val();
        if (confirm("Desea Guardar los cambios")) {
            if (validate) {
              dataArray = {"id": nuevaid, "tipo": nuevati, "type": '1', "fecha": fecha, "hora": hora, "estatus": estatus,"operador": operador, "observacion": comentarionuevo};  
            };
            console.log(dataArray);
            $.ajax({
                url: 'include/guardar_llamada.php',
                type: 'POST',
                data: dataArray,
                dataType: 'json',
            })
            .done(function(data) {
                if (data.estat) {
                    $("#llamadasp").val("");
                    $("#comentarioviejo").val("");
                    $("#comentarionuevo").val("");
                    $("#llamadasp").val(data.llamadas);
                    $("#comentarioviejo").val(data.observaciones);
                };
                console.log(data);
            })
            .fail(function(data) {
                console.log("error guardarllamada " + data);
            })
            .always(function() {
                console.log("complete");
            }); 
        };
}

//GUARDAR LAS OBSERVACIONES
function guardarObservaciones() {
  var operador= $("#operador").val();
  var comentarioviejo = $("#comentarioviejo").val();
  var comentarionuevo = $("#comentarionuevo").val();
  var nuevoid= $("#hidid").val();
  var nuevati=$("#hidti").val();
  if (($.trim(comentarionuevo)=="")||($.trim(operador)=="")) {
    return false;
  };

  if (confirm("Desea Guardar las observaciones")) {
    $.ajax({
      url: 'include/guardar_observaciones.php',
      type: 'POST',
      data: {id: nuevoid, ti: nuevati,nom: operador,ob: comentarionuevo, type: '1'},
      dataType: 'json',
    })
    .done(function(data) {
      if (data.estatus) {
        $("#comentarioviejo").val("");
        $("#comentarioviejo").val(data.observacion);
        $("#comentarionuevo").val("");
      };
      console.log(data);
    })
    .fail(function(xhr, textStatus, errorThrown) {
      console.log("error" + xhr.responseText);
    })
    .always(function() {
      console.log("complete");
    }); 
  };
}



//FUNCION PARA VER EL DOCUMENTO EN EL POPUP
function popverdoc(url){
  console.log(url);
 $('#verdocumentos').attr('src',url);
 $('#doc_down').attr('href',url);
}



//FUNCION DEL BOTON DE CONGELAR
function congelar(id, tipo){
        if (confirm("Confirme que desea congelar la cotización")) {
          var urls='include/congelar_up.php?id='+id+"&tipo="+tipo;
          $.ajax({
            url: urls,
          })
          .done(function(data) {
            alert("Cotizacion Congelada");
            window.location.reload();
            console.log(data);
          })
          .fail(function() {
            console.log("error");
          })
          .always(function() {
            console.log("complete");
          });
        }
      }

//FUNCION PARA EL LOGIN
function contrasena(){
  var user = $("#usuario").val();
        if (user==''){
          confirm("Debe ingresar su usuario");
        }else{
          var urls='correos/correo_contrasena.php?user='+user;
          $.ajax({
            url: urls,
          })
          .done(function(data) {
            alert("Contraseña enviada");
            //window.location.reload();
            console.log(data);
          })
          .fail(function() {
            console.log("error");
          })
          .always(function() {
            console.log("complete");
          });
        }
      }

//FUNCION DEL POPUP DE DETALLE
function detalles(id, tipo){
  if (tipo==1){
    $("#detalles").load("detalle_inmueble.php?id=" + id + "&tipo="+tipo);
  }
  if (tipo==2){
    $("#detalles").load("detalle_persona.php?id=" + id + "&tipo="+tipo);
  }
  if (tipo==3){
    $("#detalles").load("detalle_viaje.php?id=" + id + "&tipo="+tipo);
  }
  if ((tipo==0) || (tipo==4) || (tipo==5)) {
    $("#detalles").load("detalle_auto.php?id=" + id);
  }
  
}

/*//DESABILITA CLICK SECUNDARIO
function clickIE() {
  if (document.all) {
    return false;
  }
} 
function clickNS(e) {
  if (document.layers||(document.getElementById&&!document.all)) { 
    if (e.which==2||e.which==3) {
      return false;
    }
  }
} 
if (document.layers) {
  document.captureEvents(Event.MOUSEDOWN);
  document.onmousedown=clickNS;
} 
else{
  document.onmouseup=clickNS;
  document.oncontextmenu=clickIE;
} 
document.oncontextmenu=new Function("return false") 

//DESABILITA SELECCION DE TEXTO
function disableselect(e){
  return false
}

function reEnable(){
  return true
}

//if IE4+
document.onselectstart=new Function ("return false")

//if NS6
if (window.sidebar){
  document.onmousedown=disableselect
  document.onclick=reEnable
}*/