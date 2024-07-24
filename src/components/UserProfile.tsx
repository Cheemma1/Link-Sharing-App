import React from "react";

const UserProfile = () => {
  return (
    <>
      <div className="m-[0_0_2.5rem_0] flex flex-col self-start w-[fit-content] box-sizing-border">
        <h1 className="m-[0_0_0.5rem_0]  font-bold text-[2rem] text-darkGrey">
          Profile Details
        </h1>
        <p className="font-normal text-[1rem] text-gray">
          Add your details to create a personal touch to your profile.
        </p>
      </div>
      <div className="flex flex-col items-center w-[fit-content] box-sizing-border">
        <div className="rounded-[0.8rem] bg-[var(--light-grey,#FAFAFA)] m-[0_0_1.5rem_0] flex flex-row p-[1.3rem_2.6rem_1.3rem_1.3rem] w-[fit-content] box-sizing-border">
          <h2 className="m-[5.3rem_9.5rem_5.3rem_0] font-normal text-[1rem] text-gray">
            Profile picture
          </h2>
          <div className="flex flex-row box-sizing-border">
            <div className="rounded-[0.8rem] bg-[var(--light-purple,#EFEBFF)] m-[0_1.5rem_0_0] flex flex-col justify-center items-center w-[12.1rem]">
              <div className="m-[0_0_0.9rem_0rem] flex w-[2.5rem] h-[2.5rem] box-sizing-border">
                {/* <img className="w-[2rem] h-[1.7rem]" /> */}
              </div>
              <span className="break-words font-['Instrument_Sans'] font-[var(--heading-s-font-weight,600)] text-[1rem] leading-[var(--heading-s-line-height,1.5)] text-[var(--purple,#633CFF)]">
                + Upload Image
              </span>
            </div>
            <p className="m-[4.9rem_0_4.9rem_0] inline-block break-words font-['Instrument_Sans'] font-[var(--body-s-font-weight,400)] text-[0.8rem] leading-[var(--body-s-line-height,1.5)] text-[var(--grey,#737373)]">
              Image must be below 1024x1024px. Use PNG or JPG format.
            </p>
          </div>
        </div>
        <div className="rounded-[0.8rem] bg-[var(--light-grey,#FAFAFA)] flex flex-col items-center p-[1.3rem_1.3rem_1.3rem_1.3rem] w-[45.5rem] box-sizing-border">
          <div className="m-[0_0_0.8rem_0] flex flex-row justify-between w-[43rem] box-sizing-border">
            <div className="m-[0.8rem_0.8rem_0.8rem_0] inline-block w-[15rem] break-words font-['Instrument_Sans'] font-[var(--body-m-font-weight,400)] text-[1rem] leading-[var(--body-m-line-height,1.5)] text-[var(--grey,#737373)]">
              First name*
            </div>
            <div className="rounded-[0.5rem] border-[0.1rem_solid_var(--borders,#D9D9D9)] bg-[var(--white,#FFFFFF)] p-[0.7rem_0.9rem_0.7rem_0.9rem] w-[27rem] box-sizing-border">
              <span className="opacity-50 break-words font-['Instrument_Sans'] font-[var(--body-m-font-weight,400)] text-[1rem] leading-[var(--body-m-line-height,1.5)] text-[var(--dark-grey,#333333)]">
                e.g. John
              </span>
            </div>
          </div>
          <div className="m-[0_0_0.8rem_0] flex flex-row justify-between w-[43rem] box-sizing-border">
            <div className="m-[0.8rem_0.8rem_0.8rem_0] inline-block w-[15rem] break-words font-['Instrument_Sans'] font-[var(--body-m-font-weight,400)] text-[1rem] leading-[var(--body-m-line-height,1.5)] text-[var(--grey,#737373)]">
              Last name*
            </div>
            <div className="rounded-[0.5rem] border-[0.1rem_solid_var(--borders,#D9D9D9)] bg-[var(--white,#FFFFFF)] p-[0.7rem_0.9rem_0.7rem_0.9rem] w-[27rem] box-sizing-border">
              <span className="opacity-50 break-words font-['Instrument_Sans'] font-[var(--body-m-font-weight,400)] text-[1rem] leading-[var(--body-m-line-height,1.5)] text-[var(--dark-grey,#333333)]">
                e.g. Appleseed
              </span>
            </div>
          </div>
          <div className="flex flex-row justify-between w-[43rem] box-sizing-border">
            <div className="m-[0.8rem_0.8rem_0.8rem_0] inline-block w-[15rem] break-words font-['Instrument_Sans'] font-[var(--body-m-font-weight,400)] text-[1rem] leading-[var(--body-m-line-height,1.5)] text-[var(--grey,#737373)]">
              Email
            </div>
            <div className="rounded-[0.5rem] border-[0.1rem_solid_var(--borders,#D9D9D9)] bg-[var(--white,#FFFFFF)] p-[0.7rem_0.9rem_0.7rem_0.9rem] w-[27rem] box-sizing-border">
              <span className="opacity-50 break-words font-['Instrument_Sans'] font-[var(--body-m-font-weight,400)] text-[1rem] leading-[var(--body-m-line-height,1.5)] text-[var(--dark-grey,#333333)]">
                e.g. email@example.com
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end w-[50.5rem] box-sizing-border">
        <div className="bg-[var(--borders,#D9D9D9)] m-[0_0_1.5rem_0] w-[50.5rem] h-[0.1rem]"></div>
        <div className="m-[0_2.5rem_0_2.5rem] flex w-[50.5rem] box-sizing-border">
          <div className="rounded-[0.5rem] bg-[var(--purple,#633CFF)] flex p-[0.7rem_0.1rem_0.7rem_0] w-[5.7rem] h-[fit-content] box-sizing-border">
            <span className="break-words font-['Instrument_Sans'] font-[var(--heading-s-font-weight,600)] text-[1rem] leading-[var(--heading-s-line-height,1.5)] text-[var(--white,#FFFFFF)]">
              Save
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
