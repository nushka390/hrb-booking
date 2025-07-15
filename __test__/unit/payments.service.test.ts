// payment.service.test.ts
import { jest, describe, expect, test } from '@jest/globals'

import {
  createpaymentsService,
  getpaymentsService,
  getpaymentsByIdService,
  updatepaymentsService,
  deletepaymentsService
} from "../../src/payments/payments.service"; // Ensure this path and filename are correct

import { payments } from "../../src/drizzle/queries/schema";
import db from "../../src/drizzle/queries/db";

jest.mock("../../src/drizzle/queries/db", () => ({
  insert: jest.fn(() => ({
    values: jest.fn(() => ({
      returning: jest.fn(() => [{ paymentID: 1, amount: "150.00" }])
    }))
  })),
  select: jest.fn(() => ({
    from: jest.fn(() => ([{ paymentID: 1, amount: "150.00" }]))
  })),
  update: jest.fn(() => ({
    set: jest.fn(() => ({
      where: jest.fn(() => ({
        returning: jest.fn(() => [{ paymentID: 1, amount: "175.00" }])
      }))
    }))
  })),
  delete: jest.fn(() => ({
    where: jest.fn(() => ({
      returning: jest.fn(() => [{ paymentID: 1 }])
    }))
  })),
  query: {
    payments: {
      findFirst: jest.fn(() => ({ paymentID: 1, amount: "150.00" }))
    }
  }
}));

describe("Payment Service", () => {
  const paymentMock: {
    paymentID: number;
    bookingID: number;
    paymentDate: Date | null;
    amount: string;
    paymentMethod: string;
  } = {
    paymentID: 1,
    bookingID: 1,
    paymentDate: new Date(),
    amount: "150.00",
    paymentMethod: "card"
  };

  test("createpaymentsService should create a payment", async () => {
    const result = await createpaymentsService(paymentMock);
    expect(result).toHaveProperty("paymentID", 1);
  });

  test("getpaymentsService should return all payments", async () => {
    const result = await getpaymentsService();
    expect(Array.isArray(result)).toBe(true);
    expect(result[0]).toHaveProperty("paymentID", 1);
  });

  test("getpaymentsByIdService should return a payment by ID", async () => {
    const result = await getpaymentsByIdService(1);
    expect(result).toHaveProperty("paymentID", 1);
  });

    test("updatepaymentsService should update a payment", async () => {
    const updatedData = {
      paymentID: 1,
      bookingID: 1,
      paymentDate: new Date(),
      amount: "175.00",
      paymentMethod: "card"
    };
    const result = await updatepaymentsService(1, updatedData);
    expect(result).toBe("room updated successfully");
  });

  test("deletepaymentsService should delete a payment", async () => {
    const result = await deletepaymentsService(1);
    expect(result).toHaveProperty("paymentID", 1);
  });
});
