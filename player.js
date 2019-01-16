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
