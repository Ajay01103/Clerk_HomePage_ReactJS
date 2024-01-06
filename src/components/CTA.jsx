import { Button } from "@material-tailwind/react"
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
      <div class="grid md:grid-cols-2 gap-4 md:gap-4 sm:pt-16 xl:gap-18 md:items-center">
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
                  class="text-white flex items-center justify-center bg-[#6c47ff] hover:bg-opacity-90 focus:outline-none focus:ring-4 focus:ring-[#b2a0fc] font-medium rounded-full text-md px-8 py-3.5 text-center mb-2 dark:hover:hover:bg-opacity-90 dark:focus:ring-purple-900"
                >
                  {"<SignIn/>"}
                </button>

                <button
                  onClick={() => handleButtonClick(2)}
                  type="button"
                  class="text-white flex items-center justify-center bg-[#6c47ff] hover:bg-opacity-90 focus:outline-none focus:ring-4 focus:ring-[#b2a0fc] font-medium rounded-full text-md px-8 py-3.5 text-center mb-2 dark:hover:hover:bg-opacity-90 dark:focus:ring-purple-900"
                >
                  {"<SignUp/>"}
                </button>

                <button
                  onClick={() => handleButtonClick(3)}
                  type="button"
                  class="text-white flex items-center justify-center bg-[#6c47ff] hover:bg-opacity-90 focus:outline-none focus:ring-4 focus:ring-[#b2a0fc] font-medium rounded-full text-md px-8 py-3.5 text-center mb-2 dark:hover:hover:bg-opacity-90 dark:focus:ring-purple-900"
                >
                  {"<UserButton/>"}
                </button>

                <button
                  onClick={() => handleButtonClick(4)}
                  type="button"
                  class="text-white flex items-center justify-center bg-[#6c47ff] hover:bg-opacity-90 focus:outline-none focus:ring-4 focus:ring-[#b2a0fc] font-medium rounded-full text-md px-8 py-2.5 text-center mb-2 dark:hover:hover:bg-opacity-90 dark:focus:ring-purple-900"
                >
                  {"<UserProfile/>"}
                </button>
              </div>
            </div>
          </section>

          {currentImage && (
            <div className="w-full h-[700px] bg-[url('https://clerk.com/_next/image?url=%2Fimages%2Fcomponents%2Fthemes%2Fmobile%2Flight-bg.png&w=1920&q=75')] bg-no-repeat bg-cover bg-center container content-center object-fill">
              <img
                class="w-[713px] h-[700px] rounded-md object-contain"
                src={currentImage}
                alt="Image"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CTA
