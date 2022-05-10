// Importo React
import React, {useRef} from 'react';
import {View, Text} from 'react-native';
import {
  LearningCardHTMLDataT,
  LearningCardVideoDataT,
} from '../../../../interfaces/Deck';
import ebi from '../../../../common/eb';
import {FirebaseStorageVideo} from '../../../atoms';

const ViewVideo = ({
  card,
  index,
}: {
  card: LearningCardVideoDataT;
  index: number;
}) => {
  const video: any = React.useRef(null);

  React.useEffect(() => {
    const handl = ({previousIndex, snappedIndex}: any) => {
      if (index === snappedIndex) {
      } else {
        if (previousIndex === index) {
          try {
            video.current.pauseAsync();
          } catch (error) {}
        }
      }
    };

    ebi.on('SNAPTOCARD_EVENT_I', handl);

    return () => {
      ebi.detach('SNAPTOCARD_EVENT_I', handl);
    };
  });

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
        maxHeight: '90%',
      }}>
      <FirebaseStorageVideo
        style={{
          flex: 1,
        }}
        onVideoRef={(ref: any) => {
          video.current = ref.current;
        }}
        path={card.media}
        resizeMode="contain"
        useNativeControls={/* node.controls */ true}
      />
    </View>
  );
};

export default ViewVideo;
