import { IonGrid, IonRow, IonCol, IonImg, IonText, IonLabel } from "@ionic/react";
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
                <IonImg src="../assets/local-kids-masbate.jpg" />
                <IonText className="p-justify">
                    <p>The Masbateño tribe refers to the people who lived in the Masbate Province of the Philippines, part of the Bicol Region. They are part of the broader Visayan ethnolinguistic group, which constitutes the largest ethnolinguistic group in the Philippines.</p>
                </IonText>
            </IonCol>
        </IonRow>
        <IonRow>
            <IonCol>
                <IonImg src="../assets/masbate-things.jpg" />
                <IonText>
                    <p>Most of the people of Masbate speak Masbateño, which is closely related to Hiligaynon and Kapiznon. However, various other languages ​​are spoken in various municipalities on the island. Near the towns of Katingan, Paranas and Dimasaran, most of the inhabitants speak Walay Walay. In Pio Corpus the people speak Cebuano, while Hiligaynon (Ilongo) and Capiznon are spoken on the west coast along the coast of Placer and Mandaon. Bicolano is also spoken by the inhabitants. </p>
                        <p>Masbate is known as the country of cows. The cattle breeds found on the island are taken from Indian herds that thrive in the island's mild climate. The province is the second largest supplier of cattle brought into Manila for slaughter. Inspired by this industry, the 'Rodeo Filipino' was established in the third week of June. Over the course of the week, the festival hosts tournaments in bullfighting, bull wrestling, lasso, calf casting, post-driving, carabao racing, and other "rodeo" games. This unique event is also accompanied by cattle breeding contests, fairs and parades, much like rodeos in the American West.</p>
                </IonText>
                
            </IonCol>
        </IonRow>
        <IonRow class="ion-justify-content-center">
            <IonCol size="auto">Location within the Philippines</IonCol>
        </IonRow>
        <IonRow>
            <IonImg src="../assets/masbateloc.png" />
        </IonRow>

    </IonGrid>
);

export default HomeContent;