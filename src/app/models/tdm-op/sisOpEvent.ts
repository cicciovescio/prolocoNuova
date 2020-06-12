import { SisOpParticella } from "./sisOpParticella";
import { SisOpTypeEvent } from "./sisOpTypeEvent";
import { SisOpProduct } from "./sisOpProduct";
import { SisOpVariety } from "./sisOpVariety";
import { SisOpFieldQdc } from "./SisOpFieldQdc";

export class SisOpEvent{

    idSisOpEvent: number;
	
	dataEvent: String;
	
	sisOpParticelle: Array<SisOpParticella>;
	
	sisOpTypeEvent: SisOpTypeEvent;

	sisOpProduct:SisOpProduct;

	sisOpVariety:SisOpVariety ;

} 