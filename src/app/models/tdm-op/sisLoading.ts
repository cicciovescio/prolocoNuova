import { SisLoad } from "./sisLoad";
import { SisOpPalletLot } from "./SisOpPalletLot";

////distinta di carico///
export class SisLoading {
	idSisOpDistinctLoad: number;
	vettore: string;
	data: String;
	ocin: number;
	platformNumberI: number;
	platformNumberII: number;
	platformTypeI: number;
	platformTypeII: number;
	nBancali: number;
	exitLot: string;
	compliantProduct: boolean;
	globalGap: boolean;
	destinazione:string; 
	sisOpPallet:SisLoad;
	video:string;

}