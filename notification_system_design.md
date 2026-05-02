# Notification System Design

## 1. Data Fetching
Notifications are fetched using a function (API or mock data). The data includes Type, Message, and Timestamp.

## 2. Priority Logic
Notifications are sorted based on:
- Type priority: Placement > Event > Result
- Recency: Latest timestamp first

## 3. Filtering
Users can filter notifications by type:
- All
- Placement
- Event
- Result

## 4. Pagination
Notifications are displayed in pages with a fixed limit (3 per page).
Users can navigate using Next and Previous buttons.

## 5. Seen/Unseen
Clicking a notification marks it as seen.
Seen notifications are displayed with reduced opacity.

## 6. Logging Middleware
A reusable Log function is used across the application to log events.