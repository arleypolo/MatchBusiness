export function homeView() {
    const view = `
    <div class="text-center py-10 sm:py-14 bg-[#f6fcf9]">
      <!-- Texto superior con estrellita -->
      <!-- Badge -->
      <div class="flex justify-center mb-8">
        <div
          class="bg-blue-50 border border-blue-200 rounded-lg px-3 py-1 flex items-center gap-2"
        >
          <svg class="w-3 h-3" viewBox="0 0 10 10" fill="none">
            <path
              d="M5.16797 1.12902C5.18715 1.09028 5.21677 1.05767 5.25349 1.03488C5.29021 1.01208 5.33257 1 5.37579 1C5.41901 1 5.46137 1.01208 5.49809 1.03488C5.53481 1.05767 5.56443 1.09028 5.5836 1.12902L6.59422 3.17608C6.6608 3.31081 6.75908 3.42738 6.88062 3.51578C7.00217 3.60417 7.14334 3.66175 7.29204 3.68358L9.55216 4.01433C9.59499 4.02053 9.63522 4.0386 9.66831 4.06648C9.70141 4.09436 9.72604 4.13094 9.73942 4.17209C9.7528 4.21324 9.75441 4.25732 9.74404 4.29933C9.73368 4.34134 9.71177 4.37962 9.68079 4.40983L8.04629 6.00145C7.93849 6.1065 7.85784 6.23616 7.81128 6.37929C7.76471 6.52242 7.75363 6.67472 7.77897 6.82308L8.16485 9.07183C8.17241 9.11463 8.16779 9.1587 8.15151 9.199C8.13523 9.23931 8.10794 9.27422 8.07278 9.29976C8.03761 9.32531 7.99597 9.34045 7.9526 9.34347C7.90924 9.34649 7.8659 9.33726 7.82754 9.31683L5.80716 8.25458C5.67404 8.18468 5.52593 8.14816 5.37557 8.14816C5.22521 8.14816 5.0771 8.18468 4.94397 8.25458L2.92404 9.31683C2.88568 9.33713 2.8424 9.34627 2.79911 9.34319C2.75582 9.34011 2.71426 9.32495 2.67917 9.29942C2.64407 9.2739 2.61684 9.23904 2.60057 9.1988C2.58431 9.15857 2.57966 9.11457 2.58716 9.07183L2.9726 6.82352C2.99806 6.67509 2.98703 6.52269 2.94046 6.37947C2.89389 6.23626 2.81318 6.10652 2.70529 6.00145L1.07079 4.41027C1.03955 4.38009 1.01741 4.34175 1.0069 4.29961C0.996382 4.25747 0.997916 4.21322 1.01132 4.17191C1.02473 4.1306 1.04947 4.09388 1.08272 4.06595C1.11598 4.03801 1.15641 4.01997 1.19941 4.01389L3.4591 3.68358C3.60796 3.66192 3.74933 3.60442 3.87104 3.51601C3.99275 3.4276 4.09116 3.31095 4.15779 3.17608L5.16797 1.12902Z"
              stroke="#1C75BC"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.875"
            />
          </svg>
          <span class="text-blue-600 text-xs font-medium"
            >Powered by Innovation</span
          >
        </div>
      </div>
      <div class="text-center mb-8 px-2">
        <h1
          class="text-3xl sm:text-5xl font-bold text-gray-800 mb-6 leading-tight"
        >
          Connecting
          <span class="text-[#1e5bb6] font-bold">Coders</span>
          &
          <span class="text-[#2b9d4d] font-bold">Companies</span>
          <br />
          through Innovation
        </h1>
        <p class="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          Join the largest network of developers and innovative companies.
          Showcase your skills, solve real challenges, and build the future
          together.
        </p>
      </div>

      <!-- Two Cards -->
      <div
        class="flex flex-col md:flex-row md:gap-4 gap-8 justify-center items-center"
      >
        <!-- For Companies Card -->
        <div
          class="backdrop-blur-sm bg-white bg-opacity-80 rounded-xl p-6 shadow-lg max-w-sm w-full md:w-auto mb-6 md:mb-0"
        >
          <div
            class="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <svg class="w-8 h-8" viewBox="0 0 32 32" fill="none">
              <path
                d="M8 29.3333V5.33333C8 4.62609 8.28095 3.94781 8.78105 3.44771C9.28115 2.94762 9.95942 2.66667 10.6667 2.66667H21.3333C22.0406 2.66667 22.7189 2.94762 23.219 3.44771C23.719 3.94781 24 4.62609 24 5.33333V29.3333H8Z"
                stroke="#1C75BC"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.66667"
              />
              <path
                d="M8 16H5.33333C4.62609 16 3.94781 16.281 3.44771 16.781C2.94762 17.2811 2.66667 17.9594 2.66667 18.6667V26.6667C2.66667 27.3739 2.94762 28.0522 3.44771 28.5523C3.94781 29.0524 4.62609 29.3333 5.33333 29.3333H8"
                stroke="#1C75BC"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.66667"
              />
              <path
                d="M24 12H26.6667C27.3739 12 28.0522 12.281 28.5523 12.781C29.0524 13.2811 29.3333 13.9594 29.3333 14.6667V26.6667C29.3333 27.3739 29.0524 28.0522 28.5523 28.5523C28.0522 29.0524 27.3739 29.3333 26.6667 29.3333H24"
                stroke="#1C75BC"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.66667"
              />
              <path
                d="M13.3333 8H18.6667"
                stroke="#1C75BC"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.66667"
              />
              <path
                d="M13.3333 13.3333H18.6667"
                stroke="#1C75BC"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.66667"
              />
              <path
                d="M13.3333 18.6667H18.6667"
                stroke="#1C75BC"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.66667"
              />
              <path
                d="M13.3333 24H18.6667"
                stroke="#1C75BC"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.66667"
              />
            </svg>
          </div>
          <h3 class="font-semibold text-gray-800 text-center mb-2">
            For Companies
          </h3>
          <p class="text-gray-600 text-sm text-center">
            Find talented developers to solve your business challenges
          </p>
        </div>

        <!-- Center Logo -->
        <div
          class="rounded-full p-4 sm:p-8 shadow-lg bg-gradient-to-r from-[#78BE20]/20 to-[#1C75BC]/20 w-20 h-20 sm:w-auto sm:h-auto mb-6 md:mb-0 flex items-center justify-center mx-auto md:mx-6"
        >
          <div class="w-10 h-10">
            <svg
              class="block w-full h-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 40 40"
            >
              <g>
                <path
                  d="M20 38C29.9411 38 38 29.9411 38 20C38 10.0589 29.9411 2 20 2C10.0589 2 2 10.0589 2 20C2 29.9411 10.0589 38 20 38Z"
                  fill="url(#paint0_linear_1_771)"
                  opacity="0.1"
                />
                <path
                  d="M12 19C14.2091 19 16 17.2091 16 15C16 12.7909 14.2091 11 12 11C9.79086 11 8 12.7909 8 15C8 17.2091 9.79086 19 12 19Z"
                  fill="url(#paint1_linear_1_771)"
                />
                <path
                  d="M28 19C30.2091 19 32 17.2091 32 15C32 12.7909 30.2091 11 28 11C25.7909 11 24 12.7909 24 15C24 17.2091 25.7909 19 28 19Z"
                  fill="url(#paint2_linear_1_771)"
                />
                <path
                  d="M16 15H24"
                  stroke="url(#paint3_linear_1_771)"
                  stroke-linecap="round"
                  stroke-width="2"
                />
                <path
                  d="M16 22L20 26L24 22"
                  stroke="url(#paint4_linear_1_771)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                />
                <path
                  d="M8 29.5C8.82843 29.5 9.5 28.8284 9.5 28C9.5 27.1716 8.82843 26.5 8 26.5C7.17157 26.5 6.5 27.1716 6.5 28C6.5 28.8284 7.17157 29.5 8 29.5Z"
                  fill="url(#paint5_linear_1_771)"
                  opacity="0.6"
                />
                <path
                  d="M14 33.5C14.8284 33.5 15.5 32.8284 15.5 32C15.5 31.1716 14.8284 30.5 14 30.5C13.1716 30.5 12.5 31.1716 12.5 32C12.5 32.8284 13.1716 33.5 14 33.5Z"
                  fill="url(#paint6_linear_1_771)"
                  opacity="0.6"
                />
                <path
                  d="M26 33.5C26.8284 33.5 27.5 32.8284 27.5 32C27.5 31.1716 26.8284 30.5 26 30.5C25.1716 30.5 24.5 31.1716 24.5 32C24.5 32.8284 25.1716 33.5 26 33.5Z"
                  fill="url(#paint7_linear_1_771)"
                  opacity="0.6"
                />
                <path
                  d="M32 29.5C32.8284 29.5 33.5 28.8284 33.5 28C33.5 27.1716 32.8284 26.5 32 26.5C31.1716 26.5 30.5 27.1716 30.5 28C30.5 28.8284 31.1716 29.5 32 29.5Z"
                  fill="url(#paint8_linear_1_771)"
                  opacity="0.6"
                />
              </g>
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint0_linear_1_771"
                  x1="2"
                  x2="3602"
                  y1="2"
                  y2="3602"
                >
                  <stop stop-color="#1C75BC" />
                  <stop offset="1" stop-color="#3B8FD6" />
                </linearGradient>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint1_linear_1_771"
                  x1="8"
                  x2="808"
                  y1="11"
                  y2="811"
                >
                  <stop stop-color="#1C75BC" />
                  <stop offset="1" stop-color="#3B8FD6" />
                </linearGradient>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint2_linear_1_771"
                  x1="24"
                  x2="824"
                  y1="11"
                  y2="811"
                >
                  <stop stop-color="#78BE20" />
                  <stop offset="1" stop-color="#89D426" />
                </linearGradient>

                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint4_linear_1_771"
                  x1="16"
                  x2="336"
                  y1="22"
                  y2="662"
                >
                  <stop stop-color="#78BE20" />
                  <stop offset="1" stop-color="#89D426" />
                </linearGradient>

                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint5_linear_1_771"
                  x1="6.5"
                  x2="306.5"
                  y1="26.5"
                  y2="326.5"
                >
                  <stop stop-color="#1C75BC" />
                  <stop offset="1" stop-color="#3B8FD6" />
                </linearGradient>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint6_linear_1_771"
                  x1="12.5"
                  x2="312.5"
                  y1="30.5"
                  y2="330.5"
                >
                  <stop stop-color="#78BE20" />
                  <stop offset="1" stop-color="#89D426" />
                </linearGradient>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint7_linear_1_771"
                  x1="24.5"
                  x2="324.5"
                  y1="30.5"
                  y2="330.5"
                >
                  <stop stop-color="#1C75BC" />
                  <stop offset="1" stop-color="#3B8FD6" />
                </linearGradient>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint8_linear_1_771"
                  x1="30.5"
                  x2="330.5"
                  y1="26.5"
                  y2="326.5"
                >
                  <stop stop-color="#78BE20" />
                  <stop offset="1" stop-color="#89D426" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <!-- For Coders Card -->
        <div
          class="backdrop-blur-sm bg-white bg-opacity-80 rounded-xl p-6 shadow-lg max-w-sm w-full md:w-auto"
        >
          <div
            class="bg-green-50 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <svg class="w-8 h-8" viewBox="0 0 32 32" fill="none">
              <path
                d="M21.3333 24L29.3333 16L21.3333 8"
                stroke="#78BE20"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.66667"
              />
              <path
                d="M10.6667 8L2.66667 16L10.6667 24"
                stroke="#78BE20"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.66667"
              />
            </svg>
          </div>
          <h3 class="font-semibold text-gray-800 text-center mb-2">
            For Coders
          </h3>
          <p class="text-gray-600 text-sm text-center">
            Showcase your skills and work on exciting real-world projects
          </p>
        </div>
      </div>
    </div>

    <section class="bg-white py-10 sm:py-16 px-2 sm:px-4">
      <div class="max-w-6xl mx-auto">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center"
        >
          <div>
            <div class="text-blue-600 text-3xl font-bold mb-2">500+</div>
            <div class="text-gray-600 text-sm">Active Coders</div>
          </div>
          <div>
            <div class="text-blue-600 text-3xl font-bold mb-2">50+</div>
            <div class="text-gray-600 text-sm">Partner Companies</div>
          </div>
          <div>
            <div class="text-blue-600 text-3xl font-bold mb-2">1000+</div>
            <div class="text-gray-600 text-sm">Successful Matches</div>
          </div>
          <div>
            <div class="text-blue-600 text-3xl font-bold mb-2">95%</div>
            <div class="text-gray-600 text-sm">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="bg-slate-50 py-10 sm:py-16 px-2 sm:px-4">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-gray-800 text-3xl font-bold mb-4">How It Works</h2>
          <p class="text-gray-600 text-lg">
            Three simple steps to connect with the right opportunities
          </p>
        </div>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 justify-center items-center text-center"
        >
          <!-- Step 1 -->
          <div
            class="bg-white rounded-xl p-8 shadow-lg text-center relative mx-auto"
          >
            <div
              class="bg-slate-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <svg class="w-8 h-8" viewBox="0 0 32 32" fill="none">
                <path
                  d="M28 28L22.2133 22.2133"
                  stroke="#1C75BC"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.66667"
                />
                <path
                  d="M14.6667 25.3333C20.5577 25.3333 25.3333 20.5577 25.3333 14.6667C25.3333 8.77563 20.5577 4 14.6667 4C8.77563 4 4 8.77563 4 14.6667C4 20.5577 8.77563 25.3333 14.6667 25.3333Z"
                  stroke="#1C75BC"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.66667"
                />
              </svg>
            </div>
            <div
              class="bg-blue-600 w-7 h-7 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <span class="text-white font-bold text-xs">1</span>
            </div>
            <h3 class="font-semibold text-gray-800 mb-4">Explore Companies</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Browse through our network of innovative companies and discover
              exciting challenges that match your skills.
            </p>
          </div>

          <!-- Step 2 -->
          <div
            class="bg-white rounded-xl p-8 shadow-lg text-center relative mx-auto"
          >
            <div
              class="bg-slate-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <svg class="w-8 h-8" viewBox="0 0 32 32" fill="none">
                <path
                  d="M20 18.6667C20.2667 17.3333 20.9333 16.4 22 15.3333C23.3333 14.1333 24 12.4 24 10.6667C24 8.54493 23.1571 6.5101 21.6569 5.00981C20.1566 3.50952 18.1217 2.66667 16 2.66667C13.8783 2.66667 11.8434 3.50952 10.3431 5.00981C8.84286 6.5101 8 8.54493 8 10.6667C8 12 8.26667 13.6 10 15.3333C10.9333 16.2667 11.7333 17.3333 12 18.6667"
                  stroke="#78BE20"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.66667"
                />
                <path
                  d="M12 24H20"
                  stroke="#78BE20"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.66667"
                />
                <path
                  d="M13.3333 29.3333H18.6667"
                  stroke="#78BE20"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.66667"
                />
              </svg>
            </div>
            <div
              class="bg-blue-600 w-7 h-7 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <span class="text-white font-bold text-xs">2</span>
            </div>
            <h3 class="font-semibold text-gray-800 mb-4">Propose Your Ideas</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Submit your innovative solutions and demonstrate how you can solve
              real business problems.
            </p>
          </div>

          <!-- Step 3 -->
          <div
            class="bg-white rounded-xl p-8 shadow-lg text-center relative mx-auto sm:col-span-2 lg:col-span-1 max-w-md w-full"
          >
            <div
              class="bg-slate-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <svg class="w-8 h-8" viewBox="0 0 32 32" fill="none">
                <path
                  d="M2.66667 12.6667C2.66669 11.1829 3.11679 9.73411 3.95751 8.51155C4.79823 7.28899 5.99002 6.35021 7.37548 5.8192C8.76093 5.28819 10.2749 5.18993 11.7173 5.53739C13.1598 5.88486 14.463 6.66171 15.4547 7.76533C15.5245 7.84002 15.609 7.89956 15.7028 7.94027C15.7966 7.98097 15.8977 8.00198 16 8.00198C16.1023 8.00198 16.2034 7.98097 16.2972 7.94027C16.391 7.89956 16.4755 7.84002 16.5453 7.76533C17.5339 6.65453 18.8374 5.87116 20.2822 5.51947C21.727 5.16778 23.2447 5.26446 24.6332 5.79664C26.0217 6.32883 27.2152 7.27127 28.0548 8.49854C28.8945 9.7258 29.3404 11.1797 29.3333 12.6667C29.3333 15.72 27.3333 18 25.3333 20L18.0107 27.084C17.7622 27.3693 17.4559 27.5986 17.1121 27.7564C16.7682 27.9143 16.3947 27.9971 16.0164 27.9995C15.638 28.0019 15.2635 27.9238 14.9177 27.7703C14.5719 27.6168 14.2627 27.3915 14.0107 27.1093L6.66667 20C4.66667 18 2.66667 15.7333 2.66667 12.6667Z"
                  stroke="#1C75BC"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.66667"
                />
              </svg>
            </div>
            <div
              class="bg-blue-600 w-7 h-7 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <span class="text-white font-bold text-xs">3</span>
            </div>
            <h3 class="font-semibold text-gray-800 mb-4">Make a Match</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Get connected with companies that value your skills and start
              building amazing projects together.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#f4f8fd] py-14 sm:py-20 border-b border-[#e0e7ef]">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-10">
          <h2
            class="text-3xl sm:text-4xl font-extrabold text-[#1e5bb6] mb-3 leading-tight"
          >
            Partner Companies
          </h2>
          <p class="text-lg sm:text-xl text-black font-medium mb-6">
            Join innovative companies that are already part of our ecosystem
          </p>
        </div>
        <div
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8 justify-items-center items-center"
        >
          <div
            class="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-xl duration-200"
          >
            <img
              src="./assets/smart-fit-logo.png"
              alt="smart-fit-logo"
              class="w-16 h-16 object-contain mb-2"
            />
          </div>
          <div
            class="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-xl duration-200"
          >
            <img
              src="./assets/postobon-logo.png"
              alt="postobon-logo"
              class="w-16 h-16 object-contain mb-2"
            />
          </div>
          <div
            class="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-xl duration-200"
          >
            <img
              src="./assets/nequi-logo.png"
              alt="nequi-logo"
              class="w-16 h-16 object-contain mb-2"
            />
          </div>
          <div
            class="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-xl duration-200"
          >
            <img
              src="./assets/BlackBird-logo.jpg"
              alt="BlackBird-logo"
              class="w-16 h-16 object-contain mb-2"
            />
          </div>
          <div
            class="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-xl duration-200"
          >
            <img
              src="./assets/auteco-logo.png"
              alt="auteco-logo"
              class="w-16 h-16 object-contain mb-2"
            />
          </div>
          <div
            class="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-xl duration-200"
          >
            <img
              src="./assets/sistecredito-logo.png"
              alt="sistecredito-logo"
              class="w-16 h-16 object-contain mb-2"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Ready to Start Matching Section -->
    <section class="bg-gray-800 py-16 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <div class="mb-8">
          <p class="text-gray-200 text-lg mb-4">
            Join thousands of developers and companies who are already building
            the future together.
          </p>
          <h1 class="text-5xl font-bold leading-tight">
            <span class="text-blue-500">Ready</span>
            <span class="text-white"> to Start </span>
            <span class="text-green-500">Matching</span>
            <span class="text-white">?</span>
          </h1>
        </div>
      </div>
    </section>

    <!-- modal -->

    <!-- Overlay -->
    <div
      id="login-modal-overlay"
      class="fixed inset-0 bg-black/50 flex items-center justify-center hidden px-2"
    >
      <!-- Modal -->
      <div
        id="login-modal"
        class="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 sm:p-8"
      >
        <!-- Header -->
        <div class="flex justify-center mb-6">
          <img src="./assets/logo.png" alt="Logo" class="mr-2 w-8 h-8" />
          <h1 class="text-2xl font-semibold text-blue-500">MatchBusiness</h1>
        </div>

        <h2 class="text-lg font-medium mb-2">Iniciar Sesión</h2>
        <p class="mb-6 text-gray-600">Bienvenido de vuelta</p>

        <!-- Login Form -->
        <form id="login-form">
          <div class="mb-4">
            <label
              for="login-user"
              class="block text-sm font-medium text-gray-700"
              >Número de Documento</label
            >
            <input
              type="number"
              id="login-user"
              name="id_user"
              placeholder="Tu documento"
              class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="login-password"
              class="block text-sm font-medium text-gray-700"
              >Contraseña</label
            >
            <input
              type="password"
              id="login-password"
              name="password"
              placeholder="********"
              class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Iniciar Sesión
          </button>
        </form>

        <!-- Footer -->
        <div class="mt-4 flex justify-between items-center">
          <button id="login-close-btn" class="text-blue-500 hover:underline">
            ← Volver al Home
          </button>
        </div>
      </div>
    </div>
    `
    return view;
}