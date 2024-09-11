const { createApp } = Vue

createApp( {
    data() {

        return {

        }
    }

}).mount('#app')

// Prendo la variabile axios importata via CDN, chiamo poi 
// il metodo GET per fare una chiamata HTTP GET
// Una volta che ho la risposta in maniera asincrona eseguo la funzione anonima di callback all'interno
axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
.then(function name(response) {
    console.log(response)

})

