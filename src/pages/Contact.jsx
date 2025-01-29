import React from 'react'

const Contact = () => {
  const handleFormSubmit=(formData)=>{
    const formInputData=Object.fromEntries(formData.entries())
    console.log(formInputData);
    
  }
  return (
    <div className='flex flex-col items-center justify-center m-10'>
      <h2 className='text-center text-3xl mb-10 font-semibold'>Contact Us</h2>
      <form action={handleFormSubmit}  className='flex flex-col gap-5'>
        <input className='border-2 w-90 p-2 rounded-md' type="text" required autoComplete='off' placeholder='Enter Your Name' name='username' />
        <input className='border-2 w-90 p-2 rounded-md' type="email" required autoComplete='off' placeholder='Enter your email' name="email"  />
        <textarea rows="10" className='border-2 w-90 p-2 rounded-md' name="message" placeholder='Enter your message' required></textarea>
        <button className='bg-blue-500 font-semibold rounded-md py-2' type='submit' value="Send">Send</button>
      </form>
    </div>
  )
}

export default Contact
