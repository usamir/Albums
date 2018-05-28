import React from 'react'
import { Text } from 'react-native'
import Card from './Card';
import CardItem from './CardItem';

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardItem>
                <Text>{props.album.title}</Text>
            </CardItem>
        </Card>
    );
};

export default AlbumDetail;