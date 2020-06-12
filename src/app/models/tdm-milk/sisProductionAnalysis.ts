import { SisAbsentPresent } from "./sisAbsentPresent";
import { SisPositiveNegative } from "./sisPositiveNegative";
import { SisAnalyst } from "./sisAnalyst";
import { SisSupplier } from "./sisSupplier";
import { SisMilkType } from "./sisMilkType";
import { SisProduction } from "./sisProduction";

export class SisProductionAnalysis{
	idSisProductionAnalysis : number;
	acidity : number;
	cryoscopicIndex : number;
	density : number;
	seroproteins : number;
	grease : number;
	sisProduction : SisProduction;
	lactose : number;
	microbialCharge : number;
	ph : number;
	protein : number;
	rsm : number;
	temperature : number;
	milkType : SisMilkType;
	coliforms : SisAbsentPresent;
	inhibitorySubstances : SisAbsentPresent;
	sisAnalyst : SisAnalyst;
	peroxidase : SisPositiveNegative;
	phosphatase : SisPositiveNegative;
	sisSupplier : SisSupplier;
	video:string;

}