import React from "react"

export interface CommonProps {
  className?: string
  style?: React.CSSProperties
}

export interface CommonChildrenProps {
  children: React.ReactNode
}

export interface CommonContent {
  id: string
  name: string
  object: {
    [key: string]: string
  }
  title: string
  typeId: string
}

export interface ImageObject {
  path?: string
  url: string
  width: number
  height: number
}

export interface TitleTextContentType {
  title: string
  text: string
}