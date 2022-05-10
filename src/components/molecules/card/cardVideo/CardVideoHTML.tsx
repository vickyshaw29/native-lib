// Importo React
import React, { useRef } from 'react';
import { View, Text, useWindowDimensions, Linking ,TouchableNativeFeedback} from 'react-native';
import ebi from '../../../../common/eb';
import RenderHtml, { HTMLElementModel, HTMLContentModel } from 'react-native-render-html';
import { FirebaseStorageVideo } from '../../../atoms';
import stringHash from "string-hash"
import { notifyPointWithPopup } from '../../../../common/mock';
import { globalStore } from '../../../../common/mock';
import { useNavigation } from '@react-navigation/core';
import { SJText } from '../../../atoms';

const renderersProps = {
	a: {
	  onPress(event:any, url:any, htmlAttribs:any, target:any) {

		const linkId = stringHash(url);
			//globalStore.activeLearner?.learnerReport?.linkReports[linkId] commenting out
		if(!globalStore.activeLearner?.learnerReport?.linkReports ) {
			globalStore.activeLearner.registerLinkReport();
			if(globalStore.activeApp?.appId == "GEOX"){
				globalStore.activeLearner.addPoints();
				notifyPointWithPopup()
			}
			
		}

		try {
			Linking.openURL(url);
		} catch (error) {
			alert(error.message)
		}
		// Do stuff
	  }
	}
  }

const ViewVideoHTML = ({ card, index }:any) => {
	const video:any = React.useRef(null);
	const { width } = useWindowDimensions();
	const navigation = useNavigation<any>();

	


	const customHTMLElementModels = {
		'sjlink': HTMLElementModel.fromCustomModel({
			tagName: 'sjlink',
			contentModel: HTMLContentModel.block
		})
	};

	const customNodeRenderer = {
		sjlink: ({ TDefaultRenderer, ...props }:any) => {


			const contentId = props?.tnode?.attributes?.contentid;
			const label = props?.tnode?.attributes?.label;

			return (
				<TouchableNativeFeedback
					onPress={() => {
						navigation.push("Content", { contentId: contentId });

					}}
				>
					<SJText style={{ color: 'red', fontWeight: 'bold' }}>{label}</SJText>
				</TouchableNativeFeedback>
			);
		},
	};

	React.useEffect(() => {

		const handl = ({ previousIndex, snappedIndex }:any) => {
			if (index === snappedIndex) {

			} else {
				if (previousIndex === index) {

					try {
						video.current.pauseAsync()
						
					} catch (error) { }
				}
			}
		}

		ebi.on("SNAPTOCARD_EVENT_I", handl);

		return () => {
			ebi.detach("SNAPTOCARD_EVENT_I", handl);
		}
	})

	return (
		<View
			style={{
				margin: 16,
				backgroundColor: '#000000',
				flexDirection: 'column',
				justifyContent: 'center',
				borderRadius: 8,
				overflow: 'hidden',
				minHeight: 450,
				flex: 1,
				maxHeight: '90%'
			}}>
			<FirebaseStorageVideo style={{
				flex: 1,
			}} onVideoRef={(ref:any) => { video.current = ref.current; }} path={card.media} resizeMode="contain" useNativeControls={/* node.controls */ true} />

			<View style={{
				backgroundColor: "#ffffff",
				padding: 16
			}}>

				<RenderHtml
					tagsStyles={{
						p: {
							fontSize: 16,
							fontFamily: 'DMSans-Regular',
							marginTop: 16
						},
						strong: {
							fontSize: 16,
							fontWeight: 'bold',
							fontFamily: 'DMSans-Bold',
						},
						ul: {
							marginTop: 16,
						},
						li: {
							fontSize: 16,
						},
						a: {
							color: 'blue',
							fontFamily: 'DMSans-Regular',
							textDecorationLine: 'underline',
						},
					}}
					contentWidth={width}
					source={{ html: card.html }}
					renderers={customNodeRenderer}
					customHTMLElementModels={customHTMLElementModels}
					renderersProps={renderersProps}
				/>

			</View>

		</View>
	);
};

export default ViewVideoHTML;
function alert(message: any) {
	throw new Error('Function not implemented.');
}

