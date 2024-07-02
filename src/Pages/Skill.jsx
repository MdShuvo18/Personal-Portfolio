

const Skill = () => {
    return (
        <div>
            <h1 className="text-5xl font-extrabold text-center">-----Skill Set-----</h1>
            {/* Languages */}
            <div className="mt-10 space-y-10">
                <h2 className="text-2xl font-extrabold">Languages :</h2>
                <hr className="" />
                <div className="grid lg:grid-cols-3 gap-3 justify-items-center">
                    <div className="card bg-base-100 w-96 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://i.ibb.co/7zzXKXQ/download-3.png"
                                alt=""
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            {/* <h2 className="card-title">HTML</h2>                    */}
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://i.ibb.co/8cjPm3G/123-css3.jpg"
                                alt=""
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            {/* <h2 className="card-title">CSS</h2> */}


                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://i.ibb.co/0hYv4rq/Unofficial-Java-Script-logo-2-svg.png"
                                alt=""
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            {/* <h2 className="card-title">JavaScript</h2> */}

                        </div>
                    </div>
                </div>
            </div>

            {/* Libraries & Frameworks */}
            <div className="mt-10 space-y-10">
                <h2 className="text-2xl font-extrabold">Libraries & Frameworks:</h2>
                <hr />

                <div className="grid lg:grid-cols-2 justify-items-center gap-3">
                    <div className="card bg-base-100 w-96 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://i.ibb.co/XCG1y3x/1-a-NWAbdr-DQ8-ROc-OTO187-Hf-Q.jpg"
                                alt=""
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            {/* <h2 className="card-title">JavaScript</h2> */}

                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://i.ibb.co/TgqBHXb/0-66l-BPo-Fz1-UFwj-Bn-F.png"
                                alt=""
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            {/* <h2 className="card-title">JavaScript</h2> */}

                        </div>
                    </div>
                </div>
            </div>
            {/* Database */}
            <div className="mt-10 space-y-10">
                <h2 className="text-2xl font-extrabold">Database & Runtime Environment:</h2>
                <hr />

                <div className="grid lg:grid-cols-2 justify-items-center gap-3">
                    <div className="card bg-base-100 w-96 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://i.ibb.co/tppQNjW/1-QJnvahq-EBd-UGj-YQUYrhv-A.png"
                                alt=""
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            {/* <h2 className="card-title">JavaScript</h2> */}

                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://i.ibb.co/jhTb3Z2/nodejs.jpg"
                                alt=""
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            {/* <h2 className="card-title">JavaScript</h2> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;