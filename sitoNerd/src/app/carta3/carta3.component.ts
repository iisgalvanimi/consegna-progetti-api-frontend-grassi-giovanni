import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../model/card.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carta3',
  templateUrl: './carta3.component.html',
  styleUrls: ['./carta3.component.css']
})
export class Carta3Component {
  obs: Observable<Card>
  cardData! : Card;
  constructor(public http: HttpClient)
  {
    this.obs = this.http.get<Card>("https://api.scryfall.com/cards/named?fuzzy=aust+com");
    this.obs.subscribe(this.getCardData)
  }
  getCardData=(cardaData: Card)=> {
    this.cardData = cardaData;
  }}

