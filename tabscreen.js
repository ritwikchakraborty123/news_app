import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
export default class ListThumbnailExample extends Component {

  render() {
      // const num=8;
    return (

      <Container>
        <Header />
        <Content>
          <List>
 
            <ListItem thumbnail>
              <Body>
                <Text style={{fontSize:30}}>Afghan officials say 34 killed in separate suicide bombings</Text>
                <Text style={{color:'green'}}>At least 34 people were killed on Sunday in two separate suicide bombings in Afghanistan that targeted a military base and a provincial chief, officials said.

There were no immediate claims of responsibility for the attacks, which took place as Afghan government representatives and the Taliban hold face-to-face talks in Qatar for the first time to end the country’s decades-long war.</Text>
              </Body>
              <Right>
                <Button transparent>
                </Button>
              </Right>
            </ListItem>
 
             <ListItem thumbnail>
              <Body>
                <Text style={{fontSize:30}}>North India likely to have harsher winter: IMD</Text>
                <Text style={{color:'green'}}>North India is likely to expect a harsher winter and can see a rise in the frequency of cold waves this season, India Meteorological Department (IMD) Director General Mrutunjay Mohapatra said on Sunday. The IMD, in its winter forecast for December to February, said below normal minimum temperatures are likely over north and central India.</Text>
              </Body>
              <Right>
                <Button transparent>
                </Button>
              </Right>
            </ListItem>

                        <ListItem thumbnail>
              <Body>
                <Text style={{fontSize:30}}>KITE CEO appointed NCERT advisory board member</Text>
                <Text style={{color:'green'}}>K Anwar Sadat, Chief Executive Officer of Kerala Infrastructure and Technology for Education (KITE), the state's nodal agency for Information and
communication technology in state's schools, has been appointed member of the NCERT Advisory Board.</Text>
              </Body>
              <Right>
                <Button transparent>
                </Button>
              </Right>
            </ListItem>


                        <ListItem thumbnail>
              <Body>
                <Text style={{fontSize:30}}>BJD expels Gopalpur MLA Pradeep Panigrahi from party's primary membership</Text>
                <Text style={{color:'green'}}>Biju Janata Dal (BJD) expelled Gopalpur MLA Pradeep Panigrahi from the primary membership of the party for his 'anti-people activities'.</Text>
              </Body>
              <Right>
                <Button transparent>
                </Button>
              </Right>
            </ListItem>


                        <ListItem thumbnail>
              <Body>
                <Text style={{fontSize:30}}>Hyderabad has the potential to become an IT hub: Amit Shah</Text>
                <Text style={{color:'green'}}>Hyderabad has the potential to become an IT hub. Infrastructure development has to be done by the municipal corporation even though funds are given by State & Centre. The current corporation under TRS and Congress is the biggest impediment to this,- Union Home Minister Amit Shah said</Text>
              </Body>
              <Right>
                <Button transparent>
                </Button>
              </Right>
            </ListItem>
 
          </List>
        </Content>
      </Container>
    );
  }
}