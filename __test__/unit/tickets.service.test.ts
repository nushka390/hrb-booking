// ticket.service.test.ts
import { jest, describe, expect, test } from '@jest/globals'
import {
  createticketsService,
  getticketsService,
  getticketsByIdService,
  updateticketsService,
  deleteticketsService
} from "../../src/tickets/tickets.service"; // Adjust the path if needed

import { tickets } from "../../src/drizzle/queries/schema";
import db from "../../src/drizzle/queries/db";

// Mock the db object and its relevant methods
jest.mock("../../src/drizzle/queries/db", () => ({
  insert: jest.fn(() => ({
    values: jest.fn(() => ({
      returning: jest.fn(() => [{ ticket_id: 1, subject: "Issue with booking" }])
    }))
  })),
  select: jest.fn(() => ({
    from: jest.fn(() => ([{ ticket_id: 1, subject: "Issue with booking" }]))
  })),
  update: jest.fn(() => ({
    set: jest.fn(() => ({
      where: jest.fn(() => ({
        returning: jest.fn(() => [{ ticket_id: 1, subject: "Updated Subject" }])
      }))
    }))
  })),
  delete: jest.fn(() => ({
    where: jest.fn(() => ({
      returning: jest.fn(() => [{ ticket_id: 1 }])
    }))
  })),
  query: {
    tickets: {
      findFirst: jest.fn(() => ({ ticket_id: 1, subject: "Issue with booking" }))
    }
  }
}));

describe("Ticket Service", () => {
  const ticketMock: {
    ticket_id: number;
    user_id: number;
    subject: string;
    description: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  } = {
    ticket_id: 1,
    user_id: 1,
    subject: "Issue with booking",
    description: "The room I booked was unavailable.",
    created_at: new Date(),
    updated_at: new Date()
  };

  test("createticketsService should create a ticket", async () => {
    const result = await createticketsService(ticketMock);
    expect(result).toHaveProperty("ticket_id", 1);
  });

  test("getticketsService should return all tickets", async () => {
    const result = await getticketsService();
    expect(Array.isArray(result)).toBe(true);
    expect(result[0]).toHaveProperty("ticket_id", 1);
  });

  test("getticketsByIdService should return a ticket by ID", async () => {
    const result = await getticketsByIdService(1);
    expect(result).toHaveProperty("ticket_id", 1);
  });

  test("updateticketsService should update a ticket", async () => {
    const updatedData = {
      ticket_id: 1,
      user_id: 1,
      subject: "Updated Subject",
      description: "The room I booked was unavailable.",
      created_at: new Date(),
      updated_at: new Date()
    };

    const result = await updateticketsService(1, updatedData);
    expect(result).toBe("room updated successfully");
  });

  test("deleteticketsService should delete a ticket", async () => {
    const result = await deleteticketsService(1);
    expect(result).toHaveProperty("ticket_id", 1);
  });
});
