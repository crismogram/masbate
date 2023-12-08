import { IonGrid, IonRow, IonCol, IonImg, IonCard, IonCardHeader, 
    IonCardSubtitle, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel  } from "@ionic/react";
import './ProvinceSealContent.css'

const ProvinceSealContent = () => (
    <IonGrid class='myGrid'>
        <IonRow>
            <IonCol>
            <h2>Official Seal and Symbolism of Masbate Province</h2>
            <IonImg src="../assets/masbateprovinceseal.png" />
            <p>The twenty (20) small stars and one (1) big star colored in yellow represents the 20 municipalities and the city of Masbate respectively.</p>
            <p>The center of the seal is an armor shield-form with three (3) partitions:</p>
            <p>The Top part is the map of Masbate reflecting the three main islands.
The biggest island is the Masbate mainland, at the upper part of it
is the Ticao Island and at the northern part is the Burias Island;</p>
            <p>The Left part is the present economic profile of the province
featuring the grazing lands, flat and hilly field with coconut tree
and rice field, herd of white large cattles with fence reflecting the ranch,
a pile of three gold bars on the ground and a rancher riding on a bull.
All these, depicting the agriculture, cattle and mineral industries
of the province and its rodeo activity which was proclaimed as the
Rodeo Capital of the Philippines by
Her Excellency President Gloria Macapagal Arroyo;</p>
            <p>The Right part is the aspirations of the province featuring the
partly hidden ship and port reflecting the Hub of the
Nautical Highway of the Philippines. The flying white dove
reflecting peace and prosperity and blue sea with white fish
and gray manta ray reflecting the fishing industry and eco-tourism of the province.</p>

            <h2>Seal of Masbate City</h2>    
            <IonImg src="../assets/MasbatePHSeal.png" />
            </IonCol>
        </IonRow>
    </IonGrid>
);

export default ProvinceSealContent;