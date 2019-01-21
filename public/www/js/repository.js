class Repository{
    
    constructor(url = 'http://localhost/localia/www/php/'){
        this.url = url;
    }

    peticionAjax(urlRequested, callback){

        axios.get(this.url + urlRequested)
            .then((response) => {
                let datos = response.data;
                callback(datos);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
                // console.log("There's a problem with axios");
            })
            .then(function () {
                // always executed
                // console.log('Axios request executed');
            });

    }
    
}