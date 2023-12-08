import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonFooter,
    IonImg, IonButtons, IonBackButton } from "@ionic/react";
    import './TouristSpots.css';
import TouristSpotsContent from "../components/TouristSpotsContent";
    
    const ProvinceSeal = () => (
        <IonPage>
            <IonHeader>
                <IonToolbar className="provincesealheader">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home" />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
    
            <IonContent fullscreen>
                <TouristSpotsContent />
            </IonContent>
            <IonFooter>
                <IonToolbar slot='end'>
                    <IonTitle size='small'>Masbate 2023</IonTitle>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
    
    export default ProvinceSeal;