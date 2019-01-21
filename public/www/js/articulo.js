class Articulo{
    constructor(local){
        this.cantidad = 1;
        this.local = local;
    }

    addUnit(){
        this.cantidad++;
    }

    deleteUnit(){
        this.cantidad--;
    }
}