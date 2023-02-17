
import akademikImg from '../images/akademikPersonel.png'
import lisansÜstüImg from '../images/lisansÜstüImg.png'
import lisansImg from '../images/lisansImg.png'
import önLisansImg from '../images/önLisansImg.png'
import { Container, Header, Content } from 'rsuite';
import { Grid, Row, Col } from 'rsuite';
import Fade from 'react-reveal/Fade';





const Card = props => (
    <>
        <div className='card-design' style={{backgroundImage:`url(${props.image})`}}>       
            <h1>{props.number}</h1>
            <h4>{props.title}</h4>
        </div>

    </>
  );
  
function SayılarlaKou(){
  

    return (
     <div style={{padding:"75px 0"}}>
             
    <div className="show-container">
<Container>
<Header>                
 <h1 className="header">SAYILARLA KOU</h1>
 <hr className="divider"/>


</Header>
<Content>
<Grid fluid>

<Row className="show-grid">

<Col  xs={24}  sm={24} md={12} lg={6}>  
<Fade bottom >
    <div style={{display:"flex",width:"100%",justifyContent:"center",alignItems:"center"}}>
<Card title={"Önlisans Öğrenci Sayısı"} number={"18.755"} image={önLisansImg}/>

    </div>
</Fade>
</Col>
<Col xs={24}  sm={24} md={12} lg={6}>
 <Fade top>
 <div style={{display:"flex",width:"100%",justifyContent:"center",alignItems:"center"}}>

 <Card title={"Lisans Öğrenci Sayısı"} number={"15.209"} image={lisansImg}/>
 </div>

 </Fade>

</Col>
<Col xs={24}  sm={24} md={12} lg={6}>
 <Fade bottom>
 <div style={{display:"flex",width:"100%",justifyContent:"center",alignItems:"center"}}>

 <Card title={"Lisansüstü Öğrenci Sayısı"} number={"8362"} image={lisansÜstüImg}/>
 </div>

 </Fade>

</Col>                       
<Col xs={24}  sm={24} md={12} lg={6}>
 <Fade top>
 <div style={{display:"flex",width:"100%",justifyContent:"center",alignItems:"center"}}>

 <Card title={"Akademik Personel Sayısı"} number={"5021"} image={akademikImg}/>
 </div>

 </Fade>

</Col>                   
</Row>
</Grid>
</Content>
</Container>

</div>
   
         </div>
    );
}

export default SayılarlaKou;
