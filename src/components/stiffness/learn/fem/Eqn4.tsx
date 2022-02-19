import { motion } from 'framer-motion'
import {
  mainPathVariant,
  shapeVariations,
} from '@/lib/config/animations/svgs/svgs'


const Eqn4 = () => {
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
        <g id='Eqn4' data-name='Eqn4'>
          <motion.path
            {...mainPathVariant}
            d='M41.98 89C41.86 89 41.758 88.964 41.674 88.892C41.602 88.808 41.566 88.706 41.566 88.586V76.832C41.566 76.7 41.602 76.598 41.674 76.526C41.758 76.442 41.86 76.4 41.98 76.4H42.88C43.024 76.4 43.132 76.436 43.204 76.508C43.276 76.58 43.318 76.64 43.33 76.688L47.146 83.96L50.98 76.688C51.004 76.64 51.046 76.58 51.106 76.508C51.178 76.436 51.286 76.4 51.43 76.4H52.312C52.444 76.4 52.546 76.442 52.618 76.526C52.702 76.598 52.744 76.7 52.744 76.832V88.586C52.744 88.706 52.702 88.808 52.618 88.892C52.546 88.964 52.444 89 52.312 89H51.43C51.31 89 51.208 88.964 51.124 88.892C51.052 88.808 51.016 88.706 51.016 88.586V79.73L48.01 85.598C47.962 85.718 47.89 85.814 47.794 85.886C47.698 85.946 47.578 85.976 47.434 85.976H46.876C46.72 85.976 46.594 85.946 46.498 85.886C46.414 85.814 46.342 85.718 46.282 85.598L43.276 79.73V88.586C43.276 88.706 43.234 88.808 43.15 88.892C43.078 88.964 42.982 89 42.862 89H41.98ZM56.919 92.06C56.655 92.06 56.523 91.928 56.523 91.664V87.38L55.461 88.172C55.377 88.232 55.281 88.256 55.173 88.244C55.065 88.232 54.975 88.178 54.903 88.082L54.669 87.776C54.597 87.68 54.567 87.584 54.579 87.488C54.603 87.38 54.657 87.29 54.741 87.218L56.523 85.886C56.643 85.802 56.781 85.76 56.937 85.76H57.441C57.705 85.76 57.837 85.892 57.837 86.156V91.664C57.837 91.928 57.705 92.06 57.441 92.06H56.919ZM65.3363 81.872C65.2163 81.872 65.1203 81.836 65.0483 81.764C64.9763 81.692 64.9403 81.596 64.9403 81.476V81.224C64.9403 81.104 64.9763 81.008 65.0483 80.936C65.1203 80.864 65.2163 80.828 65.3363 80.828H72.0863C72.2063 80.828 72.3023 80.864 72.3743 80.936C72.4463 81.008 72.4823 81.104 72.4823 81.224V81.476C72.4823 81.596 72.4463 81.692 72.3743 81.764C72.3023 81.836 72.2063 81.872 72.0863 81.872H65.3363ZM65.3363 86.372C65.2163 86.372 65.1203 86.336 65.0483 86.264C64.9763 86.192 64.9403 86.096 64.9403 85.976V85.724C64.9403 85.604 64.9763 85.508 65.0483 85.436C65.1203 85.364 65.2163 85.328 65.3363 85.328H72.0863C72.2063 85.328 72.3023 85.364 72.3743 85.436C72.4463 85.508 72.4823 85.604 72.4823 85.724V85.976C72.4823 86.096 72.4463 86.192 72.3743 86.264C72.3023 86.336 72.2063 86.372 72.0863 86.372H65.3363ZM80.2241 84.122C80.1041 84.122 80.0081 84.086 79.9361 84.014C79.8641 83.942 79.8281 83.846 79.8281 83.726V83.474C79.8281 83.354 79.8641 83.258 79.9361 83.186C80.0081 83.114 80.1041 83.078 80.2241 83.078H85.5341C85.6541 83.078 85.7501 83.114 85.8221 83.186C85.8941 83.258 85.9301 83.354 85.9301 83.474V83.726C85.9301 83.846 85.8941 83.942 85.8221 84.014C85.7501 84.086 85.6541 84.122 85.5341 84.122H80.2241ZM90.8743 89C90.7183 89 90.5983 88.964 90.5143 88.892C90.4303 88.82 90.3583 88.706 90.2983 88.55L87.7603 80.198C87.7363 80.126 87.7243 80.06 87.7243 80C87.7243 79.904 87.7603 79.82 87.8323 79.748C87.9043 79.676 87.9883 79.64 88.0843 79.64H88.4263C88.5463 79.64 88.6363 79.676 88.6963 79.748C88.7683 79.808 88.8103 79.862 88.8223 79.91L91.0363 87.398L93.3943 80C93.4183 79.928 93.4663 79.85 93.5383 79.766C93.6103 79.682 93.7243 79.64 93.8803 79.64H94.2403C94.3963 79.64 94.5103 79.682 94.5823 79.766C94.6663 79.85 94.7143 79.928 94.7263 80L97.0843 87.398L99.2983 79.91C99.3103 79.862 99.3463 79.808 99.4063 79.748C99.4783 79.676 99.5743 79.64 99.6943 79.64H100.036C100.132 79.64 100.216 79.676 100.288 79.748C100.36 79.82 100.396 79.904 100.396 80C100.396 80.06 100.384 80.126 100.36 80.198L97.8223 88.55C97.7743 88.706 97.7083 88.82 97.6243 88.892C97.5403 88.964 97.4143 89 97.2463 89H96.9403C96.7843 89 96.6523 88.964 96.5443 88.892C96.4483 88.82 96.3763 88.706 96.3283 88.55L94.0603 81.458L91.7923 88.55C91.7443 88.706 91.6723 88.82 91.5763 88.892C91.4803 88.964 91.3483 89 91.1803 89H90.8743ZM103.225 89C103.105 89 103.009 88.964 102.937 88.892C102.865 88.82 102.829 88.724 102.829 88.604V76.796C102.829 76.676 102.865 76.58 102.937 76.508C103.009 76.436 103.105 76.4 103.225 76.4H103.567C103.687 76.4 103.783 76.436 103.855 76.508C103.927 76.58 103.963 76.676 103.963 76.796V87.92H110.173C110.305 87.92 110.407 87.956 110.479 88.028C110.551 88.1 110.587 88.202 110.587 88.334V88.604C110.587 88.724 110.551 88.82 110.479 88.892C110.407 88.964 110.305 89 110.173 89H103.225ZM111.952 82.7C111.688 82.7 111.556 82.568 111.556 82.304V81.998C111.556 81.902 111.586 81.812 111.646 81.728C111.706 81.632 111.82 81.524 111.988 81.404C112.756 80.852 113.368 80.414 113.824 80.09C114.292 79.754 114.628 79.454 114.832 79.19C115.048 78.926 115.156 78.632 115.156 78.308C115.156 77.996 115.036 77.75 114.796 77.57C114.568 77.39 114.298 77.3 113.986 77.3C113.662 77.3 113.416 77.354 113.248 77.462C113.092 77.558 112.978 77.666 112.906 77.786C112.846 77.906 112.798 78.002 112.762 78.074C112.69 78.206 112.624 78.296 112.564 78.344C112.504 78.38 112.426 78.398 112.33 78.398H112.06C111.82 78.398 111.712 78.284 111.736 78.056C111.76 77.768 111.874 77.492 112.078 77.228C112.282 76.964 112.552 76.748 112.888 76.58C113.224 76.4 113.59 76.31 113.986 76.31C114.67 76.31 115.21 76.514 115.606 76.922C116.002 77.318 116.2 77.78 116.2 78.308C116.2 78.752 116.104 79.142 115.912 79.478C115.72 79.802 115.414 80.138 114.994 80.486C114.574 80.822 114.022 81.224 113.338 81.692H116.074C116.338 81.692 116.47 81.824 116.47 82.088V82.304C116.47 82.568 116.338 82.7 116.074 82.7H111.952ZM122.514 90.512C122.418 90.512 122.334 90.476 122.262 90.404C122.19 90.332 122.154 90.248 122.154 90.152C122.154 90.092 122.172 90.02 122.208 89.936L128.4 75.122C128.424 75.074 128.466 75.02 128.526 74.96C128.586 74.888 128.676 74.852 128.796 74.852H129.102C129.198 74.852 129.282 74.888 129.354 74.96C129.426 75.032 129.462 75.116 129.462 75.212C129.462 75.26 129.444 75.332 129.408 75.428L123.216 90.242C123.204 90.29 123.162 90.344 123.09 90.404C123.03 90.476 122.94 90.512 122.82 90.512H122.514ZM135.902 89C135.782 89 135.686 88.964 135.614 88.892C135.542 88.82 135.506 88.724 135.506 88.604V88.334C135.506 88.214 135.536 88.1 135.596 87.992C135.668 87.872 135.788 87.734 135.956 87.578L140.618 82.916C141.074 82.496 141.422 82.13 141.662 81.818C141.902 81.506 142.064 81.2 142.148 80.9C142.244 80.588 142.292 80.246 142.292 79.874C142.292 79.07 142.058 78.44 141.59 77.984C141.134 77.528 140.48 77.3 139.628 77.3C139.088 77.3 138.62 77.408 138.224 77.624C137.828 77.84 137.516 78.146 137.288 78.542C137.06 78.926 136.91 79.376 136.838 79.892C136.826 80.036 136.772 80.144 136.676 80.216C136.58 80.276 136.496 80.306 136.424 80.306H136.064C135.944 80.306 135.848 80.276 135.776 80.216C135.716 80.144 135.686 80.06 135.686 79.964C135.698 79.556 135.782 79.136 135.938 78.704C136.094 78.26 136.328 77.852 136.64 77.48C136.964 77.108 137.372 76.808 137.864 76.58C138.356 76.34 138.944 76.22 139.628 76.22C140.54 76.22 141.272 76.394 141.824 76.742C142.388 77.09 142.796 77.54 143.048 78.092C143.3 78.644 143.426 79.238 143.426 79.874C143.426 80.366 143.354 80.822 143.21 81.242C143.066 81.65 142.85 82.052 142.562 82.448C142.274 82.832 141.908 83.228 141.464 83.636L137.252 87.92H143.282C143.414 87.92 143.516 87.956 143.588 88.028C143.66 88.1 143.696 88.202 143.696 88.334V88.604C143.696 88.724 143.66 88.82 143.588 88.892C143.516 88.964 143.414 89 143.282 89H135.902ZM150.187 89.18C149.371 89.18 148.687 89.048 148.135 88.784C147.595 88.52 147.157 88.16 146.821 87.704C146.497 87.236 146.263 86.702 146.119 86.102C145.975 85.502 145.891 84.872 145.867 84.212C145.867 83.888 145.861 83.558 145.849 83.222C145.849 82.886 145.849 82.55 145.849 82.214C145.861 81.866 145.867 81.524 145.867 81.188C145.879 80.528 145.957 79.898 146.101 79.298C146.257 78.698 146.497 78.17 146.821 77.714C147.157 77.246 147.595 76.88 148.135 76.616C148.687 76.352 149.371 76.22 150.187 76.22C151.003 76.22 151.681 76.352 152.221 76.616C152.773 76.88 153.211 77.246 153.535 77.714C153.871 78.17 154.111 78.698 154.255 79.298C154.411 79.898 154.495 80.528 154.507 81.188C154.519 81.524 154.525 81.866 154.525 82.214C154.525 82.55 154.525 82.886 154.525 83.222C154.525 83.558 154.519 83.888 154.507 84.212C154.495 84.872 154.411 85.502 154.255 86.102C154.111 86.702 153.871 87.236 153.535 87.704C153.211 88.16 152.773 88.52 152.221 88.784C151.681 89.048 151.003 89.18 150.187 89.18ZM150.187 88.1C151.255 88.1 152.047 87.746 152.563 87.038C153.079 86.33 153.349 85.358 153.373 84.122C153.385 83.774 153.391 83.45 153.391 83.15C153.391 82.838 153.391 82.532 153.391 82.232C153.391 81.92 153.385 81.602 153.373 81.278C153.349 80.066 153.079 79.1 152.563 78.38C152.047 77.66 151.255 77.3 150.187 77.3C149.131 77.3 148.339 77.66 147.811 78.38C147.295 79.1 147.025 80.066 147.001 81.278C147.001 81.602 146.995 81.92 146.983 82.232C146.983 82.532 146.983 82.838 146.983 83.15C146.995 83.45 147.001 83.774 147.001 84.122C147.025 85.358 147.295 86.33 147.811 87.038C148.339 87.746 149.131 88.1 150.187 88.1Z'
            {...shapeVariations}
            fill='#4E4E4E'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            {...shapeVariations}
            d='M234.98 89C234.86 89 234.758 88.964 234.674 88.892C234.602 88.808 234.566 88.706 234.566 88.586V76.832C234.566 76.7 234.602 76.598 234.674 76.526C234.758 76.442 234.86 76.4 234.98 76.4H235.88C236.024 76.4 236.132 76.436 236.204 76.508C236.276 76.58 236.318 76.64 236.33 76.688L240.146 83.96L243.98 76.688C244.004 76.64 244.046 76.58 244.106 76.508C244.178 76.436 244.286 76.4 244.43 76.4H245.312C245.444 76.4 245.546 76.442 245.618 76.526C245.702 76.598 245.744 76.7 245.744 76.832V88.586C245.744 88.706 245.702 88.808 245.618 88.892C245.546 88.964 245.444 89 245.312 89H244.43C244.31 89 244.208 88.964 244.124 88.892C244.052 88.808 244.016 88.706 244.016 88.586V79.73L241.01 85.598C240.962 85.718 240.89 85.814 240.794 85.886C240.698 85.946 240.578 85.976 240.434 85.976H239.876C239.72 85.976 239.594 85.946 239.498 85.886C239.414 85.814 239.342 85.718 239.282 85.598L236.276 79.73V88.586C236.276 88.706 236.234 88.808 236.15 88.892C236.078 88.964 235.982 89 235.862 89H234.98ZM248.227 92.06C247.963 92.06 247.831 91.928 247.831 91.664V91.268C247.831 91.172 247.861 91.076 247.921 90.98C247.981 90.896 248.095 90.794 248.263 90.674C248.995 90.134 249.589 89.702 250.045 89.378C250.501 89.054 250.831 88.766 251.035 88.514C251.239 88.262 251.341 87.986 251.341 87.686C251.341 87.422 251.245 87.212 251.053 87.056C250.861 86.888 250.621 86.804 250.333 86.804C250.045 86.804 249.829 86.852 249.685 86.948C249.553 87.032 249.457 87.128 249.397 87.236C249.337 87.344 249.289 87.434 249.253 87.506C249.181 87.638 249.115 87.728 249.055 87.776C248.995 87.812 248.917 87.83 248.821 87.83H248.317C248.077 87.83 247.969 87.716 247.993 87.488C248.017 87.164 248.131 86.87 248.335 86.606C248.551 86.33 248.833 86.108 249.181 85.94C249.529 85.76 249.913 85.67 250.333 85.67C251.041 85.67 251.599 85.868 252.007 86.264C252.427 86.66 252.637 87.128 252.637 87.668C252.637 88.1 252.541 88.478 252.349 88.802C252.157 89.114 251.863 89.432 251.467 89.756C251.071 90.08 250.561 90.458 249.937 90.89H252.493C252.757 90.89 252.889 91.022 252.889 91.286V91.664C252.889 91.928 252.757 92.06 252.493 92.06H248.227ZM259.83 81.872C259.71 81.872 259.614 81.836 259.542 81.764C259.47 81.692 259.434 81.596 259.434 81.476V81.224C259.434 81.104 259.47 81.008 259.542 80.936C259.614 80.864 259.71 80.828 259.83 80.828H266.58C266.7 80.828 266.796 80.864 266.868 80.936C266.94 81.008 266.976 81.104 266.976 81.224V81.476C266.976 81.596 266.94 81.692 266.868 81.764C266.796 81.836 266.7 81.872 266.58 81.872H259.83ZM259.83 86.372C259.71 86.372 259.614 86.336 259.542 86.264C259.47 86.192 259.434 86.096 259.434 85.976V85.724C259.434 85.604 259.47 85.508 259.542 85.436C259.614 85.364 259.71 85.328 259.83 85.328H266.58C266.7 85.328 266.796 85.364 266.868 85.436C266.94 85.508 266.976 85.604 266.976 85.724V85.976C266.976 86.096 266.94 86.192 266.868 86.264C266.796 86.336 266.7 86.372 266.58 86.372H259.83ZM276.456 89C276.3 89 276.18 88.964 276.096 88.892C276.012 88.82 275.94 88.706 275.88 88.55L273.342 80.198C273.318 80.126 273.306 80.06 273.306 80C273.306 79.904 273.342 79.82 273.414 79.748C273.486 79.676 273.57 79.64 273.666 79.64H274.008C274.128 79.64 274.218 79.676 274.278 79.748C274.35 79.808 274.392 79.862 274.404 79.91L276.618 87.398L278.976 80C279 79.928 279.048 79.85 279.12 79.766C279.192 79.682 279.306 79.64 279.462 79.64H279.822C279.978 79.64 280.092 79.682 280.164 79.766C280.248 79.85 280.296 79.928 280.308 80L282.666 87.398L284.88 79.91C284.892 79.862 284.928 79.808 284.988 79.748C285.06 79.676 285.156 79.64 285.276 79.64H285.618C285.714 79.64 285.798 79.676 285.87 79.748C285.942 79.82 285.978 79.904 285.978 80C285.978 80.06 285.966 80.126 285.942 80.198L283.404 88.55C283.356 88.706 283.29 88.82 283.206 88.892C283.122 88.964 282.996 89 282.828 89H282.522C282.366 89 282.234 88.964 282.126 88.892C282.03 88.82 281.958 88.706 281.91 88.55L279.642 81.458L277.374 88.55C277.326 88.706 277.254 88.82 277.158 88.892C277.062 88.964 276.93 89 276.762 89H276.456ZM288.807 89C288.687 89 288.591 88.964 288.519 88.892C288.447 88.82 288.411 88.724 288.411 88.604V76.796C288.411 76.676 288.447 76.58 288.519 76.508C288.591 76.436 288.687 76.4 288.807 76.4H289.149C289.269 76.4 289.365 76.436 289.437 76.508C289.509 76.58 289.545 76.676 289.545 76.796V87.92H295.755C295.887 87.92 295.989 87.956 296.061 88.028C296.133 88.1 296.169 88.202 296.169 88.334V88.604C296.169 88.724 296.133 88.82 296.061 88.892C295.989 88.964 295.887 89 295.755 89H288.807ZM297.534 82.7C297.27 82.7 297.138 82.568 297.138 82.304V81.998C297.138 81.902 297.168 81.812 297.228 81.728C297.288 81.632 297.402 81.524 297.57 81.404C298.338 80.852 298.95 80.414 299.406 80.09C299.874 79.754 300.21 79.454 300.414 79.19C300.63 78.926 300.738 78.632 300.738 78.308C300.738 77.996 300.618 77.75 300.378 77.57C300.15 77.39 299.88 77.3 299.568 77.3C299.244 77.3 298.998 77.354 298.83 77.462C298.674 77.558 298.56 77.666 298.488 77.786C298.428 77.906 298.38 78.002 298.344 78.074C298.272 78.206 298.206 78.296 298.146 78.344C298.086 78.38 298.008 78.398 297.912 78.398H297.642C297.402 78.398 297.294 78.284 297.318 78.056C297.342 77.768 297.456 77.492 297.66 77.228C297.864 76.964 298.134 76.748 298.47 76.58C298.806 76.4 299.172 76.31 299.568 76.31C300.252 76.31 300.792 76.514 301.188 76.922C301.584 77.318 301.782 77.78 301.782 78.308C301.782 78.752 301.686 79.142 301.494 79.478C301.302 79.802 300.996 80.138 300.576 80.486C300.156 80.822 299.604 81.224 298.92 81.692H301.656C301.92 81.692 302.052 81.824 302.052 82.088V82.304C302.052 82.568 301.92 82.7 301.656 82.7H297.534ZM308.096 90.512C308 90.512 307.916 90.476 307.844 90.404C307.772 90.332 307.736 90.248 307.736 90.152C307.736 90.092 307.754 90.02 307.79 89.936L313.982 75.122C314.006 75.074 314.048 75.02 314.108 74.96C314.168 74.888 314.258 74.852 314.378 74.852H314.684C314.78 74.852 314.864 74.888 314.936 74.96C315.008 75.032 315.044 75.116 315.044 75.212C315.044 75.26 315.026 75.332 314.99 75.428L308.798 90.242C308.786 90.29 308.744 90.344 308.672 90.404C308.612 90.476 308.522 90.512 308.402 90.512H308.096ZM325.3 89.18C324.628 89.18 324.028 89.096 323.5 88.928C322.972 88.748 322.522 88.514 322.15 88.226C321.79 87.938 321.508 87.614 321.304 87.254C321.112 86.882 321.01 86.498 320.998 86.102C320.998 85.994 321.034 85.91 321.106 85.85C321.178 85.79 321.268 85.76 321.376 85.76H321.628C321.724 85.76 321.814 85.784 321.898 85.832C321.994 85.88 322.066 85.994 322.114 86.174C322.246 86.69 322.48 87.092 322.816 87.38C323.164 87.656 323.554 87.848 323.986 87.956C324.43 88.052 324.868 88.1 325.3 88.1C326.224 88.1 326.98 87.878 327.568 87.434C328.168 86.99 328.468 86.324 328.468 85.436C328.468 84.548 328.198 83.912 327.658 83.528C327.13 83.144 326.404 82.952 325.48 82.952H323.896C323.776 82.952 323.68 82.916 323.608 82.844C323.536 82.772 323.5 82.676 323.5 82.556V82.286C323.5 82.19 323.512 82.112 323.536 82.052C323.572 81.98 323.614 81.914 323.662 81.854L327.37 77.48H321.934C321.814 77.48 321.718 77.444 321.646 77.372C321.574 77.3 321.538 77.204 321.538 77.084V76.814C321.538 76.682 321.574 76.58 321.646 76.508C321.718 76.436 321.814 76.4 321.934 76.4H328.648C328.78 76.4 328.882 76.436 328.954 76.508C329.026 76.58 329.062 76.682 329.062 76.814V77.084C329.062 77.156 329.044 77.222 329.008 77.282C328.984 77.33 328.954 77.378 328.918 77.426L325.12 81.872H325.48C326.308 81.872 327.028 82.004 327.64 82.268C328.264 82.52 328.744 82.91 329.08 83.438C329.428 83.966 329.602 84.632 329.602 85.436C329.602 86.228 329.416 86.906 329.044 87.47C328.672 88.022 328.162 88.448 327.514 88.748C326.866 89.036 326.128 89.18 325.3 89.18ZM336.067 89.18C335.251 89.18 334.567 89.048 334.015 88.784C333.475 88.52 333.037 88.16 332.701 87.704C332.377 87.236 332.143 86.702 331.999 86.102C331.855 85.502 331.771 84.872 331.747 84.212C331.747 83.888 331.741 83.558 331.729 83.222C331.729 82.886 331.729 82.55 331.729 82.214C331.741 81.866 331.747 81.524 331.747 81.188C331.759 80.528 331.837 79.898 331.981 79.298C332.137 78.698 332.377 78.17 332.701 77.714C333.037 77.246 333.475 76.88 334.015 76.616C334.567 76.352 335.251 76.22 336.067 76.22C336.883 76.22 337.561 76.352 338.101 76.616C338.653 76.88 339.091 77.246 339.415 77.714C339.751 78.17 339.991 78.698 340.135 79.298C340.291 79.898 340.375 80.528 340.387 81.188C340.399 81.524 340.405 81.866 340.405 82.214C340.405 82.55 340.405 82.886 340.405 83.222C340.405 83.558 340.399 83.888 340.387 84.212C340.375 84.872 340.291 85.502 340.135 86.102C339.991 86.702 339.751 87.236 339.415 87.704C339.091 88.16 338.653 88.52 338.101 88.784C337.561 89.048 336.883 89.18 336.067 89.18ZM336.067 88.1C337.135 88.1 337.927 87.746 338.443 87.038C338.959 86.33 339.229 85.358 339.253 84.122C339.265 83.774 339.271 83.45 339.271 83.15C339.271 82.838 339.271 82.532 339.271 82.232C339.271 81.92 339.265 81.602 339.253 81.278C339.229 80.066 338.959 79.1 338.443 78.38C337.927 77.66 337.135 77.3 336.067 77.3C335.011 77.3 334.219 77.66 333.691 78.38C333.175 79.1 332.905 80.066 332.881 81.278C332.881 81.602 332.875 81.92 332.863 82.232C332.863 82.532 332.863 82.838 332.863 83.15C332.875 83.45 332.881 83.774 332.881 84.122C332.905 85.358 333.175 86.33 333.691 87.038C334.219 87.746 335.011 88.1 336.067 88.1Z'
            fill='#4E4E4E'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            {...shapeVariations}
            d='M45.31 41C45.13 41 44.986 40.958 44.878 40.874C44.782 40.79 44.704 40.676 44.644 40.532L40.63 28.958C40.606 28.886 40.594 28.82 40.594 28.76C40.594 28.664 40.63 28.58 40.702 28.508C40.774 28.436 40.858 28.4 40.954 28.4H41.89C42.034 28.4 42.142 28.442 42.214 28.526C42.298 28.598 42.346 28.664 42.358 28.724L45.886 38.93L49.414 28.724C49.438 28.664 49.486 28.598 49.558 28.526C49.63 28.442 49.738 28.4 49.882 28.4H50.818C50.914 28.4 50.998 28.436 51.07 28.508C51.154 28.58 51.196 28.664 51.196 28.76C51.196 28.82 51.184 28.886 51.16 28.958L47.128 40.532C47.08 40.676 47.002 40.79 46.894 40.874C46.798 40.958 46.66 41 46.48 41H45.31ZM54.4053 44.06C54.1413 44.06 54.0093 43.928 54.0093 43.664V39.38L52.9473 40.172C52.8633 40.232 52.7673 40.256 52.6593 40.244C52.5513 40.232 52.4613 40.178 52.3893 40.082L52.1553 39.776C52.0833 39.68 52.0533 39.584 52.0653 39.488C52.0893 39.38 52.1433 39.29 52.2273 39.218L54.0093 37.886C54.1293 37.802 54.2673 37.76 54.4233 37.76H54.9273C55.1913 37.76 55.3233 37.892 55.3233 38.156V43.664C55.3233 43.928 55.1913 44.06 54.9273 44.06H54.4053ZM62.5941 33.872C62.4741 33.872 62.3781 33.836 62.3061 33.764C62.2341 33.692 62.1981 33.596 62.1981 33.476V33.224C62.1981 33.104 62.2341 33.008 62.3061 32.936C62.3781 32.864 62.4741 32.828 62.5941 32.828H69.3441C69.4641 32.828 69.5601 32.864 69.6321 32.936C69.7041 33.008 69.7401 33.104 69.7401 33.224V33.476C69.7401 33.596 69.7041 33.692 69.6321 33.764C69.5601 33.836 69.4641 33.872 69.3441 33.872H62.5941ZM62.5941 38.372C62.4741 38.372 62.3781 38.336 62.3061 38.264C62.2341 38.192 62.1981 38.096 62.1981 37.976V37.724C62.1981 37.604 62.2341 37.508 62.3061 37.436C62.3781 37.364 62.4741 37.328 62.5941 37.328H69.3441C69.4641 37.328 69.5601 37.364 69.6321 37.436C69.7041 37.508 69.7401 37.604 69.7401 37.724V37.976C69.7401 38.096 69.7041 38.192 69.6321 38.264C69.5601 38.336 69.4641 38.372 69.3441 38.372H62.5941ZM78.5079 41C78.3999 41 78.3099 40.964 78.2379 40.892C78.1779 40.808 78.1479 40.712 78.1479 40.604C78.1479 40.568 78.1599 40.514 78.1839 40.442L82.8099 29.48H76.6719C76.5519 29.48 76.4559 29.444 76.3839 29.372C76.3119 29.3 76.2759 29.204 76.2759 29.084V28.814C76.2759 28.682 76.3119 28.58 76.3839 28.508C76.4559 28.436 76.5519 28.4 76.6719 28.4H83.6199C83.7519 28.4 83.8539 28.436 83.9259 28.508C83.9979 28.58 84.0339 28.682 84.0339 28.814V29.084C84.0339 29.228 84.0219 29.348 83.9979 29.444C83.9859 29.528 83.9559 29.63 83.9079 29.75L79.3539 40.55C79.3059 40.646 79.2459 40.748 79.1739 40.856C79.1139 40.952 79.0179 41 78.8859 41H78.5079ZM88.4134 41C88.2574 41 88.1374 40.964 88.0534 40.892C87.9694 40.82 87.8974 40.706 87.8374 40.55L85.2994 32.198C85.2754 32.126 85.2634 32.06 85.2634 32C85.2634 31.904 85.2994 31.82 85.3714 31.748C85.4434 31.676 85.5274 31.64 85.6234 31.64H85.9654C86.0854 31.64 86.1754 31.676 86.2354 31.748C86.3074 31.808 86.3494 31.862 86.3614 31.91L88.5754 39.398L90.9334 32C90.9574 31.928 91.0054 31.85 91.0774 31.766C91.1494 31.682 91.2634 31.64 91.4194 31.64H91.7794C91.9354 31.64 92.0494 31.682 92.1214 31.766C92.2054 31.85 92.2534 31.928 92.2654 32L94.6234 39.398L96.8374 31.91C96.8494 31.862 96.8854 31.808 96.9454 31.748C97.0174 31.676 97.1134 31.64 97.2334 31.64H97.5754C97.6714 31.64 97.7554 31.676 97.8274 31.748C97.8994 31.82 97.9354 31.904 97.9354 32C97.9354 32.06 97.9234 32.126 97.8994 32.198L95.3614 40.55C95.3134 40.706 95.2474 40.82 95.1634 40.892C95.0794 40.964 94.9534 41 94.7854 41H94.4794C94.3234 41 94.1914 40.964 94.0834 40.892C93.9874 40.82 93.9154 40.706 93.8674 40.55L91.5994 33.458L89.3314 40.55C89.2834 40.706 89.2114 40.82 89.1154 40.892C89.0194 40.964 88.8874 41 88.7194 41H88.4134ZM100.764 41C100.644 41 100.548 40.964 100.476 40.892C100.404 40.82 100.368 40.724 100.368 40.604V28.796C100.368 28.676 100.404 28.58 100.476 28.508C100.548 28.436 100.644 28.4 100.764 28.4H101.106C101.226 28.4 101.322 28.436 101.394 28.508C101.466 28.58 101.502 28.676 101.502 28.796V39.92H107.712C107.844 39.92 107.946 39.956 108.018 40.028C108.09 40.1 108.126 40.202 108.126 40.334V40.604C108.126 40.724 108.09 40.82 108.018 40.892C107.946 40.964 107.844 41 107.712 41H100.764ZM113.532 42.512C113.436 42.512 113.352 42.476 113.28 42.404C113.208 42.332 113.172 42.248 113.172 42.152C113.172 42.092 113.19 42.02 113.226 41.936L119.418 27.122C119.442 27.074 119.484 27.02 119.544 26.96C119.604 26.888 119.694 26.852 119.814 26.852H120.12C120.216 26.852 120.3 26.888 120.372 26.96C120.444 27.032 120.48 27.116 120.48 27.212C120.48 27.26 120.462 27.332 120.426 27.428L114.234 42.242C114.222 42.29 114.18 42.344 114.108 42.404C114.048 42.476 113.958 42.512 113.838 42.512H113.532ZM126.92 41C126.8 41 126.704 40.964 126.632 40.892C126.56 40.82 126.524 40.724 126.524 40.604V40.334C126.524 40.214 126.554 40.1 126.614 39.992C126.686 39.872 126.806 39.734 126.974 39.578L131.636 34.916C132.092 34.496 132.44 34.13 132.68 33.818C132.92 33.506 133.082 33.2 133.166 32.9C133.262 32.588 133.31 32.246 133.31 31.874C133.31 31.07 133.076 30.44 132.608 29.984C132.152 29.528 131.498 29.3 130.646 29.3C130.106 29.3 129.638 29.408 129.242 29.624C128.846 29.84 128.534 30.146 128.306 30.542C128.078 30.926 127.928 31.376 127.856 31.892C127.844 32.036 127.79 32.144 127.694 32.216C127.598 32.276 127.514 32.306 127.442 32.306H127.082C126.962 32.306 126.866 32.276 126.794 32.216C126.734 32.144 126.704 32.06 126.704 31.964C126.716 31.556 126.8 31.136 126.956 30.704C127.112 30.26 127.346 29.852 127.658 29.48C127.982 29.108 128.39 28.808 128.882 28.58C129.374 28.34 129.962 28.22 130.646 28.22C131.558 28.22 132.29 28.394 132.842 28.742C133.406 29.09 133.814 29.54 134.066 30.092C134.318 30.644 134.444 31.238 134.444 31.874C134.444 32.366 134.372 32.822 134.228 33.242C134.084 33.65 133.868 34.052 133.58 34.448C133.292 34.832 132.926 35.228 132.482 35.636L128.27 39.92H134.3C134.432 39.92 134.534 39.956 134.606 40.028C134.678 40.1 134.714 40.202 134.714 40.334V40.604C134.714 40.724 134.678 40.82 134.606 40.892C134.534 40.964 134.432 41 134.3 41H126.92ZM141.204 41.18C140.388 41.18 139.704 41.048 139.152 40.784C138.612 40.52 138.174 40.16 137.838 39.704C137.514 39.236 137.28 38.702 137.136 38.102C136.992 37.502 136.908 36.872 136.884 36.212C136.884 35.888 136.878 35.558 136.866 35.222C136.866 34.886 136.866 34.55 136.866 34.214C136.878 33.866 136.884 33.524 136.884 33.188C136.896 32.528 136.974 31.898 137.118 31.298C137.274 30.698 137.514 30.17 137.838 29.714C138.174 29.246 138.612 28.88 139.152 28.616C139.704 28.352 140.388 28.22 141.204 28.22C142.02 28.22 142.698 28.352 143.238 28.616C143.79 28.88 144.228 29.246 144.552 29.714C144.888 30.17 145.128 30.698 145.272 31.298C145.428 31.898 145.512 32.528 145.524 33.188C145.536 33.524 145.542 33.866 145.542 34.214C145.542 34.55 145.542 34.886 145.542 35.222C145.542 35.558 145.536 35.888 145.524 36.212C145.512 36.872 145.428 37.502 145.272 38.102C145.128 38.702 144.888 39.236 144.552 39.704C144.228 40.16 143.79 40.52 143.238 40.784C142.698 41.048 142.02 41.18 141.204 41.18ZM141.204 40.1C142.272 40.1 143.064 39.746 143.58 39.038C144.096 38.33 144.366 37.358 144.39 36.122C144.402 35.774 144.408 35.45 144.408 35.15C144.408 34.838 144.408 34.532 144.408 34.232C144.408 33.92 144.402 33.602 144.39 33.278C144.366 32.066 144.096 31.1 143.58 30.38C143.064 29.66 142.272 29.3 141.204 29.3C140.148 29.3 139.356 29.66 138.828 30.38C138.312 31.1 138.042 32.066 138.018 33.278C138.018 33.602 138.012 33.92 138 34.232C138 34.532 138 34.838 138 35.15C138.012 35.45 138.018 35.774 138.018 36.122C138.042 37.358 138.312 38.33 138.828 39.038C139.356 39.746 140.148 40.1 141.204 40.1Z'
            fill='#4E4E4E'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            {...shapeVariations}
            d='M238.31 41C238.13 41 237.986 40.958 237.878 40.874C237.782 40.79 237.704 40.676 237.644 40.532L233.63 28.958C233.606 28.886 233.594 28.82 233.594 28.76C233.594 28.664 233.63 28.58 233.702 28.508C233.774 28.436 233.858 28.4 233.954 28.4H234.89C235.034 28.4 235.142 28.442 235.214 28.526C235.298 28.598 235.346 28.664 235.358 28.724L238.886 38.93L242.414 28.724C242.438 28.664 242.486 28.598 242.558 28.526C242.63 28.442 242.738 28.4 242.882 28.4H243.818C243.914 28.4 243.998 28.436 244.07 28.508C244.154 28.58 244.196 28.664 244.196 28.76C244.196 28.82 244.184 28.886 244.16 28.958L240.128 40.532C240.08 40.676 240.002 40.79 239.894 40.874C239.798 40.958 239.66 41 239.48 41H238.31ZM245.713 44.06C245.449 44.06 245.317 43.928 245.317 43.664V43.268C245.317 43.172 245.347 43.076 245.407 42.98C245.467 42.896 245.581 42.794 245.749 42.674C246.481 42.134 247.075 41.702 247.531 41.378C247.987 41.054 248.317 40.766 248.521 40.514C248.725 40.262 248.827 39.986 248.827 39.686C248.827 39.422 248.731 39.212 248.539 39.056C248.347 38.888 248.107 38.804 247.819 38.804C247.531 38.804 247.315 38.852 247.171 38.948C247.039 39.032 246.943 39.128 246.883 39.236C246.823 39.344 246.775 39.434 246.739 39.506C246.667 39.638 246.601 39.728 246.541 39.776C246.481 39.812 246.403 39.83 246.307 39.83H245.803C245.563 39.83 245.455 39.716 245.479 39.488C245.503 39.164 245.617 38.87 245.821 38.606C246.037 38.33 246.319 38.108 246.667 37.94C247.015 37.76 247.399 37.67 247.819 37.67C248.527 37.67 249.085 37.868 249.493 38.264C249.913 38.66 250.123 39.128 250.123 39.668C250.123 40.1 250.027 40.478 249.835 40.802C249.643 41.114 249.349 41.432 248.953 41.756C248.557 42.08 248.047 42.458 247.423 42.89H249.979C250.243 42.89 250.375 43.022 250.375 43.286V43.664C250.375 43.928 250.243 44.06 249.979 44.06H245.713ZM257.088 33.872C256.968 33.872 256.872 33.836 256.8 33.764C256.728 33.692 256.692 33.596 256.692 33.476V33.224C256.692 33.104 256.728 33.008 256.8 32.936C256.872 32.864 256.968 32.828 257.088 32.828H263.838C263.958 32.828 264.054 32.864 264.126 32.936C264.198 33.008 264.234 33.104 264.234 33.224V33.476C264.234 33.596 264.198 33.692 264.126 33.764C264.054 33.836 263.958 33.872 263.838 33.872H257.088ZM257.088 38.372C256.968 38.372 256.872 38.336 256.8 38.264C256.728 38.192 256.692 38.096 256.692 37.976V37.724C256.692 37.604 256.728 37.508 256.8 37.436C256.872 37.364 256.968 37.328 257.088 37.328H263.838C263.958 37.328 264.054 37.364 264.126 37.436C264.198 37.508 264.234 37.604 264.234 37.724V37.976C264.234 38.096 264.198 38.192 264.126 38.264C264.054 38.336 263.958 38.372 263.838 38.372H257.088ZM275.396 41.18C274.724 41.18 274.124 41.096 273.596 40.928C273.068 40.748 272.618 40.514 272.246 40.226C271.886 39.938 271.604 39.614 271.4 39.254C271.208 38.882 271.106 38.498 271.094 38.102C271.094 37.994 271.13 37.91 271.202 37.85C271.274 37.79 271.364 37.76 271.472 37.76H271.724C271.82 37.76 271.91 37.784 271.994 37.832C272.09 37.88 272.162 37.994 272.21 38.174C272.342 38.69 272.576 39.092 272.912 39.38C273.26 39.656 273.65 39.848 274.082 39.956C274.526 40.052 274.964 40.1 275.396 40.1C276.32 40.1 277.076 39.878 277.664 39.434C278.264 38.99 278.564 38.324 278.564 37.436C278.564 36.548 278.294 35.912 277.754 35.528C277.226 35.144 276.5 34.952 275.576 34.952H273.992C273.872 34.952 273.776 34.916 273.704 34.844C273.632 34.772 273.596 34.676 273.596 34.556V34.286C273.596 34.19 273.608 34.112 273.632 34.052C273.668 33.98 273.71 33.914 273.758 33.854L277.466 29.48H272.03C271.91 29.48 271.814 29.444 271.742 29.372C271.67 29.3 271.634 29.204 271.634 29.084V28.814C271.634 28.682 271.67 28.58 271.742 28.508C271.814 28.436 271.91 28.4 272.03 28.4H278.744C278.876 28.4 278.978 28.436 279.05 28.508C279.122 28.58 279.158 28.682 279.158 28.814V29.084C279.158 29.156 279.14 29.222 279.104 29.282C279.08 29.33 279.05 29.378 279.014 29.426L275.216 33.872H275.576C276.404 33.872 277.124 34.004 277.736 34.268C278.36 34.52 278.84 34.91 279.176 35.438C279.524 35.966 279.698 36.632 279.698 37.436C279.698 38.228 279.512 38.906 279.14 39.47C278.768 40.022 278.258 40.448 277.61 40.748C276.962 41.036 276.224 41.18 275.396 41.18ZM284.507 41C284.351 41 284.231 40.964 284.147 40.892C284.063 40.82 283.991 40.706 283.931 40.55L281.393 32.198C281.369 32.126 281.357 32.06 281.357 32C281.357 31.904 281.393 31.82 281.465 31.748C281.537 31.676 281.621 31.64 281.717 31.64H282.059C282.179 31.64 282.269 31.676 282.329 31.748C282.401 31.808 282.443 31.862 282.455 31.91L284.669 39.398L287.027 32C287.051 31.928 287.099 31.85 287.171 31.766C287.243 31.682 287.357 31.64 287.513 31.64H287.873C288.029 31.64 288.143 31.682 288.215 31.766C288.299 31.85 288.347 31.928 288.359 32L290.717 39.398L292.931 31.91C292.943 31.862 292.979 31.808 293.039 31.748C293.111 31.676 293.207 31.64 293.327 31.64H293.669C293.765 31.64 293.849 31.676 293.921 31.748C293.993 31.82 294.029 31.904 294.029 32C294.029 32.06 294.017 32.126 293.993 32.198L291.455 40.55C291.407 40.706 291.341 40.82 291.257 40.892C291.173 40.964 291.047 41 290.879 41H290.573C290.417 41 290.285 40.964 290.177 40.892C290.081 40.82 290.009 40.706 289.961 40.55L287.693 33.458L285.425 40.55C285.377 40.706 285.305 40.82 285.209 40.892C285.113 40.964 284.981 41 284.813 41H284.507ZM296.858 41C296.738 41 296.642 40.964 296.57 40.892C296.498 40.82 296.462 40.724 296.462 40.604V28.796C296.462 28.676 296.498 28.58 296.57 28.508C296.642 28.436 296.738 28.4 296.858 28.4H297.2C297.32 28.4 297.416 28.436 297.488 28.508C297.56 28.58 297.596 28.676 297.596 28.796V39.92H303.806C303.938 39.92 304.04 39.956 304.112 40.028C304.184 40.1 304.22 40.202 304.22 40.334V40.604C304.22 40.724 304.184 40.82 304.112 40.892C304.04 40.964 303.938 41 303.806 41H296.858ZM309.625 42.512C309.529 42.512 309.445 42.476 309.373 42.404C309.301 42.332 309.265 42.248 309.265 42.152C309.265 42.092 309.283 42.02 309.319 41.936L315.511 27.122C315.535 27.074 315.577 27.02 315.637 26.96C315.697 26.888 315.787 26.852 315.907 26.852H316.213C316.309 26.852 316.393 26.888 316.465 26.96C316.537 27.032 316.573 27.116 316.573 27.212C316.573 27.26 316.555 27.332 316.519 27.428L310.327 42.242C310.315 42.29 310.273 42.344 310.201 42.404C310.141 42.476 310.051 42.512 309.931 42.512H309.625ZM323.014 41C322.894 41 322.798 40.964 322.726 40.892C322.654 40.82 322.618 40.724 322.618 40.604V40.334C322.618 40.214 322.648 40.1 322.708 39.992C322.78 39.872 322.9 39.734 323.068 39.578L327.73 34.916C328.186 34.496 328.534 34.13 328.774 33.818C329.014 33.506 329.176 33.2 329.26 32.9C329.356 32.588 329.404 32.246 329.404 31.874C329.404 31.07 329.17 30.44 328.702 29.984C328.246 29.528 327.592 29.3 326.74 29.3C326.2 29.3 325.732 29.408 325.336 29.624C324.94 29.84 324.628 30.146 324.4 30.542C324.172 30.926 324.022 31.376 323.95 31.892C323.938 32.036 323.884 32.144 323.788 32.216C323.692 32.276 323.608 32.306 323.536 32.306H323.176C323.056 32.306 322.96 32.276 322.888 32.216C322.828 32.144 322.798 32.06 322.798 31.964C322.81 31.556 322.894 31.136 323.05 30.704C323.206 30.26 323.44 29.852 323.752 29.48C324.076 29.108 324.484 28.808 324.976 28.58C325.468 28.34 326.056 28.22 326.74 28.22C327.652 28.22 328.384 28.394 328.936 28.742C329.5 29.09 329.908 29.54 330.16 30.092C330.412 30.644 330.538 31.238 330.538 31.874C330.538 32.366 330.466 32.822 330.322 33.242C330.178 33.65 329.962 34.052 329.674 34.448C329.386 34.832 329.02 35.228 328.576 35.636L324.364 39.92H330.394C330.526 39.92 330.628 39.956 330.7 40.028C330.772 40.1 330.808 40.202 330.808 40.334V40.604C330.808 40.724 330.772 40.82 330.7 40.892C330.628 40.964 330.526 41 330.394 41H323.014ZM337.298 41.18C336.482 41.18 335.798 41.048 335.246 40.784C334.706 40.52 334.268 40.16 333.932 39.704C333.608 39.236 333.374 38.702 333.23 38.102C333.086 37.502 333.002 36.872 332.978 36.212C332.978 35.888 332.972 35.558 332.96 35.222C332.96 34.886 332.96 34.55 332.96 34.214C332.972 33.866 332.978 33.524 332.978 33.188C332.99 32.528 333.068 31.898 333.212 31.298C333.368 30.698 333.608 30.17 333.932 29.714C334.268 29.246 334.706 28.88 335.246 28.616C335.798 28.352 336.482 28.22 337.298 28.22C338.114 28.22 338.792 28.352 339.332 28.616C339.884 28.88 340.322 29.246 340.646 29.714C340.982 30.17 341.222 30.698 341.366 31.298C341.522 31.898 341.606 32.528 341.618 33.188C341.63 33.524 341.636 33.866 341.636 34.214C341.636 34.55 341.636 34.886 341.636 35.222C341.636 35.558 341.63 35.888 341.618 36.212C341.606 36.872 341.522 37.502 341.366 38.102C341.222 38.702 340.982 39.236 340.646 39.704C340.322 40.16 339.884 40.52 339.332 40.784C338.792 41.048 338.114 41.18 337.298 41.18ZM337.298 40.1C338.366 40.1 339.158 39.746 339.674 39.038C340.19 38.33 340.46 37.358 340.484 36.122C340.496 35.774 340.502 35.45 340.502 35.15C340.502 34.838 340.502 34.532 340.502 34.232C340.502 33.92 340.496 33.602 340.484 33.278C340.46 32.066 340.19 31.1 339.674 30.38C339.158 29.66 338.366 29.3 337.298 29.3C336.242 29.3 335.45 29.66 334.922 30.38C334.406 31.1 334.136 32.066 334.112 33.278C334.112 33.602 334.106 33.92 334.094 34.232C334.094 34.532 334.094 34.838 334.094 35.15C334.106 35.45 334.112 35.774 334.112 36.122C334.136 37.358 334.406 38.33 334.922 39.038C335.45 39.746 336.242 40.1 337.298 40.1Z'
            fill='#4E4E4E'
            animate='visible'
            initial='hidden'
          />
        </g>
      </svg>
    </motion.div>
  )
}

export default Eqn4;
