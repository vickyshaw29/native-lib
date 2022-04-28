    // import {useSnapshot} from 'valtio';
    
    // const {activeApp} = useSnapshot('');
    import useTheme from "../../../../hooks/theme/useTheme";

    const theme =useTheme();
    
	export const primaryColor = theme?.palette?.primary || '#0000f4';
	export const secondaryColor = theme?.palette?.secondary || '#00f400';
	export const textGray =theme?.palette?.textGray || '#999999';
	export const textLight = theme?.palette?.textLight || '#ffffff';
	export const regularTextFontFamily = theme?.typography?.fontFamily?.regular || 'Helvetica';
	export const boldTextFontFamily = theme?.typography?.fontFamily?.bold || 'Helvetica';
