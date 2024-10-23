/*interface AudioPlayer{

    audioVolumen: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolumen: 90,
    songDuration: 36,
    song: 'Mess',
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }

}
const song = 'New Song';

const{song:anotherSong,songDuration:duration, details} = audioPlayer;
const{author} = details;

console.log('song:',anotherSong);
console.log('Duration:',duration);
console.log('Author', author);*/


//const dbz: string[] = ['Goku,', 'Vegeta', 'Trunk'];

//const trunks = dbz[3] || 'No hay personaje';

const [ , , trunks = 'Not found']: string[] = ['Goku','Vegeta'];
console.error('Personaje 3:', trunks);



export{}