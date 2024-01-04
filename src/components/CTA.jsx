import React, { useState } from "react"

const CTA = () => {
  const listItems = [
    {
      id: 1,
      name: "Sign In",
      image:
        "https://clerk.com/_next/image?url=%2Fimages%2Fcomponents%2Fcomponent-sign_in.svg&w=384&q=75",
    },
    {
      id: 2,
      name: "Sign Up",
      image:
        "https://clerk.com/_next/image?url=%2Fimages%2Fcomponents%2Fcomponent-sign_up.svg&w=384&q=75",
    },
    {
      id: 3,
      name: "User Profile",
      image:
        "https://clerk.com/_next/image?url=%2Fimages%2Fcomponents%2Fcomponent-user_profile.svg&w=384&q=75",
    },
    {
      id: 4,
      name: "User Button",
      image:
        "https://clerk.com/_next/image?url=%2Fimages%2Fcomponents%2Fcomponent-user_button.svg&w=384&q=75",
    },
  ]

  const [currentImage, setCurrentImage] = useState(
    "https://clerk.com/_next/image?url=%2Fimages%2Fcomponents%2Fcomponent-sign_in.svg&w=384&q=75"
  )

  const handleButtonClick = (imageNumber) => {
    // Logic to determine which image to display based on the button clicked
    switch (imageNumber) {
      case 1:
        setCurrentImage(
          "https://clerk.com/_next/image?url=%2Fimages%2Fcomponents%2Fcomponent-sign_in.svg&w=384&q=75"
        )
        break
      case 2:
        setCurrentImage(
          "https://clerk.com/_next/image?url=%2Fimages%2Fcomponents%2Fcomponent-sign_up.svg&w=384&q=75"
        )
        break
      case 3:
        setCurrentImage(
          "https://clerk.com/_next/image?url=%2Fimages%2Fcomponents%2Fcomponent-user_profile.svg&w=384&q=75"
        )
        break
      case 4:
        setCurrentImage(
          "https://clerk.com/_next/image?url=%2Fimages%2Fcomponents%2Fcomponent-user_button.svg&w=384&q=75"
        )
        break
      // Add cases for other buttons as needed
      default:
        setCurrentImage()
    }
  }

  return (
    <div class="w-full mx-auto px-4 sm:px-6 lg:px-8 bg-[#0c0129]">
      <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div>
          <img
            className="px-4"
            src="https://clerk.com/_next/image?url=%2Fimages%2Fcomponents%2Flock-icon.svg&w=96&q=75"
            alt="any"
          />
          <h1 class="block text-3xl font-bold px-4 sm:text-4xl lg:text-6xl lg:leading-tight text-white">
            Auth & User Components
          </h1>
          <p class="mt-4 md:text-2xl px-4 text-md text-gray-50">
            Everything you need to onboard your users, and let them manage their account.
          </p>
          <p className="mt-4 px-4 text-gray-50">
            An optimized sign in experience thats also completely customizable. Choose the auth
            strategies you need passwords, email codes or links, OAuth and more.
          </p>

          <div class="mt-10 px-4 flex flex-row gap-4 w-full sm:inline-flex">
            <a
              class="py-3 px-10 inline-flex justify-center items-center gap-x-2 text-lg font-semibold rounded-lg border border-transparent bg-[#6c47ff] text-white disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              Start Building
              {/* <svg
                class="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg> */}
            </a>
            <a
              class="py-3 px-10 inline-flex justify-center items-center gap-x-2 text-lg font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              Contact sales team
            </a>
          </div>
        </div>

        {/* Buttons and Image */}
        <div class="relative py-4 ms-4">
          <section class="bg-[#0C0129] dark:bg-gray-900">
            <div class="py-6 lg:py-8 mx-auto max-w-screen-xl px-4">
              <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-4 dark:text-gray-400">
                <button
                  onClick={() => handleButtonClick(1)}
                  type="button"
                  class="text-white bg-[#6c47ff] hover:bg-opacity-90 focus:outline-none focus:ring-4 focus:ring-[#b2a0fc] font-medium rounded-full text-md px-6 py-4 text-center mb-2 dark:hover:hover:bg-opacity-90 dark:focus:ring-purple-900"
                >
                  {"<SignIn/>"}
                </button>

                <button
                  onClick={() => handleButtonClick(2)}
                  type="button"
                  class="text-white bg-[#6c47ff] hover:bg-opacity-90 focus:outline-none focus:ring-4 focus:ring-[#b2a0fc] font-medium rounded-full text-md px-6 py-4 text-center mb-2 dark:hover:hover:bg-opacity-90 dark:focus:ring-purple-900"
                >
                  {"<SignUp/>"}
                </button>

                <button
                  onClick={() => handleButtonClick(3)}
                  type="button"
                  class="text-white bg-[#6c47ff] hover:bg-opacity-90 focus:outline-none focus:ring-4 focus:ring-[#b2a0fc] font-medium rounded-full text-md px-6 py-4 text-center mb-2 dark:hover:hover:bg-opacity-90 dark:focus:ring-purple-900"
                >
                  {"<UserButton/>"}
                </button>

                <button
                  onClick={() => handleButtonClick(4)}
                  type="button"
                  class="text-white bg-[#6c47ff] hover:bg-opacity-90 focus:outline-none focus:ring-4 focus:ring-[#b2a0fc] font-medium rounded-full text-md px-6 py-4 text-center mb-2 dark:hover:hover:bg-opacity-90 dark:focus:ring-purple-900"
                >
                  {"<UserProfile/>"}
                </button>
              </div>
            </div>
          </section>

          {currentImage && (
            <img
              class="w-full rounded-md"
              src={currentImage}
              // src="https://clerk.com/_next/image?url=%2Fimages%2Fcomponents%2Fcomponent-sign_in.svg&w=384&q=75"
              alt="Image"
            />
          )}
          <div class="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"></div>
        </div>
      </div>
    </div>
  )
}

export default CTA
