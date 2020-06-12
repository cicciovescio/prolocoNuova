import { SisAnalyst } from "./sisAnalyst";
import { SisMilkType } from "./sisMilkType";
import { SisPositiveNegative } from "./sisPositiveNegative";
import { SisStorage } from "./sisStorage";

export class SisPasteurization{
	idSisPasteurization : number;

	end : Date;

	internalPassage : string;

	milkTemperature : number;

	quantity : number;

	quantityDischarge : number;

	start : Date;

	tank : string;

	treatmentTemperature : number;

	sisAnalyst : SisAnalyst;

	sisMilkType : SisMilkType;

	phosphateResults : SisPositiveNegative;

	sisStorage : SisStorage;

	video:string;

}