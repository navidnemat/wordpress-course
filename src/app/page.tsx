import { FaArrowLeft } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsDatabase } from "react-icons/bs";
import { FaWordpressSimple } from "react-icons/fa";
import { TbSeo } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";
import { TbTargetArrow } from "react-icons/tb";
import { LiaTelegram } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";
import Accordion from "@/components/accordion";
import FeedbackSlider from "@/components/feedBackSlider";

export default function Home() {
  return (
    <main>
      {/* hero section*/}
      <section className="relative bg-gradient-to-r from-indigo-500 to-purple-500 text-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-12 py-40">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 flex flex-col gap-11">
            
              <h2 className="text-[24px] lg:text-[40px] font-extrabold leading-tight text-white drop-shadow-md">بیاموزید که چگونه حرفه ای و پیشرفته طراحی سایت کنید</h2>
              <p className="text-white/85 leading-relaxed max-w-[500px]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
              <div>
                <button className="bg-teal-400 px-4 py-2.5 rounded-full ease-in transition-all duration-200  hover:shadow-[0_0_10px_#00D5BE] flex items-center gap-2.5 hover:[&_svg]:-translate-x-1">مشاهده دوره ها
                  <FaArrowLeft className="transition-all duration-200" />
                </button>
              </div>

            </div>
            <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-center">
              <div className="overflow-hidden">
                {/* <img src="/images/sample.png" alt="آموزش وردپرس" className="object-cover w-full h-full" /> */}
              </div>
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
              fill="#f3f3f3"
            />
          </svg>
        </div>
      </section>

      <section className="pt-20">
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full">
            <div className="flex flex-col items-center mb-8 lg:mb-0">
              <span className="vazirBold text-2xl">دوره آموزشی وردپرس</span>
              <div className="rounded-full w-60 h-1.5 bg-gradient-to-r from-teal-400 to-purple-500 mt-2.5"></div>
              <p className="text-slate-700 mt-2.5">لورم ایپسوم متن ساختگی</p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end justify-center">
              <div className="flex gap-5 p-8 rounded-xl bg-white/90 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 backdrop-blur-sm border border-slate-200">
                <div className="w-12 h-12 min-w-12 p-2 lg:w-16 lg:h-16 flex items-center justify-center rounded-full bg-purple-500 text-white shadow-lg">
                  <AiOutlineGlobal className="text-3xl lg:text-4xl" />
                </div>
                <div className="flex flex-col items-center">
                  <span className="vazirBold text-xl lg:text-2xl text-gray-800">توسعه وب</span>
                  <p className="text-gray-600 max-w-[280px] text-center mt-2 leading-relaxed">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم...
                  </p>
                </div>
              </div>

              <div className="flex gap-5 p-8 rounded-xl bg-white/90 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 backdrop-blur-sm border border-slate-200">
                <div className="w-12 h-12 min-w-12 p-2 lg:w-16 lg:h-16 flex items-center justify-center rounded-full bg-purple-500 text-white shadow-lg">
                  <BsDatabase className="text-3xl lg:text-4xl" />
                </div>
                <div className="flex flex-col items-center">
                  <span className="vazirBold text-xl lg:text-2xl text-gray-800">طراحی دیتابیس</span>
                  <p className="text-gray-600 max-w-[280px] text-center mt-2 leading-relaxed">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم...
                  </p>
                </div>
              </div>

              <div className="flex gap-5 p-8 rounded-xl bg-white/90 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 backdrop-blur-sm border border-slate-200">
                <div className="w-12 h-12 min-w-12 p-2 lg:w-16 lg:h-16 flex items-center justify-center rounded-full bg-purple-500 text-white shadow-lg">
                  <FaWordpressSimple className="text-3xl lg:text-4xl" />
                </div>
                <div className="flex flex-col items-center">
                  <span className="vazirBold text-xl lg:text-2xl text-gray-800">وردپرس</span>
                  <p className="text-gray-600 max-w-[280px] text-center mt-2 leading-relaxed">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم...
                  </p>
                </div>
              </div>

              <div className="flex gap-5 p-8 rounded-xl bg-white/90 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 backdrop-blur-sm border border-slate-200">
                <div className="w-12 h-12 min-w-12 p-2 lg:w-16 lg:h-16 flex items-center justify-center rounded-full bg-purple-500 text-white shadow-lg">
                  <TbSeo className="text-3xl lg:text-4xl" />
                </div>
                <div className="flex flex-col items-center">
                  <span className="vazirBold text-xl lg:text-2xl text-gray-800">سئو</span>
                  <p className="text-gray-600 max-w-[280px] text-center mt-2 leading-relaxed">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم...
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="pt-25 ">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-18">
          <div className="max-w-[1440px] mx-auto px-12">
            <div className="w-full flex flex-col lg:flex-row items-center justify-between">
              <div className="w-full lg:w-1/2 flex items-center justify-center">
                <div className="overflow-hidden">
                  {/* <img src="/images/sample.png" alt="آموزش وردپرس" className="object-cover w-full h-full" /> */}
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col">
                <span className="vazirBold text-2xl text-shadow-sm">با دوره های ما خیلی سریع متخصص شوید</span>
                <div className="rounded-full w-60 h-1.5  bg-teal-400 mt-6"></div>
                <p className="opacity-80 mt-7 max-w-[560px]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
                <div>
                  <button className="bg-teal-400 px-4 py-2.5 rounded-full mt-14 ease-in transition-all duration-200 hover:shadow-[0_0_10px_#00D5BE] flex items-center gap-2.5 hover:[&_svg]:-translate-x-1">همین حالا شروع کنید
                    <FaArrowLeft className="transition-all duration-200" />
                  </button>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      <div className="bg-gradient-to-br from-green-100 via-sky-100 to-purple-100 pb-25">
        <section className="pt-15">
          <div className="max-w-[1440px] mx-auto px-12">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2 flex flex-col text-gray-800">
                <div className="w-15 h-15 bg-white/60 border border-slate-200 text-gray-600 rounded-full flex items-center justify-center">
                  <FaWordpressSimple size={30} />
                </div>
                <span className="vazirBold text-2xl text-shadow-sm mt-5">یادبگیرید چه کار کنید</span>
                <div className="rounded-full w-50 h-1.5 bg-gradient-to-l from-teal-400 to-sky-500 mt-5"></div>
                <p className=" mt-6 max-w-[560px] leading-relaxed">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزن</p>
                <p className="mt-5 pt-5 border-t border-slate-300 opacity-80 max-w-[500px] leading-relaxed">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
              </div>
              <div className="w-full lg:w-1/2 flex items-center justify-center">
                <div className="overflow-hidden">
                  {/* <img src="/images/sample.png" alt="آموزش وردپرس" className="object-cover w-full h-full" /> */}
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="pt-12 mt-12 border-t-[2px] border-slate-50/40">
          <div className="max-w-[1440px] mx-auto px-12">
            <div className="flex flex-col lg:flex-row items-center">


              <div className="w-full lg:w-1/2 flex items-center justify-center">
                <div className="overflow-hidden">
                  {/* <img src="/images/sample.png" alt="آموزش وردپرس" className="object-cover w-full h-full" /> */}
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col text-gray-800">
                <div className="w-15 h-15 bg-white/60 border border-slate-200 text-gray-600 rounded-full flex items-center justify-center">
                  <CgWebsite size={30} />
                </div>
                <span className="vazirBold text-2xl text-shadow-sm mt-5">نمونه کار های خود را بسازید</span>
                <div className="rounded-full w-66 h-1.5 bg-gradient-to-l from-teal-400 to-sky-500 mt-5"></div>
                <p className=" mt-6 max-w-[560px] leading-relaxed">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزن</p>
                <p className="mt-5 pt-5 border-t border-slate-300 opacity-80 max-w-[500px] leading-relaxed">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه</p>
              </div>
            </div>
          </div>

        </section>

        <section className="pt-12 mt-12 border-t-[2px] border-slate-50/40">
          <div className="max-w-[1440px] mx-auto px-12">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2 flex flex-col text-gray-800">
                <div className="w-15 h-15 bg-white/60 border border-slate-200 text-gray-600 rounded-full flex items-center justify-center">
                  <TbTargetArrow size={30} />
                </div>
                <span className="vazirBold text-2xl text-shadow-sm mt-5">به اهداف خود برسید</span>
                <div className="rounded-full w-48 h-1.5 bg-gradient-to-l from-teal-400 to-sky-500 mt-5"></div>
                <p className=" mt-6 max-w-[560px] leading-relaxed">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزن</p>
                <p className="mt-5 pt-5 border-t border-slate-300 opacity-80 max-w-[500px] leading-relaxed">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون</p>
              </div>

              <div className="w-full lg:w-1/2 flex items-center justify-center">
                <div className="overflow-hidden">
                  {/* <img src="/images/sample.png" alt="آموزش وردپرس" className="object-cover w-full h-full" /> */}
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>

      <section>
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white pt-22 pb-30">
          <div className="max-w-[1440px] mx-auto px-12">
            <div className="w-full flex flex-col lg:flex-row items-center justify-between">
              <div className="w-full lg:w-1/2 flex flex-col">
                <span className="vazirBold text-2xl text-shadow-sm">کل کارآموز ها در دوره پروژه محور شرکت می کنند!</span>

                <p className="opacity-80 mt-7 max-w-[560px]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>

              </div>
              <div className="w-full lg:w-1/2 flex items-center justify-center">
                <div className="overflow-hidden">
                  {/* <img src="/images/sample.png" alt="آموزش وردپرس" className="object-cover w-full h-full" /> */}
                </div>
              </div>

            </div>
          </div>


        </div>
      </section>

      <section className="pt-12">
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-10">
            <Link href={''} className="w-full lg:w-1/2 flex items-center gap-4 bg-white shadow-md rounded-lg cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[#1b80f3]/20">
              <div className="flex items-center justify-center p-6 text-white bg-[#1b80f3]">
                <LiaTelegram size={40} />
              </div>
              <div className="flex flex-col">
                <span className="text-lg vazirBold text-[#1b80f3]">در تلگرام</span>
                <span className="text-gray-800">ما را در تلگرام دنبال کنید</span>
              </div>
            </Link>
            <Link href={''} className="w-full lg:w-1/2 flex items-center gap-4 bg-white shadow-md rounded-lg cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[#CC239C]/20">
              <div className="flex items-center justify-center p-6 text-white bg-[#CC239C]">
                <FaInstagram size={40} />
              </div>
              <div className="flex flex-col">
                <span className="text-lg vazirBold text-[#CC239C]">در اینستاگرام</span>
                <span className="text-gray-800">ما را در اینستاگرام دنبال کنید</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="pt-25">
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <span className="vazirBold text-2xl text-gray-800 text-center">سوالات متداول</span>
              <div className="rounded-full w-60 h-1.5 bg-gradient-to-r from-teal-400 to-purple-500 mt-4"></div>
            </div>
            <div className="flex flex-col items-center w-full max-w-[600px] mt-7 gap-4">
              <Accordion title="پشتیبانی دوره چقدر هست ؟">
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
              </Accordion>
              <Accordion title="آیا می توانم فایل های دوره را دانلود کنم ؟">
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
              </Accordion>
              <Accordion title="لورم ایپسوم متن ساختگی با تولید سادگی ؟">
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
              </Accordion>
              <Accordion title="لورم ایپسوم متن ساختگی با تولید سادگی ؟">
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-25">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-18">
          <div className="max-w-[1440px] mx-auto px-12">
              <div className="flex flex-col items-center">
                <span className="vazirBold text-2xl text-shadow-xs">نظرات دانشجویان</span>
                <div className="rounded-full w-50 h-1.5 bg-gradient-to-l from-teal-400 to-sky-500 mt-5"></div>
              </div>

              <FeedbackSlider />
          </div>
        </div>
      </section>

    </main>
  );
}
