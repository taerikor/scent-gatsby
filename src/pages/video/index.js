import axios from "axios"
import React, { useEffect, useState } from "react"
import Layout from "../../components/layout"

const Video = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const CHANNEL_ID = "UCaFs3WT1wZWpmHtPue2tf0g"
    const API_KEY = process.env.YOUTUBE_API_KEY
    const channels = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=20`
    //데이터를 받아오지 못함
    // axios.get(channels).then(res => console.log(res))
  }, [])

  return (
    <Layout>
      <div></div>
    </Layout>
  )
}

export default Video
