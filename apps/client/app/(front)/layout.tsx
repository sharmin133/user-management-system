import { lazy, PropsWithChildren } from 'react';

const Navbar = lazy(() => import('../../components/navbar/Navbar'));

// Force dynamic rendering since this layout uses AuthButton which uses cookies
export const dynamic = 'force-dynamic';

const FrontLayout = async ({ children }: PropsWithChildren) => {
	
	

	const INITIAL_USER = {
	
	} satisfies Partial<AuthContext>;

	return (
		<div className='flex flex-col items-center justify-center'>
			<div className='fixed flex items-center justify-center bg-white/50 dark:bg-black/70 top-0 left-0 w-full z-50  border-b-2 border-sky-200 dark:border-sky-900/70 h-20 font-semibold backdrop-blur-sm'>
				<Navbar initialUser={INITIAL_USER} />
			</div>
			<div className='mt-20 w-full'>{children}</div>
		</div>
	);
};

export default FrontLayout;
