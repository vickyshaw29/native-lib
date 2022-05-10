import storage from '@react-native-firebase/storage';

class Storage {
	storage: any;
	storageRef: any;

	constructor(fbstorage: any) {
		this.storage = fbstorage();
		this.storageRef = this.storage.ref();
	}

	public async getImageRef(path: string): Promise<string> {
		var starsRef = this.storageRef.child(path);

		// Get the download URL
		return starsRef
			.getDownloadURL()
			.then((url: string) => {
				return url;
			})
			.catch((error: any) => {
				switch (error.code) {
					case 'storage/object-not-found':
						// File doesn't exist
						break;
					case 'storage/unauthorized':
						// User doesn't have permission to access the object
						break;
					case 'storage/canceled':
						// User canceled the upload
						break;
					case 'storage/unknown':
						// Unknown error occurred, inspect the server response
						break;
				}
				return error;
			});
	}
}

export default new Storage(storage);
