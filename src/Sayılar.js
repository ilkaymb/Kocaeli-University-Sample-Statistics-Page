import './styles/Sayılar.css';
import 'rsuite/dist/rsuite.min.css'; 

import OpeningScreen from './components/OpeningScreen';
import Fakülte from './components/Fakülte';
import Kütüphane from './components/Kütüphane';
import Akademik from './components/Akademik';
import SayılarlaKou from './components/SayılarlaKou';


  
function Sayılar() {
    return (
      <div>   
        <OpeningScreen/>
        <SayılarlaKou/>
        <Fakülte/>
        <Akademik/>
        <Kütüphane/>
      </div>

 
    );
  }
  
  export default Sayılar;
  