

import Slide from 'react-reveal/Slide';
import {VictoryPie} from 'victory';
import { IoIosSquare } from "react-icons/io";
import { Grid, Row, Col } from 'rsuite';


function Akademik(){



    return (
        <div className="academic-box">
         <div style={{padding:"25px"}}>
                  <h1 className="header">PROGRAM SAYISI ve DAĞILIMLARI</h1>
        <hr className="divider"/>  
         </div>


       
        <Grid fluid>
            <Row>
            <Col xs={24}  sm={24} md={24} lg={12}>
            <Slide  left>





   <center><p style={{fontSize:24}}>Öğretim Görevlisi İstatistiği</p></center>

<div style={{display:"flex",justifyContent:'center',alignItems:'center',alignSelf:'center',flexDirection:'column',paddingBottom:50}}>



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


<div style={{display:"flex",flexDirection: "column"}}>
<div style={{display:"flex",alignItems:"center"}}>
<IoIosSquare style={{minWidth:30,minHeight:30}} color="rgba(9,163,80,1)" /> 
<p style={{fontSize:18}}>Önlisans Program Sayısı: 400</p>
</div>

<div style={{display:"flex",alignItems:"center"}}>
<IoIosSquare style={{minWidth:30,minHeight:30}} color="#5091cb" /> 
<p style={{fontSize:18}}>
Lisans Program Sayısı: 800
</p>
</div>
</div>


</div>



   </Slide >
            </Col>
            <Col  xs={24}  sm={24} md={24} lg={12} >
           <Slide right>    
    
    <center><p style={{fontSize:24}}>Lisansüstü Program Sayısı ve Dağılımı</p></center>
    <div style={{display:"flex",justifyContent:'center',alignItems:'center',alignSelf:'center',flexDirection:'column',paddingBottom:50}}>

       <svg width={250} height={250}>
    <VictoryPie
    colorScale={[ "#f2c846" , "#d11919"]}
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
    <div style={{display:"flex",flexDirection: "column"}}>
       <div style={{display:"flex",alignItems:"center"}}>
        <IoIosSquare style={{minWidth:30,minHeight:30}} color="#f2c846" /> 
        <p style={{fontSize:18}}>
            Yüksek Lisans: 300   
        </p>
        </div>
    
        <div style={{display:"flex",alignItems:"center"}}>
        <IoIosSquare  style={{minWidth:30,minHeight:30}} color="#d11919" /> 
        <p style={{fontSize:18}}>
          Doktora: 240   
        </p>
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

export default Akademik;
