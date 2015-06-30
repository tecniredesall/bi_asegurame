<?php

class DatosPersonalesController extends Controller
{
    
	public function actionIndex()
	{
                //$model=new DatosPersonales();
		$this->render('index',array("data"=>array()));
	}
        
        
        public function beforeAction($action) {
            if(parent::beforeAction($action) ) {
                /* @var $cs CClientScript */
                //$cs = Yii::app()->clientScript;
                /* @var $theme CTheme */
                //$cs->registerScriptFile( Yii::app()->request->baseUrl . '/js/Chart.js-master/Chart.js');
                return true;
            }
            return false;
        }

}