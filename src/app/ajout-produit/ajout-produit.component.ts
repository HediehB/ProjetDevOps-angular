import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrl: './ajout-produit.component.css'
})
export class AjoutProduitComponent {
  
  produit = { nom: '', prix: '' };

  constructor(private http: HttpClient) {}

  ajouterProduit(): void {
    this.http.post(`${environment.apiUrl}/produits`, this.produit).subscribe();
  }
}
