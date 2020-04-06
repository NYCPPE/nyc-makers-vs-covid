import React, { useEffect } from 'react'
import Router from 'next/router'

export default () => {
  useEffect(() => {
    window.location.href =
      'https://docs.google.com/document/d/1ZaKMhbZuQhKtEFLjgZBmOwH9hNSOdEz2jTONqMp7WbM/'
  })
  return (
    <>
      <iframe
        className="w-full h-full"
        src="https://docs.google.com/document/d/1ZaKMhbZuQhKtEFLjgZBmOwH9hNSOdEz2jTONqMp7WbM/edit"
      />
      <div className="py-6 text-3xl text-center">You are being redirected</div>
    </>
  )
}
