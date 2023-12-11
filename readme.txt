--Readme document for Haver Ho, haverh@uci.edu, 54379591--

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

*/20
- 3/3 The ability to log overnight sleep
- 3/3 The ability to log sleepiness during the day
- 3/3 The ability to view these two categories of logged data
- 3/3 Either using a native device resource or backing up logged data
- 3/3 Following good principles of mobile design
- 3/3 Creating a compelling app
- 2/2 A readme and demo video which explains how these features were implemented and their design rationale

2. How long, in hours, did it take you to complete this assignment?
    Project took about 20 hours to complete this assignment.


3. What online resources did you consult when completing this assignment? (list specific URLs)
    1 - Adding components to multiple pages
        - https://www.youtube.com/watch?v=za5NaFavux4
    2 - Date/Time selection
        - https://toexpert.dev/ionic-6-datetime-picker-examples/
    3 - Ionic Documentation
        - https://ionicframework.com/docs
    4 - Storage Structure
        - https://uci.yuja.com/V/Video?v=9179220&node=39303530&a=92051875&autoplay=1
    5 - Sorting array of object by property
        - https://bobbyhadz.com/blog/javascript-sort-array-without-mutating



4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
    Consulted friends for feedback on which design fits best with mobile.


5. Is there anything special we need to know in order to run your code?
    N/A


--Aim for no more than two sentences for each of the following questions.--


6. Did you design your app with a particular type of user in mind? If so, whom?
    I designed this app for individuals looking to track their sleep and levels of sleepiness
    throughout the day.


7. Did you design your app specifically for iOS or Android, or both?
    The app was not designed with specific OS in mind. One thing to keep in mind is that
    the app is designed more for phones rather than tablets.


8. How can a person log overnight sleep in your app? Why did you choose to support logging overnight sleep in this way?
    Users can log overnight sleep by heading over to the "Sleep" tab and select time of sleep
    and time of waking up with ion-datetime-buttons and submitting via "Log Sleep" button.
    I chose this way because it is minimal and fairl straightforward to understand


9. How can a person log sleepiness during the day in your app? Why did you choose to support logging sleepiness in this way?
    Users can log sleepiness by heading to the "Sleepiness" tab and using the range slider
    which would display the corresponding value and description and hitting "Log Sleepiness".
    This implementation was used because range sliders are intuitive and the location of interaction
    is not too far up the screen.


10. How can a person view the data they logged in your app? Why did you choose to support viewing logged data in this way?
    Users can view the data they logged via the "View All" button, which is located in their respective
    tabs or the home page, next to recent logs which would pull up a modal listing all logged data.
    I chose to support viewing logged data this way because users are not likely to view all logged
    data frequently as opposed to the most recent.


11. Which feature choose--using a native device resource, backing up logged data, or both?
    I used backing up logged data.


12. If you used a native device resource, what feature did you add? How does this feature change the app's experience for a user?



13. If you backed up logged data, where does it back up to?
    Logged data backs up to localStorage using Capacitor Storage. 


14. How does your app implement or follow principles of good mobile design?
    Initial view of the app gives useful information such as logged data and navigation tabs.
    Use of colors and icons to denote success/inactive components via ion-toast.

