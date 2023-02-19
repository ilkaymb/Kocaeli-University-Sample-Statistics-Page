import dünyaFoto from '../images/dünya.png'

function UluslarArası() {
    return (
      <div className="uluslararası-box" style={{
        backgroundImage:`url(${dünyaFoto})`,
        backgroundSize:"50vh 50vh",
        display:'flex',
        minHeight:'60vh',
        flexDirection:'column',
        color:'white',
        backgroundAttachment:'fixed',
        objectFit:'cover',
        backgroundPosition:"center",
        padding:"75px 0",

        }}>   
            <h1 className="header" >ULUSLARARASI ÖĞRENCİLER</h1>
             <hr className="divider"/>
             <div style={{
              display:'flex',
              flexDirection:'column',
              justifyContent:'center',
              alignItems:'center',
             textAlign:'center',
              color:'white',
              padding:50,
              position:'relative',
              left:0,
              right:0,
              top:0,
              right:0
              }}>
                        <h2> 
                              3302
                        </h2>
                        <h4>
                            ULUSLARARASI<br/>ÖĞRENCİ
                        </h4>
                    </div>
                    <div style={{
              display:'flex',
              flexDirection:'column',
              justifyContent:'center',
              alignItems:'center',
             textAlign:'center',
              color:'white',
              padding:50,
              position:'relative',
              left:0,
              right:0,
              top:0,
              right:0
              }}>
                        <h2> 
                              12
                        </h2>
                        <h4>
                            ÜLKE İLE İŞBİRLİĞİ<br/>
                        </h4>
                    </div>
      </div>

 
    );
  }
  
  export default UluslarArası;
  