<?php
                $cs0 = Yii::app()->clientScript;
                //$cs0->registerScriptFile(Yii::app()->request->baseUrl . '/js/highcharts/highcharts.js');
                //$cs0->registerScriptFile(Yii::app()->request->baseUrl . '/js/highcharts/exporting.js');
                //$cs0->registerScriptFile(Yii::app()->request->baseUrl . '/js/controllers/presentacion1/view/vehiculo.js',CClientScript::POS_END);
?>

<div class="form">
<?php echo CHtml::beginForm(); ?>
 
    <?php echo CHtml::errorSummary($model); ?>
    
    <div class="row">
        Usuario:<input type="text" placeholder="prueba@asegurame123.com">
    </div>
    <div class="row">
        Correo Electronico:<input type="text" placeholder="prueba@asegurame123.com">
    </div>
    <div class="row">
        Nombre:<input type="text" placeholder="Nombre">
    </div>
    <div class="row">
        Aseguradora:
    </div>
    <div class="row">
        Sucursal:
    </div>
    
 
    <!--<div class="row">
        <?php //echo CHtml::activeLabel($model,'username'); ?>
        <?php //echo CHtml::activeTextField($model,'username') ?>
    </div>
 
    <div class="row">
        <?php //echo CHtml::activeLabel($model,'password'); ?>
        <?php //echo CHtml::activePasswordField($model,'password') ?>
    </div>
 
    <div class="row rememberMe">
        <?php //echo CHtml::activeCheckBox($model,'rememberMe'); ?>
        <?php //echo CHtml::activeLabel($model,'rememberMe'); ?>
    </div>-->
 
    <div class="row submit">
        <?php echo CHtml::submitButton('Modificar'); ?>
        <?php echo CHtml::submitButton('Cancelar'); ?>
    </div>
 
<?php echo CHtml::endForm(); ?>
</div><!-- form -->

