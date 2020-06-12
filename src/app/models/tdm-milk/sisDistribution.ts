import { SisMilkType } from "./sisMilkType";
import { SisDistributionNominative } from "./sisDistributionNominative";

export class SisDistribution{
	idSisDistribution : number;

	charge : number;

	dateDocument : Date;

	discharge : number;

	nDocument : string;

	nOrder : string;

	natureDocument : number;

	operationDate : Date;

	sisDistributionNominative : SisDistributionNominative;

	sisMilkType : SisMilkType;
}