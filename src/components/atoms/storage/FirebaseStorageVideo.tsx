import React, {useState, useEffect} from 'react';
import {Video} from 'expo-av';
import { TextStyle } from 'react-native';

//path:string;
type FirebaseStoragVideoType={
	path:string,
	onVideoRef:(video:any)=>void,
	resizeMode:string,
	style:TextStyle,
	useNativeControls:boolean
}

export default function FirebaseStoragVideo({path,style,onVideoRef}:FirebaseStoragVideoType) {
	const video = React.useRef(null);

	useEffect(() => {
        onVideoRef(video)
	}, [])

	return (
		<Video		
			ref={video} 
			source={{
				uri:
					'https://firebasestorage.googleapis.com/v0/b/dj---ambiente-di-sviluppo.appspot.com/o/' +
					path?.replaceAll('/', '%2F') +
					'?alt=media',
			}}
			style={style}
		/>
	);
}
