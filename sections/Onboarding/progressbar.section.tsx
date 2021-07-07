import { useOnboarding } from "./providers/onboarding.provider";

function ProgressBar() {
  const { stage } = useOnboarding();

  return (
    <div className="flex space-x-3 mb-10">
      <div
        className={`duration-300 w-full h-1 ${
          stage === 1 ? "bg-secondary" : "bg-white-300"
        } rounded-full`}
      />
      <div
        className={`duration-300 w-full h-1 ${
          stage === 2 ? "bg-secondary" : "bg-white-300"
        } rounded-full`}
      />
      <div
        className={`duration-300 w-full h-1 ${
          stage === 3 ? "bg-secondary" : "bg-white-300"
        } rounded-full`}
      />
    </div>
  );
}

export default ProgressBar;
