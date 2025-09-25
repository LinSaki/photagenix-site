import { target } from "../assets";
const Description = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-5/60 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img className="w-5 h-5 mr-4" src={target} alt="target" />
      DiffQuest!
    </div>
  );
};

export default Description;
