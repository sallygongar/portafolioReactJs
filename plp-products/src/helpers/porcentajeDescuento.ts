export default function calcularDescuento(precioOriginal: number, precioConDescuento: number){
    const diferencia = precioOriginal - precioConDescuento;

    const porcentajeDescuento = (diferencia/precioOriginal) * 100;

    // Se hace un redondeo hacia arriba Math.floor
    return Math.ceil(porcentajeDescuento);

}