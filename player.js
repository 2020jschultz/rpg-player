//generic stats object

let p1Name = "iamp1";

let p1Stats = {
  hp: 110,
  mp: 90,
  atk: 49,
  def: 41,
  sp: 30,
}

let p2Name = "p2isthename";

let p2Stats = {
  hp: 100,
  mp: 100,
  atk: 60,
  def: 40,
  sp: 20,
}

let battle = {

  attack: function(){},
  defend: function(){}

}



















let p1Pack = [2,2,1,0,1,1,0,0];


//Assembling your player.

let player1 = {
  name: p1Name,
  stats: p1Stats,
  moves: p1Moves,
  use: function(){
    //fill in with a ton of if and else ifs
  },
  pack: myPack,
  battle: {
    attack: function(mv){
      //fill in logic
    },
    defend: function(atkmv){
      //fill in logic
    }
  }
}


//not finished
let p1battle = {
  attack: function(mv){
    if(mv === 1){
      return this.moves.punch();
    }
    else if(mv === 2){
      return this.move.other();
    }
  },
  defend: function(atkmv){
    let rawDamage = atkmv - this.stats.def
    this.stats.hp = this.stats.hp - rawDamage;
    if(this.stats.hp < 0){
      this.stats.hp = 0;
    }
  }
}

let physical = {
  razorPunch: function(){
    let baseDamage = this.stats.atk * 0.75;
    let bonus = 0.5 * this.stats.atk * Math.random();
    return baseDamage + bonus;
  },
  charge: function(){
    let pain = Math.random();
    let bonus = 0.5 * this.stats.atk * Math.random();
    if(pain < 0.50){
      this.stats.hp = this.stats.hp - this.stats.atk/4;
      return this.stats.atk + bonus;
    }
    else{
      //no self damage
      return this.stats.atk + bonus;
    }
  }
}

let magic = {
  hydroPump: function(){
    if(this.stats.mp >= 8){
      this.stats.mp = this.stats.mp - 8;
      let tetradice = Math.random();
      let pump = Math.ceil(this.stats.sp / 3);
      if(tetradice < 0.10){
        return pump;
      }
      else if(tetradice < 0.30){
        return 2 *pump;
      }
      else if(tetradice < 0.60){
        return 3 * pump;
      }
      else{
        return 4 * pump;
      }
    }
  },
  pyroBall: function(){
  if(this.stats.mp >= 6){
    this.stats.mp = this.stats.mp - 6;
    let baseDamage = this.stats.mp * 0.88;
    let bonus = 0.32 * this.stats.atk * Math.random();
    return baseDamage + bonus;
    }
  },
  lightningSlap: function(){
    if(this.stats.mp >= 10){
      this.stats.mp = this.stats.mp - 10;
      let baseDamage = this.stats.mp * 0.66;
      let bonus = 0.84 * this.stats.atk * Math.random();
      return baseDamage + bonus;
    }
  },
  hyperBeam: function(){
    if(this.stats.mp >= 20){
      this.stats.mp = this.stats.mp - 20;
      let baseDamage = this.stats.mp * 1.5;
      let bonus = 1.5 * this.stats.atk * Math.random();
      return baseDamage + bonus;
    }
  },
  shadowClaw: function(){
    if(this.stats.mp >= 6){
      this.stats.mp = this.stats.mp - 6;
      let baseDamage = 1 * this.stats.atk;
      let bonus = 0.5 * this.stats.atk * Math.random();
      return baseDamage + bonus;
    }
    if(pain < 0.50){
      this.stats.hp = this.stats.hp - this.stats.atk/4;
      return this.stats.atk + bonus;
    }
    else{
      return this.stats.atk + bonus;
    }
  }
}