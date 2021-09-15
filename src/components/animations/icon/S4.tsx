import { motion } from 'framer-motion';
import {
  mainPathVariant,
  shapeVariations
} from '@/lib/config/animations/bar-deformations';

const color1 = '#4E4E4E'
const color2 = '#2F2F2F'
const color3 = '#CADEFC'
const color4 = '#252323'
const color6 = 'rgba(37, 35, 35, 0.3)';
const color7 = 'rgba(202, 222, 252, 0.7)';

const S4 = () => {
  return (
    <motion.div
      className='animationParent'
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
    >
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='388'
          height='116'
          viewBox='0 0 388 116'
          fill='none'
        >
          <g
            id='s4'
            data-name='s4'
          >
       
          </g>
        </svg>
      </div>
    </motion.div>
  )
}

export default S4
