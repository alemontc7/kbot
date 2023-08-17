module.exports = class kbot{

    constructor(){
        this.hola = "HOLA";  
        this.titulos = {
            "m": "Señor",
            "f": "Señora"
        };      
    }

    saludar(nombre, genero, edad)
    {
        let mensaje;
        if(edad > 0 && edad < 30)
        {
            mensaje = this.hola + " " + nombre;
        }
        else if(edad >= 30)
        {
            mensaje = this.hola + " " + this.titulos[genero] + " " + nombre;
        }
        else{
            mensaje = this.hola + ", " + "todavía no naciste  :/";
        }
        return mensaje;
    }
}