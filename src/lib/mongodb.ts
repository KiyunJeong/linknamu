import { MongoClient } from "mongodb";

const globalForMongo = globalThis as unknown as {
  mongoClient?: Promise<MongoClient>;
};

export function getClient(): Promise<MongoClient> | null {
  const uri = process.env.MONGODB_URI;
  if (!uri) return null;
  if (!globalForMongo.mongoClient) {
    const promise = new MongoClient(uri).connect();
    // 연결 실패한 Promise가 캐시에 남아 이후 요청이 계속 실패하지 않도록 비운다
    promise.catch(() => {
      if (globalForMongo.mongoClient === promise) globalForMongo.mongoClient = undefined;
    });
    globalForMongo.mongoClient = promise;
  }
  return globalForMongo.mongoClient;
}
