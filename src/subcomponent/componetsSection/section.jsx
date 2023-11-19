import React from "react";
import logo from "../../../src/componentsLogo.png";
const Section = () => {
  return (
    <div class="relative mx-auto w-full max-w-container space-y-20 px-4 pt-20 sm:px-6 lg:px-8 pb-20">
      <section id="product-marketing" class="scroll-mt-28">
        <h2 class="text-xl font-bold text-slate-900">
          Social Media Components
        </h2>
        <p class="mt-3 text-sm leading-7 text-slate-500">
          Social media components, sign in forms, sign up forms — everything you
          need to build beautiful marketing webapps.
        </p>
        <div class="mt-10 divide-y divide-slate-100 border-t border-slate-100 lg:mt-12">
          <section
            id="product-marketing-sections"
            class="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4"
          >
            <h3 class="text-base font-semibold text-slate-900">
              Listed components
            </h3>
            <ul class="col-span-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
              <li>
                <div class="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div class="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src={logo}
                      alt=""
                      class="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 class="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/social/sections/signin">
                      <span class="absolute -inset-2.5 z-10"></span>
                      <span class="relative">Login Components</span>
                    </a>
                  </h4>
                  <p class="relative mt-1.5 text-xs font-medium text-slate-500">
                    8 components
                  </p>
                </div>
              </li>
              <li>
                <div class="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div class="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src={logo}
                      alt=""
                      class="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 class="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/social/sections/signup">
                      <span class="absolute -inset-2.5 z-10"></span>
                      <span class="relative">Sign up Components</span>
                    </a>
                  </h4>
                  <p class="relative mt-1.5 text-xs font-medium text-slate-500">
                    8 components
                  </p>
                </div>
              </li>
              <li>
                <div class="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div class="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src={logo}
                      alt=""
                      class="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 class="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/social/sections/comment">
                      <span class="absolute -inset-2.5 z-10"></span>
                      <span class="relative">Comment Components</span>
                    </a>
                  </h4>
                  <p class="relative mt-1.5 text-xs font-medium text-slate-500">
                    6 components
                  </p>
                </div>
              </li>
              <li>
                <div class="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div class="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src={logo}
                      alt=""
                      class="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 class="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/social/sections/posts">
                      <span class="absolute -inset-2.5 z-10"></span>
                      <span class="relative">Create Post</span>
                    </a>
                  </h4>
                  <p class="relative mt-1.5 text-xs font-medium text-slate-500">
                    6 components
                  </p>
                </div>
              </li>
              <li>
                <div class="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div class="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src={logo}
                      alt=""
                      class="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 class="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/social/sections/image-Gallery">
                      <span class="absolute -inset-2.5 z-10"></span>
                      <span class="relative">Image Gallery Components</span>
                    </a>
                  </h4>
                  <p class="relative mt-1.5 text-xs font-medium text-slate-500">
                    2 components
                  </p>
                </div>
              </li>
              <li>
                <div class="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div class="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src={logo}
                      alt=""
                      class="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 class="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/social/sections/users">
                      <span class="absolute -inset-2.5 z-10"></span>
                      <span class="relative">Users Indicators</span>
                    </a>
                  </h4>
                  <p class="relative mt-1.5 text-xs font-medium text-slate-500">
                    2 components
                  </p>
                </div>
              </li>
              <li>
                <div class="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div class="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src={logo}
                      alt=""
                      class="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 class="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/social/sections/forms">
                      <span class="absolute -inset-2.5 z-10"></span>
                      <span class="relative">Forms Components</span>
                    </a>
                  </h4>
                  <p class="relative mt-1.5 text-xs font-medium text-slate-500">
                    4 components
                  </p>
                </div>
              </li>
              <li>
                <div class="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div class="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src={logo}
                      alt=""
                      class="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 class="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/components/social/sections/toast">
                      <span class="absolute -inset-2.5 z-10"></span>
                      <span class="relative">Social Media Toasts</span>
                    </a>
                  </h4>
                  <p class="relative mt-1.5 text-xs font-medium text-slate-500">
                    4 components
                  </p>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Section;
