import React from 'react'

function Register() {
    async function handleSubmit(e){
        e.preventDefault();
        const password = e.target.password.value;
        const company = e.target.company.value;
        const phone = e.target.phone.value;
        const url1 = e.target.url1.value;
        const url2 = e.target.url2.value;
        try {
            const response = await fetch('https://sparqcode.000webhostapp.com/api/register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',          
              },
              body: `company=${company}&phone=${phone}&password=${password}&url1=${url1}&url2=${url2}`,
            });
      
            if (response.ok) {
              console.log('Registration successful');
              window.location.href = '/login';
      
      
      
              // Add any additional logic for successful registration
      
            } else {
              console.error('Registration failed');
              // Add any error handling logic
            }
          } catch (error) {
            console.error('Error submitting form:', error);
            // Add any error handling logic
          }

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' name='company' placeholder='company name'/>
        <input type='file' name='companyLogo' placeholder='company logo'/>
        <input type='tel' name='phone' placeholder='ph no'/>
        <input type='password' name='password' placeholder='password'/>
        <input type='url' name='url1' placeholder='social link'/>
        <input type='url' name='url2' placeholder='social link'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Register
