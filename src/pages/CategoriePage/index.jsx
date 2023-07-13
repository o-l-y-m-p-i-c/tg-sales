
import styles from './style.module.css'
import { motion } from 'framer-motion';



export const CategoriePage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className={`container ${styles.page}`}>
                <h1>
                    Categorie
                </h1>
            </div>
        </motion.div>
    )
}