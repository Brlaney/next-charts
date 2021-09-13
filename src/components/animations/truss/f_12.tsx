import { motion, AnimationProps } from 'framer-motion'

const color1 = '#252323';
const color2 = '#2F2F2F';
const color3 = '#4E4E4E';
const color4 = '#CADEFC';

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

const F_21 = () => {
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
            id='bar_element_12'
            data-name='Bar element deformation 2'
          >
            <motion.circle
              {...mainPathVariant}
              cx='78'
              cy='54'
              r='4'
              transform='rotate(-180 78 54)'
              fill={color4}
              fill-opacity='0.7'
              stroke={color1}
              stroke-opacity='0.3'
              {...shapeVariations}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
              }}
              initial={{ y: 60, opacity: 0, }}
            />
            <motion.circle
              cx='78'
              cy='34'
              r='4'
              transform='rotate(-180 78 34)'
              fill={color4}
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
              fill={color4}
              fill-opacity='0.7'
              stroke='black'
              stroke-opacity='0.3'
              {...shapeVariations}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
              }}
              initial={{ y: 60, opacity: 0, }}
            />
            <motion.path
              d='M29.8232 53.1768C29.9209 53.2744 30.0791 53.2744 30.1768 53.1768L31.7678 51.5858C31.8654 51.4881 31.8654 51.3299 31.7678 51.2322C31.6701 51.1346 31.5118 51.1346 31.4142 51.2322L30 52.6464L28.5858 51.2322C28.4882 51.1346 28.3299 51.1346 28.2322 51.2322C28.1346 51.3299 28.1346 51.4881 28.2322 51.5858L29.8232 53.1768ZM30.1768 33.8232C30.0791 33.7256 29.9209 33.7256 29.8232 33.8232L28.2322 35.4142C28.1346 35.5118 28.1346 35.6701 28.2322 35.7678C28.3299 35.8654 28.4882 35.8654 28.5858 35.7678L30 34.3535L31.4142 35.7678C31.5118 35.8654 31.6701 35.8654 31.7678 35.7678C31.8654 35.6701 31.8654 35.5118 31.7678 35.4142L30.1768 33.8232ZM30.25 53L30.25 34L29.75 34L29.75 53L30.25 53Z'
              fill={color3}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M20 54H70'
              stroke={color2}
              stroke-dasharray='5 5'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M20 33H70'
              stroke={color2}
              stroke-dasharray='5 5'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M82 34C141.2 34 106 34 119.5 34C144.866 34 150.6 54 183 54C215.4 54 286.833 54 300 54'
              stroke='black'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M82 54H183.5'
              stroke={color1}
              stroke-opacity='0.3'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M78.3536 63.6464C78.1583 63.4512 77.8417 63.4512 77.6464 63.6464L74.4645 66.8284C74.2692 67.0237 74.2692 67.3403 74.4645 67.5355C74.6597 67.7308 74.9763 67.7308 75.1716 67.5355L78 64.7071L80.8284 67.5355C81.0237 67.7308 81.3403 67.7308 81.5355 67.5355C81.7308 67.3403 81.7308 67.0237 81.5355 66.8284L78.3536 63.6464ZM78.5 104V64H77.5V104H78.5Z'
              fill={color3}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M44.2849 89H42.6649V76.148H49.8469V77.57H44.2849V82.124H49.5049V83.546H44.2849V89ZM54.0689 84.068L50.7389 79.352H52.5389L55.0229 82.988L57.4889 79.352H59.2709L55.9409 84.068L59.4509 89H57.6509L55.0229 85.148L52.3589 89H50.5769L54.0689 84.068ZM69.1403 89H60.6443V87.686L64.0103 84.284C64.6583 83.636 65.2043 83.06 65.6483 82.556C66.0923 82.052 66.4283 81.56 66.6563 81.08C66.8843 80.588 66.9983 80.054 66.9983 79.478C66.9983 78.77 66.7883 78.236 66.3683 77.876C65.9483 77.504 65.4023 77.318 64.7303 77.318C64.1063 77.318 63.5543 77.426 63.0743 77.642C62.6063 77.858 62.1263 78.158 61.6343 78.542L60.7883 77.48C61.2923 77.06 61.8683 76.706 62.5163 76.418C63.1763 76.118 63.9143 75.968 64.7303 75.968C65.9303 75.968 66.8783 76.274 67.5743 76.886C68.2703 77.486 68.6183 78.32 68.6183 79.388C68.6183 80.06 68.4803 80.69 68.2043 81.278C67.9283 81.866 67.5443 82.448 67.0523 83.024C66.5603 83.588 65.9843 84.194 65.3243 84.842L62.6423 87.488V87.56H69.1403V89Z'
              fill={color1}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M6.50895 39.4605C4.46738 39.9651 3 42.1302 3 44.0349C3 45.7768 4.14838 46.7535 5.42436 46.7535C7.30643 46.7535 8.58242 44.1163 8.58242 41.9512C8.58242 40.4861 7.91253 39.5907 7.51378 39.0535C6.92364 38.2884 5.96666 37.0349 5.96666 36.2535C5.96666 35.9768 6.174 35.4884 6.87579 35.4884C7.37023 35.4884 7.67328 35.6674 8.15177 35.9442C8.29532 36.0419 8.66216 36.2535 8.86951 36.2535C9.20446 36.2535 9.4437 35.9116 9.4437 35.6512C9.4437 35.3419 9.20446 35.293 8.64621 35.1628C7.89658 35 7.67328 35 7.40213 35C7.13099 35 5.56791 35 5.56791 36.6605C5.56791 37.4581 5.96666 38.3861 6.50895 39.4605ZM6.68439 39.7698C7.29048 41.0558 7.52973 41.5442 7.52973 42.6023C7.52973 43.8721 6.85984 46.4279 5.44031 46.4279C4.81827 46.4279 3.92509 46.0047 3.92509 44.4907C3.92509 43.4326 4.51523 40.3558 6.68439 39.7698Z'
              fill={color1}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M12.6178 42.0868C12.6178 41.7938 12.5966 41.7829 12.3095 41.7829C11.8735 42.2171 11.3099 42.4775 10.2998 42.4775V42.8357C10.5869 42.8357 11.1611 42.8357 11.7778 42.5426V48.1101C11.7778 48.5116 11.7459 48.6419 10.7357 48.6419H10.3636V49C10.7995 48.9674 11.714 48.9674 12.1925 48.9674C12.671 48.9674 13.5961 48.9674 14.032 49V48.6419H13.6599C12.6497 48.6419 12.6178 48.5116 12.6178 48.1101V42.0868Z'
              fill={color1}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M17.9265 46.786C18.0967 46.6233 18.5433 46.2651 18.7134 46.1132C19.3726 45.4946 20 44.8977 20 43.9101C20 42.6186 18.9367 41.7829 17.6075 41.7829C16.3316 41.7829 15.4915 42.7705 15.4915 43.7364C15.4915 44.2682 15.9062 44.3442 16.0551 44.3442C16.2784 44.3442 16.608 44.1814 16.608 43.769C16.608 43.2046 16.0764 43.2046 15.9488 43.2046C16.2571 42.4124 16.9695 42.1411 17.4906 42.1411C18.4795 42.1411 18.9898 42.9984 18.9898 43.9101C18.9898 45.0388 18.2136 45.8636 16.9589 47.1767L15.6191 48.5876C15.4915 48.707 15.4915 48.7287 15.4915 49H19.6916L20 47.0574H19.6704C19.6385 47.2744 19.5534 47.8171 19.4258 48.0233C19.362 48.1101 18.5539 48.1101 18.3838 48.1101H16.491L17.9265 46.786Z'
              fill={color1}
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

export default F_21