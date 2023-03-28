<script>
export default {
    name: "AppCardItem",
    data() {
        return {

        }
    },

    // voglio i dati dal genitore quindi props
    props: {
        // name: String,
        // race: String,
        // type: String,
        // al posto di fare come sopra posso passare tutto l'oggetto
        card: Object,
    },
}
</script>

<template>
    <div id="card">
        <div>
            <!-- questo non funziona, cercare modo per entrare nell'array dell'array dell'api -->
            <img :src="card.card_images.image_url" alt="">
        </div>
        <div>
            <strong>{{ card.name }}</strong>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #card {
        width: 200px;
        height: 250px;
        border: 1px solid red;
    }
</style>