import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material.module';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { VrsteGljivaComponent } from './vrste-gljiva/vrste-gljiva.component';
import { DrveceComponent } from './drvece/drvece.component';
import { PlaninaBukuljaVencacComponent } from './planina-bukulja-vencac/planina-bukulja-vencac.component';
import { ReceptiComponent } from './recepti/recepti.component';
import { ForumComponent } from './forum/forum.component';
import { RecnikComponent } from './recnik/recnik.component';
import { LiteraturaComponent } from './literatura/literatura.component';
import { PreporuceniSajtoviComponent } from './preporuceni-sajtovi/preporuceni-sajtovi.component';
import { TekstoviComponent } from './tekstovi/tekstovi.component';

@NgModule({
    declarations: [
      VrsteGljivaComponent,
      DrveceComponent,
      PlaninaBukuljaVencacComponent,
      ReceptiComponent,
      ForumComponent,
      RecnikComponent,
      LiteraturaComponent,
      PreporuceniSajtoviComponent,
      TekstoviComponent
    ],
    imports: [
      CommonModule,
      AngularMaterialModule,
      PagesRoutingModule
    ]
})
export class PagesModule {}
