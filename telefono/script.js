
let minutes = prompt('dime cuanto tiempo quieres llamar');
minutes = parseFloat(minutes)+0;

class Telefon{
    constructor(tarif){
        this.saldo = 18.95;
        this.tarif = tarif;
    }

    getSaldo(){
        return this.saldo;
    }
    getTarif(){
        return this.tarif;
    }
    getUse(){
        return this.call();
    }

    call(){
        let r2;
        let r3;
        let min = 0;
        if(minutes > 0){
            for(let i = 0; i < minutes; i++ ){
                if(this.saldo > 0){
                    r3 = this.saldo- this.tarif;
                    r2 = r3;
                    this.saldo = r2;
                    min++;
                }else{
                    console.log('te has quedado sin saldo, tienes que recargar');
                }
            }
        }else{ return 'minutos insuficientes'; }

        return 'tu llamada ha durado ' + min + ' min';

    }

    rest(){
        let countRest = 0;
        if(this.saldo > 0){
            for(let i = 0; i < this.saldo; i++ ){
                countRest++;
            }
            return countRest;
        }
        else{ 
            return countRest
        }
        
    }

    reload(reload){
        if(reload > 0) {
            return 'su recarga ha sido exitosa';
        }
        else{return 'su recarga es insuficiente.'}
    }
}

let t = new Telefon(1);


console.log(t.getUse());
console.log('su tarifa es de: ' + t.getTarif() + ' euro por minuto.');
console.log('su saldo restante es de: ' + t.getSaldo() );
console.log('le quedan: ' + t.rest() + ' min');

console.log(t.reload(1));

