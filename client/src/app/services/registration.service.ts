import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {IUserData} from "../models/userData";

@Injectable({
  providedIn: "root"
})
export class RegistrationService {
  constructor(
    private http: HttpClient) {
  }

  registration(user: IUserData): Observable<IUserData> {
    return this.http.post<IUserData>("http://localhost:3000/registration", user);
  }
}
