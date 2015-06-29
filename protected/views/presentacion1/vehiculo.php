<?php
                $cs0 = Yii::app()->clientScript;
                $cs0->registerScriptFile(Yii::app()->request->baseUrl . '/js/highcharts/highcharts.js');
                $cs0->registerScriptFile(Yii::app()->request->baseUrl . '/js/highcharts/exporting.js');
                $cs0->registerScriptFile(Yii::app()->request->baseUrl . '/js/controllers/presentacion1/view/vehiculo.js',CClientScript::POS_END);
?>


<div class="form">
    
    <?php $form = $this->beginWidget('CActiveForm', array(
    'id'=>'user-form',
    'enableAjaxValidation'=>true,
    'enableClientValidation'=>true,
    'focus'=>array($model,'firstName'),
    'method'=>'post'
)); ?>
    
	<div class="row buttons">
		
  
            <?php echo $form->labelEx($model,'Fecha Inicio'); ?>
            
            <?php
$this->widget('zii.widgets.jui.CJuiDatePicker',array(
    'name'=>'fechainicio',
    'value'=>$inicio,    
    'options'=>array(
        'showAnim'=>'slide',//'slide','fold','slideDown','fadeIn','blind','bounce','clip','drop'
        'showButtonPanel'=>true,
        'dateFormat'=>'dd/mm/yy'
    ),
    'htmlOptions'=>array(
        'style'=>'',
        'id'=>'id_fechainicio',
        'readonly'=>'readonly'
        
    ),
));
?>
            <?php echo $form->labelEx($model,'Fecha Fin'); ?>
<?php            
$this->widget('zii.widgets.jui.CJuiDatePicker',array(
    'name'=>'fechafin',
    //'value'=>date('d-m-Y'),    
    'value'=>$fin,    
    'options'=>array(
        'showAnim'=>'slide',//'slide','fold','slideDown','fadeIn','blind','bounce','clip','drop'
        'showButtonPanel'=>true,
        'dateFormat'=>'dd/mm/yy'
    ),
    'htmlOptions'=>array(
        'style'=>'',
        'id'=>'id_fechafin',
        'value'=> $fin,
        'readonly'=>'readonly'
    ),
));

?>
            
            <?php echo CHtml::submitButton('Dia', array('submit'=>array('presentacion1/vehiculoDia'))); ?>
            <?php echo CHtml::submitButton('Semana', array('submit'=>array('presentacion1/vehiculoSemana'))); ?>
            <?php echo CHtml::submitButton('Mes', array('submit'=>array('presentacion1/vehiculoMes'))); ?>
            <?php echo CHtml::submitButton('Consultar', array('submit'=>array('presentacion1/vehiculoParametros'))); ?>
            
            <div class="row">
<?php echo $form->labelEx($model,'Asignar'); ?>
<?php //echo //$form->dropDownList($model,'Asignar',CHtml::listData(Empleado::model()->findAll(), 'Identificacion', 'Nombre'),array ('prompt'=>;'Seleccione...')); ?>
<?php echo $form->error($model,'Asignar'); ?>
</div>
            
            
             
	</div>
<?php $this->endWidget(); ?>
</div>

<div id="container" style="width: 600px; height: 400px; margin: 0 auto"></div>
<?php echo $this->renderPartial('../partials/data_json', array('data'=>$data)); ?>

<style>
  
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
<table id="tbvehiculo" cellpadding="0" cellspacing="0" border="0" class="display">
    <thead>    
        <th style="width: 30%">Marca</th>
        <th style="width: 30%">Modelo</th>
        <th style="width: 20%">Año</th>
        <th style="width: 20%">Cant Cotiz</th>
        <th style="width: 20%">Porcentaje(%)</th>
    </thead>
    <tbody>
    </tbody>
</table>
</div>