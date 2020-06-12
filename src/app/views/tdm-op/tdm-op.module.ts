import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule, CollapseModule } from "ngx-bootstrap";
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TdmOpRoutingModule } from './tdm-op.routing';
import { TrackComponent } from './track/track.component';
import { ChisiamoComponent } from './track/chisiamo/chisiamo.component';
import { StoriaComponent } from './track/storia/storia.component';
import { StatutComponent } from './track/statut/statut.component';
import { EventComponent } from './track/event/event.component';
import { FinalitaComponent } from './finalita/finalita.component';
import { TesseramentiComponent } from './tesseramenti/tesseramenti.component';
import { AssembleComponent } from './assemble/assemble.component';

@NgModule({
  imports: [
    CommonModule,
    TdmOpRoutingModule,
    BsDatepickerModule.forRoot(),
    NgbModule,
    FormsModule,
    CollapseModule.forRoot()
  ],
  declarations: [
    TrackComponent, 
     ChisiamoComponent, StoriaComponent, StatutComponent, EventComponent, FinalitaComponent, TesseramentiComponent, AssembleComponent
  ]
}) 
export class TdmOpModule { }
