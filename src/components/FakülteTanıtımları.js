import { Grid, Row, Col ,Carousel} from 'rsuite';
import mühendisFoto from '../images/mühendislik.png'
import tıpFoto from '../images/tıp.png'
import eğitimFoto from '../images/öğretmenlik.png'
import diş from '../images/diş.png'
import { IoMdSchool } from "react-icons/io";
import {  GiSchoolBag } from "react-icons/gi";
import { useMediaQuery } from 'react-responsive'

const styles = {
    radioGroupLabel: {
      padding: '12px 16px',
      display: 'inline-block',
      verticalAlign: 'middle',
      color:'white',
    }
  };
  

function FakülteCardRight(props) {

    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })

    
    return (
        <Col  lg={24} md={24} sm={24} xs={24} style={{padding:0}}>

        <Col lg={12} md={24} sm={24} xs={24} style={{height:"50vh",padding:0,backgroundColor:"white"}}>           
        <Col lg={24} md={24} sm={24} xs={24} style={{padding:0}}> 
         <div className="header"  style={{fontSize: (isBigScreen ? '40px' :( isDesktopOrLaptop ? '36px':'24px') )}}>{props.title}</div>
        <div style={{display:"flex",justifyContent:"center",alignItems:'center',padding:20}}>
            <div style={{width:"100%",color:'#5A5A5A',display:"flex",flexDirection:"column",justifyContent:"center",alignItems:'center'}}>
                    <GiSchoolBag  size="10vh"/>
                    <div style={{fontWeight:'bold',fontSize: (isBigScreen ? '32px' :( isDesktopOrLaptop ? '28px':'24px') )}}> 
                       {props.num1}
                    </div>
                     <div style={{fontSize: (isBigScreen ? '24px' :( isDesktopOrLaptop ? '22px':'20px') )}}>
                        ÖĞRENCİ
                    </div>                     
            </div>
            <div style={{width:"100%",color:'#5A5A5A',display:"flex",flexDirection:"column",justifyContent:"center",alignItems:'center'}}>
                    <IoMdSchool  size="10vh"/>
                    <div style={{fontWeight:'bold',fontSize: (isBigScreen ? '32px' :( isDesktopOrLaptop ? '28px':'24px') )}}> 
                    {props.num2}

                    </div>
                    <div style={{fontSize: (isBigScreen ? '24px' :( isDesktopOrLaptop ? '22px':'20px') )}}>
                        MEZUN
                    </div>      
            </div>
        </div>         
    
        </Col>       
        <Col lg={24} md={24} sm={24} xs={24} style={{padding:0}}>
                    <center>
                        <div className='fakülte-button' style={{fontSize: (isBigScreen ? '18px' :( isDesktopOrLaptop ? '16px':'14px') )}}>
                        {props.title} Sayıları  
                        </div>
                    </center>
                    </Col>
        </Col>
        <Col lg={12} mdHidden style={{height:"50vh",padding:0}}>
            <div className='fakülte-foto' style={{width:"100%",height:"50vh",background: `linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 5%, rgba(255,255,255,0.1) 20%),url(${props.image})`,objectFit:"fill"}}>
            </div> 
        </Col> 
        </Col>

    );

}


function FakülteCardLeft(props) {

    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })

    return (
        <Col  lg={24} md={24} sm={24} xs={24} style={{padding:0}}>
        <Col lg={12} mdHidden style={{height:"50vh",padding:0}}>
        <div  className='fakülte-foto' style={{width:"100%",height:"50vh",background: `linear-gradient(270deg, rgba(6, 57, 128,1) 0%, rgba(6, 57, 128,0.9) 5%, rgba(6, 57, 128,0.1) 20%),url(${props.image})`}}>
            </div> 
        </Col> 
        <Col lg={12} md={24} sm={24} xs={24} style={{backgroundColor:"rgba(6, 57, 128,1)",height:"50vh",padding:0}}>
                    <Col lg={24} md={24} sm={24} xs={24} > 
                             <div className="header" style={{color:'white',fontSize:(isBigScreen ? '40px' :( isDesktopOrLaptop ? '36px':'24px') )}}>{props.title}</div>
                <div style={{display:"flex",justifyContent:"center",alignItems:'center',padding:20}}>
                    <div style={{width:"100%",color:'white',display:"flex",flexDirection:"column",justifyContent:"center",alignItems:'center'}}>
                            <GiSchoolBag  size="10vh" />
                            <div style={{fontWeight:'bold',fontSize: (isBigScreen ? '32px' :( isDesktopOrLaptop ? '28px':'24px') )}}> 
                            {props.num1}
                            </div>
                             <div style={{fontSize: (isBigScreen ? '24px' :( isDesktopOrLaptop ? '22px':'20px') )}}>
                                ÖĞRENCİ
                            </div>                     
                    </div>
                    <div style={{width:"100%",color:'white',display:"flex",flexDirection:"column",justifyContent:"center",alignItems:'center'}}>
                            <IoMdSchool  size="10vh"/>
                            <div style={{fontWeight:'bold',fontSize: (isBigScreen ? '32px' :( isDesktopOrLaptop ? '28px':'24px') )}}> 
                            {props.num2}
                            </div>
                            <div style={{fontSize: (isBigScreen ? '24px' :( isDesktopOrLaptop ? '22px':'20px') )}}>
                                MEZUN
                            </div>      
                    </div>
                    </div>
                    </Col>       
                    <Col lg={24} md={24} sm={24} xs={24} style={{padding:0}}>
                    <center>
                        <div className='fakülte-button-blue' style={{fontSize: (isBigScreen ? '18px' :( isDesktopOrLaptop ? '16px':'14px') )}}>
                        {props.title} Sayıları  
                        </div>
                    </center>
                    </Col>
                </Col> 
                </Col> 

    );
}

function FakülteTanıtımları() {

 


    return (
        <div>
      <Carousel 
        key={`${'right'}.${'bar'}`}
        placement={'right'}
        shape={'bar'}
        className="custom-slider"
        style={{height:'100vh'}}
      >
       
       <Grid fluid style={{margin:"0",padding:"0"}}>
            <Row gutter={0} >                 
              <FakülteCardLeft title="Tıp Fakültesi" num1="3232" num2="6224" image={tıpFoto}/>
   
                <FakülteCardRight title="Mühendislik Fakültesi" num1="3232" num2="6224" image={mühendisFoto}/>
            </Row>
        </Grid>  
        <Grid fluid style={{margin:"0",padding:"0"}}>
            <Row gutter={0} >           
                  <FakülteCardLeft title="Diş Fakültesi" num1="3232" num2="6224" image={diş}/>
   
             <FakülteCardRight title="Eğitim Fakültesi" num1="3232" num2="6224" image={eğitimFoto}/>
            </Row>
        </Grid>  
        <Grid fluid style={{margin:"0",padding:"0"}}>
            <Row gutter={0} >      
                      <FakülteCardLeft title="Diş Fakültesi" num1="3232" num2="6224" image={diş}/>
    
             <FakülteCardRight title="Eğitim Fakültesi" num1="3232" num2="6224" image={eğitimFoto}/>
            </Row>
        </Grid>  
        <Grid fluid style={{margin:"0",padding:"0"}}>
            <Row gutter={0} >           
                    <FakülteCardLeft title="Diş Fakültesi" num1="3232" num2="6224" image={diş}/>
 
             <FakülteCardRight title="Eğitim Fakültesi" num1="3232" num2="6224" image={eğitimFoto}/>
            </Row>
        </Grid>  
        <Grid fluid style={{margin:"0",padding:"0"}}>
            <Row gutter={0} >      
             <FakülteCardRight title="Eğitim Fakültesi" num1="3232" num2="6224" image={eğitimFoto}/>
              <FakülteCardLeft title="Diş Fakültesi" num1="3232" num2="6224" image={diş}/>
            </Row>
        </Grid>  
        <Grid fluid style={{margin:"0",padding:"0"}}>
            <Row gutter={0} >         
                      <FakülteCardLeft title="Diş Fakültesi" num1="3232" num2="6224" image={diş}/>
 
             <FakülteCardRight title="Eğitim Fakültesi" num1="3232" num2="6224" image={eğitimFoto}/>
            </Row>
        </Grid>  
        <Grid fluid style={{margin:"0",padding:"0"}}>
            <Row gutter={0} >        
                      <FakülteCardLeft title="Diş Fakültesi" num1="3232" num2="6224" image={diş}/>
  
             <FakülteCardRight title="Eğitim Fakültesi" num1="3232" num2="6224" image={eğitimFoto}/>
            </Row>
        </Grid>  
        <Grid fluid style={{margin:"0",padding:"0"}}>
            <Row gutter={0} >         
                    <FakülteCardLeft title="Diş Fakültesi" num1="3232" num2="6224" image={diş}/>
   
             <FakülteCardRight title="Eğitim Fakültesi" num1="3232" num2="6224" image={eğitimFoto}/>
            </Row>
        </Grid>  
      </Carousel>

    
             
        </div>
    );
}
export default FakülteTanıtımları;
