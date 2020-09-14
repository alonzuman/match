import faker from 'faker'
import { db } from '../firebase'

export const seedUsers = async () => {
  for (let i = 0;i < 10; i++) {
    let dummyUser = {
      dateCreated: Date.now(),
      id: faker.random.uuid(),
      email: faker.internet.email(),
      user: {
        displayName: `${faker.name.firstName()} ${faker.name.lastName()}`,
        phone: faker.phone.phoneNumber(),
        photoURL: faker.internet.avatar(),
        gender: i % 2 === 0 ? 'female' : 'male',
        swipes: {
          right: i % 2 === 0 ? ['9z25nsxrX0cD7M6NEnWCoBpusBW2'] : [],
          left: []
        }
      }
    }
    dummyUser.user.id = dummyUser.id
    await db.collection('users').doc(dummyUser.id).set(dummyUser)
  }
}
