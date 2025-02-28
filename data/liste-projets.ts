interface Tache {
    nom: string
    description: string
    statut: STATUT_TACHE
}

export interface Projet {
    nom: string
    id: string
    taches: Tache[]
}

export enum STATUT_TACHE {
    FAIT = 'FAIT',
    EN_COURS = 'EN_COURS',
    A_FAIRE = 'A_FAIRE',
}

export const listeProjets: Projet[] = [
    {
        nom: 'Assurance nouveau vehicule 🎯',
        id: 'projet-1',
        taches: [
            {
                nom: 'Documents',
                description: 'Transmettre les documents',
                statut: STATUT_TACHE.FAIT
            },
            {
                nom: 'APIs',
                description: 'Connecter les flux API',
                statut: STATUT_TACHE.FAIT
            },
            {
                nom: 'Contrat',
                description: 'Remplir le formulaire',
                statut: STATUT_TACHE.EN_COURS
            },
            {
                nom: 'Soutenance',
                description: 'Passer devant le jury',
                statut: STATUT_TACHE.A_FAIRE
            },
        ]
    },
    {
        nom: 'Assurance retard de vol ✈️',
        id: 'projet-2',
        taches: [
            {
                nom: 'Due diligence',
                description: 'Signer le document',
                statut: STATUT_TACHE.FAIT
            },
            {
                nom: 'Engagement',
                description: 'Sélectionner un pack d\'engagement',
                statut: STATUT_TACHE.A_FAIRE
            },
        ]
    }
];

export default listeProjets;

