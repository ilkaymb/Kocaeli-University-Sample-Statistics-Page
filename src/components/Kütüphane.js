import {  Row, Col } from 'rsuite';
import { BiBookBookmark,BiBookOpen,BiBookReader } from "react-icons/bi";
import TrackVisibility from 'react-on-screen'; // CommonJs : require('react-on-screen').default
import CountUp from 'react-countup';



function Kütüphane(){





    return (
    <div className="kütüphane-box">
        <div style={{padding:"25px"}}>
            <h1 className="header" style={{color:'white'}}>KÜTÜPHANE</h1>
                <hr className="divider" />
        </div>
                

                <TrackVisibility once>
                {({ isVisible }) => isVisible ?
                <Row>
                   
                <Col lg={8} md={12} sm={24} xs={24}>
              
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:20,color:'white',height:"20vh"}}>
                          <BiBookBookmark size={"15vh"} />
                <div>
                    <h1 > 
                    <CountUp start={0}
                     end={21546} duration={1.75}
                    separator="." style={{maxWidth:"150px"}}/>
                    </h1>
                    <h2>Kitap Sayısı</h2>
                </div>
                    </div>
              
                    
              
                </Col>
                <Col lg={8} md={12} sm={24} xs={24}>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:20,color:'white',height:"20vh"}}>
                          <BiBookReader size={"15vh"} />
                <div >
                <h1>
                <CountUp start={0}
                     end={460} duration={1.75}
                     style={{maxWidth:"150px"}}
                 
                   />
                </h1>
                    <h3>Kişilik Kapasite</h3>
                </div>
                    </div>
             
                </Col>
                <Col  lg={8} md={24} sm={24} xs={24}>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:20,color:'white',height:"20vh"}}>
                          <BiBookOpen size={"15vh"}  />
                <div >
                <h1>
                <CountUp start={0}
                     end={14242} duration={1.75}
                  
                    separator="."  />
                </h1>
                    <h3>Bilimsel Dergi <br/>Sayısı</h3>
                </div>
                    </div>
             
                </Col>  
              
            </Row> : 
                <Row>
                   
                    <Col lg={8} md={12} sm={24} xs={24}>
                  
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:20,color:'rgba(9,163,80,1)',height:"20vh"}}>
                              <BiBookBookmark size={"15vh"} />
                    <div>
                        <h1 > 
                        0
                        </h1>
                        <h2>Kitap Sayısı</h2>
                    </div>
                        </div>
                  
                        
                  
                    </Col>
                    <Col lg={8} md={12} sm={24} xs={24}>
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:20,color:'rgba(9,163,80,1)',height:"20vh"}}>
                              <BiBookReader size={"15vh"} />
                    <div >
                    <h1>
                    0
                    </h1>
                        <h3>Kişilik Kapasite</h3>
                    </div>
                        </div>
                 
                    </Col>
                    <Col  lg={8} md={24} sm={24} xs={24}>
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:20,color:'rgba(9,163,80,1)',height:"20vh"}}>
                              <BiBookOpen size={"15vh"}  />
                    <div >
                    <h1>
                    0
                    </h1>
                        <h3>Bilimsel Dergi <br/>Sayısı</h3>
                    </div>
                        </div>
                 
                    </Col>  
                  
                </Row>
                }
                  </TrackVisibility>
    </div>
    );
}

export default Kütüphane;
