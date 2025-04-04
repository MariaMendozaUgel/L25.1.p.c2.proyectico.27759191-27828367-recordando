export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarFotografia() {
        this.modelo.procesarPromocion(this.vista.procesarFotografia());
        this.vista.reportarFotografia(
            this.modelo.totalVendidos(),
            this.modelo.subtotalFotosDigitales(),
            this.modelo.promedioFotosDigitales(),
            
        )
    }
    procesarVideo() {
        this.modelo.procesarPromocion(this.vista.procesarVideo());
        this.vista.reportarVideo(
            this.modelo.totalVendidos(),
        )
    }
}