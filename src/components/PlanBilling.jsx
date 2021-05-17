import './PlanBilling.css';

const PlanBilling = () => {
    return (
        <div className='wrapper'>
            <section className='header-container'>
                <h1>@prussianai you are currently using the Free Plan</h1>
                <p>
                    Learn more about each plan by reading our{' '}
                    <a href='/frequentquestions'>frequently asked questions.</a>
                    , or start a free 30-day trial of Gitlab.com Ultimate.
                </p>
                <div className='button-container'>
                    <button>Start your free trial</button>
                </div>
            </section>
            <section className='card-wrapper'>
                <div className='card'>
                    <div className='card-header'>
                        <h1>Free Plan</h1>
                    </div>
                    <div className='card-content'>
                        <div id='price'>
                            <div id='price-amount'>
                                <span>$0</span>
                            </div>
                            <div id='per-user'>
                                <p>
                                    per user <br />
                                    monthly
                                </p>
                            </div>
                        </div>

                        <p id='features'>
                            Includes
                            <br />
                            All stages of the DevOps lifescyle
                            <br />
                            Bring your own CI runners
                            <br />
                            Bring your own production enviroment
                            <br />
                            400 CI/CI minutes
                            <br />
                            <br />
                            <a href='/freeplanfeatures'>
                                See all Free plan features
                            </a>
                        </p>
                    </div>
                    <div className='button-links-container'>
                        <div></div>
                    </div>
                </div>

                <div className='card'>
                    <div className='card-header'>
                        <h1>Premium Saas Plan (Formerly Silver)</h1>
                    </div>
                    <div className='card-content'>
                        <div id='price'>
                            <div id='price-amount'>
                                <span>$19</span>
                            </div>
                            <div id='per-user'>
                                <p>
                                    per user <br />
                                    monthly
                                    <br />
                                    billed annually at $228
                                </p>
                            </div>
                        </div>

                        <p id='features'>
                            All the benefits of Free +
                            <br />
                            Cross-team project management
                            <br />
                            Multiple approval rules
                            <br />
                            Multi-region support
                            <br />
                            Priorty support
                            <br />
                            1000 CI/CD minutes
                            <br />
                            <br />
                            <a href='/premiumplanfeatures'>
                                See all Premium Saas Plan (Formerly Silver)
                                features
                            </a>
                            <br />
                        </p>
                    </div>

                    <div className='button-links-container'>
                        <button id='contact-button'>Contact Sales</button>
                        <button id='upgrade-button'>Upgrade</button>
                    </div>
                </div>

                <div className='card'>
                    <div className='card-header'>
                        <h1>Ultimate Saas Plan (Formerly Gold)</h1>
                    </div>
                    <div className='card-content'>
                        <div id='price'>
                            <div id='price-amount'>
                                <span>$99</span>
                            </div>
                            <div className='per-user'>
                                <p>
                                    Per user <br />
                                    monthly
                                    <br />
                                    billed annually at $1188
                                </p>
                            </div>
                        </div>

                        <p id='features'>
                            All the benefits of Premium +
                            <br />
                            Company wide portfolio management
                            <br />
                            Advanced application security
                            <br />
                            Executive level insights
                            <br />
                            Compliance automation
                            <br />
                            Free guest users
                            <br />
                            5000 CI/CD minutes
                            <br />
                            <br />
                            <a href='/premiumplanfeatures'>
                                See all Ultimate Saas Plan (Formerly Gold)
                                features
                            </a>
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className='button-links-container'>
                        <button id='contact-button'>Contact Sales</button>
                        <button id='upgrade-button'>Upgrade</button>
                    </div>
                </div>
            </section>
            <section className='user-plan-container'>
                <div className='user-plan-header'>
                    <div>
                        <h1>MIKE LIANG:Free</h1>
                    </div>

                    <div className='upgrade-button-container'>
                        <button>Upgrade</button>
                    </div>
                </div>
                <div className='usage-container'>
                    <div>
                        <h1>
                            <i className='fa fa-database'></i>
                            Usage
                        </h1>
                    </div>
                    <div>
                        <p>
                            Seats in subsciption <br /> <span>-</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            Seats currently in use{' '}
                            <i className='fa fa-question-circle fa-lg'></i>
                            <br />
                            <span>1</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            Max seats used{' '}
                            <i className='fa fa-question-circle fa-lg'></i>
                            <br />
                            <span>-</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            Seats owned{' '}
                            <i className='fa fa-question-circle fa-lg'></i>
                            <br />
                            <span>-</span>
                        </p>
                    </div>
                </div>
                <div className='billing-container'>
                    <div>
                        <h1>
                            <i className='fa fa-file'></i>Billing
                        </h1>
                    </div>
                    <div>
                        <p>
                            Subscription start date <br />
                            <span>April 2,2021</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            Subscription end date <br />
                            <span>-</span>
                        </p>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </section>
        </div>
    );
};

export default PlanBilling;
