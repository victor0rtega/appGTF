import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class AccountService {


  constructor(private http: HttpClient) { }

  getAccount(): Observable<any> {
    return this.getAccountRest();
  }

  getCards(): Observable<any> {
    return this.getCardsRest();
  }

  createAccount(type: string, name: string): Observable<any> {
    return this.createAccountRest(type, name);
  }

  private getAccountRest(): Observable<Response> {
    const token = JSON.parse(localStorage.getItem('token'));
    console.log(token);
    const headers = new HttpHeaders().set('X-access-token', token)
                                    .set('Content-type', 'application/json');
    return this.http.get<any>(
      AppSettings.API_ENDPOINT + 'accounts', { headers: headers }
    );
  }

  private createAccountRest(type: string, name: string): Observable<Response> {
    const token = JSON.parse(localStorage.getItem('token'));
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const userId = currentUser.id;
    const headers = new HttpHeaders().set('X-access-token', token)
                                    .set('Content-type', 'application/json');
    return this.http.post<any>(
      AppSettings.API_ENDPOINT + 'accounts',
      { userId: userId,
        type: type,
        name: name
      },
      { headers: headers },
    );
  }

  private getCardsRest(): Observable<Response> {
    const token = JSON.parse(localStorage.getItem('token'));
    const headers = new HttpHeaders().set('X-access-token', token)
                                      .set('Content-type', 'application/json');
    return this.http.get<any>(
      AppSettings.API_ENDPOINT + 'catalogs/cards', { headers: headers }
    );
  }
}
