import { SisMilkType } from "./sisMilkType";
import { SisDischargeChargeRegister } from "./sisDischargeChargeRegister";

export class SisStorage{
	idSisStorage : number;

	carPlate : string;

	internalPassage : string;

	milkTemperature : number;

	quantityDischarge : number;

	supplyDdt_ft : string;

	sisDischargeChargeRegister : SisDischargeChargeRegister;

	sisMilkType : SisMilkType;

}