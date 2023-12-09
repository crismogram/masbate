import { IonGrid, IonRow, IonCol, IonImg, IonCard, IonCardHeader, 
    IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonInput, IonTextarea, IonAlert,
    IonButton, useIonViewWillEnter  } from "@ionic/react";
import './ContactContent.css'
import { useState } from "react";
import { useHistory } from "react-router";

const ContactContent = () => {
    const [contactName, setContactName] = useState('');
    const [contactEmail, setcontactEmail] = useState('');
    const [contactMessage, setContactMessage] = useState('');

    const [showAlert, setShowAlert] = useState(false);

    const formResponse = {name:'', email:'', message:''}
    const history = useHistory();

    


}

export default ContactContent;