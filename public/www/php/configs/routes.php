<?php


return array(
	"get" => array(
		"locales" => array(
			"route" => "localia/www/php/locales",
			"resource" => "locales",
			"action" => "getConFoto"
		),
		"local" => array(
			"route" => "localia/www/php/locales/id=:id",
			"resource" => "locales",
			"action" => "getById"
		),
		"categorias" => array(
			"route" => "localia/www/php/categorias",
			"resource" => "categorias",
			"action" => "getAll"
		),
		"imagenes" => array(
			"route" => "localia/www/php/imagenes",
			"resource" => "imagenes",
			"action" => "getAll"
		),
		"ciudades" => array(
			"route" => "localia/www/php/ciudades",
			"resource" => "ciudades",
			"action" => "getAll"
		),
		"LocalesPorCiudad" => array(
			"route" => "localia/www/php/locales/ciudad=:ciudad",
			"resource" => "locales",
			"action" => "getByCiudad"
		),
		"LocalesPorCategoria" => array(
			"route" => "localia/www/php/locales/categoria=:categoria",
			"resource" => "locales",
			"action" => "getByCategoria"
		),
		// "LocalesPorCiudadAndPrecio" => array(
		// 	"route" => "localia/www/php/locales/ciudad=:ciudad&precio=:precio",
		// 	"resource" => "locales",
		// 	"action" => "getByCiudadAndPrecio"
		// ),
	)
);


