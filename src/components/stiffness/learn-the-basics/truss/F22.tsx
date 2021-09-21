import { motion } from 'framer-motion';
import {
  mainPathVariant,
  shapeVariations
} from '@/lib/config/animations/svgs/svgs';

const color1 = '#4E4E4E';
const color2 = '#CADEFC';
const color3 = 'rgba(37, 35, 35, 0.3)';
const color4 = 'rgba(202, 222, 252, 0.7)';
const color5 = '#9d9898';
const color6 = '#252323';

const F22 = () => {
  return (
    <motion.div
      className='animationParent'
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
    >
      <svg
        width='386'
        height='121'
        viewBox='0 0 386 121'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g
          id='truss_d22'
          data-name='truss_d22'
        >
          <motion.path
            {...mainPathVariant}
            d='M181 61L229.5 61L278 61'
            stroke={color3}
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M300.592 56.18C299.296 56.18 298.336 55.76 297.712 54.92C297.1 54.068 296.776 53.036 296.74 51.824L296.722 51.32L296.74 50.816C296.776 49.604 297.1 48.578 297.712 47.738C298.336 46.886 299.296 46.46 300.592 46.46C301.9 46.46 302.908 46.934 303.616 47.882V43.616C303.616 43.496 303.652 43.4 303.724 43.328C303.796 43.256 303.892 43.22 304.012 43.22H304.318C304.438 43.22 304.534 43.256 304.606 43.328C304.678 43.4 304.714 43.496 304.714 43.616V55.604C304.714 55.724 304.678 55.82 304.606 55.892C304.534 55.964 304.438 56 304.318 56H304.012C303.892 56 303.796 55.964 303.724 55.892C303.652 55.82 303.616 55.724 303.616 55.604V54.758C302.92 55.706 301.912 56.18 300.592 56.18ZM300.7 55.136C301.648 55.136 302.362 54.824 302.842 54.2C303.322 53.564 303.58 52.82 303.616 51.968C303.628 51.848 303.634 51.614 303.634 51.266C303.634 50.918 303.628 50.684 303.616 50.564C303.604 50.048 303.49 49.562 303.274 49.106C303.058 48.638 302.734 48.254 302.302 47.954C301.87 47.654 301.336 47.504 300.7 47.504C299.728 47.504 299.014 47.816 298.558 48.44C298.114 49.052 297.874 49.844 297.838 50.816L297.82 51.32C297.82 52.436 298.036 53.354 298.468 54.074C298.9 54.782 299.644 55.136 300.7 55.136ZM307.145 59.06C307.025 59.06 306.929 59.024 306.857 58.952C306.785 58.88 306.749 58.784 306.749 58.664V58.358C306.749 58.262 306.779 58.166 306.839 58.07C306.899 57.986 307.013 57.884 307.181 57.764L308.063 57.134C308.723 56.654 309.191 56.3 309.467 56.072C309.755 55.856 309.971 55.64 310.115 55.424C310.271 55.196 310.349 54.944 310.349 54.668C310.349 54.368 310.235 54.128 310.007 53.948C309.779 53.756 309.503 53.66 309.179 53.66C308.807 53.66 308.537 53.726 308.369 53.858C308.213 53.99 308.111 54.11 308.063 54.218C308.003 54.338 307.967 54.41 307.955 54.434C307.883 54.566 307.817 54.656 307.757 54.704C307.697 54.74 307.619 54.758 307.523 54.758H307.253C307.037 54.758 306.929 54.656 306.929 54.452C306.929 54.176 307.031 53.9 307.235 53.624C307.439 53.336 307.715 53.108 308.063 52.94C308.411 52.76 308.783 52.67 309.179 52.67C309.839 52.67 310.373 52.868 310.781 53.264C311.189 53.66 311.393 54.128 311.393 54.668C311.393 55.1 311.297 55.484 311.105 55.82C310.925 56.144 310.643 56.462 310.259 56.774C309.887 57.086 309.311 57.512 308.531 58.052H311.267C311.387 58.052 311.483 58.088 311.555 58.16C311.627 58.232 311.663 58.328 311.663 58.448V58.664C311.663 58.784 311.627 58.88 311.555 58.952C311.483 59.024 311.387 59.06 311.267 59.06H307.145ZM313.175 59.06C313.055 59.06 312.959 59.024 312.887 58.952C312.815 58.88 312.779 58.784 312.779 58.664V58.358C312.779 58.262 312.809 58.166 312.869 58.07C312.929 57.986 313.043 57.884 313.211 57.764L314.093 57.134C314.753 56.654 315.221 56.3 315.497 56.072C315.785 55.856 316.001 55.64 316.145 55.424C316.301 55.196 316.379 54.944 316.379 54.668C316.379 54.368 316.265 54.128 316.037 53.948C315.809 53.756 315.533 53.66 315.209 53.66C314.837 53.66 314.567 53.726 314.399 53.858C314.243 53.99 314.141 54.11 314.093 54.218C314.033 54.338 313.997 54.41 313.985 54.434C313.913 54.566 313.847 54.656 313.787 54.704C313.727 54.74 313.649 54.758 313.553 54.758H313.283C313.067 54.758 312.959 54.656 312.959 54.452C312.959 54.176 313.061 53.9 313.265 53.624C313.469 53.336 313.745 53.108 314.093 52.94C314.441 52.76 314.813 52.67 315.209 52.67C315.869 52.67 316.403 52.868 316.811 53.264C317.219 53.66 317.423 54.128 317.423 54.668C317.423 55.1 317.327 55.484 317.135 55.82C316.955 56.144 316.673 56.462 316.289 56.774C315.917 57.086 315.341 57.512 314.561 58.052H317.297C317.417 58.052 317.513 58.088 317.585 58.16C317.657 58.232 317.693 58.328 317.693 58.448V58.664C317.693 58.784 317.657 58.88 317.585 58.952C317.513 59.024 317.417 59.06 317.297 59.06H313.175Z'
            fill={color1}
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M334 41H295'
            stroke={color1}
            {...shapeVariations}
            stroke-dasharray='5 5'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M334 62H295'
            stroke={color1}
            {...shapeVariations}
            stroke-dasharray='5 5'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M308.646 63.6464C308.842 63.4512 309.158 63.4512 309.354 63.6464L312.536 66.8284C312.731 67.0237 312.731 67.3403 312.536 67.5355C312.34 67.7308 312.024 67.7308 311.828 67.5355L309 64.7071L306.172 67.5355C305.976 67.7308 305.66 67.7308 305.464 67.5355C305.269 67.3403 305.269 67.0237 305.464 66.8284L308.646 63.6464ZM308.5 87L308.5 64L309.5 64L309.5 87L308.5 87Z'
            fill={color1}
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M309.354 39.3536C309.158 39.5488 308.842 39.5488 308.646 39.3536L305.464 36.1716C305.269 35.9763 305.269 35.6597 305.464 35.4645C305.66 35.2692 305.976 35.2692 306.172 35.4645L309 38.2929L311.828 35.4645C312.024 35.2692 312.34 35.2692 312.536 35.4645C312.731 35.6597 312.731 35.9763 312.536 36.1716L309.354 39.3536ZM308.5 39L308.5 16L309.5 16L309.5 39L308.5 39Z'
            fill={color1}
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M282 57L282 45'
            stroke={color3}
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M282 73L279.113 78H284.887L282 73ZM282.5 103V77.5H281.5V103H282.5Z'
            fill={color1}
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M259.464 99C259.344 99 259.248 98.964 259.176 98.892C259.104 98.82 259.068 98.724 259.068 98.604V90.684H257.466C257.346 90.684 257.25 90.648 257.178 90.576C257.106 90.504 257.07 90.408 257.07 90.288V90.036C257.07 89.916 257.106 89.82 257.178 89.748C257.25 89.676 257.346 89.64 257.466 89.64H259.068V88.614C259.068 87.702 259.266 86.988 259.662 86.472C260.058 85.944 260.766 85.68 261.786 85.68H262.722C262.842 85.68 262.938 85.716 263.01 85.788C263.082 85.86 263.118 85.956 263.118 86.076V86.328C263.118 86.448 263.082 86.544 263.01 86.616C262.938 86.688 262.842 86.724 262.722 86.724H261.786C261.174 86.724 260.748 86.886 260.508 87.21C260.28 87.522 260.166 88.02 260.166 88.704V89.64H262.542C262.662 89.64 262.758 89.676 262.83 89.748C262.902 89.82 262.938 89.916 262.938 90.036V90.288C262.938 90.408 262.902 90.504 262.83 90.576C262.758 90.648 262.662 90.684 262.542 90.684H260.166V98.604C260.166 98.724 260.13 98.82 260.058 98.892C259.986 98.964 259.89 99 259.77 99H259.464ZM264.168 102.06C264.048 102.06 263.952 102.024 263.88 101.952C263.808 101.88 263.772 101.784 263.772 101.664V101.358C263.772 101.262 263.802 101.166 263.862 101.07C263.922 100.986 264.036 100.884 264.204 100.764L265.086 100.134C265.746 99.654 266.214 99.3 266.49 99.072C266.778 98.856 266.994 98.64 267.138 98.424C267.294 98.196 267.372 97.944 267.372 97.668C267.372 97.368 267.258 97.128 267.03 96.948C266.802 96.756 266.526 96.66 266.202 96.66C265.83 96.66 265.56 96.726 265.392 96.858C265.236 96.99 265.134 97.11 265.086 97.218C265.026 97.338 264.99 97.41 264.978 97.434C264.906 97.566 264.84 97.656 264.78 97.704C264.72 97.74 264.642 97.758 264.546 97.758H264.276C264.06 97.758 263.952 97.656 263.952 97.452C263.952 97.176 264.054 96.9 264.258 96.624C264.462 96.336 264.738 96.108 265.086 95.94C265.434 95.76 265.806 95.67 266.202 95.67C266.862 95.67 267.396 95.868 267.804 96.264C268.212 96.66 268.416 97.128 268.416 97.668C268.416 98.1 268.32 98.484 268.128 98.82C267.948 99.144 267.666 99.462 267.282 99.774C266.91 100.086 266.334 100.512 265.554 101.052H268.29C268.41 101.052 268.506 101.088 268.578 101.16C268.65 101.232 268.686 101.328 268.686 101.448V101.664C268.686 101.784 268.65 101.88 268.578 101.952C268.506 102.024 268.41 102.06 268.29 102.06H264.168ZM270.197 102.06C270.077 102.06 269.981 102.024 269.909 101.952C269.837 101.88 269.801 101.784 269.801 101.664V101.358C269.801 101.262 269.831 101.166 269.891 101.07C269.951 100.986 270.065 100.884 270.233 100.764L271.115 100.134C271.775 99.654 272.243 99.3 272.519 99.072C272.807 98.856 273.023 98.64 273.167 98.424C273.323 98.196 273.401 97.944 273.401 97.668C273.401 97.368 273.287 97.128 273.059 96.948C272.831 96.756 272.555 96.66 272.231 96.66C271.859 96.66 271.589 96.726 271.421 96.858C271.265 96.99 271.163 97.11 271.115 97.218C271.055 97.338 271.019 97.41 271.007 97.434C270.935 97.566 270.869 97.656 270.809 97.704C270.749 97.74 270.671 97.758 270.575 97.758H270.305C270.089 97.758 269.981 97.656 269.981 97.452C269.981 97.176 270.083 96.9 270.287 96.624C270.491 96.336 270.767 96.108 271.115 95.94C271.463 95.76 271.835 95.67 272.231 95.67C272.891 95.67 273.425 95.868 273.833 96.264C274.241 96.66 274.445 97.128 274.445 97.668C274.445 98.1 274.349 98.484 274.157 98.82C273.977 99.144 273.695 99.462 273.311 99.774C272.939 100.086 272.363 100.512 271.583 101.052H274.319C274.439 101.052 274.535 101.088 274.607 101.16C274.679 101.232 274.715 101.328 274.715 101.448V101.664C274.715 101.784 274.679 101.88 274.607 101.952C274.535 102.024 274.439 102.06 274.319 102.06H270.197Z'
            fill={color1}
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M278 41C218.8 41 254 41 240.5 41C215.134 41 209.4 61 177 61C144.6 61 103.167 61 90 61'
            stroke='black'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.circle
            cx='282'
            cy='41'
            r='4'
            fill={color2}
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
            cx='282'
            cy='61'
            r='4'
            fill={color4}
            stroke={color3}
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
            }}
            initial={{ y: 60, opacity: 0, }}
          />
          <motion.circle
            cx='86'
            cy='61'
            r='4'
            fill={color2}
            stroke='black'
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

export default F22;
