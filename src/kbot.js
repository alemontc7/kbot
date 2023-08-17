module.exports = class kbot{

    constructor(){
        this.hola = "HOLA";  
        this.titulos = {
            "ES": {"m":"Señor", "f":"Señora"}, "EN": {"m":"Mr", "f":"Mrs"}
        };    
        this.saludos ={
            "ES" : ["Hola", "buenos dias", "buenas tardes", "buenas noches"],
            "EN" : ["Hi", "Good morning", "Good evening", "Good night"]
        }
    }
    dia(idioma)
    {
        let hora = new Date().getHours();
        let saludo;
        if(hora >= 6 && hora < 12){
            saludo = this.saludos[idioma][1];
        }
        else if(hora >= 12)
        {
            saludo = this.saludos[idioma][2];            
        }
        else
        {
            saludo = this.saludos[idioma][3];            
        }
        return saludo;

    }
    saludar(nombre, genero, edad, idioma)
    {
        let mensaje;
        if(edad > 0 && edad < 30)
        {
            mensaje = this.saludos[idioma][0] + ", " + this.dia(idioma) + " " + nombre;
        }
        else if(edad >= 30)
        {
            mensaje = this.saludos[idioma][0] + ", " + this.dia(idioma) + " " +  this.titulos[idioma][genero] + " " + nombre;
        }
        else{
            mensaje = this.saludos[idioma][0] + ", " + this.dia(idioma) + " :/";
        }
        return mensaje;
    }
}