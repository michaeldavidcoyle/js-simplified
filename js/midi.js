const audioContext = new AudioContext();

const NOTE_DETAILS = [
    { note: "C", key: "z", frequency: 261.626, active: false },
    { note: "Db", key: "s", frequency: 277.183, active: false },
    { note: "D", key: "x", frequency: 293.665, active: false },
    { note: "Eb", key: "d", frequency: 311.127, active: false },
    { note: "E", key: "c", frequency: 329.628, active: false },
    { note: "F", key: "v", frequency: 349.228, active: false },
    { note: "Gb", key: "g", frequency: 369.994, active: false },
    { note: "G", key: "b", frequency: 391.995, active: false },
    { note: "Ab", key: "h", frequency: 415.305, active: false },
    { note: "A", key: "n", frequency: 440, active: false },
    { note: "Bb", key: "j", frequency: 466.164, active: false },
    { note: "B", key: "m", frequency: 493.883, active: false },
    { note: "C8", key: ",", frequency: 523.25, active: false }
];

document.addEventListener('keydown', event => {
    if (event.repeat) return;

    const noteDetail = getNoteDetail(event.key);

    if (noteDetail == null) return;

    // console.log(noteDetail);
    console.log(event);
    noteDetail.active = true;
    playNotes();
});

document.addEventListener('keyup', event => {
    const noteDetail = getNoteDetail(event.key);

    if (noteDetail == null) return;

    noteDetail.active = false;
    playNotes();
});

function getNoteDetail(keyboardKey) {
    // return NOTE_DETAILS.find(noteDetail => `Key${noteDetail.key}` === keyboardKey)
    return NOTE_DETAILS.find(noteDetail => noteDetail.key === keyboardKey)
}

function playNotes() {
    NOTE_DETAILS.forEach(noteDetail => {
        const keyElement = document.querySelector(`[data-note="${noteDetail.note}"]`);
        keyElement.classList.toggle('active', noteDetail.active);
        if (noteDetail.oscillator != null) {
            noteDetail.oscillator.stop();
            noteDetail.oscillator.disconnect();
        }
    });

    const activeNotes = NOTE_DETAILS.filter(note => note.active);
    const gain = 1 / activeNotes.length;
    activeNotes.forEach(note => {
        startNote(note, gain);
    });
}

function startNote(noteDetail, gain) {
    const gainNode = audioContext.createGain();
    gainNode.gain.value = gain;
    const oscillator = audioContext.createOscillator();
    oscillator.frequency.value = noteDetail.frequency;
    oscillator.type = 'sine';
    oscillator.connect(audioContext.destination);
    oscillator.start();
    noteDetail.oscillator = oscillator;
}