import React from "react";
import logo from "../../Your Component is here (2).png";
const Section = () => {
  return (
    <div className="relative mx-auto w-full max-w-container space-y-20 px-4  pt-20 sm:px-6 lg:px-8 pb-20 bg-neutral-900">
      <section id="product-marketing" className="scroll-mt-28">
        <h2 className="text-xl font-bold text-slate-300">Social Breeze! 🚀</h2>
        <p className="mt-3 text-sm leading-7 text-slate-100">
          Turbocharge your social media presence with SocialBreeze! 🚀 Discover
          a suite of vibrant components tailored for seamless integration,
          customize with flair 🎨, and boost engagement effortlessly. 💻✨
          Elevate your social experience in just a click!
        </p>
        <div className="mt-10 divide-y divide-rose-400 border-t border-rose-400 lg:mt-12">
          <section
            id="product-marketing-sections"
            className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4"
          >
            <h3 className="text-base font-semibold text-slate-300">
              Listed components
            </h3>
            <ul className="col-span-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-700 before:opacity-30 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-rose-300 ring-1 ring-gray-900/10">
                    <img
                      src={logo}
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-300 group-hover:text-rose-400">
                    <a href="/components/social/sections/signin">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Login Components</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    8 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-700 before:opacity-30 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src={logo}
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-300 group-hover:text-pink-400">
                    <a href="/components/social/sections/signup">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Sign up Components</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    8 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-700 before:opacity-30 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src={logo}
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-300 group-hover:text-pink-400">
                    <a href="/components/social/sections/comment">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Comment Components</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    6 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-700 before:opacity-30 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src={logo}
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-300 group-hover:text-pink-400">
                    <a href="/components/social/sections/posts">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Create Post</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    6 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-700 before:opacity-30 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src={logo}
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-300 group-hover:text-pink-400">
                    <a href="/components/social/sections/image-Gallery">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Image Gallery Components</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    2 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-700 before:opacity-30 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src={logo}
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-300 group-hover:text-pink-400">
                    <a href="/components/social/sections/users">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Users Indicators</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    2 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-700 before:opacity-30 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src={logo}
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-300 group-hover:text-pink-400">
                    <a href="/components/social/sections/forms">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Forms Components</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    4 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-700 before:opacity-30 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src={logo}
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-300 group-hover:text-pink-400">
                    <a href="/components/social/sections/toast">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Social Media Toasts</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    4 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-700 before:opacity-30 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src={logo}
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-300 group-hover:text-pink-600">
                    <a href="/components/social/sections/feed">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Feeds</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-700 before:opacity-30 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src={logo}
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-300 group-hover:text-pimk-600">
                    <a href="/components/application-ui/overlays/notifications">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Notifications</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    components
                  </p>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </section>
      <hr />
      <section id="Elements">
        <h2 className="text-xl font-bold text-slate-300">Web app Breeze! 🚀</h2>
        <p className="mt-3 text-sm leading-7 text-slate-100">
          Supercharge your web app with ReactBreeze! 🚀 Dive into a rich variety
          of components, tailor them with ease 🎨, and seamlessly integrate into
          your project using one-click snippets. 💻✨ Elevate your web app
          experience effortlessly!
        </p>
        <div className="mt-10 divide-y divide-rose-400 border-t border-rose-500 lg:mt-12">
          <section
            id="product-marketing-sections"
            className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4"
          >
            <h3 className="text-base font-semibold text-slate-300">
              Listed components
            </h3>
            <ul className="col-span-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-700 before:opacity-30 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-rose-500 ring-1 ring-lime-900/10">
                    <img
                      src={logo}
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-300 group-hover:text-pink-400">
                    <a href="/components/social/sections/fly-button">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Fly Components</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    8 components
                  </p>
                </div>
              </li>

              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-700 before:opacity-30 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src={logo}
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-300 group-hover:text-pink-400">
                    <a href="/components/social/sections/Questionaire">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Questionaire</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    8 components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-700 before:opacity-30 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src={logo}
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-300 group-hover:text-pink-400">
                    <a href="/components/social/sections/cards">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Cards</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    8 components
                  </p>
                </div>
              </li>

              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-700 before:opacity-30 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src={logo}
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-300 group-hover:text-pink-400">
                    <a href="/components/home-services/footer/footer">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Footers</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    8 components
                  </p>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </section>
      <hr />
      <section id="Elements">
        <h2 className="text-xl font-bold text-slate-300">
          Some Extra Breeze! 🚀
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          Explore the "Some Extra Breeze!" section and embark on a journey
          through a galaxy of dazzling React components. From stunning Profile
          Cards that bring personalities to life 🌟😎, to sleek Carts that
          redefine online shopping 🛒💳, we've curated a collection that adds an
          extra layer of excitement to your UI. Elevate your projects with these
          dynamic components and watch your web development experience transform
          into a joyful adventure! 🚀🌈🎨 Let the coding celebration begin!
          🎉🔥💻
        </p>
        <div className="mt-10 divide-y divide-rose-500 border-t border-rose-500 lg:mt-12">
          <section
            id="product-marketing-sections"
            className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4"
          >
            <h3 className="text-base font-semibold text-slate-900">
              Listed components
            </h3>
            <ul className="col-span-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-700 before:opacity-30 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src={logo}
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-300 group-hover:text-pink-400">
                    <a href="/components/home-services/add-address">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Add Address</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-700 before:opacity-30 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src={logo}
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-300 group-hover:text-pink-400">
                    <a href="/components/home-services/carts">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Carts</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-700 before:opacity-30 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src={logo}
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-300 group-hover:text-pink-400">
                    <a href="/components/social/sections/userProfile">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Profiles</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-700 before:opacity-30 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src={logo}
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-300 group-hover:text-pink-400">
                    <a href="/components/home-services/application">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Calenders</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    components
                  </p>
                </div>
              </li>
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-700 before:opacity-30 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src={logo}
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-300 group-hover:text-pink-400">
                    <a href="/components/musicplay">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Music Player</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    components
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
