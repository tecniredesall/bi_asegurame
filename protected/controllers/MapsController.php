<?php

class MapsController extends Controller
{
    
	public function actionIndex()
	{
                $inicio='01/01/2015';
                $fin=date('d/m/Y');
                $model=new Reportes();
                $data=$model->mapVzla($inicio,$fin);   
		$this->render('index',array("data"=>$data,'model'=>$model,'inicio'=>$inicio,'fin'=>$fin));
	}
        
        public function actionMapVzlaDia()
	{
            
                $model=new Reportes();
                $inicio=date('d/m/Y');
                $fin=date('d/m/Y');
                $data=$model->mapVzla($inicio,$fin);   
		$this->render('index',array("data"=>$data,'model'=>$model,'inicio'=>$inicio,'fin'=>$fin));
	}
        public function actionMapVzlaSemana()
	{
            
                $model=new Reportes();
                $inicio=$model->fechas(1);
                $fin=date('d/m/Y');
                $data=$model->mapVzla($inicio,$fin);   
		$this->render('index',array("data"=>$data,'model'=>$model,'inicio'=>$inicio,'fin'=>$fin));
	}
        public function actionMapVzlaMes()
	{
            
                $model=new Reportes();
                $inicio=$model->fechas(2);
                $fin=date('d/m/Y');
                $data=$model->mapVzla($inicio,$fin);   
		$this->render('index',array("data"=>$data,'model'=>$model,'inicio'=>$inicio,'fin'=>$fin));
	}
        
        public function actionMapVzlaParametros()
        {
            
                if(!isset($_POST['fechainicio']) || !isset($_POST['fechafin']))
                {
                $this->redirect(Yii::app()->createUrl('Maps/index'));
                }
                $inicio=$_POST['fechainicio'];
                $fin=$_POST['fechafin'];
                $model=new Reportes();
                $data=$model->mapVzla($inicio,$fin);   
		$this->render('index',array("data"=>$data,'model'=>$model,'inicio'=>$inicio,'fin'=>$fin));
        }
        
        public function beforeAction($action) {
            if(parent::beforeAction($action) ) {
                /* @var $cs CClientScript */
                $cs = Yii::app()->clientScript;
                /* @var $theme CTheme */
                $cs->registerScriptFile( Yii::app()->request->baseUrl . '/js/highmaps/highmaps.js' );
                $cs->registerScriptFile( Yii::app()->request->baseUrl . '/js/highmaps/exporting.js' );
                $cs->registerScriptFile( Yii::app()->request->baseUrl . '/js/highmaps/maps/ve-all.js' );
                return true;
            }
            return false;
        }
}