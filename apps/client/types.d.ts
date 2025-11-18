
/// <reference types="react" />
declare namespace React {
	function lazy<T extends ComponentType<any>>(
		factory: () => Promise<{ default: T }>
	): T;
}

interface IconProps {
	className?: string;
	dimension?: string;
}



interface AuthContext {
	sessionId?: string;
	userId?: string;
	email?: string;
	userName?: string;
	userRole?: Roles | string;

}