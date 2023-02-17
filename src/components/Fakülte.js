
import {VictoryBar,VictoryChart,VictoryLabel,VictoryAxis} from 'victory';
import TrackVisibility from 'react-on-screen';

import { Grid, Row, Col ,Content} from 'rsuite';


const Roboto = "'Roboto', sans-serif";

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


const labels = fakülteData.map((group) => {
    return `${group.y} Öğrenci`;
  });

  
function Fakülte() {
    return (
      <div>

            <div className="fakülte-box" style={{padding:"75px 0"}}>
                 <h1 className="header" style={{color:'white'}}>LİSANS ÖĞRENCİ SAYISI</h1>
                 <hr class="divider"/>

  <Content>
<Grid fluid>

<Row className="show-grid">

<Col  xs={24}  sm={24} md={24} lg={24}>   
 <TrackVisibility once>

{({ isVisible }) => isVisible && 
<div  style={{display:"flex",width:"100%",height:"80%",justifyContent:"center",alignItems:"center"}}>
    <VictoryChart 
     height={500}
        width={1000}
        domainPadding={{ x: 0, y: 0 }}
    
        >
  <VictoryAxis
   animate={{
    duration: 1000,
    easing: "linear"
  }}
    labelComponent={<VictoryLabel textAnchor="start" />}
    style={{
      tickLabels: {
        fontSize: 14,
        fill: 'white',
        fontFamily: Roboto,

      }
      
    }}
    
  />
   <VictoryBar horizontal
domain={{ y: [-5000, 5000]}}
   style={{
      data: { fill: "rgba(9,163,80,1)" },
      labels:{
        fontSize: 12,
        fill: 'white',
        fontFamily: Roboto,

      }
     
    }}
    animate={{
        duration: 1000,
        easing: "exp"
      }}
 
    labels={labels}
    data={[
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
    ]}
    
  />

 
</VictoryChart>

</div>}             
    </TrackVisibility>

</Col>
</Row>
</Grid>
</Content>


  


            </div>




</div>

 
    );
  }
  
  export default Fakülte;
  