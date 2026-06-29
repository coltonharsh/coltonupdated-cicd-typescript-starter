import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("returns null when no authorization header", () => {
    expect(getAPIKey({})).toBeNull();
  });

  test("returns null when authorization header is malformed", () => {
    expect(getAPIKey({ authorization: "Bearer token123" })).toBeNull();
  });

  test("returns null when authorization header has no key", () => {
    expect(getAPIKey({ authorization: "ApiKey" })).toBeNull();
  });

  test("returns the API key when header is valid", () => {
    expect(getAPIKey({ authorization: "ApiKey mysecretkey" })).toBe(
      "wrongkey",
    );
  });
});
