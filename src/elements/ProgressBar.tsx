const ProgressBar = ({ totalSteps = 3, currentStep = 1 }) => {
  return (
    <div className="bg-blue-200 h-2 rounded-[25px] w-full">
      <div
        className="bg-blue-500 h-2 rounded-[25px] duration-500"
        style={{
          width: `${(currentStep / totalSteps) * 100}%`,
        }}
      />
    </div>
  );
};

export default ProgressBar;
