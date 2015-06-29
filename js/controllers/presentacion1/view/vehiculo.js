$(document).ready(function(){
    
   var datVer=$(document).data("dataJson");
   
   var tbvehiculo = $("#tbvehiculo").DataTable({
            "sScrollY": 170,
            "bJQueryUI": true,
            "bPaginate":true
        });
   
   dataGraf=new Array();

   categ=new Array();
   var tmpVeh='';
   var total=0;
   $.each(datVer,function(index,value)
   {
       total+=parseInt(value['cnt']);
   });
   
   var i=0;
   var j=0;
   $.each(datVer,function(index,value)
   {
       var idx=value['desc_marca'];
       if(tmpVeh!=value['desc_marca'])
       {
           
           tmpVeh=value['desc_marca'];
           categ[j]=value['desc_marca'];
           dataGraf[idx]=new Array(3);
           dataGraf[idx][0]=new Array();
           dataGraf[idx][1]=new Array();
           dataGraf[idx][2]=0;
           j++;
           i=0;
       }
       dataGraf[idx][0][i]=value['desc_modelo']+' '+value['ano_veh'];
       dataGraf[idx][1][i]=(parseInt(value['cnt'])*100)/total;
       dataGraf[idx][2]+=parseInt(value['cnt']);
       i++;
       tbvehiculo.row.add( [value['desc_marca'],value['desc_modelo'],value['ano_veh'],value['cnt'],parseFloat((parseInt(value['cnt'])*100)/total).toFixed(2)+" %"]).draw().node();
   });
   
   
    _data=new Array();
   i=0;
   var colors = Highcharts.getOptions().colors;
   for(i=0;i<categ.length;i++)
   {
       dataGraf[categ[i]];
       _data[i] = {
            y: (dataGraf[categ[i]][2]*100)/total,
            color: colors[i],
            drilldown: {
                name: categ[i],
                categories: dataGraf[categ[i]][0],
                data: dataGraf[categ[i]][1],
                color: colors[i]
            }
        };
       
   }
    /*$.each(dataGraf,function(index,value){
        
        alert(value);
        categ[i]=value;
        i++;
        /*data[i]=
        {
            y: value[index][2],
            color: colors[0],
            drilldown: {
                name: 'MSIE versions',
                categories: ['MSIE 6.0', 'MSIE 7.0', 'MSIE 8.0', 'MSIE 9.0'],
                data: [10.85, 7.35, 33.06, 2.81],
                color: colors[0]
            }
        }*/
    //});*/
   
   var colors = Highcharts.getOptions().colors,
        categories = categ,
        data =_data,browserData = [],
        versionsData = [],
        i,
        j,
        dataLen = data.length,
        drillDataLen,
        brightness;
   
   
   

    /*var colors = Highcharts.getOptions().colors,
        categories = ['MSIE', 'Firefox', 'Chrome', 'Safari', 'Opera'],
        data = [{
            y: 55.11,
            color: colors[0],
            drilldown: {
                name: 'MSIE versions',
                categories: ['MSIE 6.0', 'MSIE 7.0', 'MSIE 8.0', 'MSIE 9.0'],
                data: [10.85, 7.35, 33.06, 2.81],
                color: colors[0]
            }
        }, {
            y: 21.63,
            color: colors[1],
            drilldown: {
                name: 'Firefox versions',
                categories: ['Firefox 2.0', 'Firefox 3.0', 'Firefox 3.5', 'Firefox 3.6', 'Firefox 4.0'],
                data: [0.20, 0.83, 1.58, 13.12, 5.43],
                color: colors[1]
            }
        }, {
            y: 11.94,
            color: colors[2],
            drilldown: {
                name: 'Chrome versions',
                categories: ['Chrome 5.0', 'Chrome 6.0', 'Chrome 7.0', 'Chrome 8.0', 'Chrome 9.0',
                    'Chrome 10.0', 'Chrome 11.0', 'Chrome 12.0'],
                data: [0.12, 0.19, 0.12, 0.36, 0.32, 9.91, 0.50, 0.22],
                color: colors[2]
            }
        }, {
            y: 7.15,
            color: colors[3],
            drilldown: {
                name: 'Safari versions',
                categories: ['Safari 5.0', 'Safari 4.0', 'Safari Win 5.0', 'Safari 4.1', 'Safari/Maxthon',
                    'Safari 3.1', 'Safari 4.1'],
                data: [4.55, 1.42, 0.23, 0.21, 0.20, 0.19, 0.14],
                color: colors[3]
            }
        }, {
            y: 2.14,
            color: colors[4],
            drilldown: {
                name: 'Opera versions',
                categories: ['Opera 9.x', 'Opera 10.x', 'Opera 11.x'],
                data: [ 0.12, 0.37, 1.65],
                color: colors[4]
            }
        }],
        browserData = [],
        versionsData = [],
        i,
        j,
        dataLen = data.length,
        drillDataLen,
        brightness;*/
    
    // Build the data arrays
    for (i = 0; i < dataLen; i += 1) {

        // add browser data
        browserData.push({
            name: categories[i],
            y: data[i].y,
            color: data[i].color
        });

        // add version data
        drillDataLen = data[i].drilldown.data.length;
        for (j = 0; j < drillDataLen; j += 1) {
            brightness = 0.1 - (j / drillDataLen) / 5;
            versionsData.push({
                name: data[i].drilldown.categories[j],
                y: data[i].drilldown.data[j],
                color: Highcharts.Color(data[i].color).brighten(brightness).get()
            });
        }
    }

    // Create the chart
    $('#container').highcharts({
        chart: {
            type: 'pie'
        },
        title: {
            text: ''
        },
        yAxis: {
            title: {
                text: 'percern'
            }
        },
        plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%']
            }
        },
        tooltip: {
            valueSuffix: '%',
            formatter: function () {
                return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + parseFloat(this.y).toFixed(2) + '%'  : null;
            }
        },
        noData:
            { x: 0, y: 0, align: "center", verticalAlign: "middle" }
        ,
        series: [{
            name: 'Marca',
            data: browserData,
            size: '60%',
            dataLabels: {
                formatter: function () {
                    return this.y > 5 ? this.point.name : null;
                },
                color: 'brown',
                distance: -50
            }
        }, {
            name: 'Modelo',
            data: versionsData,
            size: '80%',
            innerSize: '60%',
            dataLabels: {
                formatter: function () {
                    // display only if larger than 1
                    return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + parseFloat(this.y).toFixed(2) + '%'  : null;
                }
            }
        }]
    });
});
    
    
    

