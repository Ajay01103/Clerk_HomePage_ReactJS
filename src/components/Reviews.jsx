const Reviews = () => {
  return (
    <div class="overflow-hidden bg-[#0C0129]">
      <div class="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="max-w-2xl w-3/4 lg:w-1/2 mb-6 sm:mb-10 md:mb-16">
          <img
            className="py-4"
            src="https://clerk.com/_next/image?url=%2Fimages%2Fhome%2Fdark-logo.svg&w=64&q=75"
            alt=""
          />
          <span className="text-[#6365ae] p-1 my-4 text-xl">Why Clerk ?</span>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl text-gray-200 font-semibold">
            Created by engineers and founders, we built Clerk from the ground up to solve our own
            problem.
          </h2>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="flex h-auto">
            <div class="flex flex-col bg-[#0A0C3D] rounded-xl dark:bg-gray-400">
              <div class="flex-auto p-4 md:p-6">
                <img
                  src="https://clerk.com/_next/image?url=%2Fimages%2Fhome%2Fcard-1.svg&w=1920&q=75"
                  alt=""
                />
                <h3 className="text-gray-100 text-left text-xl font-semibold py-4">
                  Developer Experience
                </h3>
                <p class="text-base md:text-lg sm:text-sm text-gray-100 dark:text-gray-200 leading-3">
                  We are a team of dev-tool experts, and know all the pain points involved with
                  building for the web. We’ve painstakingly built the authentication platform you’ve
                  always wished you had — one that “just works”, and one that still keeps you in
                  control of your user data and user experience.
                </p>
              </div>

              <div class="p-4 bg-[#191c62] rounded-b-xl md:px-7 dark:bg-slate-700">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <img
                      class="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                      src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                      alt="Image Description"
                    />
                  </div>

                  <div class="grow ms-3">
                    <p class="text-sm sm:text-base font-semibold text-gray-200">Josh Tyson</p>
                    <p class="text-xs text-gray-200 dark:text-gray-300">
                      Product Manager | Capsule
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex h-auto">
            <div class="flex flex-col bg-[#0A0C3D] rounded-xl dark:bg-slate-900">
              <div class="flex-auto p-4 md:p-6">
                <img
                  src="https://clerk.com/_next/image?url=%2Fimages%2Fhome%2Fcard-2.svg&w=1920&q=75"
                  alt=""
                />
                <h3 className="text-xl text-gray-100 font-semibold py-4 text-left">
                  Secure by default
                </h3>
                <p class="text-base leading-3 md:text-lg sm:text-sm text-gray-200 dark:text-gray-300">
                  We are a team of experienced web-security experts focused on helping you ship your
                  product securely, without having to sweat over all the intricate security details.
                  All of our APIs are built following industry best-practices and are regularly
                  audited by 3rd parties.
                </p>
              </div>

              <div class="p-4 bg-[#191c62] rounded-b-xl md:px-7 dark:bg-slate-700">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <img
                      class="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                      alt="Image Description"
                    />
                  </div>

                  <div class="grow ms-3">
                    <p class="text-sm sm:text-base font-semibold text-gray-200">Luisa</p>
                    <p class="text-xs text-gray-200">Senior Director of Operations | Fitbit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex h-auto">
            <div class="flex flex-col bg-[#0A0C3D] rounded-xl dark:bg-slate-900">
              <div class="flex-auto p-4 md:p-6">
                <img
                  src="https://clerk.com/_next/image?url=%2Fimages%2Fhome%2Fcard-3.svg&w=1920&q=75"
                  alt=""
                />
                <h3 className="text-xl text-gray-100 font-semibold py-4 text-left">
                  Dedicated Partners
                </h3>
                <p class="text-base md:text-lg sm:text-sm xs:text-xs md:leading-3 xs:leading-10 text-gray-200 dark:text-gray-300">
                  We know auth is core to your app, so we go above and beyond to make sure you’re
                  well supported. There’s always someone on call to answer any questions you may
                  have, or there in case of emergencies. We offer industry leading SLAs and support
                  agreements.
                </p>
              </div>

              <div class="p-4 bg-[#191c62] rounded-b-xl md:px-7 dark:bg-slate-700">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <img
                      class="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                      src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                      alt="Image Description"
                    />
                  </div>

                  <div class="grow ms-3">
                    <p class="text-sm sm:text-base font-semibold text-gray-200">Alisa Williams</p>
                    <p class="text-xs text-gray-200">Entrepreneur | Happy customer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div class="mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
          <div>
            <h4 class="text-lg sm:text-xl font-semibold text-white">Accuracy rate</h4>
            <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">99.95%</p>
            <p class="mt-1 text-gray-400">in fulfilling orders</p>
          </div>

          <div>
            <h4 class="text-lg sm:text-xl font-semibold text-white">Startup businesses</h4>
            <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">2,000+</p>
            <p class="mt-1 text-gray-400">partner with Preline</p>
          </div>

          <div>
            <h4 class="text-lg sm:text-xl font-semibold text-white">Happy customer</h4>
            <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">85%</p>
            <p class="mt-1 text-gray-400">this year alone</p>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Reviews
