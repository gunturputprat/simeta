import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Mandiri } from './mandiri.component';
import { routing }       from './mandiri.routing';
import { AlertModule } from 'ng2-bootstrap/alert';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    AlertModule.forRoot(),
    routing
  ],
  declarations: [
    Mandiri
  ],
  providers: [
  ]
})
export default class MandiriModule {}
