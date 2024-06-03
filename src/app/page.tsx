import Image from 'next/image';

export default function Home() {
    return (
        <main className="flex flex-col bg-dark-blue text-text-white font-body">
            <header className="bg-[#00192C] h-[3.13113rem] content-center text-center drop-shadow-[0_0_54px_0_rgba(0,0,0,0.75)]">
                This is an example of a notification message. It can be used to
                promote a specific campaign, etc.
            </header>

            <header>
                <img alt="MAGNACARE" />

                <nav className="uppercase">Menu</nav>
            </header>

            <section>
                <h1 className="uppercase font-display">Choose your access</h1>

                <p>
                    Expand your provider network <i>anywhere</i> in the country.
                    Or lease just the network locations you need. With MagnaCare
                    Access, <b>the choice is yours.</b>
                </p>

                <label htmlFor="email">Email Address</label>
                <input type="text" name="email" id="email"></input>
                <button className="uppercase font-display">Learn More</button>

                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.
                </p>
            </section>

            <section>
                <h2>
                    Need to offer <i>nationwide</i> access to health care
                    providers?
                </h2>

                <p>
                    MagnaCare has an extensive PPO network that includes all 50
                    states and Puerto Rico, with top-rated doctors and
                    hospitals, as well as inpatient and outpatient services such
                    as rehab centers, urgent care centers and ambulatory surgery
                    centers.
                </p>

                <p>
                    <a className="uppercase font-display">Contact us</a>
                </p>
            </section>
        </main>
    );
}
