import PropTypes from 'prop-types'

const Cart = props => {
  return (
    <div className='bg-[#FFF] rounded-xl'>
        <h3 className='text-[#2F80ED] text-lg font-bold pt-6 mb-4 ml-6'>Credit Hour Remaining 7 hr</h3>
        <div className='border bg-[#1C1B1B99] w-[264px] ml-6'></div>
        <h1 className='text-xl font-bold mt-4 mb-5 ml-6'>Course Name</h1>
        <div className='ml-6'></div>
        <div className='border bg-[#1C1B1B99] w-[264px] ml-6'></div>
        <p className='my-4 ml-6 text-base font-medium'>Total Credit Hour : 13</p>
        <div className='border bg-[#1C1B1B99] w-[264px] ml-6'></div>
        <p className='mt-4 pb-6 ml-6'>Total Price : 48000 USD</p>
    </div>
  )
}

Cart.propTypes = {}

export default Cart