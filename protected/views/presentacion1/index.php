<?php
                $cs0 = Yii::app()->clientScript;
                $cs0->registerScriptFile(Yii::app()->request->baseUrl . '/js/Chart.js-master/Chart.js');
                $cs0->registerScriptFile(Yii::app()->request->baseUrl . '/js/controllers/presentacion1/view/index.js',CClientScript::POS_END);
?>
<?php
/* @var $this Presentacion1Controller */

$this->breadcrumbs=array(
	'Presentacion1',
);
?>
<canvas id="myChart" width="800" height="400"></canvas>
<div id="leyend"></div>
<?php echo $this->renderPartial('../partials/data_json', array('data'=>$data)); ?>



<div class="form">
    
    <?php $form = $this->beginWidget('CActiveForm', array(
    'id'=>'user-form',
    'enableAjaxValidation'=>true,
    'enableClientValidation'=>true,
    'focus'=>array($model,'firstName'),
    'method'=>'post'
)); ?>
  
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
        'readonly'=>'readonly'
    ),
));

?>

<?php echo CHtml::submitButton('Consultar', array('submit'=>array('presentacion1/cntParametros'))); ?>

    
<?php $this->endWidget(); ?>
</div>

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
<table id="tbcnt" cellpadding="0" cellspacing="0" border="0" class="display">
    <thead>    
        <th style="width: 25%">Fecha</th>
        <th style="width: 15%">Cant</th>
        <th style="width: 15%">Respondidas</th>
        <th style="width: 15%">Sin Responder</th>
        <th style="width: 15%">Precontrato</th>
        <th style="width: 15%">Sin Precontrato</th>
    </thead>
    <tbody>
    </tbody>
</table>
</div>