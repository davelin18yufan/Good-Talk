"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
  Line,
  LineChart,
} from "recharts"
import { BentoGrid, BentoGridItem } from "@/components/BentoGrid"
import ButtonLink from "@/components/buttons/ButtonLink"
import NoResult from "@/components/NoResult"
import { BlogSetCard } from "@/components/blog/ArticleSets"
import { articles } from "@/api"
import BlurFade from "@/components/BlurFade"
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandYoutube,
  IconBrandInstagram,
  IconMail,
  IconLink,
  IconPencilBolt,
} from "@tabler/icons-react"
import Link from "next/link"
import VideoPlayer from "@/components/VedioPlayer"
import NumberTicker from "@/components/NumberTicker"
import { cn } from "@/lib/utils"
import { persons } from "@/api"
import { AvatarTooltip } from "@/components/blog/AvatarTooltip"
import Stat from "@/components/Stat"

const DELAY = 0.5

export default function ProfilePage() {
  const userProfile = {
    id: "1265412",
    url: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww",
    name: "Adrian Paul",
    description:
      "I'm Adrian Paul, a passionate entrepreneur and tech enthusiast. As the COO & Co-Founder of Omfi, I'm dedicated to empowering individuals and businesses to take control of their finances and achieve their financial goals. With extensive experience in the fintech industry, I'm committed to driving innovation and making a positive impact on the world. When I'm not working, you can find me exploring new hiking trails, practicing yoga, or simply enjoying the beauty of nature.",
    aka: "COO & Co-Founder",
    tags: ["Floral", "Highlands", "Wildflowers", "Colorful", "Resilience"],
  }

  const data = [
    {
      month: "Jan.",
      totalAsset: 4000,
      views: 2400,
      follows: 2400,
    },
    {
      month: "Feb.",
      totalAsset: 3000,
      views: 1398,
      follows: 2210,
    },
    {
      month: "Mar.",
      totalAsset: 2000,
      views: 9800,
      follows: 2290,
    },
    {
      month: "Apr.",
      totalAsset: 2780,
      views: 3908,
      follows: 2000,
    },
    {
      month: "May",
      totalAsset: 1890,
      views: 4800,
      follows: 2181,
    },
    {
      month: "Jun.",
      totalAsset: 2390,
      views: 3800,
      follows: 2500,
    },
    {
      month: "Jul.",
      totalAsset: 3490,
      views: 4300,
      follows: 2100,
    },
  ]

  const achievements = [
    {
      id: 1,
      name: "First Article",
      description: "Published your first article",
      icon: "🏆",
    },
    {
      id: 2,
      name: "Popular Post",
      description: "Received 1000+ views on a single post",
      icon: "🌟",
    },
    {
      id: 3,
      name: "Consistent Writer",
      description: "Published articles for 3 months in a row",
      icon: "✍️",
    },
  ]

  const mediaLinks = [
    {
      name: "Facebook",
      icon: <IconBrandFacebook className="h-6 w-6" />,
      url: "https://facebook.com/alice_codes",
    },
    {
      name: "Twitter",
      icon: <IconBrandTwitter className="h-6 w-6" />,
      url: "https://twitter.com/alice_codes",
    },
    {
      name: "LinkedIn",
      icon: <IconBrandLinkedin className="h-6 w-6" />,
      url: "https://linkedin.com/in/alice_codes",
    },
    {
      name: "GitHub",
      icon: <IconBrandGithub className="h-6 w-6" />,
      url: "https://github.com/alice_codes",
    },
    {
      name: "YouTube",
      icon: <IconBrandYoutube className="h-6 w-6" />,
      url: "https://youtube.com/@alice_codes",
    },
    {
      name: "Website",
      icon: <IconLink className="h-6 w-6" />,
      url: "https://alice-codes.dev",
    },
    {
      name: "Instagram",
      icon: <IconBrandInstagram className="h-6 w-6" />,
      url: "https://instagram.com/alice_codes",
    },
    {
      name: "Email",
      icon: <IconMail className="h-6 w-6" />,
      url: "mailto:K0L0w@example.com",
    },
  ]

  const videos = [
    {
      id: 1,
      width: 1920,
      height: 1080,
      url: "https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_30fps.mp4",
      image:
        "https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_30fps.mp4",
      duration: 213,
      type: "video/mp4",
    },
    {
      id: 2,
      width: 1920,
      height: 1080,
      url: "https://videos.pexels.com/video-files/4696278/4696278-hd_1920_1080_30fps.mp4",
      image:
        "https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_30fps.mp4",
      duration: 213,
      type: "video/mp4",
    },
    {
      id: 3,
      width: 1920,
      height: 1080,
      url: "https://videos.pexels.com/video-files/9867271/9867271-uhd_2560_1440_24fps.mp4",
      image:
        "https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_30fps.mp4",
      duration: 213,
      type: "video/mp4",
    },
    {
      id: 4,
      width: 1920,
      height: 1080,
      url: "https://videos.pexels.com/video-files/18069403/18069403-uhd_2560_1440_24fps.mp4",
      image:
        "https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_30fps.mp4",
      duration: 213,
      type: "video/mp4",
    },
    {
      id: 5,
      width: 1920,
      height: 1080,
      url: "https://videos.pexels.com/video-files/25744125/11904090_2560_1440_24fps.mp4",
      image:
        "https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_30fps.mp4",
      duration: 213,
      type: "video/mp4",
    },
    {
      id: 6,
      width: 1920,
      height: 1080,
      url: "https://videos.pexels.com/video-files/11315884/11315884-hd_1920_1080_24fps.mp4",
      image:
        "https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_30fps.mp4",
      duration: 213,
      type: "video/mp4",
    },
    {
      id: 7,
      width: 1920,
      height: 1080,
      url: "https://videos.pexels.com/video-files/28259250/12342186_1920_1080_30fps.mp4",
      image:
        "https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_30fps.mp4",
      duration: 213,
      type: "video/mp4",
    },
    {
      id: 8,
      width: 1920,
      height: 1080,
      url: "https://videos.pexels.com/video-files/12352337/12352337-hd_1920_1080_60fps.mp4",
      image:
        "https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_30fps.mp4",
      duration: 213,
      type: "video/mp4",
    },
  ]

  const stats = [
    {
      id: 1,
      title: "Frequency",
      value: 30,
      suffix: "",
      decimal: 0,
    },
    {
      id: 2,
      title: "Performance",
      value: 100,
      suffix: "%",
      decimal: 1,
    },
    {
      id: 3,
      title: "Followers",
      value: 51,
      suffix: "K",
      decimal: 0,
    },
    {
      id: 4,
      title: "Following",
      value: 60,
      suffix: "K",
      decimal: 0,
    },
  ]

  return (
    <div className="mx-auto">
      {/* Profile Header */}
      <BentoGrid className="mb-4 md:auto-rows-auto md:grid-cols-3">
        <BentoGridItem
          description={
            <BlurFade key="profile-header" delay={DELAY + Math.random()}>
              <div className="flex flex-col gap-4 max-md:items-center md:col-span-3 md:flex-row">
                <div className="flex flex-col justify-start">
                  <Avatar className="h-32 w-32 xl:size-36">
                    <AvatarImage
                      src={userProfile.url}
                      alt={userProfile.name}
                      className="object-cover"
                    />
                    <AvatarFallback>
                      {userProfile.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <ButtonLink className="z-10 flex-1">Edit Profile</ButtonLink>
                </div>
                <div className="flex-1 p-1 text-center md:ml-3 md:text-left">
                  <div className="flex flex-col gap-4">
                    {/* Name */}
                    <div>
                      <h1 className="text-header text-4xl font-bold">
                        {userProfile.name}
                      </h1>
                      <p className="text-paragraph text-2xl">
                        {userProfile.aka}
                      </p>
                    </div>

                    {/* Media */}
                    <div className="flex flex-wrap items-center gap-2 text-sky-800 max-md:justify-center dark:text-btn-dark">
                      {mediaLinks.map((link, index) => (
                        <Link
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:bg-primary flex size-16 flex-col items-center justify-center rounded-md px-2.5 py-1.5 transition-colors"
                        >
                          {link.icon}
                          <span className="mt-1 text-xs">{link.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-subtext mt-2 max-w-2xl text-base">
                    {userProfile.description}
                  </p>
                </div>
                <div className="relative">
                  <IconPencilBolt
                    className="text-invert absolute right-5 top-3 z-10 h-5 w-5 cursor-pointer max-lg:hidden"
                    onClick={() => {}}
                  />
                  <VideoPlayer
                    video={videos[4]}
                    className="mr-3 aspect-square max-h-[350px] place-content-center object-cover max-lg:hidden"
                  />
                </div>
              </div>
            </BlurFade>
          }
          className="md:col-span-3"
        />
      </BentoGrid>

      <BentoGrid className="mb-4 md:grid-cols-4">
        {/* Achievements */}
        <BentoGridItem
          title="Achievements"
          className="md:col-span-2 lg:col-span-1"
          description={
            <BlurFade key="achievements" delay={DELAY + Math.random()}>
              <div className="space-y-2">
                <h3 className="text-center text-4xl font-bold text-progress">
                  750
                </h3>
                <Progress value={75} className="mt-2 h-2" />
                {achievements.map((achievement) => (
                  <div key={achievement.id} className="flex items-center gap-2">
                    <span className="text-2xl">{achievement.icon}</span>
                    <div>
                      <h4 className="text-paragraph font-semibold">
                        {achievement.name}
                      </h4>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </BlurFade>
          }
        />

        {/* Stats */}
        <BentoGridItem
          title="Stats"
          className="md:col-span-2 lg:col-span-1"
          description={
            <BlurFade key="stats" delay={DELAY + Math.random()}>
              <dl className="grid h-full grid-cols-2 place-items-center justify-center gap-2 lg:gap-y-4">
                {stats.map(({ id, title, value, suffix, decimal }) => (
                  <div
                    key={id}
                    className="flex flex-col items-center justify-center rounded-lg px-1 py-4 text-center"
                  >
                    <dt className="text-subtext order-last text-base font-medium">
                      {title}
                    </dt>

                    <dd className="text-xl font-extrabold text-sky-800 md:text-2xl dark:text-sky-500">
                      <NumberTicker
                        value={value}
                        className={cn(
                          "bg-inherit text-inherit dark:text-inherit",
                        )}
                        decimalPlaces={decimal}
                      />
                      {suffix}
                    </dd>
                  </div>
                ))}
              </dl>
            </BlurFade>
          }
        />

        {/* Investment Record Dashboard */}
        <BentoGridItem
          title="Investment Record"
          className="md:col-span-full lg:col-span-2"
          description={
            <BlurFade
              key="investment-record-dashboard"
              delay={DELAY + Math.random()}
            >
              <ResponsiveContainer width="100%" height={220}>
                <LineChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <XAxis dataKey="month" color="var(--x-axis)" />
                  <YAxis color="var(--y-axis)" />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="totalAsset"
                    stroke="var(--line)"
                    // activeDot={{ r: 8 }} // only available with Tooltip
                  />
                  <Line
                    type="monotone"
                    dataKey="views"
                    stroke="var(--chart-4)"
                  />
                  <Line
                    type="monotone"
                    dataKey="follows"
                    stroke="var(--chart-2)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </BlurFade>
          }
        />
      </BentoGrid>

      <BentoGrid className="">
        {/* Published Articles */}
        <BentoGridItem
          title="Published Articles"
          className="max-h-[40vh] overflow-y-scroll md:col-span-2 md:row-span-2"
          description={
            <div className="space-y-2 pt-1">
              {articles.length ? (
                articles.map((blog, i) => (
                  <BlurFade key={blog.id} delay={DELAY * 2 + i * 0.25}>
                    <BlogSetCard key={blog.id} {...blog} showAvatar={false} />
                  </BlurFade>
                ))
              ) : (
                <BlurFade key="no-articles" delay={DELAY + Math.random()}>
                  <NoResult
                    title="No Published Articles"
                    description="You haven't published any articles yet"
                    link="/article/create"
                    linkTitle="Go to Write something."
                  />
                </BlurFade>
              )}
            </div>
          }
        />

        {/* Followed */}
        <BentoGridItem
          className="pb-0"
          title="Followed"
          description={
            <BlurFade key="followed" delay={DELAY + Math.random()}>
              <div className="flex-center relative max-md:py-4 md:mt-7">
                {/* //TODO Careful for the length */}
                <AvatarTooltip persons={persons} />
              </div>
            </BlurFade>
          }
        />

        {/* Content Statistics */}
        <BentoGridItem
          title="Content Statistics"
          description={
            <BlurFade key="content-statistics" delay={DELAY + Math.random()}>
              <div className="space-y-2">
                <Stat label="Total Views" value={3680} maxValue={5000} />
                <Stat label="Total Comments" value={43} maxValue={100} />
                <Stat label="Total Likes" value={137} maxValue={250} />
              </div>{" "}
            </BlurFade>
          }
        />
      </BentoGrid>
    </div>
  )
}
