/*class Temperature{
    #celsius=0;
    constructor(val){
            this.#celsius=val;
    }
    get fahreheit(){
        return this.#celsius* 9/5 +32;
    }
    set celsius(val){
        return this.#celsius=val-32* 5/9;
    }
}

let temp1=new Temperature(100);
console.log(temp1.fahreheit);
*/

function person(name,age){
    this.name=name;
    this.age=age;

    this.intro=function(){
        console.log(`Good morning! Iam ${this.name}`)

    }
}
person.prototype.namee=function(){
    console.log(`${this.name} : ${this.age}`)
}

let a1=new person("sharan",19);
a1.intro()
a1.namee();

