<?php

// uncomment the following to define a path alias

// Yii::setPathOfAlias('local','path/to/local-folder');

// This is the main Web application configuration. Any writable

// CWebApplication properties can be configured here.
return array (
		'timeZone' => 'America/Caracas',
		'basePath' => dirname ( __FILE__ ) . DIRECTORY_SEPARATOR . '..',
		
		'name' => 'BI Asegurame123',
		
		// preloading 'log' component
		
		'preload' => array (
				'log' 
		),
		
		// autoloading model and component classes
		
		'import' => array (
				
				'application.models.*',
				
				'application.components.*',
				
				'application.helpers.*',
				'ext.giix-components.*' 
		), // giix components
		
		'modules' => array (
				
				// uncomment the following to enable the Gii tool
				
				'gii' => array (
						
						'class' => 'system.gii.GiiModule',
						
						'password' => 'fhidalgo',
						
						// If removed, Gii defaults to localhost only. Edit carefully to taste.
						
						'ipFilters' => array (
								'127.0.0.1',
								'::1' 
						),
						'generatorPaths' => array (
								'ext.giix-core' 
						) 
				) // giix generators

				 
		)
		,
		
		'sourceLanguage' => '00',
		'language' => 'es',
		
		// application components
		
		'components' => array (
				
				'user' => array (
						
						// enable cookie-based authentication
						
						'allowAutoLogin' => true 
				),
				
				// uncomment the following to enable URLs in path-format
				
				
				  'urlManager'=>array(
				 
				  'urlFormat'=>'path',
				 
				  'rules'=>array(
				 
				  '<controller:\w+>/<id:\d+>'=>'<controller>/view',
				 
				  '<controller:\w+>/<action:\w+>/<id:\d+>'=>'<controller>/<action>',
				 
				  '<controller:\w+>/<action:\w+>'=>'<controller>/<action>',
				 
				  ),
				 
				  ),
				 
				 
				
				// uncomment the following to use a MySQL database
				
// 				'db' => array (
						
// 						'connectionString' => 'mysql:host=localhost;dbname=maquilap_asegurame',
						
// 						'emulatePrepare' => true,
						
// 						'username' => 'root',
						
// 						'password' => '',
						
// 						'charset' => 'utf8' 
// 				),
				
				'db'=>array(
						'connectionString' => 'mysql:host=72.167.178.152;dbname=maquilap_asegurame',
						'emulatePrepare' => true,
						'username' => 'maquilap_asegura',
						'password' => 'asegurame123',
						'charset' => 'utf8',
				),
				
				'errorHandler' => array (
						
						// use 'site/error' action to display errors
						
						'errorAction' => 'site/error' 
				),
				
				'log' => array (
						
						'class' => 'CLogRouter',
						
						'routes' => array (
								
								array (
										
										'class' => 'CFileLogRoute',
										
										'levels' => 'error, warning,trace,info' 
								),
// 								array (
// 										'class' => 'CWebLogRoute' ,
// 										'levels' => 'error, warning,trace,info'
// 								) 
						)
						 
				)
				// uncomment the following to show log messages on web pages
				/*
				 *
				 * array(
				 *
				 * 'class'=>'CWebLogRoute',
				 *
				 * ),
				 *
				 */
				
				 
		)
		,
		
		// application-level parameters that can be accessed
		
		// using Yii::app()->params['paramName']
		
		'params' => array (
				
				// this is used in contact page
				
				'adminEmail' => 'adelrosario@consultec-ti.com' 
		) 
)
;