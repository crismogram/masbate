import { IonGrid, IonRow, IonCol, IonImg, IonCard, IonCardHeader, 
    IonCardSubtitle, IonCardTitle, IonCardContent  } from "@ionic/react";
import './HistoryContent.css'

const HistoryContent = () => (
    <IonGrid class='myGrid'>
        <IonRow>
            <IonCol>
                <IonCard>
                    <IonCardHeader>
                    <IonCardTitle>Prehistory of Masbate</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                    The island of Masbate was formed out of volcanic and other rocks over one hundred million years ago, together with the other islands of the Philippines. At this time man and even many of the lower animals, had not yet appeared upon the earth. However, many millions of years later, long before the ancestors of man had moved into North America or Europe, ancient men were living in the tropical regions of the earth. They haunted wild animals and ate wild plants and fruits. Their tools were of stone, and probably also of bone and wood.
                    <br/><br/>
                    Some of these very early stone tools and bones of the animals he hunted have been found in Masbate and it is not impossible that the early ancestors of man also lived on this island long ago.
                    <br/><br/>
                    Remains of this kind are very difficult to find and are very rare. These remains are probably half a million years old. The stone tools found were very primitive which is surprising since these early peoples managed to kill large animals, they must have been brave and skillful hunters.
                    <br/><br/>
                    Although over thousands of year man developed into his present from and stone tools became more sophisticated, the hunting way of life continued without great change until eight thousand years ago. Then a great development occurred. People began to grow crops and tame wild animals, thus, the first farmers appeared. This happened at much at the same time all over the world, but is though to have first occurred in the tropical areas particularly the Philippines. It is still known whether farming was invented independently in the Philippines, or whether it was introduced from somewhere else in Southeast Asia. Nor is it known whether early farmers of the Philippines grow rice, or not only crops. What is clear is that the introduction of farming made many other changes possible. People begun to live in settled villages, and made pottery for the first time. They also improved their stone tools. They are the remains of the first farmers who used the axes to cut down the forest which covered Masbate mountain valleys and hills at that time. The early farmers also made beautiful ornaments of shells and buried their dead in burial caves sometimes placing the bones in large jars. Two large caves in Masbate, the Bat-ogan Cave in Mandaon Municipality and the Kalanay Cave in Aroroy Town are famous all over the world as burial caves.
                    <br/><br/>
                    About for hundred years before the birth of Christ, iron and glass as well as woven cloth appeared in Masbate. The stone tools gradually disappeared since the new iron tools were so much better. This period in the Philippines which lasted until the arrival of the Spaniards in the sixteenth century, is usually called the iron age. It was a time of great development. Agriculture improved with the new metal tools with kaingin agriculture in the hills and paddy farming on suitable ground. Beautiful decorated pottery, some of the most beautiful known in the world, were found in Masbate caves.
                    <br/><br/>
                    A special writing as well as records and letters written on pottery and tree bark were unearthed at Kalanay Cave. Unfortunately few samples of this early writings have survived. There was also a great deal of trade between islands during the iron age. Masbate was involved in the venture on trading as can be seen by the many fragments of porcelain, all which came from china in ancient times.
                    <br/><br/>
                    Porcelain jars of the rare celadon trade pottery dating back as early as the 10th century, were excavated at Aroroy in 1930. Chinese traders had been coming to Luzon, Visayas, and Sulu during the Shri-Vishayan Empire and the succeeding Madjapahit Empire. Probably, from Palawan or Mindoro, early traders visited Masbate on the way and founded small settlements along the coastal areas.
                    <br/><br/>
                    <IonImg src="../assets/masbatehistory.PNG" />
                    <br/><br/>
                    People had been living in Masbate and other islands of the Philippines for many thousands of years. The remains of their village and their activities are part of the heritage of the people as in the heritage of language culture and art that the people in the olden times have left to their descendants.
                    </IonCardContent>
                </IonCard>
            </IonCol>
        </IonRow>
    </IonGrid>
);

export default HistoryContent;