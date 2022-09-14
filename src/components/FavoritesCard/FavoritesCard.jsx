import './FavoritesCard.css';

export default function FavoritesCard({ trackName, artworkUrl100, trackViewUrl, key }) {
    return (
        <div key={key}>
            <h1>{ trackName }</h1>
            <img src={artworkUrl100} />
            <a href={trackViewUrl} target={'_blank'}>See on Apple Music</a>
        </div>
    );
}