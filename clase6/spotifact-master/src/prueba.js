class Avion {

    constructor(tipo, pais, costo){
        this.tipo = tipo;
        this.pais = pais;
        this.costo = costo;
    }

    setProperties = (object)=> {
        this.properties = object;
    }

    showProperty(property){
        return this.property;
    }
}

let mirage = new Avion('caza','francia',1.5);

console.log(mirage);