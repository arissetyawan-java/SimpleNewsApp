import React, {Component} from 'react';
import {
    ScrollView, 
    FlatList, 
    ActivityIndicator
} from 'react-native';
import NewsItem from './NewsItem.js';

export default class NewsPage extends Component {
    constructor() {
        super();
        this.state = { isLoading: true }
    }

    async componentDidMount() {
        try {
            const url = 'https://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=3964c57788ee4edcad4038d6bc318c18';
            const response = await fetch(url);
            const responseJson = await response.json();
            this.setState({
                isLoading: false,
                dataSource: responseJson.articles
            }, function () {
                console.log(responseJson.status);
                console.log(responseJson.totalResults);
            });
        }
        catch (error) {
            console.log(error);
        }
    }

    render() {
        // handle loading
        if(this.state.isLoading) {
            return(
                <ScrollView>
                    <ActivityIndicator />
                </ScrollView>
            )
        }

        return(
            <ScrollView style={{flex: 1, padding: 20}}>
                <FlatList 
                    data={this.state.dataSource}
                    renderItem={({item}) => 
                        <NewsItem
                            title={item.title} 
                            author={item.author} 
                            image={item.urlToImage}/>
                    }
                    keyExtractor={({title}, index) => title}
                />
            </ScrollView>
        );
    }
}