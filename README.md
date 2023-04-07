# Flower-Shop-React-Project
Final project in order to graduate as a full stack developer from SoftUni academy.

Flower-Shop-React is a full stack custom app, written with React, Express, Node.js.
All styles are custom-made, and owned by owner of the repo.
It aims to provide information about flower items to users.
It has three main categories - funeral items, wedding items and assortment items.
Every item has detail page where owner can edit and delete content. 
If not the owner is visiting the detail page he/she does not have access to CRUD operations, only to view the item info.

Client is using React to render all pages and components of the pages.
Every page is separated by multiple components.
For sending request to the server is used fetch api.
The context is managed by providers who give access to every component to the state and other useful hooks.

#Components overview ->
- Catalog Component:
* Catalog Component contains all Item Components rendered with map() function; All details were send via props to 
the Item Component;

- Contacts Component;
* Contact Component contains two main sections, one section showing contact information 
and one section with contact form, which sends emails via nodemailer and nodemailer-mailgun-transport,
currently my mailgun account is blocked, so until they fixed it this functionality does not work;

- Footer Component;
* Footer Component is inherited on every page of the API, it is static component does not have any state or receive any data
it has Links Components to covet the routing to different pages of the API;

- Header Components;
* Header Component is inherited on every page of the API, it is static component does not have any state or receive any data
it has Link Component to implemented to the img logo to navigate to homepage;


- HomePage Components -> Catalog Component, Contacts Component, History Component, Main Component;
* HomePage is page with multiple components, all components are static, there is no state to be sent to children of the components
it includes only links to navigate through the API;

- Item Component -> Item Details Component, Item Create Component, Item Edit Component; Delete Functionality is
handled with a window confirmation pop up, there was no component created for it;
* Item is a complex functionality which includes all CRUD operations, there is a detail page where if the user is owner
should see Edit and Delete buttons, if the user is not owner but he/she is authenticated should be able to add comments
to the specific item. Item Components are using ItemContextProvider to send context data through the different components;
Edit and Create Item Components are using useForm hook to manage all form data to be sent to the server via fetch API and
in order for the state to be updated.

- Login Component;
Login Components are using AuthContextProvider to extract context data for the user and to send information on login to the
auth context and to set localstorage data and cookies data.
Login Component is using useForm hook to manage all form data to be sent to the server via fetch API and
in order for the state to be updated.

- Register Component;
Register Components are using AuthContextProvider to extract context data for the user and to send information on login to the
auth context and to set localstorage data and cookies data.
Register Component is using useForm hook to manage all form data to be sent to the server via fetch API and
in order for the state to be updated. When user submit a register form and if the data is valid he/she are logged in.

- Logout was handled only with a Handler function, no component created for logout;



- Navigation Component;
Navigation Component navigate with React Link Components through different components of the API;

- User Profile Page Component is the most complex component in the whole API; It uses all context providers(authContextProvider, itemContextProvider, UserContext) to 
extract needed data for the use of the UI and UX of the page. The profile component has three main categories shown, data for the current
logged-in user, data for all items created by the user and data for all comment created by the user.
To extract all comments by created by the user, a fetch api was sent to the service to respond with all items which contains
user comments, the problem is that the request is returning only the items with all additional comments, not only the user comments,
so in order to extract only the user comment a nested for-loop over the object commentList property was created.
For better performance probably is better to change the Model interface inside the service and to create additional model only 
for comments with many-to-many relationship with Item and User Model. This way it will be easier to extract only the current user comments.

#Context overview ->

The API contains three main context providers -> authContext, itemContext and userContext;

*authContext contains the following handlers ->  onLoginSubmit, onRegisterSubmit, onLogout;
it provided access through the whole API to information about the current userId, token, email and if the user isAuthenticated;


