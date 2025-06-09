import gray_back from "../../assets/image/navbar/gray_bank.png";
import gray_home from "../../assets/image/navbar/gray_home.png";
import gray_chart from "../../assets/image/navbar/gray_chart.png";
import gray_store from "../../assets/image/navbar/gray_store.png";
import gray_setup from "../../assets/image/navbar/gray_setup.png";

import green_back from "../../assets/image/navbar/green_bank.png";
import green_home from "../../assets/image/navbar/green_home.png";
import green_chart from "../../assets/image/navbar/green_chart.png";
import green_store from "../../assets/image/navbar/green_store.png";
import green_setup from "../../assets/image/navbar/green_setup.png";

export const NavBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 mx-auto max-w-md flex justify-between mb-8 bg-gray-100 rounded-xl p-1">
      <div className="flex justify-between w-full px-10">
        <img src={gray_back} alt="" className="w-6 h-6 object-contain" />
        <img src={gray_home} alt="" className="w-6 h-6 object-contain" />
        <img src={gray_chart} alt="" className="w-6 h-6 object-contain" />
        <img src={gray_store} alt="" className="w-6 h-6 object-contain" />
        <img src={gray_setup} alt="" className="w-6 h-6 object-contain" />
      </div>
    </div>
  );
};
