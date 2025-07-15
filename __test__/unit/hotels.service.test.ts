// hotel.service.test.ts
import { jest, describe, expect, test } from '@jest/globals';

import {
  createhotelsService,
  gethotelsService,
  gethotelsByIdService,
  updatehotelsService,
  deletehotelsService
} from "../../src/hotels/hotels.service"; // Adjust the path

import { hotels } from "../../src/drizzle/queries/schema";
import db from "../../src/drizzle/queries/db";

// Mocking db module
jest.mock("../../src/drizzle/queries/db", () => ({
  insert: jest.fn(() => ({
    values: jest.fn(() => ({
      returning: jest.fn(() => [{ hotel_id: 1, name: "Hilton" }])
    }))
  })),
  select: jest.fn(() => ({
    from: jest.fn(() => ([{ hotel_id: 1, name: "Hilton" }]))
  })),
  update: jest.fn(() => ({
    set: jest.fn(() => ({
      where: jest.fn(() => ({
        returning: jest.fn(() => [{ hotel_id: 1, name: "Updated Hilton" }])
      }))
    }))
  })),
  delete: jest.fn(() => ({
    where: jest.fn(() => ({
      returning: jest.fn(() => [{ hotel_id: 1 }])
    }))
  })),
  query: {
    hotels: {
      findFirst: jest.fn(() => ({ hotel_id: 1, name: "Hilton" }))
    }
  }
}));

describe("Hotel Service", () => {
  const hotelMock = {
    hotel_id: 1,
    name: "Hilton",
    location: "NYC",
    address: "123 5th Ave",
    phoneNumber: 1234567890,
    category: "Luxury",
    rating: 5,
    created_at: new Date(),
    updated_at: new Date()
  };

  test("createhotelsService should create a hotel", async () => {
    const result = await createhotelsService(hotelMock);
    expect(result).toHaveProperty("hotel_id", 1);
  });

  test("gethotelsService should return all hotels", async () => {
    const result = await gethotelsService();
    expect(Array.isArray(result)).toBe(true);
    expect(result[0]).toHaveProperty("hotel_id", 1);
  });

  test("gethotelsByIdService should return a hotel by ID", async () => {
    const result = await gethotelsByIdService(1);
    expect(result).toHaveProperty("hotel_id", 1);
  });

  test("updatehotelsService should update a hotel", async () => {
    const updatedData = {
      hotel_id: 1,
      name: "Updated Hilton",
      location: "NYC",
      address: "123 5th Ave",
      phoneNumber: 1234567890,
      category: "Luxury",
      rating: 5,
      created_at: new Date(),
      updated_at: new Date()
    };
    const result = await updatehotelsService(1, updatedData);
    expect(result).toBe("room updated successfully");
  });

  test("deletehotelsService should delete a hotel", async () => {
    const result = await deletehotelsService(1);
    expect(result).toHaveProperty("hotel_id", 1);
  });
});

