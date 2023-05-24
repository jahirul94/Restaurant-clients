import SectionTitle from "../../../components/SectionTitile/SectionTitle";
import featuresImg from '../../../assets/home/featured.jpg';
import './Features.css'

const FeaturesItem = () => {
    return (
        <div className="backgroundImage bg-fixed my-20 pt-10">
             <SectionTitle heading='FROM OUR MENU' subHeading="Check it out"></SectionTitle>
             <div className="pb-20 pt-12 px-36 text-white md:flex justify-center items-center space-x-20">
                  <div>
                     <img src={featuresImg} alt="" />
                  </div>
                  <div>
                      <p>Aug 20 , 2023 </p>
                      <p className="uppercase">WHERE CAN I GET SOME?</p>
                      <p><small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi repellendus repellat asperiores qui perferendis nulla, porro dolores enim blanditiis error sed, odit adipisci consequatur ea facere ipsam, minus id laudantium praesentium suscipit autem! A nobis non exercitationem distinctio delectus dignissimos?</small></p>
                      <button className="btn btn-outline border-0 border-b-2 my-4 text-white">Order now </button>
                  </div>
             </div>
        </div>
    );
};

export default FeaturesItem;