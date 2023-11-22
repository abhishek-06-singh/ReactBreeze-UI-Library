import React from "react";

const HeroSubComp = () => {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-center pt-12 md:pt-[5.75rem] z-20 mt-28"
      style={{
        backgroundImage: 'url("https://tailwindui.com/img/beams-home@95.jpg")',
      }}
    >
      <div class="absolute inset-y-0 hidden w-full min-w-[1360px] "></div>
      <div class="mx-auto max-w-container px-4 pt-4 sm:px-6 lg:flex lg:px-8">
        <div class="relative z-20 mx-auto max-w-[40rem] pb-16 pt-16 lg:mx-0 lg:w-[40rem] lg:max-w-none lg:flex-none lg:pb-24 lg:pr-4 lg:pt-20">
          <h1 class="text-base font-semibold leading-7 text-pink-400">
            By Abhishek Singh Chauhan
          </h1>
          <p class="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-black sm:text-5xl sm:leading-[3.5rem]">
            Beautiful UI components, crafted with Tailwind CSS and React.
          </p>
          <div class="flex flex-wrap mt-4">
            <div class="flex items-center text-sm font-medium text-slate-500">
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 flex-none stroke-current text-slate-400"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 4.15h22.5l-2 20.5-9.25 4-9.25-4-2-20.5Z"></path>
                <path d="M20.5 9.15H12v5.5h8.5v6l-4.25 2-4.25-2v-2.5"></path>
              </svg>
              <span class="ml-2.5">HTML</span>
            </div>
            <div class="flex items-center text-sm font-medium text-slate-500 ml-6">
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 flex-none stroke-current text-slate-400"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <ellipse cx="16" cy="16" rx="13" ry="5"></ellipse>
                <ellipse
                  cx="16"
                  cy="16"
                  rx="13"
                  ry="5"
                  transform="rotate(60 16 16)"
                ></ellipse>
                <ellipse
                  rx="13"
                  ry="5"
                  transform="matrix(-.5 .86603 .86603 .5 16 16)"
                ></ellipse>
                <circle cx="16" cy="16" r="2"></circle>
              </svg>
              <span class="ml-2.5">React</span>
            </div>
            <div class="flex items-center text-sm font-medium text-slate-500 ml-6">
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 flex-none stroke-current text-slate-400"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M19.924 5 16 11.644 12.075 5H3l13 23L29 5h-9.076Z"></path>
                <path d="M19.879 5 16 11.26 12.121 5H8l8 13 8-13h-4.121Z"></path>
              </svg>
              <span class="ml-2.5">Vue</span>
            </div>
          </div>
          <p class="mt-4 text-base leading-7 text-gray-700">
            🚀✨ Elevate your Tailwind CSS projects with a treasure trove of
            professionally designed, fully responsive components! 🌈 Expertly
            crafted and ready to drop into your projects, these components are a
            dream come true for developers. 💻 Customize them to your heart's
            content and watch your designs come to life! Explore the endless
            possibilities, and let your creativity shine like a star in the
            digital universe! 🌟🎨✨ Unleash the power of Tailwind CSS with our
            collection of components and take your web development journey to
            new heights! 🚀💡🔥
          </p>
          <div class="mt-8 flex gap-4">
            <a
              class="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700"
              href=""
            >
              <span>
                Live preview
                <span aria-hidden="true" class="text-slate-400 sm:inline">
                  →
                </span>
              </span>
            </a>
            <a
              class="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 "
              href="/documentation"
            >
              <span>
                Documentation{" "}
                <span aria-hidden="true" class="text-black/25 sm:inline">
                  →
                </span>
              </span>
            </a>
          </div>
        </div>
        <div class="relative z-10 mt-12 hidden select-none lg:flex">
          <div class="z-20 flex flex-col">
            <div class="relative p-4">
              <div class="absolute bottom-0 left-11 right-0 top-8 bg-slate-900/[0.03]"></div>
              <div class="pointer-events-auto relative z-10 w-[24.125rem] rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-700 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
                <div>
                  <div class="flex items-center px-3.5 py-2.5 text-slate-400">
                    <svg
                      class="mr-2 h-5 w-5 stroke-slate-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                    Search projects...
                  </div>
                  <div class="border-t border-slate-400/20 px-3.5 py-3">
                    <div class="mb-1.5 text-[0.6875rem] font-semibold text-slate-500">
                      Recent searches
                    </div>
                    <div class="flex items-center rounded-md p-1.5">
                      <svg
                        class="mr-2.5 h-5 w-5 flex-none stroke-slate-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                        ></path>
                      </svg>
                      ReactBreeze🚀
                    </div>
                    <div class="flex items-center rounded-md p-1.5">
                      <svg
                        class="mr-2.5 h-5 w-5 flex-none stroke-slate-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                        ></path>
                      </svg>
                      Laravel LLC / Conference Branding
                    </div>
                  </div>
                  <div class="border-t border-slate-400/20 px-3.5 py-3">
                    <div class="flex items-center rounded-md p-1.5">
                      <svg
                        class="mr-2.5 h-5 w-5 flex-none stroke-slate-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                      Add new file...
                    </div>
                    <div class="flex items-center rounded-md p-1.5">
                      <svg
                        class="mr-2.5 h-5 w-5 flex-none stroke-slate-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
                      </svg>
                      Add new folder...
                    </div>
                    <div class="flex items-center rounded-md p-1.5">
                      <svg
                        class="mr-2.5 h-5 w-5 flex-none stroke-slate-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
                      </svg>
                      Add hashtag...
                    </div>
                    <div class="flex items-center rounded-md p-1.5 bg-pink-400 text-white">
                      <svg
                        class="mr-2.5 h-5 w-5 flex-none stroke-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                      </svg>
                      Add label...
                    </div>
                  </div>
                </div>
              </div>
              <div class="z-0">
                <div class="absolute -right-[95%] left-0 top-8 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div class="absolute -bottom-16 -top-2 right-0 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div class="absolute -right-2/3 top-px -mb-px flex h-8 items-end overflow-hidden">
                  <div class="flex -mb-px h-[2px] w-80 -scale-x-100">
                    <div class="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    <div class="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative ml-6 flex items-center justify-end">
              <div class="relative p-4">
                <div class="pointer-events-auto h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out bg-slate-900/10 ring-slate-900/5">
                  <div class="h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out"></div>
                </div>
                <div class="z-0">
                  <div class="absolute -top-full bottom-2/3 left-0 w-px bg-slate-900/[0.2] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                </div>
              </div>
              <div class="relative p-4">
                <div class="pointer-events-auto relative inline-flex rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50 hover:text-slate-900">
                  <div class="flex px-3 py-2">
                    <svg class="mr-2.5 h-5 w-5 flex-none fill-slate-400">
                      <path d="M5 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14l-5-2.5L5 18V4Z"></path>
                    </svg>
                    Bookmark
                  </div>
                  <div class="border-l border-slate-400/20 px-2.5 py-2">
                    12k
                  </div>
                </div>
                <div class="z-0">
                  <div class="absolute -bottom-8 -top-12 right-0 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div class="absolute -bottom-8 -top-12 left-0 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                </div>
              </div>
              <div class="relative p-4">
                <div class="pointer-events-auto rounded-md bg-pink-400 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-pink-500">
                  Button A
                </div>
              </div>
              <div class="z-0">
                <div class="absolute -left-12 -right-4 top-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div class="absolute -right-4 bottom-0 left-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
              </div>
            </div>
          </div>
          <div class="relative z-10 mt-8">
            <div class="relative p-4">
              <div class="w-[19.875rem] rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
                <div class="flex items-center p-4 pb-0">
                  <img
                    src="https://media.licdn.com/dms/image/D4D03AQGtGeoI2HlOsg/profile-displayphoto-shrink_400_400/0/1672082959946?e=1706140800&v=beta&t=9YfXoZPqtvePYl2XmllpAeA-pyYddSfklNue_YWie-8"
                    alt=""
                    class="h-10 w-10 flex-none rounded-full"
                  />
                  <div class="ml-4 flex-auto">
                    <div class="font-medium">Abhishek</div>
                    <div class="mt-1 text-slate-500">
                      Sent you an invite to connect.
                    </div>
                  </div>
                </div>
                <div class="flex gap-3 p-4">
                  <div class="pointer-events-auto rounded-md bg-pink-400 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-pink-500">
                    Accept
                  </div>
                  <div class="pointer-events-auto rounded-md px-4 py-2 text-center font-medium shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50">
                    Decline
                  </div>
                </div>
              </div>
              <div class="z-0">
                <div class="absolute -left-12 -right-4 bottom-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                <div class="absolute -bottom-16 -top-2 left-[21.875rem] w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
              </div>
            </div>
            <div class="relative p-4">
              <div class="w-[24.5rem] divide-y divide-slate-400/20 rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
                <div class="flex items-center p-4">
                  <img
                    src="https://yt3.googleusercontent.com/XtP3zfVVv5IilGdFpFsgPLMef9e4EERd0O3GZz8S-QcWKQOPyoSm_3ccvQ4xvVSjtnnfwC5ENA=s900-c-k-c0x00ffffff-no-rj"
                    alt=""
                    class="h-10 w-10 flex-none rounded-full"
                  />
                  <div class="ml-4 flex-auto">
                    <div class="font-medium">Hasbulla</div>
                    <div class="mt-1 text-slate-700">@hasbullaufc</div>
                  </div>
                  <div class="pointer-events-auto ml-4 flex-none rounded-md px-2 py-[0.3125rem] font-medium text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50">
                    View
                  </div>
                </div>
                <div class="flex items-center p-4">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                    class="h-10 w-10 flex-none rounded-full"
                  />
                  <div class="ml-4 flex-auto">
                    <div class="font-medium">Dana White</div>
                    <div class="mt-1 text-slate-700">@dana</div>
                  </div>
                  <div class="pointer-events-auto ml-4 flex-none rounded-md px-2 py-[0.3125rem] font-medium text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50">
                    View
                  </div>
                </div>
                <div class="p-4">
                  <div class="pointer-events-auto rounded-md px-4 py-2 text-center font-medium shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50">
                    View all
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative z-20 sm:z-auto">
        <div class="mx-auto max-w-container px-4 pb-16 sm:px-6 lg:px-8">
          <div class="relative mx-auto grid max-w-[40rem] grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            <div class="flex">
              <div class="p-0.5">
                <svg
                  class="h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-pink-500/[.12]"
                  viewBox="0 0 40 40"
                  fill="none"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z"
                    class="fill-pink-50 stroke-pink-500"
                  ></path>
                  <path
                    d="M27 25.335L30.25 27l-6.603 3.382a8 8 0 01-7.294 0L9.75 27 13 25.335m14-6.999L30.25 20l-6.603 3.382a8 8 0 01-7.294 0L9.75 20 13 18.336"
                    class="stroke-pink-500/50"
                  ></path>
                  <path
                    d="M9.75 13l9.338-4.783a2 2 0 011.824 0L30.25 13l-6.603 3.382a8 8 0 01-7.294 0L9.75 13z"
                    class="stroke-pink-500"
                  ></path>
                </svg>
              </div>
              <div class="ml-6">
                <h2 class="text-sm font-semibold leading-6 text-slate-900">
                  500+ Components
                </h2>
                <p class="mt-2 text-sm leading-6 text-slate-700">
                  Beautifully designed, expertly crafted components that follow
                  all accessibility best practices and are easy to customize.
                </p>
              </div>
            </div>
            <div class="flex">
              <div class="p-0.5">
                <svg
                  class="h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-pink-500/[.12]"
                  viewBox="0 0 40 40"
                  fill="none"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z"
                    class="fill-pink-50 stroke-pink-500"
                  ></path>
                  <path
                    d="M22.25 11.75l-4.5 16.5"
                    class="stroke-pink-500/50"
                  ></path>
                  <path
                    d="M16.25 7.75h-.5a4 4 0 00-4 4v4.007a3 3 0 01-.88 2.122 3 3 0 000 4.242 3 3 0 01.88 2.122v4.007a4 4 0 004 4h.5m7.5-24.5h.5a4 4 0 014 4v4.007a3.002 3.002 0 00.878 2.122 3 3 0 010 4.242 3 3 0 00-.878 2.122v4.007a4 4 0 01-4 4h-.5"
                    class="stroke-pink-500"
                  ></path>
                </svg>
              </div>
              <div class="ml-6">
                <h2 class="text-sm font-semibold leading-6 text-slate-900">
                  React, Vue, and HTML
                </h2>
                <p class="mt-2 text-sm leading-6 text-slate-700">
                  Interactive examples for React and Vue powered by Headless UI,
                  plus vanilla HTML if you’d rather write any necessary JS
                  yourself.
                </p>
              </div>
            </div>
            <div class="flex">
              <div class="p-0.5">
                <svg
                  class="h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-pink-500/[.12]"
                  viewBox="0 0 40 40"
                  fill="none"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z"
                    class="fill-pink-50 stroke-pink-500"
                  ></path>
                  <path
                    d="M7.75 21.25v-1.5a4 4 0 014-4h7.5m5 5v7.5a4 4 0 01-4 4h-1.5M27.75 32.25h.5a4 4 0 004-4v-10.5m-10-10h-10.5a4 4 0 00-4 4v.5"
                    class="stroke-pink-500/50"
                  ></path>
                  <path d="M31.5 8.5l-23 23" class="stroke-pink-500"></path>
                  <path
                    d="M25.75 7.75h4.5a2 2 0 012 2v4.5m-18 18h-4.5a2 2 0 01-2-2v-4.5"
                    class="stroke-pink-500"
                  ></path>
                </svg>
              </div>
              <div class="ml-6">
                <h2 class="text-sm font-semibold leading-6 text-slate-900">
                  Fully Responsive
                </h2>
                <p class="mt-2 text-sm leading-6 text-slate-700">
                  Every example is fully responsive and carefully designed and
                  implemented to look great at any screen size.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pointer-events-none absolute inset-0 shadow-[inset_0_-1px_1px_rgba(0,0,0,0.06)]"></div>
    </div>
  );
};

export default HeroSubComp;
