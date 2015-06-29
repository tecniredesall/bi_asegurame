<?php
$data=CJavaScript::jsonEncode($data);  
$cs=Yii::app()->clientScript;
                $cs->registerScript(
                    'dataJson',
                    '   var data='.$data.';
                        $(document).data("dataJson",data);
                    ',
                    CClientScript::POS_BEGIN
                  );
?>