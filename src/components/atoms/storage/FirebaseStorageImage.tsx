import React, { useMemo } from 'react';
import Image from 'react-native-scalable-image';

/**
 * String.prototype.replaceAll() polyfill
 * https://gomakethings.com/how-to-replace-a-section-of-a-string-with-another-one-with-vanilla-js/
 * @author Chris Ferdinandi
 * @license MIT
 */
if (!String.prototype.replaceAll) {
	String.prototype.replaceAll = function ({str, newStr}:any) {

		// If a regex pattern
		if (Object.prototype.toString.call(str).toLowerCase() === '[object regexp]') {
			return this.replace(str, newStr);
		}

		// If a string
		return this.replace(new RegExp(str, 'g'), newStr);

	};
}
// path:string;
const FirebaseStorageImage: React.FC<{
	path: string;
	[key: string]: any;
}> = ({ path, ...props }) => {

	const elaboratedPath = useMemo(()=>{
		if(!path.includes("https")){
			return 'https://firebasestorage.googleapis.com/v0/b/dj---ambiente-di-sviluppo.appspot.com/o/' + path?.replaceAll('/', '%2F') + '?alt=media';
		}else{
			return path
		}
	}, [path])

	return (
		<Image
			source={{
				uri:elaboratedPath
			}}
			{...props}
			{...(props?.style?.width && { width: props.style.width })}
			{...(props?.style?.height && { height: props.style.height })}
		/>
	);
};

export default FirebaseStorageImage;
