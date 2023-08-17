module.exports = class kbot{

    constructor(){
        this.hola = "HOLA";  
        this.titulos = {
            "m": "Señor",
            "f": "Señora"
        };      
    }

    saludar(nombre, genero)
    {
        let mensaje;
        mensaje = this.hola + " " + this.titulos[genero] + " " + nombre;
        return mensaje;
    }
}