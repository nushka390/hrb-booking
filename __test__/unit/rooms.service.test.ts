// room.service.test.ts
import { jest, describe, expect, test } from '@jest/globals'

import {
  createroomsService,
  getroomsService,
  getroomsByIdService,
  updateroomsService,
  deleteroomsService
} from "../../src/rooms/rooms.service"; // Adjust the path as needed

import { rooms } from "../../src/drizzle/queries/schema";
import db from "../../src/drizzle/queries/db";

// Mock the db object and its methods
jest.mock("../../src/drizzle/queries/db", () => ({
  insert: jest.fn(() => ({
    values: jest.fn(() => ({
      returning: jest.fn(() => [{ room_id: 1, room_type: "Deluxe" }])
    }))
  })),
  select: jest.fn(() => ({
    from: jest.fn(() => ([{ room_id: 1, room_type: "Deluxe" }])),
    where: jest.fn(() => ([{ room_id: 1, room_type: "Deluxe" }]))
  })),
  update: jest.fn(() => ({
    set: jest.fn(() => ({
      where: jest.fn(() => ({
        returning: jest.fn(() => [{ room_id: 1, room_type: "Suite" }])
      }))
    }))
  })),
  delete: jest.fn(() => ({
    where: jest.fn(() => ({
      returning: jest.fn(() => [{ room_id: 1 }])
    }))
  }))
}));

describe("Room Service", () => {
  const roomMock = {
    room_id: 1,
    hotel_id: 1,
    created_at: new Date(),
    room_type: "Deluxe",
    price_per_night: "150.00",
    capacity: 2,
    amenities: "WiFi,TV",
    is_available: "true"
  };

  test("createroomsService should create a room", async () => {
    const result = await createroomsService(roomMock);
    expect(result).toHaveProperty("room_id", 1);
  });

  test("getroomsService should return all rooms", async () => {
    const result = await getroomsService();
    expect(Array.isArray(result)).toBe(true);
    expect(result[0]).toHaveProperty("room_id");
  });

  test("getroomsByIdService should return a room by ID", async () => {
    const result = await getroomsByIdService(1);
    expect(Array.isArray(result)).toBe(true);
    expect(result[0]).toHaveProperty("room_id", 1);
  });

  test("updateroomsService should update a room", async () => {
    const updatedData = {
      room_id: 1,
      hotel_id: 1,
      created_at: new Date(),
      room_type: "Suite",
      price_per_night: "150.00",
      capacity: 2,
      amenities: "WiFi,TV",
      is_available: "true"
    };
    const result = await updateroomsService(1, updatedData);
    expect(result).toBe("room updated successfully");
  });

  test("deleteroomsService should delete a room", async () => {
    const result = await deleteroomsService(1);
    expect(result).toHaveProperty("room_id", 1);
  });
});
