$(document).ready(function(){
   
    
   var datVer=$(document).data("dataJson");
   var tbstatus = $("#tbstatus").DataTable({
            "sScrollY": 120,
            "bJQueryUI": true,
            "bPaginate":true
        });

   dataGraf=new Array();
   var total=0;
   $.each(datVer,function(index,value)
   {
       total+=parseInt(value['cnt']);
   });
   
   $.each(datVer,function(index,value)
   {
       var porc=(parseInt(value['cnt'])*100)/total;
       tbstatus.row.add( [value['estatus'],value['cnt'],parseFloat(porc).toFixed(2)]).draw().node();
       dataGraf[index]=new Array(value['estatus'], porc);
   });
   
   


    $('#container').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Estatus<br>Cotizaciones<br>',
            align: 'center',
            verticalAlign: 'middle',
            y: 50
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Estatus Cotizaciones',
            innerSize: '50%',
            data: 
                
                dataGraf
                
            
        }]
    });

    
    
    
});
