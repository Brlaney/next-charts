import { motion } from 'framer-motion';
import {
  mainPathVariant,
  shapeVariations,
} from '@/lib/config/animations/svgs/svgs';

const Eqn1 = () => {
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
        <g id='Eqn1' data-name='Eqn1'>
          <motion.path
            {...mainPathVariant}
            d='M41.98 41C41.86 41 41.758 40.964 41.674 40.892C41.602 40.808 41.566 40.706 41.566 40.586V28.832C41.566 28.7 41.602 28.598 41.674 28.526C41.758 28.442 41.86 28.4 41.98 28.4H42.88C43.072 28.4 43.228 28.496 43.348 28.688L47.146 35.96L50.98 28.688C51.004 28.616 51.052 28.55 51.124 28.49C51.208 28.43 51.31 28.4 51.43 28.4H52.312C52.444 28.4 52.546 28.442 52.618 28.526C52.702 28.598 52.744 28.7 52.744 28.832V40.586C52.744 40.706 52.702 40.808 52.618 40.892C52.534 40.964 52.432 41 52.312 41H51.43C51.31 41 51.208 40.964 51.124 40.892C51.052 40.808 51.016 40.706 51.016 40.586V31.73L48.01 37.598C47.89 37.85 47.698 37.976 47.434 37.976H46.876C46.612 37.976 46.42 37.85 46.3 37.598L43.276 31.73V40.586C43.276 40.706 43.234 40.808 43.15 40.892C43.078 40.964 42.982 41 42.862 41H41.98ZM56.919 44.06C56.799 44.06 56.703 44.024 56.631 43.952C56.559 43.88 56.523 43.784 56.523 43.664V39.38L55.461 40.172C55.401 40.22 55.323 40.244 55.227 40.244C55.107 40.244 54.999 40.19 54.903 40.082L54.669 39.776C54.609 39.692 54.579 39.608 54.579 39.524C54.579 39.416 54.633 39.314 54.741 39.218L56.523 37.886C56.643 37.802 56.781 37.76 56.937 37.76H57.441C57.561 37.76 57.657 37.796 57.729 37.868C57.801 37.94 57.837 38.036 57.837 38.156V43.664C57.837 43.784 57.801 43.88 57.729 43.952C57.657 44.024 57.561 44.06 57.441 44.06H56.919ZM61.296 44.06C61.176 44.06 61.08 44.024 61.008 43.952C60.936 43.88 60.9 43.784 60.9 43.664V39.38L59.838 40.172C59.778 40.22 59.7 40.244 59.604 40.244C59.484 40.244 59.376 40.19 59.28 40.082L59.046 39.776C58.986 39.692 58.956 39.608 58.956 39.524C58.956 39.416 59.01 39.314 59.118 39.218L60.9 37.886C61.02 37.802 61.158 37.76 61.314 37.76H61.818C61.938 37.76 62.034 37.796 62.106 37.868C62.178 37.94 62.214 38.036 62.214 38.156V43.664C62.214 43.784 62.178 43.88 62.106 43.952C62.034 44.024 61.938 44.06 61.818 44.06H61.296ZM69.4495 33.872C69.3295 33.872 69.2335 33.836 69.1615 33.764C69.0895 33.692 69.0535 33.596 69.0535 33.476V33.224C69.0535 33.104 69.0895 33.008 69.1615 32.936C69.2335 32.864 69.3295 32.828 69.4495 32.828H76.1995C76.3195 32.828 76.4155 32.864 76.4875 32.936C76.5595 33.008 76.5955 33.104 76.5955 33.224V33.476C76.5955 33.596 76.5595 33.692 76.4875 33.764C76.4155 33.836 76.3195 33.872 76.1995 33.872H69.4495ZM69.4495 38.372C69.3295 38.372 69.2335 38.336 69.1615 38.264C69.0895 38.192 69.0535 38.096 69.0535 37.976V37.724C69.0535 37.604 69.0895 37.508 69.1615 37.436C69.2335 37.364 69.3295 37.328 69.4495 37.328H76.1995C76.3195 37.328 76.4155 37.364 76.4875 37.436C76.5595 37.508 76.5955 37.604 76.5955 37.724V37.976C76.5955 38.096 76.5595 38.192 76.4875 38.264C76.4155 38.336 76.3195 38.372 76.1995 38.372H69.4495ZM84.3374 36.122C84.2174 36.122 84.1214 36.086 84.0494 36.014C83.9774 35.942 83.9414 35.846 83.9414 35.726V35.474C83.9414 35.354 83.9774 35.258 84.0494 35.186C84.1214 35.114 84.2174 35.078 84.3374 35.078H89.6474C89.7674 35.078 89.8634 35.114 89.9354 35.186C90.0074 35.258 90.0434 35.354 90.0434 35.474V35.726C90.0434 35.846 90.0074 35.942 89.9354 36.014C89.8634 36.086 89.7674 36.122 89.6474 36.122H84.3374ZM94.9876 41C94.8316 41 94.7116 40.964 94.6276 40.892C94.5436 40.82 94.4716 40.706 94.4116 40.55L91.8736 32.198L91.8376 32C91.8376 31.904 91.8736 31.82 91.9456 31.748C92.0176 31.676 92.1016 31.64 92.1976 31.64H92.5396C92.6476 31.64 92.7376 31.67 92.8096 31.73C92.8816 31.79 92.9236 31.85 92.9356 31.91L95.1496 39.398L97.5076 32C97.5316 31.904 97.5856 31.82 97.6696 31.748C97.7536 31.676 97.8616 31.64 97.9936 31.64H98.3536C98.4856 31.64 98.5936 31.676 98.6776 31.748C98.7616 31.82 98.8156 31.904 98.8396 32L101.198 39.398L103.412 31.91C103.424 31.85 103.466 31.79 103.538 31.73C103.61 31.67 103.7 31.64 103.808 31.64H104.15C104.246 31.64 104.33 31.676 104.402 31.748C104.474 31.82 104.51 31.904 104.51 32L104.474 32.198L101.936 40.55C101.876 40.706 101.804 40.82 101.72 40.892C101.636 40.964 101.516 41 101.36 41H101.054C100.73 41 100.526 40.85 100.442 40.55L98.1736 33.458L95.9056 40.55C95.8216 40.85 95.6176 41 95.2936 41H94.9876ZM107.338 41C107.218 41 107.122 40.964 107.05 40.892C106.978 40.82 106.942 40.724 106.942 40.604V28.796C106.942 28.676 106.978 28.58 107.05 28.508C107.122 28.436 107.218 28.4 107.338 28.4H107.68C107.8 28.4 107.896 28.436 107.968 28.508C108.04 28.58 108.076 28.676 108.076 28.796V39.92H114.286C114.418 39.92 114.52 39.956 114.592 40.028C114.664 40.1 114.7 40.202 114.7 40.334V40.604C114.7 40.724 114.658 40.82 114.574 40.892C114.502 40.964 114.406 41 114.286 41H107.338ZM116.065 34.7C115.945 34.7 115.849 34.664 115.777 34.592C115.705 34.52 115.669 34.424 115.669 34.304V33.998C115.669 33.902 115.699 33.812 115.759 33.728C115.819 33.632 115.933 33.524 116.101 33.404L116.983 32.774C117.643 32.294 118.111 31.946 118.387 31.73C118.675 31.502 118.891 31.28 119.035 31.064C119.191 30.836 119.269 30.584 119.269 30.308C119.269 30.008 119.155 29.768 118.927 29.588C118.699 29.396 118.423 29.3 118.099 29.3C117.727 29.3 117.457 29.366 117.289 29.498C117.133 29.63 117.031 29.75 116.983 29.858C116.923 29.978 116.887 30.05 116.875 30.074C116.803 30.206 116.737 30.296 116.677 30.344C116.617 30.38 116.539 30.398 116.443 30.398H116.173C115.957 30.398 115.849 30.296 115.849 30.092C115.849 29.816 115.951 29.54 116.155 29.264C116.359 28.976 116.635 28.748 116.983 28.58C117.331 28.4 117.703 28.31 118.099 28.31C118.759 28.31 119.293 28.508 119.701 28.904C120.109 29.3 120.313 29.768 120.313 30.308C120.313 30.74 120.217 31.124 120.025 31.46C119.845 31.784 119.563 32.102 119.179 32.414C118.807 32.726 118.231 33.152 117.451 33.692H120.187C120.307 33.692 120.403 33.728 120.475 33.8C120.547 33.872 120.583 33.968 120.583 34.088V34.304C120.583 34.424 120.547 34.52 120.475 34.592C120.403 34.664 120.307 34.7 120.187 34.7H116.065ZM126.627 42.512C126.531 42.512 126.447 42.476 126.375 42.404C126.303 42.332 126.267 42.248 126.267 42.152C126.267 42.104 126.285 42.032 126.321 41.936L132.513 27.122C132.537 27.062 132.579 27.002 132.639 26.942C132.711 26.882 132.801 26.852 132.909 26.852H133.215C133.311 26.852 133.395 26.888 133.467 26.96C133.539 27.032 133.575 27.116 133.575 27.212C133.575 27.26 133.557 27.332 133.521 27.428L127.329 42.242C127.305 42.302 127.257 42.362 127.185 42.422C127.125 42.482 127.041 42.512 126.933 42.512H126.627ZM143.652 41C143.532 41 143.436 40.964 143.364 40.892C143.292 40.82 143.256 40.724 143.256 40.604V29.876L140.034 32.36C139.938 32.42 139.854 32.45 139.782 32.45C139.662 32.45 139.56 32.396 139.476 32.288L139.278 32.036C139.218 31.952 139.188 31.868 139.188 31.784C139.188 31.664 139.242 31.562 139.35 31.478L143.184 28.526C143.304 28.442 143.46 28.4 143.652 28.4H143.994C144.114 28.4 144.21 28.436 144.282 28.508C144.354 28.58 144.39 28.676 144.39 28.796V40.604C144.39 40.724 144.354 40.82 144.282 40.892C144.21 40.964 144.114 41 143.994 41H143.652ZM147.187 41C147.067 41 146.971 40.964 146.899 40.892C146.827 40.82 146.791 40.724 146.791 40.604V40.334C146.791 40.094 146.941 39.842 147.241 39.578L151.903 34.916C152.563 34.304 153.007 33.788 153.235 33.368C153.463 32.948 153.577 32.45 153.577 31.874C153.577 31.07 153.343 30.44 152.875 29.984C152.419 29.528 151.765 29.3 150.913 29.3C150.109 29.3 149.467 29.534 148.987 30.002C148.507 30.47 148.219 31.1 148.123 31.892C148.111 32.024 148.057 32.126 147.961 32.198C147.877 32.27 147.793 32.306 147.709 32.306H147.349C147.229 32.306 147.133 32.276 147.061 32.216C147.001 32.144 146.971 32.06 146.971 31.964C146.995 31.376 147.151 30.794 147.439 30.218C147.727 29.642 148.165 29.168 148.753 28.796C149.341 28.412 150.061 28.22 150.913 28.22C152.197 28.22 153.151 28.568 153.775 29.264C154.399 29.96 154.711 30.83 154.711 31.874C154.711 32.594 154.555 33.242 154.243 33.818C153.931 34.394 153.433 35 152.749 35.636L148.537 39.92H154.567C154.699 39.92 154.801 39.956 154.873 40.028C154.945 40.1 154.981 40.202 154.981 40.334V40.604C154.981 40.724 154.939 40.82 154.855 40.892C154.783 40.964 154.687 41 154.567 41H147.187Z'
            fill='#4E4E4E'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M234.98 41C234.86 41 234.758 40.964 234.674 40.892C234.602 40.808 234.566 40.706 234.566 40.586V28.832C234.566 28.7 234.602 28.598 234.674 28.526C234.758 28.442 234.86 28.4 234.98 28.4H235.88C236.072 28.4 236.228 28.496 236.348 28.688L240.146 35.96L243.98 28.688C244.004 28.616 244.052 28.55 244.124 28.49C244.208 28.43 244.31 28.4 244.43 28.4H245.312C245.444 28.4 245.546 28.442 245.618 28.526C245.702 28.598 245.744 28.7 245.744 28.832V40.586C245.744 40.706 245.702 40.808 245.618 40.892C245.534 40.964 245.432 41 245.312 41H244.43C244.31 41 244.208 40.964 244.124 40.892C244.052 40.808 244.016 40.706 244.016 40.586V31.73L241.01 37.598C240.89 37.85 240.698 37.976 240.434 37.976H239.876C239.612 37.976 239.42 37.85 239.3 37.598L236.276 31.73V40.586C236.276 40.706 236.234 40.808 236.15 40.892C236.078 40.964 235.982 41 235.862 41H234.98ZM248.227 44.06C248.107 44.06 248.011 44.024 247.939 43.952C247.867 43.88 247.831 43.784 247.831 43.664V43.268C247.831 43.172 247.861 43.076 247.921 42.98C247.981 42.896 248.095 42.794 248.263 42.674L249.199 41.99C249.799 41.57 250.237 41.246 250.513 41.018C250.789 40.802 250.993 40.592 251.125 40.388C251.269 40.172 251.341 39.938 251.341 39.686C251.341 39.422 251.245 39.212 251.053 39.056C250.861 38.888 250.621 38.804 250.333 38.804C250.009 38.804 249.775 38.864 249.631 38.984C249.487 39.104 249.391 39.212 249.343 39.308C249.295 39.416 249.265 39.482 249.253 39.506C249.181 39.638 249.115 39.728 249.055 39.776C248.995 39.812 248.917 39.83 248.821 39.83H248.317C248.101 39.83 247.993 39.728 247.993 39.524C247.993 39.212 248.101 38.912 248.317 38.624C248.533 38.336 248.815 38.108 249.163 37.94C249.523 37.76 249.913 37.67 250.333 37.67C251.029 37.67 251.587 37.862 252.007 38.246C252.427 38.63 252.637 39.104 252.637 39.668C252.637 40.088 252.541 40.46 252.349 40.784C252.169 41.096 251.899 41.402 251.539 41.702C251.191 42.002 250.657 42.398 249.937 42.89H252.511C252.631 42.89 252.727 42.926 252.799 42.998C252.871 43.07 252.907 43.166 252.907 43.286V43.664C252.907 43.784 252.871 43.88 252.799 43.952C252.727 44.024 252.631 44.06 252.511 44.06H248.227ZM256.054 44.06C255.934 44.06 255.838 44.024 255.766 43.952C255.694 43.88 255.658 43.784 255.658 43.664V39.38L254.596 40.172C254.536 40.22 254.458 40.244 254.362 40.244C254.242 40.244 254.134 40.19 254.038 40.082L253.804 39.776C253.744 39.692 253.714 39.608 253.714 39.524C253.714 39.416 253.768 39.314 253.876 39.218L255.658 37.886C255.778 37.802 255.916 37.76 256.072 37.76H256.576C256.696 37.76 256.792 37.796 256.864 37.868C256.936 37.94 256.972 38.036 256.972 38.156V43.664C256.972 43.784 256.936 43.88 256.864 43.952C256.792 44.024 256.696 44.06 256.576 44.06H256.054ZM264.207 33.872C264.087 33.872 263.991 33.836 263.919 33.764C263.847 33.692 263.811 33.596 263.811 33.476V33.224C263.811 33.104 263.847 33.008 263.919 32.936C263.991 32.864 264.087 32.828 264.207 32.828H270.957C271.077 32.828 271.173 32.864 271.245 32.936C271.317 33.008 271.353 33.104 271.353 33.224V33.476C271.353 33.596 271.317 33.692 271.245 33.764C271.173 33.836 271.077 33.872 270.957 33.872H264.207ZM264.207 38.372C264.087 38.372 263.991 38.336 263.919 38.264C263.847 38.192 263.811 38.096 263.811 37.976V37.724C263.811 37.604 263.847 37.508 263.919 37.436C263.991 37.364 264.087 37.328 264.207 37.328H270.957C271.077 37.328 271.173 37.364 271.245 37.436C271.317 37.508 271.353 37.604 271.353 37.724V37.976C271.353 38.096 271.317 38.192 271.245 38.264C271.173 38.336 271.077 38.372 270.957 38.372H264.207ZM280.833 41C280.677 41 280.557 40.964 280.473 40.892C280.389 40.82 280.317 40.706 280.257 40.55L277.719 32.198L277.683 32C277.683 31.904 277.719 31.82 277.791 31.748C277.863 31.676 277.947 31.64 278.043 31.64H278.385C278.493 31.64 278.583 31.67 278.655 31.73C278.727 31.79 278.769 31.85 278.781 31.91L280.995 39.398L283.353 32C283.377 31.904 283.431 31.82 283.515 31.748C283.599 31.676 283.707 31.64 283.839 31.64H284.199C284.331 31.64 284.439 31.676 284.523 31.748C284.607 31.82 284.661 31.904 284.685 32L287.043 39.398L289.257 31.91C289.269 31.85 289.311 31.79 289.383 31.73C289.455 31.67 289.545 31.64 289.653 31.64H289.995C290.091 31.64 290.175 31.676 290.247 31.748C290.319 31.82 290.355 31.904 290.355 32L290.319 32.198L287.781 40.55C287.721 40.706 287.649 40.82 287.565 40.892C287.481 40.964 287.361 41 287.205 41H286.899C286.575 41 286.371 40.85 286.287 40.55L284.019 33.458L281.751 40.55C281.667 40.85 281.463 41 281.139 41H280.833ZM293.184 41C293.064 41 292.968 40.964 292.896 40.892C292.824 40.82 292.788 40.724 292.788 40.604V28.796C292.788 28.676 292.824 28.58 292.896 28.508C292.968 28.436 293.064 28.4 293.184 28.4H293.526C293.646 28.4 293.742 28.436 293.814 28.508C293.886 28.58 293.922 28.676 293.922 28.796V39.92H300.132C300.264 39.92 300.366 39.956 300.438 40.028C300.51 40.1 300.546 40.202 300.546 40.334V40.604C300.546 40.724 300.504 40.82 300.42 40.892C300.348 40.964 300.252 41 300.132 41H293.184ZM301.911 34.7C301.791 34.7 301.695 34.664 301.623 34.592C301.551 34.52 301.515 34.424 301.515 34.304V33.998C301.515 33.902 301.545 33.812 301.605 33.728C301.665 33.632 301.779 33.524 301.947 33.404L302.829 32.774C303.489 32.294 303.957 31.946 304.233 31.73C304.521 31.502 304.737 31.28 304.881 31.064C305.037 30.836 305.115 30.584 305.115 30.308C305.115 30.008 305.001 29.768 304.773 29.588C304.545 29.396 304.269 29.3 303.945 29.3C303.573 29.3 303.303 29.366 303.135 29.498C302.979 29.63 302.877 29.75 302.829 29.858C302.769 29.978 302.733 30.05 302.721 30.074C302.649 30.206 302.583 30.296 302.523 30.344C302.463 30.38 302.385 30.398 302.289 30.398H302.019C301.803 30.398 301.695 30.296 301.695 30.092C301.695 29.816 301.797 29.54 302.001 29.264C302.205 28.976 302.481 28.748 302.829 28.58C303.177 28.4 303.549 28.31 303.945 28.31C304.605 28.31 305.139 28.508 305.547 28.904C305.955 29.3 306.159 29.768 306.159 30.308C306.159 30.74 306.063 31.124 305.871 31.46C305.691 31.784 305.409 32.102 305.025 32.414C304.653 32.726 304.077 33.152 303.297 33.692H306.033C306.153 33.692 306.249 33.728 306.321 33.8C306.393 33.872 306.429 33.968 306.429 34.088V34.304C306.429 34.424 306.393 34.52 306.321 34.592C306.249 34.664 306.153 34.7 306.033 34.7H301.911ZM312.473 42.512C312.377 42.512 312.293 42.476 312.221 42.404C312.149 42.332 312.113 42.248 312.113 42.152C312.113 42.104 312.131 42.032 312.167 41.936L318.359 27.122C318.383 27.062 318.425 27.002 318.485 26.942C318.557 26.882 318.647 26.852 318.755 26.852H319.061C319.157 26.852 319.241 26.888 319.313 26.96C319.385 27.032 319.421 27.116 319.421 27.212C319.421 27.26 319.403 27.332 319.367 27.428L313.175 42.242C313.151 42.302 313.103 42.362 313.031 42.422C312.971 42.482 312.887 42.512 312.779 42.512H312.473ZM329.497 41C329.377 41 329.281 40.964 329.209 40.892C329.137 40.82 329.101 40.724 329.101 40.604V29.876L325.879 32.36C325.783 32.42 325.699 32.45 325.627 32.45C325.507 32.45 325.405 32.396 325.321 32.288L325.123 32.036C325.063 31.952 325.033 31.868 325.033 31.784C325.033 31.664 325.087 31.562 325.195 31.478L329.029 28.526C329.149 28.442 329.305 28.4 329.497 28.4H329.839C329.959 28.4 330.055 28.436 330.127 28.508C330.199 28.58 330.235 28.676 330.235 28.796V40.604C330.235 40.724 330.199 40.82 330.127 40.892C330.055 40.964 329.959 41 329.839 41H329.497ZM333.033 41C332.913 41 332.817 40.964 332.745 40.892C332.673 40.82 332.637 40.724 332.637 40.604V40.334C332.637 40.094 332.787 39.842 333.087 39.578L337.749 34.916C338.409 34.304 338.853 33.788 339.081 33.368C339.309 32.948 339.423 32.45 339.423 31.874C339.423 31.07 339.189 30.44 338.721 29.984C338.265 29.528 337.611 29.3 336.759 29.3C335.955 29.3 335.313 29.534 334.833 30.002C334.353 30.47 334.065 31.1 333.969 31.892C333.957 32.024 333.903 32.126 333.807 32.198C333.723 32.27 333.639 32.306 333.555 32.306H333.195C333.075 32.306 332.979 32.276 332.907 32.216C332.847 32.144 332.817 32.06 332.817 31.964C332.841 31.376 332.997 30.794 333.285 30.218C333.573 29.642 334.011 29.168 334.599 28.796C335.187 28.412 335.907 28.22 336.759 28.22C338.043 28.22 338.997 28.568 339.621 29.264C340.245 29.96 340.557 30.83 340.557 31.874C340.557 32.594 340.401 33.242 340.089 33.818C339.777 34.394 339.279 35 338.595 35.636L334.383 39.92H340.413C340.545 39.92 340.647 39.956 340.719 40.028C340.791 40.1 340.827 40.202 340.827 40.334V40.604C340.827 40.724 340.785 40.82 340.701 40.892C340.629 40.964 340.533 41 340.413 41H333.033Z'
            fill='#4E4E4E'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M45.31 89C44.986 89 44.764 88.844 44.644 88.532L40.63 76.958L40.594 76.76C40.594 76.664 40.63 76.58 40.702 76.508C40.774 76.436 40.858 76.4 40.954 76.4H41.89C42.118 76.4 42.28 76.508 42.376 76.724L45.886 86.93L49.414 76.724C49.438 76.652 49.492 76.58 49.576 76.508C49.66 76.436 49.762 76.4 49.882 76.4H50.818C50.914 76.4 50.998 76.436 51.07 76.508C51.154 76.58 51.196 76.664 51.196 76.76L51.16 76.958L47.128 88.532C47.008 88.844 46.792 89 46.48 89H45.31ZM54.4229 92.06C54.3029 92.06 54.2069 92.024 54.1349 91.952C54.0629 91.88 54.0269 91.784 54.0269 91.664V87.38L52.9649 88.172C52.9049 88.22 52.8269 88.244 52.7309 88.244C52.6109 88.244 52.5029 88.19 52.4069 88.082L52.1729 87.776C52.1129 87.692 52.0829 87.608 52.0829 87.524C52.0829 87.416 52.1369 87.314 52.2449 87.218L54.0269 85.886C54.1469 85.802 54.2849 85.76 54.4409 85.76H54.9449C55.0649 85.76 55.1609 85.796 55.2329 85.868C55.3049 85.94 55.3409 86.036 55.3409 86.156V91.664C55.3409 91.784 55.3049 91.88 55.2329 91.952C55.1609 92.024 55.0649 92.06 54.9449 92.06H54.4229ZM57.1079 92.06C56.9879 92.06 56.8919 92.024 56.8199 91.952C56.7479 91.88 56.7119 91.784 56.7119 91.664V91.268C56.7119 91.172 56.7419 91.076 56.8019 90.98C56.8619 90.896 56.9759 90.794 57.1439 90.674L58.0799 89.99C58.6799 89.57 59.1179 89.246 59.3939 89.018C59.6699 88.802 59.8739 88.592 60.0059 88.388C60.1499 88.172 60.2219 87.938 60.2219 87.686C60.2219 87.422 60.1259 87.212 59.9339 87.056C59.7419 86.888 59.5019 86.804 59.2139 86.804C58.8899 86.804 58.6559 86.864 58.5119 86.984C58.3679 87.104 58.2719 87.212 58.2239 87.308C58.1759 87.416 58.1459 87.482 58.1339 87.506C58.0619 87.638 57.9959 87.728 57.9359 87.776C57.8759 87.812 57.7979 87.83 57.7019 87.83H57.1979C56.9819 87.83 56.8739 87.728 56.8739 87.524C56.8739 87.212 56.9819 86.912 57.1979 86.624C57.4139 86.336 57.6959 86.108 58.0439 85.94C58.4039 85.76 58.7939 85.67 59.2139 85.67C59.9099 85.67 60.4679 85.862 60.8879 86.246C61.3079 86.63 61.5179 87.104 61.5179 87.668C61.5179 88.088 61.4219 88.46 61.2299 88.784C61.0499 89.096 60.7799 89.402 60.4199 89.702C60.0719 90.002 59.5379 90.398 58.8179 90.89H61.3919C61.5119 90.89 61.6079 90.926 61.6799 90.998C61.7519 91.07 61.7879 91.166 61.7879 91.286V91.664C61.7879 91.784 61.7519 91.88 61.6799 91.952C61.6079 92.024 61.5119 92.06 61.3919 92.06H57.1079ZM68.4828 81.872C68.3628 81.872 68.2668 81.836 68.1948 81.764C68.1228 81.692 68.0868 81.596 68.0868 81.476V81.224C68.0868 81.104 68.1228 81.008 68.1948 80.936C68.2668 80.864 68.3628 80.828 68.4828 80.828H75.2328C75.3528 80.828 75.4488 80.864 75.5208 80.936C75.5928 81.008 75.6288 81.104 75.6288 81.224V81.476C75.6288 81.596 75.5928 81.692 75.5208 81.764C75.4488 81.836 75.3528 81.872 75.2328 81.872H68.4828ZM68.4828 86.372C68.3628 86.372 68.2668 86.336 68.1948 86.264C68.1228 86.192 68.0868 86.096 68.0868 85.976V85.724C68.0868 85.604 68.1228 85.508 68.1948 85.436C68.2668 85.364 68.3628 85.328 68.4828 85.328H75.2328C75.3528 85.328 75.4488 85.364 75.5208 85.436C75.5928 85.508 75.6288 85.604 75.6288 85.724V85.976C75.6288 86.096 75.5928 86.192 75.5208 86.264C75.4488 86.336 75.3528 86.372 75.2328 86.372H68.4828ZM85.1087 89C84.9527 89 84.8327 88.964 84.7487 88.892C84.6647 88.82 84.5927 88.706 84.5327 88.55L81.9947 80.198L81.9587 80C81.9587 79.904 81.9947 79.82 82.0667 79.748C82.1387 79.676 82.2227 79.64 82.3187 79.64H82.6607C82.7687 79.64 82.8587 79.67 82.9307 79.73C83.0027 79.79 83.0447 79.85 83.0567 79.91L85.2707 87.398L87.6287 80C87.6527 79.904 87.7067 79.82 87.7907 79.748C87.8747 79.676 87.9827 79.64 88.1147 79.64H88.4747C88.6067 79.64 88.7147 79.676 88.7987 79.748C88.8827 79.82 88.9367 79.904 88.9607 80L91.3187 87.398L93.5327 79.91C93.5447 79.85 93.5867 79.79 93.6587 79.73C93.7307 79.67 93.8207 79.64 93.9287 79.64H94.2707C94.3667 79.64 94.4507 79.676 94.5227 79.748C94.5947 79.82 94.6307 79.904 94.6307 80L94.5947 80.198L92.0567 88.55C91.9967 88.706 91.9247 88.82 91.8407 88.892C91.7567 88.964 91.6367 89 91.4807 89H91.1747C90.8507 89 90.6467 88.85 90.5627 88.55L88.2947 81.458L86.0267 88.55C85.9427 88.85 85.7387 89 85.4147 89H85.1087ZM97.4591 89C97.3391 89 97.2431 88.964 97.1711 88.892C97.0991 88.82 97.0631 88.724 97.0631 88.604V76.796C97.0631 76.676 97.0991 76.58 97.1711 76.508C97.2431 76.436 97.3391 76.4 97.4591 76.4H97.8011C97.9211 76.4 98.0171 76.436 98.0891 76.508C98.1611 76.58 98.1971 76.676 98.1971 76.796V87.92H104.407C104.539 87.92 104.641 87.956 104.713 88.028C104.785 88.1 104.821 88.202 104.821 88.334V88.604C104.821 88.724 104.779 88.82 104.695 88.892C104.623 88.964 104.527 89 104.407 89H97.4591ZM110.227 90.512C110.131 90.512 110.047 90.476 109.975 90.404C109.903 90.332 109.867 90.248 109.867 90.152C109.867 90.104 109.885 90.032 109.921 89.936L116.113 75.122C116.137 75.062 116.179 75.002 116.239 74.942C116.311 74.882 116.401 74.852 116.509 74.852H116.815C116.911 74.852 116.995 74.888 117.067 74.96C117.139 75.032 117.175 75.116 117.175 75.212C117.175 75.26 117.157 75.332 117.121 75.428L110.929 90.242C110.905 90.302 110.857 90.362 110.785 90.422C110.725 90.482 110.641 90.512 110.533 90.512H110.227ZM123.615 89C123.495 89 123.399 88.964 123.327 88.892C123.255 88.82 123.219 88.724 123.219 88.604V88.334C123.219 88.094 123.369 87.842 123.669 87.578L128.331 82.916C128.991 82.304 129.435 81.788 129.663 81.368C129.891 80.948 130.005 80.45 130.005 79.874C130.005 79.07 129.771 78.44 129.303 77.984C128.847 77.528 128.193 77.3 127.341 77.3C126.537 77.3 125.895 77.534 125.415 78.002C124.935 78.47 124.647 79.1 124.551 79.892C124.539 80.024 124.485 80.126 124.389 80.198C124.305 80.27 124.221 80.306 124.137 80.306H123.777C123.657 80.306 123.561 80.276 123.489 80.216C123.429 80.144 123.399 80.06 123.399 79.964C123.423 79.376 123.579 78.794 123.867 78.218C124.155 77.642 124.593 77.168 125.181 76.796C125.769 76.412 126.489 76.22 127.341 76.22C128.625 76.22 129.579 76.568 130.203 77.264C130.827 77.96 131.139 78.83 131.139 79.874C131.139 80.594 130.983 81.242 130.671 81.818C130.359 82.394 129.861 83 129.177 83.636L124.965 87.92H130.995C131.127 87.92 131.229 87.956 131.301 88.028C131.373 88.1 131.409 88.202 131.409 88.334V88.604C131.409 88.724 131.367 88.82 131.283 88.892C131.211 88.964 131.115 89 130.995 89H123.615Z'
            fill='#4E4E4E'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M238.31 89C237.986 89 237.764 88.844 237.644 88.532L233.63 76.958L233.594 76.76C233.594 76.664 233.63 76.58 233.702 76.508C233.774 76.436 233.858 76.4 233.954 76.4H234.89C235.118 76.4 235.28 76.508 235.376 76.724L238.886 86.93L242.414 76.724C242.438 76.652 242.492 76.58 242.576 76.508C242.66 76.436 242.762 76.4 242.882 76.4H243.818C243.914 76.4 243.998 76.436 244.07 76.508C244.154 76.58 244.196 76.664 244.196 76.76L244.16 76.958L240.128 88.532C240.008 88.844 239.792 89 239.48 89H238.31ZM245.731 92.06C245.611 92.06 245.515 92.024 245.443 91.952C245.371 91.88 245.335 91.784 245.335 91.664V91.268C245.335 91.172 245.365 91.076 245.425 90.98C245.485 90.896 245.599 90.794 245.767 90.674L246.703 89.99C247.303 89.57 247.741 89.246 248.017 89.018C248.293 88.802 248.497 88.592 248.629 88.388C248.773 88.172 248.845 87.938 248.845 87.686C248.845 87.422 248.749 87.212 248.557 87.056C248.365 86.888 248.125 86.804 247.837 86.804C247.513 86.804 247.279 86.864 247.135 86.984C246.991 87.104 246.895 87.212 246.847 87.308C246.799 87.416 246.769 87.482 246.757 87.506C246.685 87.638 246.619 87.728 246.559 87.776C246.499 87.812 246.421 87.83 246.325 87.83H245.821C245.605 87.83 245.497 87.728 245.497 87.524C245.497 87.212 245.605 86.912 245.821 86.624C246.037 86.336 246.319 86.108 246.667 85.94C247.027 85.76 247.417 85.67 247.837 85.67C248.533 85.67 249.091 85.862 249.511 86.246C249.931 86.63 250.141 87.104 250.141 87.668C250.141 88.088 250.045 88.46 249.853 88.784C249.673 89.096 249.403 89.402 249.043 89.702C248.695 90.002 248.161 90.398 247.441 90.89H250.015C250.135 90.89 250.231 90.926 250.303 90.998C250.375 91.07 250.411 91.166 250.411 91.286V91.664C250.411 91.784 250.375 91.88 250.303 91.952C250.231 92.024 250.135 92.06 250.015 92.06H245.731ZM251.866 92.06C251.746 92.06 251.65 92.024 251.578 91.952C251.506 91.88 251.47 91.784 251.47 91.664V91.268C251.47 91.172 251.5 91.076 251.56 90.98C251.62 90.896 251.734 90.794 251.902 90.674L252.838 89.99C253.438 89.57 253.876 89.246 254.152 89.018C254.428 88.802 254.632 88.592 254.764 88.388C254.908 88.172 254.98 87.938 254.98 87.686C254.98 87.422 254.884 87.212 254.692 87.056C254.5 86.888 254.26 86.804 253.972 86.804C253.648 86.804 253.414 86.864 253.27 86.984C253.126 87.104 253.03 87.212 252.982 87.308C252.934 87.416 252.904 87.482 252.892 87.506C252.82 87.638 252.754 87.728 252.694 87.776C252.634 87.812 252.556 87.83 252.46 87.83H251.956C251.74 87.83 251.632 87.728 251.632 87.524C251.632 87.212 251.74 86.912 251.956 86.624C252.172 86.336 252.454 86.108 252.802 85.94C253.162 85.76 253.552 85.67 253.972 85.67C254.668 85.67 255.226 85.862 255.646 86.246C256.066 86.63 256.276 87.104 256.276 87.668C256.276 88.088 256.18 88.46 255.988 88.784C255.808 89.096 255.538 89.402 255.178 89.702C254.83 90.002 254.296 90.398 253.576 90.89H256.15C256.27 90.89 256.366 90.926 256.438 90.998C256.51 91.07 256.546 91.166 256.546 91.286V91.664C256.546 91.784 256.51 91.88 256.438 91.952C256.366 92.024 256.27 92.06 256.15 92.06H251.866ZM263.241 81.872C263.121 81.872 263.025 81.836 262.953 81.764C262.881 81.692 262.845 81.596 262.845 81.476V81.224C262.845 81.104 262.881 81.008 262.953 80.936C263.025 80.864 263.121 80.828 263.241 80.828H269.991C270.111 80.828 270.207 80.864 270.279 80.936C270.351 81.008 270.387 81.104 270.387 81.224V81.476C270.387 81.596 270.351 81.692 270.279 81.764C270.207 81.836 270.111 81.872 269.991 81.872H263.241ZM263.241 86.372C263.121 86.372 263.025 86.336 262.953 86.264C262.881 86.192 262.845 86.096 262.845 85.976V85.724C262.845 85.604 262.881 85.508 262.953 85.436C263.025 85.364 263.121 85.328 263.241 85.328H269.991C270.111 85.328 270.207 85.364 270.279 85.436C270.351 85.508 270.387 85.604 270.387 85.724V85.976C270.387 86.096 270.351 86.192 270.279 86.264C270.207 86.336 270.111 86.372 269.991 86.372H263.241ZM279.867 89C279.711 89 279.591 88.964 279.507 88.892C279.423 88.82 279.351 88.706 279.291 88.55L276.753 80.198L276.717 80C276.717 79.904 276.753 79.82 276.825 79.748C276.897 79.676 276.981 79.64 277.077 79.64H277.419C277.527 79.64 277.617 79.67 277.689 79.73C277.761 79.79 277.803 79.85 277.815 79.91L280.029 87.398L282.387 80C282.411 79.904 282.465 79.82 282.549 79.748C282.633 79.676 282.741 79.64 282.873 79.64H283.233C283.365 79.64 283.473 79.676 283.557 79.748C283.641 79.82 283.695 79.904 283.719 80L286.077 87.398L288.291 79.91C288.303 79.85 288.345 79.79 288.417 79.73C288.489 79.67 288.579 79.64 288.687 79.64H289.029C289.125 79.64 289.209 79.676 289.281 79.748C289.353 79.82 289.389 79.904 289.389 80L289.353 80.198L286.815 88.55C286.755 88.706 286.683 88.82 286.599 88.892C286.515 88.964 286.395 89 286.239 89H285.933C285.609 89 285.405 88.85 285.321 88.55L283.053 81.458L280.785 88.55C280.701 88.85 280.497 89 280.173 89H279.867ZM292.217 89C292.097 89 292.001 88.964 291.929 88.892C291.857 88.82 291.821 88.724 291.821 88.604V76.796C291.821 76.676 291.857 76.58 291.929 76.508C292.001 76.436 292.097 76.4 292.217 76.4H292.559C292.679 76.4 292.775 76.436 292.847 76.508C292.919 76.58 292.955 76.676 292.955 76.796V87.92H299.165C299.297 87.92 299.399 87.956 299.471 88.028C299.543 88.1 299.579 88.202 299.579 88.334V88.604C299.579 88.724 299.537 88.82 299.453 88.892C299.381 88.964 299.285 89 299.165 89H292.217ZM304.985 90.512C304.889 90.512 304.805 90.476 304.733 90.404C304.661 90.332 304.625 90.248 304.625 90.152C304.625 90.104 304.643 90.032 304.679 89.936L310.871 75.122C310.895 75.062 310.937 75.002 310.997 74.942C311.069 74.882 311.159 74.852 311.267 74.852H311.573C311.669 74.852 311.753 74.888 311.825 74.96C311.897 75.032 311.933 75.116 311.933 75.212C311.933 75.26 311.915 75.332 311.879 75.428L305.687 90.242C305.663 90.302 305.615 90.362 305.543 90.422C305.483 90.482 305.399 90.512 305.291 90.512H304.985ZM318.373 89C318.253 89 318.157 88.964 318.085 88.892C318.013 88.82 317.977 88.724 317.977 88.604V88.334C317.977 88.094 318.127 87.842 318.427 87.578L323.089 82.916C323.749 82.304 324.193 81.788 324.421 81.368C324.649 80.948 324.763 80.45 324.763 79.874C324.763 79.07 324.529 78.44 324.061 77.984C323.605 77.528 322.951 77.3 322.099 77.3C321.295 77.3 320.653 77.534 320.173 78.002C319.693 78.47 319.405 79.1 319.309 79.892C319.297 80.024 319.243 80.126 319.147 80.198C319.063 80.27 318.979 80.306 318.895 80.306H318.535C318.415 80.306 318.319 80.276 318.247 80.216C318.187 80.144 318.157 80.06 318.157 79.964C318.181 79.376 318.337 78.794 318.625 78.218C318.913 77.642 319.351 77.168 319.939 76.796C320.527 76.412 321.247 76.22 322.099 76.22C323.383 76.22 324.337 76.568 324.961 77.264C325.585 77.96 325.897 78.83 325.897 79.874C325.897 80.594 325.741 81.242 325.429 81.818C325.117 82.394 324.619 83 323.935 83.636L319.723 87.92H325.753C325.885 87.92 325.987 87.956 326.059 88.028C326.131 88.1 326.167 88.202 326.167 88.334V88.604C326.167 88.724 326.125 88.82 326.041 88.892C325.969 88.964 325.873 89 325.753 89H318.373Z'
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

export default Eqn1;
