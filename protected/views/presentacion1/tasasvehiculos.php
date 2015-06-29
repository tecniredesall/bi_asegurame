<?php
                $cs0 = Yii::app()->clientScript;
                $cs0->registerScriptFile(Yii::app()->request->baseUrl . '/js/Chart.js-master/src/barImg.js');
                $cs0->registerScriptFile(Yii::app()->request->baseUrl . '/js/Chart.js-master/Chart.js');
                $cs0->registerScriptFile(Yii::app()->request->baseUrl . '/js/controllers/presentacion1/view/tasasvehiculos.js',CClientScript::POS_END);
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

<div  style="width: 750px; height: 300px; float: left;margin-top: 20px;padding-left:20px">
    <canvas id="barImg" width="850px" height="300px"></canvas>
</div>

<style>  
    .prin_div_content
    {
        margin-top: 300px;
        padding-left: 15px;
        padding-right:15px;
        padding-top: 20px;
        padding-bottom:10px;
        min-height: 300px;
    }
    
</style>
<br/>
<div class="prin_div_content">
<table id="tbTasas" class="display compact" cellpadding="0" cellspacing="0" border="0" class="display">
    <thead>    
        <th style="width: 10%">Mercantil</th>
        <th style="width: 10%">Star-Seguros</th>
        <th style="width: 10%">Multinacional</th>
        <th style="width: 10%">Banesco</th>
        <th style="width: 10%">Piramide</th>
        <th style="width: 10%">Constitucion</th>
        <th style="width: 10%">Oriental</th>
        <th style="width: 10%">Zurich</th>
        <th style="width: 10%">Vitalicia</th>
        <th style="width: 10%">Ibero</th>
    </thead>
    <tbody>
    </tbody>
</table>
</div>