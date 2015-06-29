var dd=null;
$(document).ready(function(){
    
    var datVer=$(document).data("dataJson");
    
    
    
    
  var randomScalingFactor = function(){ return Math.round(Math.random()*1000)};  
    datVer=
    {
        'Mercantil':
                {
                    'value':randomScalingFactor(),
                    'img':'mercantil.png'
                },
        'Star-Seguros':{
                    'value':randomScalingFactor(),
                    'img':'star-seguros.png'
                },
        'Multinacional':{
                    'value':randomScalingFactor(),
                    'img':'multinacional.png'
                },
        'Banesco':{
                    'value':randomScalingFactor(),
                    'img':'banesco.png'
                    
                },
        'Piramide':{
                    'value':randomScalingFactor(),
                    'img':'piramide.png'
                },
        'Constitucion':{
                    'value':randomScalingFactor(),
                    'img':'constitucion.png'
                    
                },
        'Oriental':{
                    'value':randomScalingFactor(),
                    'img':'oriental.png'
                },
         'Zurich':{
                    'value':randomScalingFactor(),
                    'img':'zurich.png' 
                },
         'Vitalicia':{
                    'value':randomScalingFactor(),
                    'img':'vitalicia.png' 
                },
         'Ibero':{
                    'value':randomScalingFactor(),
                    'img':'ibero.png' 
                }
    }
    var dtTasas=new Array();
    var dtImgs=new Array();
    var dtLabels=new Array();
    
    $.each(datVer,function(index,value)
    {
        dtLabels.push(index);
        dtTasas.push(value.value);
    });
    



    var tbprincipalesmodelos = $("#tbprincipalesmodelos").DataTable({
            "sScrollY": 500,
            "bJQueryUI": true,
            "bPaginate":false
        });
    //tbtasasvehiculos.row.add(dtTasas).draw().node();                    
});






       
    
