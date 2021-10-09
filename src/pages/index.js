import React from "react"
import Layout from "../components/layout"
import mainVideo from "../assets/main.mp4"

export default function Home() {
  return (
    <Layout>
      <div>
        <video playsInline autoPlay muted loop>
          <source src={mainVideo} type="video/mp4" />
        </video>
      </div>
    </Layout>
  )
}
