import { IonGrid, IonRow, IonCol, IonImg, IonCard, IonCardHeader, 
    IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonInput, IonTextarea, IonAlert,
    IonButton, useIonViewWillEnter, IonLabel  } from "@ionic/react";
import './ContactContent.css'
import React, { useState } from "react";
import { useHistory } from "react-router";
import { database } from '../firebaseConfig';
import { ref, set } from "firebase/database"
import generateGuid from '../helperConfig'

const ContactContent = () => {
    const [contactName, setContactName] = useState('');
    const [contactEmail, setcontactEmail] = useState('');
    const [contactMessageText, setContactMessageText] = useState('');

    const [showAlert, setShowAlert] = useState(false);

    const formResponse = {name:'', email:'', message:''}
    const history = useHistory();

    useIonViewWillEnter(() => {
        setContactName('');
        setcontactEmail('');
        setContactMessageText('');
    });

    const onSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formResponse = {
            name: contactName,
            email: contactEmail,
            message: contactMessageText
        };
        set(ref(database, 'messages/' + Date().toString() + '-' + generateGuid() + '/'), {
            name: contactName,
            email: contactEmail,
            messagetext: contactMessageText
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
                message='Your message has been sent.'
                buttons={['OK']}
            />
            <IonRow>
                <IonCol className="contactCol">
                    <h2>Contact Us</h2>
                    <form onSubmit={onSubmitForm}>
                        <IonItem>
                            <IonLabel position="floating">Name</IonLabel>
                            <IonInput 
                                name='contactName' 
                                value={contactName} 
                                placeholder="" 
                                onIonChange={e => setContactName(e.detail.value!)} 
                                required></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Email</IonLabel>
                            <IonInput 
                                name='contactEmail' 
                                value={contactEmail} 
                                type="email"
                                placeholder="" 
                                onIonChange={e => setcontactEmail(e.detail.value!)} 
                                required>
                            </IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Message</IonLabel>
                            <IonTextarea 
                                name='contactMessageText' 
                                value={contactMessageText} 
                                placeholder="" 
                                rows={10}
                                spellCheck={false}
                                onIonChange={e => {setContactMessageText(e.detail.value!)} }
                                onBlur={e => setContactMessageText(e.target.value!)}
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

export default ContactContent;