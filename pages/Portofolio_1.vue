<template>
  <div class="bg-blue-200">
    <link rel="stylesheet" href="../assets/css/main.css">
    <style>
      #button:hover{box-shadow: -10px 5px rgba(41, 39, 39, 1);}
      #abt{box-shadow: -15px 15px rgba(41, 39, 39, 1);}
    </style>
    <header class="bg-transparent text-black absolute top-0 left-0 w-full flex items-center z-10" :class="{ 'navbar-fixed': isNavbarFixed }">
      <div class="flex items-center w-full md:px-[100px]">
        <div class="hidden md:w-1/2 lg:flex md:hidden space-x-[20px] justify-start">
          <a href="#hero" class="text-base font-semibold flex py-5 px-5 items-center rounded-[20px] transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
            Beranda
          </a>
          <a href="#about" class="text-base font-semibold flex py-5 px-5 items-center rounded-[20px] transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
            Tentang
          </a>
          <a href="#blog" class="text-base font-semibold flex py-5 px-5 items-center rounded-[20px] transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
            Projek
          </a>
          <a href="#kontak" class="text-base font-semibold flex py-5 px-5 items-center rounded-[20px] transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
            Komentar
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
    <section id="hero" class="pt-[100px] md:pt-[100px] lg:py-[150px] bg-portofolio-hero bg-cover bg-no-repeat">
      <div class="mx-auto lg:w-[80%] md:backdrop-blur-3xl p-[40px]">
        <div class="flex flex-wrap justify-center py-[100px] md:px-[100px]">
          <div class="w-full self-center justify-items-center lg:w-1/2">
            <h1 class="kenilla text-4xl tracking-wider font-normal mb-[10px] text-yellow-50 md:leading-[72px] md:text-left md:text-[56px]">
              Hey,
            </h1>
            <p class="kenilla text- black text-base font-medium tracking-[2px] leading-[32px] mb-[10px]">
              Just a view information about<br> <span class="kenilla text-4xl text-center md:leading-[72px] lg:text-left tracking-wider font-normal text-yellow-50 md:text-[56px] mb-[10px]">Who I am?</span>
            </p>
            <!-- <h2 class="kenilla text-white font-medium text-center md:leading-[36px] lg:text-left md:text-[24px] tracking-wider text-slat-500 text-lg  mb-8"> -->
            <!-- I`m a Frontend <br> -->
            <!-- developer -->
            <!-- </h2> -->
            <div class="flex p-[20px] lg:p-0 place-content-center lg:place-content-start">
              <button
                id="button"
                onclick="location.href='https://api.whatsapp.com/send/?phone=6285234606920&text&type=phone_number&app_absent=0'"
                class=" text-base font-bold text-black tracking-widest bg-[#FFB800] py-3 px-8 transition duration-300 ease-in-out delay-50 hover:translate-x-3"
              >
                Contack Me
              </button>
            </div>
          </div>
          <div class="my-auto lg:w-1/2 py-[100px] md:py-0 md:pl-[100px]">
            <div class="md:flex bg-transparent md:bg-white md:rounded-tl-full md:rounded-bl-full md:h-[300px] md:pl-[100px] md:-mr-[274px]">
              <div class="flex">
                <img src="../assets/img/ROBIN_YAO-removebg-preview.png" class="hidden md:flex lg:flex md:h-[400px] lg:h-[400px] md:-mt-[100px] rounded-bl-[109px]">
              </div>
            </div>
          </div>
        </div>

        <div id="about" class="flex w-full h-[200px] pb-[100px] md:h-[800px] md:backdrop-blur-xl md:pb-0 md:p-[100px]">
          <div class="md:w-1/2">
            <div class="md:flex hidden">
              <img src="../assets/img/download__1_-removebg-preview.png" alt="" class="float-right w-[500px]">
            </div>
          </div>
          <div class="md:w-1/2 md:px-[50px] self-center">
            <H1 class="text-white text-[36px] font-medium mb-[20px]">
              Introduction - <span class="text-yellow-300">Who i am?</span>
            </H1>
            <div class="w-full">
              <p class="text-white font-thin tracking-[1.1px]">
                Saya adalah seorang siswa/pelajar,
                Saya seorang Beginner Frontend developer
                karena saya masih menjalankan program
                magang dari sekolah.
              </p>
            </div>
            <div class="w-full mb-[30px] pt-[30px]">
              <div class="flex items-center justify-start">
                <!--Instagram-->
                <a
                  href="https://www.instagram.com/gbrielpstriagung/"
                  target="_blank"
                  class="w-9 h-9 mr-3 rounded-full flex justify-center text-slate-400 items-center lg:border lg:border-slate-400 "
                >
                  <svg role="img" width="20" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>Instagram</title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
                <!--Twitter-->
                <a
                  href="https://twitter.com/gabriel1821452"
                  target="_blank"
                  class="w-9 h-9 mr-3 rounded-full flex justify-center text-slate-400 items-center lg:border lg:border-slate-400 t"
                >
                  <svg role="img" width="20" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>Instagram</title>
                    <path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z" />
                  </svg>
                </a>
                <!--Wa-->
                <a
                  href="https://api.whatsapp.com/send/?phone=6285234606920&text&type=phone_number&app_absent=0"
                  target="_blank"
                  class="w-9 h-9 mr-3 rounded-full flex justify-center text-slate-400 items-center lg:border lg:border-slate-400 "
                >
                  <svg role="img" width="20" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>WhatsApp</title>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>
                <!--spotify-->
                <a
                  href="https://open.spotify.com/user/31x6czln5zdcwrqgg2qtjf44lyp4"
                  target="_blank"
                  class="w-9 h-9 mr-3 rounded-full flex justify-center text-slate-400 items-center lg:border lg:border-slate-400 "
                >
                  <svg role="img" width="20" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>WhatsApp</title>
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="blog" class=" md:pr-[100px] md:py-0 bg-[#263472]">
      <div class="">
        <div class="w-full flex flex-wrap">
          <div class="w-full h-[150px] md:w-[150px] md:h-[400px] bg-blue-400 py-[10%] md:pt-[100px]">
            <div class="w-full md:w-[300px] md:h-[100px] md:rotate-[-90deg] md:-ml-[50px]">
              <h2 class="font-bold tracking-normal text-white text-center md:text-left text-[40px]">
                My Project
              </h2>
            </div>
          </div>
          <div class="block space-y-5 mx-auto pt-[30px] md:mx-10 mb-[50px] md:mb-0">
            <p class="text-white text-opacity-40 amilly text-right text-[40px] md:text-[72px]">
              Just a View `bout my project`
            </p>
            <div class=" md:w-[600px] md:ml-[100px] my-auto justify-center items-center">
              <div class="overflow-me p-5 rounded-[20px] w-[320px] md:w-[600px] lg:w-[600px] flex space-x-5">
                <div class="group flex-none basis-[200px] hover:basis-[550px] hover:flex bg-white rounded-3xl duration-300 ease-in-out">
                  <div class="bg-woolen-w bg-cover w-full h-[100px] rounded-t-3xl group-hover:rounded-3xl group-hover:h-[150px]" />
                  <div class="group-hover:w-[500px] w-[200px] py-[25px] px-[25px] block space-y-2 justify-center items-center">
                    <H1 class="text-black font-medium">
                      Woolen Whims
                    </H1>
                    <p class="hidden group-hover:block">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, laudantium.
                    </p>
                    <div class="flex space-x-4 items-center">
                      <h1 class="hidden text-black font-medium text-opacity-40 hover:text-opacity-100 hover:text-yellow-400 group-hover:flex">
                        Click Here
                      </h1>
                      <div class="hidden w-1 h-3 rounded-full bg-yellow-400 group-hover:flex" />
                      <h1 class="hidden text-black font-medium text-opacity-40 hover:text-opacity-100 hover:text-yellow-400 group-hover:flex">
                        See
                      </h1>
                    </div>
                  </div>
                </div>
                <div class="group flex-none basis-[200px] hover:basis-[550px] hover:flex bg-white rounded-3xl duration-300 ease-in-out">
                  <div class="bg-woolen-w bg-cover w-full h-[100px] rounded-t-3xl group-hover:rounded-3xl group-hover:h-[150px]" />
                  <div class="group-hover:w-[500px] w-[200px] py-[25px] px-[25px] block space-y-2 justify-center items-center">
                    <H1 class="text-black font-medium">
                      Woolen Whims
                    </H1>
                    <p class="hidden group-hover:block">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, laudantium.
                    </p>
                    <div class="flex space-x-4 items-center">
                      <h1 class="hidden text-black font-medium text-opacity-40 hover:text-opacity-100 hover:text-yellow-400 group-hover:flex">
                        Click Here
                      </h1>
                      <div class="hidden w-1 h-3 rounded-full bg-yellow-400 group-hover:flex" />
                      <h1 class="hidden text-black font-medium text-opacity-40 hover:text-opacity-100 hover:text-yellow-400 group-hover:flex">
                        See
                      </h1>
                    </div>
                  </div>
                </div>
                <div class="group flex-none basis-[200px] hover:basis-[550px] hover:flex bg-white rounded-3xl duration-300 ease-in-out">
                  <div class="bg-woolen-w bg-cover w-full h-[100px] rounded-t-3xl group-hover:rounded-3xl group-hover:h-[150px]" />
                  <div class="group-hover:w-[500px] w-[200px] py-[25px] px-[25px] block space-y-2 justify-center items-center">
                    <H1 class="text-black font-medium">
                      Woolen Whims
                    </H1>
                    <p class="hidden group-hover:block">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, laudantium.
                    </p>
                    <div class="flex space-x-4 items-center">
                      <h1 class="hidden text-black font-medium text-opacity-40 hover:text-opacity-100 hover:text-yellow-400 group-hover:flex">
                        Click Here
                      </h1>
                      <div class="hidden w-1 h-3 rounded-full bg-yellow-400 group-hover:flex" />
                      <h1 class="hidden text-black font-medium text-opacity-40 hover:text-opacity-100 hover:text-yellow-400 group-hover:flex">
                        See
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="grid w-[300px] h-[300px] mx-auto md:ml-auto bg-white rounded-t-full md:rounded-b-full md:rounded-t-none justify-center items-center">
            <img src="https://i.pinimg.com/236x/36/9c/12/369c128aec6fb7610e686998980884fa.jpg" alt="" class="rounded-full h-[200px] border-[7px] border-[#0f274b] -rotate-[90deg]">
          </div>
        </div>
      </div>
    </section>
    <section id="kontak" class=" pb-32">
      <div class="px-5 md:px-[100px]">
        <div class="flex flex-wrap">
          <div class="md:w-1/2 bg-checkered-1 px-5 pb-5 md:pb-[100px] bg-cover rounded-b-[36px]">
            <div class="w-full pt-[50px] md:pt-[100px] pb-[50px] flex justify-center">
              <p class="brugty text-black text-center tracking-[0.1px] text-[24px] md:text-[48px]">
                Drop Comment
              </p>
            </div>
            <form action="https://formspree.io/f/xbjvdrqo" method="POST">
              <div class="w-full  lg:w-2/3 lg:mx-auto bg-blur-50 rounded-3xl border-white border-[1px]">
                <div class="w-full px-8 mb-8 mt-8">
                  <div class="grid gap-4 grid-cols-2">
                    <div>
                      <label for="name" class="text-base text-white font-semibold">Name</label>
                      <input id="name" type="text" name="nama" class="w-full mb-5 mt-1 bg-slate-200 text-black p-3 focus:outline-none focus:ring-blue-700 focus:ring-1 focus:border-blue-700 rounded-lg" required>
                    </div>
                    <div>
                      <label for="email" class="text-base text-white font-semibold">Email</label>
                      <input id="email" type="email" name="email" class="w-full mb-5 mt-1 bg-slate-200 text-black p-3 focus:outline-none focus:ring-blue-700 focus:ring-1 focus:border-blue-700 rounded-lg" required>
                    </div>
                  </div>
                  <label for="messege" class="text-base text-white font-semibold">Massage</label>
                  <textarea id="text" type="text" name="pesan" class="w-full mb-9 mt-1 bg-slate-200 text-black p-3 focus:outline-none focus:ring-blue-700 focus:ring-1 focus:border-blue-700 rounded-lg" required />
                  <div class="w-full">
                    <button type="submit" class="text-[18px] font-bold text-black bg-yellow-500 py-3 px-8 w-full hover:opacity-80 hover:shadow-lg transition duration-500 rounded-lg">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="md:w-1/2 mt-[50px] flex justify-center items-center">
            <div class="">
              <!--  -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="lg:bg-footer-portofolio bg-cover bg-footer-portofolio-sm">
      <div class="container">
        <div class="flex flex-wrap lg:mx-[100px]">
          <div class="lg:p-[50px] my-[50px] block lg:w-1/2 lg:bg-white lg:bg-opacity-50 lg:backdrop-blur-[20px]">
            <ul class="block space-y-[10px] mb-[25px] lg:space-y-0 lg:flex lg:space-x-[40px]">
              <li class="cursor-pointer text-black text-opacity-60 font-bold text-[20px] uppercase tracking-normal">
                Tentang saya
              </li>
            </ul>
            <ul class="block space-y-[10px] lg:space-y-[10px] lg:block">
              <li class="text-slate-700 font-semibold text-[15px] text-opacity-50 hover:translate-x-2 cursor-pointer hover:text-orange-500 transition duration-150 ease-out">
                Alamat: Area Pegunungan, Medowo,<br>Kandangan, Kediri, East Java
              </li>
              <li class="text-slate-700 font-semibold text-[15px] text-opacity-50 hover:translate-x-2 cursor-pointer hover:text-orange-500 transition duration-150 ease-out">
                Email: <span onclick="location.href='mailto:gabriel.satriagung.prakoso@gmail.com'" class="hover:underline hover:decoration-orange-500">gabriel.satriagung.prakoso@gmail.com</span>
              </li>
              <li class="text-slate-700 font-semibold text-[15px] text-opacity-50 hover:translate-x-2 cursor-pointer hover:text-orange-500 transition duration-150 ease-out">
                Telphone: 0852-3460-6920
              </li>
              <li class="text-slate-700 font-semibold text-[15px] text-opacity-50 hover:translate-x-2 cursor-pointer hover:text-orange-500 transition duration-150 ease-out">
                Senin s/d Jum`at 08.00 - 17.00
              </li>
            </ul>
          </div>
          <div class="lg:p-[50px] my-[50px] block w-ful lg:bg-yellow-700 lg:bg-opacity-50 lg:backdrop-blur-[20px] lg:w-1/2">
            <div class="flex space-x-[20px] mb-[20px] lg:justify-end">
              <!--Instagram-->
              <a
                href="https://www.instagram.com/gbrielpstriagung/"
                target="_blank"
                class="w-[50px] h-[50px] rounded-full flex justify-center text-white items-center bg-white bg-opacity-30"
              >
                <svg role="img" width="25px" class="fill-current m-auto" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>Instagram</title>
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
              <!--Twitter-->
              <a
                href="https://twitter.com/gabriel1821452"
                target="_blank"
                class="w-[50px] h-[50px] rounded-full flex justify-center text-white items-center bg-white bg-opacity-30"
              >
                <svg role="img" width="25px" class="fill-current m-auto" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>Instagram</title>
                  <path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z" />
                </svg>
              </a>
              <!--Wa-->
              <a
                href="https://api.whatsapp.com/send/?phone=6285234606920&text&type=phone_number&app_absent=0"
                target="_blank"
                class="w-[50px] h-[50px]  rounded-full flex justify-center text-white items-center bg-white bg-opacity-30"
              >
                <svg role="img" width="25px" class="fill-current m-auto" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>WhatsApp</title>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <!--spotify-->
              <a
                href="https://open.spotify.com/user/31x6czln5zdcwrqgg2qtjf44lyp4"
                target="_blank"
                class="w-[50px] h-[50px] rounded-full flex justify-center text-white items-center bg-white bg-opacity-30"
              >
                <svg role="img" width="25px" class="fill-current m-auto" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>WhatsApp</title>
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
              </a>
            </div>
            <div class="mt-[100px] lg:justify-end">
              <p class="text-white uppercase text-left text-opacity-50 lg:text-right">
                © 2023 GABRIELL
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
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
