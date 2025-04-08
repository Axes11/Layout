import PortfolioCard from "./PortfolioCard"

export default function Portfolio(){
  return (
    <div>
      <div className="flex flex-col items-center gap-5 mt-25">
            <span className="text-5xl font-bold">Portfolio</span>
            <span className="grey-text font-medium">Some of the projects we've built.</span>
      </div>

      <div className="">
            <div className="flex gap-5 mt-15">
                  <div className="w-1/3">
                        <PortfolioCard />
                  </div>
                  <div className="w-1/3">
                        <PortfolioCard />
                  </div>
                  <div className="w-1/3">
                        <PortfolioCard />
                  </div>
            </div>
            <div className="flex gap-5 mt-5">
                  <div className="w-1/3">
                        <PortfolioCard />
                  </div>
                  <div className="w-1/3">
                        <PortfolioCard />
                  </div>
                  <div className="w-1/3">
                        <PortfolioCard />
                  </div>
            </div>
      </div>
    </div>
  );
}
