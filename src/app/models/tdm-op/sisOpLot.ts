import { SisOpSupplier } from "./sisOpSupplier";
import { SisAnalysis } from "./sisAnalysis";
import { SisOpParticella } from "./sisOpParticella";
import { SisOpProduct } from "./sisOpProduct";
import { SisOpVariety } from "./sisOpVariety";

export class SisOpLot{
	idSisOpLot : number;
	sisOpAnalisi:SisAnalysis;
	lot:string;
	dataEntrata: String;
	nBinsI: number;
	nBinsII: number;
	pesoNettoBinsI: number;
	pesoNettoBinsII: number;
	pesoLordoBinsI:number;
	pesoLordoBinsII:number;
	totaleRaccoltaGiornaliera:number;
	totaleRaccoltaGenerale:number;
	leaf:boolean;
	passport:string;
	sisOpProduct: SisOpProduct;
	sisOpVariety: SisOpVariety
	sisOpSupplier:SisOpSupplier;
	sisOpParticella:SisOpParticella;
} 