import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TrackByService } from 'src/app/core/services/track-by.service';

@Component({
  selector: 'app-file-details-grid',
  templateUrl: './file-details-grid.component.html',
  styleUrls: ['./file-details-grid.component.css'],
  
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class FileDetailsGridComponent implements OnInit {

  constructor(public trackbyService: TrackByService) { }


  @Input() unmatachFilesRecords:any = [];

  ngOnInit(): void {
  }

}
