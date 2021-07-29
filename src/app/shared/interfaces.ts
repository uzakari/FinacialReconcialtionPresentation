export interface FileCompareDto {
    fileName: string;
    totalRecords: number;
    matchingRecords: number;
    unmatchingRecords: number;
    partialMatchRecords: number
}

export interface IFileDetailsResult {
    fileCompareDtos: FileCompareDto[];
    success: boolean;
    message?: any;
    validationErrors?: any;
}


export interface UnmatchFileResultContent {
    date: Date;
    reference: string;
    amount: number;
}

export interface IUnmatchFileResult {
    fileName: string;
    unmatchFileResultContents: UnmatchFileResultContent[];
}