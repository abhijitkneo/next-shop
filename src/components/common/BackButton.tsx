'use client';
import { useRouter } from 'next/navigation';
import { Button } from 'react-bootstrap'
import { IoIosArrowRoundBack } from 'react-icons/io';

const BackButton = () => {
	const router = useRouter();
	return (
		<Button size='sm' variant='primary' className='d-inline-flex align-items-center' onClick={() => router.push('/')}>
			<IoIosArrowRoundBack size={24} /> Back
		</Button>
	)
}

export default BackButton