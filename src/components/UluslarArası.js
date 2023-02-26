import dünyaFoto from '../images/dünya.png'
import { useMediaQuery } from 'react-responsive'

function UluslarArası() {

  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })



    return (
      <div className="uluslararası-box" style={{
        backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.75), rgb(0, 0, 0, 0.75)),url(${dünyaFoto})`,
        backgroundColor:'black',
        backgroundSize:"50vh 50vh",
        display:'flex',
        minHeight:'50vh',
        height:'100%',
        flexDirection:'column',
        backgroundAttachment:'fixed',
        objectFit:'cover',
        backgroundPosition:"center",
       color:'white',
       textShadow:'0px 0px 8px black',

        }}>   
        <div style={{padding:'25px'}}>
            <h1 className="header" style={{ color:'rgba(255, 129, 57, 1)',fontSize: (isBigScreen ? '44px' :( isDesktopOrLaptop ? '40px':'28px') )}} >ULUSLARARASI ÖĞRENCİLER</h1>
             <hr className="divider" style={{ borderColor:'rgba(255, 129, 57, 1)'}}/>
        </div>
          
             <div style={{
              display:'flex',
              flexDirection:'column',
              justifyContent:'center',
              alignItems:'center',
             textAlign:'center',
              position:'relative',
              left:0,
              right:0,
              top:0,
              textShadow:'0px 0px 8px black'
              }}>
                        <div style={{ color:'rgba(255, 129, 57, 1)',fontWeight:'bold',fontSize: (isBigScreen ? '32px' :( isDesktopOrLaptop ? '28px':'24px') )}}> 
                              3302
                        </div>
                        <div style={{fontSize: (isBigScreen ? '24px' :( isDesktopOrLaptop ? '22px':'20px') )}}>
                            ULUSLARARASI<br/>ÖĞRENCİ
                        </div>
                    </div>
                    <div style={{
              display:'flex',
              flexDirection:'column',
              justifyContent:'center',
              alignItems:'center',
             textAlign:'center',
              padding:50,
              position:'relative',
              left:0,
              right:0,
              top:0,
              textShadow:'0px 0px 8px black',
              }}>
                        <div style={{ color:'rgba(255, 129, 57, 1)',fontWeight:'bold',fontSize: (isBigScreen ? '32px' :( isDesktopOrLaptop ? '28px':'24px') )}}> 
                              12
                        </div>
                        <div style={{fontSize: (isBigScreen ? '24px' :( isDesktopOrLaptop ? '22px':'20px') )}}>
                            ÜLKE İLE İŞBİRLİĞİ
                        </div>
                    </div>
      </div>

 
    );
  }
  
  export default UluslarArası;
  