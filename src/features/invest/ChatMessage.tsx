// import React from "react";
// import theacher_popo from "../../assets/image/common/teacher_popo.png";
// import parents from "../../assets/image/common/parents.png";
// import clsx from "clsx";
// interface ChatMessageProps {
//   message: string;
//   isTeacher: boolean;
// }

// const ChatMessage: React.FC<ChatMessageProps> = ({ message, isTeacher }) => {
//   return (
//     <div className="flex flex-col gap-y-1">
//       <div className={clsx("flex", isTeacher ? "" : "self-end")}>
//         {isTeacher ? (
//           <>
//             <div className="flex justify-center items-center w-8 h-8 rounded-full bg-main-white-500 border border-gray-100 shadow-custom-2">
//               <img src={theacher_popo} alt={"포포 교수님"} className="w-4/5 h-4/5 object-contain" />
//             </div>
//             <div className="text-xs py-2.5 px-2">포포 교수님</div>
//           </>
//         ) : (
//           <>
//             <div className="text-xs py-2.5 px-2">부모님</div>
//             <div className="flex justify-center items-center w-8 h-8 rounded-full bg-main-white-500 border border-gray-100 shadow-custom-2">
//               <img src={parents} alt={"부모님"} className="w-3/4 h-3/4 object-contain" />
//             </div>
//           </>
//         )}
//       </div>
//       <div className={clsx("bg-[#FAF8F9] rounded-lg text-xs p-2", isTeacher ? "ml-8 mr-4" : "mr-8 ml-4")}>
//         {message}
//       </div>
//     </div>
//   );
// };

// export default ChatMessage;

// UI 다른 버전
import React from "react";
import theacher_popo from "../../assets/image/common/teacher_popo.png";
import parents from "../../assets/image/common/parents.png";
import clsx from "clsx";
interface ChatMessageProps {
  message: string;
  isTeacher: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isTeacher }) => {
  return (
    <div className="flex flex-col gap-y-1">
      <div className={clsx("flex")}>
        {isTeacher ? (
          <>
            <div className="flex justify-center items-center w-8 h-8 rounded-full bg-main-white-500 border border-gray-100 shadow-custom-2">
              <img src={theacher_popo} alt={"포포 교수님"} className="w-4/5 h-4/5 object-contain" />
            </div>
            <div className="text-xs py-2.5 px-2">포포 교수님</div>
          </>
        ) : (
          <>
            <div className="flex justify-center items-center w-8 h-8 rounded-full bg-main-white-500 border border-gray-100 shadow-custom-2">
              <img src={parents} alt={"부모님"} className="w-3/4 h-3/4 object-contain" />
            </div>
            <div className="text-xs py-2.5 px-2">부모님</div>
          </>
        )}
      </div>
      <div className={clsx("bg-[#FAF8F9] rounded-lg text-xs p-2", isTeacher ? "ml-8 mr-4" : "ml-8 mr-4")}>
        {message}
      </div>
    </div>
  );
};

export default ChatMessage;
