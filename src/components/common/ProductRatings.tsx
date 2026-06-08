'use client';
import { Rating } from 'react-simple-star-rating'

type RatingProps = {
	rate: number,
	count?: number	
}

const ProductRatings = ({rate, count}: RatingProps) => {
	return (
		<div className="product-ratings d-flex align-items-center gap-2">
			<Rating initialValue={rate} readonly allowFraction size={22} emptyColor={'#969696'} /> 
			<small className='mt-1 fw-medium'>{rate} / 5</small> 
			<small className='mt-1 fw-medium'>({count} Reviews)</small>
		</div>
	)
}

export default ProductRatings