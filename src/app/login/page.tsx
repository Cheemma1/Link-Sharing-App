import Image from "next/image";
import logo from "../../assest/logo.png";
import mailIcon from "../../assest/mail.svg";
import lockIcon from "../../assest/lock.svg";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="bg-lightGrey flex flex-col items-center w-full h-screen box-sizing-border">
      <div className="mt-[4rem] mb-4 flex flex-row items-center ">
        <div className=" flex w-[2.5rem] h-[2.5rem] ">
          <Image src={logo} alt="logo" className="w-[2.1rem] h-[2.1rem]" />
        </div>
        <h1 className="font-bold text-darkGrey text-[1.5rem]">devlinks</h1>
      </div>
      <div className="rounded-[0.8rem] bg-white flex flex-col p-[2.5rem] w-[472px] box-sizing-border">
        <div className="mb-[2.5rem] flex flex-col self-start w-[fit-content] box-sizing-border">
          <h2 className="mb-[0.5rem] font-bold text-[2rem] text-darkGrey">
            Login
          </h2>
          <p className="font-normal text-[1rem]  text-gray">
            Add your details below to get back into the app
          </p>
        </div>
        <form className="flex flex-col items-center w-[fit-content] box-sizing-border">
          <div className="mb-[1.5rem_] flex flex-col">
            <label
              htmlFor="email"
              className="m-[0_0_0.3rem_0]  font-normal text-[0.8rem]  text-darkGrey font-sans"
            >
              Email address
            </label>
            <div className="rounded-[0.5rem] border border-gray2 bg-white flex flex-row items-center py-[0.7rem] px-[1rem] w-[24.8rem] ">
              <Image
                src={mailIcon}
                alt="mail-icon"
                className="w-[0.8rem] h-[0.6rem]"
              />

              <input
                className="opacity-50  border-none flex-1 outline-none px-2"
                placeholder=" e.g. alex@email.com"
              />
            </div>
            <label
              htmlFor="password"
              className="mt-4  font-normal text-[0.8rem]  text-darkGrey"
            >
              Password
            </label>
            <div className="rounded-[0.5rem] border border-gray2 bg-white flex flex-row items-center py-[0.7rem] px-[1rem] w-[24.8rem] ">
              <Image
                src={lockIcon}
                alt="mail-icon"
                className="w-[0.8rem] h-[0.6rem]"
              />

              <input
                className="opacity-50  border-none flex-1 outline-none px-2"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <button className="rounded-[0.5rem] bg-purple text-white font-semibold w-full h-[46px]">
            Login
          </button>
        </form>
        <p className=" font-normal text-[1rem] text-grayy mt-4 text-center">
          Don&apos;t have an accout?
          <span className="text-purple">
            <Link href="/signup"> Create account</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
