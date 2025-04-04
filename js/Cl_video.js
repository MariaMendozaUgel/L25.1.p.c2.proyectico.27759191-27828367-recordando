import Cl_promocion from "./Cl_promocion.js";

export default class Cl_video  extends Cl_promocion{
    constructor ({codigo, costoBase, hd}) {
        super ({codigo, costoBase})
            this.hd = hd;    
    }

    set hd (hd) {
        this._hd = hd;
    }
    get hd () {
        return this._hd;
    }

    incremento() {
        if (this.hd === "si")
        return this.costoBase * 0.2;
    else return 0
    }
    precio() {
        return this.costoBase + this.incremento();
    }
}