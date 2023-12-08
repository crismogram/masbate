import { IonGrid, IonRow, IonCol, IonImg, IonCard, IonCardHeader, 
    IonCardSubtitle, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel  } from "@ionic/react";
import './TouristSpotsContent.css'

const TouristSpotsContent = () => (
    <IonGrid class='myGrid'>
        <IonRow>
            <IonCol>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle><h3>Swim by the Sandbar</h3></IonCardTitle>
                        <IonCardSubtitle>
                        Buntod Reef Marine Sanctuary and Sandbar is one of the most-visited and highly popular tourist attraction.
                        </IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonImg src="../assets/sandbar2.jpg" />
                        <br/>
                        <IonImg src="../assets/sandbar3.jpg" />
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle><h3>Attend a Juego de toro event</h3></IonCardTitle>
                        <IonCardSubtitle>
                        The Rodeo Festival in Masbate City is a sporting event and a celebration of Philippine cowboy and cowgirl culture.
                        </IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonImg src="../assets/Rodeo Festival 2.jpg" />
                        <br/>
                        <IonImg src="../assets/rodeo3.jpg" />
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle><h3>Relax into the gentle waters of a small cove</h3></IonCardTitle>
                        <IonCardSubtitle>
                        Halea Nature Park at San Miguel Island will catch your breath away with it's rich marine life beneath it's crystalline waters.
                        </IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonImg src="../assets/Halea Nature Park 1.jpg" />
                        <br/>
                        <IonImg src="../assets/Halea Nature Park 2.jpg" />
                    </IonCardContent>
                </IonCard>

            </IonCol>
        </IonRow>
    </IonGrid>
);

export default TouristSpotsContent;