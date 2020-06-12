import { SisLoading } from "./sisLoading";
import { SisOpPalletLot } from "./SisOpPalletLot";
import { SisOpLot } from "./sisOpLot";
///pallet////
export class SisLoad{
	idSisOpPallet: number;
	
	imballo: String;
	
	calibro:String; 
	
	variety:String;

	note1:String;
 
	note2:String;
	
	sisOpPalletLot: Array<SisOpPalletLot>;

	sisOpDistinctLoad: SisLoading;

}