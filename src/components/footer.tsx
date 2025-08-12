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

export default function Footer() {
  return (
    <footer className="text-gray-700 py-10 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
          <h2 className="text-xl font-bold mb-4">آموزش وردپرس</h2>
          <p className="text-sm leading-6">
            ارائه بهترین دوره‌های وردپرس برای طراحی سایت حرفه‌ای، بدون نیاز به دانش برنامه‌نویسی.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">لینک‌های مهم</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-teal-400">خانه</a></li>
            <li><a href="#" className="hover:text-teal-400">دوره‌ها</a></li>
            <li><a href="#" className="hover:text-teal-400">وبلاگ</a></li>
            <li><a href="#" className="hover:text-teal-400">تماس با ما</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">شبکه‌های اجتماعی</h3>
          <div className="flex gap-3 text-2xl">
            <a href="#" className="transition-all duration-200 hover:text-teal-400">
              <TbBrandLinkedin />
            </a>
            <a href="#" className="transition-all duration-200 hover:text-teal-400">
              <LiaTelegramPlane />
            </a>
            <a href="#" className="transition-all duration-200 hover:text-teal-400">
              <AiOutlineInstagram />
            </a>
            <a href="#" className="transition-all duration-200 hover:text-teal-400">
              <AiOutlineYoutube />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">عضویت در خبرنامه</h3>
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
        </div>
      </div>

      <div className="border-t border-gray-200 mt-8 pt-4 text-center text-sm text-gray-500">
        © 2025 آموزش وردپرس | تمام حقوق محفوظ است.
      </div>
    </footer>
  );
}
