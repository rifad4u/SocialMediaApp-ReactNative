import React, {Component} from 'react';  
import { View , Text ,StyleSheet } from 'react-native' 


export default  Hoc = (Comp) =>{  
    return class extends Component{
        constructor(props){
            super(props);
        } 

        render(){  
            return (  
                <View style={Styles.CONTAINER}>
                  <Comp 
                    {...this.props}
                  />
                </View>
  
            );  
        }  
    }
}  
const Styles = StyleSheet.create({
    CONTAINER : {
        flex : 1
    }
})   