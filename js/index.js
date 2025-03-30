/*/
Una Tienda Fotográfica, ofrece promociones para cubrir sus eventos especiales en videos o 
fotografías. Se conoce de cada cliente: su código y costo base. Además, se sabe que si la 
promoción es de Fotografías tendrá un tipo de foto (D: Digital o I: Impresa), teniendo en cuenta 
si es Digital tendrá un descuento del 18% sobre el costo y si las fotos son impresas tendrán un 
incremento del 13%. Por otro lado, si la promoción es de videos se debe tomar en cuenta si el 
mismo se graba en formato HD (High Definition: SI-NO) de ser así este tendrá un incremento 
del 20% sobre el costo. La Tienda requiere determinar al final de su jornada laboral: el precio 
de cada cliente, el total vendido y el promedio de ventas de promociones de fotos digitales 
vendidas. 
/*                     */
import Cl_fotografia from "./Cl_fotografia.js";
import Cl_video from "./Cl_video.js";
import Cl_tienda from "./Cl_tienda.js";

let tienda = new Cl_tienda();

let fotografia1 = new Cl_fotografia(22, 20, "I");
let fotografia2 = new Cl_fotografia(11, 10, "D");
let fotografia3 = new Cl_fotografia(55, 30, "I");
let fotografia4 = new Cl_fotografia(88, 20, "D");

let video1 = new Cl_video(44, 100, "si");
let video2 = new Cl_video(33, 200, "si");
let video3 = new Cl_video(77, 250, "no");
let video4 = new Cl_video(44, 300, "si");

tienda.procesarPromocion(fotografia1);
tienda.procesarPromocion(fotografia2);
tienda.procesarPromocion(fotografia3);
tienda.procesarPromocion(fotografia4);
tienda.procesarPromocion(video1);
tienda.procesarPromocion(video2);
tienda.procesarPromocion(video3);
tienda.procesarPromocion(video4);

let salida = document.getElementById("salida");

let mostrarPromocion = (promocion) => {
    return `
    <tr>
    <td>${promocion.codigo}</td>
    <td>${promocion.costoBase}</td>
    <td>${promocion.tipo}</td>
    <td>${promocion.hd}</td>
    <td>${promocion.descuento().toFixed(2)}</td>
    <td>${promocion.incremento().toFixed(2)}</td>
    <td>${promocion.precio()}</td>
    
    </tr>`
};

salida.innerHTML = `
    <table>
        <tr>
            <td>Codigo</td>
            <td>CostoBase</td>
            <td>TipoFoto</td>
            <td>HD</td>
            <td>descuento</td>
            <td>incremento</td>
            <td>precio</td>

        </tr>
        ${mostrarPromocion(fotografia1)}
        ${mostrarPromocion(fotografia2)}
        ${mostrarPromocion(fotografia3)}
        ${mostrarPromocion(fotografia4)}
        ${mostrarPromocion(video1)}
        ${mostrarPromocion(video2)}
        ${mostrarPromocion(video3)}
        ${mostrarPromocion(video4)}
    </table>
    <p>Total de ventas: ${tienda.totalVendidos()}</p>
    <p>Subtotal Ventas fotos digitales ${tienda.subtotalFotosDigitales().toFixed(2)}</p>
    <p>Promedio fotos digitales ${tienda.promedioFotosDigitales().toFixed(2)}</p>`;
    
