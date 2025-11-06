CC21-ProJectCatHotel
===
### env guide
PORT=
DATABASE_URL="mysql://root:1234567m@localhost:3306/projectHotelCat"
JWT_SECRET=

---
### service

|path |method |authen |params |query |body |
|:-- |:-- |:-- |:-- |:-- |:-- |
|/api/auth/login|post|-|-|-| {identity, password}
|/api/auth/register|post|-|-|-| {identity, firstName, lastName, password, confirmPassword}

|/api/auth/me|get|y|-|-|-|
|/api/post|get|y|-|-|-|
|/api/post|post|y|-|-|{message, image(file)}
|/api/post|put|y|:id|-|{message, image(file)}
|/api/post|delete|y|:id|-|-
|/api/comment|post|y|-|-|{message, postId}
|/api/like|post|y|-|-|{postId}
|/api/like|delete|y|:id|-|-
