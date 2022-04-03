import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_LIVEPEER_API_KEY;

export async function create(name) {
    console.log('createStream')
    console.log('apiKey', apiKey)

    var streaming = await axios.get(`https://livepeer.com/api/stream?streamsonly=1`, {
        headers: {
            authorization: `Bearer ${apiKey}`,
        }
    })
    if (!streaming.data.map(x => x.name).includes(name)) {
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
    else
        return streaming.data.filter(x => x.name === name)[0];
}

export async function get(id) {
    var streaming = await axios.get(`https://livepeer.com/api/stream${id ? ('/' + id) : '?streamsonly=1'}`, {
        headers: {
            authorization: `Bearer ${apiKey}`,
        }
    })
    return streaming
}