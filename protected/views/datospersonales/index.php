<?php
                $cs0 = Yii::app()->clientScript;
                //$cs0->registerScriptFile(Yii::app()->request->baseUrl . '/js/highcharts/highcharts.js');
                //$cs0->registerScriptFile(Yii::app()->request->baseUrl . '/js/highcharts/exporting.js');
                //$cs0->registerScriptFile(Yii::app()->request->baseUrl . '/js/controllers/presentacion1/view/vehiculo.js',CClientScript::POS_END);
?>

<div class="form">
<?php echo CHtml::beginForm(); ?>
 
   
    <div class="tableForm" style="padding-top: 100px">
            <table cellspacing="8" border="0" width="100%">
            <tbody>
                    <tr>
                        <td width="100%"><b>Usuario:</b></td>
                    </tr>
                    <tr>
                        <td><input type="text" placeholder="usuario" class="text"></td>
                    </tr>                                
                    <tr>
                        <td width="100%"><b>E-Mail:</b></td>
                    </tr>
                    <tr>
                        <td><input type="text" placeholder="Correo Electrónico" class="text"></td>
                    </tr>     
                    <tr>
                        <td width="100%"><b>Nombre:</b></td>
                    </tr>
                    <tr>
                        <td><input type="text" placeholder="Nombre" class="text"></td>
                    </tr>     
                    <tr>
                        <td width="100%"><b>Aseguradora:</b></td>
                    </tr>
                    <tr>
                        <td><input type="text" placeholder="Aseguradora" class="text"></td>
                    </tr>     
                    <tr>
                        <td width="100%"><b>Sucursal:</b></td>
                    </tr>
                    <tr>
                        <td><input type="text" placeholder="Sucursal" class="text"></td>
                    </tr>     
                    
            </tbody>
            </table>
        </div>
 
<?php echo CHtml::endForm(); ?>
</div><!-- form -->

