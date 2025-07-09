CREATE TABLE "booking_table" (
	"BookingID" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"room_id" integer NOT NULL,
	"check_in_date" timestamp NOT NULL,
	"booking_status" text DEFAULT 'pending',
	"totalAmount" numeric NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "hotels_table" (
	"hotel_id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"location" text NOT NULL,
	"address" varchar(255) NOT NULL,
	"phoneNumber" integer NOT NULL,
	"category" text,
	"rating" integer,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "payment_table" (
	"paymentID" serial PRIMARY KEY NOT NULL,
	"bookingID" integer NOT NULL,
	"paymentDate" timestamp DEFAULT now(),
	"amount" numeric NOT NULL,
	"payment method" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "rooms" (
	"room_id" serial PRIMARY KEY NOT NULL,
	"hotel_id" integer NOT NULL,
	"room_type" text NOT NULL,
	"price_per_night" numeric NOT NULL,
	"capacity" integer NOT NULL,
	"amenities" text,
	"is_available" text DEFAULT 'true',
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "customer_support_ticket" (
	"ticket_id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"subject" text NOT NULL,
	"description" text,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "user_table" (
	"userID" serial PRIMARY KEY NOT NULL,
	"firstName" text NOT NULL,
	"lastName" text NOT NULL,
	"password" varchar(256) NOT NULL,
	"phoneNumber" integer NOT NULL,
	"address" varchar(256),
	"role" text NOT NULL,
	"isverified" text DEFAULT 'false',
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "booking_table" ADD CONSTRAINT "booking_table_user_id_user_table_userID_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user_table"("userID") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "booking_table" ADD CONSTRAINT "booking_table_room_id_rooms_room_id_fk" FOREIGN KEY ("room_id") REFERENCES "public"."rooms"("room_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payment_table" ADD CONSTRAINT "payment_table_bookingID_booking_table_BookingID_fk" FOREIGN KEY ("bookingID") REFERENCES "public"."booking_table"("BookingID") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "rooms" ADD CONSTRAINT "rooms_hotel_id_hotels_table_hotel_id_fk" FOREIGN KEY ("hotel_id") REFERENCES "public"."hotels_table"("hotel_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "customer_support_ticket" ADD CONSTRAINT "customer_support_ticket_user_id_user_table_userID_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user_table"("userID") ON DELETE no action ON UPDATE no action;