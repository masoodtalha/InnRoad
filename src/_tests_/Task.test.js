import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../actions'
import * as types from '../constants'
import fetchMock from 'fetch-mock'
//import expect from 'expect' // You can use any testing library
const payload = [{
    "Items": [{
        "ItemId": 1,
        "ItemTitle": "Tape Chart: Usability Improvements",
        "Type": "UI",
        "Description": "1. Clean up existing drag and drop logic to avoid user confusion. 2. Ability to drag and drop to new dates and/or room class and have system calcuate new price before user confirms3. Ability to extend or shorten an existing reservation on tape chart4. ",
        "Priority": 1,
        "Version": 0,
        "MockUpLink": "\"Mocks for tape chart will be change slightly but you can see general direction here:https://invis.io/EJ9MNRKXK#/130112002_Chalk_Extend1\"",
        "BucketId": 1,
        "OrderInLane": 1
      },
      {
        "ItemId": 2,
        "ItemTitle": "Tape Chart - Sort by Room Number",
        "Type": "UI",
        "Description": "Allow user to sort tape chart by room number (and show room class as column).  Currently the tape chart is grouped by room class and sorted by room number within room class, but sorting by room number allows hotel manager to more easily see exactly where ",
        "Priority": 2,
        "Version": 0,
        "MockUpLink": "Pending",
        "BucketId": 1,
        "OrderInLane": 2
      },
      {
        "ItemId": 3,
        "ItemTitle": "Reservation Search Usability Improvements",
        "Type": "Feature + UI",
        "Description": "- Combine basic search into a single search field\n- Allow user to search by room number\n- Add columns/data to result table",
        "Priority": 4,
        "Version": 0,
        "MockUpLink": "Pending",
        "BucketId": 1,
        "OrderInLane": 3
      },
      {
        "ItemId": 4,
        "ItemTitle": "Tape Chart - Add Room Status ",
        "Type": "UI",
        "Description": "Add Clean/Dirty indicator to each room on tape chart",
        "Priority": 5,
        "Version": 0,
        "MockUpLink": "Pending",
        "BucketId": 1,
        "OrderInLane": 5
      },
      {
        "ItemId": 44,
        "ItemTitle": "Email delivery log",
        "Type": "Feature",
        "Description": "1. Build a page that allows a user to view a list of all emails that have been sent from the system for their property including ability to search/filter by date, reservation id, guest name and email address.\n2. Page allows user to access a copy of the em",
        "Priority": 29,
        "Version": 0,
        "MockUpLink": "Pending",
        "BucketId": 1,
        "OrderInLane": 8
      },
      {
        "ItemId": 73,
        "ItemTitle": "Tape Chart - Rate Change",
        "Type": "Tape Chart",
        "Description": "Allow user to edit rack rate (using existing rate override feature) directly from tape chart.\n",
        "Priority": 14,
        "Version": 0,
        "MockUpLink": "Pending",
        "BucketId": 1,
        "OrderInLane": 7
      },
      {
        "ItemId": 74,
        "ItemTitle": "Events",
        "Type": "New Feature",
        "Description": "Allow user to create list of \"events\" in system (i.e. Car Show), with a start and end date and then display these events in tape chart.",
        "Priority": 15,
        "Version": 0,
        "MockUpLink": "Pending",
        "BucketId": 1,
        "OrderInLane": 6
      },
      {
        "ItemId": 75,
        "ItemTitle": "Tape Chart - Assign Unassigned",
        "Type": "Tape Chart",
        "Description": "Assign \"Unassigned\" reservations directly from Tape Chart.  We would largely re-use parking lot UI for this.",
        "Priority": 17,
        "Version": 0,
        "MockUpLink": "Pending",
        "BucketId": 1,
        "OrderInLane": 4
      },
      {
        "ItemId": 76,
        "ItemTitle": "Move reservation to another property (for a multi property client)",
        "Type": "New Feature",
        "Description": "Our system currently prevents a multi property client from moving a reservation from one property to another.  We would like to allow for this, so a client could move a reservation to one of their other nearby properties.",
        "Priority": 18,
        "Version": 0,
        "MockUpLink": "Pending",
        "BucketId": 1,
        "OrderInLane": 11
      },
      {
        "ItemId": 78,
        "ItemTitle": "Basic Stock Mgmt",
        "Type": "New Feature",
        "Description": "We have ability today to create items/add ons.  This feature would be to add fields for:\n1. In Stock (decrements each time the item is added to a reservation.\n2. Reorder Threshold (When in stock hits this number send alert to client)\n3. Stop Sell Threshol",
        "Priority": 20,
        "Version": 0,
        "MockUpLink": "Pending",
        "BucketId": 1,
        "OrderInLane": 9
      },
      {
        "ItemId": 79,
        "ItemTitle": "Custom Fields",
        "Type": "Reservations",
        "Description": "Ability to create custom fields (i.e. Allergy, License Plate, etc) and then store information in these fields for a given reservation.  Ideally would make these available on new booking engine",
        "Priority": 26,
        "Version": 0,
        "MockUpLink": "Pending",
        "BucketId": 1,
        "OrderInLane": 10
      }
    ],
    "BucketId": 1,
    "Description": "Small Features ",
    "OrderInVertical": 18
  },
  {
    "Items": [{
        "ItemId": 5,
        "ItemTitle": "End to End Booking Process",
        "Type": "Replicate current feature",
        "Description": "Allows a consumer to browse a clients hotel availability and book a room on both destop and mobile devices",
        "Priority": 1,
        "Version": 1,
        "MockUpLink": "See dev environment for latest:\nhttp://kembledev.client.inrd.io/",
        "BucketId": 2,
        "OrderInLane": 4
      },
      {
        "ItemId": 6,
        "ItemTitle": "Procurement of BookingEngine",
        "Type": "New Feature",
        "Description": "Enable implementation to generate a booking engine for a client",
        "Priority": 2,
        "Version": 1,
        "MockUpLink": "Accessed from innSupport",
        "BucketId": 2,
        "OrderInLane": 8
      },
      {
        "ItemId": 7,
        "ItemTitle": "Configuration Page",
        "Type": "New Feature",
        "Description": "Tool to configure basic styles and settings of a client's booking engine that can be used by the client as well as innRoad support team",
        "Priority": 3,
        "Version": 1,
        "MockUpLink": "This page is password protected.  In order to access it, log into dev environment (http://dev.icn.inrd.io) with your innroad credentials, select kemble from client selector (gear icon on right), fo to set up -->  properties --> options --> configure booki",
        "BucketId": 2,
        "OrderInLane": 6
      },
      {
        "ItemId": 8,
        "ItemTitle": "Language",
        "Type": "New Feature",
        "Description": "Allows consumer to view booking engine in supported language.  Note: this only applies to standard text.  User generated content will not be translated",
        "Priority": 4,
        "Version": 1,
        "MockUpLink": "See dev environment for latest:\nhttp://kembledev.client.inrd.io/",
        "BucketId": 2,
        "OrderInLane": 5
      },
      {
        "ItemId": 9,
        "ItemTitle": "Guest Notes",
        "Type": "Replicate current feature",
        "Description": "Allow guest to enter a note when booking a reservationa and store this as a note on the reservation (into existing notes section)",
        "Priority": 5,
        "Version": 1,
        "MockUpLink": "https://invis.io/SUD4FCL3P#/258238394_Check-Out-Page-InstructionsOpen",
        "BucketId": 2,
        "OrderInLane": 3
      },
      {
        "ItemId": 10,
        "ItemTitle": "Availability Grid",
        "Type": "New Feature",
        "Description": "- Display a grid of each room class and calendar day to the prospective guest, including Availability, Rules and Rates per room class.\n- User can kick off booking process by selecting a room class, check in and check out date. This then takes them to the ",
        "Priority": 5,
        "Version": 2,
        "MockUpLink": "https://invis.io/WCAYVGHJ8#/224587154_Check_Out_Hover",
        "BucketId": 2,
        "OrderInLane": 9
      },
      {
        "ItemId": 11,
        "ItemTitle": "Availability Calendar",
        "Type": "Replicate current feature",
        "Description": "Update main calendar to show availability and rules for the overall property. This enables a user to better understand availability when selected a check in and check out date from the main calednar selector.",
        "Priority": 5,
        "Version": 2,
        "MockUpLink": "https://invis.io/SUD4FCL3P#/256664155_Homepage_Calendar-100",
        "BucketId": 2,
        "OrderInLane": 2
      },
      {
        "ItemId": 12,
        "ItemTitle": "Image Handling",
        "Type": "Replicate current feature",
        "Description": "Refactor the manner in which Booking Engine displays room class images, so that it can pull serve the images associated to a given room class.  Currently, the tech teaam has to manually copy the room class images from innCenter to some special location th",
        "Priority": 5.5,
        "Version": 2,
        "MockUpLink": "No changes to UI",
        "BucketId": 2,
        "OrderInLane": 1
      },
      {
        "ItemId": 13,
        "ItemTitle": "Scheduled Emails ",
        "Type": "Replicate current feature",
        "Description": "Update the method that is used by the new Booking Engine to send emails.  Currently, the solution was hacked in order to send a confirmation email and the system does not schedule any other emails for the reservation based on the client's email settings/t",
        "Priority": 5.5,
        "Version": 2,
        "MockUpLink": "No changes to UI",
        "BucketId": 2,
        "OrderInLane": 7
      },
      {
        "ItemId": 14,
        "ItemTitle": "Group Booking",
        "Type": "Replicate current feature",
        "Description": "- Allow a prospective guest to search for rooms with a \"Group Number/Promo Code\" and see preferential pricing for that Group\n- When reservation is booked it is linked to the Group Block",
        "Priority": 6,
        "Version": 2,
        "MockUpLink": "Pending:  UI will allow user to enter group number and pick up one of the blocked rooms for the entered group",
        "BucketId": 2,
        "OrderInLane": 12
      },
      {
        "ItemId": 15,
        "ItemTitle": "Multi Room Booking",
        "Type": "New Feature",
        "Description": "- Ability for a guest to book multiple rooms from the booking engine.\n- We can store these as separate reservations in innCenter (we already do this when a guest books multiple rooms from an OTA) but guest would ideally only receive 1 confirmation email",
        "Priority": 7,
        "Version": 2,
        "MockUpLink": "Pending: UI will be very similar to Create reservation flow in v1.  However, the user will be able to specify the number of required rooms and then choose 1 or more room classes (i.e. add a quantity drop down to result set).\n",
        "BucketId": 2,
        "OrderInLane": 14
      },
      {
        "ItemId": 16,
        "ItemTitle": "Booking Widget for Corporate Site",
        "Type": "Replicate current feature",
        "Description": "Widget that can be placed on a clients corporate site, which allows their prospective guests to enter check in/out date and jump to innRoad powered Booking Engine.  Simply provide a basic HTML/CSS/JS snippet that client can grab from config page and add t",
        "Priority": 8,
        "Version": 2,
        "MockUpLink": "Pending:  HTML/CSS/JS generator for simple widget",
        "BucketId": 2,
        "OrderInLane": 13
      },
      {
        "ItemId": 17,
        "ItemTitle": "Price Check",
        "Type": "New Feature",
        "Description": "Widget that compares the hotels direct booking price vs. price for that hotel on OTAs, so that the user can be confident that they are getting the best price. (for first version we can get rates from innCenter for each source)",
        "Priority": 1,
        "Version": 0,
        "MockUpLink": "Pending",
        "BucketId": 2,
        "OrderInLane": 15
      },
      {
        "ItemId": 18,
        "ItemTitle": "Prevent Duplicate Guest Profiles",
        "Type": "New Feature",
        "Description": "If guest enters a first name, last name, email address, combination that matches exactly to a profile that already exists in innRoad, link the reservation to that profile",
        "Priority": 10,
        "Version": 0,
        "MockUpLink": "n/a",
        "BucketId": 2,
        "OrderInLane": 10
      },
      {
        "ItemId": 19,
        "ItemTitle": "Multi Property Booking Engine",
        "Type": "Replicate current feature",
        "Description": "Create multi property booking engine, where by a consumer can search for rooms across all properties for a given client",
        "Priority": 21,
        "Version": 0,
        "MockUpLink": "Pending",
        "BucketId": 2,
        "OrderInLane": 16
      },
      {
        "ItemId": 20,
        "ItemTitle": "Error Handling / Messages",
        "Type": "Error Handling",
        "Description": "Provide more clear messages to user so they understand why they are getting an error.\n\nExample 1:  if a guests search doesn't meet 3 night min restriction, instead of saying \"no availability\" display something like \"your stay dates don't meet the properti",
        "Priority": 30,
        "Version": 0,
        "MockUpLink": "n/a",
        "BucketId": 2,
        "OrderInLane": 11
      }
    ],
    "BucketId": 2,
    "Description": "Booking Engine",
    "OrderInVertical": 2
  },
  {
    "Items": [{
        "ItemId": 21,
        "ItemTitle": "Rate Grid UI",
        "Type": "UI Update",
        "Description": "Combines existing grid + blackouts screen + rules.  Allows user to view occupancy, rates, blackouts and rules for each rate plan (including derived rates) and day of the year.  ",
        "Priority": 1,
        "Version": 1,
        "MockUpLink": "https://invis.io/SFDG0VOJC#/254341256_RateGrid-100",
        "BucketId": 3,
        "OrderInLane": 1
      },
      {
        "ItemId": 22,
        "ItemTitle": "inline Edit Rates",
        "Type": "UI Update",
        "Description": "Adjust rates inline, from within the rate grid for 1 or more room classes, dates and a given rate plan",
        "Priority": 2,
        "Version": 1,
        "MockUpLink": "https://invis.io/SFDG0VOJC#/254558692_RateGrid-InlineEdit-100",
        "BucketId": 3,
        "OrderInLane": 2
      },
      {
        "ItemId": 23,
        "ItemTitle": "Bulk Update Rate",
        "Type": "New Feature",
        "Description": "Select a date range, day(s) of the week, room class(es) and/or source to mass change rate for selected criteria by a nominal or percentage increase/decrease.",
        "Priority": 2,
        "Version": 1,
        "MockUpLink": "https://invis.io/SFDG0VOJC#/254571953_RateGrid-UpdateRates-100",
        "BucketId": 3,
        "OrderInLane": 3
      },
      {
        "ItemId": 24,
        "ItemTitle": "Bulk Update Availability",
        "Type": "New Feature",
        "Description": "Select a date range, day(s) of the week, room class(es) and/or source, to mass change room availability across 1 or more distribution channels (i.e. don't sell on expedia during month of July)",
        "Priority": 3,
        "Version": 1,
        "MockUpLink": "https://invis.io/SFDG0VOJC#/254563795_RateGrid-UpdateAvailability-100",
        "BucketId": 3,
        "OrderInLane": 4
      },
      {
        "ItemId": 25,
        "ItemTitle": "Bulk Update Rules",
        "Type": "New Feature",
        "Description": "Select a date range, day(s) of the week, room class(es) and/or sources to mass change rules.  Rule types include: min stay. max stay, Adv Book min, Adv Book max, closed to arrival, closed to departure (i.e. Add 2 night minimum for ever Friday in summer mo",
        "Priority": 4,
        "Version": 1,
        "MockUpLink": "https://invis.io/SFDG0VOJC#/254558693_RateGrid-UpdateRule-100",
        "BucketId": 3,
        "OrderInLane": 5
      },
      {
        "ItemId": 26,
        "ItemTitle": "Rate Plan / Season Builder - Basic",
        "Type": "UI Update",
        "Description": "Wizard that allows a user to easily create a rate plan and seasons. \n- Associate room classes to seasons, and specific rates for each including setting max number of guests per room class and rate differences for additional adults and children in the room",
        "Priority": 5,
        "Version": 2,
        "MockUpLink": "https://invis.io/QACD1RQVZ#/235510110_Rates_BusyWeekend_First_Day-01",
        "BucketId": 3,
        "OrderInLane": 6
      },
      {
        "ItemId": 27,
        "ItemTitle": "Rate Plan / Season Builder - Derived Rates",
        "Type": "UI Update",
        "Description": "Create new rate plans that are derived off of existing rate plans (e.g. derived rate plan that is 10% off the Rack Rate Plan)",
        "Priority": 6,
        "Version": 2,
        "MockUpLink": "https://invis.io/QACD1RQVZ#/235510098_Dervied_Filled_Out-01",
        "BucketId": 3,
        "OrderInLane": 7
      },
      {
        "ItemId": 28,
        "ItemTitle": "Taxes and Fees",
        "Type": "UI + Feature",
        "Description": "- Update the UI for managing taxes and fees, and for associating them to ledgers\n- Allow fees to be added as a \"per stay\"  (single fee is added to reservation regardless of length of stay) component, \"per person\", \"per person per night\".\n- Allow fees per ",
        "Priority": 7,
        "Version": 2,
        "MockUpLink": "Pending",
        "BucketId": 3,
        "OrderInLane": 8
      },
      {
        "ItemId": 29,
        "ItemTitle": "Bundles",
        "Type": "UI Update",
        "Description": "Create rate plans that include the room plus addiitonal items, offered to the guest for a single price (e.g. The Romance Package that includes Room, chocolates, and wine). ",
        "Priority": 8,
        "Version": 2,
        "MockUpLink": "Pending",
        "BucketId": 3,
        "OrderInLane": 9
      },
      {
        "ItemId": 30,
        "ItemTitle": "Interval Rates",
        "Type": "UI Update",
        "Description": "Create rate plans and rates with stay intervals longer than 1 night (e.g. 1 week, 1 month, etc.). ",
        "Priority": 8,
        "Version": 2,
        "MockUpLink": "Pending",
        "BucketId": 3,
        "OrderInLane": 10
      },
      {
        "ItemId": 31,
        "ItemTitle": "Add-Ons",
        "Type": "UI Update",
        "Description": "Create add-on items for sale to guests (e.g. massages, bottles of wine, etc.) and associate them with rate plans so that they are available to add to a reservation when a guest books that plan",
        "Priority": 8,
        "Version": 2,
        "MockUpLink": "Pending",
        "BucketId": 3,
        "OrderInLane": 11
      },
      {
        "ItemId": 32,
        "ItemTitle": "Automatically Map Rate Plan to OTA's",
        "Type": "New Feature",
        "Description": "Adding rate plans to Expedia and Booking.com currently requires a manual mapping process. Directly connecting to the OTA's so that new rate plans can be automatically added would add a lot of business value to our clients and free up internal resources.",
        "Priority": 25,
        "Version": 0,
        "MockUpLink": "Pending",
        "BucketId": 3,
        "OrderInLane": 12
      }
    ],
    "BucketId": 3,
    "Description": "Rates",
    "OrderInVertical": 3
  },
  {
    "Items": [{
      "ItemId": 33,
      "ItemTitle": "innRoad becomes payment gateway",
      "Type": "Feature",
      "Description": "1.  innRoad becomes a payment platform that integrates directly to processors\n2.  Allows innroad to add payment platform as significant revenue stream.",
      "Priority": 35,
      "Version": 0,
      "MockUpLink": "n/a",
      "BucketId": 4,
      "OrderInLane": 1
    }],
    "BucketId": 4,
    "Description": "CC Gateway",
    "OrderInVertical": 4
  },
  {
    "Items": [{
      "ItemId": 34,
      "ItemTitle": "New Email Marketing module",
      "Type": "Feature",
      "Description": "Advanced Search\nMarketing Emails\nMail Merge Fields\nCampaign Analytics (Opens, Clicks, etc)\nEmail Templates\nSaved Searches",
      "Priority": 11,
      "Version": 0,
      "MockUpLink": "Pending",
      "BucketId": 5,
      "OrderInLane": 1
    }],
    "BucketId": 5,
    "Description": "CRM / Email Marketing",
    "OrderInVertical": 5
  },
  {
    "Items": [{
        "ItemId": 35,
        "ItemTitle": "Goal & Alert Settings",
        "Type": "New Feature",
        "Description": "Wizard helps customer set their goals for the year and create rules/thresholds at which point they would like to be notified.",
        "Priority": 1,
        "Version": 1,
        "MockUpLink": "https://invis.io/SFDG0VOJC#/279571119_Concept-7-Welcometoratealert-8",
        "BucketId": 6,
        "OrderInLane": 1
      },
      {
        "ItemId": 36,
        "ItemTitle": "Alerts",
        "Type": "New Feature",
        "Description": "System monitors occupancy and revenue and emails an alert to the user, as soon as a given rule is triggered",
        "Priority": 1,
        "Version": 1,
        "MockUpLink": "https://invis.io/SFDG0VOJC#/270692966_MailTemplate-8",
        "BucketId": 6,
        "OrderInLane": 2
      },
      {
        "ItemId": 37,
        "ItemTitle": "Alerts on Rate Grid",
        "Type": "New Feature",
        "Description": "1. Highlight days that have triggered an alert in occupancy row\n2. Ability to view list of alerts in side bar\n3. Ability to select a specific day or alert and view basic supporting information (occupancy, ADR, Revenue, Room Class Availability, Channels, R",
        "Priority": 1,
        "Version": 1,
        "MockUpLink": "https://invis.io/SFDG0VOJC#/275507682_March13-Sidebar-8",
        "BucketId": 6,
        "OrderInLane": 3
      },
      {
        "ItemId": 38,
        "ItemTitle": "Dashboard",
        "Type": "New Feature",
        "Description": "Visual dashboard that displays how customer is tracking against their goals, including stat for Booking $ from alerts:\n- If rate was increased, show net additional revenue gained from bookings for that period, that were made after rate increase (price dif",
        "Priority": 2,
        "Version": 2,
        "MockUpLink": "https://invis.io/SFDG0VOJC#/277441792_Concept-7-DM-SinglemonthView-8",
        "BucketId": 6,
        "OrderInLane": 4
      },
      {
        "ItemId": 39,
        "ItemTitle": "Additional Side Bar Data",
        "Type": "New Feature",
        "Description": "1.  Record all searches that occur on Booking Engine and innCenter so that we can understand the hotel's \"demand\" for a given set of dates and anaylyze conversion (i.e. searches are up by 200% for month of January but conversion is lower than average expe",
        "Priority": 3,
        "Version": 2,
        "MockUpLink": "https://invis.io/SFDG0VOJC#/275507682_March13-Sidebar-8\n",
        "BucketId": 6,
        "OrderInLane": 5
      },
      {
        "ItemId": 40,
        "ItemTitle": "Historical Data",
        "Type": "New Feature",
        "Description": "For customers that have been using innRoad for a year (or new customers that imported historical data), use that data to help the user set their goals for the year.",
        "Priority": 4,
        "Version": 2,
        "MockUpLink": "Pending",
        "BucketId": 6,
        "OrderInLane": 6
      },
      {
        "ItemId": 41,
        "ItemTitle": "Competitive Rates",
        "Type": "New Feature",
        "Description": "Scrape comp rates and Incorporate rate info into alerts to help hotelier make even more informed decisions (i.e. alert me when I become lowest rate, alert me when my competitor lowers their rate, etc)",
        "Priority": 2,
        "Version": 0,
        "MockUpLink": "Pending",
        "BucketId": 6,
        "OrderInLane": 9
      },
      {
        "ItemId": 42,
        "ItemTitle": "Rule Alerts",
        "Type": "Feature",
        "Description": "When a client puts rules in place such as 2 night minimums, it can become possible where the surrounding nights get booked and the only possible way to book a given night is to book a 1 night stay that violates the rule.  These are known as \"orphaned\" nig",
        "Priority": 3,
        "Version": 0,
        "MockUpLink": "Pending",
        "BucketId": 6,
        "OrderInLane": 7
      },
      {
        "ItemId": 43,
        "ItemTitle": "Automated Rules / Rate Changes",
        "Type": "New Feature",
        "Description": "Allow client to create preset rules that automatically change rates (\"increase rate by x% when occupancy is >y%\")",
        "Priority": 4,
        "Version": 0,
        "MockUpLink": "Pending",
        "BucketId": 6,
        "OrderInLane": 8
      }
    ],
    "BucketId": 6,
    "Description": "Demand Management",
    "OrderInVertical": 6
  },
  {
    "Items": [{
      "ItemId": 45,
      "ItemTitle": "Groups module Overhaul",
      "Type": "Feature",
      "Description": "1. New UI for groups module\n2. Improve Performance\n3. Incorporate occupancy/forecast data into tool to allow users to better understand how the group booking/block will affect their occupancy and revenue (i.e. is it better to sell these 40 group rooms at ",
      "Priority": 22,
      "Version": 0,
      "MockUpLink": "Pending",
      "BucketId": 7,
      "OrderInLane": 1
    }],
    "BucketId": 7,
    "Description": "Email",
    "OrderInVertical": 7
  },
  {
    "Items": [{
        "ItemId": 46,
        "ItemTitle": "AirBnB Direct Connect",
        "Type": "Integration",
        "Description": "Build 2 way integration between innRoad and AirBnB so that we can push out rates and availability updates, and create received reservations.\n\nNote: waiting on api documentaation/access",
        "Priority": 6,
        "Version": 0,
        "MockUpLink": "n/a",
        "BucketId": 9,
        "OrderInLane": 1
      },
      {
        "ItemId": 47,
        "ItemTitle": "Homeaway",
        "Type": "Integration",
        "Description": "Build an integration with ota's in HomeAway family.  This would either be a 2 way integration or an \"ical\" integration depending on access/availability of an API which were are currently looking into.\n\nIf we go the \"ical\" direction, we would simply mainta",
        "Priority": 7,
        "Version": 0,
        "MockUpLink": "n/a",
        "BucketId": 9,
        "OrderInLane": 2
      },
      {
        "ItemId": 48,
        "ItemTitle": "QuickBooks Desktop",
        "Type": "Integration",
        "Description": "Add ability to generate a plain text \"IIF\" file, that allows users to export financial information for a given period and then import it into QuickBooks.  System should keep track of last time the export was run so that the subsequent run only includes da",
        "Priority": 8,
        "Version": 0,
        "MockUpLink": "Pending",
        "BucketId": 9,
        "OrderInLane": 4
      },
      {
        "ItemId": 49,
        "ItemTitle": "QuickBooks Online",
        "Type": "Integration",
        "Description": "Add ability to push financial data from innRoad into QuickBooks online using the QuickBooks API.  System should keep track of last time the export was run so that the subsequent run only includes data from that date forward.",
        "Priority": 8,
        "Version": 0,
        "MockUpLink": "Pending",
        "BucketId": 9,
        "OrderInLane": 3
      }
    ],
    "BucketId": 9,
    "Description": "Integration",
    "OrderInVertical": 9
  },
  {
    "Items": [{
      "ItemId": 50,
      "ItemTitle": "Additional System Integrations",
      "Type": "Feature",
      "Description": "Spa, Golf, POS, etc",
      "Priority": 32,
      "Version": 0,
      "MockUpLink": "n/a",
      "BucketId": 10,
      "OrderInLane": 1
    }],
    "BucketId": 10,
    "Description": "Interfaces",
    "OrderInVertical": 10
  },
  {
    "Items": [{
      "ItemId": 51,
      "ItemTitle": "Bucket for features needed for up market",
      "Type": "Feature",
      "Description": "Large bucket to represent features needed for large/full service hotels (interfaces, additional OTA, etc)",
      "Priority": 33,
      "Version": 0,
      "MockUpLink": "Pending",
      "BucketId": 11,
      "OrderInLane": 1
    }],
    "BucketId": 11,
    "Description": "Large/Full Service",
    "OrderInVertical": 11
  },
  {
    "Items": [{
      "ItemId": 52,
      "ItemTitle": "Bucket for additional international locations",
      "Type": "Feature",
      "Description": "Large bucket to represent moving into additional geographies (Ireland, Australia, Eurpope, etc)",
      "Priority": 13,
      "Version": 0,
      "MockUpLink": "n/a",
      "BucketId": 12,
      "OrderInLane": 1
    }],
    "BucketId": 12,
    "Description": "More Internatoinal",
    "OrderInVertical": 12
  },
  {
    "Items": [{
      "ItemId": 53,
      "ItemTitle": "Bucket to move into other segments (i.e. hostels)",
      "Type": "Feature",
      "Description": "Large bucket to represent features needed to enter other segments like hostels, vacation rentals, campgrounds, etc. ",
      "Priority": 34,
      "Version": 0,
      "MockUpLink": null,
      "BucketId": 13,
      "OrderInLane": 1
    }],
    "BucketId": 13,
    "Description": "Other Segments (i.e. Hostels)",
    "OrderInVertical": 13
  },
  {
    "Items": [{
      "ItemId": 54,
      "ItemTitle": "International Gateway + EMV",
      "Type": "Feature",
      "Description": "1.  Update innRoad so that it can be configured with additional payment gateways.  For this initial project we would want to add 1 payment gateway that ideally works for Canada and UK.\n2. Ability to store multiple CC's per reservation and then choose appr",
      "Priority": 5,
      "Version": 0,
      "MockUpLink": "n/a",
      "BucketId": 14,
      "OrderInLane": 1
    }],
    "BucketId": 14,
    "Description": "Payment",
    "OrderInVertical": 14
  },
  {
    "Items": [{
        "ItemId": 55,
        "ItemTitle": "Rates Audit Trail",
        "Type": "Feature",
        "Description": "New section within Inventory that displays a log of all changes that were made, including date of change, user, update summary (i.e. David changed Rate from $200 to $150 for rack rate)",
        "Priority": 27,
        "Version": 0,
        "MockUpLink": "Pending",
        "BucketId": 15,
        "OrderInLane": 2
      },
      {
        "ItemId": 56,
        "ItemTitle": "User Log",
        "Type": "Feature",
        "Description": "Build a page that allows a user to select a date range and user, and view all activities that the user has performed in the system during the specified date range (initial version would show changes for sections that we will already be tracking changes fo",
        "Priority": 31,
        "Version": 0,
        "MockUpLink": "Pending",
        "BucketId": 15,
        "OrderInLane": 1
      }
    ],
    "BucketId": 15,
    "Description": "Audit Trail ",
    "OrderInVertical": 15
  },
  {
    "Items": [{
        "ItemId": 57,
        "ItemTitle": "Report Module Overhaul",
        "Type": "Feature",
        "Description": "1. Update Report UI, including addition of sortable html pages (currently reports are generated directly to pdf)\n2. Download data to excel\n3. Ability to \"save\" reports (i.e. save filter criteria)\n4. Introduce some graphical elements to reports.",
        "Priority": 24,
        "Version": 0,
        "MockUpLink": "Pending",
        "BucketId": 16,
        "OrderInLane": 4
      },
      {
        "ItemId": 58,
        "ItemTitle": "Bucket for additional services",
        "Type": "Feature",
        "Description": "Large bucket to represent other services that could be pursued (Guest Experience Management, Labor Mgmt, Advanced Operations, Point of Sale, etc)",
        "Priority": 12,
        "Version": 0,
        "MockUpLink": "Pending",
        "BucketId": 16,
        "OrderInLane": 3
      },
      {
        "ItemId": 72,
        "ItemTitle": "Pace Report",
        "Type": "Report",
        "Description": "Report that displays reservations on the books For a range of dates this year compared to reservations on the books last year at the same point in time for those same dates.\n\nRows for each date in the selected date range.\n\nColumns for Room Nights, Occupan",
        "Priority": 9,
        "Version": 0,
        "MockUpLink": "Pending",
        "BucketId": 16,
        "OrderInLane": 1
      },
      {
        "ItemId": 77,
        "ItemTitle": "Notes Report",
        "Type": "Report",
        "Description": "Add new reservation report that displays notes for a 1 or more note type, for the reservations in the user's search.",
        "Priority": 19,
        "Version": 0,
        "MockUpLink": "Pending",
        "BucketId": 16,
        "OrderInLane": 2
      }
    ],
    "BucketId": 16,
    "Description": "Reports",
    "OrderInVertical": 16
  },
  {
    "Items": [{
        "ItemId": 59,
        "ItemTitle": "View / Update Reservation - Desktop",
        "Type": "UI",
        "Description": "UI overhaul for viewing and updating a reservation on desktop",
        "Priority": 0,
        "Version": 1,
        "MockUpLink": "https://invis.io/VZ57JLFSJ#/115269924_ExistingReservation",
        "BucketId": 18,
        "OrderInLane": 1
      },
      {
        "ItemId": 60,
        "ItemTitle": "View / Update Reservation - Mobile",
        "Type": "UI",
        "Description": "UI overhaul for viewing and updating a reservation on mobile device",
        "Priority": 0,
        "Version": 1,
        "MockUpLink": "https://invis.io/YME8U64X5#/252451038_ViewReservation",
        "BucketId": 18,
        "OrderInLane": 2
      },
      {
        "ItemId": 61,
        "ItemTitle": "Create Reservation - Desktop",
        "Type": "UI",
        "Description": "UI overhaul for creating a reservation on desktop",
        "Priority": 0,
        "Version": 1,
        "MockUpLink": "https://invis.io/KZAO02TU9#/221387619_ReservationSearch-Widget",
        "BucketId": 18,
        "OrderInLane": 3
      },
      {
        "ItemId": 62,
        "ItemTitle": "Create Reservation - Mobile",
        "Type": "UI",
        "Description": "UI overhaul for creating a reservation on mobile",
        "Priority": 0,
        "Version": 1,
        "MockUpLink": "https://invis.io/78E7Y8Y9J#/261260372_FindRoomWidget-100",
        "BucketId": 18,
        "OrderInLane": 4
      },
      {
        "ItemId": 63,
        "ItemTitle": "Multi Room Booking",
        "Type": "Feature",
        "Description": "Ability to create multi room reservations. We will initially require both rooms to have the same stay dates (user can simply specifiy number of rooms and then select 1 or more room classes)",
        "Priority": 2,
        "Version": 2,
        "MockUpLink": "UI will be very similar to Create reservation mocks above.  However, the user will be able to specify the number of required rooms and then choose 1 or more room classes (i.e. add a quantity drop down to result set)",
        "BucketId": 18,
        "OrderInLane": 5
      },
      {
        "ItemId": 64,
        "ItemTitle": "Reservation Audit Trail",
        "Type": "Feature",
        "Description": "New tab in view reservation that shows history of changes",
        "Priority": 3,
        "Version": 2,
        "MockUpLink": "We will likely descope filters for this mockup:\nhttps://invis.io/VZ57JLFSJ#/149056718_HistoryLog_Category",
        "BucketId": 18,
        "OrderInLane": 9
      },
      {
        "ItemId": 65,
        "ItemTitle": "Digital Signature",
        "Type": "Feature",
        "Description": "Ability to collect and store digital signature on desktop and mobile",
        "Priority": 4,
        "Version": 2,
        "MockUpLink": "These need a little work but gives you sense of general direction:\nhttps://invis.io/P878LHTNB#/156837842_ExistingReservationCheckin",
        "BucketId": 18,
        "OrderInLane": 10
      },
      {
        "ItemId": 66,
        "ItemTitle": "Check In",
        "Type": "UI + Mobile",
        "Description": "UI/UX update to check in process, including UX update to any required payment. Includes making this process mobile friendly.   ",
        "Priority": 4,
        "Version": 2,
        "MockUpLink": "These need a little work but gives you sense of general direction:\nhttps://invis.io/P878LHTNB#/156837842_ExistingReservationCheckin",
        "BucketId": 18,
        "OrderInLane": 6
      },
      {
        "ItemId": 67,
        "ItemTitle": "Check Out",
        "Type": "UI + Mobile",
        "Description": "UI/UX update to check out process, including UX update to any required payment.  Includes making this process mobile friendly.   ",
        "Priority": 4,
        "Version": 2,
        "MockUpLink": "Pending:  UI will be similar to check in",
        "BucketId": 18,
        "OrderInLane": 7
      },
      {
        "ItemId": 68,
        "ItemTitle": "Payment",
        "Type": "UI + Mobile",
        "Description": "UI/UX update to payment including allowing payment on mobile device.",
        "Priority": 4,
        "Version": 2,
        "MockUpLink": "Pending",
        "BucketId": 18,
        "OrderInLane": 12
      },
      {
        "ItemId": 69,
        "ItemTitle": "Folio UI (Comsmetic)",
        "Type": "UI",
        "Description": "Very basic update to the folio page to make styles match the new UI (no UX changes)",
        "Priority": 16,
        "Version": 0,
        "MockUpLink": "https://invis.io/VZ57JLFSJ#/122065427_ExistingReservation-Viewfoliodetails",
        "BucketId": 18,
        "OrderInLane": 8
      },
      {
        "ItemId": 70,
        "ItemTitle": "Additional Guests",
        "Type": "Feature",
        "Description": "Ability to store additional guest information staying in a room.  This becomes especially important when we have multi room reservations",
        "Priority": 28,
        "Version": 0,
        "MockUpLink": "Pending",
        "BucketId": 18,
        "OrderInLane": 11
      }
    ],
    "BucketId": 18,
    "Description": "Reservations",
    "OrderInVertical": 1
  },
  {
    "Items": [{
        "ItemId": 71,
        "ItemTitle": "Unit Owner Overhaul + Features",
        "Type": "Feature",
        "Description": "1. Overhaul to Unit Owner UI\n2. Portal for Unit Owner to login and view information about their unit and related revenue/expenses\n3. Allow different revenue splits per unit/owner (currently our system can only have 1 split % across all units in a property",
        "Priority": 23,
        "Version": 0,
        "MockUpLink": "Pending",
        "BucketId": 19,
        "OrderInLane": 1
      },
      {
        "ItemId": 82,
        "ItemTitle": "Sample",
        "Type": "Sample",
        "Description": "Sample",
        "Priority": 1,
        "Version": 1,
        "MockUpLink": "1",
        "BucketId": 19,
        "OrderInLane": 2
      }
    ],
    "BucketId": 19,
    "Description": "Unit Owners",
    "OrderInVertical": 19
  }
]
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
describe('load tasks', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })
  it('creates FETCH_TESTS_SUCCESS when fetching tasks has been done', () => {
  
    const expectedActions = [{
        type: types.START_LOAD_TASKS
      },
      {
        type: types.COMPLETED_LOAD_TASKS,
        payload
      }
    ]
    const store = mockStore({
      taskList: []
    })
    return store.dispatch(actions.loadTasks()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})