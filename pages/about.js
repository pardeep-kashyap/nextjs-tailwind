import Header from './../components/Header/header';
import Footer from './../components/Footer/footer';

function About() {
    return (
        <>
            <Header />;
            <div className="flex flex-wrap items-center">
                <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                    <h3 className="text-3xl mb-2 font-semibold leading-normal">
                        Sample NextJS App
                    </h3>
                    <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                        Don't let your uses guess by attaching tooltips and
                        popoves to any element. Just make sure you enable them
                        first via JavaScript.
                    </p>
                    <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                        The kit comes with three pre-built pages to help you get
                        started faster. You can change the text and images and
                        you're good to go. Just make sure you enable them first
                        via JavaScript.
                    </p>
                    <a className="font-bold text-gray-800 mt-8">
                        Check Tailwind Starter Kit!
                    </a>
                </div>

                <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                        <img
                            alt="..."
                            src="https://www.google.com/maps/vt/data=kILrsyOd20mER3Y-aGUo8925TjE6xbcm6Ms5bP2_YorrP3pOJ1npiF0sqjGaKs4yjmiOf_9Rx3yp3dP94Bm7n_MTLLkT_zd8wNI6Gz37WIhfI51mLVkJEqc1KC7jrOT4NZEx6Wfhke6SZr2uXpUs-BNYSOLhCSq94WMSPoyN5IZrThG-Fyg371s4MHP5hdCSlG2xaakiAvhNORI5odLyf_6aotFhtezJ8fE9ZHOEqNliUGMwu7VSzTrgmcyy"
                            className="w-full align-middle rounded-t-lg"
                        />
                        <blockquote className="relative p-8 mb-4">
                            <svg
                                preserveAspectRatio="none"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 583 95"
                                className="absolute left-0 w-full block"
                                style={{
                                    height: '95px',
                                    top: '-94px',
                                }}
                            >
                                <polygon
                                    points="-30,95 583,95 583,65"
                                    className="text-pink-600 fill-current"
                                ></polygon>
                            </svg>
                            <h4 className="text-xl font-bold text-white">
                                Address
                            </h4>
                            <p className="text-md font-light mt-2 text-white">
                                Gali no - 6, Near Shiv mandir, Hansi Road,
                                Karnal (132001), Haryana
                            </p>
                        </blockquote>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;
