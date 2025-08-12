'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import FeedbackItem from './feadBackItem';

export default function FeedbackSlider() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={12}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                breakpoints={{
                    360: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 12,
                    },
                }}
            >
                <SwiperSlide>
                    <FeedbackItem text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' name='یه بنده خدا' img='/images/user-01.webp'/>
                </SwiperSlide>
                <SwiperSlide>
                    <FeedbackItem text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' name='یه بنده خدا' img='/images/user-01.webp'/>
                </SwiperSlide>
                <SwiperSlide>
                    <FeedbackItem text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' name='یه بنده خدا' img='/images/user-01.webp'/>
                </SwiperSlide>
                <SwiperSlide>
                    <FeedbackItem text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' name='یه بنده خدا' img='/images/user-01.webp'/>
                </SwiperSlide>
                <SwiperSlide>
                    <FeedbackItem text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' name='یه بنده خدا' img='/images/user-01.webp'/>
                </SwiperSlide>
                <SwiperSlide>
                    <FeedbackItem text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' name='یه بنده خدا' img='/images/user-01.webp'/>
                </SwiperSlide>
                <SwiperSlide>
                    <FeedbackItem text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' name='یه بنده خدا' img='/images/user-01.webp'/>
                </SwiperSlide>
                <SwiperSlide>
                    <FeedbackItem text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' name='یه بنده خدا' img='/images/user-01.webp'/>
                </SwiperSlide>

            </Swiper>
        </>
    );
}
