<script>
import {store} from "../store.js";
export default {
  data() {
    return {
        // 29/3 aggiungo la nuova chiamata per completare l'API
        // cardSearch: 

        store,
    }
  }
}
</script>

<template>
    <div id="container">
        <!-- v-model di una proprità che mi salvo nello store -->
        <input v-model="store.cardName" @keyup.enter="$emit('searchCard')" type="text" placeholder="Gioca la partita. Vinci la fatica. Questa è la tua vita.">
        <!-- al button do il click con l'$emit -->
        <button @click="$emit('searchCard')">Yu-Gi-Oh!</button>
    </div>
    <hr>
</template>

<style lang="scss" scoped>
    #container{
        display: flex;
        align-items: center;
        flex-direction: column;

        padding: 30px;
        input {
            width: 315px;
            padding: 5px;
            margin-bottom: 10px;
        }
        button {
            padding: 20px;
            font-size: larger;
        }
    }
</style>