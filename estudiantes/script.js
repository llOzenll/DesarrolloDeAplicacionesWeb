
class Proyecto{
    constructor(codeProyect, currentHours, costHour, name){
        if(codeProyect == undefined) this.codeProyect = 'A892ER';
        else{this.codeProyect = codeProyect;}
        
        if(currentHours == undefined) this.currentHours = 0;
        else{this.currentHours = currentHours;}

        if(costHour == undefined) this.costHour = 10.5;
        else{this.costHour = costHour;}

        this.maxPlantilla = 4;
        this.name = name;
    }

    incluye(){
        this.name = this.name.toLowerCase();
        let namesProyect = ['','','',''];

        while(namesProyect.length !== 4){
            namesProyect.push('');
        }

        let nameRepeated = false;

        if(namesProyect.length == 4){
            for(let i = 0; i < namesProyect.length; i++){
                if(namesProyect[i] == this.name){
                    nameRepeated = true;
                }else{
                    namesProyect.splice(i,1,this.name);
                    break;
                }
            }
        }
        return 'Estudiante agregado exitosamente!';
        
    }

    plantilla(){
        let namesProyect = ['','','',''];

        while(namesProyect.length !== 4){
            namesProyect.push('');
        }

        let nameRepeated = false;

        if(namesProyect.length == 4){
            for(let i = 0; i < namesProyect.length; i++){
                if(namesProyect[i] == this.name){
                    nameRepeated = true;
                }else{
                    namesProyect.splice(i,1,this.name);
                    break;
                }
            }
            return namesProyect;
        }
    }

    plantillaCount(){
        if(this.plantilla().map((x)=> x == '')){
            return 'no hay nadie registrado';
        }else{
            let plantillaCount = this.plantilla().filter(x => x !== '');
            return plantillaCount.length;
        }

        
    }

    trabajo(num,student){
        if(this.plantilla().includes(student)){
            if(num > 0) return this.currentHours += num;
        }
    }

    coordina(num,coord){
        if(this.plantilla().includes(coord)){
            if(num > 0) return this.currentHours += num;
        }
    }

    consultaEstudiante(num){
        if(num>0) return this.plantilla[num];
        else{return null}
    }

    elimina(student){
        student = student.toLowerCase();
        if(this.plantilla().includes(student)) return this.plantilla().filter(x => x != student);
    }

    causaBaja(student){
        student = student.toLowerCase();

        if(this.plantilla().indexOf(student) !== 0 ){
            if(this.plantilla().includes(student)) return this.plantilla().filter(x => x != student);   
        }else{
            return '¿Quiere de dar de baja a un coordinador?';
        }
        
    }

    cambiaCoordinador(changeCoord){
        changeCoord = changeCoord.toLowerCase();
        return this.plantilla().splice(0,1,changeCoord);
    }
    
    getCoste(){
        if(this.currentHours !== 0)return this.costHour * this.currentHours;
        else{ return this.costHour}
        
    }

    getDesarrolladores(){
        let j = 0;
       for(let i = 0; i< this.plantilla().length; i++){
            if(this.plantilla()[i] !== '') j++;
       }
       return j;
    }

    getHoras(){
        return this.currentHours;
    }

    getCodigo(){
        return this.codeProyect;
    }

    getPlantilla(){
        if(this.plantilla().map(x => x == '')){
            return 'no hay nadie registrado';
        }
        else{
            return this.plantilla();
        }
    }
}


class Estudiante{
    constructor(name){
        if(name = null) this.name = 'Pepito Conejo';
        else{ this.name = name; }
        this.hours = 0;
        this.proyect;
    }

    trabaja(hours){

    }

    cambiaProyect(newProyect){
        this.proyect = newProyect;
        return p2.causaBaja(this.name);
    }

    asigna(proyect){
        return  this.proyect = proyect;
    }

    getNombre(){
        return this.name;
    }

    getHoras(){
        return this.hours;
    }

    getCodigo(){
        return this.proyect;
    }
}

class Coordinador extends Estudiante{

    constructor(speciality){
        super(hours);
        if(speciality == null || speciality == '') speciality = 'Comodín';
        this.speciality = speciality;
    }

    trabaja(hours){
        
    }

    cambiaProyect(coord1,coord2){
        if(p2.plantilla.includes(coord1 || coord2) || p3.plantilla.includes(coord1 || coord2)){
            p2.cambiaCoordinador(coord2);
            p3.cambiaCoordinador(coord1);
        }
    }

    expulsa(student){

    }
}


// if(p2.plantilla().includes(this.name) || p3.plantilla().includes(this.name)){

// }



let button = document.getElementById('button');
button.addEventListener('click', call);

function call(){
    let n = document.getElementById('name').value;
    let p = new Proyecto1(n);
    alert(p.name);
}

let e1 = new Estudiante("Pepe");
let e2 = new Estudiante("Luis");
let e3 = new Estudiante();
let c1 = new Coordinador("Robertito", "AS del balón");
let c2 = new Coordinador("Juanito");
let c3 = new Coordinador();
let p1 = new Proyecto("CCC333", 3, 20, undefined);
let p2 = new Proyecto(undefined, 1, undefined, 'hola');

console.log("Codigo proyecto 2 (tiene que dar A892ER): "+ p2.getCodigo());
console.log("Coste hora proyecto 2 (tiene que dar 10.5): "+p2.getCoste());
console.log("Longitud de la plantilla del proyecto 2 (tiene que dar 2): "+p2.plantillaCount());
console.log("Horas proyecto 1 (tiene que dar 0): "+p1.getHoras());
console.log("Plantilla proyecto 1 (tiene que dar mensaje como que no hay plantilla): "+p1.getPlantilla());
console.log("Codigo proyecto 1 (tiene que dar CCC333): "+p1.getCodigo());
console.log("Coste hora proyecto 1 (tiene que dar 20): "+p1.getCoste());
console.log("Numero estudiantes trabajando en proyecto 1 (tiene que dar 0): "+p1.getDesarrolladores());
console.log("Incluir en proyecto 1 a estudiante 1 (tiene que dar false): "+p1.incluye(e1));
// console.log("Incluir en proyecto 1 a coordinador 1 (tiene que dar true): "+p1.incluye(c1));
// console.log("Incluir en proyecto 1 a estudiante 2 (tiene que dar true): "+p1.incluye(e2));
// console.log("Incluir en proyecto 1 a estudiante 3 (tiene que dar true): "+p1.incluye(e3));
// console.log("Incluir en proyecto 1 a estudiante 1 (tiene que dar false): "+p1.incluye(e1));
// console.log("Plantilla proyecto 1 (tiene que dar Robertito, Luis, Pepito Grillo): "+p1.getPlantilla());
// console.log("Causa baja estudiante 1 de proyecto 1 (tiene que dar false): "+p1.causaBaja(e1));
// console.log("Causa baja estudiante 3 de proyecto 1 (tiene que dar true): "+p1.causaBaja(e3));
// console.log("Incluir en proyecto 1 a estudiante 1 (tiene que dar true): "+p1.incluye(e1));
// console.log("Código proyecto coordinador 1 (tiene que dar CCC333): "+c1.getCodigo());
// console.log("Horas coordinador 1 (tiene que dar 0): "+c1.getHoras());
// console.log("Coordinador 1 trabaja (tiene que dar true): "+c1.trabaja(10));
// console.log("Estudiante 2 trabaja en proyecto 1 (tiene que dar true): "+p1.trabajo(10,e2));
// console.log("Horas de coordinador 1 (tiene que dar 10)"+c1.getHoras());
// console.log("Consulta Coordinador proyecto 1 (tiene que dar Robertito): "+p1.consultaEstudiante(1));
// console.log("Plantilla proyecto 1 (tiene que dar Robertito, Luis, Pepe): "+p1.getPlantilla());
// console.log("Coordinador 1 cambia proyecto con Coordinador 2 (tiene que dar false): "+c1.cambiaProyecto(c2));
// console.log("Incluir en proyecto 2 a coordinador 2 (tiene que dar true): "+p2.incluye(c2));
// console.log("Coordinador 1 cambia proyecto con Coordinador 2 (tiene que dar true): "+c1.cambiaProyecto(c2));
// console.log("plantilla proyecto 1 (tiene que dar Juanito, Luis, Pepe): "+p1.getPlantilla());
// console.log("plantilla proyecto 2 (tiene que dar Robertito): "+p2.getPlantilla());
// console.log("Coordinador causa baja proyecto 1 (tiene que dar false): "+p1.causaBaja(c1));