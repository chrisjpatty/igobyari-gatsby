module.exports.getPostsByTags = posts => (
  posts.reduce((tagObj, post) => {
    (((post || {}).frontmatter || {}).tags || []).forEach(tag => {
      const sanitizedTag = tag.toLowerCase()
      if(tagObj[sanitizedTag]){
        tagObj[sanitizedTag].push(post.node.id)
      }else{
        tagObj[sanitizedTag] = [post.node.id]
      }
    })
    return tagObj
  }, {})
)

const getRandomFromArray = arr => arr[Math.floor(Math.random() * arr.length)]
const getUniqueFromArray = (arr1, arr2) => {
  let uniquePost;
  let notUnique = true;
  while (notUnique) {
    uniquePost = getRandomFromArray(arr2)
    if(!arr1.find(x => uniquePost === x)){
      notUnique = false;
    }
  }
  return uniquePost
}

module.exports.getRelatedPosts = (post, tagsObject, allPosts) => {
  const postIds = allPosts.map(post => post.node.id)
  let relatedIds = []
  const pool = (((post || {}).frontmatter || {}).tags || []).flatMap(tag => {
    const sanitizedTag = tag.toLowerCase();
    return tagsObject[sanitizedTag]
  })
  while(relatedIds.length < 3){
    if(pool.length > relatedIds.length){
      relatedIds.push(getUniqueFromArray(relatedIds, pool))
    }else{
      relatedIds.push(getUniqueFromArray(relatedIds, postIds))
    }
  }
  return relatedIds
}
