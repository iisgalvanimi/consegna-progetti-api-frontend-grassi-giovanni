import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Card } from '../model/card.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-carta1',
  templateUrl: './carta1.component.html',
  styleUrls: ['./carta1.component.css']
})
export class Carta1Component
{
  obs: Observable<Card>
  cardData! : Card;
  constructor(public http: HttpClient)
  {
    this.obs = this.http.get<Card>("https://api.scryfall.com/cards/named?fuzzy=juzám-djinn");
    this.obs.subscribe(this.getCardData)
  }
  getCardData=(cardaData: Card)=> {
    this.cardData = cardaData;
  }
}



/*
{"object":"card","id":"9f868023-6035-403d-ba91-7a4840c6c392","oracle_id":"bf45f5ee-4d5f-4920-b612-b5492c2f035d","multiverse_ids":[675458],"mtgo_id":131403,"tcgplayer_id":575094,"cardmarket_id":786259,"name":"Aminatou, Veil Piercer","lang":"en","released_at":"2024-09-27","uri":"https://api.scryfall.com/cards/9f868023-6035-403d-ba91-7a4840c6c392","scryfall_uri":"https://scryfall.com/card/dsc/1/aminatou-veil-piercer?utm_source=api","layout":"normal","highres_image":true,"image_status":"highres_scan","image_uris":{"small":"https://cards.scryfall.io/small/front/9/f/9f868023-6035-403d-ba91-7a4840c6c392.jpg?1726596831","normal":"https://cards.scryfall.io/normal/front/9/f/9f868023-6035-403d-ba91-7a4840c6c392.jpg?1726596831","large":"https://cards.scryfall.io/large/front/9/f/9f868023-6035-403d-ba91-7a4840c6c392.jpg?1726596831","png":"https://cards.scryfall.io/png/front/9/f/9f868023-6035-403d-ba91-7a4840c6c392.png?1726596831","art_crop":"https://cards.scryfall.io/art_crop/front/9/f/9f868023-6035-403d-ba91-7a4840c6c392.jpg?1726596831","border_crop":"https://cards.scryfall.io/border_crop/front/9/f/9f868023-6035-403d-ba91-7a4840c6c392.jpg?1726596831"},"mana_cost":"{1}{W}{U}{B}","cmc":4,"type_line":"Legendary Creature — Human Wizard","oracle_text":"At the beginning of your upkeep, surveil 2. (Look at the top two cards of your library, then put any number of them into your graveyard and the rest on top of your library in any order.)\nEach enchantment card in your hand has miracle. Its miracle cost is equal to its mana cost reduced by {4}. (You may cast a card for its miracle cost when you draw it if it's the first card you drew this turn.)","power":"2","toughness":"4","colors":["B","U","W"],"color_identity":["B","U","W"],"keywords":["Surveil"],"legalities":{"standard":"not_legal","future":"not_legal","historic":"not_legal","timeless":"not_legal","gladiator":"not_legal","pioneer":"not_legal","explorer":"not_legal","modern":"not_legal","legacy":"legal","pauper":"not_legal","vintage":"legal","penny":"not_legal","commander":"legal","oathbreaker":"legal","standardbrawl":"not_legal","brawl":"not_legal","alchemy":"not_legal","paupercommander":"not_legal","duel":"legal","oldschool":"not_legal","premodern":"not_legal","predh":"not_legal"},"games":["paper","mtgo"],"reserved":false,"foil":true,"nonfoil":true,"finishes":["nonfoil","foil"],"oversized":false,"promo":false,"reprint":false,"variation":false,"set_id":"4c822528-83c3-42c7-8708-dd1d37166819","set":"dsc","set_name":"Duskmourn: House of Horror Commander","set_type":"commander","set_uri":"https://api.scryfall.com/sets/4c822528-83c3-42c7-8708-dd1d37166819","set_search_uri":"https://api.scryfall.com/cards/search?order=set&q=e%3Adsc&unique=prints","scryfall_set_uri":"https://scryfall.com/sets/dsc?utm_source=api","rulings_uri":"https://api.scryfall.com/cards/9f868023-6035-403d-ba91-7a4840c6c392/rulings","prints_search_uri":"https://api.scryfall.com/cards/search?order=released&q=oracleid%3Abf45f5ee-4d5f-4920-b612-b5492c2f035d&unique=prints","collector_number":"1","digital":false,"rarity":"mythic","card_back_id":"0aeebaf5-8c7d-4636-9e82-8c27447861f7","artist":"David Palumbo","artist_ids":["04ce1c75-e30c-4b7a-8cb0-b53e4ecc2f39"],"illustration_id":"4199140f-4e69-49a9-94dd-d3836631134d","border_color":"borderless","frame":"2015","frame_effects":["legendary"],"security_stamp":"oval","full_art":false,"textless":false,"booster":false,"story_spotlight":false,"edhrec_rank":7982,"prices":{"usd":"0.67","usd_foil":"0.55","usd_etched":null,"eur":"0.59","eur_foil":"0.76","tix":"5.90"},"related_uris":{"gatherer":"https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=675458&printed=false","tcgplayer_infinite_articles":"https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26partner%3Dscryfall%26q%3DAminatou%252C%2BVeil%2BPiercer","tcgplayer_infinite_decks":"https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26partner%3Dscryfall%26q%3DAminatou%252C%2BVeil%2BPiercer","edhrec":"https://edhrec.com/route/?cc=Aminatou%2C+Veil+Piercer"},"purchase_uris":{"tcgplayer":"https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F575094%3Fpage%3D1","cardmarket":"https://www.cardmarket.com/en/Magic/Products/Singles/Commander-Duskmourn-House-of-Horror/Aminatou-Veil-Piercer?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall","cardhoarder":"https://www.cardhoarder.com/cards/131403?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"}} (con questa base di dati in json considerando che sto facendo un sito con angular, dimmi passo passo come far comparire l'immagine e la descrizione di una carta specifica, usa questa come esempio)
*/
