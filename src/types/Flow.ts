import { ImageObject } from "./CommonProps"

export interface FlowText {
  title: string
  text: string
}
export interface FlowTop {
  titleEn: string
  titleJa: string
  fieldset: {
    title: string
    label: string
    text: string
    image: ImageObject
  }[]
}