# List created following MVC and CRUD

- M = Model, which is all the logic behind the application
- V = view, which means basically what will be displayed in the screen
- C = controller. This represents the functionality that the user sees
- CRUD = Create, Read, Update, Delete

## M - MODEL = is what changes the state of the data. It applies logic, stores data, and changes values. It is the middle factor between what the user sees and what the user does. It is the engine of our app.

## V - VIEW = this is the display that the user sees. The data is manipulated by our model and it is displayed on the screen. In this app, we display all of our data everytime the model is manipulated. All model functions call view functions.

## C - CONTROLLER = the functions that the user can use to manipulate what is displayed on the screen by triggering the model. In this case, we want the user to do create, edit and delete.