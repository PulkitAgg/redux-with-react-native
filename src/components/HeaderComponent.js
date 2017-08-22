import React from 'react';
// import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

type PropsType = {
  toggleProfileiState: () => void,
  toggleUiState: () => void
};

export default class HeaderComponent extends React.Component < void,
PropsType,
void > {

     changeProfileState(){
          this.props.toggleProfileiState();
     }
     changeUiState(){
          this.props.toggleUiState();
     }

     render() {
          return (
               <View>
                    <Text>
                    In header component
                    </Text>
                    {(this.props.profileState) ?
                         <Text>Profile State is True</Text> :
                         <Text>Profile State is False</Text>
                    }
                    <Button onPress={() => {this.changeProfileState()}} title="Change Profile State"/>
                    {(this.props.uiState) ?
                         <Text>UI State is True</Text> :
                         <Text>UI State is False</Text>
                    }
                    <Button onPress={() => {this.changeUiState()}} title="Change UI State"/>

               </View>
          );
     }
}
