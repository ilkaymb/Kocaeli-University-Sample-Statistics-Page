import {  Row, Col } from 'rsuite';
import { BiBookBookmark,BiBookOpen,BiBookReader } from "react-icons/bi";
import TrackVisibility from 'react-on-screen'; // CommonJs : require('react-on-screen').default
import CountUp from 'react-countup';



function Kütüphane(){





    return (
    <div className="kütüphane-box" style={{padding:"75px 0"}}>
                <h1 className="header" style={{color:'white'}}>KÜTÜPHANE</h1>
                <hr className="divider"/>

                <TrackVisibility once>
                {({ isVisible }) => isVisible && 
                <Row>
                   
                    <Col lg={8} md={12} sm={24} xs={24}>
                  
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:20}}>
                              <BiBookBookmark size={"150px"} color={"white"} style={{minWidth:"150px"}}/>
                    <div style={{color:"white"}}>
                        <h1 > 
                        <CountUp start={0}
                         end={21546} duration={1.75}
                        separator="." style={{maxWidth:"100%"}}/>
                        </h1>
                        <h2>Kitap Sayısı</h2>
                    </div>
                        </div>
                  
                        
                  
                    </Col>
                    <Col lg={8} md={12} sm={24} xs={24}>
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:20}}>
                              <BiBookReader size={"150px"} color={"white"} style={{minWidth:"150px"}}/>
                    <div style={{color:"white"}}>
                    <h1>
                    <CountUp start={0}
                         end={460} duration={1.75}
                         style={{maxWidth:"100%"}}
                     
                       />
                    </h1>
                        <h3>Kişilik Kapasite</h3>
                    </div>
                        </div>
                 
                    </Col>
                    <Col  lg={8} md={24} sm={24} xs={24}>
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:20}}>
                              <BiBookOpen size={"150px"} color={"white"}  style={{minWidth:"150px"}}/>
                    <div style={{color:"white"}}>
                    <h1>
                    <CountUp start={0}
                         end={14242} duration={1.75}
                      
                        separator="."  />
                    </h1>
                        <h3>Bilimsel <wbr/>Dergi<wbr/>Sayısı</h3>
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
