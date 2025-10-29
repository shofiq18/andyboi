


// // hooks/useGetMe.ts
// import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useRouter, usePathname } from "next/navigation";
// import Cookies from "js-cookie";

// import { AppDispatch, RootState } from "@/redux/store";
// import { setCredentials, logout } from "@/feature/user/userSlice";

// export interface UserProfile {
//   id: string;
//   name: string;
//   email: string;
//   role?: string;
// }

// interface UseGetMeResult {
//   user: UserProfile | null;
//   isLoading: boolean;
//   isAuthenticated: boolean;
// }

// /**
//  * Reads the `accessToken` cookie, decodes the JWT and restores the user.
//  * No `/me` API call is used.
//  */
// export const useGetMe = (): UseGetMeResult => {
//   const dispatch = useDispatch<AppDispatch>();
//   const router = useRouter();
//   const pathname = usePathname();

//   const { user, accessToken } = useSelector((state: RootState) => state.user);

//   // -----------------------------------------------------------------
//   // 1. Local loading state – we are “loading” only while we read the cookie
//   // -----------------------------------------------------------------
//   const [isLoading, setIsLoading] = useState(true);

//   // -----------------------------------------------------------------
//   // 2. JWT decoder (returns null on malformed token)
//   // -----------------------------------------------------------------
//   const decodeJwt = (token: string): UserProfile | null => {
//     try {
//       const payload = JSON.parse(atob(token.split(".")[1]));
//       return {
//         id: payload.id ?? "",
//         email: payload.email ?? "",
//         role: payload.role,
//         name: payload.name ?? payload.email?.split("@")[0] ?? "",
//       };
//     } catch {
//       return null;
//     }
//   };

//   // -----------------------------------------------------------------
//   // 3. Run once on mount (or when token changes)
//   // -----------------------------------------------------------------
//   useEffect(() => {
//     const cookieToken = Cookies.get("accessToken");

//     // -------------------------------------------------------------
//     // Already have user + token in Redux → nothing to do
//     // -------------------------------------------------------------
//     if (user && accessToken) {
//       setIsLoading(false);
//       return;
//     }

//     // -------------------------------------------------------------
//     // No user in Redux but cookie exists → decode & restore
//     // -------------------------------------------------------------
//     if (cookieToken) {
//       const decoded = decodeJwt(cookieToken);
//       if (decoded) {
//         dispatch(
//           setCredentials({
//             user: decoded,
//             accessToken: cookieToken,
//             // refreshToken is optional – not stored here
//           })
//         );
//       } else {
//         // Invalid / corrupted token → wipe it
//         Cookies.remove("accessToken");
//       }
//     }

//     setIsLoading(false);
//   }, [user, accessToken, dispatch]);

//   // -----------------------------------------------------------------
//   // 4. If token disappears (logout) → redirect to login
//   useEffect(() => {
//     if (!isLoading && !accessToken && pathname && !pathname.includes("/")) {
//       router.replace("/");
//     }
//   }, [isLoading, accessToken, router, pathname]);
 

//   return {
//     user: user ?? null,
//     isLoading,
//     isAuthenticated: !!user && !!accessToken,
//   };
// };










// hooks/useGetMe.ts
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter, usePathname } from "next/navigation";
import Cookies from "js-cookie";
import { AppDispatch, RootState } from "@/redux/store";
import { setCredentials,  } from "@/feature/user/userSlice";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role?: string;
}

export const useGetMe = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const pathname = usePathname();
  const { user, accessToken, guestSession, isGuest } = useSelector((state: RootState) => state.user);
  const [isLoading, setIsLoading] = useState(true);

  const decodeJwt = (token: string): UserProfile | null => {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return {
        id: payload.id ?? "",
        email: payload.email ?? "",
        role: payload.role,
        name: payload.name ?? payload.email?.split("@")[0] ?? "",
      };
    } catch {
      return null;
    }
  };

  useEffect(() => {
    const cookieToken = Cookies.get("accessToken");

    if (user && (accessToken || guestSession)) {
      setIsLoading(false);
      return;
    }

    if (cookieToken) {
      const decoded = decodeJwt(cookieToken);
      if (decoded) {
        dispatch(setCredentials({ user: decoded, accessToken: cookieToken }));
      } else {
        Cookies.remove("accessToken");
      }
    }

    setIsLoading(false);
  }, [user, accessToken, guestSession, dispatch]);
  // Redirect if not authenticated and not on login page
  useEffect(() => {
    if (!isLoading && !user && (!pathname || !pathname.includes("/"))) {
      router.replace("/");
    }
  }, [isLoading, user, router, pathname]);
  
  return {
    user: user ?? null,
    isLoading,
    isAuthenticated: !!accessToken,
    isGuest,
    guestSession,
  };
};