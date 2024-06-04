import Image, { ImageProps } from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-dark-blue bg-[radial-gradient(circle_49.7rem_at_50%_582px,#086cb5_0%,rgba(8,126,211,0.00)_100%)] font-body text-text-white">
      <header className="top-[-13.92] p-[0.85rem] w-full content-center bg-[#00192C] text-center opacity-80 shadow-0_0_54px_0_rgba(0,0,0,0.75)]">
        This is an example of a notification message. It can be used to promote
        a specific campaign, etc.
      </header>

      <header className="flex w-full max-w-[77rem] pl-4 pr-2 flex-row items-center justify-between pt-[3.26rem]">
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

      <section className="mt-[2.73rem] flex w-full lg:w-[90rem] flex-col items-center transition-[width]">
        <div className="relative flex w-full flex-col items-center">
          <h1 className="inline-flex flex-col items-center font-display uppercase w-full mb-8 lg:mb-0  px-4 lg:px-0 overflow-clip">
            <span className="text-[2.2325rem] tracking-[0.84838rem]">
              Choose your
            </span>{" "}
            <span className="block relative mt-[4.2rem] ml-[-0.6rem] w-full max-w-[53.125rem] aspect-[849/531]">
              <Image src="/ACCESS.svg" fill alt="access" />
              <div className="absolute left-[-20%] lg:left-[-5rem] top-[29.9%] lg:top-[10rem] h-[15.5%] lg:h-[4.97rem] w-[94%] lg:w-[44.3rem] bg-text-white mix-blend-overlay" />
              <div className="absolute right-[-20%] lg:left-[23.5rem] top-[60%] lg:top-[19.2rem] h-[15.5%] lg:h-[5.41rem] w-[75%] lg:w-[44.3rem] bg-text-white mix-blend-overlay" />
            </span>
          </h1>
          <div className="flex w-full lg:w-auto aspect-[1620/1093]">
            <div className="inline-block relative lg:absolute lg:right-0 lg:top-[2rem] h-[100%] lg:h-auto lg:w-[18.75rem] aspect-[828/1093]">
              <Image src="/photos/male_doctor_cropped.jpeg" fill alt="" />
            </div>
            <div className="inline-block relative lg:absolute lg:left-0 lg:top-[22.5rem] h-[100%] lg:h-auto lg:w-[22.8125rem] aspect-[1321/1823]">
              <Image src="/photos/doctor_and_family_cropped.jpeg" alt="" fill />
            </div>
          </div>
          <div className="absolute hidden lg:block left-[6.6rem] top-[62rem] h-[7.9375rem] w-[7.9375rem]">
            <Image src="/icons/add_icon.svg" fill alt="" />
          </div>

          <p className="lg:mt-[3.7rem] py-4 lg:pl-[28.125rem] lg:pr-[9.375rem] lg:pt-[0.625rem] text-[1.92rem] leading-[165%] tracking-[0.02881rem]  px-4 lg:px-0 ">
            Expand your provider network{" "}
            <b>
              <i>anywhere</i>
            </b>{" "}
            in the country. Or lease just the network locations you need. With
            MagnaCare Access, <b>the choice is yours.</b>
          </p>
        </div>

        <div className="relative mt-20 lg:mt-[12.94rem] flex flex-row w-full lg:w-auto p-4">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email Address"
            className="h-[5rem] flex-1 lg:w-[26rem] rounded-[0.3125rem_0_0_0.3125rem] border-[1px] border-solid border-[rgba(229,242,248,0.33)] bg-[rgba(229,242,248,0.05)] pl-[1.63rem] text-[1.6075rem] placeholder-text-white opacity-40"
          ></input>
          <button className="h-[5rem] px-4 w-[18.5rem] rounded-[0_0.3125rem_0.3125rem_0] bg-[#ff763c] font-display text-[1.1075rem] uppercase text-[#001A2E] shadow-[0_0_54px_0_rgba(255,118,59,0.60)]">
            Learn More
          </button>
        </div>

        <p className="mt-[2.81rem] w-full max-w-[41rem] px-4 text-center text-[0.795rem] leading-[165%] tracking-[0.01194rem] opacity-40">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
      </section>

      <section className="relative mt-[11.12rem] flex w-full lg:w-[90rem] flex-col transition-[width]">
        <div className="absolute hidden lg:block right-[9.02rem] top-[6.25rem] mt-[0.63rem] w-[15.9375rem] aspect-[255/270]">
          <Image src="/block_of_dots.svg" fill alt="" />
        </div>

        <div className="relative w-full lg:max-w-[58rem] aspect-[1920/1392]">
          <Image src="/photos/female_doctor_cropped.jpeg" fill alt="" />
        </div>

        <div className="relative mb-[10.46rem] mt-[-9rem] w-full lg:w-[82.5rem] self-end bg-[#001A2E] p-10 lg:p-[4.25rem_0_4.7rem_5rem]">
          <h2 className="lg:w-[55rem] text-[4.22938rem] leading-[129%] tracking-[-0.10575rem]">
            Need to offer <i>nationwide</i> access to health care providers?
          </h2>

          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col">
              <p className="w-full lg:w-[27.37rem] pt-[3rem] text-[1.2325rem] opacity-60">
                MagnaCare has an extensive PPO network that includes all 50
                states and Puerto Rico, with top-rated doctors and hospitals, as
                well as inpatient and outpatient services such as rehab centers,
                urgent care centers and ambulatory surgery centers.
              </p>
              <p className="pt-10 lg:pt-[9.09rem] text-[0.9825rem] opacity-60">
                <a
                  className="font-display uppercase text-text-white hover:underline hover:underline-offset-4"
                  href="#"
                >
                  Contact us
                </a>
              </p>
            </div>

            <div className="relative mt-10 lg:mt-0 lg:ml-[6.38rem] w-full lg:w-[40.0625rem] aspect-[400/247]">
              <Image src="/usa_map.svg" fill alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
