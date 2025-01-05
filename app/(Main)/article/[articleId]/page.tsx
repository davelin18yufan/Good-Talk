import { article as blog, articles as blogs } from "@/api"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Calendar } from "lucide-react"
import "reactjs-tiptap-editor/style.css"
import ArticleTestimonials from "@/components/blog/ArticleTestimonials"
import { ScrollProgress } from "@/components/blog/ScrollProgress"

export default function ArticleDetailPage() {
  const testimonials = blogs.map((blog) => ({
    id: blog.id,
    quote: blog.description,
    name: blog.title,
    designation: blog.author.name,
    src: blog.coverUrl,
  }))

  return (
    <main className="min-h-screen relative">
      <ScrollProgress />
      <figure
        className="relative -top-10 left-1/2 h-[440px] md:h-[660px] w-screen -translate-x-1/2 rounded-md bg-cover bg-center bg-no-repeat filter backdrop-blur-md"
        style={{ backgroundImage: `url(${blog.coverUrl})` }}
      />
      <div className="mx-auto flex w-full justify-between">
        <article className="relative rounded-md p-4 max-lg:mx-auto md:-mt-80 lg:max-w-[75%] md:bg-primary-light/[0.1] md:backdrop-blur-sm lg:w-full md:dark:bg-neutral-800/[0.1]">
          <header className="text-header md:mt-4 px-3 py-12 text-center">
            <h1 className="font-display mb-6 text-5xl font-bold">
              {blog.title}
            </h1>
            <p className="text-subtext mx-auto max-w-xl">{blog.description}</p>
          </header>

          {/* Date and Author */}
          <div className="mx-auto flex w-10/12 items-center justify-between">
            {/* Author */}
            <div className="flex items-center">
              <Avatar className="bg-muted-background m-auto size-20 border dark:bg-foreground">
                <AvatarImage
                  src={blog.author?.url}
                  alt={blog.author.name}
                  className="object-cover"
                />
                <AvatarFallback>{blog.author.name[0]}</AvatarFallback>
              </Avatar>
              <div className="text-subtext ml-2">
                <p className="text-xl font-bold">{blog.author.name}</p>
                <p>{blog.author.description}</p>
              </div>
            </div>
            {/* Publish Date */}
            <time
              className="text-subtext flex items-center gap-2 text-center text-lg font-bold"
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
          <h4 className="text-2xl font-bold pt-4">Popular</h4>
          <ArticleTestimonials testimonials={testimonials} />
          {/* //TODO add some additional sidebar content */}
        </aside>
      </div>
    </main>
  )
}
