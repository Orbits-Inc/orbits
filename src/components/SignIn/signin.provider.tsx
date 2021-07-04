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
  moveToNextStage?: (stage: StageType, values?: any) => void;
  data?: SignInData;
}>({});

const SignInProvider: React.FC = ({ children }) => {
  const [signInStage, setSignInStage] = useState(StageType.DETAILS);
  const [data, setData] = useState<SignInData>();

  const moveToNextStage = (stage: StageType, values?: any) => {
    setData({ ...data, ...values });

    if (stage !== StageType.END) {
      setSignInStage(stage);
      return;
    }

    // handle success
  };

  return (
    <SignInContext.Provider value={{ signInStage, moveToNextStage, data }}>
      {children}
    </SignInContext.Provider>
  );
};

export default SignInProvider;

export const useSignIn = () => useContext(SignInContext);
