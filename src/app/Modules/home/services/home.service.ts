import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  endPointUrl = environment.endPointUrl;

  constructor(private http: HttpClient) {}

  addSuppliesRequest(requestData: any): Observable<any> {
    return this.http.post(`${this.endPointUrl}contact-us`, requestData);
  }

  contactUs(requestData: any): Observable<any> {
    return this.http.post(`${this.endPointUrl}contact-us`, requestData);
  }

  addFeesInstallmentRequest(requestData: any): Observable<any> {
    return this.http.post(`${this.endPointUrl}contact-us`, requestData);
  }

  sendContactRequest(requestData: any): Observable<any> {
    return this.http.post(`${this.endPointUrl}contact-us`, requestData);
  }

}
