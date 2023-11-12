import Users from './users';
import postImg1 from "../assets/msg11312646-494.jpg"
import postImg2 from '../assets/msg11312646-495.jpg'
export default [
    {
        image: postImg1,
        user: Users[0].username,
        title: 'title',
        caption: 'this is just a dummy caption for a dummy post in a dummy application! #neonlearn #reactnative',
        profile_img: Users[0].image,
        likes: '534',
        comments: [
            {
                user: Users[1].username,
                comment: 'this is just a dummy comment for a dummy post in a dummy application!'
            },
            {
                user: Users[3].username,
                comment: 'this is just a dummy comment for a dummy post in a dummy application!'
            },
        ]
    },
    {
        image: postImg2,
        user: Users[1].username,
        title: 'title',
        caption: 'this is just a dummy caption for a dummy post in a dummy application! #neonlearn #reactnative',
        profile_img: Users[1].image,
        likes: '744',
        comments: [
            {
                user: Users[2].username,
                comments: 'comment'
            },
        ]
    },
]