import { motion } from 'framer-motion';
import {
  mainPathVariant,
  shapeVariations,
} from '@/lib/config/animations/svgs/svgs';

const Point = () => {
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
        <g id='point' data-name='point'>
          <motion.path
            {...mainPathVariant}
            d='M86 52L195 52L304 52'
            stroke='#252323'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.circle
            cx='82'
            cy='52'
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
            cx='308'
            cy='52'
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
          <motion.path
            d='M82 64L79.1132 69H84.8868L82 64ZM82.5 94V68.5H81.5V94H82.5Z'
            fill='#4E4E4E'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M92.6531 90C92.3531 90 92.1491 89.856 92.0411 89.568L87.8651 77.958L87.8291 77.76C87.8291 77.664 87.8651 77.58 87.9371 77.508C88.0091 77.436 88.0931 77.4 88.1891 77.4H88.5671C88.6751 77.4 88.7591 77.43 88.8191 77.49C88.8911 77.55 88.9391 77.61 88.9631 77.67L92.9051 88.686L96.8471 77.67C96.8711 77.61 96.9131 77.55 96.9731 77.49C97.0451 77.43 97.1351 77.4 97.2431 77.4H97.6211C97.7171 77.4 97.8011 77.436 97.8731 77.508C97.9451 77.58 97.9811 77.664 97.9811 77.76L97.9451 77.958L93.7691 89.568C93.6611 89.856 93.4571 90 93.1571 90H92.6531ZM101.27 93.06C101.15 93.06 101.054 93.024 100.982 92.952C100.91 92.88 100.874 92.784 100.874 92.664V88.146L99.7396 88.992C99.6796 89.04 99.6016 89.064 99.5056 89.064C99.3856 89.064 99.2776 89.01 99.1816 88.902L99.0556 88.722C98.9956 88.638 98.9656 88.554 98.9656 88.47C98.9656 88.35 99.0196 88.248 99.1276 88.164L100.856 86.886C100.976 86.802 101.114 86.76 101.27 86.76H101.522C101.642 86.76 101.738 86.796 101.81 86.868C101.882 86.94 101.918 87.036 101.918 87.156V92.664C101.918 92.784 101.882 92.88 101.81 92.952C101.738 93.024 101.642 93.06 101.522 93.06H101.27ZM103.762 93.06C103.642 93.06 103.546 93.024 103.474 92.952C103.402 92.88 103.366 92.784 103.366 92.664V92.358C103.366 92.262 103.396 92.166 103.456 92.07C103.516 91.986 103.63 91.884 103.798 91.764L104.68 91.134C105.34 90.654 105.808 90.3 106.084 90.072C106.372 89.856 106.588 89.64 106.732 89.424C106.888 89.196 106.966 88.944 106.966 88.668C106.966 88.368 106.852 88.128 106.624 87.948C106.396 87.756 106.12 87.66 105.796 87.66C105.424 87.66 105.154 87.726 104.986 87.858C104.83 87.99 104.728 88.11 104.68 88.218C104.62 88.338 104.584 88.41 104.572 88.434C104.5 88.566 104.434 88.656 104.374 88.704C104.314 88.74 104.236 88.758 104.14 88.758H103.87C103.654 88.758 103.546 88.656 103.546 88.452C103.546 88.176 103.648 87.9 103.852 87.624C104.056 87.336 104.332 87.108 104.68 86.94C105.028 86.76 105.4 86.67 105.796 86.67C106.456 86.67 106.99 86.868 107.398 87.264C107.806 87.66 108.01 88.128 108.01 88.668C108.01 89.1 107.914 89.484 107.722 89.82C107.542 90.144 107.26 90.462 106.876 90.774C106.504 91.086 105.928 91.512 105.148 92.052H107.884C108.004 92.052 108.1 92.088 108.172 92.16C108.244 92.232 108.28 92.328 108.28 92.448V92.664C108.28 92.784 108.244 92.88 108.172 92.952C108.1 93.024 108.004 93.06 107.884 93.06H103.762Z'
            fill='#4E4E4E'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M31.9175 54C31.7975 54 31.6955 53.964 31.6115 53.892C31.5395 53.82 31.5035 53.724 31.5035 53.604V41.814C31.5035 41.682 31.5395 41.58 31.6115 41.508C31.6955 41.436 31.7975 41.4 31.9175 41.4H32.3675C32.5475 41.4 32.6735 41.478 32.7455 41.634L36.8315 49.59L40.9355 41.634C41.0195 41.478 41.1455 41.4 41.3135 41.4H41.7455C41.8775 41.4 41.9795 41.436 42.0515 41.508C42.1235 41.58 42.1595 41.682 42.1595 41.814V53.604C42.1595 53.724 42.1175 53.82 42.0335 53.892C41.9615 53.964 41.8655 54 41.7455 54H41.4215C41.3015 54 41.2055 53.964 41.1335 53.892C41.0615 53.82 41.0255 53.724 41.0255 53.604V43.848L37.5875 50.616C37.4795 50.856 37.2935 50.976 37.0295 50.976H36.6335C36.3695 50.976 36.1835 50.856 36.0755 50.616L32.6375 43.848V53.604C32.6375 53.724 32.6015 53.82 32.5295 53.892C32.4575 53.964 32.3615 54 32.2415 54H31.9175ZM46.4844 57.06C46.3644 57.06 46.2684 57.024 46.1964 56.952C46.1244 56.88 46.0884 56.784 46.0884 56.664V52.146L44.9544 52.992C44.8944 53.04 44.8164 53.064 44.7204 53.064C44.6004 53.064 44.4924 53.01 44.3964 52.902L44.2704 52.722C44.2104 52.638 44.1804 52.554 44.1804 52.47C44.1804 52.35 44.2344 52.248 44.3424 52.164L46.0704 50.886C46.1904 50.802 46.3284 50.76 46.4844 50.76H46.7364C46.8564 50.76 46.9524 50.796 47.0244 50.868C47.0964 50.94 47.1324 51.036 47.1324 51.156V56.664C47.1324 56.784 47.0964 56.88 47.0244 56.952C46.9524 57.024 46.8564 57.06 46.7364 57.06H46.4844ZM50.6505 57.06C50.5305 57.06 50.4345 57.024 50.3625 56.952C50.2905 56.88 50.2545 56.784 50.2545 56.664V52.146L49.1205 52.992C49.0605 53.04 48.9825 53.064 48.8865 53.064C48.7665 53.064 48.6585 53.01 48.5625 52.902L48.4365 52.722C48.3765 52.638 48.3465 52.554 48.3465 52.47C48.3465 52.35 48.4005 52.248 48.5085 52.164L50.2365 50.886C50.3565 50.802 50.4945 50.76 50.6505 50.76H50.9025C51.0225 50.76 51.1185 50.796 51.1905 50.868C51.2625 50.94 51.2985 51.036 51.2985 51.156V56.664C51.2985 56.784 51.2625 56.88 51.1905 56.952C51.1185 57.024 51.0225 57.06 50.9025 57.06H50.6505Z'
            fill='#4E4E4E'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M341.986 56C341.866 56 341.764 55.964 341.68 55.892C341.608 55.82 341.572 55.724 341.572 55.604V43.814C341.572 43.682 341.608 43.58 341.68 43.508C341.764 43.436 341.866 43.4 341.986 43.4H342.436C342.616 43.4 342.742 43.478 342.814 43.634L346.9 51.59L351.004 43.634C351.088 43.478 351.214 43.4 351.382 43.4H351.814C351.946 43.4 352.048 43.436 352.12 43.508C352.192 43.58 352.228 43.682 352.228 43.814V55.604C352.228 55.724 352.186 55.82 352.102 55.892C352.03 55.964 351.934 56 351.814 56H351.49C351.37 56 351.274 55.964 351.202 55.892C351.13 55.82 351.094 55.724 351.094 55.604V45.848L347.656 52.616C347.548 52.856 347.362 52.976 347.098 52.976H346.702C346.438 52.976 346.252 52.856 346.144 52.616L342.706 45.848V55.604C342.706 55.724 342.67 55.82 342.598 55.892C342.526 55.964 342.43 56 342.31 56H341.986ZM354.879 59.06C354.759 59.06 354.663 59.024 354.591 58.952C354.519 58.88 354.483 58.784 354.483 58.664V58.358C354.483 58.262 354.513 58.166 354.573 58.07C354.633 57.986 354.747 57.884 354.915 57.764L355.797 57.134C356.457 56.654 356.925 56.3 357.201 56.072C357.489 55.856 357.705 55.64 357.849 55.424C358.005 55.196 358.083 54.944 358.083 54.668C358.083 54.368 357.969 54.128 357.741 53.948C357.513 53.756 357.237 53.66 356.913 53.66C356.541 53.66 356.271 53.726 356.103 53.858C355.947 53.99 355.845 54.11 355.797 54.218C355.737 54.338 355.701 54.41 355.689 54.434C355.617 54.566 355.551 54.656 355.491 54.704C355.431 54.74 355.353 54.758 355.257 54.758H354.987C354.771 54.758 354.663 54.656 354.663 54.452C354.663 54.176 354.765 53.9 354.969 53.624C355.173 53.336 355.449 53.108 355.797 52.94C356.145 52.76 356.517 52.67 356.913 52.67C357.573 52.67 358.107 52.868 358.515 53.264C358.923 53.66 359.127 54.128 359.127 54.668C359.127 55.1 359.031 55.484 358.839 55.82C358.659 56.144 358.377 56.462 357.993 56.774C357.621 57.086 357.045 57.512 356.265 58.052H359.001C359.121 58.052 359.217 58.088 359.289 58.16C359.361 58.232 359.397 58.328 359.397 58.448V58.664C359.397 58.784 359.361 58.88 359.289 58.952C359.217 59.024 359.121 59.06 359.001 59.06H354.879ZM362.582 59.06C362.462 59.06 362.366 59.024 362.294 58.952C362.222 58.88 362.186 58.784 362.186 58.664V54.146L361.052 54.992C360.992 55.04 360.914 55.064 360.818 55.064C360.698 55.064 360.59 55.01 360.494 54.902L360.368 54.722C360.308 54.638 360.278 54.554 360.278 54.47C360.278 54.35 360.332 54.248 360.44 54.164L362.168 52.886C362.288 52.802 362.426 52.76 362.582 52.76H362.834C362.954 52.76 363.05 52.796 363.122 52.868C363.194 52.94 363.23 53.036 363.23 53.156V58.664C363.23 58.784 363.194 58.88 363.122 58.952C363.05 59.024 362.954 59.06 362.834 59.06H362.582Z'
            fill='#4E4E4E'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M308 64L305.113 69H310.887L308 64ZM308.5 94V68.5H307.5V94H308.5Z'
            fill='#4E4E4E'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M284.721 90C284.421 90 284.217 89.856 284.109 89.568L279.933 77.958L279.897 77.76C279.897 77.664 279.933 77.58 280.005 77.508C280.077 77.436 280.161 77.4 280.257 77.4H280.635C280.743 77.4 280.827 77.43 280.887 77.49C280.959 77.55 281.007 77.61 281.031 77.67L284.973 88.686L288.915 77.67C288.939 77.61 288.981 77.55 289.041 77.49C289.113 77.43 289.203 77.4 289.311 77.4H289.689C289.785 77.4 289.869 77.436 289.941 77.508C290.013 77.58 290.049 77.664 290.049 77.76L290.013 77.958L285.837 89.568C285.729 89.856 285.525 90 285.225 90H284.721ZM291.664 93.06C291.544 93.06 291.448 93.024 291.376 92.952C291.304 92.88 291.268 92.784 291.268 92.664V92.358C291.268 92.262 291.298 92.166 291.358 92.07C291.418 91.986 291.532 91.884 291.7 91.764L292.582 91.134C293.242 90.654 293.71 90.3 293.986 90.072C294.274 89.856 294.49 89.64 294.634 89.424C294.79 89.196 294.868 88.944 294.868 88.668C294.868 88.368 294.754 88.128 294.526 87.948C294.298 87.756 294.022 87.66 293.698 87.66C293.326 87.66 293.056 87.726 292.888 87.858C292.732 87.99 292.63 88.11 292.582 88.218C292.522 88.338 292.486 88.41 292.474 88.434C292.402 88.566 292.336 88.656 292.276 88.704C292.216 88.74 292.138 88.758 292.042 88.758H291.772C291.556 88.758 291.448 88.656 291.448 88.452C291.448 88.176 291.55 87.9 291.754 87.624C291.958 87.336 292.234 87.108 292.582 86.94C292.93 86.76 293.302 86.67 293.698 86.67C294.358 86.67 294.892 86.868 295.3 87.264C295.708 87.66 295.912 88.128 295.912 88.668C295.912 89.1 295.816 89.484 295.624 89.82C295.444 90.144 295.162 90.462 294.778 90.774C294.406 91.086 293.83 91.512 293.05 92.052H295.786C295.906 92.052 296.002 92.088 296.074 92.16C296.146 92.232 296.182 92.328 296.182 92.448V92.664C296.182 92.784 296.146 92.88 296.074 92.952C296.002 93.024 295.906 93.06 295.786 93.06H291.664ZM297.693 93.06C297.573 93.06 297.477 93.024 297.405 92.952C297.333 92.88 297.297 92.784 297.297 92.664V92.358C297.297 92.262 297.327 92.166 297.387 92.07C297.447 91.986 297.561 91.884 297.729 91.764L298.611 91.134C299.271 90.654 299.739 90.3 300.015 90.072C300.303 89.856 300.519 89.64 300.663 89.424C300.819 89.196 300.897 88.944 300.897 88.668C300.897 88.368 300.783 88.128 300.555 87.948C300.327 87.756 300.051 87.66 299.727 87.66C299.355 87.66 299.085 87.726 298.917 87.858C298.761 87.99 298.659 88.11 298.611 88.218C298.551 88.338 298.515 88.41 298.503 88.434C298.431 88.566 298.365 88.656 298.305 88.704C298.245 88.74 298.167 88.758 298.071 88.758H297.801C297.585 88.758 297.477 88.656 297.477 88.452C297.477 88.176 297.579 87.9 297.783 87.624C297.987 87.336 298.263 87.108 298.611 86.94C298.959 86.76 299.331 86.67 299.727 86.67C300.387 86.67 300.921 86.868 301.329 87.264C301.737 87.66 301.941 88.128 301.941 88.668C301.941 89.1 301.845 89.484 301.653 89.82C301.473 90.144 301.191 90.462 300.807 90.774C300.435 91.086 299.859 91.512 299.079 92.052H301.815C301.935 92.052 302.031 92.088 302.103 92.16C302.175 92.232 302.211 92.328 302.211 92.448V92.664C302.211 92.784 302.175 92.88 302.103 92.952C302.031 93.024 301.935 93.06 301.815 93.06H297.693Z'
            fill='#4E4E4E'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M69.6152 37.8347L64.4847 35.1869L64.7568 40.954L69.6152 37.8347ZM66.0024 63.3741C60.2883 62.3005 57.6827 56.9338 57.76 51.2711C57.7984 48.4539 58.508 45.6198 59.7995 43.3119C61.0909 41.0042 62.9463 39.2507 65.2692 38.5241L64.9706 37.5697C62.3432 38.3917 60.3081 40.3554 58.9269 42.8235C57.5458 45.2913 56.8006 48.2916 56.7601 51.2574C56.6795 57.1607 59.4192 63.1547 65.8177 64.3569L66.0024 63.3741Z'
            fill='#4E4E4E'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M323.235 63.0308L328.366 65.6787L328.094 59.9116L323.235 63.0308ZM326.848 37.4914C332.562 38.5651 335.168 43.9317 335.091 49.5945C335.052 52.4116 334.343 55.2457 333.051 57.5537C331.76 59.8613 329.904 61.6148 327.582 62.3415L327.88 63.2959C330.508 62.4739 332.543 60.5102 333.924 58.042C335.305 55.5742 336.05 52.574 336.091 49.6081C336.171 43.7049 333.431 37.7109 327.033 36.5086L326.848 37.4914Z'
            fill='#4E4E4E'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M192.5 50.5L195.387 45.5H189.613L192.5 50.5ZM193 46V21.5H192V46H193Z'
            fill='#4E4E4E'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M190.049 17C189.955 17 189.876 16.972 189.811 16.916C189.755 16.8507 189.727 16.7713 189.727 16.678V7.536C189.727 7.43333 189.755 7.354 189.811 7.298C189.876 7.23267 189.955 7.2 190.049 7.2H193.605C194.659 7.2 195.49 7.45667 196.097 7.97C196.703 8.48333 197.007 9.22533 197.007 10.196C197.007 11.1667 196.703 11.9087 196.097 12.422C195.499 12.926 194.669 13.178 193.605 13.178H191.127V16.678C191.127 16.7713 191.094 16.8507 191.029 16.916C190.963 16.972 190.884 17 190.791 17H190.049ZM193.535 12.002C194.216 12.002 194.729 11.848 195.075 11.54C195.429 11.232 195.607 10.784 195.607 10.196C195.607 9.608 195.434 9.16 195.089 8.852C194.743 8.53467 194.225 8.376 193.535 8.376H191.113V12.002H193.535Z'
            fill='#4E4E4E'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M192.157 72C192.037 72 191.941 71.964 191.869 71.892C191.797 71.82 191.761 71.724 191.761 71.604V59.796C191.761 59.676 191.797 59.58 191.869 59.508C191.941 59.436 192.037 59.4 192.157 59.4H192.499C192.619 59.4 192.715 59.436 192.787 59.508C192.859 59.58 192.895 59.676 192.895 59.796V70.92H199.105C199.237 70.92 199.339 70.956 199.411 71.028C199.483 71.1 199.519 71.202 199.519 71.334V71.604C199.519 71.724 199.477 71.82 199.393 71.892C199.321 71.964 199.225 72 199.105 72H192.157Z'
            fill='#4E4E4E'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
        </g>
      </svg>
    </motion.div>
  )
};

export default Point;
