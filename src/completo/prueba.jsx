import React from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

 
function PhoneNumber() {

  return (
    <PhoneInput
    variant="outlined"
      placeholder="Enter phone number"
      
      />
     
  )
}

export default PhoneNumber