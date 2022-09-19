export const fetchAPI = async <T>(path: string, itemsOnly = true) => {
  const apiURL = process.env.NEXT_PUBLIC_HEADLESS_CMS_API_URL;
  if(apiURL) {
    const res = await fetch(apiURL + path);
    const data = await res.json();
    return itemsOnly ? data.object as T : data as T;
  } else {
    return null
  }
}