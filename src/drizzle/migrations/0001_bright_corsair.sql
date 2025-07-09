ALTER TABLE "booking_table" DROP CONSTRAINT "booking_table_user_id_user_table_userID_fk";
--> statement-breakpoint
ALTER TABLE "booking_table" DROP CONSTRAINT "booking_table_room_id_rooms_room_id_fk";
--> statement-breakpoint
ALTER TABLE "payment_table" DROP CONSTRAINT "payment_table_bookingID_booking_table_BookingID_fk";
--> statement-breakpoint
ALTER TABLE "rooms" DROP CONSTRAINT "rooms_hotel_id_hotels_table_hotel_id_fk";
--> statement-breakpoint
ALTER TABLE "customer_support_ticket" DROP CONSTRAINT "customer_support_ticket_user_id_user_table_userID_fk";
--> statement-breakpoint
ALTER TABLE "booking_table" ADD CONSTRAINT "booking_table_user_id_user_table_userID_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user_table"("userID") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "booking_table" ADD CONSTRAINT "booking_table_room_id_rooms_room_id_fk" FOREIGN KEY ("room_id") REFERENCES "public"."rooms"("room_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payment_table" ADD CONSTRAINT "payment_table_bookingID_booking_table_BookingID_fk" FOREIGN KEY ("bookingID") REFERENCES "public"."booking_table"("BookingID") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "rooms" ADD CONSTRAINT "rooms_hotel_id_hotels_table_hotel_id_fk" FOREIGN KEY ("hotel_id") REFERENCES "public"."hotels_table"("hotel_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "customer_support_ticket" ADD CONSTRAINT "customer_support_ticket_user_id_user_table_userID_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user_table"("userID") ON DELETE cascade ON UPDATE no action;