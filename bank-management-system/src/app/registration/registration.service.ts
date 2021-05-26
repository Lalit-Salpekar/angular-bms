import { Injectable,ErrorHandler } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';  
import { Observable,throwError } from 'rxjs';  
import { retry, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private baseUrl = 'http://localhost:8082/bms/';  
  constructor(private http :HttpClient) {
   }

  getUser(userId : number): Observable<any> {  
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('ContentType', 'application/json');
    
    return this.http.get(`${this.baseUrl}/getUser/${userId}`,{
      headers: headers
    });  
  }  

  addUser(userss : object){
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('ContentType', 'application/json');

    return this.http.post(`${this.baseUrl}registration`, userss , {
      headers: headers
    }).pipe(retry(1),
    catchError(this.handleError)
  );   
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  

}
