<?php
                $cs0 = Yii::app()->clientScript;
                $cs0->registerScriptFile(Yii::app()->request->baseUrl . '/js/controllers/maps/view/index.js',CClientScript::POS_END);
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
        'dateFormat'=>'dd/mm/yy',
    ),
    'htmlOptions'=>array(
        'style'=>'',
        'id'=>'id_fechainicio',
        'readonly=>readonly'
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
        'readonly=>readonly'
    ),
));

?>
            
            <?php echo CHtml::submitButton('Dia', array('submit'=>array('Maps/MapVzlaDia'))); ?>
            <?php echo CHtml::submitButton('Semana', array('submit'=>array('Maps/MapVzlaSemana'))); ?>
            <?php echo CHtml::submitButton('Mes', array('submit'=>array('Maps/MapVzlaMes'))); ?>
            <?php echo CHtml::submitButton('Consultar', array('submit'=>array('Maps/MapVzlaParametros'))); ?>
            
            <div class="row">

</div>
            
            
             
	</div>
<?php $this->endWidget(); ?>
</div>


<div id="container"></div>
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
    padding-left: 15px;<h1><?php echo $this->id . '/' . $this->action->id; ?></h1>
    padding-right:15px;
    padding-top: 10px;
    padding-bottom:10px;
    min-height: 300px;
}
    
</style>

<div class="prin_div_content">
<table id="tbmap" cellpadding="0" cellspacing="0" border="0" class="display">
    <thead>    
        <th style="width: 60%">Estado</th>
        <th style="width: 40%">Total Cotizaciones</th>
    </thead>
    <tbody>
    </tbody>
</table>
</div>



    
