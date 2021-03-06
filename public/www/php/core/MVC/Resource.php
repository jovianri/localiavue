<?php
namespace core\MVC;

use core as core;

abstract class Resource {
    //protected $id;
    protected $data;
    protected $db;
    protected $sql;
    protected $controller;

    //public function __construct($id = null) {
    public function __construct() {
            //$this->id = $id;
        $globals = core\Globals::getInstance();
        $this->db = $globals->get('db');
    }

    public function run($action, $controller) {
        $this->controller = $controller;
        $this->$action();
    }

    protected function execSQL($params = null) {
        $ps = $this->db->prepare($this->sql); 
        $ps->execute($params);

        $i = 0;

        foreach ($ps->fetchAll(\PDO::FETCH_ASSOC) as $row) {
            foreach ($row as $key => $value) {
               $this->data[$i][$key] = $value;
            }
            $i++;
        }
    }

    protected function setData(){
        header('Content-Type: application/json; charset=utf-8');
        echo \json_encode($this->data);
    }

    protected function setError($errorCode) {

    }
}