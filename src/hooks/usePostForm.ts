import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

import { defaultPostValues } from '@/utils/defaultPostFormValues';
import postFormValidationSchema from '@/utils/postFormValidations';
import { addPost, updatePost } from '@/services/postsApi';

const usePostForm = (initialValues = defaultPostValues, refetchPost = null) => {
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    setFormValues(initialValues);
  }, [initialValues])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    
    if (formErrors[name]) {
      setFormErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const handlePostTypeChange = (selectedType) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      type: selectedType,
      imageUrl: selectedType === 'Image' ? prevValues.imageUrl : '',
      videoUrl: selectedType === 'Video' ? prevValues.videoUrl : '',
    }));
  };

  const handleSubmit = async (event, isEditMode = false) => {
    event.preventDefault();

    try {
      await postFormValidationSchema.validate(formValues, { abortEarly: false });
      setFormErrors({});

      const result = isEditMode
        ? await updatePost(formValues)
        : await addPost(formValues);
      
      if (!isEditMode) {
        router.push(`/posts/${result.id}`);
      } else {
        refetchPost(result.id);
      }

      return true;
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const formattedErrors = {};
        error.inner.forEach((err) => {
          if (err.path) formattedErrors[err.path] = err.message;
        });
        setFormErrors(formattedErrors);
      } else {
        throw error;
      }
    }
  };

  return {
    formValues,
    formErrors,
    handleChange,
    handlePostTypeChange,
    handleSubmit
  };
};

export default usePostForm;
