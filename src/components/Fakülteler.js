
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

  const ComponentToTrack = ({ isVisible }) => {
    const style = {
        background: isVisible ? 'red' : 'blue'
    };
    return(<div className="fakülte-box" >
      <div style={{padding:"25px"}}>
          <h1 className="header" style={{color:'white'}}>LİSANS ÖĞRENCİ DAĞILIMLARI</h1>
    <hr className="divider"/>  
      </div>

    
    <Content>
    <Grid fluid>
    
    <Row className="show-grid">
    
    <Col  xs={24}  sm={24} md={24} lg={24}>   
    
    <div className='fakülte-svg'  style={{display:"flex",width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}}>
    
    <VictoryChart 
    height={1000}
    width={2000}
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
    fontSize: 22,
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
    fontSize: 16,
    fill: 'white',
    fontFamily: Roboto,
    
    }
    
    }}
    animate={{
    duration: 5000,
    easing: "exp"
    }}
    
    labels={isVisible ?  0 :labels }
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
    
    
    </div>
    
    </Col>
    </Row>
    </Grid>
    </Content>
    
    
    
    
    
    </div>
    
    
      
      );
}

function Fakülteler() {

    return (
         <TrackVisibility>
            <ComponentToTrack />
        </TrackVisibility>
    );
  }
  
  export default Fakülteler;
  