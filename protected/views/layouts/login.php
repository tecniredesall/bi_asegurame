<!--Desarrollado Por: Kevin Linares-->
<!DOCTYPE html>
<html lang="es"><head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
        <meta charset="utf-8">
        <title>Asegurame 123 | Iniciar Sesi&oacute;n</title>	
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"> 
<link href="<?php echo Yii::app()->request->baseUrl; ?>/css/global.css" rel="stylesheet" type="text/css">
<link href="<?php echo Yii::app()->request->baseUrl; ?>/css/media.css" rel="stylesheet" type="text/css">
<link href="<?php echo Yii::app()->request->baseUrl; ?>/css/botones.css" rel="stylesheet" type="text/css">
<link href="<?php echo Yii::app()->request->baseUrl; ?>/css/bootstrap.css" rel="stylesheet" type="text/css">
<link href="<?php echo Yii::app()->request->baseUrl; ?>/css/magnific-popup.css" rel="stylesheet" type="text/css">
<link href="<?php echo Yii::app()->request->baseUrl; ?>/css/jquery-ui.css" rel="stylesheet" type="text/css">

	
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
?>
	
<script src="<?php echo Yii::app()->request->baseUrl; ?>/js/toogle.js"></script>


</head><body style="">


<div id="fb-root"></div>
    <header id="header" style="position: fixed; margin-bottom: 10px; width: 100%; z-index: 4;">
        <div class="section">
            <figure id="logo">
                            <a href="https://www.asegurame123.com/backoffice/index.php"><img class="imagesLogo" src="<?php echo Yii::app()->request->baseUrl; ?>/images/logo.jpg" height="35" width="335"></a>
                       
			</figure>
            <div class="envolturaCajasHeader">
                <a href="#">
                    <div class="cajaHeader">
                        <figure><img src="<?php echo Yii::app()->request->baseUrl; ?>/images/icon_usuario.jpg" height="31" width="29"></figure>
                        <div>
						
							<p>Ingresa Aqu&iacute;</p><h2>Usuarios Registrados</h2><p>	&iquest;C&oacute;mo Registrarme?</p>                        </div>
                    </div>
                </a>
                 <a href="#">
                    <div class="cajaHeader cajaHeader2">
                        <figure><img src="<?php echo Yii::app()->request->baseUrl; ?>/images/icon_llamar.jpg" width="23" height="36"></figure>
                        <div>
                            <h2>0500-ASEGURA</h2>
                            <h2>0500-2734872</h2>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div class=cajaHeader style="border:none">
                        <div>
                            <h2>&iquest;Necesitas ayuda?</h2>
                            <h2>&iexcl;Te llamamo gratis!</h2>
                        </div>
                    </div>
                </a> 
                
            </div>
            <div class="clear"></div>
            
        </div>
        <hr class="section" style="margin-top: 5px;">
    </header>
    <div class="clear"></div>
			<hr class="section">	 
			<section class="section">
                <div class="envolturaFormLogin">
                    <div class="tituloFormLogin">
                        <h1 style=" border-bottom:none;">Bievenido!</h1>
                        <p>Por favor ingresa tu correo electr&oacute;nico y tu contrase&ntilde;a</p>
                    </div>
                    <?php echo $content;?>
                </div>
            
            </section>
        	<div class="clear"></div>	
        	</body></html>