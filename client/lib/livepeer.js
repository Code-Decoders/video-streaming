import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_LIVEPEER_API_KEY;

export async function create(name) {
    console.log('createStream')
    console.log('apiKey', apiKey)
    return await axios.post('https://livepeer.com/api/stream', {
        "name": name,
        "profiles": [
            {
                "name": "720p",
                "bitrate": 2000000,
                "fps": 30,
                "width": 1280,
                "height": 720
            },
            {
                "name": "480p",
                "bitrate": 1000000,
                "fps": 30,
                "width": 854,
                "height": 480
            },
            {
                "name": "360p",
                "bitrate": 500000,
                "fps": 30,
                "width": 640,
                "height": 360
            }
        ]
    }, {
        headers: {
            authorization: `Bearer ${apiKey}`,
        }
    });
}