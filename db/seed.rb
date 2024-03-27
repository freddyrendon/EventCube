# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bundle exec rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Event.destroy_all
puts "destroying all Events"
User.destroy_all
puts "destroying all Users"


demo = User.create!(first_name: "demo", last_name: "test", email:"demo@user.com", password:"demouser")
freddy = User.create!(first_name: "Freddy", last_name: "Rendon", email:"FreddyRendon@aio.com", password:"password")



Event.create!(
                host_id: demo.id,
                category_id: 1,
                event_title: "Electric Zoo Festival",
                event_body: "This is the biggest festival of the year in NYC.",
                location: "Randall's Island Park",
                event_start_date: "2022-09-02",
                event_start_time: "15:00:00",
                # photo: "https://www.billboard.com/wp-content/uploads/media/ezoo-atmosphere-2019-billboard-1548.jpg")
)

Event.create!(
                host_id: demo.id,
                category_id: 2,
                event_title: "New York Yankees",
                event_body: "Dont miss out on this ultimate rivalry Boston Red Sox vs The New York Yankees",
                location: "The Bronx, NY",
                event_start_date: "2022-09-02",
                event_start_time: "18-00-00")

            
Event.create!(
                host_id: demo.id,
                category_id: 3,
                event_title: "Wonder Pig Korean BBQ",
                event_body: "Bringing an AYCE (All You Can Eat) K-BBQ experience",
                location: "LIC, Queens",
                event_start_date: "2022-09-02",
                event_start_time: "12:00:00")

Event.create!(
                host_id: demo.id,
                category_id: 1,
                event_title: "Bad Bunny Baby",
                event_body: "Picante picante como un habanero!",
                location: "Queens, NY",
                event_start_date: "2022-09-05",
                event_start_time: "12:00:00")

Event.create!(
                host_id: demo.id,
                category_id: 4,
                event_title: "230 5th rooftop",
                event_body: "Dance the night away",
                location: "Manhattan, NY",
                event_start_date: "2022-09-12",
                event_start_time: "12:00:00")

Event.create!(
                host_id: demo.id,
                category_id: 3,
                event_title: "Williamsburg Bites Brooklyn Food Tour",
                event_body: "Explore and taste your way through Brooklyn",
                location: "Brooklyn, NY",
                event_start_date: "2022-09-08",
                event_start_time: "12:00:00")

Event.create!(
                host_id: demo.id,
                category_id: 1,
                event_title: "Rammstein",
                event_body: "du...du hast...du hast mich",
                location: "East Rutherford, NJ",
                event_start_date: "2022-09-11",
                event_start_time: "12:00:00")


Event.create!(
                host_id: demo.id,
                category_id: 2,
                event_title: "rpm raceway",
                event_body: "RPM Raceway is the ultimate all-electric indoor go-kart",
                location: "East Farmingdale, New York",
                event_start_date: "2022-09-02",
                event_start_time: "12:00:00")

Event.create!(
                host_id: demo.id,
                category_id: 4,
                event_title: "Mr purple",
                event_body: "On the Hotel Indigo's 15th floor",
                location: "Manhattan, NY",
                event_start_date: "2022-09-01",
                event_start_time: "12:00:00"
            )


            ## img filed seed to events 
