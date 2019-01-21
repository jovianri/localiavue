
// Coger id de cliente, si no está registrado, null.
let carrito = new Carrito(1, 1); // Guardar en cookie a traves de JS
let repo = new Repository();
let locals = []; // data for whole app


let myVue = new Vue({

    el: 'main',
    data: {
        ciudad: null

    },

    mounted() { // mounted method executes its code before loading the page
        this.init();
    },

    methods: {

        init() {
            this.getAllLocals();
            this.mostrarImagenes();
        },

        getAllLocals() {
            repo.peticionAjax('locales', this.conserveAll);

        },

        conserveAll(datos) {
            locals = datos;
        },

        mostrarImagenes() {
            repo.peticionAjax('imagenes', pintarSlider);
        },

        buscar() {
            this.reorganizarPagina();
            this.mostrarFiltros();
            this.mostrarResultados();
            this.mostrarMapa();
        },

        reorganizarPagina() {

            $("#content-container").removeClass('grid--1col').addClass('grid--complex'); // cambia grid
            $(".card").empty(); // vacía slider y ultimos vistos

        },

        mostrarFiltros() {

            repo.peticionAjax('categorias', pintarCategorias);

        },

        mostrarResultados() {

            repo.peticionAjax('locales', pintarLocales);

        },

        mostrarMapa() {

            let contenedorMapa = $('<div class="grid--area3"></div>');
            let mapa = giveMeMap(); // gives JQuery Map Object

            contenedorMapa.append(mapa);
            $('#content-container').append(contenedorMapa);

        },

        showCart() {
            carrito.getLocales();
        }



    }
});


// Vue calls
function pintarCategorias(conexion) {

    let filter = $("<div class='filter collapsible-menu'></div>");

    let check = $('<input type="checkbox" id="menu">');
    let titulo = $('<label for="menu">Categorias</label>');

    let contenido = $("<div class='menu-content'></div>");
    let categorias = $("<ul id='lista3'></ul>");
    contenido.append(categorias);

    conexion.map((categoria) => {
        categoria = $("<li onclick='filterByCategoria(this)'>" + categoria.nombre + "</li>").attr("value", categoria.id);
        categorias.append(categoria);
    })

    filter.append(check);
    filter.append(titulo);
    filter.append(contenido);

    $("#cardOne").html(filter);
}

function pintarLocales(conexion) {

    for (var i in conexion) {
        conexion[i].nombreImg = "www/images/" + conexion[i].nombreImg;
    }

    console.log(conexion);

    Vue.component('lista-local', {
        data: {
        },
        data: function () {
            return {
                todos: conexion
            }
        },
        template: '\
        <ul class="list">\
        <li class="list__item" v-for="todo in todos">\
            <div class="product-item" :id="todo.id">\
                <div class="product-item__image"><img :src="todo.nombreImg"></div>\
                <div class="product-item__content">\
                    <div class="product-item__title">{{ todo.nombre }}</div>\
                    <div class="product-item__text">{{ todo.ciudad }}</div>\
                    <button class="btn btn--block product-item__btn hvr-sweep-to-top"\
                        onclick="addToCart(this)">alquilame - {{ todo.precio }}</button>\
                    <button type="button" class="btn btn--block product-item__btn"\
                        data-toggle="modal" data-target="#modalVistaRapida" onclick="cargarDatosModal(this)">Vista\
                        rápida</button>\
                </div>\
            </div>\
        </li>\
    </ul>\
    '
    }
    );

    new Vue({ el: '#app' })

}

function pintarSlider(datos) {

    datos.map((foto) => {


        let index = foto.nombre.charAt((foto.nombre.indexOf(".") - 1));

        $(".fade-carousel").css("background-image", "url('./www/images/" + foto.nombre + "')");
        $(".slides").css("background-image", "url('./www/images/" + foto.nombre + "')");
        $(".slide-" + index).css("background-image", "url('./www/images/" + foto.nombre + "')");

    });

}
//----------



// Modal
function cargarDatosModal(boton) {
    console.log(boton);
    let articulo = boton.parentNode.parentNode;
    let datosArticulo = locals.filter(local => { if (local.id == articulo.id) { return local; } })[0];

    console.log(datosArticulo);
    let modal = $("#modalVistaRapida");
    modal.find(".modal-title").html(datosArticulo.nombre);
    modal.find(".modal-body").html(datosArticulo.direccion + "<br>" + datosArticulo.precio);

}
//---------



// Filter
function filterByCategoria(filtro) {

    let filtroJQuery = $(filtro); // JS DOM to JQuery Object

    let idCategoria = filtroJQuery.attr('value');
    let filtradosMostrar = locals.filter(function (local) {
        if (local.idCategoria == idCategoria) {
            return local;
        }
    });

    $("#cardTwo").empty();
    pintarLocales(filtradosMostrar);

    // debería usarse pintarLocales
}
//--------


// Slider & SearchBar Effect
$(document).ready(() => {

    $('#ciudadBuscar').focus(function () {
        $(this).animate({ width: '50%' }, 300)
    }).blur(function () {
        $(this).animate({ width: '30%' }, 300)
    });

});
//--------


// Shopping cart
function addToCart(boton) {

    let botonJquery = $(boton); // cast JS DOM to JQuery

    let value = botonJquery.parent()
        .parent()
        .attr("id");

    let datosCoincidentes = locals.filter(local => { if (local.id == value) { return local } })[0];

    let localEscogido = new Local(datosCoincidentes);
    carrito.addProduct(localEscogido);
}
//-------


// Iframe Google Maps
function giveMeMap() {
    let mapa = $('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197294.47341345454!2d-0.5015975323079606!3d39.40770124964933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f4cf0efb06f%3A0xb4a351011f7f1d39!2sValencia!5e0!3m2!1ses!2ses!4v1545241021804" width="500" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>');
    return mapa;
}
//-------


//Collapsible
function docollapsible() {

    let desplegable = $("#collapsible");
    let flexOpciones = $("#submenuDanger");

    // Shows and hides submenu options
    desplegable.toggleClass("menu__item--collapsible");
    // needs animation
}
//-------





// Vue-router

// const prueba = { template:'<h1>Tus muertos</h1>' } ;

// const routes = [
//     { path: '/prueba', component: prueba }
// ]

// const router = new VueRouter({
//     routes
// });
// ------------------------

// let otherVue = new Vue({

//     router,
//     el: 'prueba'
// });

