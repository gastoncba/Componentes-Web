Vue.component('simple-table', {
    props: {
        comidas: Array,
        cabeceras: Array,
        eliminar: Function
    },
    template: `
    <table class="table table-sm">
            <thead>
                <tr>
                  <th scope="col" v-for="(cabecera,i) in cabeceras">
                    {{cabecera}}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(comida,i) in comidas" :key="i">
                    <th scope="row">{{i+1}}</th>
                    <td>{{comida.nombre}}</td>
                    <td>{{comida.desc}}</td>
                    <td>$ {{comida.precio}}</td>
                    <td><svg @click="eliminar(i)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                      </svg>
                    </td>
                </tr>
            </tbody>
        </table>
    `
})

Vue.component('alert-cart', {
  props: ['text'], 
  template: `
  <div class="alert alert-danger" role="alert" style="display: flex; justify-content: center;">
    {{text}}
  </div>
  `
})

var app = new Vue({
    el: '#app',
    data: {
      titulo: 'Listado de comidas',
      comidas: [
        {nombre: "Hamburguesa Vegana", desc: "De trigo y vegetales", precio: 10.3},
        {nombre: "Pizza", desc: "De Anchoas", precio: 11.3},
        {nombre: "Lomito", desc: "Con papas", precio: 12.3},
        {nombre: "Empanadas Criollas", desc: "Al horno", precio: 11.2},
        {nombre: "Tacos", desc:"Tacos", precio: 13.2}
    ], 
    cabeceras: ["#", "Nombre", "Descripción", "Precio"],
    nombreComida: "",
    descComida: "", 
    precioComida: "",
    comidaEliminada: {nombre: "", desc:"", precio: 0},
    },
    methods: {
        agregarComida() {
          if(this.nombreComida.trim() == "" || this.descComida.trim() == "" || this.precioComida.trim() == "") 
            return

            const nuevaComida = {
                nombre: this.nombreComida,
                desc: this.descComida,
                precio: this.precioComida
            }
            this.comidas.push(nuevaComida)
            this.nombreComida = ""
            this.descComida = ""
            this.precioComida = ""
        },
        eliminarComida(i) {
            let eliminada = this.comidas.splice(i,1)
            this.comidaEliminada = {
                nombre: eliminada[0].nombre,
                desc: eliminada[0].desc,
                precio: eliminada[0].precio
            }
        },
        cantComidas() {
          return this.comidas.length
        }
    }
})