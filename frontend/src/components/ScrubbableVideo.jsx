import { useEffect, useRef, useState } from 'react'

const VIDEO_URL = '/turlough-playing.mp4'
const SENSITIVITY = 0.8 // Adjust this value to control how sensitive the video scrubbing is to mouse movement

function useScrubVideo(videoRef) {
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let prevX = null
    let targetTime = 0
    let isSeeking = false

    const performSeek = () => {
      if (!video.duration || isNaN(video.duration)) return
      isSeeking = true
      video.currentTime = targetTime
    }

    const handleSeeked = () => {
      isSeeking = false
      if (Math.abs(video.currentTime - targetTime) > 0.01) {
        performSeek()
      }
    }

    const handleMouseMove = (event) => {
      const duration = video.duration
      if (!duration || isNaN(duration)) return

      if (prevX === null) {
        prevX = event.clientX
      }

      const delta = event.clientX - prevX
      prevX = event.clientX

      const offset = (delta / window.innerWidth) * SENSITIVITY * duration
      targetTime = Math.min(duration, Math.max(0, targetTime + offset))

      if (!isSeeking) {
        performSeek()
      }
    }

    video.addEventListener('seeked', handleSeeked)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      video.removeEventListener('seeked', handleSeeked)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [videoRef])
}

export default function BackgroundVideo() {
  const videoRef = useRef(null)
  useScrubVideo(videoRef)

  return (
    <video
      ref={videoRef}
      src={VIDEO_URL}
      muted
      playsInline
      preload="auto"
      className="fixed inset-0 w-full h-full z-0 object-cover pointer-events-none select-none"
      style={{ objectPosition: '70% center' }}
    />
  )
}