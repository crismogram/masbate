import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonFooter,
    IonImg, IonButtons, IonBackButton } from "@ionic/react";
    import HotlinesContent from "../components/HotlinesContent";
    import './Hotlines.css';
    
    const Hotlines = () => (
        <IonPage>
            <IonHeader>
                <IonToolbar className="historyheader">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home" />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
    
            <IonContent fullscreen>
                <HotlinesContent />
            </IonContent>
            <IonFooter>
                <IonToolbar slot='end'>
                    <IonTitle size='small'>Masbate 2023</IonTitle>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
    
    export default Hotlines;