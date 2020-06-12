import { SisOpAnalyst } from "./sisOpAnalyst";
import { SisOpSheetFieldValue } from "./sisOpSheetFieldValue";
import { SisOpType } from "./sisOpType";
import { SisOpLot } from "./sisOpLot"; 

export class SisAnalysis{
	idSisOpAnalysis : number;
	data: String ;
	varieta: string;
	lotto:string;
	appezzamento:string;
	nFrutti:number;
	cliente:string;
	tracciabilita:string;
	sisOpType:SisOpType;
	sisOpAnalyst:SisOpAnalyst ;
	sisOpSheetFieldValue:Array<SisOpSheetFieldValue>;
	sisOpLot:Array<SisOpLot>;
}