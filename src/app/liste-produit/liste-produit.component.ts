import { HttpClient } from '@angular/common/http';
import { Component,  OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrl: './liste-produit.component.css'
})
export class ListeProduitComponent implements OnInit {
  
  produits: any[] = [];

  constructor(private http: HttpClient) {}

  /*ngOnInit(): void {
    this.http.get(`${environment.apiUrl}/produits`).subscribe(data => {
      this.produits = data as any[];
    });
  }*/

  ngOnInit(): void {
    this.http.get<any[]>(`${environment.apiUrl}/produits`).subscribe(
      data => {
        this.produits = data;
      },
      error => {
        console.error('Erreur lors de la récupération des produits', error);
      }
    );
  }

}
