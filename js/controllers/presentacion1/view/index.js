$(document).ready(function(){
    
    var datVer=$(document).data("dataJson");
    
    var tbcnt = $("#tbcnt").DataTable({
            "sScrollY": 120,
            "bJQueryUI": true,
            "bPaginate":true
        });
    
    var dataArray=new Array();
    dataArray[0]=new Array();
    dataArray[1]=new Array();
    dataArray[2]=new Array();
    dataArray[3]=new Array();
    dataArray[4]=new Array();
    var labelfechas=new Array();
    var i=0;
    
    $.each(datVer,function(index,value)
    {
        labelfechas[i]=value['fechaactual'];
        dataArray[0][i]=value['cant'];
        dataArray[1][i]=value['snresp'];
        dataArray[2][i]=value['resp'];
        dataArray[3][i]=value['cont'];
        dataArray[4][i]=value['sncont'];
        i++;   
        tbcnt.row.add( [value['fechaactual'],value['cant'],value['resp'],value['snresp'],value['cont'],value['sncont']]).draw().node();
    });
    
var options={
    scaleBeginAtZero : true,

    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,

    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.05)",

    //Number - Width of the grid lines
    scaleGridLineWidth : 1,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,

    //Boolean - If there is a stroke on each bar
    barShowStroke : true,

    //Number - Pixel width of the bar stroke
    barStrokeWidth : 2,

    //Number - Spacing between each of the X value sets
    barValueSpacing : 20,

    //Number - Spacing between data sets within X values
    barDatasetSpacing : 1,
    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
    multiTooltipTemplate: "<%= value %>",
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
}
var data = {
    labels: labelfechas,
    datasets: [{
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: dataArray[0]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: dataArray[1]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(255,255,0,0.1)",
            strokeColor: "rgba(255,255,0,0.3)",
            highlightFill: "rgba(255,255,0,0.1)",
            highlightStroke: "rgba(255,255,0,0.1)",
            data: dataArray[2]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(0, 226, 255, 0.2)",
            strokeColor: "rgba(0, 226, 255, 0.2)",
            highlightFill: "rgba(0, 226, 255, 0.2)",
            highlightStroke: "rgba(0, 226, 255, 0.2)",
            data: dataArray[3]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(137, 123, 0, 0.2)",
            strokeColor: "rgba(137, 123, 0, 0.2)",
            highlightFill: "rgba(137, 123, 0, 0.2)",
            highlightStroke: "rgba(137, 123, 0, 0.2)",
            data: dataArray[4]
        }
        
    ]
};
var ctx = document.getElementById("myChart").getContext("2d");
var myLineChart = new Chart(ctx).Bar(data,options);
});
