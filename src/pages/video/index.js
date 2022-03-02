import axios from "axios"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Layout from "../../components/layout"

const VideosWrapper = styled.div`
  padding: 0 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const VideoWrapper = styled.div`
  padding: 10px 10px;
`

const Video = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const CHANNEL_ID = "UCaFs3WT1wZWpmHtPue2tf0g"
    const API_KEY = process.env.YOUTUBE_API_KEY
    const channels = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=20`
    axios.get(channels).then(res => setVideos(res.data.items))
  }, [])
  const renderVideos = () => {
    //hover
    //loading
    return videos.map(video => {
      return (
        <VideoWrapper key={video.etag}>
          <a
            href={`https://youtu.be/${video.id.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />
          </a>
        </VideoWrapper>
      )
    })
  }
  return (
    <Layout>
      <VideosWrapper>{renderVideos()}</VideosWrapper>
    </Layout>
  )
}

export default Video
