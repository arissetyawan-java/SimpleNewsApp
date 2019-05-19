import React from 'react';
import { 
    Image, 
    Text, 
    View 
} from 'react-native';

export default NewsItem = (props) => (
    <View style={{flex: 1}}>
        <Image source={{uri: props.image}} style={{flex: 1, height: 120}} />
        <Text style={{padding: 8, fontSize: 12}}>{props.title} - {props.author}</Text>
    </View>
);