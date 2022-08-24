# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bundle exec rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Event.destroy_all

demo = User.create(first_name: "demo", last_name: "test", email:"test@aio.com", password:"password")
freddy = User.create(first_name: "Freddy", last_name: "Rendon", email:"FreddyRendon@aio.com", password:"password")

event1 = Event(
                host_id: 2,
                category_id: 1,
                event_capacity: 500,
                event_title: "Electric Zoo Festival",
                event_body: "This is the biggest festival of the year in NYC.",
                location: "Randall's Island Park",
                event_start_date: 2022-09-02,
                event_end_date: 2022-09-04,
                event_start_time: 15:00:00,
                event_end_time: 23:00:00),

event2 = Event(
                id: 2,
                host_id: 1,
                title: "New York Yankees",
                description: "Dont miss out on this ultimate rivalry Boston Red Sox vs The New York Yankees",
                category_id: 2,
                event_start_date: 2022-09-02,
                event_end_date: 2022-09-02,
                event_start_time: 18:00:00,
                event_end_time: 20:00:00),

            
event2 = Event(
                id: 3,
                host_id: 3,
                title: "Korean BBQ",
                description: "Bringing an AYCE (All You Can Eat) K-BBQ experience",
                category_id: 3,
                event_start_date: 2022-09-02,
                event_end_date: 2022-09-02,
                event_start_time: 12:00:00,
                event_end_time: 23:00:00)