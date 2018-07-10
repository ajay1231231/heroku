import React from 'react';
import YouTube from 'react-youtube';
import {CustomInput, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
export default class Tab4 extends React.Component {
   
    render() {
            const opts = {
              height: '390',
              width: '100%',
              playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
              }
            };
        return (
              
              <Form style={{marginTop:10, marginBottom:10, padding:15 }}>
              <Row>
                <Col md="6"> 
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                  </FormGroup>
                </Col>
                <Col md="6"> 
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="exampleSelect">Select</Label>
                    <Input type="select" name="select" id="exampleSelect">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md="12"> 
                  <FormGroup>
                    <Label for="exampleText">Text Area</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                  </FormGroup>
                </Col>
                <Col md="12">
                  <FormGroup>
                    <Label for="exampleFile">File</Label>
                    <Input type="file" name="file" id="exampleFile" />
                    <FormText color="muted">
                      This is some placeholder block-level help text for the above input.
                      It's a bit lighter and easily wraps to a new line.
                    </FormText>
                  </FormGroup>
                </Col>
                <Col md="12"> 
                  <FormGroup tag="fieldset">
                      <legend>Radio Buttons</legend>
                      <FormGroup check>
                        <Label check>
                          <Input type="radio" name="radio1" />{' '}
                          Option one is this and that—be sure to include why it's great
                        </Label>
                      </FormGroup>
                    
                      <FormGroup check>
                        <Label check>
                          <Input type="radio" name="radio1" />{' '}
                          Option two can be something else and selecting it will deselect option one
                        </Label>
                      </FormGroup>
                  </FormGroup>
                </Col>
                <Col md="12"> 
                    <FormGroup>
                      <Label for="exampleCustomFileBrowser">File Browser with Custom Label</Label>
                      <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" label="Yo, pick a file!" />
                    </FormGroup>
                </Col> 
                <Col md="12"> 
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" />{' '}
                      Check me out
                    </Label>
                  </FormGroup>
                </Col>
                </Row>
                <Button>Submit</Button>
                <div >
               <Row>
               <Pagination aria-label="Page navigation example" style={{ padding:15, margin:'10px auto' }} >
               <PaginationItem>
                 <PaginationLink previous href="#" />
               </PaginationItem>
               <PaginationItem>
                 <PaginationLink href="#">
                   1
                 </PaginationLink>
               </PaginationItem>
               <PaginationItem>
                 <PaginationLink href="#">
                   2
                 </PaginationLink>
               </PaginationItem>
               <PaginationItem>
                 <PaginationLink href="#">
                   3
                 </PaginationLink>
               </PaginationItem>
               <PaginationItem>
                 <PaginationLink href="#">
                   4
                 </PaginationLink>
               </PaginationItem>
               <PaginationItem>
                 <PaginationLink href="#">
                   5
                 </PaginationLink>
               </PaginationItem>
               <PaginationItem>
                 <PaginationLink next href="#" />
               </PaginationItem>
             </Pagination>
             </Row>
             <YouTube
                videoId="2g811Eo7K8U"
                opts={opts}
                onReady={this._onReady}
              /> 
             </div>
               </Form>
               
        );
      }
  
}