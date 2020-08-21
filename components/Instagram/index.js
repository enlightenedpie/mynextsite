import {useEffect} from 'react'
import Head from 'next/head'
import useScript from '../../utils/useScript'

const Instagram = ({className}) => {

  useEffect(() => {
    useScript("https://snapwidget.com/js/snapwidget.js")
    useScript("https://snapwidget.com/js/snapwidget-lightbox.js")
  },[])

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://snapwidget.com/stylesheets/snapwidget-lightbox.css" />
      </Head>
      <iframe src="https://snapwidget.com/embed/864211" className="snapwidget-widget" allowtransparency="true" frameBorder="0" scrolling="no" style={{
            border: "none",
            overflow: "hidden",
            width: "100%"
      }}></iframe>
    </>
  )
}

export default Instagram