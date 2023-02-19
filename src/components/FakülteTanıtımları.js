import { Grid, Row, Col } from 'rsuite';
import mühendisFoto from '../images/mühendislik.png'
import tıpFoto from '../images/tıp.png'
import eğitimFoto from '../images/öğretmenlik.png'
import diş from '../images/diş.png'
import { IoMdSchool } from "react-icons/io";
import { GiSchoolBag } from "react-icons/gi";
import Slide from 'react-reveal/Slide';

function FakülteTanıtımları() {
    return (
        <div>
             <Grid fluid style={{margin:"0",padding:"0"}}>
                <Row className="show-grid" gutter={0} >
                <Col lg={12} md={12} sm={24} xs={24} style={{height:"50vh"}}>
                <Slide bottom>

                <h1 className="header" >MÜHENDİSLİK FAKÜLTESİ</h1>
                <div style={{display:"flex",justifyContent:"center",alignItems:'center',padding:20}}>
                    <div style={{width:"100%",color:'#5A5A5A',display:"flex",flexDirection:"column",justifyContent:"center",alignItems:'center'}}>
                            <GiSchoolBag  size="30%"/>
                            <h2 > 
                                3269
                            </h2>
                             <h4>
                                ÖĞRENCİ
                            </h4>                     
                    </div>
                    <div style={{width:"100%",color:'#5A5A5A',display:"flex",flexDirection:"column",justifyContent:"center",alignItems:'center'}}>
                            <IoMdSchool  size="30%"/>
                            <h2 > 
                              6223
                            </h2>
                            <h4>
                                MEZUN
                            </h4>      
                    </div>
                </div>
                    </Slide>

                </Col>
                <Col lg={12} md={12}  smHidden style={{height:"50vh"}}>

                    <div className='fakülte-foto' style={{width:"100%",height:"50vh",background: `linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 5%, rgba(255,255,255,0.1) 20%),url(${mühendisFoto})`,objectFit:"fill"}}>
               
                </div> 
                </Col>
                <Col  lg={12} md={12} smHidden style={{height:"50vh"}}>  
                <div  className='fakülte-foto' style={{width:"100%",height:"50vh",background: `linear-gradient(270deg, rgba(6, 57, 128,1) 0%, rgba(6, 57, 128,1) 5%, rgba(6, 57, 128,0.1) 20%),url(${tıpFoto})`}}>
                </div>

                </Col>
                <Col lg={12} md={12} sm={24} xs={24} style={{backgroundColor:"rgba(6, 57, 128,1)",height:"50vh"}}>
                <Slide bottom>
                <h1 className="header" style={{color:'white'}}>TIP FAKÜLTESİ</h1>
                <div style={{display:"flex",justifyContent:"center",alignItems:'center',padding:20}}>
                    <div style={{width:"100%",color:'white',display:"flex",flexDirection:"column",justifyContent:"center",alignItems:'center'}}>
                            <GiSchoolBag  size="30%" />
                            <h2 > 
                                3269
                            </h2>
                             <h4>
                                ÖĞRENCİ
                            </h4>                     
                    </div>
                    <div style={{width:"100%",color:'white',display:"flex",flexDirection:"column",justifyContent:"center",alignItems:'center'}}>
                            <IoMdSchool  size="30%"/>
                            <h2 > 
                              6223
                            </h2>
                            <h4>
                                MEZUN
                            </h4>      
                    </div>
                    </div>
                    </Slide>

                </Col>
                <Col lg={12} md={12} sm={24} xs={24} style={{height:"50vh"}}>
                <Slide bottom>
                <h1 className="header">EĞİTİM FAKÜLTESİ</h1>
                <div style={{display:"flex",justifyContent:"center",alignItems:'center',padding:20}}>
                    <div style={{width:"100%",color:'#5A5A5A',display:"flex",flexDirection:"column",justifyContent:"center",alignItems:'center'}}>
                            <GiSchoolBag  size="30%" />
                            <h2 > 
                                3269
                            </h2>
                             <h4>
                                ÖĞRENCİ
                            </h4>                     
                    </div>
                    <div style={{width:"100%",color:'#5A5A5A',display:"flex",flexDirection:"column",justifyContent:"center",alignItems:'center'}}>
                            <IoMdSchool  size="30%"/>
                            <h2 > 
                              6223
                            </h2>
                            <h4>
                                MEZUN
                            </h4>      
                    </div>
                    </div>
                    </Slide>

                </Col>
                <Col lg={12} md={12} smHidden>
                    <div className='fakülte-foto' style={{width:"100%",height:"50vh",background: `linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9) 5%, rgba(255,255,255,0.1) 20%),url(${eğitimFoto})`,objectFit:"cover",objectPosition:"center"}}>
                </div>

                </Col>
                <Col lg={12} md={12} smHidden>  
                <div  className='fakülte-foto' style={{width:"100%",height:"50vh",background: `linear-gradient(270deg, rgba(6, 57, 128,1) 0%, rgba(6, 57, 128,0.9) 5%, rgba(6, 57, 128,0.1) 20%),url(${diş})`}}>
                </div>

                </Col>
                <Col lg={12} md={12} sm={24} xs={24} style={{backgroundColor:"rgba(6, 57, 128,1)"}}>
                <Slide bottom>
                    <div style={{backgroundColor:"rgba(6, 57, 128,1)",width:"100%",height:"50vh"}}>
                            <h1 className="header" style={{color:'white'}}>DİŞ FAKÜLTESİ</h1>
                            <div style={{display:"flex",justifyContent:"center",alignItems:'center',padding:20}}>
                    <div style={{width:"100%",color:'white',display:"flex",flexDirection:"column",justifyContent:"center",alignItems:'center'}}>
                            <GiSchoolBag  size="30%"/>
                            <h2 > 
                                3269
                            </h2>
                             <h4>
                                ÖĞRENCİ
                            </h4>                     
                    </div>
                    <div style={{width:"100%",color:'white',display:"flex",flexDirection:"column",justifyContent:"center",alignItems:'center'}}>
                            <IoMdSchool  size="30%"/>
                            <h2 > 
                              6223
                            </h2>
                            <h4>
                                MEZUN
                            </h4>      
                    </div>
                    </div>
                    </div>
                    </Slide>

                </Col>
                </Row>
            </Grid>
        </div>
    );
}
export default FakülteTanıtımları;
