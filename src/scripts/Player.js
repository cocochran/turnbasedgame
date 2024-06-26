import playerData from "./Player.json" assert { type: "json" };

export class Player {
  constructor(hp = 25, inventory = [], spells = [], level = 1, exp = 0) {
    this.maxHP = hp;
    this.hp = hp;
    this.inventory = inventory;
    this.spells = spells;
    this.level = level;
    this.exp = exp;
    this.damage = Math.floor(Math.random() * 5);
  }
}

export function createPlayer() {
  return new Player(
    playerData.hp,
    playerData.inventory,
    playerData.spells,
    playerData.level,
    playerData.exp
  );
}
