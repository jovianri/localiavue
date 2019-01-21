<?php

use core\MVC\Resource as Resource;

class CiudadesResource extends Resource {

    public function getAllAction() {
        $this->sql = 'SELECT * FROM ciudades';
        $this->execSQL();
        $this->setData();
    }
    
}