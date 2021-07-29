import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { IFileDetailsResult, IUnmatchFileResult } from 'src/app/shared/interfaces';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  getFilesDetails(formdata: FormData): Observable<IFileDetailsResult> {
    return this.http.post<IFileDetailsResult>(`${environment.ExternalService.FileService.baseUrl}api/FileUpload`, formdata)
        .pipe(
            tap(c => console.log(c)),
            catchError(this.handleError)
        );
  }

  getUnmatchedFilesDetails(formdata: FormData): Observable<IUnmatchFileResult> {
    return this.http.post<IUnmatchFileResult>(`${environment.ExternalService.FileService.baseUrl}api/FileUpload/unmatchfileresult`, formdata)
        .pipe(
            tap(c => console.log(c)),
            catchError(this.handleError)
        );
  }


  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
        const errMessage = error.error.message;
        return Observable.throw(errMessage);
        // Use the following instead if using lite-server
        // return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(error || 'server error');
}
}
