import Cl_fotografia from "./Cl_fotografia.js";
import Cl_vFotografia from "./Cl_vFotografia.js";
import Cl_video from "./Cl_video.js";
import Cl_vVideo from "./Cl_vVideo.js";
import Cl_tienda from "./Cl_tienda.js";

export default class Cl_vTienda {
    constructor() {
        this.controlador = null;
        this.vFotografia = new Cl_vFotografia();
        this.vVideo = new Cl_vVideo();
        this.salida = document.getElementById("salida");
        this.tablaFoto = document.getElementById("tablaFoto");
        this.tablaVideo = document.getElementById("tablaVideo");

        this.vFotografia.btProcesar.onclick = () => {
            this.controlador.procesarFotografia();
        }

        this.vVideo.btProcesar.onclick = () => {
            this.controlador.procesarVideo();
        }
    }

    procesarFotografia() {
        this.fotografia = new Cl_fotografia({
            codigo: this.vFotografia.codigo,
            costoBase: this.vFotografia.costoBase,
            tipoFoto: this.vFotografia.tipo,
        });
        return this.fotografia
    }

    procesarVideo() {
        this.video = new Cl_video({
            codigo: this.vVideo.codigo,
            costoBase: this.vVideo.costoBase,
            formatoVideo: this.vVideo.Hd,
        });
        return this.video
    }

    reportarFotografia(totalVendidos, subtotalFotosDigitales,promedioFotosDigital) {
        this.tablaFoto.innerHTML += `
        <tr>
        <td>${this.fotografia.codigo}</td>
        <td>${this.fotografia.costoBase}</td>
        <td>${this.fotografia.tipo}</td>
        <td>${this.fotografia.descuento()}</td>
        <td>${this.fotografia.incremento()}</td>
        <td>${this.fotografia.precio()}</td>
        </tr>
        `;

        this.salida.innerHTML = `
        <br>Total vendido: ${totalVendidos}
        <br>Subtotal fotos digitales: ${subtotalFotosDigitales}
        <br>Promedio ventas digitales: ${promedioFotosDigital} <br>
    `
    }

    reportarVideo(totalVendidos) {
        this.tablaVideo.innerHTML += `
        <tr>
        <td>${this.video.codigo}</td>
        <td>${this.video.costoBase}</td>
        <td>${this.video.formatoVideo}</td>
        <td>${this.video.incremento()}</td>
        <td>${this.video.precio()}</td>
      
        </tr>
        `;

        this.salida.innerHTML = `
        <br>Total vendido: ${totalVendidos}
        <br>
    `
    }
}