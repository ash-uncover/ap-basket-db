// ACCOUNTS //

db.accounts.insertOne({
  id: "account1",
  username: "a",
  password: "a",
  userId: "user1",
  type: "AP",
  status: "ACTIVE",
})
db.accounts.insertOne({
  id: "account2",
  username: "b",
  password: "b",
  userId: "user2",
  type: "AP",
  status: "ACTIVE",
})
db.accounts.insertOne({
  id: "account3",
  username: "c",
  password: "c",
  userId: "user3",
  type: "AP",
  status: "ACTIVE",
})
db.accounts.insertOne({
  id: "account4",
  username: "d",
  password: "d",
  userId: "user4",
  type: "AP",
  status: "ACTIVE",
})
db.accounts.insertOne({
  id: "account5",
  username: "e",
  password: "e",
  userId: "user5",
  type: "AP",
  status: "ACTIVE",
})
db.accounts.insertOne({
  id: "account6",
  username: "f",
  password: "f",
  userId: "user6",
  type: "AP",
  status: "ACTIVE",
})
db.accounts.insertOne({
  id: "account7",
  username: "g",
  password: "g",
  userId: "user7",
  type: "AP",
  status: "ACTIVE",
})
db.accounts.insertOne({
  id: "account8",
  username: "h",
  password: "h",
  userId: "user8",
  type: "AP",
  status: "ACTIVE",
})
db.accounts.insertOne({
  id: "account9",
  username: "i",
  password: "i",
  userId: "user9",
  type: "AP",
  status: "ACTIVE",
})
db.accounts.insertOne({
  id: "account10",
  username: "j",
  password: "j",
  userId: "user10",
  type: "AP",
  status: "ACTIVE",
})

// USERS //

db.users.insertOne({
  id: "user1",
  firstName: "Vincent",
  lastName: "Tîm",
  email: 'vincent.tim@yopmail.com',
  roles: ['admin']
})
db.users.insertOne({
  id: "user2",
  firstName: "Simon",
  lastName: "Perçavéssa",
  email: 'simon.percavessa@yopmail.com',
  roles: []
})
db.users.insertOne({
  id: "user3",
  firstName: "Roger-Jacques",
  lastName: "Ulet",
  email: 'roger.jacques.ulet@yopmail.com',
  roles: []
})
db.users.insertOne({
  id: "user4",
  firstName: "Lady",
  lastName: "Komandman",
  email: 'lady.komandman@yopmail.com',
  roles: []
})
db.users.insertOne({
  id: "user5",
  firstName: "Jesus",
  lastName: "Méjavalpa",
  email: 'jesus.mejavalapa@yopmail.com',
  roles: []
})
db.users.insertOne({
  id: "user6",
  firstName: "Sophie",
  lastName: "Fonfeque",
  email: 'sophie.fonfeque@yopmail.com',
  roles: []
})
db.users.insertOne({
  id: "user7",
  firstName: "Caume",
  lastName: "Guettesaume",
  email: 'caume.guettesaume@yopmail.com',
  roles: []
})
db.users.insertOne({
  id: "user8",
  firstName: "Camille",
  lastName: "Aunette",
  email: 'camille.aunette@yopmail.com',
  roles: []
})
db.users.insertOne({
  id: "user9",
  firstName: "Delphine",
  lastName: "Talaron",
  email: 'delphine.talaron@yopmail.com',
  roles: []
})
db.users.insertOne({
  id: "user10",
  firstName: "Justine",
  lastName: "Titegoute",
  email: 'justine.titegoute@yopmail.com',
  roles: []
})

// SECTIONS //

db.sections.insertOne({
  id: "section1",
  name: "Basket",
  description: "La section basket c'est vraiment des gens bien",
})
db.sections.insertOne({
  id: "section2",
  name: "Babyfoot",
  description: "Les pauses babyfoot, une alternative agréable au travail",
})
db.sections.insertOne({
  id: "section3",
  name: "La Section Vide",
  description: "Personne ici",
})

// MEMBERS //

db.members.insertOne({
  "id":"member1",
  "sectionId":"section1",
  "userId":"user1",
  "date": 1666246504449,
  "roles": ["sectionAdmin"]
})
db.members.insertOne({
  "id":"member2",
  "sectionId":"section1",
  "userId":"user2",
  "date": 1666246504449,
  "roles": ["sectionAdmin"]
})
db.members.insertOne({
  "id":"member3",
  "sectionId":"section1",
  "userId":"user3",
  "date": 1666246504449,
  "roles": []
})
db.members.insertOne({
  "id":"member4",
  "sectionId":"section1",
  "userId":"user4",
  "date": 1666246504449,
  "roles": []
})
db.members.insertOne({
  "id":"member5",
  "sectionId":"section1",
  "userId":"user5",
  "date": 1666246504449,
  "roles": []
})
db.members.insertOne({
  "id":"member6",
  "sectionId":"section1",
  "userId":"user6",
  "date": 1666246504449,
  "roles": []
})
db.members.insertOne({
  "id":"member7",
  "sectionId":"section1",
  "userId":"user7",
  "date": 1666246504449,
  "roles": []
})
db.members.insertOne({
  "id":"member8",
  "sectionId":"section1",
  "userId":"user8",
  "date": 1666246504449,
  "roles": []
})
db.members.insertOne({
  "id":"member9",
  "sectionId":"section1",
  "userId":"user9",
  "date": 1666246504449,
  "roles": []
})

db.members.insertOne({
  "id":"member10",
  "sectionId":"section2",
  "userId":"user1",
  "date": 1666246504449,
  "roles": []
})
db.members.insertOne({
  "id":"member11",
  "sectionId":"section2",
  "userId":"user2",
  "date": 1666246504449,
  "roles": ["sectionAdmin"]
})

// SESSIONS //

db.sessions.insertOne({
  "id":"session1",
  "sectionId":"section1",
  "maxParticipants": 12,
  "date": 1666246704449,
  "status": "ACTIVE"
})
db.sessions.insertOne({
  "id":"session2",
  "sectionId":"section1",
  "maxParticipants": 10,
  "date": 1666246504449,
  "status": "CANCELED"
})
db.sessions.insertOne({
  "id":"session3",
  "sectionId":"section1",
  "maxParticipants": 12,
  "date": 1666246904449,
  "status": "ACTIVE"
})
db.sessions.insertOne({
  "id":"session4",
  "sectionId":"section1",
  "maxParticipants": 12,
  "date": 1868246904449,
  "status": "ACTIVE"
})
db.sessions.insertOne({
  "id":"session5",
  "sectionId":"section1",
  "maxParticipants": 8,
  "date": 1969246904449,
  "status": "CANCELED"
})

// PARTICIPANTS //

db.participants.insertOne({
  "id":"participant1",
  "sessionId":"session5",
  "userId":"user1",
  "status":"ACCEPTED",
  "statusDate": 1666246704449
})
db.participants.insertOne({
  "id":"participant2",
  "sessionId":"session5",
  "userId":"user2",
  "status":"ACCEPTED",
  "statusDate": 1666246904449,
})
db.participants.insertOne({
  "id":"participant3",
  "sessionId":"session5",
  "userId":"user3",
  "status":"DECLINED",
  "statusDate": 1666246904449,
})
db.participants.insertOne({
  "id":"participant4",
  "sessionId":"session5",
  "userId":"user5",
  "status":"DECLINED",
  "statusDate": 1666246704449
})


// PLACES //

db.places.insertOne({
  "id":"place1",
  "name":"Gymnase Marcel Cerdan",
  "description":"Gymnase de levallois, place du marché",
  "image":"http://toto.com",
})
db.places.insertOne({
  "id":"place2",
  "name":"Stade Dider Drogba",
  "description":"Stade foot foot municipale proche du train",
  "image":"http://toto.com",
})
db.places.insertOne({
  "id":"place3",
  "name":"Playground Rive de Seine",
  "description":"Terrain extérieur en bord de seine",
  "image":"http://toto.com",
})


// NEWS //

db.places.insertOne({
  "id":"place1",
  "name":"Gymnase Marcel Cerdan",
  "description":"Gymnase de levallois, place du marché",
  "image":"http://toto.com",
})
db.places.insertOne({
  "id":"place2",
  "name":"Stade Dider Drogba",
  "description":"Stade foot foot municipale proche du train",
  "image":"http://toto.com",
})
db.places.insertOne({
  "id":"place3",
  "name":"Playground Rive de Seine",
  "description":"Terrain extérieur en bord de seine",
  "image":"http://toto.com",
})