import PokemonTypes = gameConstants.PokemonType;
class battlePokemon implements enemyPokemonInterface {
    name: string;
    type1: gameConstants.PokemonType;
    type2: gameConstants.PokemonType;
    health: number;
    maxHealth: number;
    catchRate: number;
    exp: number;
    money: number;
    shiny: boolean;

    /**
     * In case you want to manually create a Pokémon instead of generating it from the route number
     * @param name Pokémon name
     * @param type1 First type of the Pokémon
     * @param type2 Second type of the Pokémon
     * @param maxHealth max health that the Pokémon can have
     * @param catchRate base chance of catching this Pokémon
     * @param exp base exp reward for defeating this Pokémon
     * @param money exp base exp reward for defeating this Pokémon
     */
    constructor(name: string, type1: gameConstants.PokemonType, type2: gameConstants.PokemonType, maxHealth: number, catchRate: number, exp: number, money: number, shiny:boolean) {
        this.name = name;
        this.type1 = type1;
        this.type2 = type2;
        this.health = maxHealth;
        this.maxHealth = maxHealth;
        this.catchRate = catchRate;
        this.exp = exp;
        this.money = money;
        this.shiny = shiny;
    }

    public isAlive(): boolean {
        return this.health > 0;
    }

    public defeat(): any {
        return undefined;
    }

    public damage(damage: number): void {
        this.health = Math.max(0, this.health - damage);
        if (!this.isAlive()) {
            this.defeat();
        }
    }
}
