import {  Row, Col,Grid } from 'rsuite';
import { BiBookBookmark,BiBookOpen,BiBookReader } from "react-icons/bi";
import TrackVisibility from 'react-on-screen'; // CommonJs : require('react-on-screen').default
import CountUp from 'react-countup';
import { useMediaQuery } from 'react-responsive'



function Kütüphane(){
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })




    return (
    <div className="kütüphane-box">
        <div style={{padding:"25px"}}>
            <div className="header" style={{color:'white',fontSize:(isBigScreen ? '44px' :( isDesktopOrLaptop ? '40px':'28px') )}}>KÜTÜPHANE</div>
                <hr className="divider" />
        </div>
                

                <TrackVisibility once>
                {({ isVisible }) => isVisible ?
                      <Grid fluid>

                <Row>
                   
                <Col lg={8} md={12} sm={24} xs={24}>
              
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:20,color:'white',height:"20vh"}}>
                          <BiBookBookmark size={"12vh"} />
                <div  style={{display:"flex",justifyContent:"center",alignItems:"start",flexDirection:'column',width:200}}>
                    <CountUp start={0}
                     end={21546} duration={1.75}
                    separator="."
                     style={{fontWeight:'bold',fontSize: (isBigScreen ? '32px' :( isDesktopOrLaptop ? '28px':'24px') )}}/>
              
                    <div style={{fontSize: (isBigScreen ? '24px' :( isDesktopOrLaptop ? '22px':'20px') )}}>Kitap Sayısı</div>
                </div>
                </div>
              
                    
              
                </Col>
                <Col lg={8} md={12} sm={24} xs={24}>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:20,color:'white',height:"20vh"}}>
                     <BiBookReader size={"12vh"} />
                        <div style={{display:"flex",justifyContent:"center",alignItems:"start",flexDirection:'column',width:200}}>
                
                        <CountUp start={0}
                            end={460} duration={1.75}
                            style={{fontWeight:'bold',fontSize: (isBigScreen ? '32px' :( isDesktopOrLaptop ? '28px':'24px') )}}
                        
                        />
                    
                            <div style={{fontSize: (isBigScreen ? '24px' :( isDesktopOrLaptop ? '22px':'20px') )}}>Kişilik Kapasite</div>
                    </div>
                    </div>
             
                </Col>
                <Col  lg={8} md={24} sm={24} xs={24}>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:20,color:'white',height:"20vh"}}>
                     <BiBookOpen size={"12vh"}  />
            
                    <div style={{display:"flex",justifyContent:"center",alignItems:"start",flexDirection:'column',width:200}}>
                    <CountUp start={0}
                        end={14242} duration={1.75}
                    
                        separator="."  
                        style={{fontWeight:'bold',fontSize: (isBigScreen ? '32px' :( isDesktopOrLaptop ? '28px':'24px') )}}/>
                
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize: (isBigScreen ? '24px' :( isDesktopOrLaptop ? '22px':'20px') )}}>
                            Bilimsel Dergi Sayısı</div>
                    
                    </div>
                </div>
                </Col>  
              
            </Row> 
             </Grid> : 
                                   <Grid fluid>

                <Row>
                   
                    <Col lg={8} md={12} sm={24} xs={24}>
                  
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:20,color:'white',height:"20vh"}}>
                          <BiBookBookmark size={"12vh"} />
                <div  style={{display:"flex",justifyContent:"center",alignItems:"start",flexDirection:'column',width:200}}>
                     <div style={{fontWeight:'bold',fontSize: (isBigScreen ? '32px' :( isDesktopOrLaptop ? '28px':'24px') )}}>
                    0
                    </div>
                    <div style={{fontSize: (isBigScreen ? '24px' :( isDesktopOrLaptop ? '22px':'20px') )}}>Kitap Sayısı</div>
                </div>
                </div>
                        
                  
                    </Col>
                    <Col lg={8} md={12} sm={24} xs={24}>
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:20,color:'white',height:"20vh"}}>
                     <BiBookReader size={"12vh"} />
                        <div style={{display:"flex",justifyContent:"center",alignItems:"start",flexDirection:'column',width:200}}>
                
                        <div style={{fontWeight:'bold',fontSize: (isBigScreen ? '32px' :( isDesktopOrLaptop ? '28px':'24px') )}}>
                    0
                    </div>
                    
                            <div style={{fontSize: (isBigScreen ? '24px' :( isDesktopOrLaptop ? '22px':'20px') )}}>Kişilik Kapasite</div>
                    </div>
                    </div>
                 
                    </Col>
                    <Col  lg={8} md={24} sm={24} xs={24}>
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:20,color:'white',height:"20vh"}}>
                     <BiBookOpen size={"12vh"}  />
            
                    <div style={{display:"flex",justifyContent:"center",alignItems:"start",flexDirection:'column',width:200}}>
                    <div style={{fontWeight:'bold',fontSize: (isBigScreen ? '32px' :( isDesktopOrLaptop ? '28px':'24px') )}}>
                    0
                    </div>
                
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize: (isBigScreen ? '24px' :( isDesktopOrLaptop ? '22px':'20px') )}}>
                            Bilimsel Dergi Sayısı</div>
                    
                    </div>
                </div>
                 
                    </Col>  
                  
                </Row>
                </Grid>
                }
                  </TrackVisibility>
    </div>
    );
}

export default Kütüphane;
