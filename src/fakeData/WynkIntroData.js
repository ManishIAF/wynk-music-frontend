import { Link } from "react-router-dom"

const WynkIntroData = [
    {
        title:'About Wynk Music',
        content:[<p>Wynk Music is a complete package that allows you free online music streaming, set
                    <Link to="https://wynk.in/airtel-hellotunes" style={{ textDecoration: 'none' }}>
                        <span className="arthover"> caller tunes</span>
                    </Link>
                    , listen to podcasts, download MP3 music offline, and much more! Since music is essentially the only thing that can truly understand
                    a person, we consistently offer our audience the ideal blend of MP3 Songs by their favourite artists and of versatile genres.
                </p>]
    },
    {
        title:'Play & Download FREE MP3 Songs in all languages',
        content:['One of the unique features of Wynk Music is that it offers users the ability to stream music in multiple regional languages, including Hindi, Punjabi, Bengali, Tamil, Telugu, and more. Also, users of the app can download MP3 songs for offline listening. This online music platform provides access to additional features such as offline listening, high-quality audio, and exclusive content.']
    },
    {
        title:'Wynk Music – One Stop Destination for Offline & Online Music!',
        content:['Wynk Music offers users access to a vast library of music, including Indian and international tracks across various genres like Bollywood, Punjabi, pop, rock, and more. We have made online music streaming simple, fun, and all about you! So, what’s the wait for, discover and listen to millions of songs, playlists, podcasts & download MP3 songs on any device including mobile for free exclusively on Wynk Music. Keep Wynking!']
    }
]

export default WynkIntroData;