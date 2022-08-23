import React from 'react'

const useValidators = () => {
    const [nameError, setNameError] = React.useState(false);
    const [nameValid, setIsNameValid] = React.useState('');
  
    function nameValidation(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      if (event.target.value.length > 300) {
        setNameError(true)
        setIsNameValid('Maximum 300 characters!')
      } else {
        setIsNameValid('')
        setNameError(false)
      }
    }
  
    const [emailError, setEmailError] = React.useState(false);
    const [emailValid, setIsEmailValid] = React.useState('');
  
    function emailValidation(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        if (event.target.value.length > 100) {
          setEmailError(true)
          setIsEmailValid('Maximum 100 characters!')
        } else {
          setIsEmailValid('')
          setEmailError(false)
        }
  
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if (event.target.value.match(validRegex)) {
          setIsEmailValid('')
          setEmailError(false)
        } else {
          setEmailError(true)
          setIsEmailValid('Email is not valid!')
        }
    }
  
    const [capacityError, setCapacityError] = React.useState(false);
    const [capacityValid, setIsCapacityValid] = React.useState('');
  
    function capacityValidation(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      const number = Number(event.target.value)
      if (number < 1) {
          setCapacityError(true)
          setIsCapacityValid('Minimum capacity is 1!')
      } else {
          setIsCapacityValid('')
          setCapacityError(false)
      }
    }

    const [categoryError, setCategoryError] = React.useState(false);

    function categoryValidation(value: number) {
        if (value < 1) {
            setCategoryError(true)
        } else {
            setCategoryError(false)
        }
    }

    const [subtitleError, setSubitleError] = React.useState(false);
    const [subtitleValid, setIsSubitleValid] = React.useState('');

    function subtitleValidation(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        if (event.target.value.length > 200) {
            setSubitleError(true)
            setIsSubitleValid('Maximum 200 characters!')
        } else {
            setIsSubitleValid('')
            setSubitleError(false)
        }
    }

    const [titleError, setTitleError] = React.useState(false);
    const [titleValid, setIsTitleValid] = React.useState('');

    function titleValidation(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        if (event.target.value.length > 100) {
            setTitleError(true)
            setIsTitleValid('Maximum 100 characters!')
        } else {
            setIsTitleValid('')
            setTitleError(false)
        }
    }

    return {
      nameError,
      nameValid,
      nameValidation,
      emailError,
      emailValid,
      emailValidation,
      capacityError,
      capacityValid,
      capacityValidation,
      categoryError,
      categoryValidation,
      subtitleError,
      subtitleValid,
      subtitleValidation,
      titleError,
      titleValid,
      titleValidation
    }
}

export default useValidators