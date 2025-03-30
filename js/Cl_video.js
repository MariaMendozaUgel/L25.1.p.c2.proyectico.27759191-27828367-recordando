import Cl_promocion from "./Cl_promocion.js";

export default class Cl_video  extends Cl_promocion{
    constructor (codigo, costoBase, hd) {
        super (codigo, costoBase)
            this.hd = hd;    
    }
    descuento() {
        return 0;
    }
    incremento() {
        if (this.hd === "si")
        return this.costoBase * 0.2;
    else return 0
    }
    precio() {
        if(this.hd === "si")
            return this.costoBase + this.incremento();
        else return this.costoBase;
    }
}