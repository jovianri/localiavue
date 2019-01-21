Vue.component("local", {
    props: ['listado'],
  
    template:`<div>
                  <h1 v-if="ganador">
                      El ganador es: <span>{{ganador}}</span>
                  </h1>
  
                  <template v-else>
                      <h1>Participantes</h1>
                      <ul>
                          <li v-for="persona in listado">{{ persona }}</li>
                      </ul>
                  </template>
                  <!--<button v-on:click="elegirGanador()">Elegir ganador</button>-->
                  <button @click="elegirGanador()">Elegir ganador</button>
              </div>`,
  
    methods: {
      elegirGanador(){
          
      }
    },
    data() {
      return {
        ganador: false,
        participantes: this.listado
      };
    }
  });