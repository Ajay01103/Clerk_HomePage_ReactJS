import { PlayCircleIcon } from "@heroicons/react/24/solid"

const Hero = () => {
  return (
    <section className="font-sans">
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a
          href="#"
          class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 border-2 border-[#6C47FF] text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          role="alert"
        >
          <span class="text-sm bg-[#6C47FF] rounded-full text-white px-4 py-2 mr-2">New</span>{" "}
          <span class="md:text-lg text-sm font-medium">
            Clerk raises $15m Series a led by Madrona
          </span>
          {/* <CommandLineIcon className="w-8 h-8" /> */}
        </a>
        <h1 class="mb-4 py-4 text-4xl font-extrabold tracking-normal antialiased leading-none text-[#262f40] md:text-5xl lg:text-6xl dark:text-white">
          More than authentication <br />
          <span className="text-[#6C47FF]">Complete user management.</span>
        </h1>
        <h3 class="mb-8 py-2 leading-normal tracking-normal text-lg font-normal lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Clerk is more than a "sign-in box." Integrate complete user management UIs and APIs,
          purpose-built for React, Next.js, and the Modern Web.
        </h3>
        <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            class="inline-flex justify-center items-center py-3 px-5 text-lg font-medium text-center text-white rounded-lg bg-[#6C47FF] hover:bg-opacity-90 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            <span>Start building for free</span>
          </a>
          <a
            href="#"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <PlayCircleIcon className="h-8 w-8 fill-[#6C47FF]" />
            <span className="ml-2 text-[#6C47FF] text-center">Watch Demo</span>
          </a>
        </div>
        <div class="w-full h-full mx-auto mt-20 text-center md:w-full">
          <img
            src="https://clerk.com/_next/image?url=%2Fimages%2Fhome%2Fnew-hero.png&w=3840&q=75"
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
