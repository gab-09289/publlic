<template>
  <div>
    <header class="bg-transparent text-white absolute top-0 left-0 w-full flex items-center z-10" :class="{ 'navbar-fixed': isNavbarFixed }">
      <div class="flex items-center w-full md:px-[100px]">
        <div class="hidden md:w-1/2 lg:flex md:hidden space-x-[20px] justify-start">
          <a href="#Home" class="text-base font-semibold flex py-5 px-5 items-center rounded-[20px] transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
            Home
          </a>
          <a href="#About" class="text-base font-semibold flex py-5 px-5 items-center rounded-[20px] transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
            About
          </a>
          <a href="#Project" class="text-base font-semibold flex py-5 px-5 items-center rounded-[20px] transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
            Project
          </a>
          <a href="#Comment" class="text-base font-semibold flex py-5 px-5 items-center rounded-[20px] transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
            Comment
          </a>
        </div>
        <div class="md:w-1/2 pl-4 md:p-0 flex justify-end">
          <a href="" class="cavia font-bold tracking-widest max-w-fit text-[30px] uppercase block py-6">
            Gabriel
          </a>
        </div>
        <div class="flex w-1/2 items-center md:hidden">
          <a
            id="hamburger"
            type="button"
            name="hamburger"
            class="block absolute right-4 cursor-pointer bg-transparent"
            :class="{ 'hamburger-active': isActive }"
            @click="toggleHamburger"
          >
            <span class="hamburger-line transition duration-300 ease-in-out" />
            <span class="hamburger-line transition duration-300 ease-in-out" />
            <span class="hamburger-line transition duration-300 ease-in-out" />
          </a>
          <nav v-if="isActive" name="navMenu" class="absolute py-5 text-black bg-white shadow-lg rounded-lg max-w-[250px] w-full mt-3 right-4 top-full lg:hidden">
            <ul>
              <li onclick="location.href='#hero'" class="py-4 px-5 mx-2 mb-1 rounded-lg hover:bg-blue-200 transition duration-800 ease-in shadow-inner">
                <a href="#hero" class="text-[16px] font-medium tracking-wide">
                  Beranda
                </a>
              </li>
              <li onclick="location.href='#about'" class="py-4 px-5 mx-2 mb-1 rounded-lg hover:bg-blue-200 transition duration-800 ease-in shadow-inner">
                <a href="#about" class="text-[16px] font-medium tracking-wide">
                  Tentang Saya
                </a>
              </li>
              <li onclick="location.href='#blog'" class="py-4 px-5 mx-2 mb-1 rounded-lg hover:bg-blue-200 transition duration-800 ease-in shadow-inner">
                <a href="#blog" class="text-[16px] font-medium tracking-wide">
                  Projek
                </a>
              </li>
              <li onclick="location.href='#kontak'" class="py-4 px-5 mx-2 rounded-lg hover:bg-blue-200 transition duration-800 ease-in shadow-inner">
                <a href="#kontak" class="text-[16px] font-medium tracking-wide">
                  Komentar
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <section id="Home" class="w-full h-[768px]">
      <img class="w-full h-[768px] left-0 top-0 absolute" src="../assets/img/alto(1).png">
      <div class="w-full h-[767px] p-[50px] left-0 top-0 absolute bg-black bg-opacity-10">
        <div class="w-full h-full flex">
          <div class="lg:w-1/2 h-full block space-y-5 pt-[25px] text-left">
            <div class="kenilla text-white text-opacity-40 text-7xl font-normal mt-[300px]">
              Hai,<br>Just a view about<br>Who am I ?
            </div>
          </div>
          <div class="lg:w-1/2 flex justify-end">
            <button class="w-[200px] h-[50px] bg-gray-600 rounded-lg mt-[490px] hover:bg-opacity-50 hover:shadow-lg transition duration-150 ease-linear hover:translate-y-1">
              <div class="text-white text-center text-[24px] font-extralight">
                Contack Me
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
    <div id="About" class="w-full bg-[#181F26]">
      <div class="flex p-[100px]">
        <div class="block md:w-1/2">
          <img src="https://i.pinimg.com/564x/41/13/64/411364f221178654bb9c4a4380f4a327.jpg" alt="">
          <div class="p-[10px] pt-[50px]">
            <div class="overflow-me-y">
              <p class="text-white text-[18px] line-clamp-5 mb-[20px]">
                Hello, I'm Gabriel, a 17-year-old from Indonesia, specifically from Jatim. My passions in life are all about color and crochet. These two seemingly diverse interests might not be commonly associated, but they define who I am and what drives me. <br><br>

                Colors are my way of expressing emotions and creativity. I'm captivated by the endless array of shades and how they can convey feelings without words. Whether it's through art, design, or even in the digital world as a front-end developer, I find joy in playing with colors to create visually striking experiences that resonate with people.<br><br>

                Speaking of the digital world, my affinity for the "white" of web design parallels my love for crochet. Just as I meticulously weave threads together to form intricate patterns, I apply the same attention to detail in coding and designing. This harmony between my hobbies and interests is what draws me to the realm of front-end development. I believe that the fusion of creativity and technical skills can truly shape the future of the web.<br><br>

                Currently, I'm a student at a vocational high school in Pare, where I'm not only honing my academic skills but also continuing to nurture my passion for design and development. Each day is an opportunity for me to learn, create, and explore the fascinating intersection of colors, crochet, and coding.<br><br>

                Through my journey, I hope to inspire others to embrace their unique combinations of interests and find their own path. Whether it's through a pixel-perfect web design, a meticulously crafted crochet piece, or a blend of both, I'm excited to see where my creativity and dedication will take me.

                Join me as I weave together code, colors, and crochet to create a vibrant tapestry that tells the story of my journey.<br><br>
              </p>
              <button class="py-2 px-10 bg-blue-400 rounded-xl text-[18px] font-semibold transition-all duration-300 ease-in hover:-translate-y-1 hover:bg-gradient-to-r from-cyan-500 to-blue-500 ">
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div class="md:w-1/2 flex items-center">
          <div class="flex m-auto p-[100px]">
            <div class="block -space-y-[20px]">
              <h1 class="text-zinc-500 text-[48px] font-bold">
                About Me
              </h1>
              <h1 class="text-zinc-500 text-opacity-100 text-[48px] font-bold ">
                About Me
              </h1>
              <h1 class="text-zinc-500 text-opacity-90 text-[48px] font-bold">
                About Me
              </h1>
              <h1 class="text-zinc-500 text-opacity-80 text-[48px] font-bold">
                About Me
              </h1>
              <h1 class="text-zinc-500 text-opacity-70 text-[48px] font-bold">
                About Me
              </h1>
              <h1 class="text-zinc-500 text-opacity-60 text-[48px] font-bold">
                About Me
              </h1>
              <h1 class="text-zinc-500 text-opacity-50 text-[48px] font-bold">
                About Me
              </h1>
              <h1 class="text-zinc-500 text-opacity-40 text-[48px] font-bold">
                About Me
              </h1>
              <h1 class="text-zinc-500 text-opacity-30 text-[48px] font-bold">
                About Me
              </h1>
              <h1 class="text-zinc-500 text-opacity-20 text-[48px] font-bold">
                About Me
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-[#181f26]">
      ,,,la
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isNavbarFixed: false,
      isActive: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      if (window.scrollY > 0) {
        this.isNavbarFixed = true
      } else {
        this.isNavbarFixed = false
      }
    },
    toggleHamburger () {
      this.isActive = !this.isActive
    }
  }
}

</script>
