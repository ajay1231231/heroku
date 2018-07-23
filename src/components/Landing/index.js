import React from 'react';
import { Parallax } from 'react-parallax';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {CollapsibleComponent, CollapsibleHead, CollapsibleContent} from 'react-collapsible-component';
import Iframe from 'react-iframe';
import BootstrapTable from 'react-bootstrap-table-next';
import Gallery from 'react-grid-gallery';
import { Row, Col, Card, CardImg, CardText, CardBody, CardTitle, Button, Jumbotron, UncontrolledAlert  } from 'reactstrap';
import Tab2 from './tab2.js';
import Tab3 from './tab3.js';
import Tab4 from './tab4.js';
import Tab5 from './tab5.js';
import * as firebase from 'firebase';
import '../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';
import '../../../node_modules/react-tabs/style/react-tabs.css';
import './landing.css';
import './style.css';

const products = [{
  id: 1, name:'Dell', price:'$200'
}, {
  id: 2, name:'HP', price:'$300'
}, {
  id: 3, name:'Acer', price:'$400'
}  
];

const columnsss = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];

const IMAGES = [{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320
},
{
        src: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320
},
{
        src: "https://c2.staticflickr.com/8/7151/6760135001_58b1c5c5f0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/8/7151/6760135001_58b1c5c5f0.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320
},
{
        src: "//c1.staticflickr.com/4/3868/32946491610_d449246009_c.jpg",
        thumbnail: "//c1.staticflickr.com/9/8733/17299533736_d19324b80f_z.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320
},
{
        src: "//c1.staticflickr.com/2/1821/28317665987_ee0fde9795_b.jpg",
        thumbnail: "//c1.staticflickr.com/2/1768/41392175400_4c9f5c5ba5_b.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320
},
{
        src: "//c1.staticflickr.com/2/1830/43192337151_2d43caf4e3_c.jpg",
        thumbnail: "//c1.staticflickr.com/2/1825/43144183572_cbc3ca234f_c.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320
},
{
        src: "//c1.staticflickr.com/2/1823/29315163508_37686a2135_b.jpg",
        thumbnail: "//c1.staticflickr.com/2/1768/43150232892_11b47bf621_c.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320
},
{
        src: "//c1.staticflickr.com/1/840/42471301684_ebdac9df15_b.jpg",
        thumbnail: "//c1.staticflickr.com/1/847/43188972321_9f19b1f7e4_b.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320
}]
const insideStyles = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};
const image2 = "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";

export default class LandingPage extends React.Component{
    
  constructor(){
    super();
    this.state = {
      speed: '',
      about:''
    };
  }
  
  componentDidMount(){
    const rootRef = firebase.database().ref().child('react');
    const speedRef =rootRef.child('speed');
    speedRef.on('value', snap => {
        this.setState({
             speed: snap.val()
        });
    });
    const aboutRef =rootRef.child('about');
    aboutRef.on('value', snap => {
        this.setState({
          about: snap.val()
        });
    });
  }

  render() {
    return (

  <div>
     <Tab3 />
     <Jumbotron style={{marginTop:10 }}>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
	  <Parallax bgImage={image2} strength={-100}>
      <div style={{height: 500}}>
        <div style={insideStyles}>Reverse direction</div>
      </div>
    </Parallax>
    <UncontrolledAlert color="info" style={{marginTop:10, marginBottom:10 }}>
        <h4 className="alert-heading">Well done!</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This example text is going
          to run a bit longer so that you can see how spacing within an alert works with this kind
          of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
        </p>
    </UncontrolledAlert>
    <Row>
       <Col md="12">
         <h1 className="text-center text-primary">OUR GALLERY</h1>
         <Gallery images={IMAGES} style={{marginTop:10, marginBottom:10 }} /> 
      </Col>
     </Row>
     <Row>
        <Col md="6" style={{marginTop:10, marginBottom:10 }}>
        <h3 className="text-left text-success">ABOUT US</h3>
            <Tabs >
              <TabList>
                <Tab>{this.state.speed}</Tab>
                <Tab>{this.state.about}</Tab>
              </TabList>
              <TabPanel>
                    <Row>
                                    <Col md="6">
                                         <img width="100%" src="http://www.srinfosystem.com/wp-content/uploads/2017/12/Business-people.jpeg"  alt="About SR INFOSYSTEM" />
                                    </Col>
                                                            
                                    <Col md="6">
                                            <h6 className="tab-title">About SR INFOSYSTEM</h6>
                                            <p className="text">
                                                 SR Infosystem is a global leader in IT outsourcing, digital and business solution that connects its partners with the clients to perform the zero percent risk in minimum downtown for a meaningful automation of the businesses which has a great impact on the societyâ€™s growth. 
                                            </p>
                                            <Tab2 />
                                    </Col>
                    </Row>
              </TabPanel>
              <TabPanel>
                    <Row>
                                    <Col md="6">
                                         <img width="100%" src="http://www.srinfosystem.com/wp-content/themes/srinfosystem/images/gulshan.jpg"  alt="About SR INFOSYSTEM" />
                                    </Col>
                                                            
                                    <Col md="6">
                                            <p className="text">
                                                 The founder / CEO of SR Infosystem - Mr. Gulshan Verma with an experience of more than 11 years with his team members are successful enough to provide the full cycle service in the IT field of Web development, IOS / Android Development, Web / Mobile App Designing, Responsive Design. 
                                            </p>
                                    </Col>
                    </Row>
              </TabPanel>
            </Tabs>
        </Col>
        <Col md="6" style={{marginTop:10, marginBottom:10 }}>
            <h3 className="text-left text-success">OUR FAQ</h3>
            <CollapsibleComponent>
                          <CollapsibleHead className="additionalClassForHead"> Can I still do the course if I am not flexible?</CollapsibleHead>
                          <CollapsibleContent className="additionalClassForContent" style={{marginTop:10, marginBottom:10 }}>
                              <p>Flexibility is not an issue as we see it. There is a lot of mental work that goes to understand the discipline of yoga. If you are ready to absorb the essentials with an open mind, this course is for you. </p>
                          </CollapsibleContent>
          
                          <CollapsibleHead isExpanded={true}> Is your school yoga alliance certified?</CollapsibleHead>
                          <CollapsibleContent isExpanded={true}>
                              <p>Yes, our school is yoga alliance registered and certified. You may also check our credentials by looking for our school at this web address: www.yogaalliance.org</p>
                          </CollapsibleContent>
          
                          <CollapsibleHead>What language is used in the TTC?</CollapsibleHead>
                          <CollapsibleContent>
                              <p>we teach in English. Spanish could be used for asana classes. </p>
                          </CollapsibleContent>
                </CollapsibleComponent>
            </Col> 
        </Row>     
        <Iframe 
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6567204280896!2d77.38576411495443!3d28.610073391848115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef8db2fb6471%3A0xc049dbf2bdc43411!2sSR+Infosystem+Pvt.+Ltd.!5e0!3m2!1sen!2sin!4v1530277166586"
          width="100%"
          height="450px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
          allowFullScreen
          />
          <BootstrapTable  
            keyField='id' data={ products } 
            columns={ columnsss } 
            striped
            hover
            condensed
          />
          <Row>
            <Col md="3">
              <Card>
                <CardImg top width="100%" src="https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Web Design</CardTitle>
                  <CardText>Our web designers design and attach codes in such a way that could be easily found in a one go on the internet. The visitors can seamlessly experience while browsing the iPhones, laptops & desktops.</CardText>
                  <Button color="primary">Button</Button>
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card>
                <CardImg top width="100%" src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Russell_Falls_2.jpg" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Web Development</CardTitle>
                  <CardText>We ensure to make the best web application by applying a standard cutting edge technology. Writing a complex web application with master command those lines up the interface is our quality.</CardText>
                  <Button color="primary">Button</Button>
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card>
                <CardImg top width="100%" src="https://previews.123rf.com/images/kubtee/kubtee1510/kubtee151000009/47471446-tad-e-too-the-beautiful-forest-waterfall-in-the-southern-of-laos-.jpg" alt="Card image cap" />
                <CardBody>
                  <CardTitle>SEO Services</CardTitle>
                  <CardText>We are the most recommended company at upWork for Drupal Solution, We have a highly skilled team of Drupal expert. We have a highly skilled team of Drupal expert.</CardText>
                  <Button color="primary">Button</Button>
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card>
                <CardImg top width="100%" src="https://i.imgur.com/Dv5Hu.jpg" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Drupal Development</CardTitle>
                  <CardText>We provide pixel perfect HTML and CSS for your any design format, We accept any format and convert them in a responsive html5 prototype with quality standards.</CardText>
                  <Button color="primary">Button</Button>
                </CardBody>
              </Card>
            </Col>
      </Row>
      <Row>
         <Tab4 />
         <Tab5 />
      </Row>  
            
  </div>
      );
    }
  }


