// "use client"

// import axios from "axios"
// import Link from "next/link"
// import { useEffect, useState, useCallback } from "react"
// import { useTypewriter } from "react-simple-typewriter"
// import { Card, CardContent } from "@/components/Card"
// import { Button } from "@/components/Button"
// import { BookOpen, Calendar, ChevronRight, Newspaper, Code, Terminal } from "lucide-react"

// const Home = () => {
//   const formatDate = (dateString) => {
//     const date = new Date(dateString)
//     const day = String(date.getDate()).padStart(2, "0")
//     const month = String(date.getMonth() + 1).padStart(2, "0")
//     const year = String(date.getFullYear()).slice(-2)
//     return `${day}-${month}-${year}`
//   }

//   const [typeEffect] = useTypewriter({
//     words: ["Latest Information", "Latest Insights", "Latest News"],
//     loop: {},
//     typeSpeed: 120,
//     deleteSpeed: 120,
//   })

//   const [blogList, setBlogList] = useState([])
//   const [loading, setLoading] = useState(true)

//   const fetchBlogData = useCallback(async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/blog/getall")
//       setBlogList(res.data)
//     } catch (error) {
//       console.error("Error fetching blogs:", error)
//     } finally {
//       setLoading(false)
//     }
//   }, [])

//   useEffect(() => {
//     fetchBlogData()
//   }, [fetchBlogData])

//   const displayBlogs = () => {
//     if (loading) {
//       return (
//         <div className="flex items-center justify-center min-h-[200px]">
//           <div className="w-16 h-16 border-4 border-purple-600 rounded-full border-t-transparent animate-spin" />
//         </div>
//       )
//     }

//     if (blogList.length === 0) {
//       return (
//         <div className="py-12 text-center">
//           <Newspaper className="w-12 h-12 mx-auto mb-4 text-gray-400" />
//           <h3 className="mb-2 text-xl font-semibold">No blogs found</h3>
//           <p className="text-gray-500">Check back later for new content!</p>
//         </div>
//       )
//     }

//     return (
//       <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//         {blogList.map((blog) => (
//           <Card key={blog._id} className="overflow-hidden transition-shadow hover:shadow-lg">
//             <div className="relative overflow-hidden aspect-video">
//               <img
//                 src={blog.imageUrl || "/placeholder.svg"}
//                 alt={blog.title}
//                 className="object-cover w-full h-full transition-transform hover:scale-105"
//               />
//             </div>
//             <CardContent className="p-6">
//               <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
//                 <Calendar className="w-4 h-4" />
//                 {formatDate(blog.createdAt)}
//               </div>
//               <h2 className="mb-2 text-xl font-semibold line-clamp-2">{blog.title}</h2>
//               <p className="mb-4 text-gray-500 line-clamp-2">{blog.description}</p>
//               <div className="flex items-center justify-between pt-4 border-t">
//                 <span className="text-sm font-medium">{blog.author}</span>
//                 <Button variant="ghost" size="sm" asChild>
//                   <Link href={"/viewBlog/" + blog._id}>
//                     Read More <ChevronRight className="w-4 h-4 ml-1" />
//                   </Link>
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     )
//   }

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Hero Section */}
//       <header className="relative py-20 bg-gradient-to-r from-purple-100 to-purple-50 lg:py-32" id="backgroundHome">
//         <div className="container px-4 mx-auto">
//           <div className="max-w-3xl">
//             <h1 className="mb-4 text-2xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text">
//               DevLopBlogs
//             </h1>
//             <p className="mb-8 text-2xl font-medium md:text-3xl">
//               Get the <span className="font-semibold text-purple-600">{typeEffect}</span>
//             </p>
//           </div>
//         </div>
//       </header>

//       <main className="container flex-grow px-4 py-12 mx-auto">
//         {/* Latest Posts Section */}
//         <div className="mb-16">
//           <h2 className="mb-12 text-3xl font-bold text-center underline">Latest Posts</h2>
//           {displayBlogs()}
//         </div>

//         {/* Categories Section */}
//         <div className="px-4 py-12 -mx-4 bg-purple-50 lg:py-16">
//           <div className="container mx-auto">
//             <h2 className="mb-12 text-3xl font-bold text-center">Popular Categories</h2>
//             <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
//               {[
//                 {
//                   icon: <Code className="w-10 h-10 text-purple-600" />,
//                   title: "Visual Studio Blog",
//                   description: "The official source of product insight from the Visual Studio Engineering Team",
//                 },
//                 {
//                   icon: <Terminal className="w-10 h-10 text-purple-600" />,
//                   title: "Python",
//                   description: "Read the latest updates about all things Python at Microsoft",
//                 },
//                 {
//                   icon: <Code className="w-10 h-10 text-purple-600" />,
//                   title: "JavaScript",
//                   description: "The official blog of the JavaScript team",
//                 },
//                 {
//                   icon: <Code className="w-10 h-10 text-purple-600" />,
//                   title: "React",
//                   description: "The official blog of the React team",
//                 },
//               ].map((category, index) => (
//                 <Card key={index} className="transition-transform bg-white hover:-translate-y-1">
//                   <CardContent className="p-6">
//                     <div className="mb-4">{category.icon}</div>
//                     <h3 className="mb-2 text-xl font-semibold">{category.title}</h3>
//                     <p className="text-gray-500">{category.description}</p>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="py-12 bg-purple-100">
//         <div className="container px-4 mx-auto">
//           <div className="text-center">
//             <Link href="/" className="inline-block mb-4 text-2xl font-bold text-purple-900">
//               DevLopBlogs
//             </Link>
//             <p className="max-w-md mx-auto mb-6 text-gray-500">
//               We're part of the{" "}
//               <a href="#" className="text-purple-600 hover:underline">
//                 DevLopBlogs
//               </a>{" "}
//               family.
//             </p>
//             <p className="mb-6 text-sm text-gray-500">© 2024 AG PVT.</p>
//             <div className="flex justify-center gap-4">
//               {/* {["github", "twitter", "slack", "linkedin"].map((social) => (
//                 <Button key={social} variant="ghost" size="icon" className="rounded-full hover:bg-purple-200">
//                   <span className="sr-only">{social}</span>
//                   <Code className="w-5 h-5" />
//                 </Button>
//               ))} */}
//               {/* Social Brands */}
//               <div className="mt-3 space-x-2">
//          <a
//           className="inline-flex items-center justify-center text-sm font-semibold text-gray-500 border border-transparent rounded-full size-8 gap-x-2 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
//           href="#"
//         >
//           <svg
//             className="shrink-0 size-3.5"
//             xmlns="http://www.w3.org/2000/svg"
//             width={16}
//             height={16}
//             fill="currentColor"
//             viewBox="0 0 16 16"
//           >
//             <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
//           </svg>
//         </a>
//         <a
//           className="inline-flex items-center justify-center text-sm font-semibold text-gray-500 border border-transparent rounded-full size-8 gap-x-2 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
//           href="#"
//         >
//           <svg
//             className="shrink-0 size-3.5"
//             xmlns="http://www.w3.org/2000/svg"
//             width={16}
//             height={16}
//             fill="currentColor"
//             viewBox="0 0 16 16"
//           >
//             <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
//           </svg>
//         </a>
//         <a
//           className="inline-flex items-center justify-center text-sm font-semibold text-gray-500 border border-transparent rounded-full size-8 gap-x-2 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
//           href="#"
//         >
//           <svg
//             className="shrink-0 size-3.5"
//             xmlns="http://www.w3.org/2000/svg"
//             width={16}
//             height={16}
//             fill="currentColor"
//             viewBox="0 0 16 16"
//           >
//             <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
//           </svg>
//         </a>
//         <a
//           className="inline-flex items-center justify-center text-sm font-semibold text-gray-500 border border-transparent rounded-full size-8 gap-x-2 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
//           href="#"
//         >
//           <svg
//             className="shrink-0 size-3.5"
//             xmlns="http://www.w3.org/2000/svg"
//             width={16}
//             height={16}
//             fill="currentColor"
//             viewBox="0 0 16 16"
//           >
//             <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
//           </svg>
//         </a>
//       </div>
//       {/* End Social Brands */}
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }

// export default Home;

"use client";

import axios from "axios"
import Link from "next/link"
import { useEffect, useState, useCallback } from "react"
import { useTypewriter } from "react-simple-typewriter"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/MainCard";
import { Button } from "@/components/MainButton"
import { BookOpen, Calendar, ChevronRight, Newspaper, Code, Terminal } from "lucide-react";
import { Separator } from "@/components/Seperator"
import { TypographyH1, TypographyH2, TypographyH3, TypographyP } from "@/components/Typography";

const Home = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const day = String(date.getDate()).padStart(2, "0")
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const year = String(date.getFullYear()).slice(-2)
    return `${day}-${month}-${year}`
  }

  const [typeEffect] = useTypewriter({
    words: ["Latest Information", "Latest Insights", "Latest News"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 120,
  })

  const [blogList, setBlogList] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchBlogData = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:5000/blog/getall")
      setBlogList(res.data)
    } catch (error) {
      console.error("Error fetching blogs:", error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchBlogData()
  }, [fetchBlogData])

  const displayBlogs = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center min-h-[200px]">
          <div className="w-16 h-16 border-4 border-purple-600 rounded-full border-t-transparent animate-spin" />
        </div>
      )
    }

    if (blogList.length === 0) {
      return (
        <div className="py-12 text-center">
          <Newspaper className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <TypographyH3 className="mb-2">No blogs found</TypographyH3>
          <TypographyP className="text-gray-500">Check back later for new content!</TypographyP>
        </div>
      )
    }

    return (
      <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {blogList.map((blog) => (
          <Card key={blog._id} className="overflow-hidden transition-shadow hover:shadow-lg">
            <div className="relative overflow-hidden aspect-video">
              <img
                src={blog.imageUrl || "/placeholder.svg"}
                alt={blog.title}
                className="object-cover w-full h-full transition-transform hover:scale-105"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                {formatDate(blog.createdAt)}
              </div>
              <TypographyH3 className="mb-2 line-clamp-2">{blog.title}</TypographyH3>
              <TypographyP className="mb-4 text-gray-500 line-clamp-2">{blog.description}</TypographyP>
              <div className="flex items-center justify-between pt-4 border-t">
                <span className="text-sm font-medium">{blog.author}</span>
                <Button variant="ghost" size="sm" asChild>
                  <Link href={"/viewBlog/" + blog._id}>
                    Read More <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="relative py-20 bg-gradient-to-r from-purple-100 to-purple-50 lg:py-32" id="backgroundHome">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl">
            <TypographyH1 className="mb-4 text-transparent bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text">
              DevLopBlogs
            </TypographyH1>
            <TypographyH2 className="mb-8">
              Get the <span className="font-semibold text-purple-600">{typeEffect}</span>
            </TypographyH2>
          </div>
        </div>
      </header>

      {/* Section Divider */}
      <Separator className="h-1 bg-gradient-to-r from-purple-600 to-purple-900" />

      <main className="container flex-grow w-full max-w-full px-4 py-12">
        {/* Latest Posts Section */}
        <div className="mb-16">
          <TypographyH2 className="mb-12 text-center underline">Latest Posts</TypographyH2>
          {displayBlogs()}
        </div>

        {/* Section Divider */}
        <Separator className="h-1 my-12 bg-gradient-to-r from-purple-600 to-purple-900" />

        {/* Categories Section */}
        <div className="px-4 py-12 -mx-4 bg-purple-50 lg:py-16">
          <div className="container mx-auto">
            <TypographyH2 className="mb-12 text-center">Popular Categories</TypographyH2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <Code className="w-10 h-10 text-purple-600" />,
                  title: "Visual Studio Blog",
                  description: "The official source of product insight from the Visual Studio Engineering Team",
                },
                {
                  icon: <Terminal className="w-10 h-10 text-purple-600" />,
                  title: "Python",
                  description: "Read the latest updates about all things Python at Microsoft",
                },
                {
                  icon: <Code className="w-10 h-10 text-purple-600" />,
                  title: "JavaScript",
                  description: "The official blog of the JavaScript team, Hello developers",
                },
                {
                  icon: <Code className="w-10 h-10 text-purple-600" />,
                  title: "Data Science",
                  description: "The official blog for Data Scientists and Staticians.",
                },
              ].map((category, index) => (
                <Card key={index} className="transition-transform bg-white hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="mb-4">{category.icon}</div>
                    <TypographyH3 className="mb-2">{category.title}</TypographyH3>
                    <TypographyP className="text-gray-500">{category.description}</TypographyP>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={"/tags"}>
                        View More
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Section Divider */}
      <Separator className="h-1 bg-gradient-to-r from-purple-600 to-purple-900" />

      {/* Footer */}
      <footer className="py-12 bg-purple-100">
        <div className="container px-4 mx-auto">
          <div className="text-center">
            <Link href="/" className="inline-block mb-4 text-2xl font-bold text-purple-900">
              DevLopBlogs
            </Link>
            <TypographyP className="max-w-md mx-auto mb-6 text-gray-500">
              We're part of the{" "}
              <a href="#" className="text-purple-600 hover:underline">
                DevLopBlogs
              </a>{" "}
              family.
            </TypographyP>
            <TypographyP className="mb-6 text-sm text-gray-500">© 2024 AG PVT.</TypographyP>
            <div className="flex justify-center gap-4">
              {/* Social Brands */}
              <div className="mt-3 space-x-2">
                {/* Add your social icons here */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home;