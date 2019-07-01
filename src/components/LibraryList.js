
import React, {Component} from 'react';
import ListItem  from './ListItem';
import {CardSection} from './common';

// connect - feature of react-redux library.
// connect - Tool used to connect the component to Redux store.
import {connect} from 'react-redux';

// * as - (export everything) - export everything from  actions file assing to actions variable.
import * as actions from '../actions';


 import {
     View,
     TouchableWithoutFeedback,
     Text,
     FlatList
} from 'react-native';

class LibraryList extends  Component {

  keyExtractor = (item, index) => item.title;


   renderDescription (item) {

    console.log("library  item id  ===",this.props.libraries.id);
    console.log("library  selected id  ===",this.props.selectLibraryId);

    if(this.props.id === this.props.selectLibraryId) {
      return(
        <Text> Kumar</Text>
      );
    }
   }

    // Helper method for renderItem Flat list
    renderItem ({item}) {

      const {textStyle,viewStyle} = listStyles;

      const {id, title} = item;
      
      return  (
        <TouchableWithoutFeedback onPress = {() =>this.props.selectLibrary(id)}>
          <View>
           <CardSection>
             <Text> {title}</Text>
            </CardSection>
            {this.renderDescription()}
          </View>
          </TouchableWithoutFeedback>

      );

    }

    render () {
        // Props object should have libraries property with values of state libraries
        console.log("LibraryList props ===",this.props.libraries);
        //library.id unique id for json response
        return (
              <FlatList
              data = {this.props.libraries}
              renderItem = {this.renderItem.bind(this)}
              keyExtractor = {this.keyExtractor}
              />
            );
    }

}

//Styles 

const listStyles = {

    textStyle: {

    },
    viewStyle : {

    }
}

// Global State object map it to the Props and retuns to the Component.
const mapStateToProps = state => {
    console.log ("state ===",state);
    return {libraries : state.libraries, selectLibraryId : state.selectLibraryId};   // This object shows LibraryList Component Props.


};

// connect is the function - called return the another function called LibraryList.
// mapStateToProps and  actions params passed
export default connect(mapStateToProps, actions)(LibraryList);

