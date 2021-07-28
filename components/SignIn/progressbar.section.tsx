import { useSignIn } from "./signin.provider";

const ProgressBar = () => {
  const { signInStage } = useSignIn();

  return (
    <div className="flex justify-center mb-12">
      {[0, 1, 2].map((idx) => {
        return (
          <div
            key={idx}
            className={`${
              signInStage?.valueOf() === idx ? "bg-blue-500" : "bg-white-300"
            } py-0.5 px-16 mx-4 rounded`}
          ></div>
        );
      })}
    </div>
  );
};

export default ProgressBar;
