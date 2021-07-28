import React from "react";

interface SignInCard {
  children: React.ReactChild;
}

const SignInCard = ({ children }: SignInCard) => {
  return (
    <div className="bg-white rounded-md shadow-2xl transition w-auto p-10 pt-5">
      {children}
    </div>
  );
};

export default SignInCard;
