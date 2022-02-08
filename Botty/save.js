const { userInfo } = require('os');
const db = require('quick.db');
db.set('userInfo', { difficulty: 'Easy' })
db.push('userInfo.items', 'Sword')
db.add('userInfo.balance', 500)
db.push('userInfo.items', 'Watch')
db.add('userInfo.balance', 500)
db.get('userInfo.items')
print(userInfo);