import { ProjectCard } from "../components/ProjectCard";
import { PortfolioImages } from "../assets/images";
import PortfolioData from "../data/llanesPortfolio.json";

export const Portfolio = () => {
    return (
        <div className="container text-center mb-5 pb-5">
            <div className="row">
                {PortfolioData.map((data) => (
                    <div
                        key={data.id}
                        className="col-12 col-md-6 col-lg-4 my-5"
                    >
                        <ProjectCard
                            {...data}
                            img={PortfolioImages[data.imgsrc]}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
