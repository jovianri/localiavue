<?php

    define('DS', '/');
    define("ROOT", "C:/xampp/htdocs/vueTest/localiavue/public/www/php");
    define("ROOT1", $_SERVER['DOCUMENT_ROOT']);

    return array(
        "site" => array(
            "name" => "localia.com",
            "title"  => "LOCALIA",
            "coreMVC" => ROOT . DS . "core" . DS . "MVC" . DS,
            "configs" => ROOT . DS . "configs" . DS,
            "resources" => ROOT . DS . "app" . DS . "resources" . DS, 
        )
    );