import { SisOpLot } from "./sisOpLot";
import { SisLoad } from "./sisLoad";
import { SisLoading } from "./sisLoading";

export class SisOpPalletLot{
   
	idSisOpPalletLot:number;
	colli:number;
	pesoLordo:number;
	platformNumber:number;
	platformTipe:number;
    sisOpLot:SisOpLot;
	sisOpPallet:SisLoad;
} 