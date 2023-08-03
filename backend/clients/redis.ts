const redis = require("redis");

const getRedisClient = () => redis.createClient();

export default getRedisClient;
