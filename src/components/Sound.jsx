import Sound from 'react-sound'
import bgmMusic from '../assets/Hall-of-Horoscope.mp3'

const PlaySound = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
) => {
    return (
        <div>
            <Sound
                url={bgmMusic}
                playStatus={Sound.status.PLAYING}
                playFromPosition={0}
                onLoading={handleSongLoading}
                onFinishedPlaying={handleSongFinishedPlaying}
                loop={true}
            />
        </div>
    );
};

export default PlaySound;