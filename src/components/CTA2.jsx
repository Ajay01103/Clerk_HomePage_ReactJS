import React from "react"

const CTA2 = () => {
  return (
    <section class="bg-[#0C0129] dark:bg-gray-900 py-28">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-6 lg:px-12">
        <div class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7">
          <img
            src="https://clerk.com/_next/image?url=%2Fimages%2Fhome%2Fsource-of-truth.svg&w=96&q=75"
            alt="exl"
          />
        </div>
        <h1 class="mb-4 text-3xl mx-auto font-extrabold tracking-normal leading-none md:text-4xl lg:text-5xl text-white">
          The most powerful APIs built specifically for the Modern Web
        </h1>
        <p class="mb-8 text-lg font-normal text-[#b3b3d0] tracking-tight leading-7 sm:px-16 xl:px-48 dark:text-gray-400">
          New technologies have made building on the web much easier; however, many dev tools
          haven’t kept up. At Clerk, we believe a component is worth 1,000 APIs and that they should
          work seamlessly in any stack so that you can build faster.
        </p>
        <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#6C47FF] hover:bg-opacity-90 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Learn more
            <svg
              class="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <svg
              class="mr-2 -ml-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
            </svg>
            Watch video
          </a>
        </div>
      </div>
      <div class="flex bg-[url('https://clerk.com/_next/image?url=%2Fimages%2Fdiamond-grid-dark.svg&w=1920&q=75')] flex-row bg-no-repeat bg-center bg-cover mx-auto justify-center items-center mt-8 text-gray-500">
        <img
          className="w-full object-fill"
          src="https://clerk.com/_next/image?url=%2Fimages%2Fhome%2Fframeworks.png&w=1920&q=75"
          alt=""
        />
      </div>
    </section>
  )
}

export default CTA2
