import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/lib/config/animations/svgs/svgs';
import GoBack from '@/components/buttons/GoBack';
import styles from '@/styles/pages/Tests.module.scss';

const Tests = () => {
  const endpoint = '/';

  return (
    <motion.div
      className={styles.container}
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
    >

      <GoBack link={endpoint} />

      {/* Page parent container */}
      <motion.div className={styles.parent} variants={stagger}>

        {/* Test page 1 */}
        <motion.div
          className={styles.indexCard}
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className={styles.content}>
            <Link href='/tests/test-one'>
              <motion.h2 className={styles.link}>
                Test page 1
              </motion.h2>
            </Link>
          </div>
        </motion.div>

        {/* Test page 2 */}
        <motion.div
          className={styles.indexCard}
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className={styles.content}>
            <Link href='/tests/test-two'>
              <motion.h2 className={styles.link}>
                Test page 2
              </motion.h2>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
};

export default Tests;