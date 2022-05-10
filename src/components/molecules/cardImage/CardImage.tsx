import React from 'react';
import Image from 'react-native-scalable-image';
import RenderHtml from 'react-native-render-html';
import { Alert, StyleSheet, View, useWindowDimensions, Linking } from 'react-native';
import { FirebaseStorageImage } from '../../atoms';
import { useSnapshot } from 'valtio';
// import globalStore from '../../../../../app/globalStore';
// import { notifyPointWithPopup } from '../../../Root/Notifications/NotificationLayer';
import { notifyPointWithPopup } from '../../../common/mock';
import stringHash from "string-hash"
import { LearningCardHTMLImageDataT } from '../../../interfaces/Deck';
import styles from './CardImageStyles'


const CardImage = ({card, index} : { card:LearningCardHTMLImageDataT, index: number}) => {

	const { width } = useWindowDimensions();
	// const { localSettings } = useSnapshot(globalStore);
    //just managing since dont have the data (globalStore)
    let globalStore={
        activeLearner:{
            learnerReport:{
                linkReports:true
            },
            registerLinkReport:()=>{},
            addPoints:()=>{}
        },
        activeApp:{
            appId:'GEOX'
        },

    }
    let localSettings={
        cardTextZoom:1
    }

    //
	const renderersProps = {
        a: {
          onPress(event:any, url:any, htmlAttribs:any, target:any) {

            const linkId = stringHash(url);

            if(!globalStore.activeLearner?.learnerReport?.linkReports) {
                globalStore.activeLearner.registerLinkReport();
                if(globalStore.activeApp?.appId == "GEOX"){
                    globalStore.activeLearner.addPoints();
                    notifyPointWithPopup()
                }
                
            }
    
            try {
                Linking.openURL(url);
            } catch (error:any) {
                Alert.alert(error.message)
            }
            // Do stuff
          }
        }
      }
	

	return (
		<View style={styles.card}>

			<View style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
				<FirebaseStorageImage path={card.media} resizeMode="contain" height={300} width={width - 64} />
			</View>

			<RenderHtml
				tagsStyles={{
					p: {
						fontSize: 16 * (localSettings.cardTextZoom || 1),
						fontFamily: 'DMSans-Regular',
						marginTop: 16
					},
					strong: {
						fontSize: 16* (localSettings.cardTextZoom || 1),
						fontWeight: 'bold',
						fontFamily: 'DMSans-Bold',
					},
					ul: {
						marginTop: 16,
					},
					li: {
						fontSize: 16* (localSettings.cardTextZoom || 1),
					},
					a: {
						color: 'blue',
						textDecorationLine: 'underline',
					},
				}}
				contentWidth={width}
				source={{ html: card.html }}
				renderers={customNodeRenderer}
				renderersProps={renderersProps}
			/>

		</View>
	);
};

const customNodeRenderer = {
	img: ({ TDefaultRenderer, ...props }:any) => {
		const { width } = useWindowDimensions();

		return (
			<>
				<Image
					width={width - 44}
					resizeMode="cover"
					source={{ uri: '' }}
					style={{
						marginBottom: 8,
						position: 'absolute',
						top: -16,
						left: -17,
						borderTopLeftRadius: 8,
						borderTopRightRadius: 8,
					}}
				/>
				<View style={{ height: 200 }} />
			</>
		);
	},
};

export default CardImage