import { SisDocumentType } from "./sisDocumentType";
import { SisFood } from "./sisFood";
import { SisUom } from "./sisUom";
import { SisFoodSheetAnagraphic } from "./sisFoodSheetAnagraphic";

export class SisFoodCard{
	idSisFoodCard : number;
    qtaFresche : number;
    qtaGroup : number;
    qta : number;
    notes : string;
    sisUom : SisUom;
    sisFoodId : SisFood;
    sisFoodSheetAnagraphic : SisFoodSheetAnagraphic;
    qta_2: number;
}