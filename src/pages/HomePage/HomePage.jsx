import heroBg from '../../assets/heroBg.webp';

const HomePage = () => {
  return (
    <div className=" text-gray-600 flex  items-center justify-center flex-col">
      <img
        className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 h-96 object-cover object-center rounded   animate-spin animate-spin-slow"
        alt="hero"
        src={heroBg}
      />
      <div className="text-center lg:w-2/3 w-full">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Discover new ideas and thoughts for yourself by reading Tweets from other people.
        </h1>
        <p className="mb-8 leading-relaxed">
          Tweets - short, hard conversations, which evoke emotions and make you think. These are
          small victories in the world of thoughts and ideas, which can change the reality. shi
          vlasnu vpevnenіst chi nathnennya.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
