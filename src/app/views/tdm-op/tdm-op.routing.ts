import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackComponent } from './track/track.component';
import { ChisiamoComponent } from './track/chisiamo/chisiamo.component';
import { StatutComponent } from './track/statut/statut.component';
import { StoriaComponent } from './track/storia/storia.component';
import { EventComponent } from './track/event/event.component';
import { FinalitaComponent } from './finalita/finalita.component';
import { TesseramentiComponent } from './tesseramenti/tesseramenti.component';
import { AssembleComponent } from './assemble/assemble.component';


const routes: Routes = [
    {
        path: '',
        component: TrackComponent,
    },
    {
        path: 'welcome',
        component: TrackComponent,
    },
    {
        path: 'La Pro Loco',
        component: ChisiamoComponent,
    },
    {
        path: 'Statuto',
        component: StatutComponent,
    },
    {
        path: 'Assemblee',
        component: AssembleComponent,
    },
    {
        path: 'Storia',
        component: StoriaComponent,
    },
    {
        path: 'Eventi',
        component: EventComponent,
    }
    ,
    {
        path: 'Finalita',
        component: FinalitaComponent,
    },
    {
        path: 'Tesseramenti',
        component: TesseramentiComponent,
    }
]; 

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TdmOpRoutingModule { }
