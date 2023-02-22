
import {VictoryChart,VictoryLine,VictoryAxis,VictoryLabel} from 'victory';
import { Grid, Row, Col } from 'rsuite';
import { GiArchiveResearch } from "react-icons/gi";
import { MdScience ,MdBiotech} from "react-icons/md";

  
function Arge() {
    return (
      <div className="arge-box">   
            <div style={{padding:"25px"}}>
              <h1 className="header" style={{color:'white'}}>ARGE PROJELERİ </h1>
                <hr className="divider"/>
          </div>

          <Grid fluid>
 

    <Row >
      <Col lg={12} md={24} sm={24} xs={24} style={{padding:"25px 0"}}>

        <div style={{width:'100%',height:450,display:'flex',justifyContent:'center',alignItems:'center',  flexWrap: 'wrap'}}> 
              <h4 style={{color:'white',display:'flex',justifyContent:'center',alignItems:'center'}}>Geliştirilen Arge Projelerinin yıllara göre grafiği: </h4>

        <VictoryChart
        width={400}
        height={400}
         style={{
          axis: {
            style: {
              tickLabels: {
                // this changed the color of my numbers to white
                fill: 'white',
              },
            },
          },
        }}
            minDomain={{ y: 0 }}
            color={'white'}
          >
              <VictoryAxis
    tickLabelComponent={<VictoryLabel dy={0} dx={10} angle={55}/>}

    style={{
      axis: {
        stroke: 'white'  //CHANGE COLOR OF X-AXIS
      },
      tickLabels: {
        fill: 'white' ,
        fontSize:20
        //CHANGE COLOR OF X-AXIS LABELS
      }, 
      grid: {
          stroke: 'white', //CHANGE COLOR OF X-AXIS GRID LINES
          strokeDasharray: '7',
      }
    }}
  />
  <VictoryAxis
    dependentAxis
    tickFormat={(y) => y}
    style={{
      axis: {
        stroke: 'white' //CHANGE COLOR OF Y-AXIS
      },
      tickLabels: {
        fill: 'white' //CHANGE COLOR OF Y-AXIS LABELS,
        ,fontSize:24
      }, 
      grid: {
        stroke: 'white', //CHANGE COLOR OF Y-AXIS GRID LINES
        strokeDasharray: '7',
      }
    }}
  />
        <VictoryLine
          data={[
            { x: "2019", y: 2 },
            { x: "2020", y: 3 },
            { x: "2021", y: 5 },
            { x: "2022", y: 4 },
            { x: "2023", y: 6 }
          ]}
         
          style={{
            data: { stroke: "rgba(9,163,80,1)",     strokeWidth: 5 ,fontSize:16    },
            parent: { border: "1px solid #ccc",fontSize:16},
         
          }}
        />
      </VictoryChart>
        </div>
        
      </Col>
      <Col lg={12} md={24} sm={24} xs={24} >
        <div style={{display:'flex',  alignContent: 'space-between',flexWrap: 'wrap'}}>
        <Col lg={12} md={12} sm={24} xs={24}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',alignSelf:'center',color:'white',  height: 150}}>
              <GiArchiveResearch size={120} />
              <div style={{display:'flex',flexDirection:'column'}}>
                    <h2>
                    112
                    </h2>
                    <h4>
                    Araştırma Projesi
                    </h4>
              </div>
      
        </div>


      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',alignSelf:'center',color:'white',  height: 150}}>
      <MdScience size={120} />
              <div style={{display:'flex',flexDirection:'column'}}>
                    <h2>
                    85
                    </h2>
                    <h4>
                    Sonuçlanmış Deney
                    </h4>
              </div>
      
        </div>
 


      </Col>
  


      <Col lg={12} md={12} sm={24} xs={24}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',alignSelf:'center',color:'white',  height: 150}}>
              <MdBiotech size={120} />
              <div style={{display:'flex',flexDirection:'column'}}>
                    <h2>
                    112
                    </h2>
                    <h4>
                    Araştırma Projesi
                    </h4>
              </div>
      
        </div>


      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',alignSelf:'center',color:'white',  height: 150}}>
              <GiArchiveResearch size={120} />
              <div style={{display:'flex',flexDirection:'column'}}>
                    <h2>
                    112
                    </h2>
                    <h4>
                    Araştırma Projesi
                    </h4>
              </div>
      
        </div>


      </Col>
      </div>
     
      <Col lg={24} md={24} sm={24} xs={24}>
  <div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',alignSelf:'center',color:'white',  height: 150}}>
        <div style={{display:'flex',flexDirection:'column'}}>
        <h4>
              2022 Yılında

              </h4>
              <h2>
              Toplam 822 Proje 
              </h2>
        </div>

  </div>


</Col>

      </Col>

    </Row>
  </Grid>


      </div>

 
    );
  }
  
  export default Arge;
  