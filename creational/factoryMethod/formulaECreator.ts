import RaceCar from "./raceCar";
import RaceCarCreator from "./factoryMethod";
import formulaECar from './formulaECar';

export default class FormulaECreator extends RaceCarCreator {
    public factoryMethod(): RaceCar {
        return new formulaECar();
    }
}
