export class Producto {
    
    codigo?:string;
    descripcion?:string;
    precio?:number;
    stock?:number;
    paisDeOrigen?:string;
    bandera?:string;
    comestible?:boolean;

    constructor(codigo:string, descripcion:string, precio:number, stock:number, paisDeOrigen:string, bandera:string, comestible:boolean) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
        this.paisDeOrigen = paisDeOrigen;
        this.bandera = bandera;
        this.comestible = comestible;
    }

}
