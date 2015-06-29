<?php 

$cs = Yii::app()->clientScript;
$cs->scriptMap = array(
'jquery.js' => Yii::app()->request->baseUrl.'/js/jquery/jquery-2.1.3.js',
'jquery.min.js' => Yii::app()->request->baseUrl.'/js/jquery-2.1.3.min.js',
);

$cs->registerCoreScript('jquery');
$cs->registerScriptFile( Yii::app()->request->baseUrl . '/js/jquery/plugins/DataTables-1.10.3/media/js/jquery.dataTables.min.js');
$cs->registerCssFile(Yii::app()->request->baseUrl . '/js/jquery/plugins/DataTables-1.10.3/media/css/demo_table_jui.css');
$cs->registerCssFile(Yii::app()->request->baseUrl . '/js/jquery-ui-themes-1.11.2/themes/smoothness/theme.css');
$cs->registerCssFile(Yii::app()->request->baseUrl . '/js/jquery-ui-themes-1.11.2/themes/smoothness/jquery-ui.css');
//$cs->registerCoreScript('jquery.ui');
/* @var $this Controller */ ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="language" content="en" />

	<!-- blueprint CSS framework -->
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/screen.css" media="screen, projection" />
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/print.css" media="print" />
	
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/main.css" />
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/form.css" />
	<title><?php echo CHtml::encode($this->pageTitle); ?></title>
</head>

<body>

<div class="container" id="page">

	<div id="header">
		<div id="logo"><?php echo CHtml::encode(Yii::app()->name); ?></div>
	</div><!-- header -->

	
	<?php if(isset($this->breadcrumbs)):?>
		<?php $this->widget('zii.widgets.CBreadcrumbs', array(
			'links'=>$this->breadcrumbs,
		)); ?><!-- breadcrumbs -->
	<?php endif?>

	<?php echo $content; ?>

	<div class="clear"></div>

	<div id="footer">
		Copyright &copy; <?php echo date('Y'); ?> by My Company.<br/>
		All Rights Reserved.<br/>
		<?php echo Yii::powered(); ?>
	</div><!-- footer -->

</div><!-- page -->

</body>
</html>
