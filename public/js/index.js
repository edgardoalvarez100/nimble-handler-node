// const axios = require('axios');


const ComponentIndex = {
    template : 
    `
    <div class="container">
        <div class="row m-5">
        <div class="col-12">
            <h3>Aplicaciones</h3>
        </div>
        </div>
        <div class="row">
            <div class="col-12">
            <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">App</th>
                <th scope="col">Usuario</th>
                <th scope="col">Password</th>
                <th scope="col">Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value, index) in apps" :key="index" :index="index">
                <th scope="row">{{index}}</th>
                <td>{{ value.app }}</td>
                <td>{{ value.login }}</td>
                <td>{{ value.password }}</td>
                <td>
                    <button class="btn btn-success">Editar</button>
                </td>
              </tr>
             
            </tbody>
          </table>
            </div>
        </div>
    </div>

    `,
    data(){
        return{
            apps: []
        }
    },
    mounted(){
        axios.get('/api' ).then((response) => {
            const {apps:appsDB} = response.data;
            this.apps  = appsDB;
        });
    }
}


const app  = Vue.createApp({});

app.component("index-component",ComponentIndex);

app.mount('#app');