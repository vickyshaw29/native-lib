import RenderHtml, {
  RenderersProps,
  CustomMixedRenderer,
} from 'react-native-render-html';
import React from 'react';
import {useWindowDimensions} from 'react-native';
// import { notifyPointWithPopup } from '../../../screens/Root/Notifications/NotificationLayer';
// import { addPoints, registerLinkReport } from '../../../../app/entities/activeLearner/actions';
import {ComponentHTMLDataT} from '../../../interfaces/QuizInterface';
import {useCustomBehaviours} from '../../../hooks/quizHook/useCustomBehaviours';
import {useCustomTags} from '../../../hooks/quizHook/useCustomTags';
import styles from './RenderHtmlStyles';

export default ({
  componentData,
  customNodeRenderer,
  customHTMLElementModels,
}: {
  componentData?: ComponentHTMLDataT;
  customNodeRenderer?: CustomMixedRenderer;
  customHTMLElementModels?: Partial<RenderersProps>;
}) => {
  const {width} = useWindowDimensions();

  const source = componentData?.source;

  const {_customNodeRenderer, _customHTMLElementModels} = useCustomTags(
    customHTMLElementModels,
    customNodeRenderer,
  );
  const {_renderersProps} = useCustomBehaviours();

  if (!source) {
    return null;
  }

  return (
    <RenderHtml
      contentWidth={width}
      customHTMLElementModels={_customHTMLElementModels as any}
      renderers={_customNodeRenderer as any}
      tagsStyles={{
        p: styles.p,
        strong: styles.strong,
        ul: styles.ul,
        li: styles.li,
        a: styles.a,
      }}
      source={{html: source}}
      renderersProps={_renderersProps}
    />
  );
};
