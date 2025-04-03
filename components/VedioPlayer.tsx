"use client"

import React, { useState, useEffect, useRef } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

interface Video {
  id: number
  width: number
  height: number
  url: string
  image: string
  duration: number
  type: string
}

interface VideoPlayerProps {
  video: Video
  className?: string
}

const VideoPlayer = ({ video, className = "" }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      setIsLoading(false)
      setIsPlaying(true)
    }
  }, [])

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setIsPlaying(true)
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    }
  }

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  if (!video) {
    return null
  }

  return (
    <div
      ref={containerRef}
      className={`group relative overflow-hidden rounded-lg ${className}`}
    >
      {/* Background overlay for smooth transition */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-white/30 border-t-white" />
        </div>
      )}

      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="relative h-full w-full object-cover mix-blend-overlay"
      >
        <source
          src={video.url}
          type={video.type}
        />
        Your browser does not support the video tag.
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Controls */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <button
          onClick={handlePlayPause}
          className="rounded-full bg-white/20 p-2 backdrop-blur-sm transition-colors hover:bg-white/30"
        >
          {isPlaying ? (
            <Pause className="h-5 w-5 text-white" />
          ) : (
            <Play className="h-5 w-5 text-white" />
          )}
        </button>

        <button
          onClick={handleMute}
          className="rounded-full bg-white/20 p-2 backdrop-blur-sm transition-colors hover:bg-white/30"
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5 text-white" />
          ) : (
            <Volume2 className="h-5 w-5 text-white" />
          )}
        </button>
      </div>
    </div>
  )
}

export default VideoPlayer
