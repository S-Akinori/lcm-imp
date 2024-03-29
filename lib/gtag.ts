export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (!GA_TRACKING_ID) return // GA_TRACKING_ID が設定されていない場合は、処理しない
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
interface EventParam {
  action: string
  category: string
  label: string
  value: number
}
export const event = ({ action, category  = 'general', label, value }: EventParam) => {
  if (!GA_TRACKING_ID) return // GA_TRACKING_ID が設定されていない場合は、処理しない
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}