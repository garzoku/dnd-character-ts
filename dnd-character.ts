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

    constructor(){
    this.strength = 0;
    this.dexterity = 0;
    this.constitution = 0;
    this.intelligence = 0;
    this.wisdom = 0;
    this.charisma = 0;
}
}
