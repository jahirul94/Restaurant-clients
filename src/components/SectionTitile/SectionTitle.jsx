
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mx-auto text-center my-4 md:w-4/12">
             <p className="text-yellow-500 ">---{subHeading}---</p>
             <h3 className="text-4xl uppercase border-y-4 py-3">{heading}</h3>
        </div>
    );
};

export default SectionTitle;