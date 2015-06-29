<?php

/**
 * UserIdentity represents the data needed to identity a user.
 * It contains the authentication method that checks if the provided
 * data can identity the user.
 */
class UserIdentity extends CUserIdentity
{
	
	private $_id;
	public function authenticate()
	{
		
		Yii::log("authenticate - UserIdentity");
		
				
		$record = Usuario::model()->findByAttributes(array('email'=>$this->username));
// 		echo "<br>".$record->clave ." - ". md5($this->password);
		Yii::log("RECORD USUARIO");
	
		if($record===null){
			Yii::log("ERROR USUARIO");
			$this->errorCode=self::ERROR_USERNAME_INVALID;
		}
		else if($record->clave !== md5($this->password)){
			
			Yii::log("ERROR CLAVE: " . $record->clave . " - ".md5($this->password));
			$this->errorCode=self::ERROR_PASSWORD_INVALID;
		}
// 		else if($record->estado=="ANULADO"){
// 			Yii::log("ERROR: NOSE");
// 			$this->errorCode=self::ERROR_UNKNOWN_IDENTITY;
// 		}
		else
		{
			Yii::log("SSSi");
		
			$this->_id = $record->idUSUARIO;
			$this->setState('usuario', $record->email);
			$this->setState('nombres', $record->nombres);
			$this->setState('estado', $record->ESTATUS_idESTATUS);
			$this->setState('rol', $record->ROL_idROL);
			$this->setState('ultimo_acceso', $record->ultimo_acceso);
			$record->saveAttributes(array('ultimo_acceso' => date("Y-m-d H:m:s")));

			Yii::log("Usuario id: ".$record->idUSUARIO." -  Autenticado con exito");
				
 			$this->errorCode=self::ERROR_NONE;
		}
		return !$this->errorCode;
		
		
		
		
		
		
		
		
	}
}