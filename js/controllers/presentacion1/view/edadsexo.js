var dd=null;
$(document).ready(function(){
    
    var datVer=$(document).data("dataJson");
    
  
    
    var dataArray=new Array();
    dataArray[0]=new Array();
    dataArray[1]=new Array();
    var label=new Array();
    var i=0;
  var randomScalingFactor = function(){ return Math.round(Math.random()*1000)};  
  var randomScalingFactorM = randomScalingFactor;  
  var randomScalingFactorF = randomScalingFactor;  
    datVer=
    {
        '18-30':
                {
                    'masculino':randomScalingFactorM(),
                    'femenino':randomScalingFactorF(),
                },
        '31-40':{
                    'masculino':randomScalingFactorM(),
                    'femenino':randomScalingFactorF(),
                },
        '41-50':{
                    'masculino':randomScalingFactorM(),
                    'femenino':randomScalingFactorF(),
                },
        '51-60':{
                    'masculino':randomScalingFactorM(),
                    'femenino':randomScalingFactorF(),
                },
        '61-70':{
                    'masculino':randomScalingFactorM(),
                    'femenino':randomScalingFactorF(),
                },
        '71-80':{
                    'masculino':randomScalingFactorM(),
                    'femenino':randomScalingFactorF(),
                },
        '81-110':{
                    'masculino':randomScalingFactorM(),
                    'femenino':randomScalingFactorF(),
                },
    }
    
    var ttFemenino=0;
    var ttMasculino=0;
    $.each(datVer,function(index,value)
    {
        
        label.push(index);
        dataArray[0].push(value.masculino);
        dataArray[1].push(value.femenino);
        ttFemenino+=value.femenino;
        ttMasculino+=value.masculino;
        i++;   
    });
    
    
    
    var total=ttFemenino+ttMasculino;
    var porcF=parseFloat(((ttFemenino*100)/total).toString()).toFixed(2);
    var porcM=parseFloat(((ttMasculino*100)/total).toString()).toFixed(2);
    
    
    

var randomScalingFactor = function(){ return Math.round(Math.random()*1000)};
var data = {
    labels: label,
    datasets: [{
            label: "Masculino",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: dataArray[0] 
        },
        {
            label: "Femenino",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: dataArray[1]
        }
    ]
};



var ctx = document.getElementById("barEdad").getContext("2d");
var barChart = new Chart(ctx).Bar(data,{
                        responsive:false,
                        scaleBeginAtZero:true,
                        barValueSpacing:15});
              
    

                    
Highcharts.setOptions({
        colors: ['rgba(220,220,220,0.5)', 'rgba(151,187,205,0.5)']
    });
            
    $('#pieChar').highcharts({
        exporting:false,
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                },
                 showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: [
                {
                    name: 'Masculino',
                    y: parseFloat(porcM),
                    sliced: false,
                    selected: false
                },
                {
                    name: 'Femenino',
                    y: parseFloat(porcF),
                    sliced: true,
                    selected: true
                }
                
            ]
        }]
    });
  
    
    var tbedadsexo = $("#tbedadsexo").DataTable({
            "sScrollY": 120,
            "bJQueryUI": true,
            "bPaginate":false
        });
        
    dataArray[0].unshift("Masculino");
    dataArray[1].unshift("Femenino");
    tbedadsexo.row.add(dataArray[0]).draw().node();
    tbedadsexo.row.add(dataArray[1]).draw().node();
    
                    
});






       
    
