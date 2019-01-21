<?php

use core\MVC\Resource as Resource;

class ImagenesResource extends Resource {

    public function getAllAction() {
        $this->sql = 'SELECT * FROM imagenes';
        $this->execSQL();
        $this->setData();
    }
    
}