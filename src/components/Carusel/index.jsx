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
                {props.result.map((path, index) => {
                    return <SwiperSlide key={index}><picture><source srcSet={path} /><img src={path} alt="" /></picture></SwiperSlide>
                }
                )}
            </Swiper>
        </div>

    </>
}

export default Carusel