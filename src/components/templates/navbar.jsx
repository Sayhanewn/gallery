import Button from '../atoms/button';
import LText from '../atoms/ltext';
import MText from '../atoms/mtext';
import Link from 'next/link';

export default function Navbar() {
	return (
		<nav className='w-full bg-blue-100 py-2'>
			<div className='container mx-auto flex justify-between items-center'>
				<Link href='/'>
					<LText>NavBar</LText>
				</Link>
				{/* <ul className='flex gap-5'>
					<li>Blog</li>
					<li>contact</li>
				</ul> */}
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
