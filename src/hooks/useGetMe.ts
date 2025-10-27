import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { AppDispatch, RootState } from "@/redux/store";

import { logout, setUser } from "@/feature/user/userSlice";
import { useGetMeQuery } from "@/redux/api/authApi";


interface UserProfile {
  id: string;
  name: string;
  email: string;
  role?: string;
}

interface UseGetMeResult {
  user: UserProfile | null;
  isLoading: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
  isAuthenticated: boolean;
}

export const useGetMe = (): UseGetMeResult => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { user, token } = useSelector((state: RootState) => state.user);
  
  const { data, error, isLoading } = useGetMeQuery(undefined, {
    skip: !!user && !!token,
  });

  useEffect(() => {
    const storedToken = Cookies.get("accessToken");
    
    if (data?.success && data.data && (token || storedToken)) {
      dispatch(
        setUser({
          user: {
            id: data.data.id,
            name: data.data.name,
            email: data.data.email,
            role: data.data.role,
          },
          token: token || storedToken || "",
        })
      );
    }
    
    if (error) {
      console.error("Failed to fetch user:", error);
      Cookies.remove("accessToken");
      dispatch(logout());
      router.push("/login");
    }
  }, [data, error, token, dispatch, router]);

  return {
    user: user || null,
    isLoading,
    error,
    isAuthenticated: !!user && !!token,
  };
};