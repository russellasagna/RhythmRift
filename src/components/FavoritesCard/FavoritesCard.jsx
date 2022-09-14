import './FavoritesCard.css';

export default function FavoritesCard({ trackName, artistName, artworkUrl100, trackViewUrl, key }) {
    return (
        <div key={key}>
            <h1>{ trackName }</h1>
            <h2>{ artistName }</h2>
            <img src={artworkUrl100} />
            <a href={trackViewUrl} target={'_blank'}>See on Apple Music</a>
        </div>
    );
}