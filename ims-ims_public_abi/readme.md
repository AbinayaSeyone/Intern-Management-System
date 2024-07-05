# IMS - Intern Management System


## Required Software

 1. Docker 20.10.x 

 2. Java 11
 
 3. Node 16

 4. Git 2.34.x

 5. Maven 3.8.x
 
 6. GraphQL Playground 1.8.x 


## Database Setup

Run following command
 
> docker create --name=postgres-ims -p 5432:5432 -e POSTGRESQL_PORT_NUMBER=5432 -e POSTGRESQL_USERNAME=ims -e POSTGRESQL_PASSWORD=ims -e POSTGRESQL_DATABASE=ims bitnami/postgresql:14.4.0  
  
> docker start postgres-ims

> docker stop postgres-ims


## Add Maven Repo

Create a xml file with following content and copy it to ~/.m2/settings.xml
 
```xml

<settings xmlns="http://maven.apache.org/SETTINGS/1.1.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.1.0 http://maven.apache.org/xsd/settings-1.1.0.xsd">

<offline>false</offline>
 
 <servers>
    <server>
      <id>3axislabs-external</id>
      <username>external</username>
      <password>OTn5MTC3RI3r8sv</password>
    </server>
 </servers>
</settings>

```
 
 
## Build Command

> mvn clean install -DskipTests=true

