import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../utils/providers/auth.provider";

export enum CheckAuthOn {
  render,
  click,
}

interface AuthRequired {
  children: React.ReactNode;
  checkAuthOn: CheckAuthOn;
}

const AuthRequired = ({ children, checkAuthOn }: AuthRequired) => {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [userExists, setUserExists] = useState<boolean>(false);

  useEffect(() => {
    if (!user && !loading) {
      setUserExists(false);
    } else {
      setUserExists(true);
    }
  }, [loading]);

  useEffect(() => {
    if (checkAuthOn === CheckAuthOn.render) {
      if (!userExists) {
        redirectToAuth();
      }
    }
  }, [userExists]);

  const redirectToAuth = () => {
    router.push("/auth");
  };

  if (checkAuthOn === CheckAuthOn.click && !userExists) {
    return <div onClick={() => redirectToAuth()}>{children}</div>;
  }

  return <>{children}</>;
};

export default AuthRequired;
