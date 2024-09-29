import BlurFade from "@/components/BlurFade"
import ArticleSidebar from "@/components/blog/ArticleSidebar"
import { BlogCard } from "@/components/blog/BlogCard"

const BLUR_FADE_DELAY = 0.04

const DATA = {
  blog: [
    {
      title: "Atomic Finance",
      href: "https://atomic.finance",
      badges: ["this"],
      location: "Remote",
      author: "Bitcoin Protocol Engineer",
      avatarUrl: "",
      coverUrl: "/next.svg",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      title: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      author: "Software Engineer",
      avatarUrl: "",
      coverUrl: "/next.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      title: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      author: "Software Engineer",
      avatarUrl: "",
      coverUrl: "/next.svg",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      title: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      author: "Software Engineer",
      avatarUrl: "",
      coverUrl: "/next.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      title: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      author: "Software Engineer",
      avatarUrl: "",
      coverUrl: "/next.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      title: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      author: "Software Engineer",
      avatarUrl: "",
      coverUrl: "/next.svg",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],
}

export default function HomePage() {
  return (
    <main className="flex flex-col-reverse items-center justify-between gap-2 md:flex-row">
      {/* Article List */}
      <section id="blogs" className="basis-2/3">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">最新文章</h2>
          </BlurFade>
          {DATA.blog.map((blog, id) => (
            <BlurFade key={blog.title} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
              <BlogCard
                key={blog.title}
                avatarUrl={blog.avatarUrl}
                coverUrl={blog.coverUrl}
                altText={blog.title}
                title={blog.title}
                author={blog.author}
                href={blog.href}
                badges={blog.badges}
                date={`${blog.start} - ${blog.end ?? "Present"}`}
                description={blog.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Sidebar/Authors */}
      <aside id="authors" className="mb-auto max-md:w-full flex-1">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <ArticleSidebar />
        </BlurFade>
      </aside>
    </main>
  )
}
