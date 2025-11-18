import Image from 'next/image';
import Link from 'next/link';


const Logo = () => {
  return (
    <div>
		<Link href='/'>
				<Image
                  src='/images/logo.png'
                  alt='Logo'
                  width={100}
                  height={16}
                />
      </Link>
      </div>
	);
};

export default Logo;