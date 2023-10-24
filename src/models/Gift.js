export class Gift {
    constructor(data) {
        this.url = data.url
        this.tag = data.tag
        this.id = data.id
        this.opened = data.opened
        this.createdAt = data.createdAt
        this.updatedAt = data.updatedAt
        this.creatorId = data.creatorId

    }
}

// const giftData = {
//     "_id": "65288c2f489f6c08ba05727b",
//     "tag": "Febby Fabber",
//     "url": "https://media1.giphy.com/media/tsX3YMWYzDPjAARfeg/giphy.gif?cid=ecf05e479d9q6zs8vy6q1etcldvc9c9bivxf63dqnsr2d9cm&ep=v1_gifs_gifId&rid=giphy.gif&ct=g",
//     "opened": true,
//     "creatorId": "6525c8e8c8328410bb726968",
//     "createdAt": "2023-10-13T00:15:43.962Z",
//     "updatedAt": "2023-10-13T03:57:24.684Z",
//     "__v": 0,
//     "id": "65288c2f489f6c08ba05727b"
// }