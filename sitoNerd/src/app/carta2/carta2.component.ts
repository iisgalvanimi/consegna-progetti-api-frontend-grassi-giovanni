import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../model/card.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carta2',
  templateUrl: './carta2.component.html',
  styleUrls: ['./carta2.component.css']
})
export class Carta2Component {
  obs: Observable<Card>
  cardData! : Card;
  constructor(public http: HttpClient)
  {
    this.obs = this.http.get<Card>("https://api.scryfall.com/cards/named?fuzzy=brudiclad-telchor-engineer"); 

    this.obs.subscribe(this.getCardData)
  }
  getCardData=(cardaData: Card)=> {
    this.cardData = cardaData;
  }
}
