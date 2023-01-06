# BASSS Academy
An online learning website platform built using the `MERN` stack.

## Motivation
This website was impemented as a project for the Advanced Computer Lab course.
  
## Tech/Frameworks used
- React.js
- MongoDB
- Node.js _^19.3.0_
- Express _^4.18.2_
- Mongoose _^6.7.0_
- Axios _^1.2.0_
- Stripe _^11.5.0_
- NodeMailer _^6.8.0_

### Dependencies
- cors _^2.8.5_
- crypto _^1.0.1_
- jsonwebtoken _^8.5.1_
- react-cookie _^4.1.1_
- body-parser _^1.20.1_
- countries-list _^2.6.1_


## Features
In this project there are 4 main roles with their features as follows:
1. An **Instructor** can :
   - Search, filter, and view details of all courses in the system.
   - Search, filter, and view details of courses given by him/her.
   - Create a course.
   - Add a promotion to a specific course.
   - View number of enrollments in his/her course.
   - View his/her reviews.
   - Report a problem and follow up on it.

2. A **Corporte Trainee** can :
   - Request to enroll in a course of his choice.
   - Search, filter, and view details of all courses on the system.
   - Watch a video and solve an exercise from his/her courses.
   - View course progress.
   - Receive a certificate when completing a course.
   - Report a problem and follow up by sending a message.
   
3. An **Individual Trainee** can
   - Search, filter, and view details of all courses on the system. 
   - View prices of each course in the currency of the country chosen.
   - Unenroll in a course and request a refund if his/her progress was less than 50%.
   - Enroll in a course using refunds added to his/her wallet.
   - Watch a video and solve an exercise from his/her courses.
   - View course progress.
   - Receive a certificate when completing a course.
   - Report a problem and follow up by sending a message.
   
4. An **Admin** can :
   - Add instructors, admins, and corporate trainees to the system.
   - View and resolve probelms and reports sent.
   - Approve/Decline a course enrollment request from a corporate trainee.
   - View and approve refund requests from individual trainees.
   - Add a promotion to a course.

5. A **Guest** can :
   - Search, filter, and view details of all courses on the system.
   - Signup as an Individual Trainee.


## Installation
  To run and install this project you need to:
  
  Clone repository
```
  > git clone https://github.com/Advanced-Computer-Lab-2022/BASSS.git
  > cd Backend && npm i 
  > cd Frontend && npm i
```
### How to use 
To run the Backend
```
> cd Backend && npm node app.js
```

To run the Frontend
```
> cd Frontend && npm start
```

### Environment Variables 
The following variables should be added to your .env file in the Backend folder:

`mongoURL` Database url

`secret` String of random 8 bytes for the jwt hash

`STRIPE_SECRET_KEY`

`STRIPE_PUBLIC_KEY`

## API References

#### Authentication

***Login User***

```
POST /login
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. user's username |
| `pass` | `string` | **Required**. user's password |


***Signup as individual trainee***

```
POST /signup
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. user's username |
| `password` | `string` | **Required**. user's password |
| `email` | `email` | **Required**. user's email |
| `firstname` | `string` | **Required**. user's first name |
| `lastname` | `string` | **Required**. user's last name |
| `gender` | `string` | **Required**. user's gender |


***logout from account***

```
GET /logout
````
| Header | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `cookie` | **Required**. Users's token |



#### Course

***Get a specific course***

```
GET /course/getCourse/:id
```


**Search for a course**

```
GET /search/:searchkey
```


**Create Course**

```
POST /course/createCourse
```

| Parameters | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Title` | `String` | **Required**. Course title |
| `Total Hours` | `Number` | **Required**. Course total hours |
| `Price` | `Number` | **Required**. Course price |
| `VideoPreviewLink` | `String` | **Required**. Course preview video |
| `shortSummary` | `String` | **Required**. Course brief description |
| `Subtitles` | `Array` | **Required**. Course subtitles |
| `Title` | `String` | **Required**. Course title |
| `CertificateTemplate` | `String` | **Required**. Course certificate |


***Get course details***

```
GET /course/courseDetails/:courseId
```


**Get most viewed courses**

```
GET /course/allcourses/mostviewd
```


**Get course exercise**

```
GET /course/exercise/:courseID/:subtitleID
```



### Admin

**Add another admin**

```
GET /admin/addAdmin/:username/:password
```


**Add an instructor**

```
GET /admin/addInstructor/:username/:password
```


**Add corporate trainee**

```
GET /admin/addCoTrainee/:username/:password
```


**View corporate requests**

```
GET /admin/getAllCoReq
```


**Accept corporate request**

```
GET /admin/AcceptCoRequest/:RequestID
```


**View Refund requests from individual trainees**

```
GET /admin/getAllRefundReq
```


**Accept refund request**

```
GET /admin/acceptRefundReq/:CourseID1/:UserName
```


**View all users reports**

```
GET /admin/getAllReports
```


**Resolve a report**

```
GET /admin/ResolveReport/:ReportID
```



### Instructor

**View ammount in wallet**

```
GET /instructor/vieMylWallet
```

| Header | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `cookie` | **Required**. Users's token |


**Change password**

```
POST /instructor/changePass
```

| Header | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `cookie` | **Required**. Users's token |

| Parameters | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `newPass` | `String` | **Required**. Users's new password |


**View courses given by him/her**

```
GET /instructor/instructorViewtitles
```

| Header | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `cookie` | **Required**. Users's token |


**Search in courses given by him/her**

```
GET /instructor/searchmycourses/:searchkey
```

| Header | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `cookie` | **Required**. Users's token |



### Corporate Trainee

**View his/her profile**

```
GET /corporateTrainee/getCorporate
```

| Header | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `cookie` | **Required**. Users's token |


**View his/her courses**

```
GET /corporateTrainee/CorporateCourses
```

| Header | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `cookie` | **Required**. Users's token |



### Individual Trainee

**Pay for a course using wallet**

```
POST /individualTrainee/payByWallet
```

| Header | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `cookie` | **Required**. Users's token |

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `amount` | `Number` | **Required**. Course Price to be payed |


**Enroll for a course**

```
POST /individualTrainee/enroll
```

| Header | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `cookie` | **Required**. Users's token |

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `amount` | `Number` | **Required**. Course Price payed |
| `course` | `String` | **Required**. ID of course to enroll in |


**View his/her courses**

```
GET /individualTrainee/individualCourses
```

| Header | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `cookie` | **Required**. Users's token |



### Stripe payment 

**Create and get payment intent**

```
POST /individualTrainee/paymentInent
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `currency` | `String` | **Required**. Currency |
| `amount` | `Number` | **Required**. Amount to be payed |



**Get stripe key**

```
GET /individualTrainee/getKey
```



## Authors

- [@SohaSamirIbrahim](https://github.com/SohaSamirIbrahim)

- [@SaraMohSaad](https://github.com/SaraMohSaad)

- [@Adham Saber](https://github.com/adhammsaber)

- [@Bassel](http://github.com/bassel331)

- [@Mohamed Salama](https://github.com/5a1ama)
