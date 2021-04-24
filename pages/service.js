import Header from './../components/Header/header';
import Footer from './../components/Footer/footer';

function Service(props) {
    console.log(props);
    return (
        <div>
            <Header />
            <img
                className="relative flex m-auto"
                src="https://image.freepik.com/free-vector/customer-giving-quality-feedback_74855-5482.jpg"
            />

            <div className="flex flex-row flex-wrap">
                {props.data.map((service) => (
                    <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                                <div
                                    className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ${service.className}`}
                                >
                                    <i className="fas fa-award"></i>
                                </div>
                                <h6 className="text-xl font-semibold">
                                    {service.name}
                                </h6>
                                <p className="mt-2 mb-4 text-gray-600">
                                    {service.description}.
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

Service.getInitialProps = async (ctx) => {
    const res = await fetch('http://localhost:3000/api/service');
    const data = await res.json();
    return {
        data,
    };
};
export default Service;
