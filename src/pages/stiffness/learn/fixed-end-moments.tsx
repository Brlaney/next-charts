import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/lib/config/animations/svgs/displacements';
import Distributed from '@/components/stiffness/learn/fem/Distributed';
import Point from '@/components/stiffness/learn/fem/Point';
import Increasing from '@/components/stiffness/learn/fem/Increasing';
import Decreasing from '@/components/stiffness/learn/fem/Decreasing';
import Eqn1 from '@/components/stiffness/learn/fem/Eqn1';
import Eqn2 from '@/components/stiffness/learn/fem/Eqn2';
import Eqn3 from '@/components/stiffness/learn/fem/Eqn3';
import Eqn4 from '@/components/stiffness/learn/fem/Eqn4';
import { data, buttonTexts } from '@/lib/data/stiffness/learn/fixed-end-moments';
import { IDispl } from '@/lib/types';
import GoBack from '@/components/global/buttons/GoBack';
import styles from '@/styles/pages/Displacements.module.scss';


export default function FixedEndMoments() {
  const [display, setDisplay] = useState('');
  const [graphic, setGraphic] = useState(1);
  const endpoint = '/stiffness';

  useEffect(() => {
    let k = graphic - 1;
    setDisplay(data[k]);
  }, [graphic, display]);

  return (
    <motion.div className={styles.container}>

      <GoBack link={endpoint} />

      {/* Main parent container */}
      <div className={styles.parent}>

        {/* Is this a switch case? */}
        <motion.div className={styles.femdisplay}>
          {graphic === 1 && <Distributed />}
          {graphic === 2 && (<><Distributed /><Eqn1 /></>)}
          {graphic === 3 && <Point />}
          {graphic === 4 && (<> <Point /> <Eqn2 /></>)}
          {graphic === 5 && <Increasing />}
          {graphic === 6 && (<> <Increasing /> <Eqn3 /></>)}
          {graphic === 7 && <Decreasing />}
          {graphic === 8 && (<> <Decreasing /> <Eqn4 /></>)}
        </motion.div>

        {/* Information onClick */}
        <motion.div
          className={styles.fembox}
          variants={stagger}
        >
          <motion.p
            id={styles.text}
            className='uk-text uk-text-justify uk-text-center'
            animate='visible'
            initial='hidden'
            variants={fadeInUp}
          >
            {display}
          </motion.p>
        </motion.div>

        {/* Controls state - buttons */}
        <motion.div className={styles.femcontrols}>
          {buttonTexts.map((buttonText: IDispl) => (
            <motion.button
              id={buttonText.id < 1 ? styles.fullwidthbtn : styles.gridbtn}
              className='uk-button'
              onClick={() => { setGraphic(buttonText.id) }}
              whileHover={{
                scale: 1.05,
                transition: {
                  duration: .25
                }
              }}
              whileTap={{ scale: 0.95 }}
            >
              {buttonText.text}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
};