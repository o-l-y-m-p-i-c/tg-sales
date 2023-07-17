import styles from './style.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

const Carusel = ({ props }) => {
    return <>
        <div className={styles.swiperWrap}>
            <Swiper
                className={styles.swiperContainer}
                // spaceBetween={50}
                slidesPerView={props.slidesPerView}
            // navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
                {props.result.map(item => <SwiperSlide><picture><source srcSet='/assets/img/1.png' /><img src="/assets/img/1.png" alt="" /></picture></SwiperSlide>)}
            </Swiper>
        </div>

    </>
}

export default Carusel