
export default class TTTElemView{
    constructor(szuloElem, adat, index){
        this.adat = adat;
        this.index = index;
        this.megjelenit();
        this.elem = document.querySelector(".elem");
        this.esemenykezelo();
    }

    megjelenit(){
        let html= `
            <div class="elem">${this.adat}</div>
        `;
        //this.szuloElem.inser
    }

    esemenykezelo(){
        this.elem.addEventListener("kattintas", ()=>{
            if(this.adat ==="-"){
                const e = new CustomEvent("kivalaszt", {detail:this.index});
                window.dispatchEvent(e);
            }
        })
    }
}