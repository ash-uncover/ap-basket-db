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

// USERS //

db.users.insertOne({
  id: "user1",
  firstName: "Titi",
  lastName: "Fifi",
  email: 'titi.fifi@yopmail.com',
})
db.users.insertOne({
  id: "user2",
  firstName: "Toto",
  lastName: "Roro",
  email: 'toto.roro@yopmail.com',
})

// SECTIONS //

db.sections.insertOne({
  id: "section1",
  name: "Basket",
})
db.sections.insertOne({
  id: "section2",
  name: "Football",
})

// MEMBERS //

db.members.insertOne({
  "id":"member11",
  "sectionId":"section1",
  "userId":"user1",
})
db.members.insertOne({
  "id":"member12",
  "sectionId":"section1",
  "userId":"user2",
})
db.members.insertOne({
  "id":"member21",
  "sectionId":"section2",
  "userId":"user1",
})

// SESSIONS //

db.sessions.insertOne({
  "id":"session11",
  "sectionId":"section1",
})
db.sessions.insertOne({
  "id":"session12",
  "sectionId":"section1",
})
