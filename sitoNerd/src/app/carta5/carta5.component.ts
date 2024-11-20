import { Component } from '@angular/core';
import { Card } from '../model/card.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carta5',
  templateUrl: './carta5.component.html',
  styleUrls: ['./carta5.component.css']
})
export class Carta5Component {
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
