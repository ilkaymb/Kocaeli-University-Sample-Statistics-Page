import logo from '../images/kocaeli-universitesi-logo.png';

function OpeninScreen(){


    return (
        <div className="opening-box">
         <img src={logo} alt="logo" width={250} height={250}/>
        
             <div className='title-box'>

            <div className='sayilar-title'>
                 KOCAELİ ÜNİVERSİTESİ 
            </div>
            <div className='sayilar-title2'>
                İSTATİSTİKLER
            </div>
        </div>       
        
    </div>
    );
}

export default OpeninScreen;
