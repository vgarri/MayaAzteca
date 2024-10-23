/* Construye las siguientes clases:

Warrior:

constructor(life, power): Establece el valor de las propiedades life y power

attack: Devuelve el valor de power del guerrero

defend(damage): resta el valor del parámetro recibido damage al valor de la propiedad life. Después, imprime el valor de la vida restante.

Maya: extiende de la clase Warrior

constructor: Aquí establecemos los valores para el maya, que no hay que olvidar que es un guerrero.

drinkColaCao: Suma 10 al poder.

Aztec: extiende de la clase Warrior

constructor: Aquí establecemos los valores para el azteca, que no hay que olvidar que es un guerrero.

drinkNesquik: Suma 10 a la vida.

*/

class Warrior{
    constructor(life, power){
        this.life = life;
        this.power = power;
    }
    attack() {
        return this.power;
    }
    defend(damage) {
        this.life = this.life - damage
        console.log(`Guerrero se defiende, recibe ${damage} puntos de daño, nuevo valor de puntos de salud: ${this.life}`)
        
        return this.life;
    }
}

class Maya extends Warrior {
    constructor (life, power){
        super(life, power);
    
    }
    drinkColacao(){
        console.log(`Guerrero Maya bebe ColaCao, power: ${this.power+10}`)
       return this.power+=10;
    }
}
class Aztec extends Warrior {
    constructor (life, power){
        super (life, power);
    }
    drinkNesquik(){
        console.log(`Guerrero Azteca bebe Nesquik, life points: ${this.life+10}`)
        return this.life += 10;
       
    }
}
let nuevoGuerreroMaya = new Maya(1000,100);
let nuevoGuerreroAztec = new Aztec(1000,100);
/* Realiza la siguiente cadena de intercambio de golpes.

Azteca bebe nesquik

Maya bebe Cola Cao

Maya ataca a azteca. Azteca defiende.

Azteca ataca a maya. Maya defiende. */

nuevoGuerreroAztec.drinkNesquik();

nuevoGuerreroMaya.drinkColacao();


nuevoGuerreroAztec.defend(nuevoGuerreroMaya.attack());
nuevoGuerreroMaya.defend(nuevoGuerreroAztec.attack());
