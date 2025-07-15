// __test__/unit/bookings.service.test.ts

import { jest, describe, expect, test } from '@jest/globals';

import {
  createbookingsService,
  getAllbookingsService,
  getbookingsByIdService,
  updatebookingsService,
  deletebookingsService,
} from '../../src/bookings/bookings.service'; 

import { bookings } from '../../src/drizzle/queries/schema';


jest.mock('../../src/drizzle/queries/db', () => {
  
  const mockReturningInsert = jest.fn(() => Promise.resolve([{ BookingID: 1 }]));
  const mockValuesInsert = jest.fn(() => ({ returning: mockReturningInsert }));
  const mockInsert = jest.fn(() => ({ values: mockValuesInsert }));

  // Mock select().from() returning Promise resolving to array of bookings
  const mockFromSelect = jest.fn(() => Promise.resolve([{ BookingID: 1 }]));
  const mockSelect = jest.fn(() => ({ from: mockFromSelect }));

  // Mock update().set().where().returning()
  const mockReturningUpdate = jest.fn(() => Promise.resolve([{ BookingID: 1, booking_status: 'confirmed' }]));
  const mockWhereUpdate = jest.fn(() => ({ returning: mockReturningUpdate }));
  const mockSetUpdate = jest.fn(() => ({ where: mockWhereUpdate }));
  const mockUpdate = jest.fn(() => ({ set: mockSetUpdate }));

  // Mock delete().where().returning()
  const mockReturningDelete = jest.fn(() => Promise.resolve([{ BookingID: 1 }]));
  const mockWhereDelete = jest.fn(() => ({ returning: mockReturningDelete }));
  const mockDelete = jest.fn(() => ({ where: mockWhereDelete }));

  return {
    insert: mockInsert,
    select: mockSelect,
    update: mockUpdate,
    delete: mockDelete,
  };
});

describe('Booking Service', () => {
  const bookingData = {
    user_id: 1,
    room_id: 1,
    check_in_date: new Date(),
    totalAmount: '100.00',
  } as typeof bookings.$inferInsert;

  test('createbookingsService creates a booking', async () => {
    const result = await createbookingsService(bookingData);
    expect(result).toHaveProperty('BookingID', 1);
  });

  test('getAllbookingsService returns bookings', async () => {
    const result = await getAllbookingsService();
    expect(Array.isArray(result)).toBe(true);
    expect(result[0]).toHaveProperty('BookingID', 1);
  });

  test('getbookingsByIdService returns a booking by ID', async () => {
    // You might want to adjust the mock or service for this, 
    // but assuming it uses select().from().where() chain similar to others.
    // Here we'll just call the actual service and expect a result.
    const result = await getbookingsByIdService(1);
    expect(result).toHaveProperty('BookingID', 1);
  });

  test('updatebookingsService updates a booking', async () => {
    const updatedData = { booking_status: 'confirmed' };
    const result = await updatebookingsService(1, updatedData);
    expect(result).toHaveProperty('booking_status', 'confirmed');
  });

  test('deletebookingsService deletes a booking', async () => {
    const result = await deletebookingsService(1);
    expect(result).toHaveProperty('BookingID', 1);
  });
});
