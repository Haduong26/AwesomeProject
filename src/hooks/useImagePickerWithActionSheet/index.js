import ImagePicker from 'react-native-image-crop-picker';

export const useImagePickerWithActionSheet = (
  showActionSheetWithOptions,
  ImagePicker,
  includeBase64 = false,
) => {
  const selectPhoto = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 20,
        height: 20,
        cropping: true,
        mediaType: 'photo',
        includeBase64,
      });
      return image;
    } catch (error) {
      console.log(error);
    }
  };

  const takePhoto = async () => {
    try {
      const image = await ImagePicker.openCamera({
        width: 20,
        height: 20,
        cropping: true,
        includeBase64,
      });
      return image;
    } catch (error) {
      console.log(error);
    }
  };

  const pickImage = getImageCallback => {
    const title = 'Add Photo';
    const options = ['Take a photo', 'Select a photo', 'Cancel'];
    const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      {
        title,
        options,
        cancelButtonIndex,
      },
      async buttonIndex => {
        if (buttonIndex === 0) {
          const image = await takePhoto();
          getImageCallback(image);
        } else if (buttonIndex === 1) {
          const image = await selectPhoto();
          getImageCallback(image);
        }
      },
    );
  };

  return {pickImage};
};
