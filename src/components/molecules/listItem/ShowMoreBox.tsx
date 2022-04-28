import React ,{useState} from 'react';
import {View,useWindowDimensions,TextStyle} from 'react-native';
import Collapsible from 'react-native-collapsible';
import HTML from 'react-native-render-html';
import useTheme from '../../../hooks/theme/useTheme';
import styles from './listStyles'


type ShowMoreBoxProps = {
	collapsed: boolean;
	showMore?: string;
  style?:TextStyle
};

const ShowMoreBox = ({collapsed, showMore,style}: ShowMoreBoxProps)  => {
    const {width} = useWindowDimensions()

	if(!showMore){
		return null
	}

  return (
    <Collapsible collapsed={collapsed} >
      <View
        style={
          [styles.container,style]
        }
        >
        <HTML
          contentWidth={width}
          tagsStyles={{
            '*': {color: 'white'},
            p: {
              fontSize: 14,
              fontFamily: 'DMSans-Regular',
              marginTop: 16,
            },
            h1: {
              fontFamily: 'DMSans-Bold',
            },
            strong: {
              fontSize: 14,
              fontWeight: 'bold',
              fontFamily: 'DMSans-Bold',
            },
            ul: {
              marginTop: 16,
            },
            li: {
              fontSize: 14,
            },
            a: {
              fontFamily: 'DMSans-Regular',
              textDecorationLine: 'underline',
            },
          }}
          source={{html: showMore}}
        />
      </View>
    </Collapsible>
  );
};

export default ShowMoreBox;
