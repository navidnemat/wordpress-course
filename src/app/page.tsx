import { FaArrowLeft } from "react-icons/fa6";

export default function Home() {
  return (
    <div>

      <section className="relative bg-gradient-to-r from-indigo-500 to-purple-500 text-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 py-40">
          <div className="flex items-center justify-between">
            <div className="w-1/2 flex flex-col gap-11">
              <h2 className="lg:text-[45px] text-shadow-sm leading-13">بیاموزید که چگونه حرفه ای و پیشرفته طراحی سایت کنید</h2>
              <p className="text-white/85">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
              <div>
                <button className="bg-teal-400 px-4 py-2.5 rounded-full ease-in transition-all duration-200  hover:shadow-md shadow-teal-400 flex items-center gap-2.5 hover:[&_svg]:-translate-x-1">مشاهده دوره ها
                  <FaArrowLeft className="transition-all duration-200"/>
                </button>
              </div>

            </div>
            <div className="w-1/2">
              <img src="/" alt="" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full leading-none">
          <svg
            viewBox="0 0 1200 40"
            preserveAspectRatio="none"
            className="w-full h-10"
          >
            <path
              d="M0,5 C300,-5 900,40 1200,25 L1200,40 L0,40 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>
    </div>
  );
}
