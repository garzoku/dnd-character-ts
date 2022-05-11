interface IDnDCharacter {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export class DnDCharacter implements IDnDCharacter {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  hitpoints: number;
  static getModifierFor(ability: number) {
    return Math.floor((ability - 10) / 2);
  }
  static generateAbilityScore() {
    const diceRolls: number[] = [];
    for (let index = 0; index < 4; index++) {
      const randomNumber0thru6 = Math.floor(Math.random() * 6);
      diceRolls.push(randomNumber0thru6);
    }
    const numbersToAdd = this.removeSmallestNumber(diceRolls);
    const sum = this.sumOfDice(numbersToAdd);
    return sum;
  }
  static removeSmallestNumber(numbers: number[]) {
    const smallestNum = Math.min(...numbers);
    return numbers.filter((number) => number != smallestNum);
  }
  static sumOfDice(numbers: number[]) {
    let sum = 0;
    numbers.forEach((number) => {
      sum = sum + number;
    });
    return sum;
  }

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }
}
