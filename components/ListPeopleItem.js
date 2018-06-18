import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    ActivityIndicator,
    TouchableOpacity,
    ImageBackground,
    Dimensions
} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';
import { AppSizes, AppStyles, AppColors } from '../theme/';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Row extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <ImageBackground
                key={this.props.id}
                source={require('../images/star-wars-wallpaper-art-fan-fun-images.jpg')}
                style={{
                    width: AppSizes.width - 10
                    , height: 180, marginTop: 20
                }}>
                <TouchableOpacity
                    style={styles.touchable}
                    onPress={() => this.props.navigation.navigate('DetailsView',
                        {
                            name: this.props.name,
                            height: this.props.height,
                            dataUrl: this.props.url,
                            mass: this.props.mass,
                            birth_year: this.props.birth_year,
                            eye_color: this.props.eye_color,
                            skin_color: this.props.skin_color,
                            hair_color: this.props.hair_color
                        })} style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={styles.text}> {this.props.name} </Text>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    detalii: {
        color: '#00BFFF',
        fontSize: 12,
    },
    touchable: {
        padding: 10,
        marginTop: 3,
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 32,

    }
});