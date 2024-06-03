import Image, { ImageProps } from 'next/image';
import React from 'react';

export default function Home() {
    return (
        <main className="flex flex-col bg-dark-blue text-text-white font-body items-center bg-[radial-gradient(circle_49.7rem_at_50%_582px,#086cb5_0%,rgba(8,126,211,0.00)_100%)]">
            <header className="bg-[#00192C] h-[3.13113rem] w-[100%] top-[-13.92] content-center text-center shadow-[0_0_54px_0_rgba(0,0,0,0.75)] opacity-[0.8]">
                This is an example of a notification message. It can be used to
                promote a specific campaign, etc.
            </header>

            <header className="w-[75rem] flex flex-row justify-between pt-[3.26rem] items-center">
                <div className="w-[14.625rem] h-[1.6875rem] relative">
                    <Image src="/magnacare_logo.svg" fill alt="MAGNACARE™" />
                </div>

                <nav className="uppercase">
                    <div className="w-[3rem] h-[3rem] hover:bg-[#ff763c] hover:rounded-[0.3125rem] flex items-center justify-center">
                        <a className="w-[1.8125rem] h-[1.4375rem] relative" href="#">
                            <Image src="/icons/menu_icon.svg" fill alt="Menu" />
                        </a>
                    </div>
                </nav>
            </header>

            <section className="w-[90rem] items-center flex flex-col mt-[2.73rem]">
                <div className="w-[100%] items-center flex flex-col relative">
                    <h1 className="uppercase font-display inline-flex flex-col items-center">
                        <span className="text-[2.2325rem] tracking-[0.84838rem]">
                            Choose your
                        </span>{' '}
                        <span
                            className="text-[19.25969rem] flex flex-col leading-[91%] tracking-[0.09631rem] mt-[3.32rem]
                    bg-[#54C9FF]
                     bg-[_radial-gradient(ellipse_20%_80%_at_10%_80%,rgba(0,14,28,0.6)_0%,rgba(0,33,55,0)_60%),_radial-gradient(ellipse_20%_80%_at_80%_40%,_rgba(0,0,0,0.5)_0%,rgba(0,0,0,0)_60%)] 
                     bg-clip-text text-transparent [text-shadow:_0_4px_4px_rgba(0,0,0,0.25)]">
                            <span>acc</span>
                            <span>ess</span>
                        </span>
                    </h1>
                    <div className="w-[18.75rem] h-[24.75rem] absolute right-0 top-[2rem]">
                        <Image
                            src="/photos/male_doctor_cropped.jpeg"
                            fill
                            alt=""
                        />
                    </div>
                    <div className="w-[22.8125rem] h-[31.4816rem] absolute left-0 top-[22.5rem]">
                        <Image
                            src="/photos/doctor_and_family_cropped.jpeg"
                            alt=""
                            fill
                        />
                    </div>
                    <div className="w-[7.9375rem] h-[7.9375rem] absolute left-[6.6rem] top-[62rem]">
                        <Image src="/icons/add_icon.svg" fill alt="" />
                    </div>
                    <div className="w-[44.3rem] h-[4.97rem] bg-text-white mix-blend-overlay absolute left-[11.875rem] top-[17.5rem]" />
                    <div className="w-[44.3rem] h-[5.41rem] bg-text-white mix-blend-overlay absolute left-[42.5rem] top-[26.8rem]" />

                    <p className="mt-[3.7rem] pl-[28.125rem] pt-[0.625rem] pr-[9.375rem] text-[1.92rem] leading-[165%] tracking-[0.02881rem]">
                        Expand your provider network{' '}
                        <b>
                            <i>anywhere</i>
                        </b>{' '}
                        in the country. Or lease just the network locations you
                        need. With MagnaCare Access, <b>the choice is yours.</b>
                    </p>
                </div>

                <div className="mt-[12.94rem] relative flex flex-row">
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email Address"
                        className="w-[26rem] h-[5rem] bg-[rgba(229,242,248,0.05)] rounded-[0.3125rem_0_0_0.3125rem] border-solid border-[1px] border-[rgba(229,242,248,0.33)] text-[1.6075rem] pl-[1.63rem] placeholder-text-white opacity-[0.4]"></input>
                    <button
                        className="uppercase font-display h-[5rem] w-[18.5rem] text-[1.1075rem] bg-[#ff763c] text-[#001A2E]
                  rounded-[0_0.3125rem_0.3125rem_0] shadow-[0_0_54px_0_rgba(255,118,59,0.60)]">
                        Learn More
                    </button>
                </div>

                <p className="w-[39rem] text-center text-[0.795rem] leading-[165%] tracking-[0.01194rem] mt-[2.81rem] opacity-[0.4]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.
                </p>
            </section>

            <section className="w-[90rem] relative flex flex-col mt-[11.12rem]">
                <div className="absolute right-[9.02rem] top-[6.25rem]">
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                        <div
                            key={i}
                            className="w-[15.9375rem] h-[2.3125rem] mt-[0.63rem] relative">
                            <Image src="/row_of_dots.svg" fill alt="" />
                        </div>
                    ))}
                </div>

                <div className="w-[58rem] h-[42.055rem] relative">
                    <Image
                        src="/photos/female_doctor_cropped.jpeg"
                        fill
                        alt=""
                    />
                </div>

                <div className="bg-[#001A2E] w-[82.5rem] p-[4.25rem_0_4.7rem_5rem] self-end mt-[-9rem] mb-[10.46rem] relative">
                    <h2 className="text-[4.22938rem] w-[55rem] tracking-[-0.10575rem] leading-[129%]">
                        Need to offer <i>nationwide</i> access to health care
                        providers?
                    </h2>

                    <div className="flex flex-row">
                        <div className="flex flex-col">
                            <p className="text-[1.2325rem] pt-[3rem] w-[27.37rem] opacity-[0.6]">
                                MagnaCare has an extensive PPO network that
                                includes all 50 states and Puerto Rico, with
                                top-rated doctors and hospitals, as well as
                                inpatient and outpatient services such as rehab
                                centers, urgent care centers and ambulatory
                                surgery centers.
                            </p>
                            <p className="text-[0.9825rem] pt-[9.09rem] opacity-[0.6]">
                                <a
                                    className="uppercase font-display hover:underline hover:underline-offset-4 text-text-white"
                                    href="#">
                                    Contact us
                                </a>
                            </p>
                        </div>

                        <div className="relative ml-[6.38rem] w-[40.0625rem] h-[24.6875rem]">
                            <Image src="/usa_map.svg" fill alt="" />

                            {[0, 1, 2, 3, 4, 5, 6].map((pos) => (
                                <div
                                    key={pos}
                                    className={`relative left-[0] mb-[3.875rem] w-[40.0625rem] h-[0.125rem]`}>
                                    <Image src="/dotted_line.svg" fill alt="" />
                                </div>
                            ))}

                            <div className="w-[12.5rem] h-[12.5rem] absolute left-[13.125rem] top-[5.625rem]">
                                <Image
                                    src="/icons/orange_dot_icon.svg"
                                    fill
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
