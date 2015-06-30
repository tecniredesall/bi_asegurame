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
                        <td width="100%"><b>Contraseña Actual:</b></td>
                    </tr>
                    <tr>
                        <td><input type="text" placeholder="*****" class="text"></td>
                    </tr>     
                    <tr>
                        <td width="100%"><b>Contraseña Nueva:</b></td>
                    </tr>
                    <tr>
                        <td><input type="text" placeholder="*****" class="text"></td>
                    </tr>     
                    <tr>
                        <td width="100%"><b>Repita Contraseña Nueva:</b></td>
                    </tr>
                    <tr>
                        <td><input type="text" placeholder="*****" class="text"></td>
                    </tr>
                    <tr>
                        <td align="center"><input type="submit" value="Cambiar" name="yt0" class="boton">&nbsp;&nbsp;<input type="reset" value="Cancelar" name="yt0" class="boton"></td>
                    </tr>
            </tbody>
            </table>
        </div>
 
<?php echo CHtml::endForm(); ?>
</div><!-- form -->


