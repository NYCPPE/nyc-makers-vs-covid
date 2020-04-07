import React, { useEffect } from 'react'
import Router from 'next/router'

export default () => {
  useEffect(() => {
    window.location.href = 'https://bit.ly/SewnMasksNYC'
  })
  return (
    <>
      <div className="py-6 text-3xl text-center">You are being redirected</div>
      <center>
        <p>
          Not working? <a href="https://bit.ly/SewnMasksNYC">Click here</a>
        </p>
      </center>
    </>
  )
}
