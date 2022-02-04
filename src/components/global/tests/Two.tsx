import { motion } from 'framer-motion';
import {
  mainPathVariant,
  shapeVariations,
} from '@/lib/config/animations/svgs/svgs';


const Two = () => {
  return (
    <motion.div
      className='animationParent'
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
    >
      <svg
        width='390'
        height='160'
        viewBox='0 0 390 160'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g
          id='bar_element'
          data-name='Bar element 2'
        >
          <motion.path
            {...mainPathVariant}
            d='M93.9476 119.597L196.209 82.5112L294.94 46.5762'
            stroke='#252323'
            strokeWidth='2.5'
          />
          <motion.path
            {...shapeVariations}
            d='M86.0915 120.853C86.0915 118.644 87.8823 116.853 90.0915 116.853C92.3006 116.853 94.0915 118.644 94.0915 120.853C94.0915 123.062 92.3006 124.853 90.0915 124.853C87.8823 124.853 86.0915 123.062 86.0915 120.853Z'
            fill='#CADEFC'
            stroke='#242121'
          />
          <motion.circle
            {...shapeVariations}
            cx='298.094'
            cy='45'
            r='4'
            transform='rotate(-180 298.094 45)'
            fill='#CADEFC'
            stroke='black'
          />
        </g>
      </svg>
    </motion.div>
  )
};

export default Two;
