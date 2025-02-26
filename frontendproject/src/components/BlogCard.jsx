import Link from 'next/link'
import { Card } from '@/components/Card'
import { Calendar } from 'lucide-react'

const BlogCard = ({ blog, formatDate }) => {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={blog.imageUrl || "/placeholder.svg"} 
          alt={blog.title}
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          {formatDate(blog.createdAt)}
        </div>
        <h3 className="mb-2 text-lg font-semibold line-clamp-1">{blog.title}</h3>
        <p className="mb-3 text-sm text-muted-foreground line-clamp-2">{blog.description}</p>
        <div className="flex items-center justify-between pt-3 border-t">
          <span className="text-sm font-medium">{blog.author}</span>
          <Link 
            href={'/viewBlog/' + blog._id} 
            className="text-sm text-purple-600 hover:text-purple-700 hover:underline"
          >
            Read More
          </Link>
        </div>
      </div>
    </Card>
  )
}

export default BlogCard;