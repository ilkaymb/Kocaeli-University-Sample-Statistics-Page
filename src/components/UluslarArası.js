import dünyaFoto from '../images/dünya.png'

function UluslarArası() {
    return (
      <div className="uluslararası-box" style={{
        backgroundImage:`url(${dünyaFoto})`,
        backgroundColor:'white',
        backgroundSize:"50vh 50vh",
        display:'flex',
        minHeight:'50vh',
        flexDirection:'column',
        backgroundAttachment:'fixed',
        objectFit:'cover',
        backgroundPosition:"center",
       

        }}>   
        <div style={{padding:'25px'}}>
            <h1 className="header" style={{ color:'rgba(255, 129, 57, 1)'}} >ULUSLARARASI ÖĞRENCİLER</h1>
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
              right:0,
              textShadow:'5px 5px 8px rgba(255,255,255,0.9)'
              }}>
                        <h2 style={{ color:'rgba(255, 129, 57, 1)'}}> 
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
              padding:50,
              position:'relative',
              left:0,
              right:0,
              top:0,
              right:0,
              textShadow:'5px 5px 8px rgba(255,255,255,0.9)'

              }}>
                        <h2 style={{ color:'rgba(255, 129, 57, 1)'}}> 
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
  