exports.seed = knex => knex('users').insert([ // Inserts seed entries
    {
        id: 4, username: 'Cuong', fullname: 'Lee ', email: 'Cuong@gmail.com', password: '$2a$10$6UR93QfWPRDjxGEpCSLMTOiEO2A8QmCl9lWxEQr7YTZ/SmqageeKa', avatar: 'https://cdn1.iconfinder.com/data/icons/avatars-vol-2/140/_killer_clown-512.png'
    },
    {
        id: 5, username: 'Nhat', fullname: 'Lee ', email: 'Nhatus@gmail.com', password: '$2a$10$6UR93QfWPRDjxGEpCSLMTOiEO2A8QmCl9lWxEQr7YTZ/SmqageeKa', avatar: 'https://cdn1.iconfinder.com/data/icons/avatars-vol-2/140/_killer_clown-513.png'
    },
    {
        id: 6, username: 'Hung', fullname: 'Lee ', email: 'Hung@gmail.com', password: '$2a$10$6UR93QfWPRDjxGEpCSLMTOiEO2A8QmCl9lWxEQr7YTZ/SmqageeKa', avatar: 'https://cdn1.iconfinder.com/data/icons/avatars-vol-2/140/_killer_clown-514.png'
    },
    {
        id: 7, username: 'ichhoa', fullname: 'IH ', email: 'ichhoa@gmail.com', password: '$2a$10$cuWcGRN8.ecx9a1kO/wUo.H4x1tHHfM/8ZwfPR4YEik1viSqUNxGK', avatar: 'https://cdn1.iconfinder.com/data/icons/avatars-vol-2/140/_killer_clown-515.png'
    } // 123456789
]);
