import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private apiUrl = `${environment.apiUrl}/produits`;

  constructor(private http: HttpClient) { }

  addProduit(produit: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, produit);
  }

  /* supprimerProduit(id: string): Observable<any> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);  } */
  
}
