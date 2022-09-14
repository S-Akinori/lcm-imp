export interface CommonProps {
  className?: string
  style?: React.CSSProperties
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