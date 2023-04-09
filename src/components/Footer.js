import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Footer() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="bg-[#161D2F] py-12 lg:px-32 px-5 grid grid-cols-1 lg:grid-cols-7 justify-center text-white">
      <div className="lg:col-span-7 flex flex-col justify-start">
        <a
          className="mb-4 text-center lg:text-left font-light text-lg grid grid-cols-6 gap-4"
          href="https://goo.gl/maps/X8zBGSGL7SfcvADQA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="col-span-2 lg:col-span-3">
            <span className="float-left">Good News Ministries</span>
          </div>
          <div className="col-span-4 lg:col-span-3">
            <span className="float-right">Copyright @ Good News Ministries 2022</span>
          </div>
          <div className="col-span-6 lg:col-span-1">
            <span className="float-right">GIMPA Greenhill, West Legon</span>
          </div>
        </a>
      </div>
    </div>
  )
}

