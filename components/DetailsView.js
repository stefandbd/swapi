import React from 'react';
import {
    StyleSheet,
    ListView,
    Text,
    TextInput,
    View,
    Button,
    ActivityIndicator,
    Image,
    Slider,
    ScrollView
} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';
import { AppSizes, AppStyles, AppColors } from '../theme/';
import { Divider, PricingCard } from 'react-native-elements';


export default class DetailsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        };
    }

    static navigationOptions = ({ navigation }) => {
        const { state } = navigation;
        return {
            title: `${state.params.name}`,
        };
    };

    render() {
        return (
            <View style={styles.container}>
                <PricingCard
                    color='#4f9deb'
                    title={this.props.navigation.state.params.name}
                    price={this.props.navigation.state.params.birth_year}
                    info={['Height: ' + this.props.navigation.state.params.height + 'cm', 'Mass: ' + this.props.navigation.state.params.mass + 'kg', 'Eye color: ' + this.props.navigation.state.params.eye_color,
                    'Skin color: ' + this.props.navigation.state.params.skin_color, 'Hair color: ' + this.props.navigation.state.params.hair_color]}
                    button={{ title: 'etc ', icon: 'flight-takeoff' }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    leftText: {
        fontSize: 12,
        color: '#54A8C4',
        marginLeft: 5,
        marginRight: 5,
    },
});