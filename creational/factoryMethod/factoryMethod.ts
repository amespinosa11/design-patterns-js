import RaceCar from "./raceCar";

export default abstract class RaceCarCreator {

    public abstract factoryMethod(): RaceCar;

    public createRacingCars(): string {
        const raceCar = this.factoryMethod();
        // Now, use the product.
        return `Creator: The same creator's code has just worked with ${raceCar.race()}`;
    }
}
