import {SisPasteurization} from "./sisPasteurization";
import {SisAnalyst} from "./sisAnalyst";

export class SisProduction{
	idSisProduction : number;

	col2_Hq : number;

	col2_Ps : number;

	col3_Hq : number;

	col3_Ps : number;

	col5_Hq : number;

	col5_Ps : number;

	col750_Hq : number;

	col750_Ps : number;

	cream500 : number;

	cream5000 : number;

	nPieces : number;

	packedQuantity : number;

	provenienceTank : string;

	sisPasteurization : SisPasteurization;

	sisAnalyst: SisAnalyst;
	
	video:string;
}