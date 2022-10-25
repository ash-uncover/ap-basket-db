db.dropDatabase()

db.accounts.drop()
db.accounts.createIndex({"id": 1}, {"unique": true})

db.users.drop()
db.users.createIndex({"id": 1}, {"unique": true})

db.sections.drop()
db.sections.createIndex({"id": 1}, {"unique": true})

db.members.drop()
db.members.createIndex({"id": 1}, {"unique": true})

db.sessions.drop()
db.sessions.createIndex({"id": 1}, {"unique": true})

db.participants.drop()
db.participants.createIndex({"id": 1}, {"unique": true})

