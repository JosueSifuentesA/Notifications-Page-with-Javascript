# Notification Page
This is a web page that displays pre-existing notifications in HTML. The main functionality is to display a random number of unread notifications each time the page is loaded.

# LIVE DEMO
https://josuesifuentesa.github.io/Notifications-Page-with-Javascript/

# Features
The page has the following features:

Display the number of unread notifications: At the top of the page, there is a counter that displays the number of unread notifications the user has.
Button to mark all unread notifications as read: There is a button at the top of the page that allows the user to mark all notifications as read. Once the button is clicked, the counter of unread notifications is set to zero.
Update the counter of unread notifications: When the user hovers over a notification, it is marked as read and the counter of unread notifications is updated accordingly.

# How it works
The page relies on vanilla JavaScript to generate a random number of unread notifications each time the page is loaded. DOM selectors are used to display the number of unread notifications in the counter, as well as to select the "Mark all unread notifications as read" button and each individual notification.

To mark a notification as read, a mouseover event is used to detect when the user hovers over the notification. The CSS class of the notification is changed to indicate that it has been read, and the counter of unread notifications is updated using a JavaScript counter.
