import { IonGrid, IonRow, IonCol, IonImg, IonCard, IonCardHeader, 
    IonCardSubtitle, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel  } from "@ionic/react";
import './LandAreaContent.css'

const LandAreaContent = () => (
    <IonGrid class='myGrid'>
        <IonRow>
            <IonCol>
            <h2>Land Area and Political Subdivisions</h2>
            <p>The Province of Masbate is composed of three major islands (Masbate, Ticao and Burias) and is part of Region V.</p>
            <ol>
                <li className="justify-me">The islands of Masbate lie exactly in the center of the Philippine archipelago between latitudes 11o43’ north and 21o36’ north, and 123o09’ east and 124o15’ east. The province is bounded by Burias and Ticao Pass, east by the San Bernardino Strait, south by Visayan Sea and west by Sibuyan Sea. Relative to mainland Bicol, the province faces the southwestern coasts of Camarines Sur, Albay, and Sorsogon. (Map 1)</li>
                
                <li className="justify-me">The Province of Masbate is composed of 20 municipalities and one component city. It has 550 barangays. It consists of three major islands and three congressional districts: Burias Island with 2 municipalities; Ticao, 4; and Masbate Island with 15 municipalities. Burias and Ticao islands comprise the First Congressional District. The Second and Third Congressional Districts are in Masbate Island. (Map 2)</li>
                
                <li className="justify-me">The city of Masbate is the most accessible center in the province. As a destination from several points of origin, the city can be reached in 96 minutes by land or sea. Average travel time to Aroroy is 90 minutes; Cataingan is accessible in 152 minutes. The farthest municipality in the north is San Pascual in the island of Burias while Esperanza is the southernmost municipality in Masbate Island. Travel time from these municipalities to a hospital takes more than one hour. San Pascual has better access to Naga City, while Esperanza has easy access to Bogo in Cebu.</li>
            </ol>
            <IonImg className="masbatemaps" src="../assets/masbatemap1.png" />
            <br />
            <IonImg className="masbatemaps" src="../assets/masbatemap2.png" />
            </IonCol>
        </IonRow>
    </IonGrid>
);

export default LandAreaContent;