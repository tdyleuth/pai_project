import './UserSettings.css';

const UserSettings = () => {
    return (
        <div className='wrapper'>
            <section className='user-settings-header'>
                <h1>User Settings</h1>
                <p>
                    Any changes you make will apply to your Lucidchart and
                    Lucidspark accounts.
                </p>
            </section>
            <section className='name-input-container'>
                <div>
                    <label>First Name</label>
                    <input type='text' value='Mike' />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type='text' value='Liang' />
                </div>
            </section>
            <section className='account-settings'>
                <h1>Account Settings</h1>
                <div className='block'>
                    <label>Username</label>
                    <input type='text' value='contact@prussiananalytics' />
                </div>
                <div>
                    <label>Email</label>
                    <input type='email' value='contact@prussiananalytics' />
                </div>
                <div>
                    <label>Current Password</label>
                    <input type='password' value='' />
                    <span>*Required to make changes</span>
                </div>
            </section>
            <section className='language-settings'>
                <h1>Language Settings</h1>
                <div>
                    <label>Display Language</label>
                    <select name='languageList' id='languageList'>
                        <option value='English'>English</option>
                        <option value='Spanish'>Spanish</option>
                        <option value='Chinese'>Chinese</option>
                        <option value='German'>German</option>
                        <option value='French'>French</option>
                    </select>
                </div>
            </section>
            <section className='password-settings'>
                <h1>Change Password</h1>
                <div>
                    <label>New Password</label>
                    <input type='password' value='' />
                </div>
                <div>
                    <label>Repeat Password</label>
                    <input type='password' value='' />
                </div>
                <div>
                    <label>Current Password</label>
                    <input type='password' value='' />
                    <span>*Required to make changes</span>
                </div>
                <div className='button-container'>
                    <button>Save Changes</button>
                </div>
            </section>
        </div>
    );
};

export default UserSettings;
