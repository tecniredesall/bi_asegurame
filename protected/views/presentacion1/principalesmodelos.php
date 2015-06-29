<?php
                $cs0 = Yii::app()->clientScript;
                $cs0->registerScriptFile(Yii::app()->request->baseUrl . '/js/Chart.js-master/src/barImg.js');
                $cs0->registerScriptFile(Yii::app()->request->baseUrl . '/js/Chart.js-master/Chart.js');
                $cs0->registerScriptFile(Yii::app()->request->baseUrl . '/js/controllers/presentacion1/view/principalesmodelos.js',CClientScript::POS_END);
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

</div>
            
            
             
	</div>
<?php $this->endWidget(); ?>
</div>



<style>  
    .prin_div_content
    {
        padding-left: 15px;
        padding-right:15px;
        padding-top: 20px;
        padding-bottom:10px;
        min-height: 300px;
    }
    
</style>
<br/>
<div class="prin_div_content">
<table id="tbprincipalesmodelos" class="display compact" cellpadding="0" cellspacing="0" border="0" class="display">
    <thead>    
        <th style="width: 20%">Ciudad 1</th>
        <th style="width: 20%">Ciudad 2</th>
        <th style="width: 20%">Ciudad 3</th>
        <th style="width: 20%">Ciudad 4</th>
        <th style="width: 20%">Ciudad 5</th>
    </thead>
    <tbody>
    </tbody>
</table>
</div>