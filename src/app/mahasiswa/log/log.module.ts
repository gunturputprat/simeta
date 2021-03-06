import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Log } from './log.component';
import { routing } from './log.routing';
import { AlertModule } from 'ng2-bootstrap/alert';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    AlertModule.forRoot(),
    MyDatePickerModule,
    routing
  ],
  declarations: [
    Log
  ],
  providers: [
  ]
})
export default class LogModule {}
