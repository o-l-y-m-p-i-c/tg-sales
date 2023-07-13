

import styles from './style.module.css'
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

export const ProductListPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className={`container ${styles.page}`}>
                <h1>
                    ProductListPage
                </h1>

                <div className={styles.swiper} style={{ width: '100%' }}>
                    <Swiper
                        className={styles.swiperContainer}
                        // spaceBetween={50}
                        slidesPerView={1}
                    // navigation
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide><picture><source srcSet='/assets/img/1.png' /><img src="/assets/img/1.png" alt="" /></picture></SwiperSlide>
                        <SwiperSlide><picture><source srcSet='/assets/img/1.png' /><img src="/assets/img/1.png" alt="" /></picture></SwiperSlide>
                        <SwiperSlide><picture><source srcSet='/assets/img/1.png' /><img src="/assets/img/1.png" alt="" /></picture></SwiperSlide>
                        <SwiperSlide><picture><source srcSet='/assets/img/1.png' /><img src="/assets/img/1.png" alt="" /></picture></SwiperSlide>

                    </Swiper>

                    <Swiper
                        className={styles.swiperContainer}
                        // spaceBetween={50}
                        slidesPerView={1}
                    // navigation
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide><picture><source srcSet='/assets/img/1.png' /><img src="/assets/img/1.png" alt="" /></picture></SwiperSlide>
                        <SwiperSlide><picture><source srcSet='/assets/img/1.png' /><img src="/assets/img/1.png" alt="" /></picture></SwiperSlide>
                        <SwiperSlide><picture><source srcSet='/assets/img/1.png' /><img src="/assets/img/1.png" alt="" /></picture></SwiperSlide>
                        <SwiperSlide><picture><source srcSet='/assets/img/1.png' /><img src="/assets/img/1.png" alt="" /></picture></SwiperSlide>

                    </Swiper>

                    <Swiper
                        className={styles.swiperContainer}
                        // spaceBetween={50}
                        slidesPerView={1}
                    // navigation
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide><picture><source srcSet='/assets/img/1.png' /><img src="/assets/img/1.png" alt="" /></picture></SwiperSlide>
                        <SwiperSlide><picture><source srcSet='/assets/img/1.png' /><img src="/assets/img/1.png" alt="" /></picture></SwiperSlide>
                        <SwiperSlide><picture><source srcSet='/assets/img/1.png' /><img src="/assets/img/1.png" alt="" /></picture></SwiperSlide>
                        <SwiperSlide><picture><source srcSet='/assets/img/1.png' /><img src="/assets/img/1.png" alt="" /></picture></SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </motion.div>
    )
}