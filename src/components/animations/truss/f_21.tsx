import { motion, AnimationProps } from 'framer-motion'

const color1 = '#4E4E4E';
const color2 = '#2F2F2F';
const color3 = '#CADEFC';
const color4 = '#252323';

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
          <g id='bar_element_21' data-name='Bar element deformation 3'>
            <motion.path
              d='M82 54.5H191H300'
              stroke={color2}
              stroke-dasharray='8 8'
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
              fill-opacity='0.7'
              stroke={color2}
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
              d='M385.354 54.3536C385.549 54.1583 385.549 53.8417 385.354 53.6464L382.172 50.4645C381.976 50.2692 381.66 50.2692 381.464 50.4645C381.269 50.6597 381.269 50.9763 381.464 51.1716L384.293 54L381.464 56.8284C381.269 57.0237 381.269 57.3403 381.464 57.5355C381.66 57.7308 381.976 57.7308 382.172 57.5355L385.354 54.3536ZM345 54.5H385V53.5H345V54.5Z'
              fill={color1}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M346.285 77H344.665V64.148H351.847V65.57H346.285V70.124H351.505V71.546H346.285V77ZM356.069 72.068L352.739 67.352H354.539L357.023 70.988L359.489 67.352H361.271L357.941 72.068L361.451 77H359.651L357.023 73.148L354.359 77H352.577L356.069 72.068ZM370.654 67.154C370.654 68.018 370.414 68.708 369.934 69.224C369.454 69.728 368.806 70.064 367.99 70.232V70.304C369.022 70.424 369.79 70.748 370.294 71.276C370.798 71.804 371.05 72.494 371.05 73.346C371.05 74.09 370.876 74.756 370.528 75.344C370.18 75.92 369.64 76.37 368.908 76.694C368.188 77.018 367.258 77.18 366.118 77.18C365.446 77.18 364.822 77.126 364.246 77.018C363.67 76.922 363.118 76.742 362.59 76.478V75.002C363.13 75.266 363.712 75.476 364.336 75.632C364.96 75.776 365.56 75.848 366.136 75.848C367.288 75.848 368.116 75.626 368.62 75.182C369.136 74.726 369.394 74.102 369.394 73.31C369.394 72.506 369.076 71.93 368.44 71.582C367.816 71.222 366.934 71.042 365.794 71.042H364.552V69.692H365.812C366.868 69.692 367.666 69.47 368.206 69.026C368.758 68.582 369.034 67.994 369.034 67.262C369.034 66.638 368.824 66.158 368.404 65.822C367.984 65.474 367.414 65.3 366.694 65.3C365.998 65.3 365.404 65.402 364.912 65.606C364.42 65.81 363.934 66.068 363.454 66.38L362.662 65.3C363.118 64.94 363.682 64.628 364.354 64.364C365.038 64.1 365.812 63.968 366.676 63.968C368.02 63.968 369.016 64.268 369.664 64.868C370.324 65.468 370.654 66.23 370.654 67.154Z'
              fill={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M304.823 92.8232C304.726 92.9209 304.726 93.0791 304.823 93.1768L306.414 94.7678C306.512 94.8654 306.67 94.8654 306.768 94.7678C306.865 94.6701 306.865 94.5118 306.768 94.4142L305.354 93L306.768 91.5858C306.865 91.4882 306.865 91.3299 306.768 91.2322C306.67 91.1346 306.512 91.1346 306.414 91.2322L304.823 92.8232ZM333.177 93.1768C333.274 93.0791 333.274 92.9209 333.177 92.8232L331.586 91.2322C331.488 91.1346 331.33 91.1346 331.232 91.2322C331.135 91.3299 331.135 91.4882 331.232 91.5858L332.646 93L331.232 94.4142C331.135 94.5118 331.135 94.6701 331.232 94.7678C331.33 94.8654 331.488 94.8654 331.586 94.7678L333.177 93.1768ZM305 93.25L333 93.25L333 92.75L305 92.75L305 93.25Z'
              fill={color1}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M304 59V96'
              stroke={color2}
              stroke-dasharray='5 5'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M334 59V96'
              stroke={color2}
              stroke-dasharray='5 5'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M308 54H330'
              stroke={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.circle
              cx='334'
              cy='54'
              r='4'
              transform='rotate(-180 334 54)'
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
              d='M313.576 100.46C311.495 100.965 310 103.13 310 105.035C310 106.777 311.17 107.754 312.471 107.754C314.389 107.754 315.689 105.116 315.689 102.951C315.689 101.486 315.006 100.591 314.6 100.053C313.999 99.2884 313.023 98.0349 313.023 97.2535C313.023 96.9767 313.235 96.4884 313.95 96.4884C314.454 96.4884 314.763 96.6674 315.25 96.9442C315.397 97.0419 315.77 97.2535 315.982 97.2535C316.323 97.2535 316.567 96.9116 316.567 96.6512C316.567 96.3419 316.323 96.293 315.754 96.1628C314.99 96 314.763 96 314.486 96C314.21 96 312.617 96 312.617 97.6605C312.617 98.4581 313.023 99.3861 313.576 100.46ZM313.755 100.77C314.373 102.056 314.616 102.544 314.616 103.602C314.616 104.872 313.934 107.428 312.487 107.428C311.853 107.428 310.943 107.005 310.943 105.491C310.943 104.433 311.544 101.356 313.755 100.77Z'
              fill={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M319.455 107.786C319.628 107.623 320.083 107.265 320.257 107.113C320.929 106.495 321.568 105.898 321.568 104.91C321.568 103.619 320.484 102.783 319.13 102.783C317.83 102.783 316.973 103.771 316.973 104.736C316.973 105.268 317.396 105.344 317.548 105.344C317.775 105.344 318.111 105.181 318.111 104.769C318.111 104.205 317.569 104.205 317.439 104.205C317.754 103.412 318.48 103.141 319.011 103.141C320.018 103.141 320.539 103.998 320.539 104.91C320.539 106.039 319.748 106.864 318.469 108.177L317.103 109.588C316.973 109.707 316.973 109.729 316.973 110H321.254L321.568 108.057H321.232C321.2 108.274 321.113 108.817 320.983 109.023C320.918 109.11 320.094 109.11 319.921 109.11H317.992L319.455 107.786Z'
              fill={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M325.559 103.087C325.559 102.794 325.537 102.783 325.244 102.783C324.8 103.217 324.226 103.478 323.196 103.478V103.836C323.489 103.836 324.074 103.836 324.703 103.543V109.11C324.703 109.512 324.67 109.642 323.641 109.642H323.261V110C323.706 109.967 324.638 109.967 325.125 109.967C325.613 109.967 326.556 109.967 327 110V109.642H326.621C325.591 109.642 325.559 109.512 325.559 109.11V103.087Z'
              fill={color2}
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