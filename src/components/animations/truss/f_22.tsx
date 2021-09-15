import { motion, AnimationProps } from 'framer-motion'

const color1 = '#4E4E4E'
const color2 = '#2F2F2F'
const color3 = '#CADEFC'
const color4 = '#252323'
const color6 = 'rgba(37, 35, 35, 0.3)';
const color7 = 'rgba(202, 222, 252, 0.7)';

const mainPathVariant: AnimationProps = {
  transition: { duration: 6, ease: 'easeInOut' },
  variants: { visible: { pathLength: 1 }, hidden: { pathLength: 0 } },
}

const shapeVariations: AnimationProps = {
  transition: { delay: 0, duration: 1, ease: 'easeIn' },
  variants: {
    visible: {
      fillOpacity: 1,
      pathLength: 1,
      transition: { delay: 0, duration: 4 },
    },
    hidden: { fillOpacity: 0, pathLength: 0 },
  },
}

const F_22 = () => {
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
            id='bar_element_22'
            data-name='Bar element deformation 4'
          >
            <motion.path
              {...mainPathVariant}
              d='M203 54H251.5H300'
              stroke={color6}
              stroke-opacity='0.3'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.circle
              cx='78'
              cy='54'
              r='4'
              transform='rotate(-180 78 54)'
              fill={color3}
              stroke='black'
              {...shapeVariations}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
              }}
              initial={{ y: 60, opacity: 0, }}
            />
            <motion.circle
              cx='304'
              cy='54'
              r='4'
              transform='rotate(-180 304 54)'
              fill={color3}
              stroke='black'
              {...shapeVariations}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
              }}
              initial={{ y: 60, opacity: 0, }}
            />
            <motion.path
              d='M304.354 63.6465C304.158 63.4512 303.842 63.4512 303.646 63.6465L300.464 66.8284C300.269 67.0237 300.269 67.3403 300.464 67.5355C300.66 67.7308 300.976 67.7308 301.172 67.5355L304 64.7071L306.828 67.5355C307.024 67.7308 307.34 67.7308 307.536 67.5355C307.731 67.3403 307.731 67.0237 307.536 66.8284L304.354 63.6465ZM304.5 104V64H303.5V104H304.5Z'
              fill={color1}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M271.285 89H269.665V76.148H276.847V77.57H271.285V82.124H276.505V83.546H271.285V89ZM281.069 84.068L277.739 79.352H279.539L282.023 82.988L284.489 79.352H286.271L282.941 84.068L286.451 89H284.651L282.023 85.148L279.359 89H277.577L281.069 84.068ZM296.716 86.084H294.844V89H293.314V86.084H287.158V84.734L293.206 76.076H294.844V84.662H296.716V86.084ZM293.314 80.612C293.314 79.988 293.326 79.46 293.35 79.028C293.374 78.584 293.392 78.164 293.404 77.768H293.332C293.236 77.996 293.116 78.242 292.972 78.506C292.828 78.77 292.69 78.992 292.558 79.172L288.706 84.662H293.314V80.612Z'
              fill={color4}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.circle
              cx='304'
              cy='34'
              r='4'
              transform='rotate(-180 304 34)'
              fill={color3}
              stroke='black'
              {...shapeVariations}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
              }}
              initial={{ y: 60, opacity: 0, }}
            />
            <motion.path
              d='M300 34C240.8 34 276 34 262.5 34C237.134 34 231.4 54 199 54C166.6 54 95.1667 54 82 54'
              stroke='black'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M350.823 53.1768C350.921 53.2744 351.079 53.2744 351.177 53.1768L352.768 51.5858C352.865 51.4882 352.865 51.3299 352.768 51.2322C352.67 51.1346 352.512 51.1346 352.414 51.2322L351 52.6464L349.586 51.2322C349.488 51.1346 349.33 51.1346 349.232 51.2322C349.135 51.3299 349.135 51.4882 349.232 51.5858L350.823 53.1768ZM351.177 34.8232C351.079 34.7256 350.921 34.7256 350.823 34.8232L349.232 36.4142C349.135 36.5118 349.135 36.6701 349.232 36.7678C349.33 36.8654 349.488 36.8654 349.586 36.7678L351 35.3536L352.414 36.7678C352.512 36.8654 352.67 36.8654 352.768 36.7678C352.865 36.6701 352.865 36.5118 352.768 36.4142L351.177 34.8232ZM351.25 53L351.25 35L350.75 35L350.75 53L351.25 53Z'
              fill={color1}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M311 54H355'
              stroke={color2}
              stroke-dasharray='5 5'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M311 34H355'
              stroke={color2}
              stroke-dasharray='5 5'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M361.509 41.4605C359.467 41.9651 358 44.1302 358 46.0349C358 47.7768 359.148 48.7535 360.424 48.7535C362.306 48.7535 363.582 46.1163 363.582 43.9512C363.582 42.4861 362.913 41.5907 362.514 41.0535C361.924 40.2884 360.967 39.0349 360.967 38.2535C360.967 37.9767 361.174 37.4884 361.876 37.4884C362.37 37.4884 362.673 37.6674 363.152 37.9442C363.295 38.0419 363.662 38.2535 363.87 38.2535C364.204 38.2535 364.444 37.9116 364.444 37.6512C364.444 37.3419 364.204 37.293 363.646 37.1628C362.897 37 362.673 37 362.402 37C362.131 37 360.568 37 360.568 38.6605C360.568 39.4581 360.967 40.3861 361.509 41.4605ZM361.684 41.7698C362.29 43.0558 362.53 43.5442 362.53 44.6023C362.53 45.8721 361.86 48.4279 360.44 48.4279C359.818 48.4279 358.925 48.0047 358.925 46.4907C358.925 45.4326 359.515 42.3558 361.684 41.7698Z'
              fill='black'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M367.278 48.786C367.448 48.6233 367.894 48.2651 368.064 48.1132C368.724 47.4946 369.351 46.8977 369.351 45.9101C369.351 44.6186 368.288 43.7829 366.959 43.7829C365.683 43.7829 364.843 44.7705 364.843 45.7364C364.843 46.2682 365.257 46.3442 365.406 46.3442C365.629 46.3442 365.959 46.1814 365.959 45.769C365.959 45.2046 365.427 45.2046 365.3 45.2046C365.608 44.4124 366.321 44.1411 366.842 44.1411C367.83 44.1411 368.341 44.9984 368.341 45.9101C368.341 47.0388 367.565 47.8636 366.31 49.1767L364.97 50.5876C364.843 50.707 364.843 50.7287 364.843 51H369.043L369.351 49.0574H369.021C368.989 49.2744 368.904 49.8171 368.777 50.0233C368.713 50.1101 367.905 50.1101 367.735 50.1101H365.842L367.278 48.786Z'
              fill='black'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M372.927 48.786C373.097 48.6233 373.543 48.2651 373.713 48.1132C374.373 47.4946 375 46.8977 375 45.9101C375 44.6186 373.937 43.7829 372.608 43.7829C371.332 43.7829 370.492 44.7705 370.492 45.7364C370.492 46.2682 370.906 46.3442 371.055 46.3442C371.278 46.3442 371.608 46.1814 371.608 45.769C371.608 45.2046 371.076 45.2046 370.949 45.2046C371.257 44.4124 371.97 44.1411 372.491 44.1411C373.479 44.1411 373.99 44.9984 373.99 45.9101C373.99 47.0388 373.214 47.8636 371.959 49.1767L370.619 50.5876C370.492 50.707 370.492 50.7287 370.492 51H374.692L375 49.0574H374.67C374.638 49.2744 374.553 49.8171 374.426 50.0233C374.362 50.1101 373.554 50.1101 373.384 50.1101H371.491L372.927 48.786Z'
              fill='black'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
          </g>
        </svg>
      </div>
    </motion.div>
  )
}

export default F_22
