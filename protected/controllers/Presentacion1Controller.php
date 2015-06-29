<?php

class Presentacion1Controller extends Controller
{
    
	public function actionIndex()
	{
                $model=new Reportes();
                //$inicio=date('d/m/Y', strtotime('-7 day'));
                $inicio='25/02/2015';
                //$fin=date('d/m/Y');
                $fin='03/03/2015';
                $data=$model->grap1($inicio,$fin);   
		$this->render('index',array("data"=>$data,'model'=>$model,'inicio'=>$inicio,'fin'=>$fin));
	}
        
         public function actioncntParametros()
        {
            if(!isset($_POST['fechainicio']) || !isset($_POST['fechafin']))
            {
                $this->redirect(Yii::app()->createUrl('Presentacion1/index'));
            }
                $inicio=$_POST['fechainicio'];
                $fin=$_POST['fechafin'];
                $model=new Reportes();
                $data=$model->grap1($inicio,$fin);   
		$this->render('index',array("data"=>$data,'model'=>$model,'inicio'=>$inicio,'fin'=>$fin));
        }
        
        public function actionStatus()
        {
                $model=new Reportes();
                $data=$model->status();
               
		$this->render('status',array("data"=>$data));
        } 
        
        
        public function actionVehiculo()
        {
                $inicio='01/01/2015';
                $fin=date('d/m/Y');
                $model=new Reportes();
                $data=$model->vehiculo($inicio,$fin);   
		$this->render('vehiculo',array("data"=>$data,'model'=>$model,'inicio'=>$inicio,'fin'=>$fin));
        } 
        
        public function actionVehiculoDia()
        {
                $inicio=date('d/m/Y');
                $fin=date('d/m/Y');
                $model=new Reportes('now()','now()');
                $data=$model->vehiculo();   
		$this->render('vehiculo',array("data"=>$data,'model'=>$model,'inicio'=>$inicio,'fin'=>$fin));
                
        }
        
        public function actionVehiculoSemana()
        {
                $model=new Reportes();
                $inicio=$model->fechas(1);
                $fin=date('d/m/Y');
                $data=$model->vehiculo($inicio,$fin);   
		$this->render('vehiculo',array("data"=>$data,'model'=>$model,'inicio'=>$inicio,'fin'=>$fin));
        }
        
        public function actionVehiculoMes()
        {
                $model=new Reportes();
                $inicio=$model->fechas(2);
                $fin=date('d/m/Y');
                $data=$model->vehiculo($inicio,$fin);    
		$this->render('vehiculo',array("data"=>$data,'model'=>$model,'inicio'=>$inicio,'fin'=>$fin));
        }
        
        
        public function actionVehiculoParametros()
        {
            
                if(!isset($_POST['fechainicio']) || !isset($_POST['fechafin']))
                {
                    $this->redirect(Yii::app()->createUrl('Presentacion1/Vehiculo'));
                }
                $inicio=$_POST['fechainicio'];
                $fin=$_POST['fechafin'];
                $model=new Reportes();
                $data=$model->vehiculo($inicio,$fin);   
		$this->render('vehiculo',array("data"=>$data,'model'=>$model,'inicio'=>$inicio,'fin'=>$fin));
        }
        
        public function actionEdadSexo()
        {
            $inicio=$_POST['fechainicio'];
            $fin=$_POST['fechafin'];
            $model=new Reportes();
            $this->render('edadsexo',array("data"=>array("dfs"=>"sdf"),'model'=>$model,'inicio'=>$inicio,'fin'=>$fin));
        }
        
        public function actionTasasVehiculos()
        {
            $inicio=$_POST['fechainicio'];
            $fin=$_POST['fechafin'];
            $model=new Reportes();
            $this->render('tasasvehiculos',array("data"=>array("dfs"=>"sdf"),'model'=>$model,'inicio'=>$inicio,'fin'=>$fin));
        }
        
        public function actionTasasPrimasVehiculos()
        {
            $inicio=$_POST['fechainicio'];
            $fin=$_POST['fechafin'];
            $model=new Reportes();
            $this->render('tasasprimasvehiculos',array("data"=>array("dfs"=>"sdf"),'model'=>$model,'inicio'=>$inicio,'fin'=>$fin));
        }
        
        public function actionPrincipalesmodelos()
        {
            $inicio=$_POST['fechainicio'];
            $fin=$_POST['fechafin'];
            $model=new Reportes();
            $this->render('principalesmodelos',array("data"=>array("dfs"=>"sdf"),'model'=>$model,'inicio'=>$inicio,'fin'=>$fin));
        }
        
        public function actionEstudioModelo()
        {
            $inicio=$_POST['fechainicio'];
            $fin=$_POST['fechafin'];
            $model=new Reportes();
            $this->render('estudiomodelo',array("data"=>array("dfs"=>"sdf"),'model'=>$model,'inicio'=>$inicio,'fin'=>$fin));
        }
        
        public function actionMaxMin()
        {
            $inicio=$_POST['fechainicio'];
            $fin=$_POST['fechafin'];
            $model=new Reportes();
            $this->render('maxmin',array("data"=>array("dfs"=>"sdf"),'model'=>$model,'inicio'=>$inicio,'fin'=>$fin));
        }
        
       
        

        
	public function actionOnlyaseg()
	{
		$this->render('onlyaseg');
	}
        
        
        
        public function beforeAction($action) {
            if(parent::beforeAction($action) ) {
                /* @var $cs CClientScript */
                $cs = Yii::app()->clientScript;
                /* @var $theme CTheme */
                $cs->registerScriptFile( Yii::app()->request->baseUrl . '/js/Chart.js-master/Chart.js');
                return true;
            }
            return false;
        }
        
    
}