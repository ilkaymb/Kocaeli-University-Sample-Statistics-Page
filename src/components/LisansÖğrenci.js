
import {VictoryBar,VictoryChart,VictoryLabel,VictoryAxis} from 'victory';
import TrackVisibility from 'react-on-screen';

import {  Col ,Content,FlexboxGrid} from 'rsuite';
import akademikImg from '../images/akademikPersonel.png'
import { IoMdPerson } from "react-icons/io"
import { useMediaQuery } from 'react-responsive'

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


  const Card = props => (
    <div className='card-design' style={{width:'100%',height:'100%',display:'flex',justifyContent:"center",alignItems:'space-evenly',flexDirection:"column",gap:20}}>       
            <IoMdPerson size='10vh'/>
   
    <div style={{color:'white'}}>
                    <h1 >{props.number}</h1>
        <h4 >{props.title}</h4>
    </div>
    </div>

);

  const ComponentToTrack = ({ isVisible }) => {
    const style = {
        background: isVisible ? 'red' : 'blue'
    };

  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
      const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })


    return(
    
    

    
    <Content>    
      <div className="lisans-öğrenci-box" >

  <div style={{padding:"25px"}}>
          <h1 className="header" style={{color:'white',fontSize: (isBigScreen ? '44px' :( isDesktopOrLaptop ? '40px':'28px') )}}>LİSANS ÖĞRENCİ DAĞILIMLARI</h1>
    <hr className="divider"/>  
      </div>
    <FlexboxGrid justify="center">
      <FlexboxGrid.Item as={Col}  xs={24}  sm={24} md={24} lg={4} > 
      <FlexboxGrid.Item as={Col}  xs={24}  sm={24} md={24} lg={24} > 

      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
 <div style={{width:"100%",height:'40vh'}}>

<Card title={"Lisans Öğrenci Sayısı"} number={"15.209"} image={akademikImg}/>
 </div>
                </div>
          </FlexboxGrid.Item>
          
</FlexboxGrid.Item>
      <FlexboxGrid.Item as={Col}  xs={24}  sm={24} md={24} lg={12} >  

        <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",minHeight:'80vh'}}>
        <div style={{width:"100%",height:'100%'}}>
        <div  style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    
    <VictoryChart
  domainPadding={{ x: 25 }}
  padding={{ top: 10, bottom: 10, right: 0, left: 10 }} 
    height={(isBigScreen ? 650 :( isDesktopOrLaptop ? 600:1200) )}
    width={(isBigScreen ? 800 :( isDesktopOrLaptop ? 800:1000) )}
    
    >  
    
    <VictoryAxis
    animate={{
    duration: 1000,
    easing: "linear"
    }}
    labelComponent={<VictoryLabel textAnchor="start" />}
    style={{
    tickLabels: {
    fontSize: (isBigScreen ? '18px' :( isDesktopOrLaptop ? '20px':'26px') ),
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
    fontSize:  (isBigScreen ? '16px' :( isDesktopOrLaptop ? '18px':'22px') ),
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
</div>
        </div>
    
        </FlexboxGrid.Item>
    </FlexboxGrid>


  </div>
    </Content>
    
    
    
    
    
  
    
    
      
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
  