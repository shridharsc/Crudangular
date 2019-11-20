import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataprocessService {
  public url="http://localhost:3000/"
  constructor(private http:HttpClient) { }

  selectData(tablename){
    return this.http.get(this.url+tablename);
  }

  insertData(record,tablename)
  {
    return this.http.post(this.url+tablename,record);
  }

  deleteData(tablename,id){
    return this.http.delete(this.url+tablename+"/"+id);
  }

  updateData(tablename,id,data){
    return this.http.put(this.url+tablename+"/"+id,data);
  }
}
