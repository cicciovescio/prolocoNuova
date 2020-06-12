import { SisFoodTechnician } from "./sisFoodTechnician";
import { SisStable } from "./sisStable";
import { SisFoodCard } from "./sisFoodCard";

export class SisFoodSheetAnagraphic{
	idSisFoodSheetAnagraphic : number;
    description : string;
    endDate : String;
    startDate : String;
    state : boolean;
    sisFoodTechnician : SisFoodTechnician;
    sisStables : Array<SisStable>;
    sisFoodCards : Array<SisFoodCard>;
}