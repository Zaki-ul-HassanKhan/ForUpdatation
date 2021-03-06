import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProperty } from '../property/IProperty.interface';
@Injectable({
  providedIn: 'root'
})
export class HousingService {


  constructor(private http:HttpClient) { }
  getAllProperties(SellRent: number): Observable<IProperty[]>{
    return this.http.get('data/properties.json').pipe(
      map(data => {
        const propertiesArray: Array<any> =[];
       for (const id in data){
          if (data.hasOwnProperty(id)){
             propertiesArray.push(data[id]);
          }
       }
      return propertiesArray;
      }

      )
    )

  }
}
