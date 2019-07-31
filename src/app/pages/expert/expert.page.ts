import { Component, OnInit } from '@angular/core';
import { Domaine } from 'src/modele/Domaine';
import { Expert } from '../../../modele/Expert';

@Component({
  selector: 'app-expert',
  templateUrl: './expert.page.html',
  styleUrls: ['./expert.page.scss'],
})
export class ExpertPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  domaines: Domaine[] = [
    {id: "1", title: "Music", sector: "Afro"},
    {id: "2", title: "Music", sector: "POP"},
    {id: "3", title: "Informatique", sector: "Genie Logiciel"},
    {id: "4", title: "Music", sector: "Comptabilite"}
  ];
  myexperts: Expert[] = [
    {id:"1", nom: "Ondobo Mvolo", prenom: "Rapha", tel1: 875646545, tel2: 875646545, picture:"./../../../assets/images/ananas.png", note:[1, 5,3,5,4,3,5], pays:"Cameroun", ville:"Yaounde", email:"raphao@sdfsd.com", quartier: "Dagobert", prix:5000, heure:"8h-10h", domaine: this.domaines[3]  },
    {id:"1", nom: "Mouhamed", prenom: "njipena", tel1: 875646545, tel2: 875646545, picture:"./../../../assets/images/ananas.png", note:[1, 2,3,4,4,3,5], pays:"Cameroun", ville:"Yaounde", email:"raphao@sdfsd.com", quartier: "Dagobert", prix:5000, heure:"18h-20h", domaine: this.domaines[3]  },
    {id:"1", nom: "Ondobo Mvolo", prenom: "Rapha", tel1: 875646545, tel2: 875646545, picture:"./../../../assets/images/ananas.png", note:[1, 5,3,5,4,3,5], pays:"Cameroun", ville:"Yaounde", email:"raphao@sdfsd.com", quartier: "Dagobert", prix:5000, heure:"8h-10h", domaine: this.domaines[3]  }
  ];

  moyNote(expert: Expert)
  {
     let totalNote: number = 0;
    let  nbre: number = 0;
     expert.note.forEach(element => {
         nbre++;
       totalNote += element;
   }); 
   return Math.round(totalNote/nbre);
 }





}
