import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileService } from '../core/services/file.service';
import { FileCompareDto, IFileDetailsResult, IUnmatchFileResult } from '../shared/interfaces';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  title = "";

  currentFiles: File[] = [];

  filesDetails: FileCompareDto[] = [];

  filesUnmatchedDetails: any = [];

  fileUploadForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
              private fileService: FileService) { }

  ngOnInit(): void {

    this.buildFileForm();

    this.title = "Files";

  
  }

  buildFileForm() {
    this.fileUploadForm = this.formBuilder.group({
      firstFile: ['', []],
      secondFile: ['', []]
    });
  }

  onSelectedFile(event:any){
    console.log(event);
    this.currentFiles.length

    this.currentFiles = [...event.target.files, ...this.currentFiles ]
    console.log(this.currentFiles);

  }
  compareFile(): void {

    let firstFile = this.currentFiles.length > 0? this.currentFiles[0]: null;

    let secondFile = this.currentFiles.length > 0? this.currentFiles[1]: null;

    const formData = new FormData();
    console.log('file content to send', firstFile);
    formData.append('FirstFile', firstFile? firstFile: "");
    formData.append('SecondFile', secondFile? secondFile: "");

    this.fileService.getFilesDetails(formData).subscribe(
      (fileDetailsResult:IFileDetailsResult) =>{
        if(fileDetailsResult.success){
          this.filesDetails = fileDetailsResult.fileCompareDtos;
        }

      }
     );
  }

  deleteFile(index: number): void {
    this.currentFiles.splice(index, 1);

    this.filesDetails = [];
  }


  unmatchFileRecords(): any {

    let firstFile = this.currentFiles.length > 0? this.currentFiles[0]: null;
    let secondFile = this.currentFiles.length > 0? this.currentFiles[1]: null;

    const formData = new FormData();
    formData.append('FirstFile', firstFile? firstFile: "");
    formData.append('SecondFile', secondFile? secondFile: "");

    this.fileService.getUnmatchedFilesDetails(formData).subscribe(
      (unmatchFileResult:IUnmatchFileResult) =>{
        this.filesUnmatchedDetails = unmatchFileResult
      }
     );
  }

}
