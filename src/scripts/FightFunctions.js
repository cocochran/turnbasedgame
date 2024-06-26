import { Slime, enemies } from "./Enemies.js";

export let fight = false;

function determineEnemies(enemies) {
  let fightEnemies = [];

  for (let i = 0; i < Math.floor(Math.random() * 3) + 1; i++) {
    let randomEnemy = enemies[Math.floor(Math.random() * enemies.length)];
    let enemy = new randomEnemy();
    fightEnemies.push(enemy);
  }

  return fightEnemies;
}
export function initiateFight(enemies) {
  let fightEnemies = [];
  let enemyNumber = Math.floor(Math.random() * 3) + 1;

  for (let i = 0; i < enemyNumber; i++) {
    let enemyIndex = Math.floor(Math.random() * enemies.length);
    let slime = new Slime();
    fightEnemies.push(slime);
    //fightEnemies.push(enemies[enemyIndex]);
  }
  return fightEnemies;
}

export function damage(giver, receiver) {
  let damageDealt;
  let x = Math.random() * 100;

  if (x < 10) {
    //miss
    damageDealt = 0;
  } else if (x > 10 && x < 50) {
    //ok hit
    damageDealt =
      giver.damage - Math.floor(Math.random() * (giver.damage / 2) + 1);
  } else if (x > 50 && x < 100) {
    //great hit
    damageDealt =
      giver.damage + Math.floor(Math.random() * (giver.damage / 2) + 1);
  }
  console.log(receiver.hp);
  damageDealt = Math.max(0, damageDealt);

  // Update receiver's hp
  let updatedReceiver = {
    ...receiver,
    hp: receiver.hp - damageDealt,
  };

  return updatedReceiver;
}

export function heal(receiver, amount) {
  if (amount > 0) {
    receiver.hp += amount;
  }
}

export function enemyTurn(enemies) {
  for (enemy in enemies) {
    damage(enemy, player);
  }
}
