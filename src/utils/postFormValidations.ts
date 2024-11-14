import * as Yup from 'yup';

const postFormValidationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
    body: Yup.string().required('Body is required'),
    type: Yup.string()
      .oneOf(['Text', 'Image', 'Video'], 'Invalid post type')
      .required('Post type is required'),

    imageUrl: Yup.string()
      .test('is-image-url', 'Image URL is required for Image type and must be valid', function (value) {
        const { type } = this.parent;
        if (type === 'Image') {
          return value && /\.(jpg|jpeg|png|gif)$/.test(value);
        }
        return true;
      }),
  
    videoUrl: Yup.string()
      .test('is-video-url', 'Video URL is required for Video type and must be valid', function (value) {
        const { type } = this.parent;
        if (type === 'Video') {
          return value && (/\.(mp4|mov)$/.test(value) || value.includes('youtube.com'));
        }
        return true;
      }),
  });

export default postFormValidationSchema;