import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JobsService {
 public base_url:any = "http://localhost:8000/api/";
  constructor(private http: HttpClient) {

   }

  fetchAll(){
    //api call
    let url = this.base_url+"jobs";
    return this.http.get(url);
  }

  fetchById(id){
    let url = this.base_url+"jobs/"+id;
    return this.http.get(url);
  }

  submitJob(formData){
    //api call 
    let url = this.base_url+"jobs";
    return this.http.post(url,formData);
  }

  updateJob(formData , id){
    let url = this.base_url+"jobs/"+id;
    return this.http.put(url,formData);
  }

  destroy(id){
    let url = this.base_url+"jobs/"+id;
    return this.http.delete(url);
  }



}
