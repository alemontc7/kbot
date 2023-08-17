module.exports = class kbot{

    constructor(){
        this.hola = "HOLA";  
        this.titulos = {
            "m": "Señor",
            "f": "Señora"
        };    
          
    }
    dia()
    {
        let hora = new Date().getHours();
        let saludo;
        if(hora >= 6 && hora < 12){
            saludo = "buenos días";
        }
        else if(hora >= 12)
        {
            saludo = "buenas tardes";
        }
        else
        {
            saludo = "buenas noches";
        }
        return saludo;

    }
    saludar(nombre, genero, edad)
    {
        let mensaje;
        if(edad > 0 && edad < 30)
        {
            mensaje = this.hola + ", " + this.dia() + " " + nombre;
        }
        else if(edad >= 30)
        {
            mensaje = this.hola + ", " + this.dia() + " " +  this.titulos[genero] + " " + nombre;
        }
        else{
            mensaje = this.hola + ", " + this.dia() + " todavía no naciste  :/";
        }
        return mensaje;
    }
}