import { IonGrid, IonRow, IonCol, IonImg, IonCard, IonCardHeader, 
    IonCardSubtitle, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonNavLink  } from "@ionic/react";
import './HotlinesContent.css'

const HotlinesContent = () => (
    <IonGrid class='myGrid'>
        <IonRow>
            <IonCol>
            <h2>Emergency Hotlines</h2>
                <IonList>
                    <IonItem>
                        <IonLabel>
                        PDDRRMO – 09565822396
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>
                        PHO-HEMS – 09382775443
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>
                        PAGASA - 3332416
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>
                        PNP MASBATE CITY – 09985986033
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>
                        BFP MASBATE – 3331187, 09230886002
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>
                        PDDRRMO – 09565822396
                        </IonLabel>
                    </IonItem>
                </IonList>

            </IonCol>
        </IonRow>
    </IonGrid>
);

export default HotlinesContent;