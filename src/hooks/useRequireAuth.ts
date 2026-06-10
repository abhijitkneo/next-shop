'use client';

import { useAuth } from "@/context/AuthContext";
import { usePathname, useRouter } from "next/navigation";

const useRequireAuth = () => {
	const { isAuthenticated } = useAuth();
	const router = useRouter();
	const pathname = usePathname();

	const requireAuth = () => {
		if(!isAuthenticated) {
			router.push(`/login?redirect=${encodeURIComponent(pathname)}`);
			return false
		}
		return true
	}

	return requireAuth
}

export default useRequireAuth;