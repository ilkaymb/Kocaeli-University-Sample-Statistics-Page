import Slide from 'react-reveal/Slide';
import {VictoryPie} from 'victory';
import { IoIosSquare } from "react-icons/io";
import { Grid, Row, Col } from 'rsuite';

function AkademikPersonel(){


    return (
        <div className="akademik-personel-box" >
       
            <div >
    
    <Grid fluid>
            <Row>
            <Col xs={24}  sm={24} md={24} lg={24}>
                <div  style={{padding:"25px "}}>
                      <h1 className="header" style={{color:'white'}}>AKADEMİK PERSONEL SAYISI </h1>
            <hr className="divider"/>
                </div>
          
            </Col>

            <Col xs={24}  sm={24} md={24} lg={12}>
            <Slide  left>


<div style={{display:"flex",justifyContent:'center',alignItems:'center',alignSelf:'center',flexDirection:'column',padding:15}}>



<svg width={300} height={300}   
>
<VictoryPie
animate={{
duration: 2000
}}
colorScale={["rgba(9,163,80,1)", " #5091cb","#f2c846" , "#d11919" ,'orange' ]}
standalone={false}
width={300} height={300} 
innerRadius={120}
data={[
   { x: " ", y: 545 },
   { x: " ", y: 248 },
   { x: " ", y: 305 },
   { x: " ", y: 407 },
   { x: " ", y: 736 },
 ]}


/>
<text x="50%" y="50%" textAnchor="middle" stroke="white" strokeWidth="1px" dy=".3em" fontSize="32px" style={{fill:'white'}}>{545+248+305+407+736}</text>
</svg>


<div style={{display:"flex",flexDirection: "column"}}>
<div style={{display:"flex",alignItems:"center"}}>
<IoIosSquare style={{minWidth:30,minHeight:30}} color="rgba(9,163,80,1)" /> 
<p style={{fontSize:18,color:'white'}}>Profesör: 545</p>
</div>

<div style={{display:"flex",alignItems:"center"}}>
<IoIosSquare style={{minWidth:30,minHeight:30}} color="#5091cb" /> 
<p style={{fontSize:18,color:'white'}}>Doçent: 248</p>
</div>
<div style={{display:"flex",alignItems:"center"}}>
<IoIosSquare style={{minWidth:30,minHeight:30}} color="#f2c846" /> 
<p style={{fontSize:18,color:'white'}}>Dr. Öğr. Üyesi: 305</p>
</div>
<div style={{display:"flex",alignItems:"center"}}>
<IoIosSquare style={{minWidth:30,minHeight:30}} color="#d11919" /> 
<p style={{fontSize:18,color:'white'}}>Öğretim Görevlisi: 407</p>
</div>

<div style={{display:"flex",alignItems:"center"}}>
<IoIosSquare style={{minWidth:30,minHeight:30}} color="orange" /> 
<p style={{fontSize:18,color:'white'}}>
Araştırma Görevlisi: 736
</p>
</div>
</div>


</div>



   </Slide >
            </Col>
            <Col xs={24}  sm={24} md={24} lg={12} style={{height:'100%'}}>
                <div style={{color:'white',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',minHeight:'40vh',alignSelf:'center'}}>
                 <h2>"Eğitim kadromuzla gençlerimiz için çalışıyoruz."</h2>
                 <h4>2023 yılı İstatistiklerine bağlı grafiklerdir.</h4>

                </div>
            </Col>

            </Row>
        </Grid>
    
    
    </div>
    </div>
    );
}

export default AkademikPersonel;
