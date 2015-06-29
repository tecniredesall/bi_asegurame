var dd=null;
$(document).ready(function(){
    
    var datVer=$(document).data("dataJson");
    

  var randomScalingFactor = function(){ return Math.round(Math.random()*1000)};  
    datVer=
    {
        'Mercantil':
                {
                    'valueX':randomScalingFactor(),
                    'valueY':randomScalingFactor(),
                    'img':'mercantil.png'
                },
        'Star-Seguros':{
                    'valueX':randomScalingFactor(),
                    'valueY':randomScalingFactor(),
                    'img':'star-seguros.png'
                },
        'Multinacional':{
                    'valueX':randomScalingFactor(),
                    'valueY':randomScalingFactor(),
                    'img':'multinacional.png'
                },
        'Banesco':{
                    'valueX':randomScalingFactor(),
                    'valueY':randomScalingFactor(),
                    'img':'banesco.png'
                    
                },
        'Piramide':{
                    'valueX':randomScalingFactor(),
                    'valueY':randomScalingFactor(),
                    'img':'piramide.png'
                },
        'Constitucion':{
                    'valueX':randomScalingFactor(),
                    'valueY':randomScalingFactor(),
                    'img':'constitucion.png'
                    
                },
        'Oriental':{
                    'valueX':randomScalingFactor(),
                    'valueY':randomScalingFactor(),
                    'img':'oriental.png'
                },
         'Zurich':{
                    'valueX':randomScalingFactor(),
                    'valueY':randomScalingFactor(),
                    'img':'zurich.png' 
                },
         'Vitalicia':{
                    'valueX':randomScalingFactor(),
                    'valueY':randomScalingFactor(),
                    'img':'vitalicia.png' 
                },
    }
    var rutaImg=$(location).attr('protocol')+"//"+$(location).attr('host')+"/asegurame/bi_asegurame/images/aseguradoras/"
    var dtY=new Array();
    var dtX=new Array();
    var dtLabels=new Array();
    var dtPromedio=new Array();
    $.each(datVer,function(index,value)
    {
        dtLabels.push(index);
        dtPromedio.push({x:value.valueX,y:value.valueY,imgSrc:rutaImg+value.img});
        dtX.push(value.valueX);
        dtY.push(value.valueY);
    });
    

	var randomScalingFactor = function(){ return Math.round(Math.random()*1000)};

	var dispersalData = {
		labels : dtLabels,
                labelX :"Prima Asegurada",
                labelY :"Suma Asegurada",
                labelProm:"Promedio",
		datasets : [
			{
                                fillColor : "rgba(220,220,220,0.5)",
				strokeColor : "rgba(220,220,220,0.8)",
				highlightFill: "rgba(220,220,220,0.75)",
				highlightStroke: "rgba(220,220,220,1)",
                                
                                fillColorProm : "rgba(220,220,220,0.5)",
				strokeColorProm : "rgba(220,220,220,0.8)",
				highlightFillProm: "rgba(220,220,220,0.75)",
				highlightStrokeProm: "rgba(220,220,220,1)",
                                dataXY:dtPromedio
			}
		]

	}
		var ctx = document.getElementById("dispersalImg").getContext("2d");
		var chart=new Chart(ctx).DispersalImg(dispersalData, {
			responsive : true,
                        scaleBeginAtZero:true
		});
    var tbPrimasTasas = $("#tbPrimasTasas").DataTable({
            "sScrollY": 100,
            "bJQueryUI": true,
            "bPaginate":false
        });
    dtX.unshift("Suma Asegurada");
    dtY.unshift("Prima Asegurada");
    tbPrimasTasas.row.add(dtX).draw().node();                    
    tbPrimasTasas.row.add(dtY).draw().node();                    
});






       
    
