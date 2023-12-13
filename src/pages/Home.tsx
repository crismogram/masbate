import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonButton, IonButtons, IonIcon, IonImg, IonMenu, IonMenuButton, IonList, IonMenuToggle, IonLabel, IonItem  } from '@ionic/react';
import './Home.css';
import { logoTwitter, logoFacebook, logoInstagram } from 'ionicons/icons';
import HomeContent from '../components/HomeContent';

const Home: React.FC = () => {
  return (
    <>
      <IonMenu side="end" contentId='main-content'>
      <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
        <IonList>
          <IonMenuToggle>
            <IonItem routerLink="/home" detail={false}><IonLabel>Home</IonLabel></IonItem>
            <IonItem routerLink="/history" detail={false}><IonLabel>History</IonLabel></IonItem>
            <IonItem routerLink="/provinceseal" detail={false}><IonLabel>Seal of the Province</IonLabel></IonItem>
            <IonItem routerLink="/touristspots" detail={false}><IonLabel>Tourist Spots</IonLabel></IonItem>
            <IonItem routerLink="/landarea" detail={false}><IonLabel>Land Area and Maps</IonLabel></IonItem>
            <IonItem routerLink="/feedback" detail={false}><IonLabel>Feedback</IonLabel></IonItem>
            <IonItem routerLink="/hotlines" detail={false}><IonLabel>Hotlines</IonLabel></IonItem>
            <IonItem routerLink="/contact" detail={false}><IonLabel>Contact Us</IonLabel></IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
      </IonMenu>

    <IonPage id="main-content">
    <IonHeader>
        <IonToolbar>
            <IonButtons slot="end">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Masbate</IonTitle>
          </IonToolbar>
        </IonHeader>
      <IonContent fullscreen>

        <HomeContent />
      </IonContent>

      <IonFooter>
        <IonToolbar slot="start">

          {/* <IonIcon icon={logoFacebook} size="large"/>
          <IonIcon icon={logoTwitter} size="large"/>
          <IonIcon icon={logoInstagram} size="large"  /> */}
          <IonTitle size="small">Masbate 2023</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
    </>
  );
};

export default Home;
