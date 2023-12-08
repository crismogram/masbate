import { IonGrid, IonRow, IonCol, IonImg, IonText } from "@ionic/react";
import './HomeContent.css'

const HomeContent = () => (
    <IonGrid class='myGrid'>
        <IonRow>
            <IonCol>
                {/* <IonImg src='./assets/Masbate Title.png' /> */}
            </IonCol>
        </IonRow>
        <IonRow>
            <IonCol>
                <IonText className="headline">
                <div id="hero" className="section">
                    <h1>Visit Masbate City</h1>
                    <h2>Enjoy a beautiful and scenic beaches, Plenty of delicious and savory seafood. </h2>
                </div>
                </IonText>
                <IonText className="p-justify">
                    <p>Masbate, officially the Province of Masbate (Masbateño: Probinsya san Masbate; Tagalog: Lalawigan ng Masbate), is an island province in the Philippines located near the midsection of the nation's archipelago. Its provincial capital is Masbate City. The province consists of three major islands: Masbate, Ticao, and Burias.</p>
                </IonText>
            </IonCol>
        </IonRow>
        <IonRow>
            <IonCol>

            </IonCol>
        </IonRow>




    </IonGrid>
);

export default HomeContent;