import React from 'react';
import { 
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

import { DeckSwiper } from 'native-base';

export default class RecommendScreen extends React.Component {
    
    renderItem = ({ item }) => {
        const { navigation, data } = this.props;
        return(
            <View style={styles.itemContainer}>
                <View style={styles.infoContainer}>
                    <Text style={styles.artistText}/* TODO */>Artist Name</Text>
                    <Text style={styles.titleText}/* TODO */>Release Name</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/images/vinyl.jpg')} style={styles.image}/* TODO *//>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                        /* TODO: Navigate to the Details route with params */
                        navigation.navigate('Details', {/* props go here */});
                        }}
                    >
                        <Text style={styles.buttonText}>See Details</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                        /* TODO: Add to Cart */
                        }}
                    >
                        <Text style={styles.buttonText}>+ Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    
    render() {
        return(
            <View style={styles.container}>
                <DeckSwiper
                    dataSource= {[  /* TODO: get recommended */
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                    ]}                   
                    renderItem={this.renderItem}
                >   
                </DeckSwiper>
            </View>
        );
    }
}

RecommendScreen.navigationOptions = {
    title: 'Recommended',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5EEED',
        paddingTop: 55,
        paddingHorizontal: 10,
    },
    itemContainer: {
        flex: 1,
        backgroundColor: '#ACB3B2',
    },
    infoContainer: {
        paddingVertical: 10,
        paddingLeft: 15,
        borderLeftWidth: .5,
        borderTopWidth: .5,
        borderRightWidth: .5,
        borderColor: '#727776',
        height: 70,
    },
    artistText: {
        fontSize: 20,
    },
    titleText: {
        fontSize: 25,
    },
    imageContainer: {
        alignItems: 'center',
    },
    image: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
        height: 300,
    },
    buttonContainer: {
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: .5,
        borderBottomWidth: .5,
        borderRightWidth: .5,
        borderColor: '#727776',
        height: 70,
    },
    button: {
        borderWidth: 1,
        borderColor: '#800909',
        backgroundColor: '#DF3561',
        margin: 15,
        width: 130,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        paddingTop: 2,
      },
      buttonText: {
        flex: 1,
        fontSize: 15,
      },
})