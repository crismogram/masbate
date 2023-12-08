import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonFooter,
    IonImg, IonButtons, IonBackButton } from "@ionic/react";
    import './ProvinceSeal.css';
import ProvinceSealContent from "../components/ProvinceSealContent";
    
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
                <ProvinceSealContent />
            </IonContent>
            <IonFooter>
                <IonToolbar slot='end'>
                    <IonTitle size='small'>Masbate 2023</IonTitle>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
    
    export default ProvinceSeal;