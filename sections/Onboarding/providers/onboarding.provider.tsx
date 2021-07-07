import { useState, createContext, useContext } from "react";

const OnboardingContext = createContext<any>({});

export const OnboardingProvider = ({ children }: any) => {
  const [stage, setStage] = useState<Number>(1);

  return (
    <OnboardingContext.Provider value={{ stage, setStage }}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => useContext(OnboardingContext);
