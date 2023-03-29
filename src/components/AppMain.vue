<script>
// 1 prima si importa axios e lo store
import axios from "axios";
import {store} from "../store.js";
import AppCardItem from "./AppCardItem.vue";
import SearchBar from "./SearchBar.vue";
export default {
    data() {
        return {
            // 3 creo l'array cards: [] nel file store
            store,
        }
    },

    components: {
        AppCardItem,
        SearchBar,
    },

    // 2 poi created e si mette l'api
    created() {
        // 29/3 -- sostituisco l'indirizzo dell'API con una chiamata allo store
        axios.get(this.store.APIcall).then((res)=>{
            console.log(res.data.data);
            // 4 pusho i dati dell'api nell'array 
            this.store.cards = res.data.data;
            // ho provato a fare il this.store.imgs (che è il nome dell'altro array su store) = res.data.data.card_images ma non funziona
        });
    },

    methods: {
        search() {
            // unisco tutti i componenti per creare un nuovo indirizzo
            let apiNewString = this.store.APIcall + this.store.APIquery + this.store.cardName

            // chiamo di nuovo questo nuovo indirizzo
            axios.get(apiNewString).then((res)=> {
                // 29/3 ora posso modificare il v-for che mostra le carte
                this.store.cards = res.data.data;
            });
        },
    },
}
</script>

<template>
    <!-- emit di searchbar.vue -->
    <SearchBar @searchCard="search()"></SearchBar>
    <div id="card-list">
        <AppCardItem v-for="card in store.cards" :card="card"></AppCardItem>
    </div>
</template>

<style lang="scss" scoped>
    #card-list{
        display: flex;
        flex-flow: row wrap;
        gap: 20px;

        padding: 30px;
    }
</style>
