<?php

/**
 * This is the model base class for the table "usuario".
 * DO NOT MODIFY THIS FILE! It is automatically generated by giix.
 * If any changes are necessary, you must set or override the required
 * property or method in class "Usuario".
 *
 * Columns in table "usuario" available as properties of the model,
 * followed by relations of table "usuario" available as properties of the model.
 *
 * @property integer $idUSUARIO
 * @property integer $ROL_idROL
 * @property integer $ESTATUS_idESTATUS
 * @property string $email
 * @property string $telefono
 * @property string $nombres
 * @property string $clave
 * @property string $creado
 * @property string $ultimo_acceso
 * @property integer $CLIENTE_idCLIENTE
 *
 * @property Cliente $cLIENTEIdCLIENTE
 * @property Estatus $eSTATUSIdESTATUS
 * @property Rol $rOLIdROL
 */
abstract class BaseUsuario extends GxActiveRecord {

	public static function model($className=__CLASS__) {
		return parent::model($className);
	}

	public function tableName() {
		return 'usuario';
	}

	public static function label($n = 1) {
		return Yii::t('app', 'Usuario|Usuarios', $n);
	}

	public static function representingColumn() {
		return 'clave';
	}

	public function rules() {
		return array(
			array('ROL_idROL, ESTATUS_idESTATUS, clave, creado, ultimo_acceso, CLIENTE_idCLIENTE', 'required'),
			array('ROL_idROL, ESTATUS_idESTATUS, CLIENTE_idCLIENTE', 'numerical', 'integerOnly'=>true),
			array('email, nombres', 'length', 'max'=>200),
			array('telefono', 'length', 'max'=>45),
			array('clave', 'length', 'max'=>32),
			array('email, telefono, nombres', 'default', 'setOnEmpty' => true, 'value' => null),
			array('idUSUARIO, ROL_idROL, ESTATUS_idESTATUS, email, telefono, nombres, clave, creado, ultimo_acceso, CLIENTE_idCLIENTE', 'safe', 'on'=>'search'),
		);
	}

	public function relations() {
		return array(
			'cLIENTEIdCLIENTE' => array(self::BELONGS_TO, 'Cliente', 'CLIENTE_idCLIENTE'),
			'eSTATUSIdESTATUS' => array(self::BELONGS_TO, 'Estatus', 'ESTATUS_idESTATUS'),
			'rOLIdROL' => array(self::BELONGS_TO, 'Rol', 'ROL_idROL'),
		);
	}

	public function pivotModels() {
		return array(
		);
	}

	public function attributeLabels() {
		return array(
			'idUSUARIO' => Yii::t('app', 'Id Usuario'),
			'ROL_idROL' => null,
			'ESTATUS_idESTATUS' => null,
			'email' => Yii::t('app', 'Email'),
			'telefono' => Yii::t('app', 'Telefono'),
			'nombres' => Yii::t('app', 'Nombres'),
			'clave' => Yii::t('app', 'Clave'),
			'creado' => Yii::t('app', 'Creado'),
			'ultimo_acceso' => Yii::t('app', 'Ultimo Acceso'),
			'CLIENTE_idCLIENTE' => null,
			'cLIENTEIdCLIENTE' => null,
			'eSTATUSIdESTATUS' => null,
			'rOLIdROL' => null,
		);
	}

	public function search() {
		$criteria = new CDbCriteria;

		$criteria->compare('idUSUARIO', $this->idUSUARIO);
		$criteria->compare('ROL_idROL', $this->ROL_idROL);
		$criteria->compare('ESTATUS_idESTATUS', $this->ESTATUS_idESTATUS);
		$criteria->compare('email', $this->email, true);
		$criteria->compare('telefono', $this->telefono, true);
		$criteria->compare('nombres', $this->nombres, true);
		$criteria->compare('clave', $this->clave, true);
		$criteria->compare('creado', $this->creado, true);
		$criteria->compare('ultimo_acceso', $this->ultimo_acceso, true);
		$criteria->compare('CLIENTE_idCLIENTE', $this->CLIENTE_idCLIENTE);

		return new CActiveDataProvider($this, array(
			'criteria' => $criteria,
		));
	}
}