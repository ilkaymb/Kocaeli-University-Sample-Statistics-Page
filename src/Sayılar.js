import './styles/Sayılar.css';
import 'rsuite/dist/rsuite.min.css'; 

import OpeningScreen from './components/OpeningScreen';
import Fakülteler from './components/Fakülteler';
import Kütüphane from './components/Kütüphane';
import Akademik from './components/Akademik';
import SayılarlaKou from './components/SayılarlaKou';
import FakülteTanıtımları from './components/FakülteTanıtımları';
import UluslarArası from './components/UluslarArası';
import AkademikPersonel from './components/AkademikPersonel';
import Burslar from './components/Burslar';
import Arge from './components/Arge';


  
function Sayılar() {
    return (
      <div>   
        <OpeningScreen/>
        <SayılarlaKou/>
        <Fakülteler/>
        <Akademik/>       
        <AkademikPersonel/>
        <FakülteTanıtımları/>          
         <UluslarArası/>
  
        <Kütüphane/>
        <Burslar/>
        <Arge/>
      </div>

 
    );
  }
  
  export default Sayılar;
  