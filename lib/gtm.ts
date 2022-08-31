export const googleTagManagerId =
  process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID || '';

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

type SendClickLPLineButton = 'click_lp_line_button';

export const sendClickLPLineButton = (
  label: SendClickLPLineButton,
): void => {
  window.dataLayer.push({
    event: 'click_lp_line_button',
    click_lp_line_button_trigger: label,
  });
};