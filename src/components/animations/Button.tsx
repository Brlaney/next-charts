// import { motion, AnimationProps } from 'framer-motion';

const Button = () => {
  return (
    <div className='testbtn'>
      Next
      <svg
        stroke='currentColor'
        fill='currentColor'
        stroke-width='0'
        viewBox='0 0 512 512'
        className='forwardIcon'
        height='1.5rem'
        width='1.5rem'
        xmlns='http://www.w3.org/2000/svg'
      >
        {/* <path fill='none' */}
          // stroke-miterlimit='10'
          // stroke-width='32'
          // d='M64 256c0 106 86 192 192 192s192-86 192-192S362 64 256 64 64 150 64 256z'
        // /
        <path
          fill='none'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='32'
          d='M216 352l96-96-96-96'
        />
      </svg>
    </div>
  )
};

export default Button;