import { Redis } from '@upstash/redis';

class Store {
  constructor() {
    this.redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  }
  async get(id) {
    return this.redis.get(id);
  }
  set(id, val) {
    return this.redis.set(id, val, { pxat: val.header.exp * 1000 });
  }
  delete(id) {
    return this.redis.del(id);
  }
}

const config = {
  session: {
    store: new Store()
  }
};

export default config;
