


<div class="form">
    
    <?php $form = $this->beginWidget('CActiveForm', array(
    'id'=>'user-form',
    'enableAjaxValidation'=>true,
    'enableClientValidation'=>true,
    'focus'=>array($model,'firstName'),
    'method'=>'post'
)); ?>
    
	
<?php $this->endWidget(); ?>
    
</div>



<style>  
    .prin_div_content
    {
        padding-left: 30px;
        padding-right:30px;
        padding-top: 20px;
        padding-bottom:20px;
        min-height: 300px;
    }
    
</style>
<br/>
<div class="prin_div_content">
    <a target="_blank" href="<?php echo Yii::app()->request->baseUrl; ?>/index.php/presentacion1/tasasvehiculos"><img src="<?php echo Yii::app()->request->baseUrl; ?>/images/principalesmodelos.png" width="850" height="500"/></a>
</div>