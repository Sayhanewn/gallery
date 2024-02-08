import Button from '../atoms/button';
import LText from '../atoms/ltext';
import MText from '../atoms/mtext';
import Link from 'next/link'; 

export default function Navbar() {
	return (
		<nav className='w-full bg-blue-100 py-2 absolute top-0'>
			<div className='container mx-auto flex justify-between items-center'>
				<Link href='/' className='flex items-center gap-2'>
					<div className='text-[45px] font-bold'>
						<span className='text-gray-700'>N</span>
						<span className='-m-2 text-blue-500'>G</span>
					</div>
					<div>
					<LText className=''>NextGallery</LText>
					<p className='text-[12px]'>Lead Luxarious Life.</p>
					</div>
				</Link>
				<ul className='flex gap-5 text-lg font-semibold'>
					<li>Blog</li>
					<li>contact</li>
				</ul>
				<div className='flex gap-5'>
					<Link href='/signup'>
						<Button>SignUp</Button>
					</Link>
					<Link href='/login'>
						<Button>LogIn</Button>
					</Link>
				</div>
			</div>
		</nav>
	);
}
