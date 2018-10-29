''' testing mongodb '''
import pymongo

CLIENT = pymongo.MongoClient(host='localhost',
                             port=27017,
                             username='root',
                             password='toor')

DB = CLIENT.testing
POSTS = DB.posts
DATA = {
    'title': 'Python and MongoDB',
    'content': 'PyMongo is fun, you guys',
    'author': 'Scott'
}
RESULT = POSTS.insert_one(DATA)
print('One post: {0}'.format(RESULT.inserted_id))
