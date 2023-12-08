import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonFooter,
    IonImg, IonButtons, IonBackButton } from "@ionic/react";
    import './LandArea.css';
import LandAreaContent from "../components/LandAreaContent";
    
    const LandArea = () => (
        <IonPage>
            <IonHeader>
                <IonToolbar className="provincesealheader">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home" />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
    
            <IonContent fullscreen>
                <LandAreaContent />
            </IonContent>
            <IonFooter>
                <IonToolbar slot='end'>
                    <IonTitle size='small'>Masbate 2023</IonTitle>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
    
    export default LandArea;