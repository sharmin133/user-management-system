'use client';
import Link from 'next/link';
import Logo from '../logo/Logo';




interface NavBarProps {
	initialUser?: AuthContext;
}

const NavBar = ({ initialUser }: NavBarProps) => {
	return (
		<div className='flex items-center justify-between gap-3 max-w-[1920px] mx-auto px-4 w-full xl:px-6 '>
			<Logo />

			<div className='flex items-center gap-5'>
			
				{!initialUser ? (
					<Link href='/auth/invitation/verify'>Invitation</Link>
				) : null}
				{/* <AuthButton {...{ initialUser }} /> */}
			</div>
		</div>
	);
};
export default NavBar;