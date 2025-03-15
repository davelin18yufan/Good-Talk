"use client"

import {
  articles,
  persons,
  article,
  achievements,
  mediaLinks,
  creativeVideos as videos,
  profileStats as stats,
} from "@/api"
import { BentoGrid, BentoGridItem } from "@/components/BentoGrid"
import { BlogSetCard } from "@/components/blog/ArticleSets"
import { AvatarTooltip } from "@/components/blog/AvatarTooltip"
import BlurFade from "@/components/BlurFade"
import { FormDialog, ProfileForm } from "@/components/form"
import NoResult from "@/components/NoResult"
import NumberTicker from "@/components/NumberTicker"
import Stat from "@/components/Stat"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import VideoPlayer from "@/components/VedioPlayer"
import { cn } from "@/lib/utils"
import {
  IconPencilBolt,
  IconUserEdit
} from "@tabler/icons-react"
import { motion } from "motion/react"
import Link from "next/link"
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"

const DELAY = 0.5

// TODO: replace with real data
export default function ProfilePage() {
  const userProfile = article.author

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

  return (
    <div className="mx-auto">
      {/* Profile Header */}
      <BentoGrid className="mb-4 md:auto-rows-auto md:grid-cols-3">
        <BentoGridItem
          description={
            <BlurFade key="profile-header" delay={DELAY + Math.random()}>
              <div className="flex flex-col gap-4 max-md:items-center md:col-span-3 md:flex-row">
                <div className="flex flex-col justify- items-center">
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
                  <FormDialog
                    triggerElement={
                      <div className="!text-subtext group relative mt-2 inline-flex text-center overflow-hidden px-8 py-3">
                        <span className="absolute -start-full transition-all group-hover:start-2">
                          <IconUserEdit className="size-5 rtl:rotate-180" />
                        </span>

                        <span className="text-sm font-medium transition-all !duration-300">
                          Edit Profile
                        </span>
                      </div>
                    }
                    triggerButtonClass="hover:bg-transparent"
                    identity="edit-profile"
                    key="edit-profile"
                  >
                    <ProfileForm
                      title="Setting"
                      description="Let us know you!"
                      isDialog={true}
                    />
                  </FormDialog>
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
                    <div className="flex flex-wrap items-center gap-2 text-sky-800 max-md:justify-center dark:text-btn-dark/80">
                      {mediaLinks.map((link, index) => (
                        <Link
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <motion.span
                            className={cn(
                              "hover:bg-primary flex-center flex-col rounded-md px-2.5 py-1.5 text-center text-xs transition-all",
                            )}
                            whileHover="hover"
                            initial="initial"
                          >
                            {link.icon}
                            <span className="mt-1">
                              {link.name.split("").map((char, index) => (
                                <motion.span
                                  key={index}
                                  className="inline-block"
                                  variants={{
                                    initial: {
                                      y: 0,
                                      scale: 1,
                                    },
                                    hover: {
                                      y: -4,
                                      scale: 1.2,
                                      transition: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 15,
                                        delay: index * 0.03,
                                      },
                                    },
                                  }}
                                >
                                  {char}
                                </motion.span>
                              ))}
                            </span>
                          </motion.span>
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
