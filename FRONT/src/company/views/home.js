export function homeView() {
    const view = `
    <div class="text-center py-14 bg-[#f6fcf9]">
        <!-- Texto superior con estrellita -->
        <p class="text-[#7ecb9c] font-semibold text-lg flex items-center justify-center gap-2 mb-3">
            <img src="./assets/star.png" alt="star" class="w-5 h-5">
            Powered by Innovation
        </p>

        <!-- Título -->
        <h1 class="text-[2.7rem] font-extrabold text-[#222] tracking-[-1px] mb-5">
            Connecting Coders & Companies <br> through Innovation
        </h1>

        <!-- Subtítulo -->
        <p class="text-[#555] text-lg mb-8">
            Join the largest network of developers and innovative companies. Showcase <br>
            your skills, solve real challenges, and build the future together.
        </p>

        <!-- Bloques de match -->
        <div class="flex justify-center items-center gap-12 mt-8 flex-col md:flex-row">

            <!-- Bloque company -->
            <div
                class="bg-white rounded-[18px] shadow-[0_4px_24px_0_rgba(126,203,156,0.08)] p-8 w-64 text-center flex flex-col items-center gap-2">
                <img src="./assets/companie.png" alt="companie" class="w-14 h-14 mb-2">
                <p class="font-bold text-[#222] text-lg">For companies</p>
                <p class="text-[#555] text-base">
                    Find talented developers to solve your business <br> challenges
                </p>
            </div>

            <!-- Logo central -->
            <img src="./assets/logoBig.png" alt="logo" class="w-20 h-20">

            <!-- Bloque coder -->
            <div
                class="bg-white rounded-[18px] shadow-[0_4px_24px_0_rgba(126,203,156,0.08)] p-8 w-64 text-center flex flex-col items-center gap-2">
                <img src="./assets/coder.png" alt="coder" class="w-14 h-14 mb-2">
                <p class="font-bold text-[#222] text-lg">For coders</p>
                <p class="text-[#555] text-base">
                    Showcase your skills and work on exciting real-world <br> projects
                </p>
            </div>

        </div>
    </div>

    <div class="home2 flex flex-wrap justify-center gap-12 py-16 bg-[#f6fcf9] text-center">

        <div class="statis">
            <h1 class="text-4xl font-extrabold text-[#222]">500+</h1>
            <p class="text-lg text-[#555]">Active Coders</p>
        </div>

        <div class="statis">
            <h1 class="text-4xl font-extrabold text-[#222]">50+</h1>
            <p class="text-lg text-[#555]">Companies</p>
        </div>

        <div class="statis">
            <h1 class="text-4xl font-extrabold text-[#222]">1000+</h1>
            <p class="text-lg text-[#555]">Successful Matches</p>
        </div>

        <div class="statis">
            <h1 class="text-4xl font-extrabold text-[#222]">95%</h1>
            <p class="text-lg text-[#555]">Satisfaction Rate</p>
        </div>

    </div>

    <div class="home3 py-20 bg-white text-center">

        <!-- Título principal -->
        <h1 class="text-3xl font-extrabold text-[#222] mb-4">How It Works</h1>
        <p class="text-lg text-[#555] mb-12">
            Three simple steps to connect with the right opportunities
        </p>

        <!-- Contenedor de cards -->
        <div class="flex flex-wrap justify-center gap-10">

            <!-- Card 1 -->
            <div class="cardIdea max-w-xs bg-[#f9f9f9] rounded-xl shadow-md p-6">
                <img src="./assets/lupa.png" alt="" class="mx-auto mb-4 w-16 h-16">
                <p class="text-blue-500 font-bold text-xl">1</p>
                <h2 class="text-xl font-semibold text-[#222] mt-2 mb-3">Explore Companies</h2>
                <p class="text-[#555]">
                    Browse through our network of innovative <br>
                    companies and discover exciting <br>
                    challenges that match your skills.
                </p>
            </div>

            <!-- Card 2 -->
            <div class="cardIdea max-w-xs bg-[#f9f9f9] rounded-xl shadow-md p-6">
                <img src="./assets/led.png" alt="" class="mx-auto mb-4 w-16 h-16">
                <p class="text-blue-500 font-bold text-xl">2</p>
                <h2 class="text-xl font-semibold text-[#222] mt-2 mb-3">Propose your ideas</h2>
                <p class="text-[#555]">
                    Submit your innovative solutions and <br>
                    demonstrate how you can solve real <br>
                    business problems.
                </p>
            </div>

            <!-- Card 3 -->
            <div class="cardIdea max-w-xs bg-[#f9f9f9] rounded-xl shadow-md p-6">
                <img src="./assets/corazon.png" alt="" class="mx-auto mb-4 w-16 h-16">
                <p class="text-blue-500 font-bold text-xl">3</p>
                <h2 class="text-xl font-semibold text-[#222] mt-2 mb-3">Make a Match</h2>
                <p class="text-[#555]">
                    Get connected with companies that value <br>
                    your skills and start building amazing <br>
                    projects together.
                </p>
            </div>

        </div>
    </div>

    <div class="home4 bg-[#f6fcf9] py-16 text-center">

        <!-- Título -->
        <h1 class="text-[2.1rem] font-extrabold text-[#222] mb-2">Partner Companies</h1>
        <p class="text-[#555] text-lg mb-8">
            Join innovative companies that are already part of our ecosystem
        </p>

        <!-- Logos -->
        <div class="partner-logos flex justify-center gap-8 flex-wrap mb-8">
            <div class="partner-logo bg-white rounded-[18px] shadow-md p-4 w-[120px] flex flex-col items-center gap-2">
                <img src="./assets/smart-fit-logo.png" alt="smart-fit-logo" class="w-16 h-16 object-contain">
            </div>
            <div class="partner-logo bg-white rounded-[18px] shadow-md p-4 w-[120px] flex flex-col items-center gap-2">
                <img src="./assets/postobon-logo.png" alt="postobon-logo" class="w-16 h-16 object-contain">
            </div>
            <div class="partner-logo bg-white rounded-[18px] shadow-md p-4 w-[120px] flex flex-col items-center gap-2">
                <img src="./assets/nequi-logo.png" alt="nequi-logo" class="w-16 h-16 object-contain">
            </div>
            <div class="partner-logo bg-white rounded-[18px] shadow-md p-4 w-[120px] flex flex-col items-center gap-2">
                <img src="./assets/BlackBird-logo.jpg" alt="BlackBird-logo" class="w-16 h-16 object-contain">
            </div>
            <div class="partner-logo bg-white rounded-[18px] shadow-md p-4 w-[120px] flex flex-col items-center gap-2">
                <img src="./assets/auteco-logo.png" alt="auteco-logo" class="w-16 h-16 object-contain">
            </div>
            <div class="partner-logo bg-white rounded-[18px] shadow-md p-4 w-[120px] flex flex-col items-center gap-2">
                <img src="./assets/sistecredito-logo.png" alt="sistecredito-logo" class="w-16 h-16 object-contain">
            </div>
        </div>

        <!-- Call to action -->
        <div class="mt-10">
            <h1 class="text-2xl font-extrabold text-[#222] mb-2">Ready to Start Matching?</h1>
            <p class="text-[#7ecb9c] text-xl font-bold flex items-center justify-center gap-2">
                <img src="./assets/star.png" alt="start" class="w-6 h-6"> Start matching
            </p>
        </div>
    </div>
    `
    return view;
}