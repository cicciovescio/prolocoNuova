import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {SisDocumentType} from '../../../models/tdm-milk/sisDocumentType';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DocumentTypeService {
    public API = environment.milk.api;
  public OPERATION_API = this.API + '/document-types';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any> {
    return this.http.get(this.OPERATION_API)
  }

  public get(id: number){
    return this.http.get(this.OPERATION_API + '/' + id);
  }

  public save(op: SisDocumentType) {
    return this.http.post<SisDocumentType>(this.API + '/create-document-type', op);
  }

  public delete(documentType: SisDocumentType){
    return this.http.get(this.API + '/delete-document-type/' + documentType.idSisDocumentType);
  }
}
