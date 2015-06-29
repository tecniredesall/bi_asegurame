<?php

/**
 * This is the model class for table "User".
 *
 * The followings are the available columns in table 'User':
 * @property integer $id
 * @property string $username
 * @property string $password
 * @property string $email
 */
class Reportes extends CActiveRecord
{
	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'Reportes';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array();
	}

	/**
	 * @return array relational rules.
	 */
	public function relations()
	{
		// NOTE: you may need to adjust the relation name and the related
		// class name for the relations automatically generated below.
		return array(
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array();
	}


        
        public function grap1($inicio='now()',$fin="now()")
        {
            if($inicio!="now()")
            {
                $inicio="STR_TO_DATE('".$inicio."', '%d/%m/%Y')";
            }
            if($fin!="now()")
            {
                $fin="STR_TO_DATE('".$fin."', '%d/%m/%Y')";
            }
            
           $sql="SELECT * FROM maquilap_asegurame.cnt_cotiz_aseg_total where aseguradora=2 and fechaactual 
between $inicio and $fin";
           $connection=Yii::app()->db; 
           $command=$connection->createCommand($sql);
           $dataReader=$command->query(); 
           return $dataReader;
        }
        
        public function status()
        {
            
           $sql="select fn_cnt_cotiz(count(*)) as cnt,estatus from rep_vst_coti_amplia 
where fechaactual between '2015-02-25' and '2015-02-28'
group by estatus";
           $connection=Yii::app()->db; 
           $command=$connection->createCommand($sql);
           //$rowCount=$command->execute(); // execute the non-query SQL
           $dataReader=$command->query(); // execute a query SQL
           return $dataReader;
        }
        
        public function fechas($tipo=0)
        {
            if($tipo==1)
            {
                //inicio de semana
                $sql="select  DATE_FORMAT(DATE_SUB(CURDATE(), INTERVAL WEEKDAY(CURDATE()) DAY),'%d/%m/%Y') as date";
            }else
            if($tipo==2)
            {
                //fin de semana
                $sql="select  DATE_FORMAT(STR_TO_DATE(CONCAT(YEAR(CURDATE()),'-',MONTH(CURDATE()),'-',1),'%Y-%m-%d'),'%d/%m/%Y') as date";
            }
            
            if($tipo!=0)
            {
                $connection=Yii::app()->db; 
                $command=$connection->createCommand($sql);
                $dataReader=$command->query();
                $fecha=date('d/m/Y');
                
                while(($row=$dataReader->read())!==false) 
                {
                    $fecha=$row['date'];
                }
            }
            return $fecha;
            
            
        }
        
        
        public function vehiculo($inicio='now()',$fin="now()")
        {
            if($inicio!="now()")
            {
                $inicio="STR_TO_DATE('".$inicio."', '%d/%m/%Y')";
            }
            if($fin!="now()")
            {
                $fin="STR_TO_DATE('".$fin."', '%d/%m/%Y')";
            }
            
           $sql="SELECT sum(cnt) as cnt ,marca,fn_marca(marca) as desc_marca,modelo,fn_modelo(modelo) as desc_modelo,ano_veh FROM maquilap_asegurame.cnt_cotiz_tipo_auto 
where fechaactual between $inicio and $fin
group by marca,modelo,ano_veh 
limit 0,10";
           
           
           $connection=Yii::app()->db; 
           $command=$connection->createCommand($sql);
           $dataReader=$command->query(); // execute a query SQL
           return $dataReader;
        }
        
        public function mapVzla($inicio='now()',$fin="now()")
        {
            if($inicio!="now()")
            {
                $inicio="STR_TO_DATE('".$inicio."', '%d/%m/%Y')";
            }
            if($fin!="now()")
            {
                $fin="STR_TO_DATE('".$fin."', '%d/%m/%Y')";
            }
           $sql="SELECT ctz.estado_cliente,map.estados_nombre,map.keys_map as 'hc-key',sum(ctz.cnt) as 'value' FROM maquilap_asegurame.cnt_cotiz_aseg_estado as ctz
INNER JOIN rep_mapvzla as map on ctz.estado_cliente=map.estados_id
where ctz.fechaactual between $inicio and $fin
group by ctz.estado_cliente,map.keys_map";
           $connection=Yii::app()->db; 
           $command=$connection->createCommand($sql);           
           $dataReader=$command->query(); 
           return $dataReader;
        }
        
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}
}