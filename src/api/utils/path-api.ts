export const PATH_API = {
  objects: {
    allObjects: process.env.NEXT_PUBLIC_DOMAIN + '/api/v1/objects/',
    byID: process.env.NEXT_PUBLIC_DOMAIN + '/api/v1/objects/',
    isLike: process.env.NEXT_PUBLIC_DOMAIN + '/api/v1/objects_islike/',
  },
  villages: {
    allVillages: process.env.NEXT_PUBLIC_DOMAIN + '/api/v1/villages/',
    byID: process.env.NEXT_PUBLIC_DOMAIN + '/api/v1/villages/',
    isLike: process.env.NEXT_PUBLIC_DOMAIN + '/api/v1/object_invillages/',
  },
  users: {
    allUsers: process.env.NEXT_PUBLIC_DOMAIN + '/api/v1/users/profile/',
    byID: process.env.NEXT_PUBLIC_DOMAIN + '/api/v1/users/profile/'
  },
  reviews: {
    allReviews: process.env.NEXT_PUBLIC_DOMAIN + '/api/v1/reviews/',
    byID: process.env.NEXT_PUBLIC_DOMAIN + '/api/v1/reviews/'
  },
  blog: {
    allPosts: process.env.NEXT_PUBLIC_DOMAIN + '/api/v1/post/',
    byID: process.env.NEXT_PUBLIC_DOMAIN + '/api/v1/post/'
  }
};
