"use client"
"use client"
import {clsx } from 'clsx';
import { motion } from 'framer-motion';


const ItemLayout = ({children, className}) => {
    return <motion.div 
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    transition={{ duration: 0.5 }}
    ////viewport={{ once: true }}
    className={clsx(
        "  bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-sm p-8 sm:p-8  rounded-xl flex items-center justify-center space-y-8 ",
        className
        
    ) }>
        {children}
    </motion.div>
};

export default ItemLayout;
