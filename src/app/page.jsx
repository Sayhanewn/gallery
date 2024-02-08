import Image from 'next/image';
import gacket from '@/assets/images/gacket.png';
import LText from '@/components/atoms/ltext';
import Button from '@/components/atoms/button';

export default function Home() {
	return (
		<section className='flex justify-center items-center  '>
			<div className='bg-gradient-to-r from-indigo-500 to-transparent w-full'>
				<div className='h-screen grid grid-cols-2 container mx-auto'>
					<div className='flex flex-col h-full justify-center gap-10'>
						<h1 className='text-[400%] text-white'>The Fashionaid Daries</h1>
						<LText className=''>
							Embedded in the fabric of time, the legacy of a cherished fashion shop endures,
							weaving threads of tradition and innovation into the tapestry of style for generations
							to come.
						</LText>
						<div className='flex gap-5'>
							<Button className='rounded-full bg-white border-0 px-10 py-3 text-black'>
								Get Started
							</Button>
							<Button className='rounded-full bg-white border-0 px-10 py-3 text-black'>
								Bonus Bundle
							</Button>
						</div>
					</div>
					<div className='flex justify-center items-center'>
						<Image src={gacket} alt='jacket'></Image>
					</div>
				</div>
			</div>
		</section>
	);
}
