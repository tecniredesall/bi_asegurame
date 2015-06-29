<?php
                $cs0 = Yii::app()->clientScript;
                $cs0->registerScriptFile(Yii::app()->request->baseUrl . '/js/highcharts/highcharts.js');
                $cs0->registerScriptFile(Yii::app()->request->baseUrl . '/js/highcharts/exporting.js');
                $cs0->registerScriptFile(Yii::app()->request->baseUrl . '/js/controllers/presentacion1/view/status.js',CClientScript::POS_END);
?>
<?php
/* @var $this Presentacion1Controller */

$this->breadcrumbs=array(
	'Presentacion1',
);
?>

<div id="container" style="min-width: 310px; height: 400px; max-width: 600px; margin: 0 auto"></div>
<?php echo $this->renderPartial('../partials/data_json', array('data'=>$data)); ?>


<style>
    #container {
    height: 500px; 
    min-width: 310px; 
    max-width: 800px; 
    margin: 0 auto; 
    }
    .loading {
        margin-top: 10em;
        text-align: center;
        color: gray;
    }
    
    .prin_div_content
{
    padding-left: 15px;
    padding-right:15px;
    padding-top: 10px;
    padding-bottom:10px;
    min-height: 300px;
}
    
</style>

<div class="prin_div_content">
<table id="tbstatus" cellpadding="0" cellspacing="0" border="0" class="display">
    <thead>    
        <th style="width: 40%">Estatus</th>
        <th style="width: 30%">Cantidad Cotizaciones</th>
        <th style="width: 30%">Porcentaje(%)</th>
    </thead>
    <tbody>
    </tbody>
</table>
</div>