import {VictoryPie} from 'victory';
import { IoIosSquare } from "react-icons/io";
import {  Col, FlexboxGrid } from 'rsuite';
import { useMediaQuery } from 'react-responsive'
import { BsPersonCircle } from "react-icons/bs";


const Card = props => (
        <div className='card-design' style={{color:'rgb(90, 90, 90)',width:'100%',height:'100%',display:'flex',justifyContent:"center",alignItems:'space-evenly',flexDirection:"column",gap:20}}>       
                <BsPersonCircle size='10vh'/>
       
        <div>
                        <h1 >{props.number}</h1>
            <h4 >{props.title}</h4>
        </div>
        </div>

  );
  

function AkademikPersonel(){
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })

    return (
        <div className="akademik-personel-box" >
       <div  style={{padding:"25px "}}>
                      <h1 className="header" style={{ fontSize: (isBigScreen ? '44px' :( isDesktopOrLaptop ? '40px':'28px') )}}>AKADEMİK PERSONEL SAYISI </h1>
            <hr className="divider"/>
         </div>
    
    <FlexboxGrid justify="center">
      <FlexboxGrid.Item colspan={20}>  

      <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',alignSelf:'center',paddingBottom:10}}>
                 <h5 className='sub-header'  style={{fontSize: (isBigScreen ? '32px' :( isDesktopOrLaptop ? '28px':'24px') )}}>"Eğitim kadromuzla gençlerimiz için çalışıyoruz."</h5>

                </div>

         </FlexboxGrid.Item>
    
    </FlexboxGrid>
            <div >
       
    
        <FlexboxGrid justify="center">
      <FlexboxGrid.Item as={Col}  xs={24}  sm={24} md={24} lg={12} >  

        <FlexboxGrid.Item as={Col}  xs={24}  sm={24} md={24} lg={12} >  
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:'40vh'}}>
            <svg width={(isBigScreen ? 400 :( isDesktopOrLaptop ? 350:300) )} height={(isBigScreen ? 400 :( isDesktopOrLaptop ? 350:300) )}  
             viewBox="0 0 "
>
<VictoryPie
animate={{
duration: 2000
}}
colorScale={["rgba(9,163,80,1)", " #5091cb","#f2c846" , "#d11919" ,'orange' ]}
standalone={false}
width={(isBigScreen ? 400 :( isDesktopOrLaptop ? 350:300) )} height={(isBigScreen ? 400 :( isDesktopOrLaptop ? 350:300) )} 
innerRadius={110}
data={[
   { x: " ", y: 545 },
   { x: " ", y: 248 },
   { x: " ", y: 305 },
   { x: " ", y: 407 },
   { x: " ", y: 736 },
 ]}


/>
<text x="50%" y="40%" textAnchor="middle" stroke="rgb(90, 90, 90)" strokeWidth="1px" dy=".3em" fontSize="32px" style={{fill:'rgb(90, 90, 90)'}}>{545+248+305+407+736}</text>
<text x="50%" y="50%" textAnchor="middle" stroke="rgb(90, 90, 90)" strokeWidth="0.5px" dy=".3em" fontSize="24px" style={{fill:'rgb(90, 90, 90)'}}>Akademik</text>
<text x="50%" y="60%" textAnchor="middle" stroke="rgb(90, 90, 90)" strokeWidth="0.5px" dy=".3em" fontSize="24px" style={{fill:'rgb(90, 90, 90)'}}>Personel</text>


        </svg>
            </div>
    
    </FlexboxGrid.Item>
    <FlexboxGrid.Item as={Col}  xs={24}  sm={24} md={24} lg={12} >  
    <div style={{width:"100%",height:'40vh'}}>
    <div style={{display:"flex",flexDirection: "column",alignItems:'start',justifyContent:'space-evenly',alignSelf:'center',height:'100%'}}>
                <div style={{display:"flex",alignItems:"center",gap:15}}>
                <IoIosSquare style={{minWidth:30,minHeight:30}} color="rgba(9,163,80,1)" /> 
                <p style={{fontSize: (isBigScreen ? '20px' :( isDesktopOrLaptop ? '18px':'16px') )}}>Profesör: 545</p>
                </div>

                <div style={{display:"flex",alignItems:"center",gap:15}}>
                <IoIosSquare style={{minWidth:30,minHeight:30}} color="#5091cb" /> 
                <p style={{fontSize: (isBigScreen ? '20px' :( isDesktopOrLaptop ? '18px':'16px') )}}>Doçent: 248</p>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:15}}>
                <IoIosSquare style={{minWidth:30,minHeight:30}} color="#f2c846" /> 
                <p style={{fontSize: (isBigScreen ? '20px' :( isDesktopOrLaptop ? '18px':'16px') )}}>Dr. Öğr. Üyesi: 305</p>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:15}}>
                <IoIosSquare style={{minWidth:30,minHeight:30}} color="#d11919" /> 
                <p style={{fontSize: (isBigScreen ? '20px' :( isDesktopOrLaptop ? '18px':'16px') )}}>Öğretim Görevlisi: 407</p>
                </div>

                <div style={{display:"flex",alignItems:"center",gap:15}}>
                <IoIosSquare style={{minWidth:30,minHeight:30}} color="orange" /> 
                <p style={{fontSize: (isBigScreen ? '20px' :( isDesktopOrLaptop ? '18px':'16px') )}}>
                Araştırma Görevlisi: 736
                </p>
                </div>
                </div> 
        </div>
    
    </FlexboxGrid.Item>
        </FlexboxGrid.Item>
    </FlexboxGrid>
    
    </div>
    </div>
    );
}

export default AkademikPersonel;
