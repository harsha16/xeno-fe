import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

const localUrl = 'http://localhost:8081/payroll/calculation';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'jwt-token'
  })
};

@Injectable()
export class RestApiService {
  
  // // Define API
  // apiUrl = 'http://localhost:3000';

  // constructor(private http: HttpClient) { }

  // // Http Options
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // }  

  // // HttpClient API get() method
  // getEmployees(): Observable<any> {
  //   return this.http.get<any>(this.apiURL + '/employees')
  //   .pipe(
  //     retry(1),
  //     catchError(this.handleError)
  //   )
  // }

  // // HttpClient API get() method
  // getEmployee(id): Observable<any> {
  //   return this.http.get<any>(this.apiURL + '/employees/' + id)
  //   .pipe(
  //     retry(1),
  //     catchError(this.handleError)
  //   )
  // }  

  // // HttpClient API post() method
  // createEmployee(employee): Observable<any> {
  //   return this.http.post<any>(this.apiURL + '/employees', JSON.stringify(employee), this.httpOptions)
  //   .pipe(
  //     retry(1),
  //     catchError(this.handleError)
  //   )
  // }  

  // // HttpClient API put() method
  // updateEmployee(id, employee): Observable<any> {
  //   return this.http.put<any>(this.apiURL + '/employees/' + id, JSON.stringify(employee), this.httpOptions)
  //   .pipe(
  //     retry(1),
  //     catchError(this.handleError)
  //   )
  // }

  // // HttpClient API delete() method
  // deleteEmployee(id){
  //   return this.http.delete<any>(this.apiURL + '/employees/' + id, this.httpOptions)
  //   .pipe(
  //     retry(1),
  //     catchError(this.handleError)
  //   )
  // }

  // // Error handling 
  // handleError(error) {
  //    let errorMessage = '';
  //    if(error.error instanceof ErrorEvent) {
  //      // Get client-side error
  //      errorMessage = error.error.message;
  //    } else {
  //      // Get server-side error
  //      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //    }
  //    window.alert(errorMessage);
  //    return throwError(errorMessage);
  // }


  // public get(path: string, parameters: any, displayLoading: boolean = true) {

  //   const url = this.apiUrl + '/' + path;

  //   // Construct parameters.
  //   const searchParams = new URLSearchParams();
  //   for (const property in parameters) {
  //     searchParams.set(property, encodeURIComponent(parameters[property]));
  //   }

  //   const urlArg: RequestOptionsArgs = {
  //     params: searchParams,
  //     method: RequestMethod.Get,
  //     responseType: ResponseContentType.Json,
  //     headers: new Headers({'Content-Type': 'application/json'}),
  //     search: searchParams,
  //     url: url
  //   };

  //   const sharable = this.http.get(url, urlArg);
  //   // this.postProcessing(sharable, displayLoading);
  //   return sharable;
  // }

  constructor(private http: HttpClient) { }

  // calculatePayroll(dto: CalPayrollReqDto): Observable<any> {
  //   return this.http.post<CalPayrollReqDto>(localUrl, dto, httpOptions)
  //     .pipe(
  //       catchError(this.handleError('calculatePayroll', dto))
  //     );
  // }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }

  calculate(options: string): Observable<any> {
    const url = localUrl + options
    return this.http.get<any[]>(url).pipe(
      retry(3), catchError(this.handleError<any[]>('calculatePayroll', [])));
  }

}