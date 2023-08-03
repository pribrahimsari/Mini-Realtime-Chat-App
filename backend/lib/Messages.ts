import shortid from "shortid";
import _ from "lodash";
import getRedisClient from "../clients/redis";

class Messages {
  private client: any;

  constructor() {
    this.client = getRedisClient();
  }

  upsert({ message }: { message: string }): void {
    this.client.hset(
      "messages",
      shortid.generate(),
      JSON.stringify({
        message,
        when: Date.now(),
      }),
      (err: Error | null) => {
        if (err) {
          console.error(err);
        }
      },
    );
  }

  list(callback: (messageList: any[]) => void): void {
    let messageList: any[] = [];

    this.client.hgetall("messages", (err: Error | null, messages: any) => {
      if (err) {
        console.error(err);
        return callback([]);
      }

      for (let message in messages) {
        messageList.push(JSON.parse(messages[message]));
      }

      return callback(_.orderBy(messageList, "when", "asc"));
    });
  }
}

export default new Messages();
