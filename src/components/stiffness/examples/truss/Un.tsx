import { motion } from 'framer-motion';
import {
  mainPathVariant,
  shapeVariations,
} from '@/lib/config/animations/svgs/svgs';

const color1 = '#252323';
const color2 = '#2F2F2F';
const color3 = '#4E4E4E';
const color4 = '#242121';
const color5 = '#CADEFC';
const color6 = 'rgba(37, 35, 35, 0.3)';
const color7 = 'rgba(202, 222, 252, 0.7)';

const Un = () => {
  return (
    <motion.div
      className='animationParent'
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
    >
      <svg
        width='443'
        height='233'
        viewBox='0 0 443 233'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g
          id='unrestrained_dofs'
          data-name='unrestrained_dofs'
        >
          <motion.path
            {...mainPathVariant}
            d='M273 64L370 170'
            stroke={color6}
            stroke-linecap='round'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M174 62L268.5 62'
            stroke={color6}
            stroke-linecap='round'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M173.5 63.5L369 170'
            stroke={color6}
            stroke-linecap='round'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M74 170L269.5 63.5'
            stroke={color6}
            stroke-linecap='round'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M73.5 169.5L170 64'
            stroke={color6}
            stroke-linecap='round'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.circle
            cx='371.5'
            cy='171.5'
            r='2.75'
            fill='#CADEFC'
            stroke='black'
            stroke-width='0.5'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
            }}
            initial={{ y: 60, opacity: 0, }}
          />
          <motion.circle
            cx='271.5'
            cy='61.5'
            r='2.5'
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
          <motion.circle
            cx='271.5'
            cy='61.5'
            r='2.75'
            fill={color7}
            stroke={color6}
            stroke-width='0.5'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
            }}
            initial={{ y: 60, opacity: 0, }}
          />
          <motion.circle
            cx='171.5'
            cy='61.5'
            r='2.5'
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
          <motion.circle
            cx='171.5'
            cy='61.5'
            r='2.75'
            fill={color7}
            stroke={color6}
            stroke-width='0.5'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
            }}
            initial={{ y: 60, opacity: 0, }}
          />
          <motion.circle
            cx='71.5'
            cy='171.5'
            r='2.75'
            fill='#CADEFC'
            stroke='black'
            stroke-width='0.5'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
            }}
            initial={{ y: 60, opacity: 0, }}
          />
          <motion.path
            d='M65.212 29.12C64.18 29.12 63.38 28.844 62.812 28.292C62.252 27.732 61.972 26.888 61.972 25.76V20.888C61.972 20.8 61.996 20.732 62.044 20.684C62.1 20.628 62.168 20.6 62.248 20.6H62.86C62.948 20.6 63.016 20.628 63.064 20.684C63.12 20.732 63.148 20.8 63.148 20.888V25.784C63.148 26.552 63.328 27.128 63.688 27.512C64.048 27.896 64.556 28.088 65.212 28.088C65.868 28.088 66.376 27.896 66.736 27.512C67.096 27.128 67.276 26.552 67.276 25.784V20.888C67.276 20.8 67.3 20.732 67.348 20.684C67.404 20.628 67.472 20.6 67.552 20.6H68.176C68.256 20.6 68.32 20.628 68.368 20.684C68.424 20.74 68.452 20.808 68.452 20.888V25.76C68.452 26.888 68.168 27.732 67.6 28.292C67.04 28.844 66.244 29.12 65.212 29.12ZM70.5781 29C70.4981 29 70.4301 28.976 70.3741 28.928C70.3261 28.872 70.3021 28.804 70.3021 28.724V23.036C70.3021 22.956 70.3261 22.892 70.3741 22.844C70.4301 22.788 70.4981 22.76 70.5781 22.76H71.1421C71.2221 22.76 71.2861 22.788 71.3341 22.844C71.3901 22.892 71.4181 22.956 71.4181 23.036V23.564C71.6501 23.268 71.9221 23.04 72.2341 22.88C72.5541 22.72 72.9501 22.64 73.4221 22.64C74.1901 22.64 74.7861 22.888 75.2101 23.384C75.6421 23.872 75.8581 24.524 75.8581 25.34V28.724C75.8581 28.804 75.8301 28.872 75.7741 28.928C75.7261 28.976 75.6621 29 75.5821 29H74.9821C74.9021 29 74.8341 28.976 74.7781 28.928C74.7301 28.872 74.7061 28.804 74.7061 28.724V25.4C74.7061 24.832 74.5661 24.392 74.2861 24.08C74.0141 23.768 73.6181 23.612 73.0981 23.612C72.5941 23.612 72.1941 23.772 71.8981 24.092C71.6021 24.404 71.4541 24.84 71.4541 25.4V28.724C71.4541 28.804 71.4261 28.872 71.3701 28.928C71.3221 28.976 71.2581 29 71.1781 29H70.5781ZM77.8554 29C77.7754 29 77.7074 28.976 77.6514 28.928C77.6034 28.872 77.5794 28.804 77.5794 28.724V23.048C77.5794 22.968 77.6034 22.9 77.6514 22.844C77.7074 22.788 77.7754 22.76 77.8554 22.76H78.4074C78.4874 22.76 78.5554 22.788 78.6114 22.844C78.6674 22.9 78.6954 22.968 78.6954 23.048V23.576C79.0234 23.032 79.5834 22.76 80.3754 22.76H80.8434C80.9234 22.76 80.9874 22.788 81.0354 22.844C81.0914 22.892 81.1194 22.956 81.1194 23.036V23.528C81.1194 23.608 81.0914 23.672 81.0354 23.72C80.9874 23.768 80.9234 23.792 80.8434 23.792H80.1234C79.6914 23.792 79.3514 23.92 79.1034 24.176C78.8554 24.424 78.7314 24.764 78.7314 25.196V28.724C78.7314 28.804 78.7034 28.872 78.6474 28.928C78.5914 28.976 78.5234 29 78.4434 29H77.8554ZM84.5168 29.12C83.6928 29.12 83.0328 28.868 82.5368 28.364C82.0488 27.852 81.7808 27.156 81.7328 26.276L81.7208 25.868L81.7328 25.472C81.7888 24.608 82.0608 23.92 82.5488 23.408C83.0448 22.896 83.6968 22.64 84.5048 22.64C85.3928 22.64 86.0808 22.924 86.5688 23.492C87.0568 24.052 87.3008 24.812 87.3008 25.772V25.976C87.3008 26.056 87.2728 26.124 87.2168 26.18C87.1688 26.228 87.1048 26.252 87.0248 26.252H82.8728V26.36C82.8968 26.88 83.0528 27.324 83.3408 27.692C83.6368 28.052 84.0248 28.232 84.5048 28.232C84.8728 28.232 85.1728 28.16 85.4048 28.016C85.6448 27.864 85.8208 27.708 85.9328 27.548C86.0048 27.452 86.0568 27.396 86.0888 27.38C86.1288 27.356 86.1968 27.344 86.2928 27.344H86.8808C86.9528 27.344 87.0128 27.364 87.0608 27.404C87.1088 27.444 87.1328 27.5 87.1328 27.572C87.1328 27.748 87.0208 27.96 86.7968 28.208C86.5808 28.456 86.2728 28.672 85.8728 28.856C85.4808 29.032 85.0288 29.12 84.5168 29.12ZM86.1608 25.424V25.388C86.1608 24.836 86.0088 24.388 85.7048 24.044C85.4088 23.692 85.0088 23.516 84.5048 23.516C84.0008 23.516 83.6008 23.692 83.3048 24.044C83.0168 24.388 82.8728 24.836 82.8728 25.388V25.424H86.1608ZM90.8957 29.12C90.3357 29.12 89.8637 29.032 89.4797 28.856C89.1037 28.672 88.8197 28.464 88.6277 28.232C88.4437 28 88.3517 27.808 88.3517 27.656C88.3517 27.576 88.3797 27.516 88.4357 27.476C88.4997 27.428 88.5637 27.404 88.6277 27.404H89.1677C89.2477 27.404 89.3197 27.444 89.3837 27.524C89.5757 27.748 89.7837 27.924 90.0077 28.052C90.2317 28.18 90.5317 28.244 90.9077 28.244C91.3237 28.244 91.6597 28.164 91.9157 28.004C92.1797 27.836 92.3117 27.608 92.3117 27.32C92.3117 27.128 92.2557 26.972 92.1437 26.852C92.0397 26.724 91.8557 26.616 91.5917 26.528C91.3357 26.432 90.9517 26.328 90.4397 26.216C89.7437 26.064 89.2477 25.844 88.9517 25.556C88.6637 25.268 88.5197 24.896 88.5197 24.44C88.5197 24.136 88.6077 23.848 88.7837 23.576C88.9677 23.296 89.2317 23.072 89.5757 22.904C89.9277 22.728 90.3477 22.64 90.8357 22.64C91.3477 22.64 91.7837 22.724 92.1437 22.892C92.5037 23.06 92.7717 23.26 92.9477 23.492C93.1317 23.716 93.2237 23.904 93.2237 24.056C93.2237 24.128 93.1957 24.188 93.1397 24.236C93.0917 24.284 93.0317 24.308 92.9597 24.308H92.4557C92.3597 24.308 92.2797 24.268 92.2157 24.188C92.0877 24.036 91.9757 23.92 91.8797 23.84C91.7917 23.752 91.6597 23.676 91.4837 23.612C91.3157 23.548 91.0997 23.516 90.8357 23.516C90.4517 23.516 90.1557 23.6 89.9477 23.768C89.7397 23.928 89.6357 24.14 89.6357 24.404C89.6357 24.572 89.6797 24.716 89.7677 24.836C89.8557 24.948 90.0237 25.052 90.2717 25.148C90.5277 25.244 90.8957 25.344 91.3757 25.448C92.1357 25.608 92.6717 25.84 92.9837 26.144C93.3037 26.44 93.4637 26.82 93.4637 27.284C93.4637 27.628 93.3637 27.94 93.1637 28.22C92.9637 28.5 92.6677 28.72 92.2757 28.88C91.8917 29.04 91.4317 29.12 90.8957 29.12ZM97.2771 29C96.0131 29 95.3811 28.296 95.3811 26.888V23.72H94.4451C94.3651 23.72 94.2971 23.696 94.2411 23.648C94.1931 23.592 94.1691 23.524 94.1691 23.444V23.036C94.1691 22.956 94.1931 22.892 94.2411 22.844C94.2971 22.788 94.3651 22.76 94.4451 22.76H95.3811V20.756C95.3811 20.676 95.4051 20.612 95.4531 20.564C95.5091 20.508 95.5771 20.48 95.6571 20.48H96.2211C96.3011 20.48 96.3651 20.508 96.4131 20.564C96.4691 20.612 96.4971 20.676 96.4971 20.756V22.76H97.9851C98.0651 22.76 98.1291 22.788 98.1771 22.844C98.2331 22.892 98.2611 22.956 98.2611 23.036V23.444C98.2611 23.524 98.2331 23.592 98.1771 23.648C98.1291 23.696 98.0651 23.72 97.9851 23.72H96.4971V26.804C96.4971 27.204 96.5651 27.508 96.7011 27.716C96.8371 27.916 97.0611 28.016 97.3731 28.016H98.1051C98.1851 28.016 98.2491 28.044 98.2971 28.1C98.3531 28.148 98.3811 28.212 98.3811 28.292V28.724C98.3811 28.804 98.3531 28.872 98.2971 28.928C98.2491 28.976 98.1851 29 98.1051 29H97.2771ZM99.8046 29C99.7246 29 99.6566 28.976 99.6006 28.928C99.5526 28.872 99.5286 28.804 99.5286 28.724V23.048C99.5286 22.968 99.5526 22.9 99.6006 22.844C99.6566 22.788 99.7246 22.76 99.8046 22.76H100.357C100.437 22.76 100.505 22.788 100.561 22.844C100.617 22.9 100.645 22.968 100.645 23.048V23.576C100.973 23.032 101.533 22.76 102.325 22.76H102.793C102.873 22.76 102.937 22.788 102.985 22.844C103.041 22.892 103.069 22.956 103.069 23.036V23.528C103.069 23.608 103.041 23.672 102.985 23.72C102.937 23.768 102.873 23.792 102.793 23.792H102.073C101.641 23.792 101.301 23.92 101.053 24.176C100.805 24.424 100.681 24.764 100.681 25.196V28.724C100.681 28.804 100.653 28.872 100.597 28.928C100.541 28.976 100.473 29 100.393 29H99.8046ZM105.733 29.12C105.341 29.12 104.977 29.04 104.641 28.88C104.305 28.72 104.037 28.504 103.837 28.232C103.645 27.952 103.549 27.644 103.549 27.308C103.549 26.78 103.765 26.348 104.197 26.012C104.637 25.668 105.229 25.444 105.973 25.34L107.761 25.088V24.74C107.761 23.924 107.293 23.516 106.357 23.516C106.005 23.516 105.717 23.592 105.493 23.744C105.269 23.888 105.101 24.06 104.989 24.26C104.965 24.332 104.933 24.384 104.893 24.416C104.861 24.448 104.813 24.464 104.749 24.464H104.233C104.161 24.464 104.097 24.44 104.041 24.392C103.993 24.336 103.969 24.272 103.969 24.2C103.977 24.008 104.065 23.792 104.233 23.552C104.409 23.304 104.677 23.092 105.037 22.916C105.397 22.732 105.841 22.64 106.369 22.64C107.265 22.64 107.909 22.852 108.301 23.276C108.693 23.692 108.889 24.212 108.889 24.836V28.724C108.889 28.804 108.861 28.872 108.805 28.928C108.757 28.976 108.693 29 108.613 29H108.061C107.981 29 107.913 28.976 107.857 28.928C107.809 28.872 107.785 28.804 107.785 28.724V28.208C107.609 28.464 107.353 28.68 107.017 28.856C106.681 29.032 106.253 29.12 105.733 29.12ZM105.985 28.22C106.505 28.22 106.929 28.052 107.257 27.716C107.593 27.372 107.761 26.88 107.761 26.24V25.904L106.369 26.108C105.801 26.188 105.373 26.324 105.085 26.516C104.797 26.7 104.653 26.936 104.653 27.224C104.653 27.544 104.785 27.792 105.049 27.968C105.313 28.136 105.625 28.22 105.985 28.22ZM110.795 21.596C110.715 21.596 110.647 21.572 110.591 21.524C110.543 21.468 110.519 21.4 110.519 21.32V20.672C110.519 20.592 110.543 20.524 110.591 20.468C110.647 20.412 110.715 20.384 110.795 20.384H111.551C111.631 20.384 111.699 20.412 111.755 20.468C111.811 20.524 111.839 20.592 111.839 20.672V21.32C111.839 21.4 111.811 21.468 111.755 21.524C111.699 21.572 111.631 21.596 111.551 21.596H110.795ZM110.891 29C110.811 29 110.743 28.976 110.687 28.928C110.639 28.872 110.615 28.804 110.615 28.724V23.036C110.615 22.956 110.639 22.892 110.687 22.844C110.743 22.788 110.811 22.76 110.891 22.76H111.467C111.547 22.76 111.611 22.788 111.659 22.844C111.715 22.892 111.743 22.956 111.743 23.036V28.724C111.743 28.804 111.715 28.872 111.659 28.928C111.611 28.976 111.547 29 111.467 29H110.891ZM113.797 29C113.717 29 113.649 28.976 113.593 28.928C113.545 28.872 113.521 28.804 113.521 28.724V23.036C113.521 22.956 113.545 22.892 113.593 22.844C113.649 22.788 113.717 22.76 113.797 22.76H114.361C114.441 22.76 114.505 22.788 114.553 22.844C114.609 22.892 114.637 22.956 114.637 23.036V23.564C114.869 23.268 115.141 23.04 115.453 22.88C115.773 22.72 116.169 22.64 116.641 22.64C117.409 22.64 118.005 22.888 118.429 23.384C118.861 23.872 119.077 24.524 119.077 25.34V28.724C119.077 28.804 119.049 28.872 118.993 28.928C118.945 28.976 118.881 29 118.801 29H118.201C118.121 29 118.053 28.976 117.997 28.928C117.949 28.872 117.925 28.804 117.925 28.724V25.4C117.925 24.832 117.785 24.392 117.505 24.08C117.233 23.768 116.837 23.612 116.317 23.612C115.813 23.612 115.413 23.772 115.117 24.092C114.821 24.404 114.673 24.84 114.673 25.4V28.724C114.673 28.804 114.645 28.872 114.589 28.928C114.541 28.976 114.477 29 114.397 29H113.797ZM123.294 29.12C122.47 29.12 121.81 28.868 121.314 28.364C120.826 27.852 120.558 27.156 120.51 26.276L120.498 25.868L120.51 25.472C120.566 24.608 120.838 23.92 121.326 23.408C121.822 22.896 122.474 22.64 123.282 22.64C124.17 22.64 124.858 22.924 125.346 23.492C125.834 24.052 126.078 24.812 126.078 25.772V25.976C126.078 26.056 126.05 26.124 125.994 26.18C125.946 26.228 125.882 26.252 125.802 26.252H121.65V26.36C121.674 26.88 121.83 27.324 122.118 27.692C122.414 28.052 122.802 28.232 123.282 28.232C123.65 28.232 123.95 28.16 124.182 28.016C124.422 27.864 124.598 27.708 124.71 27.548C124.782 27.452 124.834 27.396 124.866 27.38C124.906 27.356 124.974 27.344 125.07 27.344H125.658C125.73 27.344 125.79 27.364 125.838 27.404C125.886 27.444 125.91 27.5 125.91 27.572C125.91 27.748 125.798 27.96 125.574 28.208C125.358 28.456 125.05 28.672 124.65 28.856C124.258 29.032 123.806 29.12 123.294 29.12ZM124.938 25.424V25.388C124.938 24.836 124.786 24.388 124.482 24.044C124.186 23.692 123.786 23.516 123.282 23.516C122.778 23.516 122.378 23.692 122.082 24.044C121.794 24.388 121.65 24.836 121.65 25.388V25.424H124.938ZM129.793 29.12C128.961 29.12 128.333 28.848 127.909 28.304C127.485 27.76 127.261 27.072 127.237 26.24L127.225 25.88L127.237 25.52C127.261 24.696 127.485 24.012 127.909 23.468C128.333 22.916 128.961 22.64 129.793 22.64C130.617 22.64 131.265 22.932 131.737 23.516V20.756C131.737 20.676 131.761 20.612 131.809 20.564C131.865 20.508 131.933 20.48 132.013 20.48H132.589C132.669 20.48 132.733 20.508 132.781 20.564C132.837 20.612 132.865 20.676 132.865 20.756V28.724C132.865 28.804 132.837 28.872 132.781 28.928C132.733 28.976 132.669 29 132.589 29H132.049C131.969 29 131.901 28.976 131.845 28.928C131.797 28.872 131.773 28.804 131.773 28.724V28.22C131.309 28.82 130.649 29.12 129.793 29.12ZM130.045 28.148C130.597 28.148 131.009 27.968 131.281 27.608C131.561 27.24 131.713 26.804 131.737 26.3C131.745 26.212 131.749 26.06 131.749 25.844C131.749 25.62 131.745 25.464 131.737 25.376C131.721 24.904 131.569 24.492 131.281 24.14C130.993 23.788 130.581 23.612 130.045 23.612C129.477 23.612 129.061 23.788 128.797 24.14C128.541 24.492 128.401 24.956 128.377 25.532L128.365 25.88C128.365 27.392 128.925 28.148 130.045 28.148ZM139.871 29.12C139.039 29.12 138.411 28.848 137.987 28.304C137.563 27.76 137.339 27.072 137.315 26.24L137.303 25.88L137.315 25.52C137.339 24.696 137.563 24.012 137.987 23.468C138.411 22.916 139.039 22.64 139.871 22.64C140.695 22.64 141.343 22.932 141.815 23.516V20.756C141.815 20.676 141.839 20.612 141.887 20.564C141.943 20.508 142.011 20.48 142.091 20.48H142.667C142.747 20.48 142.811 20.508 142.859 20.564C142.915 20.612 142.943 20.676 142.943 20.756V28.724C142.943 28.804 142.915 28.872 142.859 28.928C142.811 28.976 142.747 29 142.667 29H142.127C142.047 29 141.979 28.976 141.923 28.928C141.875 28.872 141.851 28.804 141.851 28.724V28.22C141.387 28.82 140.727 29.12 139.871 29.12ZM140.123 28.148C140.675 28.148 141.087 27.968 141.359 27.608C141.639 27.24 141.791 26.804 141.815 26.3C141.823 26.212 141.827 26.06 141.827 25.844C141.827 25.62 141.823 25.464 141.815 25.376C141.799 24.904 141.647 24.492 141.359 24.14C141.071 23.788 140.659 23.612 140.123 23.612C139.555 23.612 139.139 23.788 138.875 24.14C138.619 24.492 138.479 24.956 138.455 25.532L138.443 25.88C138.443 27.392 139.003 28.148 140.123 28.148ZM147.224 29.12C146.4 29.12 145.74 28.868 145.244 28.364C144.756 27.852 144.488 27.156 144.44 26.276L144.428 25.868L144.44 25.472C144.496 24.608 144.768 23.92 145.256 23.408C145.752 22.896 146.404 22.64 147.212 22.64C148.1 22.64 148.788 22.924 149.276 23.492C149.764 24.052 150.008 24.812 150.008 25.772V25.976C150.008 26.056 149.98 26.124 149.924 26.18C149.876 26.228 149.812 26.252 149.732 26.252H145.58V26.36C145.604 26.88 145.76 27.324 146.048 27.692C146.344 28.052 146.732 28.232 147.212 28.232C147.58 28.232 147.88 28.16 148.112 28.016C148.352 27.864 148.528 27.708 148.64 27.548C148.712 27.452 148.764 27.396 148.796 27.38C148.836 27.356 148.904 27.344 149 27.344H149.588C149.66 27.344 149.72 27.364 149.768 27.404C149.816 27.444 149.84 27.5 149.84 27.572C149.84 27.748 149.728 27.96 149.504 28.208C149.288 28.456 148.98 28.672 148.58 28.856C148.188 29.032 147.736 29.12 147.224 29.12ZM148.868 25.424V25.388C148.868 24.836 148.716 24.388 148.412 24.044C148.116 23.692 147.716 23.516 147.212 23.516C146.708 23.516 146.308 23.692 146.012 24.044C145.724 24.388 145.58 24.836 145.58 25.388V25.424H148.868ZM153.999 31.64C153.343 31.64 152.815 31.528 152.415 31.304C152.015 31.088 151.731 30.84 151.563 30.56C151.395 30.28 151.303 30.028 151.287 29.804C151.279 29.724 151.303 29.656 151.359 29.6C151.423 29.544 151.491 29.516 151.563 29.516H152.139C152.211 29.516 152.271 29.532 152.319 29.564C152.367 29.604 152.407 29.672 152.439 29.768C152.535 30.024 152.691 30.244 152.907 30.428C153.131 30.62 153.475 30.716 153.939 30.716C154.531 30.716 154.967 30.588 155.247 30.332C155.527 30.084 155.667 29.64 155.667 29V28.184C155.459 28.448 155.195 28.66 154.875 28.82C154.555 28.972 154.175 29.048 153.735 29.048C152.887 29.048 152.251 28.78 151.827 28.244C151.411 27.7 151.191 27.012 151.167 26.18L151.155 25.844L151.167 25.52C151.191 24.696 151.415 24.012 151.839 23.468C152.263 22.916 152.895 22.64 153.735 22.64C154.575 22.64 155.231 22.948 155.703 23.564V23.048C155.703 22.968 155.727 22.9 155.775 22.844C155.831 22.788 155.899 22.76 155.979 22.76H156.531C156.611 22.76 156.679 22.788 156.735 22.844C156.791 22.9 156.819 22.968 156.819 23.048V28.868C156.819 30.716 155.879 31.64 153.999 31.64ZM153.975 28.088C154.519 28.088 154.931 27.908 155.211 27.548C155.491 27.188 155.643 26.76 155.667 26.264C155.675 26.192 155.679 26.052 155.679 25.844C155.679 25.644 155.675 25.508 155.667 25.436C155.643 24.94 155.491 24.512 155.211 24.152C154.939 23.792 154.527 23.612 153.975 23.612C153.407 23.612 152.995 23.788 152.739 24.14C152.483 24.492 152.343 24.956 152.319 25.532L152.307 25.844L152.319 26.168C152.343 26.736 152.483 27.2 152.739 27.56C152.995 27.912 153.407 28.088 153.975 28.088ZM158.879 29C158.799 29 158.731 28.976 158.675 28.928C158.627 28.872 158.603 28.804 158.603 28.724V23.048C158.603 22.968 158.627 22.9 158.675 22.844C158.731 22.788 158.799 22.76 158.879 22.76H159.431C159.511 22.76 159.579 22.788 159.635 22.844C159.691 22.9 159.719 22.968 159.719 23.048V23.576C160.047 23.032 160.607 22.76 161.399 22.76H161.867C161.947 22.76 162.011 22.788 162.059 22.844C162.115 22.892 162.143 22.956 162.143 23.036V23.528C162.143 23.608 162.115 23.672 162.059 23.72C162.011 23.768 161.947 23.792 161.867 23.792H161.147C160.715 23.792 160.375 23.92 160.127 24.176C159.879 24.424 159.755 24.764 159.755 25.196V28.724C159.755 28.804 159.727 28.872 159.671 28.928C159.615 28.976 159.547 29 159.467 29H158.879ZM165.54 29.12C164.716 29.12 164.056 28.868 163.56 28.364C163.072 27.852 162.804 27.156 162.756 26.276L162.744 25.868L162.756 25.472C162.812 24.608 163.084 23.92 163.572 23.408C164.068 22.896 164.72 22.64 165.528 22.64C166.416 22.64 167.104 22.924 167.592 23.492C168.08 24.052 168.324 24.812 168.324 25.772V25.976C168.324 26.056 168.296 26.124 168.24 26.18C168.192 26.228 168.128 26.252 168.048 26.252H163.896V26.36C163.92 26.88 164.076 27.324 164.364 27.692C164.66 28.052 165.048 28.232 165.528 28.232C165.896 28.232 166.196 28.16 166.428 28.016C166.668 27.864 166.844 27.708 166.956 27.548C167.028 27.452 167.08 27.396 167.112 27.38C167.152 27.356 167.22 27.344 167.316 27.344H167.904C167.976 27.344 168.036 27.364 168.084 27.404C168.132 27.444 168.156 27.5 168.156 27.572C168.156 27.748 168.044 27.96 167.82 28.208C167.604 28.456 167.296 28.672 166.896 28.856C166.504 29.032 166.052 29.12 165.54 29.12ZM167.184 25.424V25.388C167.184 24.836 167.032 24.388 166.728 24.044C166.432 23.692 166.032 23.516 165.528 23.516C165.024 23.516 164.624 23.692 164.328 24.044C164.04 24.388 163.896 24.836 163.896 25.388V25.424H167.184ZM172.255 29.12C171.431 29.12 170.771 28.868 170.275 28.364C169.787 27.852 169.519 27.156 169.471 26.276L169.459 25.868L169.471 25.472C169.527 24.608 169.799 23.92 170.287 23.408C170.783 22.896 171.435 22.64 172.243 22.64C173.131 22.64 173.819 22.924 174.307 23.492C174.795 24.052 175.039 24.812 175.039 25.772V25.976C175.039 26.056 175.011 26.124 174.955 26.18C174.907 26.228 174.843 26.252 174.763 26.252H170.611V26.36C170.635 26.88 170.791 27.324 171.079 27.692C171.375 28.052 171.763 28.232 172.243 28.232C172.611 28.232 172.911 28.16 173.143 28.016C173.383 27.864 173.559 27.708 173.671 27.548C173.743 27.452 173.795 27.396 173.827 27.38C173.867 27.356 173.935 27.344 174.031 27.344H174.619C174.691 27.344 174.751 27.364 174.799 27.404C174.847 27.444 174.871 27.5 174.871 27.572C174.871 27.748 174.759 27.96 174.535 28.208C174.319 28.456 174.011 28.672 173.611 28.856C173.219 29.032 172.767 29.12 172.255 29.12ZM173.899 25.424V25.388C173.899 24.836 173.747 24.388 173.443 24.044C173.147 23.692 172.747 23.516 172.243 23.516C171.739 23.516 171.339 23.692 171.043 24.044C170.755 24.388 170.611 24.836 170.611 25.388V25.424H173.899ZM178.634 29.12C178.074 29.12 177.602 29.032 177.218 28.856C176.842 28.672 176.558 28.464 176.366 28.232C176.182 28 176.09 27.808 176.09 27.656C176.09 27.576 176.118 27.516 176.174 27.476C176.238 27.428 176.302 27.404 176.366 27.404H176.906C176.986 27.404 177.058 27.444 177.122 27.524C177.314 27.748 177.522 27.924 177.746 28.052C177.97 28.18 178.27 28.244 178.646 28.244C179.062 28.244 179.398 28.164 179.654 28.004C179.918 27.836 180.05 27.608 180.05 27.32C180.05 27.128 179.994 26.972 179.882 26.852C179.778 26.724 179.594 26.616 179.33 26.528C179.074 26.432 178.69 26.328 178.178 26.216C177.482 26.064 176.986 25.844 176.69 25.556C176.402 25.268 176.258 24.896 176.258 24.44C176.258 24.136 176.346 23.848 176.522 23.576C176.706 23.296 176.97 23.072 177.314 22.904C177.666 22.728 178.086 22.64 178.574 22.64C179.086 22.64 179.522 22.724 179.882 22.892C180.242 23.06 180.51 23.26 180.686 23.492C180.87 23.716 180.962 23.904 180.962 24.056C180.962 24.128 180.934 24.188 180.878 24.236C180.83 24.284 180.77 24.308 180.698 24.308H180.194C180.098 24.308 180.018 24.268 179.954 24.188C179.826 24.036 179.714 23.92 179.618 23.84C179.53 23.752 179.398 23.676 179.222 23.612C179.054 23.548 178.838 23.516 178.574 23.516C178.19 23.516 177.894 23.6 177.686 23.768C177.478 23.928 177.374 24.14 177.374 24.404C177.374 24.572 177.418 24.716 177.506 24.836C177.594 24.948 177.762 25.052 178.01 25.148C178.266 25.244 178.634 25.344 179.114 25.448C179.874 25.608 180.41 25.84 180.722 26.144C181.042 26.44 181.202 26.82 181.202 27.284C181.202 27.628 181.102 27.94 180.902 28.22C180.702 28.5 180.406 28.72 180.014 28.88C179.63 29.04 179.17 29.12 178.634 29.12ZM64.444 47.12C63.564 47.12 62.88 46.872 62.392 46.376C61.912 45.88 61.656 45.22 61.624 44.396L61.612 43.88L61.624 43.364C61.656 42.548 61.916 41.892 62.404 41.396C62.892 40.892 63.572 40.64 64.444 40.64C65.316 40.64 65.996 40.892 66.484 41.396C66.972 41.892 67.232 42.548 67.264 43.364C67.272 43.452 67.276 43.624 67.276 43.88C67.276 44.136 67.272 44.308 67.264 44.396C67.232 45.22 66.972 45.88 66.484 46.376C66.004 46.872 65.324 47.12 64.444 47.12ZM64.444 46.196C64.948 46.196 65.344 46.036 65.632 45.716C65.928 45.396 66.088 44.936 66.112 44.336C66.12 44.256 66.124 44.104 66.124 43.88C66.124 43.656 66.12 43.504 66.112 43.424C66.088 42.824 65.928 42.364 65.632 42.044C65.344 41.724 64.948 41.564 64.444 41.564C63.94 41.564 63.54 41.724 63.244 42.044C62.948 42.364 62.792 42.824 62.776 43.424L62.764 43.88L62.776 44.336C62.792 44.936 62.948 45.396 63.244 45.716C63.54 46.036 63.94 46.196 64.444 46.196ZM69.6083 47C69.5283 47 69.4603 46.976 69.4043 46.928C69.3563 46.872 69.3323 46.804 69.3323 46.724V41.72H68.3123C68.2323 41.72 68.1643 41.696 68.1083 41.648C68.0603 41.592 68.0363 41.524 68.0363 41.444V41.036C68.0363 40.956 68.0603 40.892 68.1083 40.844C68.1643 40.788 68.2323 40.76 68.3123 40.76H69.3323V40.16C69.3323 38.8 70.0203 38.12 71.3963 38.12H72.1163C72.1963 38.12 72.2603 38.148 72.3083 38.204C72.3643 38.252 72.3923 38.316 72.3923 38.396V38.804C72.3923 38.884 72.3643 38.952 72.3083 39.008C72.2603 39.056 72.1963 39.08 72.1163 39.08H71.4203C71.0603 39.08 70.8083 39.176 70.6643 39.368C70.5203 39.552 70.4483 39.836 70.4483 40.22V40.76H71.9963C72.0763 40.76 72.1403 40.788 72.1883 40.844C72.2443 40.892 72.2723 40.956 72.2723 41.036V41.444C72.2723 41.524 72.2443 41.592 72.1883 41.648C72.1403 41.696 72.0763 41.72 71.9963 41.72H70.4483V46.724C70.4483 46.804 70.4203 46.872 70.3643 46.928C70.3163 46.976 70.2523 47 70.1723 47H69.6083ZM76.6747 47C76.5947 47 76.5267 46.976 76.4707 46.928C76.4227 46.872 76.3987 46.804 76.3987 46.724V41.72H75.3787C75.2987 41.72 75.2307 41.696 75.1747 41.648C75.1267 41.592 75.1027 41.524 75.1027 41.444V41.036C75.1027 40.956 75.1267 40.892 75.1747 40.844C75.2307 40.788 75.2987 40.76 75.3787 40.76H76.3987V40.16C76.3987 38.8 77.0867 38.12 78.4627 38.12H79.1827C79.2627 38.12 79.3267 38.148 79.3747 38.204C79.4307 38.252 79.4587 38.316 79.4587 38.396V38.804C79.4587 38.884 79.4307 38.952 79.3747 39.008C79.3267 39.056 79.2627 39.08 79.1827 39.08H78.4867C78.1267 39.08 77.8747 39.176 77.7307 39.368C77.5867 39.552 77.5147 39.836 77.5147 40.22V40.76H79.0627C79.1427 40.76 79.2067 40.788 79.2547 40.844C79.3107 40.892 79.3387 40.956 79.3387 41.036V41.444C79.3387 41.524 79.3107 41.592 79.2547 41.648C79.2067 41.696 79.1427 41.72 79.0627 41.72H77.5147V46.724C77.5147 46.804 77.4867 46.872 77.4307 46.928C77.3827 46.976 77.3187 47 77.2387 47H76.6747ZM80.6679 47C80.5879 47 80.5199 46.976 80.4639 46.928C80.4159 46.872 80.3919 46.804 80.3919 46.724V41.048C80.3919 40.968 80.4159 40.9 80.4639 40.844C80.5199 40.788 80.5879 40.76 80.6679 40.76H81.2199C81.2999 40.76 81.3679 40.788 81.4239 40.844C81.4799 40.9 81.5079 40.968 81.5079 41.048V41.576C81.8359 41.032 82.3959 40.76 83.1879 40.76H83.6559C83.7359 40.76 83.7999 40.788 83.8479 40.844C83.9039 40.892 83.9319 40.956 83.9319 41.036V41.528C83.9319 41.608 83.9039 41.672 83.8479 41.72C83.7999 41.768 83.7359 41.792 83.6559 41.792H82.9359C82.5039 41.792 82.1639 41.92 81.9159 42.176C81.6679 42.424 81.5439 42.764 81.5439 43.196V46.724C81.5439 46.804 81.5159 46.872 81.4599 46.928C81.4039 46.976 81.3359 47 81.2559 47H80.6679ZM87.3293 47.12C86.5053 47.12 85.8453 46.868 85.3493 46.364C84.8613 45.852 84.5933 45.156 84.5453 44.276L84.5333 43.868L84.5453 43.472C84.6013 42.608 84.8733 41.92 85.3613 41.408C85.8573 40.896 86.5093 40.64 87.3173 40.64C88.2053 40.64 88.8933 40.924 89.3813 41.492C89.8693 42.052 90.1133 42.812 90.1133 43.772V43.976C90.1133 44.056 90.0853 44.124 90.0293 44.18C89.9813 44.228 89.9173 44.252 89.8373 44.252H85.6853V44.36C85.7093 44.88 85.8653 45.324 86.1533 45.692C86.4493 46.052 86.8373 46.232 87.3173 46.232C87.6853 46.232 87.9853 46.16 88.2173 46.016C88.4573 45.864 88.6333 45.708 88.7453 45.548C88.8173 45.452 88.8693 45.396 88.9013 45.38C88.9413 45.356 89.0093 45.344 89.1053 45.344H89.6933C89.7653 45.344 89.8253 45.364 89.8733 45.404C89.9213 45.444 89.9453 45.5 89.9453 45.572C89.9453 45.748 89.8333 45.96 89.6093 46.208C89.3933 46.456 89.0853 46.672 88.6853 46.856C88.2933 47.032 87.8413 47.12 87.3293 47.12ZM88.9733 43.424V43.388C88.9733 42.836 88.8213 42.388 88.5173 42.044C88.2213 41.692 87.8213 41.516 87.3173 41.516C86.8133 41.516 86.4133 41.692 86.1173 42.044C85.8293 42.388 85.6853 42.836 85.6853 43.388V43.424H88.9733ZM94.0442 47.12C93.2202 47.12 92.5602 46.868 92.0642 46.364C91.5762 45.852 91.3082 45.156 91.2602 44.276L91.2482 43.868L91.2602 43.472C91.3162 42.608 91.5882 41.92 92.0762 41.408C92.5722 40.896 93.2242 40.64 94.0322 40.64C94.9202 40.64 95.6082 40.924 96.0962 41.492C96.5842 42.052 96.8282 42.812 96.8282 43.772V43.976C96.8282 44.056 96.8002 44.124 96.7442 44.18C96.6962 44.228 96.6322 44.252 96.5522 44.252H92.4002V44.36C92.4242 44.88 92.5802 45.324 92.8682 45.692C93.1642 46.052 93.5522 46.232 94.0322 46.232C94.4002 46.232 94.7002 46.16 94.9322 46.016C95.1722 45.864 95.3482 45.708 95.4602 45.548C95.5322 45.452 95.5842 45.396 95.6162 45.38C95.6562 45.356 95.7242 45.344 95.8202 45.344H96.4082C96.4802 45.344 96.5402 45.364 96.5882 45.404C96.6362 45.444 96.6602 45.5 96.6602 45.572C96.6602 45.748 96.5482 45.96 96.3242 46.208C96.1082 46.456 95.8002 46.672 95.4002 46.856C95.0082 47.032 94.5562 47.12 94.0442 47.12ZM95.6882 43.424V43.388C95.6882 42.836 95.5362 42.388 95.2322 42.044C94.9362 41.692 94.5362 41.516 94.0322 41.516C93.5282 41.516 93.1282 41.692 92.8322 42.044C92.5442 42.388 92.4002 42.836 92.4002 43.388V43.424H95.6882ZM100.543 47.12C99.711 47.12 99.083 46.848 98.659 46.304C98.235 45.76 98.011 45.072 97.987 44.24L97.975 43.88L97.987 43.52C98.011 42.696 98.235 42.012 98.659 41.468C99.083 40.916 99.711 40.64 100.543 40.64C101.367 40.64 102.015 40.932 102.487 41.516V38.756C102.487 38.676 102.511 38.612 102.559 38.564C102.615 38.508 102.683 38.48 102.763 38.48H103.339C103.419 38.48 103.483 38.508 103.531 38.564C103.587 38.612 103.615 38.676 103.615 38.756V46.724C103.615 46.804 103.587 46.872 103.531 46.928C103.483 46.976 103.419 47 103.339 47H102.799C102.719 47 102.651 46.976 102.595 46.928C102.547 46.872 102.523 46.804 102.523 46.724V46.22C102.059 46.82 101.399 47.12 100.543 47.12ZM100.795 46.148C101.347 46.148 101.759 45.968 102.031 45.608C102.311 45.24 102.463 44.804 102.487 44.3C102.495 44.212 102.499 44.06 102.499 43.844C102.499 43.62 102.495 43.464 102.487 43.376C102.471 42.904 102.319 42.492 102.031 42.14C101.743 41.788 101.331 41.612 100.795 41.612C100.227 41.612 99.811 41.788 99.547 42.14C99.291 42.492 99.151 42.956 99.127 43.532L99.115 43.88C99.115 45.392 99.675 46.148 100.795 46.148ZM107.956 47.12C107.076 47.12 106.392 46.872 105.904 46.376C105.424 45.88 105.168 45.22 105.136 44.396L105.124 43.88L105.136 43.364C105.168 42.548 105.428 41.892 105.916 41.396C106.404 40.892 107.084 40.64 107.956 40.64C108.828 40.64 109.508 40.892 109.996 41.396C110.484 41.892 110.744 42.548 110.776 43.364C110.784 43.452 110.788 43.624 110.788 43.88C110.788 44.136 110.784 44.308 110.776 44.396C110.744 45.22 110.484 45.88 109.996 46.376C109.516 46.872 108.836 47.12 107.956 47.12ZM107.956 46.196C108.46 46.196 108.856 46.036 109.144 45.716C109.44 45.396 109.6 44.936 109.624 44.336C109.632 44.256 109.636 44.104 109.636 43.88C109.636 43.656 109.632 43.504 109.624 43.424C109.6 42.824 109.44 42.364 109.144 42.044C108.856 41.724 108.46 41.564 107.956 41.564C107.452 41.564 107.052 41.724 106.756 42.044C106.46 42.364 106.304 42.824 106.288 43.424L106.276 43.88L106.288 44.336C106.304 44.936 106.46 45.396 106.756 45.716C107.052 46.036 107.452 46.196 107.956 46.196ZM112.566 47C112.486 47 112.418 46.976 112.362 46.928C112.314 46.872 112.29 46.804 112.29 46.724V41.036C112.29 40.956 112.314 40.892 112.362 40.844C112.418 40.788 112.486 40.76 112.566 40.76H113.106C113.186 40.76 113.25 40.788 113.298 40.844C113.354 40.892 113.382 40.956 113.382 41.036V41.456C113.798 40.912 114.378 40.64 115.122 40.64C116.01 40.64 116.638 41.008 117.006 41.744C117.198 41.408 117.47 41.14 117.822 40.94C118.174 40.74 118.57 40.64 119.01 40.64C119.666 40.64 120.202 40.864 120.618 41.312C121.034 41.76 121.242 42.408 121.242 43.256V46.724C121.242 46.804 121.214 46.872 121.158 46.928C121.11 46.976 121.046 47 120.966 47H120.402C120.322 47 120.254 46.976 120.198 46.928C120.15 46.872 120.126 46.804 120.126 46.724V43.364C120.126 42.74 119.994 42.292 119.73 42.02C119.474 41.748 119.134 41.612 118.71 41.612C118.334 41.612 118.01 41.752 117.738 42.032C117.466 42.304 117.33 42.748 117.33 43.364V46.724C117.33 46.804 117.302 46.872 117.246 46.928C117.198 46.976 117.134 47 117.054 47H116.49C116.41 47 116.342 46.976 116.286 46.928C116.238 46.872 116.214 46.804 116.214 46.724V43.364C116.214 42.74 116.078 42.292 115.806 42.02C115.542 41.748 115.206 41.612 114.798 41.612C114.422 41.612 114.098 41.752 113.826 42.032C113.554 42.304 113.418 42.744 113.418 43.352V46.724C113.418 46.804 113.39 46.872 113.334 46.928C113.286 46.976 113.222 47 113.142 47H112.566Z'
            fill='#4E4E4E'
            animate='visible'
            {...shapeVariations}
            initial='hidden'
          />
          <motion.circle
            cx='171.5'
            cy='61.5'
            r='7'
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
            d='M165.996 54.5647C165.96 54.8385 165.709 55.0315 165.435 54.9958L160.973 54.4138C160.699 54.3781 160.506 54.1271 160.542 53.8533C160.578 53.5795 160.829 53.3865 161.102 53.4222L165.069 53.9395L165.586 49.9731C165.622 49.6993 165.873 49.5063 166.147 49.542C166.421 49.5777 166.614 49.8286 166.578 50.1025L165.996 54.5647ZM150.5 35V34.5H150.746L150.896 34.6951L150.5 35ZM165.104 54.8049L150.104 35.3049L150.896 34.6951L165.896 54.1951L165.104 54.8049ZM150.5 35.5H61V34.5H150.5V35.5Z'
            fill='#4E4E4E'
            animate='visible'
            {...shapeVariations}
            initial='hidden'
          />
          <motion.circle
            cx='271.5'
            cy='61.5'
            r='7'
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
            d='M265.996 54.5647C265.96 54.8385 265.709 55.0315 265.435 54.9958L260.973 54.4138C260.699 54.3781 260.506 54.1271 260.542 53.8533C260.578 53.5795 260.829 53.3865 261.102 53.4222L265.069 53.9395L265.586 49.9731C265.622 49.6993 265.873 49.5063 266.147 49.542C266.421 49.5777 266.614 49.8286 266.578 50.1025L265.996 54.5647ZM250.5 35V34.5H250.746L250.896 34.6951L250.5 35ZM265.104 54.8049L250.104 35.3049L250.896 34.6951L265.896 54.1951L265.104 54.8049ZM250.5 35.5H150.5V34.5H250.5V35.5Z'
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

export default Un;
