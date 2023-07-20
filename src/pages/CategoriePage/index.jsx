import styles from './style.module.css'
import { motion } from 'framer-motion';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { useRef, useEffect, useState } from 'react';
import CategorieItem from '../../components/CategorieItem';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';





export const CategoriePage = () => {
    const { id } = useParams();
    const [pageHeight, setPageHeight] = useState(0)
    const [categories, setCategories] = useState([])
    const containerRef = useRef(null)

    const fetchedShop = useSelector(state => state.ApplicationReducer.fetchedShop)

    const resize = () => {
        setPageHeight(prev => containerRef.current.scrollHeight + 100)
    }

    useEffect(() => {
        setPageHeight(prev => containerRef.current.scrollHeight + 100)

        // console.log(containerRef.current)

        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, [pageHeight, id])


    useEffect(() => {
        // console.log(fetchedShop)
        if (fetchedShop) {
            setCategories(searchCategories(fetchedShop))
        }
        // eslint-disable-next-line
    }, [id, fetchedShop])

    function searchCategories(data) {
        if (data && data.haveChilds && id === undefined) {
            return data.Categories.map((item, index) => <CategorieItem key={index} props={{ item }} />)
        } else if (data.haveChilds && id) {
            const cat = crop(data);
            console.log(cat)
            if (cat) {
                return cat.Categories.map((item, index) => <CategorieItem key={index} props={{ item }} />)
            }

            function crop(arr) {
                for (let i = 0; i < arr.Categories.length; i++) {
                    const element = arr.Categories[i];
                    // console.log(element) 
                    // eslint-disable-next-line
                    if (element.categorySlug == id) {
                        return element;
                        // return element
                    }
                    if (element.Categories.length > 0) {

                        let a = crop(element)
                        if (a !== undefined) {
                            if (a)
                                return a
                        }


                    }

                }

            }
        }

    }


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ maxHeight: 0 }}

            style={{ overflow: 'hidden' }}
        >
            <div className={`container ${styles.page}`} ref={containerRef} >
                <h1>
                    {id ? `Category - ${id}` : 'Categories'}
                </h1>
                <div className={styles.categoryList}>
                    {categories}
                </div>

            </div>
        </motion.div >
    )
}