import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthLoginInfo} from '../app.authlogininfo';
import { JwtResponse} from '../_model/app.jwtresponse';
import { SignUpInfo} from '../_model/app.signupinfo';
 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
export class AuthService {
 
  private loginUrl = 'http://localhost:9085/auth/login';
  private signupUrl = 'http://localhost:9085/auth/register';
 
  constructor(private http: HttpClient) {
  }
 
  // JwtResponse(accessToken,type,username,authorities)
  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }
 
  // SignUpInfo(name,username,email,role,password)
  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
}