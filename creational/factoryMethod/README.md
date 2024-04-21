# Steps to create a factory method

1. Create a factory method class with an operation to create some object based on a factory method(abstract method) that is going to be defined in the concrete object creator class.

2. Create a customCreator for each type of object you want to create that implements the factory method and there you should define the object that is going to be used in the factoryMethod.

3. Create a objectCreator with the details of the object you want to create.
