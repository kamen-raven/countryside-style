export const PATH_API = {
  objects: {
    allObjects: process.env.NEXT_PUBLIC_DOMAIN + '/api/v1/objects/objects/',
    byID: process.env.NEXT_PUBLIC_DOMAIN + '/api/v1/objects/objects/',
  },
  villages: {
    allVillages: process.env.NEXT_PUBLIC_DOMAIN + '/api/v1/villages/',
    byID: process.env.NEXT_PUBLIC_DOMAIN + '/api/v1/villages/'
  },
  users: {
    allUsers: process.env.NEXT_PUBLIC_DOMAIN + '/api/v1/users/profile/',
    byID: process.env.NEXT_PUBLIC_DOMAIN + '/api/v1/users/profile/'
  },
  reviews: {
    allReviews: process.env.NEXT_PUBLIC_DOMAIN + '/api/v1/reviews/'
  },
  blog: {
    allPosts: process.env.NEXT_PUBLIC_DOMAIN + '/api/v1/blog/post/',
    byID: process.env.NEXT_PUBLIC_DOMAIN + '/api/v1/blog/post/'
  }
};
