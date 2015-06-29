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
    var rutaImg=$(location).attr('protocol')+"//"+$(location).attr('host')+"/asegurame/bi_asegurame/images/aseguradoras/"
    var dtTasas=new Array();
    var dtImgs=new Array();
    var dtLabels=new Array();
    
    $.each(datVer,function(index,value)
    {
        dtLabels.push(index);
        dtTasas.push(value.value);
        dtImgs.push(rutaImg+value.img);
    });
    

	var barChartData = {
		labels : dtLabels,
		datasets : [
			{
				fillColor : "rgba(220,220,220,0.5)",
				strokeColor : "rgba(220,220,220,0.8)",
				highlightFill: "rgba(220,220,220,0.75)",
				highlightStroke: "rgba(220,220,220,1)",
				data : dtTasas,
                                img:dtImgs
			}       
		]
	}
	window.onload = function(){
		var ctx = document.getElementById("barImg").getContext("2d");
		window.myBar = new Chart(ctx).BarImg(barChartData, {
			responsive : true,
                        barValueSpacing:10,
                        barDatasetSpacing:1,
                        scaleShowVerticalLines:true,
                        scaleBeginAtZero:false
		});
}

    var tbtasasvehiculos = $("#tbTasas").DataTable({
            "sScrollY": 70,
            "bJQueryUI": true,
            "bPaginate":false
        });
    tbtasasvehiculos.row.add(dtTasas).draw().node();                    
});






       
    
