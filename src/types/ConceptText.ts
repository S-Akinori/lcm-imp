import { CommonContent, ImageObject } from "./CommonProps"

export interface ConceptText extends CommonContent {
  title: string
  text: string
}

export interface ConceptMain {
  fieldset: {
    title: string
    text: string
    image: ImageObject
  }[]
}