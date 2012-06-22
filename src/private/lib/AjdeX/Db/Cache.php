<?php

class AjdeX_Db_Cache extends Ajde_Object_Singleton
{
	protected $_cache = null;
	
	/**
	 * @return AjdeX_Db_Cache
	 */
	public static function getInstance()
	{
    	static $instance;
    	return $instance === null ? $instance = new self : $instance;
	}	
}