import React from 'react';
import {View, Text} from 'react-native';
import {Header, Left, Body, Right, Button, Icon} from 'native-base';
import navigations from '_navigations';

const HeaderMain = ({openDrawer}) => (
  <View style={{zIndex: 30}}>
    <Header style={{backgroundColor: 'white'}}>
      <Left style={{flex: 1}}>
        <Button
          onPress={() => {
            openDrawer();
          }}
          transparent>
          <Icon style={{color: 'orange'}} type="Entypo" name={'menu'} />
        </Button>
      </Left>
      <Body style={{alignItems: 'center', flex: 1}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'orange',
          }}>
          Conveyor
        </Text>
      </Body>
      <Right style={{flex: 1}}>
        <Button onPress={() => {}} transparent>
          <Icon
            style={{color: 'orange'}}
            type="MaterialIcons"
            name="notifications-active"
          />
        </Button>
      </Right>
    </Header>
  </View>
);

export default HeaderMain;
