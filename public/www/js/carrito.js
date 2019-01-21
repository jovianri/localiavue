class Carrito{
    constructor(id, cliente, locales = []){
        this.id = id;
        this.cliente = cliente; // customer id
        this.locales = locales; // array with a product and its quantity:: contains Arrays composed of [quantity, local]
    }

    addProduct(local){ // returns true or false if local arrived

        let estaPresente = false;

        try{

            if(local != null){

                let articulo = new Articulo(local);

                this.locales.filter(articuloGuardado => {
                    if(articuloGuardado.local.id == local.id){ // si ya está, sólo añade unidades.

                        articuloGuardado.addUnit();
                        estaPresente = true;
                    } 
                })

                if(!estaPresente){ // si no está, lo añade
                    this.locales.push(articulo);
                }
            
                return articulo;

            } else {
                throw new Error("Esto no es un local");
            }


        } catch(e){
            console.log(e.message);
        }

        
        
    }

    // Getters

    getLocales(){
        console.log(this.locales);
    }

    getLocalesByCity(idCity){
        return this.locales.filter( local => local.idCiudad == idCity );
    }

    getLocalesByCategoria(idCategoria){
        return this.locales.filter( local => local.idCategoria == idCategoria);
    }

}