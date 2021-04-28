import Resume from "../assets/Michael-Llanes-Resume-2021.pdf";

const style2 = {
    width: "350px",
    height: "200px",
};

const styleBlue = {
    color: "blue",
};

export default function Contact() {
    return (
        <>
            <div className="container mb-5 pb-5">
                <br />
                <h1>Feel Free to Contact Me!</h1>
                <br />

                <form>
                    <div className="row">
                        <div className="col-7">
                            <div className="row">
                                <p>
                                    Now that you have learned a bit about
                                    Michael Llanes, by all means, please reach
                                    out and ask how he can help you or your
                                    company. Please submit the form you see here
                                    and Michael will respond to you as soon as
                                    possible. Comments are always welcome! If
                                    you would like to hire Michael Llanes as a
                                    contractor or inquire about his full-time
                                    availability, briefly explain what you are
                                    looking for and you can discuss in more
                                    detail once he responds to you. Thank you
                                    for your time and interest and remember,
                                    always have respect, loyalty,
                                    professionalism, determination and patience.
                                    We are all in this together.
                                </p>
                            </div>
                            <div className="row">
                                <dl>
                                    <dt>
                                        <h3>Michael Llanes</h3>
                                    </dt>
                                    <dd>
                                        <h4>281-543-7207 (cell)</h4>
                                    </dd>
                                    <dd>
                                        <a
                                            href={Resume}
                                            rel="noreferrer"
                                            target="_blank"
                                        >
                                            <h4>Resume in PDF</h4>
                                        </a>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <div className="col-5 col-list">
                            <div className="row">
                                <div className="col-3">
                                    <label for="fullName">Full Name: </label>
                                </div>
                                <div className="col">
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="name"
                                        placeholder="First and Last Name"
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-3">
                                    <label for="emailAddress">
                                        E-Mail Address:{" "}
                                    </label>
                                </div>
                                <div className="col">
                                    <input
                                        type="text"
                                        id="emailAddress"
                                        name="email"
                                        placeholder="someone@internet.com"
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-3">
                                    <label for="identify">Are You A: </label>
                                </div>
                                <div className="col">
                                    <select id="identify" name="identify">
                                        <option value="tech">
                                            Technology Professional
                                        </option>
                                        <option value="landProfessional">
                                            Land Professional
                                        </option>
                                        <option value="educator">
                                            Educator/Training Specialist
                                        </option>
                                        <option value="troll">
                                            I Am Just Here For The LULZ
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-3">
                                    <label for="interest">Comments: </label>
                                </div>
                                <div className="col">
                                    <textarea
                                        id="interest"
                                        name="interest"
                                        placeholder="Questions, Comments, Requests"
                                        style={style2}
                                    ></textarea>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-2 offset-md-1">
                                    <input
                                        type="submit"
                                        value="Submit"
                                        style={styleBlue}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
