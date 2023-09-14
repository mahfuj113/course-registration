import PropTypes from 'prop-types'

const Cart = ({selectedCourse,totalCredit, creditRemaining, price}) => {
  return (
    <div className='bg-[#FFF] rounded-xl'>
        <h3 className='text-[#2F80ED] text-lg font-bold pt-6 mb-4 ml-6'>Credit Hour Remaining {creditRemaining} hr</h3>
        <div className='border bg-[#1C1B1B99] w-[264px] ml-6'></div>
        <h1 className='text-xl font-bold mt-4 mb-5 ml-6'>Course Name</h1>
        <div className='ml-6 mb-6'>
            {
                selectedCourse.map(course => (
                    <li key={course.id} className='list-decimal text-base font-normal text-[#1C1B1B99]'>{course.course_name}</li>
                ))
            }
        </div>
        <div className='border bg-[#1C1B1B99] w-[264px] ml-6'></div>
        <p className='my-4 ml-6 text-base font-medium text-[#1C1B1BCC]'>Total Credit Hour : {totalCredit}</p>
        <div className='border bg-[#1C1B1B99] w-[264px] ml-6'></div>
        <p className='mt-4 pb-6 ml-6 text-base font-medium text-[#1C1B1BCC]'>Total Price : {price} USD</p>
    </div>
  )
}

Cart.propTypes = {
    selectedCourse: PropTypes.array.isRequired,
    totalCredit: PropTypes.number.isRequired,
    creditRemaining: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
}

export default Cart