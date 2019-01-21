<?php

use core\MVC\Resource as Resource;

class LocalesResource extends Resource {
    //protected $id = 'Nombre';

    public function getAllAction() {
        $this->sql = 'SELECT * FROM locales  ';
        $this->execSQL();
        $this->setData();
    }

    public function getConFotoAction() {
        $this->sql = 
            'SELECT l.* , lf.nombreImg, c.nombre as ciudad
             FROM locales l 
             INNER JOIN locales_fotos lf INNER JOIN ciudades c 
             ON lf.idLocal = l.id AND l.idCiudad = c.id
             GROUP BY l.nombre 
             ORDER BY l.id';
        $this->execSQL();
        $this->setData();
    }

    public function getByIdAction() {
        $id = $this->controller->getParam('id');
        $this->sql = 'SELECT * FROM locales WHERE id = :id';
        $params = array(
            'id' => $id,
        );
        $this->execSQL($params);
        $this->setData();
    }
    
    public function getByCiudadAction() {
        $ciudad = $this->controller->getParam('ciudad');
        $this->sql = 'SELECT l.* FROM locales as l INNER JOIN ciudades as c ON l.idCiudad = c.id WHERE c.nombre = :ciudad';
        $params = array(
            'ciudad' => $ciudad,
        );
        $this->execSQL($params);
        $this->setData();
    }

    public function getByCategoriaAction() {
        $categoria = $this->controller->getParam('categoria');
        $this->sql = 'SELECT l.* FROM locales as l INNER JOIN categorias as c ON l.idCategoria = c.id WHERE c.nombre = :categoria';
        $params = array(
            'categoria' => $categoria,
        );
        $this->execSQL($params);
        $this->setData();
    }
    
    public function getByCiudadAndPrecioAction() {
        $ciudad = $this->controller->getParam('ciudad');
        $precio = (int)$this->controller->getParam('precio');

        $this->sql = 'SELECT l.* FROM locales as l INNER JOIN ciudades as c WHERE c.nombre = :ciudad AND l.precio >= :precio';
        $params = array(
            'ciudad' => $ciudad,
            'precio' => $precio
        );
        $this->execSQL($params);
        $this->setData();
    }
}