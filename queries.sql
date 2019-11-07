-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
## SELECT ProductName, CategoryName FROM Product
join Category on Product.CategoryId = Category.Id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
## SELECT [Order].Id, Shipper.CompanyName from [Order]
join Shipper on [Order].ShipVia = Shipper.Id
WHERE OrderDate < '2012-08-09';

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT ProductName, UnitsOnOrder from Product
join [Order] on Product.Id WHERE [Order].Id = 10251 order by Product.ProductName;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT [Order].Id, [Customer].CompanyName, [Employee].LastName from [Order]
join [Customer], [Employee]
WHERE [Order].CustomerId = [Customer].Id AND [Order].EmployeeId = [Employee].Id