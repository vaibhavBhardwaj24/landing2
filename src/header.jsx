import React from "react";

const Header = () => {
  return (
    <header className="navbar left-0 top-0 z-50 w-full border-stroke flex justify-center bg-white dark:border-stroke-dark dark:bg-black absolute">
      <div className="container relative max-w-[1400px]">
        <div className="flex items-center justify-between">
          <div className="block py-4 lg:py-0">
            <a className="block max-w-[145px] sm:max-w-[180px]" href="/">
              <img
                alt="Logo"
                fetchpriority="high"
                width="173"
                height="34"
                decoding="async"
                data-nimg="1"
                className="block dark:hidden"
                // style="color: transparent; width: auto; height: auto;"
                src="https://appline.demo.nextjstemplates.com/images/logo/logo.svg"
              />
              <img
                alt="Logo"
                fetchpriority="high"
                width="173"
                height="34"
                decoding="async"
                data-nimg="1"
                className="hidden dark:block"
                // style="color: transparent; width: auto; height: auto;"
                src="https://appline.demo.nextjstemplates.com/images/logo/logo-white.svg"
              />
            </a>
          </div>
          <button
            className="navbarOpen absolute right-4 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 flex-col items-center justify-center space-y-[6px] font-bold lg:hidden"
            aria-label="navbarOpen"
            name="navbarOpen"
          >
            <span className="block h-[2px] w-7 bg-black dark:bg-white"></span>
            <span className="block h-[2px] w-7 bg-black dark:bg-white"></span>
            <span className="block h-[2px] w-7 bg-black dark:bg-white"></span>
          </button>
          <div className="hidden menu-wrapper relative justify-between lg:flex">
            <button
              className="navbarClose fixed right-10 top-10 z-[9999] flex h-10 w-10 flex-col items-center justify-center font-bold lg:hidden"
              name="navbarClose"
              aria-label="navbarClose"
            >
              <span className="block h-[2px] w-7 rotate-45 bg-black dark:bg-white"></span>
              <span className="-mt-[2px] block h-[2px] w-7 -rotate-45 bg-black dark:bg-white"></span>
            </button>
            <nav className="fixed left-0 top-0 z-[999] flex h-screen w-full items-center justify-center bg-white bg-opacity-95 text-center backdrop-blur-sm dark:bg-black dark:bg-opacity-95 lg:static lg:h-auto lg:w-max lg:bg-transparent lg:bg-opacity-100  lg:backdrop-blur-none lg:dark:bg-transparent dark:lg:bg-opacity-100">
              <ul className="items-center space-y-3 lg:flex lg:space-x-8 lg:space-y-0 xl:space-x-10">
                <li className="menu-item">
                  <a
                    className="lg:py-7 ud-menu-scroll inline-flex items-center text-base font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary"
                    href="/#features"
                  >
                    Features
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    className="lg:py-7 ud-menu-scroll inline-flex items-center text-base font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary"
                    href="/#about"
                  >
                    About
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    className="lg:py-7 ud-menu-scroll inline-flex items-center text-base font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary"
                    href="/#work-process"
                  >
                    How It Works
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    className="lg:py-7 ud-menu-scroll inline-flex items-center text-base font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary"
                    href="/#support"
                  >
                    Support
                  </a>
                </li>
                <li className="submenu-item menu-item group relative">
                  <a
                    className="lg:py-7 submenu-taggler inline-flex items-center text-base font-medium text-black hover:text-primary group-hover:text-primary dark:text-white dark:hover:text-primary "
                    href="#"
                  >
                    Pages
                    <span className="pl-3">
                      <svg
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        className="fill-current "
                      >
                        <path d="M6.54564 5.09128L11.6369 0L13.0913 1.45436L6.54564 8L0 1.45436L1.45436 0L6.54564 5.09128Z"></path>
                      </svg>
                    </span>
                  </a>
                  <ul className="hidden submenu space-y-5 pt-5 duration-300 lg:invisible lg:absolute lg:top-[120%] lg:block lg:w-[250px] lg:rounded-lg lg:bg-white lg:px-8 lg:pb-5 lg:text-left lg:opacity-0 lg:shadow-card lg:group-hover:visible lg:group-hover:top-full lg:group-hover:opacity-100 dark:lg:border-transparent dark:lg:bg-[#15182A] lg:dark:shadow-card-dark">
                    <li>
                      <a
                        className="font-heading inline-flex items-center justify-center text-center text-base text-black hover:text-primary dark:text-white dark:hover:text-primary"
                        href="/blog"
                      >
                        Blog Grids
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-heading inline-flex items-center justify-center text-center text-base text-black hover:text-primary dark:text-white dark:hover:text-primary"
                        href="/error"
                      >
                        404 Error
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-heading inline-flex items-center justify-center text-center text-base text-black hover:text-primary dark:text-white dark:hover:text-primary"
                        href="/auth/signin"
                      >
                        Sign In
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-heading inline-flex items-center justify-center text-center text-base text-black hover:text-primary dark:text-white dark:hover:text-primary"
                        href="/auth/signup"
                      >
                        Sign Up
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mr-[60px] flex items-center justify-end lg:mr-0">
            <button className="mr-4 hidden h-[38px] w-[38px] items-center justify-center rounded-full bg-white text-black dark:bg-black dark:text-white sm:flex">
              <svg
                width="20"
                height="20"
                viewBox="0 0 18 18"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_369_1884)">
                  <path
                    d="M16.9347 15.3963L12.4816 11.7799C14.3168 9.26991 14.1279 5.68042 11.8338 3.41337C10.6194 2.19889 9.00003 1.52417 7.27276 1.52417C5.54549 1.52417 3.92617 2.19889 2.71168 3.41337C0.201738 5.92332 0.201738 10.0256 2.71168 12.5355C3.92617 13.75 5.54549 14.4247 7.27276 14.4247C8.91907 14.4247 10.4574 13.804 11.6719 12.6975L16.179 16.3409C16.287 16.4219 16.4219 16.4759 16.5569 16.4759C16.7458 16.4759 16.9077 16.3949 17.0157 16.26C17.2316 15.9901 17.2046 15.6122 16.9347 15.3963ZM7.27276 13.2102C5.86935 13.2102 4.5739 12.6705 3.57532 11.6719C1.52418 9.62076 1.52418 6.30116 3.57532 4.27701C4.5739 3.27843 5.86935 2.73866 7.27276 2.73866C8.67617 2.73866 9.97162 3.27843 10.9702 4.27701C13.0213 6.32815 13.0213 9.64775 10.9702 11.6719C9.99861 12.6705 8.67617 13.2102 7.27276 13.2102Z"
                    fill="currentColor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_369_1884">
                    <rect
                      width="17.2727"
                      height="17.2727"
                      fill="white"
                      transform="translate(0.363647 0.363647)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </button>
            <div className="cursor-pointer">
              <span className="block dark:hidden">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_11115)">
                    <path
                      d="M11 16.4998C9.5413 16.4998 8.14235 15.9204 7.1109 14.8889C6.07945 13.8575 5.49999 12.4585 5.49999 10.9998C5.49999 9.54115 6.07945 8.1422 7.1109 7.11075C8.14235 6.0793 9.5413 5.49984 11 5.49984C12.4587 5.49984 13.8576 6.0793 14.8891 7.11075C15.9205 8.1422 16.5 9.54115 16.5 10.9998C16.5 12.4585 15.9205 13.8575 14.8891 14.8889C13.8576 15.9204 12.4587 16.4998 11 16.4998ZM11 14.6665C11.9725 14.6665 12.9051 14.2802 13.5927 13.5926C14.2803 12.9049 14.6667 11.9723 14.6667 10.9998C14.6667 10.0274 14.2803 9.09475 13.5927 8.40711C12.9051 7.71948 11.9725 7.33317 11 7.33317C10.0275 7.33317 9.0949 7.71948 8.40727 8.40711C7.71963 9.09475 7.33332 10.0274 7.33332 10.9998C7.33332 11.9723 7.71963 12.9049 8.40727 13.5926C9.0949 14.2802 10.0275 14.6665 11 14.6665ZM10.0833 0.916504H11.9167V3.6665H10.0833V0.916504ZM10.0833 18.3332H11.9167V21.0832H10.0833V18.3332ZM3.22207 4.51809L4.51824 3.22192L6.46249 5.16617L5.16632 6.46234L3.22207 4.519V4.51809ZM15.5375 16.8335L16.8337 15.5373L18.7779 17.4816L17.4817 18.7778L15.5375 16.8335ZM17.4817 3.221L18.7779 4.51809L16.8337 6.46234L15.5375 5.16617L17.4817 3.22192V3.221ZM5.16632 15.5373L6.46249 16.8335L4.51824 18.7778L3.22207 17.4816L5.16632 15.5373ZM21.0833 10.0832V11.9165H18.3333V10.0832H21.0833ZM3.66666 10.0832V11.9165H0.916656V10.0832H3.66666Z"
                      fill="#181C31"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_1_11115">
                      <rect width="22" height="22" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className="hidden dark:block">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_841_9)">
                    <path
                      d="M8.83697 5.88205C8.8368 7.05058 9.18468 8.19267 9.83625 9.16268C10.4878 10.1327 11.4135 10.8866 12.4953 11.3284C13.5772 11.7701 14.766 11.8796 15.9103 11.6429C17.0546 11.4062 18.1025 10.8341 18.9203 9.99941V10.0834C18.9203 14.7243 15.1584 18.4862 10.5175 18.4862C5.87667 18.4862 2.11475 14.7243 2.11475 10.0834C2.11475 5.44259 5.87667 1.68066 10.5175 1.68066H10.6016C10.042 2.22779 9.59754 2.88139 9.29448 3.60295C8.99143 4.32451 8.83587 5.09943 8.83697 5.88205ZM3.7953 10.0834C3.79469 11.5833 4.29571 13.0403 5.21864 14.2226C6.14157 15.4049 7.4334 16.2446 8.88857 16.608C10.3437 16.9715 11.8787 16.8379 13.2491 16.2284C14.6196 15.6189 15.7469 14.5686 16.4516 13.2446C15.1974 13.54 13.8885 13.5102 12.6492 13.1578C11.4098 12.8054 10.281 12.1422 9.36988 11.2311C8.45877 10.32 7.79557 9.19119 7.44318 7.95181C7.0908 6.71243 7.06093 5.40357 7.3564 4.1494C6.28049 4.72259 5.38073 5.57759 4.75343 6.62288C4.12614 7.66817 3.79495 8.86438 3.7953 10.0834Z"
                      fill="white"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_841_9">
                      <rect
                        width="20.1667"
                        height="20.1667"
                        fill="white"
                        transform="translate(0.434204)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
            <a
              className="hidden px-6 py-[10px] text-base font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary sm:inline-block"
              href="/auth/signin"
            >
              Sign In
            </a>
            <a
              className="hidden rounded-md bg-primary px-[30px] py-[10px] text-base font-medium text-white hover:bg-opacity-90 sm:inline-block"
              href="/auth/signup"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
