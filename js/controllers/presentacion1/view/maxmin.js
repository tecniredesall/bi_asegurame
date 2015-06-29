$(document).ready(function(){
    
   var datVer=$(document).data("dataJson");
   
    var label=new Array();
    var tasaMax=new Array();
    var tasaMin=new Array();
                    
    
  var randomScalingFactor = function(){ return Math.round(Math.random()*1000)};  
  
    datVer=
    {
        'veh1':
                {
                    'tasaMax':randomScalingFactor(),
                    'tasaMin':randomScalingFactor()
                    
                },
        'veh2':{
                    'tasaMax':randomScalingFactor(),
                    'tasaMin':randomScalingFactor()
                },
        'veh3':{
                    'tasaMax':randomScalingFactor(),
                    'tasaMin':randomScalingFactor()
                    
                },
        'veh4':{
                    'tasaMax':randomScalingFactor(),
                    'tasaMin':randomScalingFactor()
                    
                },
        'veh5':{
                    'tasaMax':randomScalingFactor(),
                    'tasaMin':randomScalingFactor()
                },
        'veh6':{
                    'tasaMax':randomScalingFactor(),
                    'tasaMin':randomScalingFactor()
                }
    }
    
    var ttFemenino=0;
    var ttMasculino=0;
    $.each(datVer,function(index,value)
    {
        label.push(index);
        tasaMax.push(value.tasaMax);
        tasaMin.push(value.tasaMin);
    });

  
   $(function () {
    $('#container').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: label
        },
        yAxis: {
            title: {
                text: '% Tasa'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Tasa Maxima',
            data: tasaMax
        }, {
            name: 'Tasa Minima',
            data: tasaMin
        }]
    });
}); 



    var data=new Array();
    data.push(tasaMax);
    data.push(tasaMin);

    makeTable("#tbTasasMinMax",{
            "sScrollY": 120,
            "bJQueryUI": true,
            "bPaginate":false
        },label,data);
   
  
});
    
   
function makeTable(tbId,options,labels,data)
{
    var thead=$(tbId).find("thead");
    var tr=thead.append("<tr></tr>").find("tr");
    $.each(labels,function(index,value)
    {
       tr.append("<th>"+value+"</th>");
    });
    var tb = $(tbId).DataTable(options);
  
    $.each(data,function(index,value)
    {
        tb.row.add(value).draw().node();
    });
}