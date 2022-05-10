import React from 'react';
import RenderHtml, {
  HTMLElementModel,
  HTMLContentModel,
} from 'react-native-render-html';
import {
  Alert,
  View,
  useWindowDimensions,
  TouchableNativeFeedback,
  Linking,
} from 'react-native';
import { SJText,CardNum } from '../../../atoms';
import {useNavigation} from '@react-navigation/core';
// import { useSnapshot } from 'valtio';
// import globalStore from '../../../../../app/globalStore';
import stringHash from 'string-hash';
import { LearningCardHTMLDataT } from '../../../../interfaces/Deck';
import styles from './CardHTMLStyles';

const CardHTML = ({
  card,
  index,
}: {
  card: LearningCardHTMLDataT;
  index: number;
}) => {
  const navigation = useNavigation<any>();
  const {width} = useWindowDimensions();

  // const { localSettings } = useSnapshot(globalStore);

  const customHTMLElementModels = {
    sjlink: HTMLElementModel.fromCustomModel({
      tagName: 'sjlink',
      contentModel: HTMLContentModel.block,
    }),
  };

  const customNodeRenderer = {
    sjlink: ({TDefaultRenderer, ...props}: any) => {
      const contentId = props?.tnode?.attributes?.contentid;
      const label = props?.tnode?.attributes?.label;

      return (
        <TouchableNativeFeedback
          onPress={() => {
            navigation.push('Content', {contentId: contentId});
          }}>
          <SJText style={{color: 'red', fontWeight: 'bold'}}>{label}</SJText>
        </TouchableNativeFeedback>
      );
    },
  };

  const renderersProps = {
    a: {
      onPress(event: any, url: any, htmlAttribs: any, target: any) {
        const linkId = stringHash(url);

        // if(!globalStore.activeLearner?.learnerReport?.linkReports || !globalStore.activeLearner?.learnerReport?.linkReports[linkId]) {
        //     globalStore.activeLearner.registerLinkReport(linkId);
        //     if(globalStore.activeApp?.appId == "GEOX"){
        //         globalStore.activeLearner.addPoints(1);
        //         notifyPointWithPopup({ score : {
        //             "global" :1,
        //             "weekly" :1,
        //             "monthly" :1
        //         }})
        //     }

        // }

        // Implementare aggiunta del punto al click

        try {
          Linking.openURL(url);
        } catch (error: any) {
          Alert.alert(error?.message);
        }
      },
    },
  };

  let localSettings = {
    cardTextZoom: 1,
  };
  return (
    <View style={styles.card}>
      <View>
        <View>
          <RenderHtml
            tagsStyles={{
              p: {
                fontSize: 16 * (localSettings.cardTextZoom || 1),
                fontFamily: 'DMSans-Regular',
                marginTop: 16,
              },
              strong: {
                fontSize: 16 * (localSettings.cardTextZoom || 1),
                fontWeight: 'bold',
                fontFamily: 'DMSans-Bold',
              },
              ul: {
                marginTop: 16,
              },
              li: {
                fontSize: 16 * (localSettings.cardTextZoom || 1),
              },
              a: {
                color: 'blue',
                fontFamily: 'DMSans-Regular',
                textDecorationLine: 'underline',
              },
            }}
            contentWidth={width}
            source={{html: card.html as string}}
            renderers={customNodeRenderer}
            renderersProps={renderersProps}
            customHTMLElementModels={customHTMLElementModels}
          />
        </View>
      </View>
    </View>
  );
};

export default CardHTML;
