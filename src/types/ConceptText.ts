import { CommonContent } from "./CommonProps"

export interface ConceptText extends CommonContent {
  object: {
    title: string
    text: string
  }
}