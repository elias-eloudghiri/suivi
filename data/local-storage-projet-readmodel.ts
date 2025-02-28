import { ProjetReadModel } from "./projet-readmodel";
import { listeProjets, Projet } from "@/suivi/data/liste-projets";

export class LocalStorageProjetReadmodel implements ProjetReadModel {
    private storageKey = 'projets';

    récupérerTout(): Promise<Projet[]> {
        const projetStockéJSON = localStorage.getItem(this.storageKey);
        if (!projetStockéJSON) {
            return Promise.resolve(listeProjets);
        } else {
            const projetStocké = JSON.parse(projetStockéJSON);
            const projetARetourné: Projet = {
                nom: projetStocké.nom,
                id: projetStocké.nom.replaceAll(' ', '-'),
                taches: []
            };
            const listeProjetsConcat = listeProjets.concat([projetARetourné]);
            return Promise.resolve(listeProjetsConcat);
        }
    }

}
