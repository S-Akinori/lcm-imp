import { ImageObject } from "./CommonProps"

export interface MemberContent {
  fieldset: {
    image: ImageObject
    name: string
    role: string
    text: string
    info: string
  }[]
}