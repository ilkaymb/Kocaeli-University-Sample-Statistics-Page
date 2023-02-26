import { TfiWallet } from "react-icons/tfi";
import CountUp from 'react-countup';
import { Grid, Row, Col ,FlexboxGrid} from 'rsuite';
import { useMediaQuery } from 'react-responsive'


  
function Burslar() {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
    return (
      <div className="burslar-box" >   
      <div style={{padding:"25px",color:'rgba(6, 57, 128, 1)'}}>
           <h1 className="header"  style={{color:'rgba(6, 57, 128, 1)',fontSize: (isBigScreen ? '44px' :( isDesktopOrLaptop ? '40px':'28px') )}}>ÖĞRENCİLERE VERİLEN DESTEK </h1>
            <hr className="divider" style={{borderColor:'rgba(6, 57, 128, 1)'}}/>
      </div>
      <Grid fluid>
 

 <Row >
   <Col lg={8} md={24}  smHidden>
    <div  style={{display:'flex',justifyContent:'end',alignItems:'center',color:'rgba(6, 57, 128, 1)'}}><TfiWallet size="24vh"/></div>
                                

    </Col>
    <Col lg={12} md={24} sm={24} xs={24} style={{padding:"25px"}}>
    <div style={{display:'flex',justifyContent:'start',flexDirection:'column',gap:20}}>
    <FlexboxGrid justify="center">
      <FlexboxGrid.Item colspan={24}>  

  
                 <h5 className='sub-header'  style={{fontSize: (isBigScreen ? '32px' :( isDesktopOrLaptop ? '28px':'20px') )}}>2021 yılında öğrencilerimize toplam 11.751.120,00 TL nakdi burs sağlanmıştır. Burs dağılımlarına ait detaylı bilgilere faaliyet raporu üzerinden ulaşabilirsiniz.
</h5>

             

         </FlexboxGrid.Item>
    
    </FlexboxGrid>
        

                        <h1 style={{color:'rgba(6, 57, 128, 1)'}}> 
                          <CountUp start={0}
                     end={21546} duration={1.75}
                    separator="."/>
                         &nbsp;TL
                         </h1> 
    </div>
                                

    </Col>
    </Row>
    </Grid>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <div>
                     
                       
                          </div>
                       

            </div>
      </div>

 
    );
  }
  
  export default Burslar;
  