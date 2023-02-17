

import Slide from 'react-reveal/Slide';
import {VictoryPie,VictoryBar,VictoryChart,VictoryLabel,VictoryAxis} from 'victory';
import TrackVisibility from 'react-on-screen'; // CommonJs : require('react-on-screen').default
import { IoIosSquare } from "react-icons/io";
import { Grid, Row, Col } from 'rsuite';

const Roboto = "'Roboto', sans-serif";
const fontSize = 10;

const fakülteData =[
    { x: "Bilgisayar ve Bilişim Fakültesi", y: 1213},
    { x: "Denizcilik Fakültesi", y: 1162},
    { x: "Elektrik Elektronik Fakültesi", y: 3009},
    { x: "Fen Edebiyat Fakültesi", y: 1800 },
    { x: "Gemi İnşaatı ve Deniz Bilimleri Fakültesi", y: 827 },
    { x: "İnşaat Fakültesi", y: 3317},
    { x: "İşletme Fakültesi", y: 2542},
    { x: "Kimya - Metalurji Fakültesi", y: 1784},
    { x: "Maden Fakültesi", y: 1840 },
    { x: "Makina Fakültesi ", y: 1768 },
    { x: "Mimarlık Fakültesi ", y: 3171 },
    { x: "Tekstil Teknolojileri ve Tasarım Fakültesi", y: 583 },
    { x: "Uçak ve Uzay Bilimleri Fakültesi ", y: 1492 }
  ];

function Akademik(){



    return (
        <div className="academic-box" style={{padding:"75px 0"}}>
         
        <h1 className="header">AKADEMİK PERSONEL SAYISI</h1>
        <hr class="divider"/>

       
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
