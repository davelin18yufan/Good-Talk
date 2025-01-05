import { article as blog, articles as blogs } from "@/api"
import ArticleTestimonials from "@/components/blog/ArticleTestimonials"
import { ScrollProgress } from "@/components/blog/ScrollProgress"
import ButtonEffect from "@/components/buttons/ButtonEffect"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Calendar } from "lucide-react"
import Link from "next/link"
import "reactjs-tiptap-editor/style.css"

export default function ArticleDetailPage() {
  const testimonials = blogs.map((blog) => ({
    id: blog.id,
    quote: blog.description,
    name: blog.title,
    designation: blog.author.name,
    src: blog.coverUrl,
  }))

  return (
    <main className="relative min-h-screen">
      <ScrollProgress />
      {/* Cover Image */}
      <figure
        className="relative -top-10 left-1/2 h-[440px] w-screen -translate-x-1/2 rounded-md bg-cover bg-center bg-no-repeat filter backdrop-blur-md md:h-[660px]"
        style={{ backgroundImage: `url(${blog.coverUrl})` }}
      />

      <div className="mx-auto flex w-full justify-between">
        <article className="relative rounded-md p-4 max-lg:mx-auto md:-mt-80 md:bg-primary-light/[0.1] md:backdrop-blur-sm lg:w-full lg:max-w-[75%] md:dark:bg-neutral-800/[0.1]">
          <header className="text-header px-3 py-10 text-center md:mt-4">
            <h1 className="font-display mb-6 text-5xl font-bold">
              {blog.title}
            </h1>
            <p className="text-subtext mx-auto max-w-xl text-xl">
              {blog.description}
            </p>
          </header>

          {/* Date and Author */}
          <div className="mx-auto flex w-10/12 items-center justify-between">
            {/* Author */}
            <Link
              href={`/author/${blog.author.id}`}
              className="flex items-center"
            >
              <Avatar className="bg-muted-background m-auto size-20 border dark:bg-foreground">
                <AvatarImage
                  src={blog.author?.url}
                  alt={blog.author.name}
                  className="object-cover"
                />
                <AvatarFallback>{blog.author.name[0]}</AvatarFallback>
              </Avatar>
              <div className="ml-2">
                <p className="text-xl font-bold">{blog.author.name}</p>
                <p className="text-subtext italic">
                  <span className="mr-1">a.k.a.</span>
                  <span className="underline">{blog.author.aka}</span>
                </p>
              </div>
            </Link>

            {/* Publish Date */}
            <time
              className="flex items-center gap-2 text-center text-lg font-bold"
              dateTime={blog.date}
            >
              <Calendar className="h-4 w-4" />
              {blog.date}
            </time>
          </div>

          {/* Content */}
          <div className="reactjs-tiptap-editor">
            <div
              className="richtext-flex richtext-flex-col richtext-w-full tiptap ProseMirror p-0"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            ></div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="max-lg:hidden lg:w-1/4">
          {/* About the Author */}
          <Card className="border-0 bg-transparent shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                About the Author
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <Link
                href={`/author/${blog.author.id}`}
                className="flex items-center"
              >
                <Avatar className="bg-muted-background size-16 border dark:bg-foreground">
                  <AvatarImage
                    src={blog.author?.url}
                    alt={blog.author.name}
                    className="object-cover"
                  />
                  <AvatarFallback>{blog.author.name[0]}</AvatarFallback>
                </Avatar>
                <div className="ml-2">
                  <p className="text-xl font-bold">
                    {blog.author.name}
                    <span className="ml-3 font-normal">a.k.a.</span>
                  </p>
                  <p className="text-subtext">{blog.author.aka}</p>
                </div>
              </Link>
              <div className="flex flex-wrap gap-x-0.5 gap-y-2 pt-3">
                {blog.author.tags?.map((tag) => (
                  <Badge
                    key={tag}
                    variant={null}
                    className="bg-tertiary mr-2 px-3 py-1"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <p>{blog.author.description}</p>
            </CardFooter>
          </Card>

          {/* Categories */}
          <Card className="border-0 bg-transparent shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <Link
                href={`/articles?category=${blog.category}`}
                className="flex flex-wrap gap-2"
              >
                {blog.category?.map((category) => (
                  <ButtonEffect
                    key={category}
                    emphasis={0}
                    className="!min-w-fit"
                  >
                    {category}
                  </ButtonEffect>
                ))}
              </Link>
            </CardContent>
          </Card>

          {/* Popular Testimonials */}
          <Card className="border-0 bg-transparent shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Popular</CardTitle>
            </CardHeader>
            <ArticleTestimonials testimonials={testimonials} />
          </Card>
        </aside>
      </div>
    </main>
  )
}
