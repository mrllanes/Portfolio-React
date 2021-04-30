export const ProjectCard = () => {
    const cardStyleWidth = {
        width: "18rem",
    };

    return (
        <>
            <div className="container text-center mb-5 pb-5">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card" style={cardStyleWidth}>
                            <img src="" className="img img-thumbnail" alt="" />
                            <div className="card-body">
                                <h4 className="card-title"></h4>
                                <p className="card-text"></p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"></li>
                                <li className="list-group-item"></li>
                                <li className="list-group-item"></li>
                            </ul>
                            <div className="card-body">
                                <a
                                    href=""
                                    target="_blank"
                                    className="card-link"
                                >
                                    Weblink
                                </a>
                                <a
                                    href=""
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
