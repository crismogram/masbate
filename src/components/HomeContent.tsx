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
            </IonCol>
        </IonRow>
        <IonRow>
            <IonCol>

            </IonCol>
        </IonRow>




    </IonGrid>
);

export default HomeContent;