import {SisAbsentPresent} from "./sisAbsentPresent";
import {SisAnalyst} from "./sisAnalyst";
import {SisPositiveNegative} from "./sisPositiveNegative";
import {SisSupplier} from "./sisSupplier";
import {SisDischargeChargeRegister} from "./sisDischargeChargeRegister";

export class SisRawMilkAnalysis{
	idRawMilkAnalysis : number;

	acidity : number;

	cryoscopicIndex : number;

	density : number;

	grease : number;

	lactose : number;

	microbialCharge : number;

	ph : number;

	protein : number;

	rsm : number;

	somaticCells : number;

	temperature : number;

	inhibitorySubstances : SisAbsentPresent;

	sisAnalyst : SisAnalyst;

	sisDischargeChargeRegister : SisDischargeChargeRegister;

	alcoholicTest : SisPositiveNegative;

	sisSupplier : SisSupplier;

}