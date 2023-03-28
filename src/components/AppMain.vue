<script>
// 1 prima si importa axios e lo store
import axios from "axios";
import {store} from "../store.js";
import AppCardItem from "./AppCardItem.vue";
export default {
    data() {
        return {
            // 3 creo l'array cards: [] nel file store
            store,
        }
    },

    components: {
        AppCardItem
    },

    // 2 poi created e si mette l'api
    created() {
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0').then((res)=>{
            console.log(res.data.data);
            // 4 pusho i dati dell'api nell'array 
            this.store.cards = res.data.data;
        });
    },
}
</script>

<template>
    <div id="card-list">
        <AppCardItem v-for="card in store.cards" :card="card"></AppCardItem>
    </div>
</template>

<style lang="scss" scoped>
    #card-list{
        display: flex;
        flex-flow: row wrap;
        gap: 20px;
    }
</style>
