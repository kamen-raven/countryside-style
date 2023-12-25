export const PATH_API = {
  character: {
    getAll: process.env.NEXT_LOCAL_DOMAIN + '/api/character',
    getById: process.env.NEXT_LOCAL_DOMAIN + '/api/character/',
    currentPage: process.env.NEXT_LOCAL_DOMAIN + '/api/character/?page='
  },
  location: {
    getAll: process.env.NEXT_LOCAL_DOMAIN + '/api/location',
    getById: process.env.NEXT_LOCAL_DOMAIN + '/api/location/',
  },
  episode: {
    getAll: process.env.NEXT_LOCAL_DOMAIN + '/api/episode',
    getById: process.env.NEXT_LOCAL_DOMAIN + '/api/episode/',
  }
};
