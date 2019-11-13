import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
/*import {Observable} from 'rxjs/observable';
import {Observable} from 'rxjs';*/


@Injectable()

export class ProbandoService {
  urlAObtener: string;

  constructor(
    private http: HttpClient
  ) {
    this.urlAObtener = environment.urlBack;
  }
  llamame() {
    console.log(this.urlAObtener);
    return this.http.get(this.urlAObtener + 'comments');

  }
}
