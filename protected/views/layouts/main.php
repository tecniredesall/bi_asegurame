<!DOCTYPE html><html lang="es">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta charset="utf-8">
<title>Asegurame 123</title>
<meta name="viewport"	content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
 <?php 	$cs = Yii::app()->clientScript;
        $cs->scriptMap = array('jquery.js' => Yii::app()->request->baseUrl.'/js/jquery/jquery-2.1.3.js','jquery.min.js' => Yii::app()->request->baseUrl.'/js/jquery-2.1.3.min.js',);
        $cs->registerCoreScript('jquery');$cs->registerScriptFile( Yii::app()->request->baseUrl . '/js/jquery/plugins/DataTables-1.10.3/media/js/jquery.dataTables.min.js');
        $cs->registerCssFile(Yii::app()->request->baseUrl . '/js/jquery/plugins/DataTables-1.10.3/media/css/demo_table_jui.css');
        $cs->registerCssFile(Yii::app()->request->baseUrl . '/js/jquery-ui-themes-1.11.2/themes/smoothness/theme.css');
        $cs->registerCssFile(Yii::app()->request->baseUrl . '/js/jquery-ui-themes-1.11.2/themes/smoothness/jquery-ui.css');?>
 <script	src="<?php echo Yii::app()->request->baseUrl; ?>/js/jquery.magnific-popup.min.js"></script>
<link href="<?php echo Yii::app()->request->baseUrl; ?>/css/global.css"	rel="stylesheet" type="text/css">
<link href="<?php echo Yii::app()->request->baseUrl; ?>/css/media.css"	rel="stylesheet" type="text/css">
<link href="<?php echo Yii::app()->request->baseUrl; ?>/css/botones.css" rel="stylesheet" type="text/css">
<link	href="<?php echo Yii::app()->request->baseUrl; ?>/css/bootstrap.css"	rel="stylesheet" type="text/css">
<link	href="<?php echo Yii::app()->request->baseUrl; ?>/css/magnific-popup.css" rel="stylesheet" type="text/css">
<link	href="<?php echo Yii::app()->request->baseUrl; ?>/css/jquery-ui.css"	rel="stylesheet" type="text/css">
<link	href="<?php echo Yii::app()->request->baseUrl; ?>/js/jquery/plugins/DataTables-1.10.3/media/css/demo_table_jui.css"	rel="stylesheet" type="text/css">		
<link	href="<?php echo Yii::app()->request->baseUrl; ?>/js/jquery-ui-themes-1.11.2/themes/smoothness/theme.css"	rel="stylesheet" type="text/css">	
<link	href="<?php echo Yii::app()->request->baseUrl; ?>/js/jquery-ui-themes-1.11.2/themes/smoothness/jquery-ui.css"	rel="stylesheet" type="text/css">	
</head><body >	<div id="comm100-button-3"></div>
<div id="fb-root"></div>	
<header id="header"		style="position: fixed; margin-bottom: 10px; width: 100%; z-index: 4;">
<div class="section"><figure id="logo">
                                                                                                                                                                                                        
<a href="<?php echo Yii::app()->request->baseUrl; ?>">
    <img class="imagesLogo" src="<?php echo Yii::app()->request->baseUrl; ?>/images/logo.jpg" width="335" height="35">
</a>
</figure>
<div class="envolturaCajasHeader">
    <a href="#"> </a>
    <div class="cajaHeader">
        <a href="#"><figure><img src="<?php echo Yii::app()->request->baseUrl; ?>/images/icon_usuario.jpg"	width="29" height="31"></figure></a>
        <div>
            <a href="#"><h2>Bienvenido <?php echo Yii::app()->user->nombres?></h2></a>
            <?php echo CHtml::link('Cerrar Sesi&oacute;n', array('site/logout')); ?>
        </div>
    </div><a href="#"><div class="cajaHeader cajaHeader2"><figure><img src="<?php echo Yii::app()->request->baseUrl; ?>/images/icon_llamar.jpg" width="23" height="36"></figure> <div><h2>0500-ASEGURA</h2><h2>0500-2734872</h2></div></div></a> <a href="#">
    <div class=cajaHeader style="border: none"><div><h2>&iquest;Necesitas ayuda?</h2><h2>&iexcl;Te llamamo gratis!</h2></div></div></a></div>
    <div class="clear"></div>		</div>		<hr class="section" style="margin-top: 5px;">	</header>	<div class="clear"></div>	<hr class="section">	<section class="section">		
<script>function muestramenu(id){if (document.getElementById){ var el = document.getElementById(id); el.style.display = (el.style.display == 'none') ? 'block' : 'none';}}</script>		
<nav id="nav_user">
<div class="cajaNav_user"><div class="tituloNav_user"><img src="<?php echo Yii::app()->request->baseUrl; ?>/images/menu_icon_3.jpg" width="34" height="34">
        <h1> <a onclick="muestramenu(&#39;datos&#39;)">Datos del usuario<img src="<?php echo Yii::app()->request->baseUrl; ?>/images/desplegar.png" style="cursor: pointer; height: 10px; float: right; margin-top: 6px;"></a> </h1> </div>
<div class="clear"></div>
<ul id="datos" style="display: none;">
    <div style="text-align: left; float: left; width: 100%; padding: 0;"> 
        <li><?php echo CHtml::link("Datos Personales",array('Datospersonales/index')) ?></li>
    </div>
    <div style="text-align: left; float: left; width: 100%; padding: 0;">
        <li><a href="#">Cambio de Clave</a></li> 
    </div>
</ul>				
<div class="tituloNav_user"><img src="<?php echo Yii::app()->request->baseUrl; ?>/images/menu_icon_1.jpg" width="34" height="34"> <h1> <a onclick="muestramenu(&#39;misGestiones&#39;)">Reportes <img							src="<?php echo Yii::app()->request->baseUrl; ?>/images/desplegar.png"							style="cursor: pointer; height: 10px; float: right; margin-top: 6px;"></a>					</h1>				</div>				<div class="clear">
</div>
<ul id="misGestiones">
    <li><?php echo CHtml::link("Top 10 Vehiculos",array('presentacion1/vehiculo')) ?></li>
    <li><?php echo CHtml::link("Estatus Cotizaciones",array('presentacion1/status')) ?></li>
    <li><?php echo CHtml::link("Cantidad Cotizaciones",array('presentacion1/index')) ?></li>
    <li><?php echo CHtml::link("Cotizaciones / Pais",array('Maps/index')) ?></li>
    
    <li><?php echo CHtml::link("Modelos Mas Cotizados",array('presentacion1/vehiculo')) ?></li>
    <li><?php echo CHtml::link("Cotizaciones por Edad y Sexo",array('presentacion1/edadsexo')) ?></li>
    <li><?php echo CHtml::link("Distribución geográfica de Cotizaciones",array('Maps/index')) ?></li>
    <li><?php echo CHtml::link("Principales 10 Modelos Cotizados Por Ciudad",array('presentacion1/principalesmodelos')) ?></li>
    <li><?php echo CHtml::link("Estudio por Modelo",array('presentacion1/estudiomodelo')) ?></li>
    <li><?php echo CHtml::link("Grafico Resumen de Tasa Cobertura Amplia",array('presentacion1/MaxMin')) ?></li>
    <li><?php echo CHtml::link("Tabla Resumen de Tasa Cobertura Amplia",array('presentacion1/principalesmodelos')) ?></li>
    <li><?php echo CHtml::link("Ranking 100 Vehículos más cotizados",array('presentacion1/principalesmodelos')) ?></li>
    <li><?php echo CHtml::link("Primas y sumas promedios por mes",array('presentacion1/tasasPrimasVehiculos')) ?></li>
</ul>
<div class="tituloNav_user"> <img src="<?php echo Yii::app()->request->baseUrl; ?>/images/ico_admin.jpg" width="34" height="34">
    <h1>
        <a onclick="muestramenu(&#39;administracion&#39;)">Administraci&oacute;n <img src="<?php echo Yii::app()->request->baseUrl; ?>/images/desplegar.png" style="cursor: pointer; height: 10px; float: right; margin-top: 6px;"></a></h1></div>
<div class="clear"></div>
    <ul id="administracion">
    <li><a href="#">Clientes</a></li>
    <li><a href="#">Usuarios</a></li>
    <li><a href="#">Roles</a></li>
    </ul>
</div>
</nav>
<section class="envolturaContenidoUser">
    <?php echo $content; ?>
</section>	</section>	
<div class="clear">
</div>
</body>
</html>