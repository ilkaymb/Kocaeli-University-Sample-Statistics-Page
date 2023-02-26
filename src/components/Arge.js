
import {VictoryChart,VictoryAxis,VictoryLabel,VictoryTheme,VictoryBar,VictoryStack} from 'victory';
import {  Col,FlexboxGrid } from 'rsuite';
import { IoIosSquare } from "react-icons/io";

import { useMediaQuery } from 'react-responsive'

const getBarData = () => {
  
  return [1, 2, 3, 4].map(() => {
    return [
      { x: 1, y: Math.floor(Math.random() * 10)+1 },
      { x: 2, y: Math.floor(Math.random() * 10)+1 },
      { x: 3, y: Math.floor(Math.random() * 10)+1 },
      { x: 4, y: Math.floor(Math.random() * 10)+1},
      { x: 5, y: Math.floor(Math.random() * 10)+1 }
    ];
  });
};

  
function Arge() {

  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })

    return (
      <div className="arge-box">   
            <div style={{padding:"25px"}}>
              <h1 className="header" style={{color:'white',fontSize: (isBigScreen ? '44px' :( isDesktopOrLaptop ? '40px':'28px') )}}>ARGE PROJELERİ </h1>
                <hr className="divider"/>
          </div>


          <FlexboxGrid justify="center">
      <FlexboxGrid.Item as={Col}  xs={24}  sm={24} md={24} lg={24} > 
      <div className="sub-header" style={{color:'white',display:'flex',justifyContent:'center',alignItems:'center',fontSize: (isBigScreen ? '24px' :( isDesktopOrLaptop ? '22px':'20px') )}}>Geliştirilen Arge Projelerinin yıllara göre grafiği: </div>

      </FlexboxGrid.Item> 

      <FlexboxGrid.Item as={Col}  xs={24}  sm={24} md={24} lg={8} > 

 <div style={{width:"100%",height:'60vh'}}>
 <VictoryChart
  domainPadding={20}
  theme={VictoryTheme.material}>
  <VictoryAxis
    tickValues={[1, 2, 3, 4, 5]}
    tickFormat={["2019","2020", "2021", "2022", "2023"]}
    tickLabelComponent={<VictoryLabel dy={0} dx={10} angle={55}/>}
    style={{
      axis: {
      stroke: 'white'  //CHANGE COLOR OF X-AXIS
      },
      tickLabels: {
      fill: 'white' ,
      fontSize:16
      //CHANGE COLOR OF X-AXIS LABELS
      }, 
      grid: {
        stroke: 'white', //CHANGE COLOR OF X-AXIS GRID LINES
        strokeDasharray: '7',
      }
      }}/>
  <VictoryAxis
      domain={{ y: [0, 50]}}

    dependentAxis
    tickFormat={(x) => (`${x}`)}
    style={{
      axis: {
      stroke: 'white'  //CHANGE COLOR OF X-AXIS
      },
      tickLabels: {
      fill: 'white' ,
      fontSize:16
      //CHANGE COLOR OF X-AXIS LABELS
      }, 
      grid: {
        stroke: 'white', //CHANGE COLOR OF X-AXIS GRID LINES
        strokeDasharray: '7',
      }
      }}/>
  <VictoryStack
colorScale={["rgba(9,163,80,1)", " #5091cb","#f2c846" , "#d11919"  ]}

  >
      <VictoryStack colorScale={["rgba(9,163,80,1)", " #5091cb","#f2c846" , "#d11919"  ]}>
                {getBarData().map((data, index) => {
                  return <VictoryBar key={index} data={data}/>;
                })}
       </VictoryStack>
       <VictoryStack colorScale={["rgba(9,163,80,1)", " #5091cb","#f2c846" , "#d11919"  ]}>
                {getBarData().map((data, index) => {
                  return <VictoryBar key={index} data={data}/>;
                })}
       </VictoryStack>
       <VictoryStack colorScale={["rgba(9,163,80,1)", " #5091cb","#f2c846" , "#d11919"  ]}>
                {getBarData().map((data, index) => {
                  return <VictoryBar key={index} data={data}/>;
                })}
       </VictoryStack>
       <VictoryStack colorScale={["rgba(9,163,80,1)", " #5091cb","#f2c846" , "#d11919"  ]}>
                {getBarData().map((data, index) => {
                  return <VictoryBar key={index} data={data}/>;
                })}
       </VictoryStack>
       <VictoryStack colorScale={["rgba(9,163,80,1)", " #5091cb","#f2c846" , "#d11919"  ]}>
                {getBarData().map((data, index) => {
                  return <VictoryBar key={index} data={data}/>;
                })}
       </VictoryStack>
  </VictoryStack>
</VictoryChart>
 </div>
          
</FlexboxGrid.Item>
<FlexboxGrid.Item as={Col}  xs={24}  sm={24} md={24} lg={4} > 

<div style={{width:"100%",height:'60vh'}}>
<div style={{display:"flex",flexDirection: "column",alignItems:'start',justifyContent:'space-evenly',alignSelf:'center',height:'100%'}}>
<div style={{display:"flex",alignItems:"center",gap:15}}>
<IoIosSquare style={{minWidth:30,minHeight:30}} color="rgba(9,163,80,1)" /> 
<p style={{color:'white',fontSize: (isBigScreen ? '20px' :( isDesktopOrLaptop ? '18px':'16px') )}}>Araştırma Projesi</p>
</div>

<div style={{display:"flex",alignItems:"center",gap:15}}>
<IoIosSquare style={{minWidth:30,minHeight:30}} color="#5091cb" /> 
<p style={{color:'white',fontSize: (isBigScreen ? '20px' :( isDesktopOrLaptop ? '18px':'16px') )}}>Sonuçlandrılımış Deney</p>
</div>
<div style={{display:"flex",alignItems:"center",gap:15}}>
<IoIosSquare style={{minWidth:30,minHeight:30}} color="#f2c846" /> 
<p style={{color:'white',fontSize: (isBigScreen ? '20px' :( isDesktopOrLaptop ? '18px':'16px') )}}>Araştırma Projesi</p>
</div>
<div style={{display:"flex",alignItems:"center",gap:15}}>
<IoIosSquare style={{minWidth:30,minHeight:30}} color="#d11919" /> 
<p style={{color:'white',fontSize: (isBigScreen ? '20px' :( isDesktopOrLaptop ? '18px':'16px') )}}>Tez Çalışması</p>
</div>

</div> 
</div>
         
</FlexboxGrid.Item>
          


    
    </FlexboxGrid>

     
       

</div>

 
    );
  }
  
  export default Arge;
  