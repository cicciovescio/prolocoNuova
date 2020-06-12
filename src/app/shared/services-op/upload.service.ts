import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpRequest,
  HttpEventType,
  HttpResponse
} from "@angular/common/http";


import {environment} from "../../../environments/environment";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root' 
})
export class UploadService {
  
  public MILK_API = environment.milk.api;
  public OP_API = environment.op.api;

  constructor(private http: HttpClient) {}

  public videoExistsCheck(uri: string): Observable<{}>  {
    return this.http.head(uri, {observe: 'response'})
  }
  
  public upload(files: Set<File>, kind: string, data: string, view:string): { [key: string]: { progress: Observable<number> } } {
    
    // this will be the our resulting map
    const status: { [key: string]: { progress: Observable<number> } } = {};

    let api;
    if (kind == "milk") {
      api = this.MILK_API + "/video-upload"
    }
    else if (kind == "op") {
      api = this.OP_API + "/video-upload"
    }
    api += "/" + data
    files.forEach(file => {
      // create a new multipart-form for every file
      const formData: FormData = new FormData();
      formData.append("file", file, view);

      // create a http-post request and pass the form
      // tell it to report the upload progress
      const req = new HttpRequest("POST", api, formData, {
        reportProgress: true
      });

      // create a new progress-subject for every file
     
      // send the http-request and subscribe for progress-updates

      let startTime = new Date().getTime();
      this.http.request(req).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          // calculate the progress percentage

          const percentDone = Math.round((100 * event.loaded) / event.total);
          // pass the percentage into the progress-stream
      
        } else if (event instanceof HttpResponse) {
          // Close the progress-stream if we get an answer form the API
          // The upload is complete
         
        }
      });

      // Save every progress-observable in a map of all observables
      
    });

    // return the map of progress.observables
    return status;
  }
}
 