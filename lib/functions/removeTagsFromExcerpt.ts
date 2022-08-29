const removeTagsFromExcerpt = (text: string) => {
  return text.replace('<p>','').replace('</p>', '');
}

export default removeTagsFromExcerpt