import BlurFade from "@/components/BlurFade"
import ArticleSidebar from "@/components/blog/ArticleSidebar"
import { BlogSets } from "@/components/blog/ArticleSets"
import { BlogGallery } from "@/components/blog/ArticleGallery"
import { Separator } from "@/components/ui/separator"

const BLUR_FADE_DELAY = 0.04

const blogs = [
  {
    id: "1",
    title: "Forest Adventure",
    description:
      "Explore the dense forests and experience the thrill of adventure. Dense forest with sunlight filtering through trees, Dense forest with sunlight filtering through trees, Dense forest with sunlight filtering through trees",
    coverUrl:
      "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "Dense forest with sunlight filtering through trees",
    author: {
      id: "23",
      name: "John Doe",
      url: "https://unsplash.com/@johndoe",
    },
    date: new Date().toISOString().split("T")[0],
    tags: ["Nature", "Adventure"],
  },
  {
    id: "2",
    title: "Valley of life",
    description: "A peaceful valley where life flourishes amidst nature.",
    coverUrl:
      "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "Lush green valley with mountains in the background",
    author: {
      id: "123q3",
      name: "Jane Smith",
      url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww",
    },
    date: new Date(new Date().setDate(new Date().getDate() - 1))
      .toISOString()
      .split("T")[0],
    tags: ["Nature", "Peaceful"],
  },
  {
    id: "3",
    title: "Sala behta hi jayega",
    description: "A tranquil river flowing gently through the forest.",
    coverUrl:
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "River flowing through a dense forest",
    author: {
      id: "14123",
      name: "Amit Kumar",
      url: "https://images.unsplash.com/photo-1636041282783-e218bb0a217b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    date: new Date(new Date().setDate(new Date().getDate() - 2))
      .toISOString()
      .split("T")[0],
    tags: ["Nature", "River"],
  },
  {
    id: "4",
    title: "Camping is for pros",
    description:
      "Experience the ultimate camping adventure with professionals.",
    coverUrl:
      "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "Camping tent set up in a scenic forest",
    author: {
      id: "1134223",
      name: "Lisa Ray",
      url: "https://plus.unsplash.com/premium_photo-1670884441012-c5cf195c062a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fHww",
    },
    date: new Date(new Date().setDate(new Date().getDate() - 3))
      .toISOString()
      .split("T")[0],
    tags: ["Camping", "Adventure"],
  },
  {
    id: "5",
    title: "The road not taken",
    description:
      "Journey through paths less traveled and discover hidden gems.",
    coverUrl:
      "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "A winding road through a forest",
    author: {
      id: "1243",
      name: "Robert Frost",
      url: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww",
    },
    date: new Date(new Date().setDate(new Date().getDate() - 4))
      .toISOString()
      .split("T")[0],
    tags: ["Nature", "Journey"],
  },
  {
    id: "6",
    title: "Forrest Explore",
    description: "Dive deep into the unknown forests and explore the wildlife.",
    coverUrl:
      "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "Dense forest with a path leading into it",
    author: {
      id: "123",
      name: "David Green",
      url: "https://unsplash.com/@davidgreen",
    },
    date: new Date(new Date().setDate(new Date().getDate() - 5))
      .toISOString()
      .split("T")[0],
    tags: ["Exploration", "Wildlife"],
  },
]

export default function ArticlePage() {
  return (
    <main>
      {/* Gallery */}
      <section id="blogGallery" className="overflow-hidden">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <BlogGallery blogs={blogs} />
        </BlurFade>
      </section>

      <Separator className="bg-secondary my-8" />

      <div className="flex flex-col-reverse items-center justify-between gap-2 md:flex-row">
        {/* Article List */}
        <section id="blogs" className="basis-2/3">
          <BlogSets blogs={blogs} delay={BLUR_FADE_DELAY} />
        </section>

        {/* Sidebar/Authors */}
        <aside id="authors" className="mb-auto flex-1 max-md:w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <ArticleSidebar />
          </BlurFade>
        </aside>
      </div>
    </main>
  )
}
