import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
  return (
    <div >
        <div className='container'>
            <h2 className='title is-3 mt-5'>Personal Digital Assistants</h2>

            <div className='section'>
                <div className='columns'>
                    <div className='column'>
                        <ProfileCard
                            title="Alexa"
                            handle="@alexa99"
                            image={AlexaImage}
                            descriptions="Alexa was created by Amazon and help you to buy things"
                        />
                    </div>
                    <div className='column'>
                        <ProfileCard
                            title="Cortana"
                            handle="@cortana32"
                            image={CortanaImage}
                            descriptions="Cortana was made by Microsoft. Who knows what it does?"
                        />
                    </div>
                    <div className='column'>
                        <ProfileCard
                            title="Siri"
                            handle="@siri"
                            image={SiriImage}
                            descriptions="Siri was made by Apple and is being phased out."
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
