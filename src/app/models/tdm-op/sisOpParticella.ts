import { SisOpProduct } from "./sisOpProduct";
import { SisOpVariety } from "./sisOpVariety";
import { SisOpEvent } from "./sisOpEvent";

export class SisOpParticella{

    idSisOpParticella: number;

	fogliodimappa: number;
	
	sesto: string;
	
	superficie: number;
	
	portainnesto: string;
	
	allevamento: string;
	
	dataimpianto: String;
	
	datafioritura: String;
 
	dataraccolto: String;
	
	particelle: string;
	
	comune_catastale: string;

	appezzamento: string;

	sisOpEvents: Array<SisOpEvent>;

	product: SisOpProduct;

	variety: SisOpVariety;

	latitudine: number;

	longitudine: number;
	
}