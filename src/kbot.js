module.exports = class kbot{

    constructor(){
        this.hola = "HOLA";        
    }

    saludar(nombre)
    {
        let mensaje;
        mensaje = this.hola + " " + nombre;
        return mensaje;
    }
}