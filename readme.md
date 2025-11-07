CC21-ProJectCatHotel
===
### env guide
PORT= 8900
DATABASE_URL="mysql://root:1234567m@localhost:3306/projectHotelCat"
JWT_SECRET=

---
### service

|path |method |authen |params |query |body |
|:-- |:-- |:-- |:-- |:-- |:-- |
|/api/auth/register|post|-|-|-| {identity, phoneNumber, email, firstName, lastName, password, confirmPassword, }
|/api/auth/login|post|-|-|-| {identity, password}
|/api/auth/profile-user|get|y|-|-|-|
|/api/auth/settings|get|y||-|-
|/api/auth/settings|put|y||-|-

|/api/info/catInfo||y|-|-|{}
|/api/info/roomType|get|y|-|-|-|
|/api/boooking|put|y|:id|-|{message, image(file)}

|/api/appointment|get|y|-|-|-|
|/api/comment|post|y|-|-|{message, postId}
|/api/like|post|y|-|-|{postId}
|/api/like|delete|y|:id|-|-
