import  { RenderersProps } from 'react-native-render-html';
import stringHash from "string-hash"
import { registerLinkReport,notifyPointWithPopup } from '../../common/mock';
import {Linking} from 'react-native'

export const useCustomBehaviours = ()=>{
    let globalStore={
        activeLearner:{
            learnerReport:{
                linkReports:true
            }
        },
        activeApp:{
            appId:'GEOX'
        }
    }
    const _renderersProps: Partial<RenderersProps> = {
        a: {
            onPress: (_event, url, _htmlAttribs, _target) => {

                const linkHash = stringHash(url);

                if (!globalStore.activeLearner?.learnerReport?.linkReports ) {

                    registerLinkReport(linkHash, "ND");

                    if (globalStore.activeApp?.appId == "GEOX") {
                        
                        // notifyPointWithPopup({
                        //     score: {
                        //         "global": 1,
                        //         "weekly": 1,
                        //         "monthly": 1
                        //     }
                        // })

                        // addPoints({
                        //     "global": 1,
                        //     "weekly": 1,
                        //     "monthly": 1
                        // });
                        notifyPointWithPopup()
                    }

                }

                try {
                    Linking.openURL(url);
                } catch (error) {
                    console.error(error)
                }
                // Do stuff
            }
        }
    }

    return {_renderersProps}
}
