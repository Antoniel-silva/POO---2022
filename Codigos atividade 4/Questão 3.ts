/*class Radio {
    volume : number;
    constructor(volume : number) {
    this.volume = volume;
    }
    }
    let r : Radio = new Radio();
    r.volume = 10;*/


//O modelo acima esta errado, pois o valor do volume tem que ser
// declarado dentro de new Radio()

// A solução esta escrita abaixo.



class Radio {
    volume : number;
    constructor(volume : number) {
        this.volume = volume;
    }
}
let r : Radio = new Radio(10);
console.log(r.volume)