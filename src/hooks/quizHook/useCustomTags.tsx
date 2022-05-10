import { HTMLElementModel, HTMLContentModel, RenderersProps, CustomMixedRenderer } from 'react-native-render-html';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {TouchableHighlight} from 'react-native'
import { SJText } from '../../components/atoms';

export const useCustomTags = (customHTMLElementModels?: Partial<RenderersProps>, customNodeRenderer?:  Partial<CustomMixedRenderer>) => {

    const navigation = useNavigation<StackNavigationProp<any>>();


    const _customHTMLElementModels = {
        'sjlink': HTMLElementModel.fromCustomModel({
            tagName: 'sjlink',
            contentModel: HTMLContentModel.block
        }),
        ...customHTMLElementModels
    };

    const _customNodeRenderer = {
        sjlink: ({ TDefaultRenderer, ...props }: any) => {


            const contentId = props?.tnode?.attributes?.contentid;
            const label = props?.tnode?.attributes?.label;

            return (
                <TouchableHighlight
                    onPress={() => {
                        navigation.push("Content", { contentId: contentId });

                    }}
                >
                    <SJText style={{ color: 'red', fontWeight: 'bold' }}>{label}Ciao</SJText>
                </TouchableHighlight>
            );
        },
        ...customNodeRenderer
    };



    return {
        _customNodeRenderer,
        _customHTMLElementModels
    }
}