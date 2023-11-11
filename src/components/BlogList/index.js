// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="total-list">
      {blogsList.map(eachBlogList => (
        <BlogItem key={eachBlogList.id} totalBlogDetails={eachBlogList} />
      ))}
    </ul>
  )
}
export default BlogList
