import Image, { ImageProps } from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-dark-blue bg-[radial-gradient(circle_49.7rem_at_50%_582px,#086cb5_0%,rgba(8,126,211,0.00)_100%)] font-body text-text-white">
      <header className="top-[-13.92] h-[3.13113rem] w-[100%] content-center bg-[#00192C] text-center opacity-[0.8] shadow-[0_0_54px_0_rgba(0,0,0,0.75)]">
        This is an example of a notification message. It can be used to promote
        a specific campaign, etc.
      </header>

      <header className="flex w-[75rem] flex-row items-center justify-between pt-[3.26rem]">
        <div className="relative h-[1.6875rem] w-[14.625rem]">
          <Image src="/magnacare_logo.svg" fill alt="MAGNACARE™" />
        </div>

        <nav className="uppercase">
          <div className="flex h-[3rem] w-[3rem] items-center justify-center hover:rounded-[0.3125rem] hover:bg-[#ff763c]">
            <a className="relative h-[1.4375rem] w-[1.8125rem]" href="#">
              <Image src="/icons/menu_icon.svg" fill alt="Menu" />
            </a>
          </div>
        </nav>
      </header>

      <section className="mt-[2.73rem] flex w-[90rem] flex-col items-center">
        <div className="relative flex w-[100%] flex-col items-center">
          <h1 className="inline-flex flex-col items-center font-display uppercase">
            <span className="text-[2.2325rem] tracking-[0.84838rem]">
              Choose your
            </span>{" "}
            <span className="mt-[3.32rem] flex flex-col bg-[#54C9FF] bg-[_radial-gradient(ellipse_20%_80%_at_10%_80%,rgba(0,14,28,0.6)_0%,rgba(0,33,55,0)_60%),_radial-gradient(ellipse_20%_80%_at_80%_40%,_rgba(0,0,0,0.5)_0%,rgba(0,0,0,0)_60%)] bg-clip-text text-[19.25969rem] leading-[91%] tracking-[0.09631rem] text-transparent [text-shadow:_0_4px_4px_rgba(0,0,0,0.25)]">
              <span>acc</span>
              <span>ess</span>
            </span>
          </h1>
          <div className="absolute right-0 top-[2rem] h-[24.75rem] w-[18.75rem]">
            <Image src="/photos/male_doctor_cropped.jpeg" fill alt="" />
          </div>
          <div className="absolute left-0 top-[22.5rem] h-[31.4816rem] w-[22.8125rem]">
            <Image src="/photos/doctor_and_family_cropped.jpeg" alt="" fill />
          </div>
          <div className="absolute left-[6.6rem] top-[62rem] h-[7.9375rem] w-[7.9375rem]">
            <Image src="/icons/add_icon.svg" fill alt="" />
          </div>
          <div className="absolute left-[11.875rem] top-[17.5rem] h-[4.97rem] w-[44.3rem] bg-text-white mix-blend-overlay" />
          <div className="absolute left-[42.5rem] top-[26.8rem] h-[5.41rem] w-[44.3rem] bg-text-white mix-blend-overlay" />

          <p className="mt-[3.7rem] pl-[28.125rem] pr-[9.375rem] pt-[0.625rem] text-[1.92rem] leading-[165%] tracking-[0.02881rem]">
            Expand your provider network{" "}
            <b>
              <i>anywhere</i>
            </b>{" "}
            in the country. Or lease just the network locations you need. With
            MagnaCare Access, <b>the choice is yours.</b>
          </p>
        </div>

        <div className="relative mt-[12.94rem] flex flex-row">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email Address"
            className="h-[5rem] w-[26rem] rounded-[0.3125rem_0_0_0.3125rem] border-[1px] border-solid border-[rgba(229,242,248,0.33)] bg-[rgba(229,242,248,0.05)] pl-[1.63rem] text-[1.6075rem] placeholder-text-white opacity-[0.4]"
          ></input>
          <button className="h-[5rem] w-[18.5rem] rounded-[0_0.3125rem_0.3125rem_0] bg-[#ff763c] font-display text-[1.1075rem] uppercase text-[#001A2E] shadow-[0_0_54px_0_rgba(255,118,59,0.60)]">
            Learn More
          </button>
        </div>

        <p className="mt-[2.81rem] w-[39rem] text-center text-[0.795rem] leading-[165%] tracking-[0.01194rem] opacity-[0.4]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
      </section>

      <section className="relative mt-[11.12rem] flex w-[90rem] flex-col">
        <div className="absolute right-[9.02rem] top-[6.25rem]">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="relative mt-[0.63rem] h-[2.3125rem] w-[15.9375rem]"
            >
              <Image src="/row_of_dots.svg" fill alt="" />
            </div>
          ))}
        </div>

        <div className="relative h-[42.055rem] w-[58rem]">
          <Image src="/photos/female_doctor_cropped.jpeg" fill alt="" />
        </div>

        <div className="relative mb-[10.46rem] mt-[-9rem] w-[82.5rem] self-end bg-[#001A2E] p-[4.25rem_0_4.7rem_5rem]">
          <h2 className="w-[55rem] text-[4.22938rem] leading-[129%] tracking-[-0.10575rem]">
            Need to offer <i>nationwide</i> access to health care providers?
          </h2>

          <div className="flex flex-row">
            <div className="flex flex-col">
              <p className="w-[27.37rem] pt-[3rem] text-[1.2325rem] opacity-[0.6]">
                MagnaCare has an extensive PPO network that includes all 50
                states and Puerto Rico, with top-rated doctors and hospitals, as
                well as inpatient and outpatient services such as rehab centers,
                urgent care centers and ambulatory surgery centers.
              </p>
              <p className="pt-[9.09rem] text-[0.9825rem] opacity-[0.6]">
                <a
                  className="font-display uppercase text-text-white hover:underline hover:underline-offset-4"
                  href="#"
                >
                  Contact us
                </a>
              </p>
            </div>

            <div className="relative ml-[6.38rem] h-[24.6875rem] w-[40.0625rem]">
              <Image src="/usa_map.svg" fill alt="" />

              {[0, 1, 2, 3, 4, 5, 6].map((pos) => (
                <div
                  key={pos}
                  className={`relative left-[0] mb-[3.875rem] h-[0.125rem] w-[40.0625rem]`}
                >
                  <Image src="/dotted_line.svg" fill alt="" />
                </div>
              ))}

              <div className="absolute left-[13.125rem] top-[5.625rem] h-[12.5rem] w-[12.5rem]">
                <Image src="/icons/orange_dot_icon.svg" fill alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
