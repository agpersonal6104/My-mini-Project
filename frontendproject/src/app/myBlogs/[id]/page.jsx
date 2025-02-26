'use client';

import axios from 'axios';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import { Skeleton } from '@/components/Skeleton';

const ViewBlog = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}-${month}-${year}`;
  };

  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getBlogData = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/blog/get/${id}`);
      setBlogData(res.data);
    } catch (error) {
      console.error('Error fetching blog:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-full max-w-4xl p-6 space-y-6">
          <Skeleton className="w-3/4 h-8" />
          <Skeleton className="w-1/4 h-4" />
          <Skeleton className="h-[300px] w-full" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-3/4 h-4" />
        </div>
      </div>
    );
  }

  if (!blogData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <h2 className="mb-2 text-2xl font-semibold">Blog not found</h2>
          <p className="text-muted-foreground">The blog post you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container max-w-4xl px-4 py-12 mx-auto">
        <article className="prose prose-purple lg:prose-lg max-w-none">
          <header className="mb-8 not-prose">
            <h1 className="mb-4 text-3xl font-bold text-purple-900 lg:text-4xl">
              {blogData.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{blogData.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(blogData.createdAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
            </div>
          </header>

          <div className="mb-8">
            <img
              src={blogData.imageUrl || "/placeholder.svg"}
              alt={blogData.title}
              className="rounded-lg w-full max-h-[500px] object-cover"
            />
          </div>

          <div className="space-y-6">
            <p className="text-xl font-medium text-muted-foreground">
              {blogData.description}
            </p>
            <div className="leading-relaxed">
              {blogData.content}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ViewBlog;