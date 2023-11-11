// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {totalBlogDetails} = props
  const {title, description, publishedDate} = totalBlogDetails

  return (
    <li className="main-blog-item-container">
      <div className="main-container">
        <h1 className="main-heading">{title}</h1>
        <p className="main-date">{publishedDate}</p>
      </div>
      <p className="main-para">{description}</p>
    </li>
  )
}

export default BlogItem
