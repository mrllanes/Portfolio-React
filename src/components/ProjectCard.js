export const ProjectCard = ({
    img,
    alt,
    name,
    blurb,
    tagline1,
    tagline2,
    tagline3,
    weblink,
    gitrepo,
}) => {
    const cardStyleWidth = {
        width: "18rem",
    };

    return (
        <>
            <div className="container text-center mb-5 pb-5">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card" style={cardStyleWidth}>
                            <img
                                src={img}
                                className="img img-thumbnail"
                                alt={alt}
                            />
                            <div className="card-body">
                                <h4 className="card-title">{name}</h4>
                                <p className="card-text">{blurb}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{tagline1}</li>
                                <li className="list-group-item">{tagline2}</li>
                                <li className="list-group-item">{tagline3}</li>
                            </ul>
                            <div className="card-body">
                                <a
                                    href={weblink}
                                    rel="noreferrer"
                                    target="_blank"
                                    className="card-link"
                                >
                                    Weblink
                                </a>
                                <a
                                    href={gitrepo}
                                    rel="noreferrer"
                                    target="_blank"
                                    className="card-link"
                                >
                                    Git Repo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
