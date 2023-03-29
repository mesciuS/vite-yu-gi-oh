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
            <!-- dovevo inserire l'array [0] senza punteggiatura dopo card_images -->
            <img :src="card.card_images[0].image_url" alt="">
        </div>
        <div>
            <strong>{{ card.name }}</strong>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #card {
        width: calc(100% / 4 - 20px / 4 * 3);
    }

    img {
        width: 100%;
    }
</style>