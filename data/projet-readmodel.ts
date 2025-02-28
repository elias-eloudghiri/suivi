import { Projet } from "@/suivi/data/liste-projets";

export interface ProjetReadModel {
    récupérerTout: () => Promise<Projet[]>
}
