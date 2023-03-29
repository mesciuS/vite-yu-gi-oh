import {reactive} from 'vue';

export const store = reactive({
    cards: [],
    
    // 1 creo la chiamata API "base"
    APIcall: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0',

    // 2 creo la query per la ricerca con l'elemento che voglio usare per la ricerca e la composizione dell'api
    APIquery: "&fname=",

    // 3 creo una proprietà da aggiornare in base alla ricerca
    cardName: "",

});