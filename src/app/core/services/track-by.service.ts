import { Injectable } from '@angular/core';
import { UnmatchFileResultContent } from 'src/app/shared/interfaces';

@Injectable({
  providedIn: 'root',
  
})
export class TrackByService {

  constructor() { }

  
  unmatchFileRecords(index: number, unmat: UnmatchFileResultContent) {
    return unmat.reference;
  }

}
