<script>
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
</script>