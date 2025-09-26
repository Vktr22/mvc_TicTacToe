import TTTModel from "../MODEL/TTTModel.js";
export default class TTTView{

    #szuloElem;
    constructor(){
        this.megjelenit();
        this.#szuloElem = szuloElem
    }

    megjelenit(){
        for (let index = 0; index < this.elemLista.length; index++) {
            new Element(this.elemLista[index], index, this.szuloElem);
            
        }
    }
}