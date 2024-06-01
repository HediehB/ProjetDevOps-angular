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

    if (this.produit.nom && this.produit.prix) {
      
      this.http.post(`${environment.apiUrl}/produit/ajout`, this.produit).subscribe(
        response => {
          console.log('Produit ajouté avec succès', response);
          // Réinitialiser le formulaire après l'ajout du produit
          this.produit = { nom: '', prix: '' };
        },
        error => {
          console.error('Erreur lors de l\'ajout du produit', error);
        }
      );
    } else {
      console.warn('Les champs nom et prix sont obligatoires.');
    }
  }

}
