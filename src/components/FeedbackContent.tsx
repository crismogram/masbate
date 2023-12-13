import { IonGrid, IonRow, IonCol, IonImg, IonCard, IonCardHeader, 
    IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonInput, IonTextarea, IonAlert,
    IonButton, useIonViewWillEnter, IonLabel  } from "@ionic/react";
import './ContactContent.css'
import React, { useState } from "react";
import { useHistory } from "react-router";
import { database } from '../firebaseConfig';
import { ref, set } from "firebase/database"
import generateGuid from '../helperConfig'

const FeedbackContent = () => {
    const [contactName, setContactName] = useState('');
    const [contactMessageValuable, setContactMessageValuable] = useState('');
    const [contactMessageImprovement, setContactMessageImprovement] = useState('');
    const [contactMessageScale, setContactMessageScale] = useState('');

    const [showAlert, setShowAlert] = useState(false);

    const formResponse = {name:'', email:'', message:''}
    const history = useHistory();

    useIonViewWillEnter(() => {
        setContactName('');
        setContactMessageValuable('');
        setContactMessageImprovement('');
        setContactMessageScale('');
    });

    const onSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formResponse = {
            name: contactName,
            valueable: contactMessageValuable,
            improvement: contactMessageImprovement,
            scale: contactMessageScale
        };
        set(ref(database, 'feedbacks/' + Date().toString() + '-' + generateGuid() + '/'), {
            name: contactName,
            valueable: contactMessageValuable,
            improvement: contactMessageImprovement,
            scale: contactMessageScale
        });

        setShowAlert(true);
        history.push('/home');
    }

    return (
        <IonGrid>
            <IonAlert
                isOpen={showAlert}
                onDidDismiss={() => setShowAlert(false)}
                header='Thank you!'
                message='Your feedback has been sent.'
                buttons={['OK']}
            />
            <IonRow>
                <IonCol className="contactCol">
                    <h2>We want to hear from you.</h2>

                    <form onSubmit={onSubmitForm}>
                        <IonItem>
                            <IonLabel position="floating">Name</IonLabel>
                            <IonInput 
                                name='contactName' 
                                value={contactName} 
                                placeholder="" 
                                onIonChange={e => setContactName(e.detail.value!)} 
                                required>    
                            </IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel class="ion-text-wrap" position="floating">What aspects of our website do you find most valuable, and why?</IonLabel>
                            <IonTextarea 
                                name='contactMessageValuable' 
                                value={contactMessageValuable} 
                                placeholder="" 
                                rows={5}
                                spellCheck={false}
                                onIonChange={e => {setContactMessageValuable(e.detail.value!)} }
                                onBlur={e => setContactMessageValuable(e.target.value!)}
                                required>
                            </IonTextarea>
                        </IonItem>

                        <IonItem>
                        <IonLabel class="ion-text-wrap" position="floating">Are there specific features or services you would like to see us add or improve?</IonLabel>
                            <IonTextarea 
                                name='contactMessageImprovement' 
                                value={contactMessageImprovement} 
                                placeholder="" 
                                rows={5}
                                spellCheck={false}
                                onIonChange={e => {setContactMessageImprovement(e.detail.value!)} }
                                onBlur={e => setContactMessageImprovement(e.target.value!)}
                                required>
                            </IonTextarea>
                        </IonItem>

                        <IonItem>
                            <IonLabel class="ion-text-wrap" position="floating">On a scale of 1 to 10, how satisfied are you with our product/service? Please elaborate on your rating.</IonLabel>
                            <IonTextarea 
                                name='contactMessageScale' 
                                value={contactMessageScale} 
                                placeholder="" 
                                rows={5}
                                spellCheck={false}
                                onIonChange={e => {setContactMessageScale(e.detail.value!)} }
                                onBlur={e => setContactMessageScale(e.target.value!)}
                                required>
                            </IonTextarea>
                        </IonItem>

                        <IonButton type="submit" expand="block">Submit</IonButton>
                    </form>
                </IonCol>
            </IonRow>
        </IonGrid>
    )    

}

export default FeedbackContent;