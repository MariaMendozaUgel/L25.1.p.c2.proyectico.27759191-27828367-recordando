export default class Cl_promocion {
    constructor ({codigo, costoBase}) {
        this.codigo = codigo;
        this.costoBase = costoBase;
    }
    set codigo(codigo) {
        this._codigo = codigo;
    }
    get codigo() {
        return this._codigo;
}
    set costoBase(costoBase) {
        this._costoBase = costoBase;
    }
    get costoBase() {
        return this._costoBase;
}
}