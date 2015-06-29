<?php

/**
 * This is the model base class for the table "cliente".
 * DO NOT MODIFY THIS FILE! It is automatically generated by giix.
 * If any changes are necessary, you must set or override the required
 * property or method in class "Cliente".
 *
 * Columns in table "cliente" available as properties of the model,
 * followed by relations of table "cliente" available as properties of the model.
 *
 * @property integer $idCLIENTE
 * @property string $nombre
 * @property string $rif
 * @property integer $ESTATUS_idESTATUS
 * @property string $direccion
 *
 * @property Estatus $eSTATUSIdESTATUS
 * @property Usuario[] $usuarios
 */
abstract class BaseCliente extends GxActiveRecord {

	public static function model($className=__CLASS__) {
		return parent::model($className);
	}

	public function tableName() {
		return 'cliente';
	}

	public static function label($n = 1) {
		return Yii::t('app', 'Cliente|Clientes', $n);
	}

	public static function representingColumn() {
		return 'nombre';
	}

	public function rules() {
		return array(
			array('nombre, ESTATUS_idESTATUS', 'required'),
			array('ESTATUS_idESTATUS', 'numerical', 'integerOnly'=>true),
			array('nombre, rif, direccion', 'length', 'max'=>45),
			array('rif, direccion', 'default', 'setOnEmpty' => true, 'value' => null),
			array('idCLIENTE, nombre, rif, ESTATUS_idESTATUS, direccion', 'safe', 'on'=>'search'),
		);
	}

	public function relations() {
		return array(
			'eSTATUSIdESTATUS' => array(self::BELONGS_TO, 'Estatus', 'ESTATUS_idESTATUS'),
			'usuarios' => array(self::HAS_MANY, 'Usuario', 'CLIENTE_idCLIENTE'),
		);
	}

	public function pivotModels() {
		return array(
		);
	}

	public function attributeLabels() {
		return array(
			'idCLIENTE' => Yii::t('app', 'Id Cliente'),
			'nombre' => Yii::t('app', 'Nombre'),
			'rif' => Yii::t('app', 'Rif'),
			'ESTATUS_idESTATUS' => null,
			'direccion' => Yii::t('app', 'Direccion'),
			'eSTATUSIdESTATUS' => null,
			'usuarios' => null,
		);
	}

	public function search() {
		$criteria = new CDbCriteria;

		$criteria->compare('idCLIENTE', $this->idCLIENTE);
		$criteria->compare('nombre', $this->nombre, true);
		$criteria->compare('rif', $this->rif, true);
		$criteria->compare('ESTATUS_idESTATUS', $this->ESTATUS_idESTATUS);
		$criteria->compare('direccion', $this->direccion, true);

		return new CActiveDataProvider($this, array(
			'criteria' => $criteria,
		));
	}
}