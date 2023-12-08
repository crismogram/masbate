import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonFooter,
    IonImg, IonButtons, IonBackButton } from "@ionic/react";
    import HistoryContent from "../components/HistoryContent";
    import './ProvinceSeal.css';
    
    const ProvinceSeal = () => (
        <IonPage>
            <IonHeader>
                <IonToolbar className="provincesealheader">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home" />
                    </IonButtons>
                </IonToolbar>
                <IonToolbar className="provincesealtitle">
                    
                </IonToolbar>
            </IonHeader>
    
            <IonContent fullscreen>
                <HistoryContent />
            </IonContent>
            <IonFooter>
                <IonToolbar slot='end'>
                    <IonTitle size='small'>Masbate 2023</IonTitle>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
    
    export default ProvinceSeal;