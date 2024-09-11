const { createApp } = Vue

createApp( {
    data() {
        return {
            email: [],
        
        }
    },

    methods: {
        // Prendo la variabile axios importata via CDN, chiamo poi 
        // il metodo GET per fare una chiamata HTTP GET
        // Una volta che ho la risposta in maniera asincrona eseguo la funzione anonima di callback all'interno
        getRandomEmail() {
            // Stampo 10 volte la mail
            for (let i = 0; i < 10; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((response) => {
                    this.email.push(response.data.response)
                })
            }
           
        }
    },
    mounted(){
        this.getRandomEmail()
    }
}).mount('#app');


