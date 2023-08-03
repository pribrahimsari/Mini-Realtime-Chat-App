import {createClient} from "redis";

const getRedisClient = () => {
	// const host = process.env.REDIS_HOST;
	// const port = process.env.REDIS_PORT;
	// const password = process.env.REDIS_PASS;

	return createClient(
	// 	{
	// 	host: process.env.REDIS_HOST,
	// 	port: process.env.REDIS_PORT,
	// 	password: process.env.REDIS_PASS,
	// 	db: 1,
	// }
	);
};

export default getRedisClient;