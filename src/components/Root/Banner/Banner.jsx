 import bannerImg from "../../../assets/images__2_-removebg-preview.png";

const Banner = () => {
     
      return (
            <div className="hero bg-base-200  rounded-lg mx-auto py-12">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bannerImg}
      className="rounded-lg shadow-2xl my-6 md:my-12 md:w-96 md:h-80" />
    <div className="">
      <h1 className="text-6xl py-12 font-bold text-wrap leading-normal">Books to freshen up your bookshelf</h1>
     
      <button className="btn font-bold text-xl py-6 text-white bg-[#23BE0A]">View The List</button>
    </div>
  </div>
</div>
      );
};

export default Banner;