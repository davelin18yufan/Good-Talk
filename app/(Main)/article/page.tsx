import BlurFade from "@/components/BlurFade"
import ArticleSidebar from "@/components/blog/ArticleSidebar"
import { BlogSets } from "@/components/blog/ArticleSets"
import { BlogGallery } from "@/components/blog/ArticleGallery"
import { Separator } from "@/components/ui/separator"
import { blogs } from "@/api"

const BLUR_FADE_DELAY = 0.04

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
