import {
    Button,
    Checkbox,
    Column,
    FileUploader, Form,
    Grid,
    Heading,
    ProgressIndicator,
    ProgressStep, Section,
    Stack,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs
} from '@carbon/react';
import CheckboxGroup from "@carbon/react/lib/components/CheckboxGroup/CheckboxGroup";
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Projet, STATUT_TACHE } from "@/suivi/data/liste-projets";
import { LocalStorageProjetReadmodel } from "@/suivi/data/local-storage-projet-readmodel";

const SuiviProjet = () => {
    const router = useRouter();
    const { id } = router.query;
    const [projet, setProjet] = useState<Projet | undefined>();

    useEffect(() => {
        async function recupereProjet() {
            const projets = await new LocalStorageProjetReadmodel().récupérerTout();
            let projet;
            if (id != null) {
                projet = projets.find(
                    (projet) => projet.id === id[0]
                );
            }
            setProjet(projet);
        }

        recupereProjet();
    }, [id]);

    return (
        <Section>
            <Stack gap={4}>
                <Heading>Suivre votre projet : {projet && projet.nom || ''}</Heading>
                <Tabs defaultSelectedIndex={0}>
                    <TabList className="tabs-group" aria-label={''}>
                        <Tab>Progrès</Tab>
                        <Tab>Tâches</Tab>
                        <Tab>Documents</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Grid className="tabs-group-content">
                                <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
                                    <Section>
                                        <Stack gap={4}>
                                            <Heading>L&apos;indicateur de progrès</Heading>
                                            <ProgressIndicator>
                                                {projet && projet.taches.map((tache) => (
                                                    <ProgressStep
                                                        key={tache.nom}
                                                        label={tache.nom}
                                                        secondaryLabel={tache.description}
                                                        complete={tache.statut === STATUT_TACHE.FAIT}
                                                        current={tache.statut === STATUT_TACHE.EN_COURS}
                                                        invalid={tache.statut === STATUT_TACHE.A_FAIRE}
                                                    />
                                                ))}
                                            </ProgressIndicator>
                                        </Stack>
                                    </Section>
                                </Column>
                            </Grid>
                        </TabPanel>
                        <TabPanel>
                            <Grid className="tabs-group-content">
                                <Column lg={16} md={8} sm={4} className="landing-page__tab-content">
                                    <Section>
                                        <Stack gap={4}>
                                            <Heading>Les tâches que vous devez réaliser.</Heading>
                                            <CheckboxGroup {...fieldsetCheckboxProps()}>
                                                <Checkbox labelText={`Envoyer votre Due Diligence`} id="checkbox-label-1"/>
                                                <Checkbox labelText={`Nous faire parvenir votre CNI`} id="checkbox-label-2"/>
                                            </CheckboxGroup>
                                        </Stack>
                                    </Section>
                                </Column>
                            </Grid>
                        </TabPanel>
                        <TabPanel>
                            <Grid className="tabs-group-content">
                                <Column lg={16} md={8} sm={4} className="landing-page__tab-content">
                                    <Section>
                                        <Stack gap={4}>
                                            <Heading>Envoyer nous un fichier important.</Heading>
                                            <Form>
                                                <FileUploader labelTitle="Envoyer nous un fichier important"
                                                    labelDescription="Taille maximum de fichier 500mb. Seul les jpg sont supportés."
                                                    buttonLabel="Ajouter un fichier" buttonKind="primary" size="md"
                                                    filenameStatus="edit"
                                                    accept={['.jpg', '.png']} multiple={true} disabled={false}
                                                    iconDescription="Delete file"
                                                    name="" id={"fileInput"}
                                                />
                                                <Button type="submit">Envoyer mon fichier</Button>
                                            </Form>
                                        </Stack>
                                    </Section>
                                </Column>
                            </Grid>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Stack>
        </Section>
    );
};

const fieldsetCheckboxProps = () => ({
    className: 'some-class',
    legendText: 'Envoyez nous vos document ! 🎯'
});

export default SuiviProjet;
