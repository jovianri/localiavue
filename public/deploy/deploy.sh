#!/bin/bash

RUTA_CSS=./www/css/style.css
RUTA_SCSS=./www/scss/style.scss

#tsc

node-sass $RUTA_SCSS $RUTA_CSS;
