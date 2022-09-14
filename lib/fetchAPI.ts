export const fetchAPI = async (path: string) => {
  const apiURL = process.env.NEXT_PUBLIC_HEADLESS_CMS_API_URL;
  if(apiURL) {
    const res = await fetch(apiURL + path);
    const data = await res.json();
    return data;
  } else {
    return null
  }
}