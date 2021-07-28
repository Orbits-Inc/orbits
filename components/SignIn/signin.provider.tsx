import { useRouter } from "next/router";
import React, { createContext, useContext, useState } from "react";
import { TopicsInterested } from "../../utils/topicsInterested";
import { StageType } from "./types";

interface SignInData {
  username: string;
  fullname: string;
  topicsInterested: TopicsInterested;
}

const SignInContext = createContext<{
  signInStage?: StageType;
  moveToStage?: (stage: StageType, values?: any) => void;
  data?: SignInData;
}>({});

const SignInProvider: React.FC = ({ children }) => {
  const [signInStage, setSignInStage] = useState(StageType.DETAILS);
  const [data, setData] = useState<SignInData>();

  const router = useRouter();

  const moveToStage = (stage: StageType, values?: any) => {
    setData({ ...data, ...values });

    if (stage !== StageType.END) {
      setSignInStage(stage);
      return;
    }

    router.push("/");
  };

  return (
    <SignInContext.Provider value={{ signInStage, moveToStage, data }}>
      {children}
    </SignInContext.Provider>
  );
};

export default SignInProvider;

export const useSignIn = () => useContext(SignInContext);
