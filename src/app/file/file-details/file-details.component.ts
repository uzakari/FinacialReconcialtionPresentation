import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-details',
  templateUrl: './file-details.component.html',
  styleUrls: ['./file-details.component.css']
})
export class FileDetailsComponent implements OnInit {

  @Input() files: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
