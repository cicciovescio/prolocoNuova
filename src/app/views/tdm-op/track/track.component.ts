import { Component, OnInit, ɵConsole } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/services-op/product/product.service';
import { SisOpProduct } from 'src/app/models/tdm-op/sisOpProduct';
import { SisOpVariety } from 'src/app/models/tdm-op/sisOpVariety';
import { VarietyService } from 'src/app/shared/services-op/variety/variety.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
  operationDatePicker: NgbDateStruct;
  lotto: string;
  public term;
  public prodotto;
  public varieta;
  public language: string;
  currentRate = 0;
  prodVar: Array<SisOpProduct> = new Array<SisOpProduct>();
  variety: Array<SisOpVariety>;
  varieties: Array<SisOpVariety>;
  immagini: Array<String>= new Array <String>();
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private varietyService: VarietyService) {
  }

  ngOnInit() {
   this.immagini.push("assets/images/pagina_iniziale0.png")
   this.immagini.push("assets/images/pagina_iniziale2.png")
   for(var i=0;i<this.immagini.length;i++)
   {
     console.log(this.immagini[i]);
   }
   
  }
}
