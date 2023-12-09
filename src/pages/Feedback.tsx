import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonFooter,
    IonImg, IonButtons, IonBackButton } from "@ionic/react";
    import FeedbackContent from "../components/FeedbackContent";
    import './Feedback.css';
    
    const Feedback = () => (
        <IonPage>
            <IonHeader>
                <IonToolbar className="historyheader">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home" />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
    
            <IonContent fullscreen>
                <FeedbackContent />
            </IonContent>
            <IonFooter>
                <IonToolbar slot='end'>
                    <IonTitle size='small'>Masbate 2023</IonTitle>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
    
    export default Feedback;