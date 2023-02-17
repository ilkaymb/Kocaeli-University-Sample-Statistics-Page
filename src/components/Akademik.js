

import Slide from 'react-reveal/Slide';
import {VictoryPie} from 'victory';
import { IoIosSquare } from "react-icons/io";
import { Grid, Row, Col } from 'rsuite';


function Akademik(){



    return (
        <div className="academic-box" style={{padding:"75px 0"}}>
         
        <h1 className="header">AKADEMİK PERSONEL SAYISI</h1>
        <hr className="divider"/>

       
        <Grid fluid>
            <Row>
            <Col xs={24}  sm={24} md={24} lg={12}>
            <Slide  left>






<div style={{display:"flex",justifyContent:'center',alignItems:'center',alignSelf:'center'}}>



<svg width={250} height={250}   
>
<VictoryPie
animate={{
duration: 2000
}}
colorScale={["rgba(9,163,80,1)", " #5091cb"]}
standalone={false}
width={250} height={250}
innerRadius={90}
data={[
   { x: " ", y: 400 },
   { x: " ", y: 800 },
 ]}


/>
<text x="50%" y="50%" textAnchor="middle" stroke="rgb(87,87,87)" strokeWidth="1px" dy=".3em" fontSize="32px">1200</text>
</svg>

</div>


   <center><h3>Öğretim Görevlisi İstatistiği</h3></center>
            <hr style={{width:"75%"}}/>
  <div style={{display:"flex",flexDirection: "column",alignItems:'center',alignSelf:"center"}}>
<div style={{display:"flex",alignItems:"center"}}>
<IoIosSquare style={{minWidth:40,minHeight:40}} color="rgba(9,163,80,1)" /> 
<h5>Önlisans Program Sayısı: 400</h5>
</div>

<div style={{display:"flex",alignItems:"center"}}>
<IoIosSquare style={{minWidth:40,minHeight:40}} color="#5091cb" /> 
<h5>
Lisans Program Sayısı: 800
</h5>
</div>
</div>
   </Slide >
            </Col>
            <Col  xs={24}  sm={24} md={24} lg={12} >
           <Slide right>
    <div style={{display:"flex",justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
       
       <svg width={250} height={250}>
    <VictoryPie
    colorScale={[ "#f2c846" , "#d11919" ]}
    standalone={false}
    width={250} height={250}
    innerRadius={90}
    data={[
    { x: " ", y: 300 },
    { x: " ", y: 240 }
     ]}
     animate={{ easing: 'exp' }}
    />
    <text x="50%" y="50%" textAnchor="middle" stroke="rgb(87,87,87)" strokeWidth="1px" dy=".3em" fontSize="32px">540</text>
    </svg>
       </div>
       <center><h3>Lisansüstü Program Sayısı ve Dağılımı</h3></center>
       <hr style={{width:"75%"}}/>
     
       <div style={{display:"flex",flexDirection: "column",alignItems:'center',alignSelf:"center"}}>
       <div style={{display:"flex",alignItems:"center"}}>
        <IoIosSquare style={{minWidth:40,minHeight:40}} color="#f2c846" /> 
        <h5>
            Yüksek Lisans: 300   
        </h5>
        </div>
    
        <div style={{display:"flex",alignItems:"center"}}>
        <IoIosSquare  style={{minWidth:40,minHeight:40}} color="#d11919" /> 
        <h5>
          Doktora: 240   
        </h5>
        </div>
     
    </div>
    </Slide>
            </Col>
            </Row>
        </Grid>
    
    
   


    
    </div>
    
    );
}

export default Akademik;
