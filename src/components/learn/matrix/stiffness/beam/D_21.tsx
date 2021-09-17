import { motion } from 'framer-motion';
import {
  mainPathVariant,
  shapeVariations,
} from '@/lib/config/animations/svgs/svgs';

const color1 = '#4E4E4E';
const color2 = '#2F2F2F';
const color3 = '#CADEFC';
const color4 = '#252323';
const color6 = 'rgba(37, 35, 35, 0.3)';
const color7 = 'rgba(202, 222, 252, 0.7)';

const D_21 = () => {
  return (
    <motion.div
      className='animationParent'
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='388'
        height='116'
        viewBox='0 0 388 116'
        fill='none'
      >
        <g id='d_21' data-name='d_21'>
          <motion.path
            {...mainPathVariant}
            d='M307 40C247.8 40 283 40 269.5 40C244.134 40 238.4 60 206 60C173.6 60 102.167 60 89 60'
            stroke='black'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M210 60L307 60'
            stroke={color6}
            stroke-opacity='0.3'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M333.646 64.6464C333.842 64.4512 334.158 64.4512 334.354 64.6464L337.536 67.8284C337.731 68.0237 337.731 68.3403 337.536 68.5355C337.34 68.7308 337.024 68.7308 336.828 68.5355L334 65.7071L331.172 68.5355C330.976 68.7308 330.66 68.7308 330.464 68.5355C330.269 68.3403 330.269 68.0237 330.464 67.8284L333.646 64.6464ZM333.5 88L333.5 65L334.5 65L334.5 88L333.5 88Z'
            fill='#4E4E4E'
            animate='visible'
            {...shapeVariations}
            initial='hidden'
          />
          <motion.path
            d='M334.354 36.3536C334.158 36.5488 333.842 36.5488 333.646 36.3536L330.464 33.1716C330.269 32.9763 330.269 32.6597 330.464 32.4645C330.66 32.2692 330.976 32.2692 331.172 32.4645L334 35.2929L336.828 32.4645C337.024 32.2692 337.34 32.2692 337.536 32.4645C337.731 32.6597 337.731 32.9763 337.536 33.1716L334.354 36.3536ZM333.5 36L333.5 13L334.5 13L334.5 36L333.5 36Z'
            fill='#4E4E4E'
            animate='visible'
            {...shapeVariations}
            initial='hidden'
          />
          <motion.path
            d='M362 40H323'
            stroke='#4E4E4E'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M362 61H323'
            stroke='#4E4E4E'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M327.524 55.18C326.228 55.18 325.268 54.76 324.644 53.92C324.032 53.068 323.708 52.036 323.672 50.824L323.654 50.32L323.672 49.816C323.708 48.604 324.032 47.578 324.644 46.738C325.268 45.886 326.228 45.46 327.524 45.46C328.832 45.46 329.84 45.934 330.548 46.882V42.616C330.548 42.496 330.584 42.4 330.656 42.328C330.728 42.256 330.824 42.22 330.944 42.22H331.25C331.37 42.22 331.466 42.256 331.538 42.328C331.61 42.4 331.646 42.496 331.646 42.616V54.604C331.646 54.724 331.61 54.82 331.538 54.892C331.466 54.964 331.37 55 331.25 55H330.944C330.824 55 330.728 54.964 330.656 54.892C330.584 54.82 330.548 54.724 330.548 54.604V53.758C329.852 54.706 328.844 55.18 327.524 55.18ZM327.632 54.136C328.58 54.136 329.294 53.824 329.774 53.2C330.254 52.564 330.512 51.82 330.548 50.968C330.56 50.848 330.566 50.614 330.566 50.266C330.566 49.918 330.56 49.684 330.548 49.564C330.536 49.048 330.422 48.562 330.206 48.106C329.99 47.638 329.666 47.254 329.234 46.954C328.802 46.654 328.268 46.504 327.632 46.504C326.66 46.504 325.946 46.816 325.49 47.44C325.046 48.052 324.806 48.844 324.77 49.816L324.752 50.32C324.752 51.436 324.968 52.354 325.4 53.074C325.832 53.782 326.576 54.136 327.632 54.136ZM334.077 58.06C333.957 58.06 333.861 58.024 333.789 57.952C333.717 57.88 333.681 57.784 333.681 57.664V57.358C333.681 57.262 333.711 57.166 333.771 57.07C333.831 56.986 333.945 56.884 334.113 56.764L334.995 56.134C335.655 55.654 336.123 55.3 336.399 55.072C336.687 54.856 336.903 54.64 337.047 54.424C337.203 54.196 337.281 53.944 337.281 53.668C337.281 53.368 337.167 53.128 336.939 52.948C336.711 52.756 336.435 52.66 336.111 52.66C335.739 52.66 335.469 52.726 335.301 52.858C335.145 52.99 335.043 53.11 334.995 53.218C334.935 53.338 334.899 53.41 334.887 53.434C334.815 53.566 334.749 53.656 334.689 53.704C334.629 53.74 334.551 53.758 334.455 53.758H334.185C333.969 53.758 333.861 53.656 333.861 53.452C333.861 53.176 333.963 52.9 334.167 52.624C334.371 52.336 334.647 52.108 334.995 51.94C335.343 51.76 335.715 51.67 336.111 51.67C336.771 51.67 337.305 51.868 337.713 52.264C338.121 52.66 338.325 53.128 338.325 53.668C338.325 54.1 338.229 54.484 338.037 54.82C337.857 55.144 337.575 55.462 337.191 55.774C336.819 56.086 336.243 56.512 335.463 57.052H338.199C338.319 57.052 338.415 57.088 338.487 57.16C338.559 57.232 338.595 57.328 338.595 57.448V57.664C338.595 57.784 338.559 57.88 338.487 57.952C338.415 58.024 338.319 58.06 338.199 58.06H334.077ZM341.78 58.06C341.66 58.06 341.564 58.024 341.492 57.952C341.42 57.88 341.384 57.784 341.384 57.664V53.146L340.25 53.992C340.19 54.04 340.112 54.064 340.016 54.064C339.896 54.064 339.788 54.01 339.692 53.902L339.566 53.722C339.506 53.638 339.476 53.554 339.476 53.47C339.476 53.35 339.53 53.248 339.638 53.164L341.366 51.886C341.486 51.802 341.624 51.76 341.78 51.76H342.032C342.152 51.76 342.248 51.796 342.32 51.868C342.392 51.94 342.428 52.036 342.428 52.156V57.664C342.428 57.784 342.392 57.88 342.32 57.952C342.248 58.024 342.152 58.06 342.032 58.06H341.78Z'
            fill='#4E4E4E'
            animate='visible'
            {...shapeVariations}
            initial='hidden'
          />
          <motion.path
            d='M311 70L308.113 75H313.887L311 70ZM311.5 100V74.5H310.5V100H311.5Z'
            fill='#4E4E4E'
            animate='visible'
            {...shapeVariations}
            initial='hidden'
          />
          <motion.path
            d='M290.395 95C290.275 95 290.179 94.964 290.107 94.892C290.035 94.82 289.999 94.724 289.999 94.604V86.684H288.397C288.277 86.684 288.181 86.648 288.109 86.576C288.037 86.504 288.001 86.408 288.001 86.288V86.036C288.001 85.916 288.037 85.82 288.109 85.748C288.181 85.676 288.277 85.64 288.397 85.64H289.999V84.614C289.999 83.702 290.197 82.988 290.593 82.472C290.989 81.944 291.697 81.68 292.717 81.68H293.653C293.773 81.68 293.869 81.716 293.941 81.788C294.013 81.86 294.049 81.956 294.049 82.076V82.328C294.049 82.448 294.013 82.544 293.941 82.616C293.869 82.688 293.773 82.724 293.653 82.724H292.717C292.105 82.724 291.679 82.886 291.439 83.21C291.211 83.522 291.097 84.02 291.097 84.704V85.64H293.473C293.593 85.64 293.689 85.676 293.761 85.748C293.833 85.82 293.869 85.916 293.869 86.036V86.288C293.869 86.408 293.833 86.504 293.761 86.576C293.689 86.648 293.593 86.684 293.473 86.684H291.097V94.604C291.097 94.724 291.061 94.82 290.989 94.892C290.917 94.964 290.821 95 290.701 95H290.395ZM295.1 98.06C294.98 98.06 294.884 98.024 294.812 97.952C294.74 97.88 294.704 97.784 294.704 97.664V97.358C294.704 97.262 294.734 97.166 294.794 97.07C294.854 96.986 294.968 96.884 295.136 96.764L296.018 96.134C296.678 95.654 297.146 95.3 297.422 95.072C297.71 94.856 297.926 94.64 298.07 94.424C298.226 94.196 298.304 93.944 298.304 93.668C298.304 93.368 298.19 93.128 297.962 92.948C297.734 92.756 297.458 92.66 297.134 92.66C296.762 92.66 296.492 92.726 296.324 92.858C296.168 92.99 296.066 93.11 296.018 93.218C295.958 93.338 295.922 93.41 295.91 93.434C295.838 93.566 295.772 93.656 295.712 93.704C295.652 93.74 295.574 93.758 295.478 93.758H295.208C294.992 93.758 294.884 93.656 294.884 93.452C294.884 93.176 294.986 92.9 295.19 92.624C295.394 92.336 295.67 92.108 296.018 91.94C296.366 91.76 296.738 91.67 297.134 91.67C297.794 91.67 298.328 91.868 298.736 92.264C299.144 92.66 299.348 93.128 299.348 93.668C299.348 94.1 299.252 94.484 299.06 94.82C298.88 95.144 298.598 95.462 298.214 95.774C297.842 96.086 297.266 96.512 296.486 97.052H299.222C299.342 97.052 299.438 97.088 299.51 97.16C299.582 97.232 299.618 97.328 299.618 97.448V97.664C299.618 97.784 299.582 97.88 299.51 97.952C299.438 98.024 299.342 98.06 299.222 98.06H295.1ZM302.803 98.06C302.683 98.06 302.587 98.024 302.515 97.952C302.443 97.88 302.407 97.784 302.407 97.664V93.146L301.273 93.992C301.213 94.04 301.135 94.064 301.039 94.064C300.919 94.064 300.811 94.01 300.715 93.902L300.589 93.722C300.529 93.638 300.499 93.554 300.499 93.47C300.499 93.35 300.553 93.248 300.661 93.164L302.389 91.886C302.509 91.802 302.647 91.76 302.803 91.76H303.055C303.175 91.76 303.271 91.796 303.343 91.868C303.415 91.94 303.451 92.036 303.451 92.156V97.664C303.451 97.784 303.415 97.88 303.343 97.952C303.271 98.024 303.175 98.06 303.055 98.06H302.803Z'
            fill='#4E4E4E'
            animate='visible'
            {...shapeVariations}
            initial='hidden'
          />
          <motion.circle
            cx='210'
            cy='60'
            r='4'
            fill='#CADEFC'
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
            cx='311'
            cy='40'
            r='4'
            transform='rotate(-180 311 40)'
            fill='#CADEFC'
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
            cx='311'
            cy='60'
            r='4'
            fill={color7}
            stroke={color6}
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
            }}
            initial={{ y: 60, opacity: 0, }}
          />
        </g>
      </svg>
    </motion.div>
  )
};

export default D_21;