import {agent as supertest} from "supertest";
import { createServer } from "../server";

describe("server", () => {
  it("supertest check returns 200", async () => {
    await supertest(createServer())
      .get("/healthz")
      .expect(200)
      .then((res) => {
        expect(res.body.ok).toBe(true);
      });
  });

  it("message endpoint says hello", async () => {
    await supertest(createServer())
      .get("/message/zeasy")
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({ message: "hello zeasy" });
      });
  });
});
