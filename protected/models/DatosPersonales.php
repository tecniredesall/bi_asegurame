<?php

/**
 * This is the model class for table "detallemenu".
 *
 * The followings are the available columns in table 'detallemenu':
 * @property integer $id
 * @property integer $idplantilla
 * @property integer $idmenu
 * @property integer $minmenu
 * @property integer $maxmenu
 * @property integer $inimenu
 * @property integer $botonini
 *
 * The followings are the available model relations:
 * @property Plantillas $idplantilla0
 */
class DatosPersonales extends CActiveRecord
{
	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'detallemenu';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('idplantilla, idmenu, minmenu, maxmenu, inimenu, botonini', 'numerical', 'integerOnly'=>true),
			// The following rule is used by search().
			// @todo Please remove those attributes that should not be searched.
			array('id, idplantilla, idmenu, minmenu, maxmenu, inimenu, botonini', 'safe', 'on'=>'search'),
		);
	}

	/**
	 * @return array relational rules.
	 */
	public function relations()
	{
		// NOTE: you may need to adjust the relation name and the related
		// class name for the relations automatically generated below.
		return array(
			'idplantilla0' => array(self::BELONGS_TO, 'Plantillas', 'idplantilla'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'id' => 'ID',
			'idplantilla' => 'Idplantilla',
			'idmenu' => 'Idmenu',
			'minmenu' => 'Minmenu',
			'maxmenu' => 'Maxmenu',
			'inimenu' => 'Inimenu',
			'botonini' => 'Botonini',
		);
	}

	/**
	 * Retrieves a list of models based on the current search/filter conditions.
	 *
	 * Typical usecase:
	 * - Initialize the model fields with values from filter form.
	 * - Execute this method to get CActiveDataProvider instance which will filter
	 * models according to data in model fields.
	 * - Pass data provider to CGridView, CListView or any similar widget.
	 *
	 * @return CActiveDataProvider the data provider that can return the models
	 * based on the search/filter conditions.
	 */
	public function search()
	{
		// @todo Please modify the following code to remove attributes that should not be searched.

		$criteria=new CDbCriteria;

		$criteria->compare('id',$this->id);
		$criteria->compare('idplantilla',$this->idplantilla);
		$criteria->compare('idmenu',$this->idmenu);
		$criteria->compare('minmenu',$this->minmenu);
		$criteria->compare('maxmenu',$this->maxmenu);
		$criteria->compare('inimenu',$this->inimenu);
		$criteria->compare('botonini',$this->botonini);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}

	/**
	 * Returns the static model of the specified AR class.
	 * Please note that you should have this exact method in all your CActiveRecord descendants!
	 * @param string $className active record class name.
	 * @return Detallemenu the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}
}
