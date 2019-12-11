## Node JS Express with Firebase APIs

###### HOW CAN WE INSTALL THIS APPLICATION

Use this Command: ** $ git clone https://github.com/sanjayesfera/node-firebase-apis.git **
to your local system and download the entire project

If your application folder contains ** "node_modules" ** then no need to run command ** $ npm install **
else run the command $ npm install


###### TO KILL BUSY PORT WHEN SOME EXISTING APPLICATION IS RUNNING AT 8090 PORT
 sudo kill -9 `sudo lsof -t -i:8090`


###### HOW CAN WE RUN PROJECT

Run Application at your port (By default application will run at 8090 port as it is set in server.js)

 ** $ node server.js **


###### Access API URL
  
 ** POST localhost:8090/employee ** => Add User => Pass parameters in body (UserName, Name, Age, empID) and set Content-Type: application/json in Header
 ** GET localhost:8090/employee **  => Get all Users
 ** PUT localhost:8090/employee **  => Update user on the behalf of empID => Pass parameters in body (UserName, Name, Age, empID) and set Content-Type: application/json in Header
 ** DELETE localhost:8090/employee ** => DELETE user => Pass parameters in body (empID) and set Content-Type: application/json in Header

