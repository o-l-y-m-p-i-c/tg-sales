
import styles from './style.module.css'
import { motion } from 'framer-motion';
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { useRef, useEffect, useState } from 'react';
import CategorieItem from '../../components/CategorieItem';

export const CategoriePage = () => {

    const [pageHeight, setPageHeight] = useState(0)
    const containerRef = useRef(null)


    const resize = () => {
        setPageHeight(prev => containerRef.current.scrollHeight + 100)
    }

    useEffect(() => {
        setPageHeight(prev => containerRef.current.scrollHeight + 100)

        // console.log(containerRef.current)

        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, [pageHeight])


    return (
        <motion.div
            initial={{ maxHeight: 0 }}
            animate={{ maxHeight: pageHeight }}
            exit={{ maxHeight: 0 }}

            style={{ overflow: 'hidden' }}
        >
            <div className={`container ${styles.page}`} ref={containerRef} >
                <h1>
                    Categorie
                </h1>
                <div className={styles.categoryList}>
                    <CategorieItem />
                    <CategorieItem />
                    <CategorieItem />
                    <CategorieItem />
                    <CategorieItem />
                </div>

            </div>
        </motion.div >
    )
}