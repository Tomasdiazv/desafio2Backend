const fs = require('fs');
class Contenedor {
    
    constructor(fileName) {
        this.fileName = fileName;
    }
    save(Object) {
        const id = Math.floor(Math.random() * 10);
        Object.id = id;
        console.log(Object);
        Object = JSON.stringify(Object, null, 2);
        fs.writeFile(this.fileName, Object, (err) => {
            if (err) {
                console.log(err);
            }
        })
        return id;
    }
    getAll() {
        const data = fs.readFileSync(this.fileName, 'utf8', (err) => {
            
            if (err) {
                console.log(err);
            }
        })
        //data = JSON.parse(data);
        console.log(`getAll: ${data}`)
        return data;
        }
}

const file = new Contenedor("mascota.json");
const mascota = {id: 0, nombre:"Ursa", raza:"Boxer"};
//console.log(file.save(mascota)) 

console.log(JSON.stringify(file.getAll()))
