import Cl_video from "./Cl_video.js";
export default class Cl_vVideo{
    constructor(){
        this.inCodigo = document.getElementById("videoForm_inCodigo");
        this.inCostoBase = document.getElementById("videoForm_inCostoBase");
        this.inHd = document.getElementById("videoForm_inHd");
        this.btProcesar = document.getElementById("video_btProcesarVideo");
    }

    get codigo(){
        return +this.inCodigo.value;
    }

    get costoBase(){
        return +this.inCostoBase.value;
    }

    get hd (){
        return this.inHd.value;
    }
}