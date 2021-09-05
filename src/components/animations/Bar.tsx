import { motion, AnimationProps } from 'framer-motion'

const pathColor = '#252323'
const shapeColor = '#252323'
const nodeColor = '#CADEFC'

const mainPathVariant: AnimationProps = {
  transition: {
    duration: 6,
    ease: 'easeInOut',
  },
  variants: {
    visible: {
      pathLength: 1,
    },
    hidden: {
      pathLength: 0,
    },
  },
}

const shapeVariations: AnimationProps = {
  transition: {
    delay: 0,
    duration: 1,
    ease: 'easeIn',
  },
  variants: {
    visible: {
      fillOpacity: 1,
      pathLength: 1,
      transition: {
        delay: 0,
        duration: 4,
      },
    },
    hidden: {
      fillOpacity: 0,
      pathLength: 0,
    },
  },
}

const Bar = () => {
  return (
    <motion.div>
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='339px'
          height='82px'
          viewBox='0 0 339 82'
          fill='none'
        >
          <g
            id='bar_element'
            data-name='Bar element 1'
          >
            <motion.path
              {...mainPathVariant}
              id='element'
              data-name='Path 1'
              d='M62 55.5H171H280'
              fill={shapeColor}
              stroke={pathColor}
              stroke-width='0.5'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 1.1 }}
            />
            <motion.circle
              id='node1'
              data-name='Path 2'
              cx='284'
              cy='55'
              r='4'
              transform='rotate(-180 284 55)'
              fill={nodeColor}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.circle
              id='node2'
              data-name='Path 3'
              cx='58'
              cy='55'
              r='4'
              transform='rotate(-180 58 55)'
              fill={nodeColor}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='Fx1'
              data-name='Path 4'
              d='M62 55.5C62 53 60 51.5 58 51.5'
              fill={shapeColor}
              stroke={pathColor}
              stroke-width='1'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='Fx1'
              data-name='Path 5'
              d='M54 55C54 53 55.5 51.5 58 51.5'
              fill={shapeColor}
              stroke={pathColor}
              stroke-width='1'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='Fx1'
              data-name='Path 6'
              d='M62 55C62 57.5 60 59 58 59'
              fill={shapeColor}
              stroke={pathColor}
              stroke-width='1'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='Fx1'
              data-name='Path 7'
              d='M54 55C54 57.5 55.5 59 58 59'
              fill={shapeColor}
              stroke={pathColor}
              stroke-width='1'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='Fx1'
              data-name='Path 8'
              d='M286 55C286 53 286 51.5 286 51.5'
              fill={shapeColor}
              stroke={pathColor}
              stroke-width='1'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='Fx1'
              data-name='Path 9'
              d='M286 55C286 53 281.5 51.5 286 51.5'
              fill={shapeColor}
              stroke={pathColor}
              stroke-width='1'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='Fx1'
              data-name='Path 10'
              d='M288 55C288 57.5 286 59 286 59'
              fill={shapeColor}
              stroke={pathColor}
              stroke-width='1'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='Fx1'
              data-name='Path 11'
              d='M280 55C280 57.5 281.5 59 286 59'
              fill={shapeColor}
              stroke={pathColor}
              stroke-width='1'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='Fx1'
              data-name='Path 12'
              d='M4.28495 78H2.66495V65.148H9.84695V66.57H4.28495V71.124H9.50495V72.546H4.28495V78ZM14.0689 73.068L10.7389 68.352H12.5389L15.0229 71.988L17.4889 68.352H19.2709L15.9409 73.068L19.4509 78H17.6509L15.0229 74.148L12.3589 78H10.5769L14.0689 73.068ZM26.1703 78H24.6223V69.018C24.6223 68.502 24.6283 68.088 24.6403 67.776C24.6523 67.464 24.6703 67.14 24.6943 66.804C24.5023 66.996 24.3283 67.158 24.1723 67.29C24.0163 67.422 23.8183 67.59 23.5783 67.794L22.2103 68.91L21.3823 67.848L24.8563 65.148H26.1703V78Z'
              fill={shapeColor}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='Fx2'
              data-name='Path 13'
              d='M24.2849 26H22.6649V13.148H29.8469V14.57H24.2849V19.124H29.5049V20.546H24.2849V26ZM34.0689 21.068L30.7389 16.352H32.5389L35.0229 19.988L37.4889 16.352H39.2709L35.9409 21.068L39.4509 26H37.6509L35.0229 22.148L32.3589 26H30.5769L34.0689 21.068ZM49.1403 26H40.6443V24.686L44.0103 21.284C44.6583 20.636 45.2043 20.06 45.6483 19.556C46.0923 19.052 46.4283 18.56 46.6563 18.08C46.8843 17.588 46.9983 17.054 46.9983 16.478C46.9983 15.77 46.7883 15.236 46.3683 14.876C45.9483 14.504 45.4023 14.318 44.7303 14.318C44.1063 14.318 43.5543 14.426 43.0743 14.642C42.6063 14.858 42.1263 15.158 41.6343 15.542L40.7883 14.48C41.2923 14.06 41.8683 13.706 42.5163 13.418C43.1763 13.118 43.9143 12.968 44.7303 12.968C45.9303 12.968 46.8783 13.274 47.5743 13.886C48.2703 14.486 48.6183 15.32 48.6183 16.388C48.6183 17.06 48.4803 17.69 48.2043 18.278C47.9283 18.866 47.5443 19.448 47.0523 20.024C46.5603 20.588 45.9843 21.194 45.3243 21.842L42.6423 24.488V24.56H49.1403V26Z'
              fill={shapeColor}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='Fx3'
              data-name='Path 14'
              d='M299.285 78H297.665V65.148H304.847V66.57H299.285V71.124H304.505V72.546H299.285V78ZM309.069 73.068L305.739 68.352H307.539L310.023 71.988L312.489 68.352H314.271L310.941 73.068L314.451 78H312.651L310.023 74.148L307.359 78H305.577L309.069 73.068ZM323.654 68.154C323.654 69.018 323.414 69.708 322.934 70.224C322.454 70.728 321.806 71.064 320.99 71.232V71.304C322.022 71.424 322.79 71.748 323.294 72.276C323.798 72.804 324.05 73.494 324.05 74.346C324.05 75.09 323.876 75.756 323.528 76.344C323.18 76.92 322.64 77.37 321.908 77.694C321.188 78.018 320.258 78.18 319.118 78.18C318.446 78.18 317.822 78.126 317.246 78.018C316.67 77.922 316.118 77.742 315.59 77.478V76.002C316.13 76.266 316.712 76.476 317.336 76.632C317.96 76.776 318.56 76.848 319.136 76.848C320.288 76.848 321.116 76.626 321.62 76.182C322.136 75.726 322.394 75.102 322.394 74.31C322.394 73.506 322.076 72.93 321.44 72.582C320.816 72.222 319.934 72.042 318.794 72.042H317.552V70.692H318.812C319.868 70.692 320.666 70.47 321.206 70.026C321.758 69.582 322.034 68.994 322.034 68.262C322.034 67.638 321.824 67.158 321.404 66.822C320.984 66.474 320.414 66.3 319.694 66.3C318.998 66.3 318.404 66.402 317.912 66.606C317.42 66.81 316.934 67.068 316.454 67.38L315.662 66.3C316.118 65.94 316.682 65.628 317.354 65.364C318.038 65.1 318.812 64.968 319.676 64.968C321.02 64.968 322.016 65.268 322.664 65.868C323.324 66.468 323.654 67.23 323.654 68.154Z'
              fill={shapeColor}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='Fx4'
              data-name='Path 15'
              d='M251.285 26H249.665V13.148H256.847V14.57H251.285V19.124H256.505V20.546H251.285V26ZM261.069 21.068L257.739 16.352H259.539L262.023 19.988L264.489 16.352H266.271L262.941 21.068L266.451 26H264.651L262.023 22.148L259.359 26H257.577L261.069 21.068ZM276.716 23.084H274.844V26H273.314V23.084H267.158V21.734L273.206 13.076H274.844V21.662H276.716V23.084ZM273.314 17.612C273.314 16.988 273.326 16.46 273.35 16.028C273.374 15.584 273.392 15.164 273.404 14.768H273.332C273.236 14.996 273.116 15.242 272.972 15.506C272.828 15.77 272.69 15.992 272.558 16.172L268.706 21.662H273.314V17.612Z'
              fill={shapeColor}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='Fx1_vector'
              data-name='Path 16'
              d='M44.3536 55.3536C44.5488 55.1583 44.5488 54.8417 44.3536 54.6464L41.1716 51.4645C40.9763 51.2692 40.6597 51.2692 40.4645 51.4645C40.2692 51.6597 40.2692 51.9763 40.4645 52.1716L43.2929 55L40.4645 57.8284C40.2692 58.0237 40.2692 58.3403 40.4645 58.5355C40.6597 58.7308 40.9763 58.7308 41.1716 58.5355L44.3536 55.3536ZM4 55.5H44V54.5H4V55.5Z'
              stroke={pathColor}
              stroke-width='0.5'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='Fx2_vector'
              data-name='Path 17'
              d='M58.3536 0.646446C58.1583 0.451183 57.8417 0.451183 57.6464 0.646446L54.4645 3.82843C54.2692 4.02369 54.2692 4.34027 54.4645 4.53553C54.6597 4.7308 54.9763 4.7308 55.1716 4.53553L58 1.70711L60.8284 4.53553C61.0237 4.7308 61.3403 4.7308 61.5355 4.53553C61.7308 4.34027 61.7308 4.02369 61.5355 3.82843L58.3536 0.646446ZM58.5 41V1H57.5V41H58.5Z'
              stroke={pathColor}
              stroke-width='0.5'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='Fx3_vector'
              data-name='Path 18'
              d='M284.354 0.646446C284.158 0.451183 283.842 0.451183 283.646 0.646446L280.464 3.82843C280.269 4.02369 280.269 4.34027 280.464 4.53553C280.66 4.7308 280.976 4.7308 281.172 4.53553L284 1.70711L286.828 4.53553C287.024 4.7308 287.34 4.7308 287.536 4.53553C287.731 4.34027 287.731 4.02369 287.536 3.82843L284.354 0.646446ZM284.5 41V1H283.5V41H284.5Z'
              stroke={pathColor}
              stroke-width='0.5'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='Fx4_vector'
              data-name='Path 19'
              d='M338.354 55.3536C338.549 55.1583 338.549 54.8417 338.354 54.6464L335.172 51.4645C334.976 51.2692 334.66 51.2692 334.464 51.4645C334.269 51.6597 334.269 51.9763 334.464 52.1716L337.293 55L334.464 57.8284C334.269 58.0237 334.269 58.3403 334.464 58.5355C334.66 58.7308 334.976 58.7308 335.172 58.5355L338.354 55.3536ZM298 55.5H338V54.5H298V55.5Z'
              stroke={pathColor}
              stroke-width='0.5'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.circle
              {...mainPathVariant}
              id='node1'
              data-name='Path 20'
              cx='284'
              cy='55'
              r='4'
              transform='rotate(-180 284 55)'
              fill={nodeColor}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.circle
              {...mainPathVariant}
              id='node2'
              data-name='Path 21'
              cx='58'
              cy='55'
              r='4'
              transform='rotate(-180 58 55)'
              fill={nodeColor}
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

export default Bar
