# To Improve

[Readme](https://github.com/lucassdesouza0/express-checkout/#readme) - [Folder Structure](https://github.com/lucassdesouza0/express-checkout/blob/master/structure.md) - [Was Done](https://github.com/lucassdesouza0/express-checkout/blob/master/done.md)

### UI

- Due to time and configuration issues, I was unable to set storybook to provide the UI components in the application.
  This would be one of the next improvements that I'd make to control the application interface.

- Another point I would like to revisit would be the division of the components within the atomic design pattern, making a better study and separating them in the best way.

### State and Side Effects

- I was unable to complete the configuration of Redux together with Saga to manage the state and side effects of the application due to the SSR mechanism, it would be an improvement that I would make for a better separation of the business rule on the front end.

- [**critical**] Some business rules are within components, which makes them bad to reuse.
  Along with the addition of the saga library, I would export this entire business rule not to mix responsibilities.

### Theming

- It would be interesting to have a theme for the application, controlling the visual differences by encapsulating some css properties for a better control of the final result.

### Tests

- I tried to create the most critical and also the most diversified tests to better present my knowledge. But a next improvement would be to seek more complete testing coverage.

- [**critical**] I was unable to solve some warnings in the test logs and for this reason I added the `--silent` flag in the test scripts just for a better viewing. It is essential to check and correct these warnings.

### Form

- An important point to be addressed is the validation of the shipping form, treating the inputs so they won't accept incorrect data and will also bringing visual feedback to the user.

- Along with the validation it would be a good increment to use a zipcode api like [**ZipCodeBase**](https://zipcodebase.com/) for the automatic filling of the address information, avoiding errors and being more user friendly.
