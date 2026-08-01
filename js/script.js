const busData=[
    {
        id:"201",
        busNumber:"201",
        route:"city center to airport",
        source:"city center",
        destination:"Airport",
        currentStop:"Main street",
        nextStop:"VIP Road",
        departureTime:"10:30AM",
        arrival:"11:15AM",
        platform:"platform A",
        etaMinutes:5,
        status:"on time",
        drivername:"rahul sharma",
        availableseats:14,
        totalSeat:40,
        frequency:"Every 10 minutes"

    },

    {
        id: "201",
        busNumber: "201",
        route: "City Center 1 to Airport",
        source: "City Center 1",
        destination: "Airport",
        currentStop: "Main Street",
        nextStop: "VIP Road",
        departureTime: "10:30 AM",
        arrival: "11:15 AM",
        platform: "Platform A",
        etaMinutes: 5,
        status: "On Time",
        driverName: "Rahul Sharma",
        availableSeats: 14,
        totalSeats: 40,
        frequency: "Every 15 Minutes"
    },

    {
        id: "115",
        busNumber: "115",
        route: "Patuli to Ultadanga",
        source: "Patuli",
        destination: "Ultadanga",
        currentStop: "Ballygunge",
        nextStop: "Park Circus",
        departureTime: "09:45 AM",
        arrival: "10:40 AM",
        platform: "Platform B",
        etaMinutes: 8,
        status: "On Time",
        driverName: "Amit Das",
        availableSeats: 10,
        totalSeats: 40,
        frequency: "Every 20 Minutes"
    },

    {
        id: "78",
        busNumber: "78",
        route: "Jadavpur University to Garia Station",
        source: "Jadavpur University",
        destination: "Garia Station",
        currentStop: "8B Bus Stand",
        nextStop: "Baghajatin",
        departureTime: "11:00 AM",
        arrival: "11:35 AM",
        platform: "Platform C",
        etaMinutes: 3,
        status: "Running",
        driverName: "Sourav Ghosh",
        availableSeats: 18,
        totalSeats: 40,
        frequency: "Every 10 Minutes"
    },

    {
        id: "42",
        busNumber: "42",
        route: "Behala to Ruby Hospital",
        source: "Behala",
        destination: "Ruby Hospital",
        currentStop: "Taratala",
        nextStop: "Kalighat",
        departureTime: "01:15 PM",
        arrival: "02:05 PM",
        platform: "Platform D",
        etaMinutes: 12,
        status: "Delayed",
        driverName: "Subrata Roy",
        availableSeats: 20,
        totalSeats: 40,
        frequency: "Every 30 Minutes"
    },

    {
        id: "305",
        busNumber: "305",
        route: "Metro Polyton to Chandni Market",
        source: "Metro Polyton",
        destination: "Chandni Market",
        currentStop: "Esplanade",
        nextStop: "Central Metro",
        departureTime: "03:20 PM",
        arrival: "04:00 PM",
        platform: "Platform E",
        etaMinutes: 6,
        status: "On Time",
        driverName: "Prasenjit Paul",
        availableSeats: 16,
        totalSeats: 40,
        frequency: "Every 15 Minutes"
    },

    {
        id: "88",
        busNumber: "88",
        route: "Barabazar to Mukundapur",
        source: "Barabazar",
        destination: "Mukundapur",
        currentStop: "Sealdah",
        nextStop: "Science City",
        departureTime: "04:10 PM",
        arrival: "05:05 PM",
        platform: "Platform F",
        etaMinutes: 9,
        status: "On Time",
        driverName: "Debashis Mondal",
        availableSeats: 12,
        totalSeats: 40,
        frequency: "Every 25 Minutes"
    }

];
function getStatusBadge(status){
    let badgeClass="badge-success";
    if(status === "Delayed") badgeClass = "badge-warning";
    if( status === "cancelled") badgeClass ="badge-danger";
    return`<span class ="badge $ {badgeClass}">${status}</span>`;
    
}
document.addEventListener("DOMContentLoaded",()=>{
    initMobileMenu();
    initLiveClock();
    initFAQAccordion();
    rederLiveBusStatusTable();
    rederBusScheduleTable();
    startLivesStatusSimulation();
});

function initMobileMenu(){
    const menuBtn = document.getElementById("mobileMenuBtn");
    const navlinks = document.getElementById("navLinks");
    if(menuBtn && navlinks){
        menuBtn.addEventListener("click",() =>{
            navlinks.classList.toggle("show");
        });
    }
}