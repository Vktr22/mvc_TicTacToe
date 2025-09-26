import TTTModel from "../MODEL/TTTModel.js";
import TTTElemView from "../VIEW/TTTElemView.js";

export default class TTTController{
    adat;
    #model={};
    #lista=[];
    #szuloElem;

    constructor(){
        this.adat=adat;
        this.#model = newModel();
        this.#lista = [...this.#model.getElemLista()];
        this.#szuloElem = document.querySelector("article");
        this.#szuloElem.innerHTML = "";
        new TTTModel(this.#lista, this.#szuloElem);
        this.esemenyKezelo();
    }

    esemenyKezelo(){
        window.addEventListener("kattintas", () => {
            if(this.adat ==="-"){
                const e = new CustomEvent("kivalaszt", {detail:this.index});
                window.dispatchEvent(e);
            }
        });
    }
}