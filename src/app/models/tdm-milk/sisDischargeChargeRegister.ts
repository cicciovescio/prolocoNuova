import { SisDocumentType } from "./sisDocumentType";
import { SisOperation } from "./sisOperation";
import { SisStable } from "./sisStable";

export class SisDischargeChargeRegister{
	idSisRegister : number;
	documentDate : Date;
	milkCharge : number;
	milkDischarge : number;
	nDocument : string;
	nOrder : string;
	sisDocumentType : SisDocumentType;
	sisOperation : SisOperation;
	sisStable : SisStable;
	operationDate : String;
	video:string;
}