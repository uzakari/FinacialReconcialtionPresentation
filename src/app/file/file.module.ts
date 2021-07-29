import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileRoutingModule } from './file-routing.module';
import { FileComponent } from './file.component';
import { FileDetailsComponent } from './file-details/file-details.component';
import { FileDetailsGridComponent } from './file-details-grid/file-details-grid.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FileComponent,
    FileDetailsComponent,
    FileDetailsGridComponent
  ],
  imports: [
    CommonModule,
    FileRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    FileComponent,
    FileDetailsComponent,
    FileDetailsGridComponent
  ]
})
export class FileModule { }
