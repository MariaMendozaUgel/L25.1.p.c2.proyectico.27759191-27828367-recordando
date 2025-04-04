import Cl_fotografia from "./Cl_fotografia.js";
export default class Cl_vFotografia{
constructor(){
    this.inCodigo = document.getElementById("fotoForm_inCodigo");
    this.inCostoBase = document.getElementById("fotoForm_inCostoBase");
    this.inTipo = document.getElementById("fotoForm_inTipo");
    this.btProcesar = document.getElementById("fotoForm_btProcesarFotografia");
}

get codigo(){
    return +this.inCodigo.value;
}

get costoBase(){
    return +this.inCostoBase.value;
}

get tipoFoto(){
    return this.inTipo.value;
}
}