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

event1 = Event.create(
                host_id: 2,
                category_id: 1,
                event_capacity: 500,
                event_title: "Electric Zoo Festival",
                event_body: "This is the biggest festival of the year in NYC.",
                location: "Randall's Island Park",
                event_start_date: "2022-09-02",
                event_end_date: "2022-09-04",
                event_start_time: "15:00:00",
                event_end_time: "23:00:00"),

event2 = Event.create(
                host_id: 1,
                event_capacity: 250,
                event_title: "New York Yankees",
                event_body: "Dont miss out on this ultimate rivalry Boston Red Sox vs The New York Yankees",
                location: "The Bronx, NY",
                category_id: 2,
                event_start_date: "2022-09-02",
                event_end_date: "2022-09-02",
                event_start_time: "18-00-00",
                event_end_time: "20-00-00"),

            
event3 = Event.create(
                host_id: 3,
                event_capacity: 100,
                event_title: "Wonder Pig Korean BBQ",
                event_body: "Bringing an AYCE (All You Can Eat) K-BBQ experience",
                location: "LIC, Queens",
                category_id: 3,
                event_start_date: "2022-09-02",
                event_end_date: "2022-09-02",
                event_start_time: "12:00:00",
                event_end_time: "23:00:00"),

event4 = Event.create(
                host_id: 4,
                event_capacity: 300,
                event_title: "Bad Bunny Baby",
                event_body: "Picante picante como un habanero!",
                location: "Queens, NY",
                category_id: 1,
                event_start_date: "2022-09-05",
                event_end_date: "2022-09-05",
                event_start_time: "12:00:00",
                event_end_time: "23:00:00"),

event6 = Event.create(
                host_id: 6,
                event_capacity: 100,
                event_title: "230 5th rooftop",
                event_body: "Dance the night away",
                location: "Manhattan, NY",
                category_id: 4,
                event_start_date: "2022-09-12",
                event_end_date: "2022-09-12",
                event_start_time: "12:00:00",
                event_end_time: "23:00:00")

event5 = Event.create(
                host_id: 5,
                event_capacity: 100,
                event_title: "Williamsburg Bites Brooklyn Food Tour",
                event_body: "Explore and taste your way through Brooklyn",
                location: "Brooklyn, NY",
                category_id: 3,
                event_start_date: "2022-09-08",
                event_end_date: "2022-09-08",
                event_start_time: "12:00:00",
                event_end_time: "23:00:00")

event7 = Event.create(
                host_id: 7,
                event_capacity: 100,
                event_title: "Rammstein",
                event_body: "du...du hast...du hast mich",
                location: "East Rutherford, NJ",
                category_id: 1,
                event_start_date: "2022-09-11",
                event_end_date: "2022-09-11",
                event_start_time: "12:00:00",
                event_end_time: "23:00:00")


event8 = Event.create(
                host_id: 8,
                event_capacity: 100,
                event_title: "rpm raceway",
                event_body: "RPM Raceway is the ultimate all-electric indoor go-kart",
                location: "East Farmingdale, New York",
                category_id: 2,
                event_start_date: "2022-09-02",
                event_end_date: "2022-09-02",
                event_start_time: "12:00:00",
                event_end_time: "23:00:00")                

event9 = Event.create(
                host_id: 9,
                event_capacity: 100,
                event_title: "Mr purple",
                event_body: "On the Hotel Indigo's 15th floor",
                location: "Manhattan, NY",
                category_id: 4,
                event_start_date: "2022-09-01",
                event_end_date: "2022-09-01",
                event_start_time: "12:00:00",
                event_end_time: "23:00:00")


            ## img filed seed to events 