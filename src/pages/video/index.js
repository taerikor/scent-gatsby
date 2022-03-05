import axios from "axios"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import { Ripple } from "react-awesome-spinners"

const VideosWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-column-gap: 6px;
  grid-row-gap: 6px;
  justify-content: center;
  align-items: center;
  margin: 80px 200px;
`
const VideoWrapper = styled.div`
  padding: 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.4s ease;
  overflow: hidden;
  &:hover {
    transform: scale(1.05);
  }
`

const LoadingWrapper = styled.div`
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Video = () => {
  const [videos, setVideos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const CHANNEL_ID = "UCaFs3WT1wZWpmHtPue2tf0g"
    const API_KEY = process.env.YOUTUBE_API_KEY
    const channels = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=20`
    axios
      .get(channels)
      .then(res => {
        setVideos(res.data.items)
        console.log(res.data.items)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }, [])

  const renderVideos = () => {
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
      {isLoading && (
        <LoadingWrapper>
          <Ripple />
        </LoadingWrapper>
      )}
    </Layout>
  )
}

export default Video
