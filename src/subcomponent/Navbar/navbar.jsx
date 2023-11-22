import React from "react";
import Logo from "../../components/social/assets/navlogo.png";
const Navbar = () => {
  return (
    <>
      <header className="relative z-50 w-full flex-none text-sm font-semibold leading-6 text-slate-900">
        <nav
          aria-label="Global"
          className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 pt-5 mb-10"
        >
          <div className="relative flex items-center ">
            <a className="flex-none text-slate-900" href="/">
              <img src={Logo} alt="" className=" w-48" />
            </a>
            <a
              className="group -my-2 ml-6 hidden items-center gap-2 rounded-full bg-white/25 px-3 py-2 text-xs text-slate-900 ring-1 ring-inset ring-black/[0.08] hover:bg-white/50 hover:ring-black/[0.13] sm:flex md:ml-8 lg:hidden xl:flex"
              href="/templates/studio"
            >
              <svg className="h-4 w-4 fill-pink-400" viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                  clip-rule="evenodd"
                ></path>
              </svg>

              <svg
                width="2"
                height="2"
                aria-hidden="true"
                className="fill-slate-900"
              >
                <circle cx="1" cy="1" r="1"></circle>
              </svg>
              <span className="font-medium">
                <span className="md:hidden">Use our template</span>
                <span className="hidden md:inline">
                  Our beautiful seemless template
                </span>
              </span>
              <svg
                viewBox="0 0 5 8"
                className="h-2 w-[5px] fill-black/30 group-hover:fill-black/60"
                fill-rule="evenodd"
                clip-rule="evenodd"
                aria-hidden="true"
              >
                <path d="M.2.24A.75.75 0 0 1 1.26.2l3.5 3.25a.75.75 0 0 1 0 1.1L1.26 7.8A.75.75 0 0 1 .24 6.7L3.148 4 .24 1.3A.75.75 0 0 1 .2.24Z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
