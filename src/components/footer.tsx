// export default function Footer() {
//     return (
//         <section className="pt-15">
//             <div className="max-w-[1440px] mx-auto px-12">

//             </div>
//         </section>
//     )
// }

import { FaTelegramPlane, FaInstagram, FaYoutube } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { LiaTelegramPlane } from "react-icons/lia";
import { TbBrandLinkedin } from "react-icons/tb";
import AnimatedSection from "./animatedSection";

export default function Footer() {
  return (
    <footer className="text-gray-700 pt-10 lg:pt-20">
      <div className="max-w-[1440px] mx-auto px-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
          <AnimatedSection>
            <h2 className="text-xl font-bold mb-4">آموزش وردپرس</h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-sm leading-6">
              ارائه بهترین دوره‌های وردپرس برای طراحی سایت حرفه‌ای، بدون نیاز به دانش برنامه‌نویسی.
            </p>
          </AnimatedSection>

        </div>

        <div>
          <AnimatedSection delay={0.4}>
            <h3 className="font-semibold mb-4">لینک‌های مهم</h3>
          </AnimatedSection>

          <ul className="space-y-2 text-sm">
            <AnimatedSection delay={0.5}>
              <li><a href="#" className="transition-all duration-200 hover:text-teal-400">خانه</a></li>
            </AnimatedSection>
            <AnimatedSection delay={0.6}>
              <li><a href="#" className="transition-all duration-200 hover:text-teal-400">دوره‌ها</a></li>
            </AnimatedSection>
            <AnimatedSection delay={0.7}>
              <li><a href="#" className="transition-all duration-200 hover:text-teal-400">وبلاگ</a></li>
            </AnimatedSection>
            <AnimatedSection delay={0.7}>
              <li><a href="#" className="transition-all duration-200 hover:text-teal-400">تماس با ما</a></li>
            </AnimatedSection>




          </ul>
        </div>

        <div>
          <AnimatedSection delay={0.9}>
            <h3 className="font-semibold mb-4">شبکه‌های اجتماعی</h3>
          </AnimatedSection>

          <div className="flex gap-3 text-2xl">
            <AnimatedSection delay={1}>
              <a href="#" className="transition-all duration-200 hover:text-teal-400">
                <TbBrandLinkedin />
              </a>
            </AnimatedSection>
            <AnimatedSection delay={1.1}>
              <a href="#" className="transition-all duration-200 hover:text-teal-400">
                <LiaTelegramPlane />
              </a>
            </AnimatedSection>
            <AnimatedSection delay={1.2}>
              <a href="#" className="transition-all duration-200 hover:text-teal-400">
                <AiOutlineInstagram />
              </a>
            </AnimatedSection>
            <AnimatedSection delay={1.3}>
              <a href="#" className="transition-all duration-200 hover:text-teal-400">
                <AiOutlineYoutube />
              </a>
            </AnimatedSection>




          </div>
        </div>

        <div>
          <AnimatedSection delay={1.5}>
            <h3 className="font-semibold mb-4">عضویت در خبرنامه</h3>
          </AnimatedSection>

          <AnimatedSection delay={1.7}>
            <form className="flex">

              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="w-full px-3 py-2 rounded-r-md text-gray-900 focus:outline-none border border-gray-300"
              />



              <button
                className="bg-teal-400 px-4 py-2 rounded-l-md text-white transition-all duration-200 hover:shadow-[0_0_10px_#00D5BE]"
              >
                عضویت
              </button>


            </form>
          </AnimatedSection>

        </div>
      </div>

      <AnimatedSection delay={1.9}>
        <div className="border-t border-gray-200 mt-8 py-4 text-center text-sm text-gray-500">
          © 2025 آموزش وردپرس | تمام حقوق محفوظ است.
        </div>
      </AnimatedSection>

    </footer>
  );
}
