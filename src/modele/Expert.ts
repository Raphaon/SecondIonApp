import { Domaine } from './Domaine';

export interface  Expert
{
    id: string;
    tel1: number;
    tel2: number;
    ville: string;
    pays: string;
    domaine: Domaine;
    email: string;
    prix: number;
    heure: string;
    nom:string;
    prenom: string;
    note: number[];
    quartier: string;
    picture:string;
}

