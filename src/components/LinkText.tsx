import clickImg from "../assest/Group.png";
import Image from "next/image";
const LinkText = () => {
  return (
    <div>
      <h1 className="mb-2 self-start   font-bold text-2xl leading-tight text-gray-800">
        Customize your links
      </h1>
      <p className=" font-normal text-base leading-relaxed text-gray-600">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>
      <div className="flex flex-col items-center w-full max-w-3xl">
        <div className="rounded-lg border border-purple-600 mb-6 flex p-2 w-full">
          <span className="break-words font-sans font-semibold text-base leading-tight text-purple-600">
            + Add new link
          </span>
        </div>
        <div className="rounded-xl bg-gray-100 flex flex-col items-center py-16 w-full">
          <Image
            src={clickImg}
            alt="click-vector"
            className="mb-10 w-40 h-40"
          />
          <div className="flex flex-col items-center">
            <h2 className="mb-6 inline-block break-words font-sans font-bold text-2xl leading-tight text-gray-800">
              Let&apos;s get you started
            </h2>
            <p className="text-center break-words font-sans font-normal text-base leading-relaxed text-gray-600">
              Use the “Add new link” button to get started. Once you have more
              than one link, you can reorder and edit them. We&apos;re here to
              help you share your profiles with everyone!
            </p>
          </div>
        </div>
      </div>

      <button className="opacity-25 rounded-lg bg-purple-600 flex p-2 w-24 h-auto">
        Save
      </button>
    </div>
  );
};

export default LinkText;
