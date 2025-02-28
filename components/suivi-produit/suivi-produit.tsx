import { Heading } from "@carbon/react";
import React from "react";
import GrapheRentabilité from "../GrapheRentabilité";
import GrapheSinistres from "../GrapheSinistres";
import styles from './SuiviProduit.module.css';

export function SuiviProduit() {
    return (
        <div className={styles.suiviProduit}>
            <Heading>Suivi du produit Assurance tout risques</Heading>
            <div className={styles.graphContainer}>
                <div className={styles.graphWrapper}>
                    <div className={styles.graphCard}>
                        <GrapheRentabilité />
                    </div>
                    <div className={styles.graphDescription}>
                        Votre rentabilité peut-être optimisée. Pour suivre la procédure d’optimisation, appelez votre chef de projet.
                    </div>
                </div>
                <div className={styles.graphWrapper}>
                    <div className={styles.graphCard}>
                        <GrapheSinistres />
                    </div>
                    <div className={styles.graphDescription}>
                        Analysez les sinistres pour identifier les tendances et améliorer la gestion des risques.
                    </div>
                </div>
            </div>
        </div>
    );
}
