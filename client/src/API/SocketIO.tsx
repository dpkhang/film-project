import {connect} from 'socket.io-client'

export function sendSocket (event:  string, data: any) {
    connect('http://localhost:8000').emit(event, data)
}

export function listenSocket (event: string) {
    return new Promise ((resolve, reject) => {
        connect('http://localhost:8000').on(event, (data, err)=>{
            if(data) {
                resolve(data)
            }
            else {
                reject(err)
            }
        })
    })
}