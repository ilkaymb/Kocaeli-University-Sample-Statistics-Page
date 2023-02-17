import './styles/Sayılar.css';
import logo from './images/kocaeli-universitesi-logo.png';
import 'rsuite/dist/rsuite.min.css'; 

import Fakülte from './components/Fakülte';
import Kütüphane from './components/Kütüphane';
import Akademik from './components/Akademik';
import SayılarlaKou from './components/SayılarlaKou';
import Zoom from 'react-reveal/Zoom';



  
function Sayılar() {

    return (
      <div>
            <div className="opening-box">
                <Zoom>  <img src={logo} alt="logo" width={250} height={250}/>
                
                     <div className='title-box'>

                    <div className='sayilar-title'>
                         KOCAELİ ÜNİVERSİTESİ 
                    </div>
                    <div className='sayilar-title2'>
                        İSTATİSTİKLER
                    </div>
                </div>       
                 </Zoom>
            </div>
            <div>

              
            </div>

        <SayılarlaKou/>

          <Fakülte/>




        <Akademik/>
    


        <Kütüphane/>





</div>

 
    );
  }
  
  export default Sayılar;
  