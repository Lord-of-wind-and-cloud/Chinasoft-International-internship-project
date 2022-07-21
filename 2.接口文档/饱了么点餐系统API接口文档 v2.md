---
title: 点餐系统 v1.0.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.4"

---

# 点餐系统

> v1.0.0

# 点餐

## GET 进入用户信息修改

GET /userInfo

用户请求进入信息修改界面

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» userData|[User](#schemauser)|true|none|none|
|»» userId|integer|true|none|员工编号与登录账号|
|»» password|string|true|none|none|
|»» username|string|true|none|无|
|»» role|integer|true|none|1-管理员，2-服务员，3-厨师|
|»» portrait|string|true|none|图片链接|
|»» phone|string|true|none|none|
|»» salary|number|true|none|none|
|»» bonus|number|true|none|none|

# 点餐/管理员

## POST 发布公告

POST /admin/notice

管理员点击确认 可以发布公告

> Body 请求参数

```yaml
title: test
content: hello world

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» title|body|string|true|公告标题|
|» content|body|string|true|公告内容|

> 返回示例

> 成功

```json
{
  "code": 1,
  "msg": "success"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# 点餐/管理员/人员管理

## GET 根据员工身份筛选

GET /user/select_by_role

> Body 请求参数

```yaml
role: "2"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» role|body|string|true|1-管理员，2-服务员，3-厨师|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» data|[[User](#schemauser)]|true|none|所有服务员的数组，如果该数组 size 为0则没查到任何|
|»» userId|integer|true|none|员工编号与登录账号|
|»» password|string|true|none|none|
|»» username|string|true|none|无|
|»» role|integer|true|none|1-管理员，2-服务员，3-厨师|
|»» portrait|string|true|none|图片链接|
|»» phone|string|true|none|none|
|»» salary|number|true|none|none|
|»» bonus|number|true|none|none|

## GET 根据员工姓名或ID进行模糊查询

GET /user/select_by_name_id

如果提交的查询调价为空，返回所有数据

> Body 请求参数

```yaml
query: Mar

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» query|body|string|true|姓名或ID|

> 返回示例

> 成功

```json
{
  "code": 12,
  "data": [
    {
      "userId": 500000198501048500,
      "username": "龙超",
      "role": 1,
      "portrait": "http://dummyimage.com/728x90",
      "password": "adipisicing",
      "phone": "18152271833",
      "salary": 74,
      "bonus": 64
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» data|[object]|true|none|none|
|»» userId|integer|false|none|none|
|»» username|string|false|none|none|
|»» role|integer|false|none|none|
|»» portrait|string|false|none|none|
|»» password|string|false|none|none|
|»» phone|string|false|none|none|
|»» salary|integer|false|none|none|
|»» bonus|integer|false|none|none|

## POST 删除人员

POST /user/delete

> Body 请求参数

```yaml
id: "21"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string|true|被删除人的ID|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|是否操作成功|
|» msg|string|true|none|错误具体信息|

## POST 修改人员

POST /user/edit

如果某字段为空，默认不修改该字段

> Body 请求参数

```yaml
userId: "37"
username: Mary
bonus: "1245.5"
salary: "66.7"
phone: "1232313213"
portrait: http:yuyu.jpg
password: "23232323"
role: "3"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» userId|body|string|true|none|
|» username|body|string|false|none|
|» bonus|body|string|false|none|
|» salary|body|string|false|none|
|» phone|body|string|false|none|
|» portrait|body|string|false|none|
|» password|body|string|false|none|
|» role|body|string|false|none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|是否修改成功|

## GET 根据ID显示人员信息

GET /user/select_by_id

主要用于点击后跳转到该人员的详细界面

> Body 请求参数

```yaml
id: "37"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string|false|需要查询人的ID|

> 返回示例

> 成功

```json
{
  "code": 31,
  "data": {
    "userId": 150000200505316770,
    "username": "孔芳",
    "role": 1,
    "portrait": "http://dummyimage.com/234x60",
    "password": "fugiat consectetur",
    "phone": "19827721914",
    "salary": 18,
    "bonus": 55
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» data|object|true|none|none|
|»» userId|integer|true|none|none|
|»» username|string|true|none|none|
|»» role|integer|true|none|none|
|»» portrait|string|true|none|none|
|»» password|string|true|none|none|
|»» phone|string|true|none|none|
|»» salary|integer|true|none|none|
|»» bonus|integer|true|none|none|

## GET 查询服务员的销售榜

GET /user/get_top3_waiter

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» data|[[UserSales](#schemausersales)]|true|none|none|
|»» userId|integer|true|none|none|
|»» username|string|true|none|none|
|»» role|integer|true|none|1-管理员，2-服务员，3-厨师|
|»» portrait|string|true|none|none|
|»» password|string|true|none|none|
|»» phone|string|true|none|none|
|»» salary|number|true|none|none|
|»» bonus|number|true|none|none|
|»» sales|integer|true|none|提交的订单数量|

## GET 显示所有人员

GET /user/list

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» data|[[User](#schemauser)]|true|none|所有服务员的数组，如果该数组 size 为0则没查到任何|
|»» userId|integer|true|none|员工编号与登录账号|
|»» password|string|true|none|none|
|»» username|string|true|none|无|
|»» role|integer|true|none|1-管理员，2-服务员，3-厨师|
|»» portrait|string|true|none|图片链接|
|»» phone|string|true|none|none|
|»» salary|number|true|none|none|
|»» bonus|number|true|none|none|
|» code|integer|true|none|是否查询成功|

## POST 增加人员

POST /user/add

注意：ID数据库自动添加，前端不用发送

> Body 请求参数

```yaml
username: wew
bonus: "1245.5"
salary: "66.7"
phone: "1232313213"
portrait: yuyu.jpg
password: "23232323"
role: "2"
email: 123@qq.com

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» username|body|string|true|none|
|» bonus|body|string|true|none|
|» salary|body|string|true|none|
|» phone|body|string|true|none|
|» portrait|body|string|true|none|
|» password|body|string|true|none|
|» role|body|string|true|none|
|» email|body|string|true|none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|是否操作成功|
|» msg|string|true|none|信息|
|» data|[User](#schemauser)|true|none|none|
|»» userId|integer|true|none|员工编号与登录账号|
|»» password|string|true|none|none|
|»» username|string|true|none|无|
|»» role|integer|true|none|1-管理员，2-服务员，3-厨师|
|»» portrait|string|true|none|图片链接|
|»» phone|string|true|none|none|
|»» salary|number|true|none|none|
|»» bonus|number|true|none|none|

# 点餐/管理员/菜品管理

## POST 设置菜品可出售

POST /food/set_available

> Body 请求参数

```yaml
id: "2"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string|true|none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|是否设置成功|

## POST 推荐菜品

POST /food/set_like

> Body 请求参数

```yaml
id: "4"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string|true|推荐菜品id|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## POST 删除菜品

POST /food/delete

> Body 请求参数

```yaml
id: "50"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string|false|删除菜品ID|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|是否删除成功|

## POST 添加菜品

POST /food/add

注意：ID数据库自动添加，前端不用发送

> Body 请求参数

```yaml
foodName: 卷心菜
price: "54"
description: labore ex ea nulla
isLike: "1"
category: "2"
image: http://dummyimage.com/234x60
isAvailable: "0"
sales: "5"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» foodName|body|string|true|none|
|» price|body|string|true|none|
|» description|body|string|true|none|
|» isLike|body|string|true|none|
|» category|body|string|true|none|
|» image|body|string|true|none|
|» isAvailable|body|string|true|none|
|» sales|body|string|true|none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|是否添加成功|
|» data|[Food](#schemafood)|true|none|none|
|»» foodName|string|true|none|菜品名称|
|»» price|number|true|none|菜品价格|
|»» description|string|true|none|菜品简介|
|»» foodId|integer|true|none|菜品id|
|»» isLike|integer|true|none|0/1是否推荐|
|»» category|integer|true|none|菜品类别：1-主菜，2-小吃，3-饮料|
|»» image|string|true|none|菜品图片url链接|
|»» isAvailable|integer|true|none|0/1是否可售|

## POST 设置菜品售空

POST /food/set_not_available

> Body 请求参数

```yaml
id: "2"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string|true|none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|是否修改成功|

## POST 修改菜品

POST /food/edit

只修改不为空的值

> Body 请求参数

```yaml
foodId: "53"
foodName: 牛肉饼
price: "54"
description: 原汁原味
isLike: "1"
category: "2"
image: http://dummyimage.com/234x60
isAvailable: "1"
sales: "37"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» foodId|body|string|true|none|
|» foodName|body|string|false|none|
|» price|body|string|false|none|
|» description|body|string|false|none|
|» isLike|body|string|false|none|
|» category|body|string|false|none|
|» image|body|string|false|none|
|» isAvailable|body|string|false|none|
|» sales|body|string|false|none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|是否操作成功|

# 点餐/管理员/订单管理

## GET 根据订单id展示某订单的详细信息

GET /order/all_detail_info

返回结果包括订单点的菜品、点单服务员、订单基本信息

> Body 请求参数

```yaml
id: "1"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string|true|none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» data|object|true|none|none|
|»» waiter|[User](#schemauser)|true|none|none|
|»»» userId|integer|true|none|员工编号与登录账号|
|»»» password|string|true|none|none|
|»»» username|string|true|none|无|
|»»» role|integer|true|none|1-管理员，2-服务员，3-厨师|
|»»» portrait|string|true|none|图片链接|
|»»» phone|string|true|none|none|
|»»» salary|number|true|none|none|
|»»» bonus|number|true|none|none|
|»» foodList|[[Food](#schemafood)]|true|none|点菜信息|
|»»» foodName|string|true|none|菜品名称|
|»»» price|number|true|none|菜品价格|
|»»» description|string|true|none|菜品简介|
|»»» foodId|integer|true|none|菜品id|
|»»» isLike|integer|true|none|0/1是否推荐|
|»»» category|integer|true|none|菜品类别：1-主菜，2-小吃，3-饮料|
|»»» image|string|true|none|菜品图片url链接|
|»»» isAvailable|integer|true|none|0/1是否可售|
|»» order|[TOrder](#schematorder)|true|none|none|
|»»» orderId|integer|true|none|订单编号，每个订单唯一|
|»»» tableId|integer|true|none|桌号|
|»»» userId|integer|true|none|服务员ID|
|»»» memo|string|true|none|订单备注|
|»»» totalPrice|number|true|none|订单总价|
|»»» status|integer|true|none|订单状态（0-未支付，1-已支付）|
|»»» createTime|string|true|none|点餐时间|
|»»» finishTime|string|true|none|结餐时间|
|»»» numPeople|integer|true|none|用餐人数|

## GET 根据ID显示订单详情

GET /order/get_by_id

> Body 请求参数

```yaml
id: "3"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string|true|none|

> 返回示例

> 成功

```json
{
  "code": 1,
  "msg": "success",
  "data": {
    "orderId": 4,
    "userId": 1,
    "tableId": 1,
    "totalPrice": 100,
    "memo": "加辣",
    "status": 3,
    "createTime": "2022-03-02T17:44:28",
    "finishTime": "2022-03-04T10:47:02",
    "numPeople": 4,
    "username": "刘一璇1"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» msg|string|true|none|none|
|» data|object|true|none|none|
|»» orderId|integer|true|none|none|
|»» userId|integer|true|none|none|
|»» tableId|integer|true|none|none|
|»» totalPrice|number|true|none|none|
|»» memo|string|true|none|none|
|»» status|integer|true|none|none|
|»» createTime|string|true|none|none|
|»» finishTime|string|true|none|none|
|»» numPeople|integer|true|none|none|
|»» username|string|true|none|none|

## GET 根据桌号或编号搜索订单

GET /order/select_by_table_or_id

如果提交的查询调价为空，返回所有数据

> Body 请求参数

```yaml
id: "3"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string|false|桌号或订单号|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» data|[[TOrder](#schematorder)]|true|none|none|
|»» orderId|integer|true|none|订单编号，每个订单唯一|
|»» tableId|integer|true|none|桌号|
|»» userId|integer|true|none|服务员ID|
|»» memo|string|true|none|订单备注|
|»» totalPrice|number|true|none|订单总价|
|»» status|integer|true|none|订单状态（0-未支付，1-已支付）|
|»» createTime|string|true|none|点餐时间|
|»» finishTime|string|true|none|结餐时间|
|»» numPeople|integer|true|none|用餐人数|

## GET 根据订单创建日期查询订单

GET /order/select_by_date

> Body 请求参数

```yaml
date: 2022-02-25

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» date|body|string|true|日期|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» data|[[TOrder](#schematorder)]|true|none|none|
|»» orderId|integer|true|none|订单编号，每个订单唯一|
|»» tableId|integer|true|none|桌号|
|»» userId|integer|true|none|服务员ID|
|»» memo|string|true|none|订单备注|
|»» totalPrice|number|true|none|订单总价|
|»» status|integer|true|none|订单状态（0-未支付，1-已支付）|
|»» createTime|string|true|none|点餐时间|
|»» finishTime|string|true|none|结餐时间|
|»» numPeople|integer|true|none|用餐人数|

## POST 删除订单

POST /order/delete

> Body 请求参数

```yaml
id: "2"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string|true|none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|是否删除成功|
|» msg|string|true|none|具体信息|

## POST 订单直接免单

POST /order/free

> Body 请求参数

```yaml
id: "2"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string|true|none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|是否面单成功|
|» msg|string|true|none|返回消息内容|

# 点餐/管理员/订单管理/显示订单

## GET 正在进行

GET /order/todoList

显示正在进行的订单

> 返回示例

> 成功

```json
{
  "code": 1,
  "data": [
    {
      "orderId": 46,
      "tableId": 38,
      "userId": 18,
      "totalPrice": 51,
      "status": 65,
      "memo": "incididunt sint deserunt",
      "createTime": "2010-01-27 19:24:51",
      "finishTime": "2001-02-05 23:05:53",
      "numPeople": 56
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» data|[object]|true|none|none|
|»» orderId|integer|false|none|none|
|»» tableId|integer|false|none|none|
|»» userId|integer|false|none|none|
|»» totalPrice|integer|false|none|none|
|»» status|integer|false|none|none|
|»» memo|string|false|none|none|
|»» createTime|string|false|none|none|
|»» finishTime|string|false|none|none|
|»» numPeople|integer|false|none|none|

## GET 已完成

GET /order/finishList

显示已完成的订单信息

> 返回示例

> 成功

```json
{
  "code": 1,
  "data": [
    {
      "orderId": 46,
      "tableId": 38,
      "userId": 18,
      "totalPrice": 51,
      "status": 65,
      "memo": "incididunt sint deserunt",
      "createTime": "2010-01-27 19:24:51",
      "finishTime": "2001-02-05 23:05:53",
      "numPeople": 56
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» data|[object]|true|none|none|
|»» orderId|integer|false|none|none|
|»» tableId|integer|false|none|none|
|»» userId|integer|false|none|none|
|»» totalPrice|integer|false|none|none|
|»» status|integer|false|none|none|
|»» memo|string|false|none|none|
|»» createTime|string|false|none|none|
|»» finishTime|string|false|none|none|
|»» numPeople|integer|false|none|none|

## GET 显示所有订单信息

GET /order/list

> 返回示例

> 成功

```json
{
  "code": 1,
  "data": [
    {
      "orderId": 46,
      "tableId": 38,
      "userId": 18,
      "totalPrice": 51,
      "status": 65,
      "memo": "incididunt sint deserunt",
      "createTime": "2010-01-27 19:24:51",
      "finishTime": "2001-02-05 23:05:53",
      "numPeople": 56
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» data|[object]|true|none|none|
|»» orderId|integer|false|none|none|
|»» tableId|integer|false|none|none|
|»» userId|integer|false|none|none|
|»» totalPrice|number|false|none|none|
|»» status|integer|false|none|none|
|»» memo|string|false|none|none|
|»» createTime|string|false|none|none|
|»» finishTime|string|false|none|none|
|»» numPeople|integer|false|none|none|
|»» username|string|true|none|none|

# 点餐/管理员/菜品查询

## GET 显示所有菜品信息

GET /food/list

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» data|[[Food](#schemafood)]|true|none|none|
|»» foodName|string|true|none|菜品名称|
|»» price|number|true|none|菜品价格|
|»» description|string|true|none|菜品简介|
|»» foodId|integer|true|none|菜品id|
|»» isLike|integer|true|none|0/1是否推荐|
|»» category|integer|true|none|菜品类别：1-主菜，2-小吃，3-饮料|
|»» image|string|true|none|菜品图片url链接|
|»» isAvailable|integer|true|none|0/1是否可售|

## GET 根据菜品编号或名称查找菜品

GET /food/select_by_name_id

模糊查询。如果提交结果为空，则返回所有数据

> Body 请求参数

```yaml
query: 菜

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» query|body|string|true|菜品编号或名称|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» data|[[Food](#schemafood)]|true|none|none|
|»» foodName|string|true|none|菜品名称|
|»» price|number|true|none|菜品价格|
|»» description|string|true|none|菜品简介|
|»» foodId|integer|true|none|菜品id|
|»» isLike|integer|true|none|0/1是否推荐|
|»» category|integer|true|none|菜品类别：1-主菜，2-小吃，3-饮料|
|»» image|string|true|none|菜品图片url链接|
|»» isAvailable|integer|true|none|0/1是否可售|

## GET 根据价格区间查找菜品

GET /food/select_by_price

> Body 请求参数

```yaml
min: "40"
max: "60"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» min|body|string|true|最低价格（min与max不可同时为null）|
|» max|body|string|true|最高价格（min与max不可同时为null）|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|该价格区间是否存在菜品|
|» data|[[Food](#schemafood)]|true|none|符合条件的食物|
|»» foodName|string|true|none|菜品名称|
|»» price|number|true|none|菜品价格|
|»» description|string|true|none|菜品简介|
|»» foodId|integer|true|none|菜品id|
|»» isLike|integer|true|none|0/1是否推荐|
|»» category|integer|true|none|菜品类别：1-主菜，2-小吃，3-饮料|
|»» image|string|true|none|菜品图片url链接|
|»» isAvailable|integer|true|none|0/1是否可售|

## GET 根据类别查询菜品

GET /food/select_by_category

> Body 请求参数

```yaml
category: "2"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» category|body|string|true|1-主菜，2-小吃，3-饮料|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|查询是否成功|
|» data|[[Food](#schemafood)]|true|none|符合条件的菜品数组|
|»» foodName|string|true|none|菜品名称|
|»» price|number|true|none|菜品价格|
|»» description|string|true|none|菜品简介|
|»» foodId|integer|true|none|菜品id|
|»» isLike|integer|true|none|0/1是否推荐|
|»» category|integer|true|none|菜品类别：1-主菜，2-小吃，3-饮料|
|»» image|string|true|none|菜品图片url链接|
|»» isAvailable|integer|true|none|0/1是否可售|

## GET 根据id显示菜品

GET /food/select_by_id

> Body 请求参数

```yaml
id: "3"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string|true|none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» data|[Food](#schemafood)|true|none|none|
|»» foodName|string|true|none|菜品名称|
|»» price|number|true|none|菜品价格|
|»» description|string|true|none|菜品简介|
|»» foodId|integer|true|none|菜品id|
|»» isLike|integer|true|none|0/1是否推荐|
|»» category|integer|true|none|菜品类别：1-主菜，2-小吃，3-饮料|
|»» image|string|true|none|菜品图片url链接|
|»» isAvailable|integer|true|none|0/1是否可售|

## GET 查询菜品的销售榜

GET /food/get_top3_food

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» data|[[FoosSales](#schemafoossales)]|true|none|none|
|»» foodName|string|true|none|菜品名称|
|»» price|number|true|none|菜品价格|
|»» description|string|true|none|菜品描述|
|»» foodId|integer|true|none|菜品 ID|
|»» isLike|integer|true|none|0/1是否推荐|
|»» category|integer|true|none|菜品类别：1-主菜，2-小吃，3-饮料|
|»» image|string|true|none|菜品图片连接|
|»» isAvailable|integer|true|none|0/1是否可售|
|»» sales|integer|true|none|菜品销量|

# 点餐/服务员/公告

## POST 公告设为已读

POST /waiter/notice/status

> Body 请求参数

```yaml
notice_id: "2"
user_id: "8"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» notice_id|body|string|true|none|
|» user_id|body|string|true|none|

> 返回示例

> 成功

```json
{
  "code": 1,
  "msg": "成功"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» msg|string|true|none|none|

## GET 实时公告

GET /waiter/notice

服务员实时公告页面

> Body 请求参数

```yaml
user_id: "3"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» user_id|body|string|true|none|

> 返回示例

> 成功

```json
{
  "code": 1,
  "msg": "成功",
  "data": {
    "userId": 123,
    "userName": "蒋丽",
    "role": 2,
    "portrait": "http://dummyimage.com/120x90",
    "password": 123456,
    "notice": [
      {
        "notice_id": 1,
        "title": "test1",
        "status": 0,
        "content": "test1 content"
      },
      {
        "notice_id": 2,
        "title": "test2",
        "status": 1,
        "content": "test2 content"
      }
    ]
  }
}
```

```json
{
  "code": -1,
  "msg": "失败",
  "data": {
    "user": {
      "user_id": 83,
      "user_name": "马明",
      "role": 84,
      "portrait": "voluptate",
      "password": 20
    },
    "notice": [
      {
        "title": "自日往角难们",
        "status": 84
      },
      {
        "title": "政委程受入对劳",
        "status": 2
      },
      {
        "title": "群器从速先好",
        "status": 75
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» msg|string|true|none|none|
|» data|object|true|none|none|
|»» userId|integer|true|none|none|
|»» userName|string|true|none|none|
|»» role|integer|true|none|none|
|»» portrait|string|true|none|none|
|»» password|string|true|none|none|
|»» notice|[object]|true|none|none|
|»»» noticeId|integer|true|none|none|
|»»» title|string|true|none|none|
|»»» status|integer|true|none|none|
|»»» content|string|true|none|none|
|»»» createTime|string|true|none|none|

## POST 公告详情页

POST /waiter/notice_details

显示公告详情

> Body 请求参数

```yaml
notice_id: "1"
user_id: "8"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» notice_id|body|string|true|none|
|» user_id|body|string|true|none|

> 返回示例

> 成功

```json
{
  "code": 1,
  "msg": "成功",
  "data": {
    "noticeId": 25,
    "title": "test",
    "content": "hello world",
    "createTime": "2022-2-12-14-31",
    "status": 1
  }
}
```

```json
{
  "code": -1,
  "msg": "失败",
  "data": {
    "notice_id": 70,
    "title": "要温除目",
    "content": "in aliqua id sed elit",
    "create_time": "1991-03-07 03:29:31",
    "status": 33
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» msg|string|true|none|none|
|» data|object|true|none|none|
|»» noticeId|integer|true|none|none|
|»» title|string|true|none|none|
|»» content|string|true|none|none|
|»» createTime|string|true|none|none|
|»» status|integer|true|none|none|

# 点餐/服务员/后厨消息

## POST 后厨消息设为已读

POST /waiter/message/status

> Body 请求参数

```yaml
message_id: "1"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» message_id|body|string|true|none|

> 返回示例

> 成功

```json
{
  "code": 1,
  "msg": "成功"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» msg|string|true|none|none|

## GET 后厨消息列表

GET /waiter/message

服务员实时公告页面

> Body 请求参数

```yaml
receive_user: "2"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» receive_user|body|string|true|none|

> 返回示例

> 成功

```json
{
  "code": 1,
  "msg": "成功",
  "data": {
    "userId": 123,
    "userName": "蒋丽",
    "role": 2,
    "portrait": "http://dummyimage.com/120x90",
    "password": "123456",
    "messages": [
      {
        "messageId": 1,
        "orderId": 1,
        "title": "test2",
        "content": "hello",
        "creatTime": "2022-12-20 12:12:12",
        "sendUser": 2,
        "receiveUser": 3,
        "status": 0,
        "senderName": "shan"
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» msg|string|true|none|none|
|» data|object|true|none|none|
|»» userId|integer|true|none|服务员的user_id|
|»» userName|string|true|none|none|
|»» role|integer|true|none|none|
|»» portrait|string|true|none|none|
|»» password|string|true|none|none|
|»» messages|[object]|true|none|none|
|»»» messageId|integer|false|none|none|
|»»» orderId|integer|false|none|none|
|»»» title|string|false|none|none|
|»»» content|string|false|none|none|
|»»» creatTime|string|false|none|none|
|»»» sendUser|integer|false|none|none|
|»»» receiveUser|integer|false|none|none|
|»»» status|integer|false|none|none|
|»»» senderName|string|false|none|发这条消息的后厨的username|

## GET 后厨消息详情

GET /waiter/message_details

显示后厨发送的消息

> Body 请求参数

```yaml
message_id: "1"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» message_id|body|string|true|none|

> 返回示例

> 成功

```json
{
  "code": 1,
  "msg": "成功",
  "data": {
    "messageId": 1,
    "orderId": 1,
    "title": "test2",
    "content": "hello",
    "createTime": "2022-12-20 12:12:12",
    "sendUser": 2,
    "receiveUser": 3,
    "status": 0,
    "senderName": "zhan"
  }
}
```

```json
{
  "code": -1,
  "msg": "失败",
  "data": {
    "order_id": 83,
    "title": "酸造料感该光",
    "content": "proident sed Lorem",
    "create_time": "2006-06-09 14:18:16",
    "status": 78
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» msg|string|true|none|none|
|» data|object|true|none|none|
|»» messageId|integer|true|none|none|
|»» orderId|integer|true|none|none|
|»» title|string|true|none|none|
|»» content|string|true|none|none|
|»» createTime|string|true|none|none|
|»» sendUser|integer|true|none|none|
|»» receiveUser|integer|true|none|none|
|»» status|integer|true|none|none|
|»» senderName|string|true|none|none|

# 点餐/服务员/点菜

## POST 确认点单

POST /waiter/take_order

点击确认点单

> Body 请求参数

```json
{
  "user_id": 94,
  "table_id": 40,
  "num_people": 28,
  "memo": "eu",
  "total_price": 5,
  "orderViews": [
    {
      "foodId": 5,
      "numFood": 58
    }
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» userId|body|integer|true|none|
|» tableId|body|integer|true|none|
|» numPeople|body|integer|true|none|
|» memo|body|string|true|none|
|» totalPrice|body|number|true|none|
|» orderViews|body|[object]|true|none|
|»» foodId|body|integer|true|none|
|»» numFood|body|integer|true|none|

> 返回示例

> 成功

```json
{
  "code": 1,
  "msg": "成功"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» msg|string|true|none|none|

## GET 菜品列表

GET /waiter/food

服务员菜品列表

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|query|query|string|false|none|

> 返回示例

> 成功

```json
{
  "code": 46,
  "msg": "dolor",
  "data": [
    {
      "description": "quis tempor in Ut nostrud",
      "category": 20,
      "isLike": true,
      "foodId": 38,
      "price": 23,
      "sales": 17,
      "image": "http://dummyimage.com/400x400",
      "isAvailable": true,
      "name": "活节里何和真"
    },
    {
      "isAvailable": true,
      "isLike": false,
      "image": "http://dummyimage.com/400x400",
      "description": "in dolor tempor enim",
      "name": "工到将离",
      "category": 78,
      "foodId": 34,
      "sales": 95,
      "price": 37
    }
  ]
}
```

```json
{
  "code": -1,
  "msg": "失败",
  "data": {
    "food": {
      "name": "少部王名好图",
      "price": 7,
      "description": "voluptate",
      "food_id": 66,
      "is_like": true,
      "category": 23,
      "image": "http://dummyimage.com/336x280",
      "is_available": true,
      "sales": 1
    }
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» msg|string|true|none|none|
|» data|[object]|true|none|none|
|»» name|string|false|none|none|
|»» price|number|false|none|none|
|»» description|string|false|none|none|
|»» foodId|integer|false|none|none|
|»» isLike|boolean|false|none|none|
|»» category|integer|false|none|none|
|»» image|string|false|none|none|
|»» isAvailable|boolean|false|none|none|
|»» sales|integer|false|none|none|

## GET 菜品详情页面

GET /waiter/food_details

服务员菜品详情

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|food_id|query|string|true|none|

> 返回示例

> 成功

```json
{
  "code": 1,
  "msg": "成功",
  "data": {
    "foodName": "重庆小面",
    "price": 40,
    "description": "aliqua",
    "foodId": 94,
    "isLike": 1,
    "category": 1,
    "image": "http://dummyimage.com/180x150",
    "isAvailable": 1,
    "sales": 85
  }
}
```

```json
{
  "code": -1,
  "msg": "失败",
  "data": {
    "food": {
      "name": "务术形增",
      "price": 23,
      "description": "dolor consectetur reprehenderit id",
      "food_id": 18,
      "is_like": false,
      "category": 63,
      "image": "http://dummyimage.com/400x400",
      "is_available": true,
      "sales": 85
    }
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» msg|string|true|none|none|
|» data|object|true|none|none|
|»» foodName|string|true|none|none|
|»» price|number|true|none|none|
|»» description|string|true|none|none|
|»» foodId|integer|true|none|none|
|»» isLike|integer|true|none|none|
|»» category|integer|true|none|none|
|»» image|string|true|none|none|
|»» isAvailable|integer|true|none|none|
|»» sales|integer|true|none|none|

# 点餐/服务员/订单结算

## GET 待结算订单列表

GET /waiter/to_pay

显示待结算订单

> Body 请求参数

```yaml
user_id: "8"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» user_id|body|string|true|none|

> 返回示例

> 成功

```json
{
  "code": 1,
  "msg": "成功",
  "data": [
    {
      "orderId": 3,
      "userId": 2,
      "tableId": 39,
      "totalPrice": 1,
      "memo": "sit",
      "createTime": "2220-12-12 12:12:12",
      "finishTime": "2220-12-12 12:12:12",
      "numPeople": 97
    }
  ]
}
```

```json
{
  "code": -1,
  "msg": "失败",
  "data": {
    "order": {
      "order_id": 51,
      "table_id": 30,
      "user_id": 17,
      "total_price": 82,
      "status": 4,
      "memo": "fugiat adipisicing nulla dolor elit",
      "create_time": "1982-11-21 12:41:09",
      "finish_time": "2010-04-02 14:45:22",
      "num_people": 13
    }
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» msg|string|true|none|none|
|» data|[object]|true|none|none|
|»» orderId|integer|false|none|none|
|»» userId|integer|false|none|none|
|»» tableId|integer|false|none|none|
|»» totalPrice|integer|false|none|none|
|»» memo|string|false|none|none|
|»» createTime|string|false|none|none|
|»» finishTime|string|false|none|none|
|»» numPeople|integer|false|none|none|

## POST 确认结算

POST /waiter/to_pay/pay

点击结算按钮 改变订单状态为已结算

> Body 请求参数

```yaml
order_id: "1"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» order_id|body|string|true|none|

> 返回示例

> 成功

```json
{
  "code": 1,
  "msg": "成功"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» msg|string|true|none|none|

## POST 订单结算详情页面

POST /waiter/order_details

订单结算详情

> Body 请求参数

```yaml
order_id: "1"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» order_id|body|string|true|none|

> 返回示例

> 成功

```json
{
  "code": 1,
  "msg": "成功",
  "data": {
    "torder": {
      "orderId": 49,
      "userID": 49,
      "tableId": 90,
      "totalPrice": 96,
      "memo": "dolor eu sunt",
      "status": 1,
      "createTime": "2013-10-27 10:38:00",
      "finishTime": "2020-10-09 08:31:51",
      "numPeople": 14
    },
    "foodList": [
      {
        "description": "culpa sint magna velit veniam",
        "isLike": 25,
        "category": 67,
        "price": 24,
        "foodName": "离存之该程心",
        "image": "123123.123.123",
        "numFood": 12
      }
    ]
  }
}
```

```json
{
  "code": -1,
  "msg": "失败",
  "data": {
    "order_id": 36,
    "table_id": 98,
    "create_time": "1999-07-08 02:13:47",
    "finish_time": "2012-10-16 18:42:21",
    "num_people": 26,
    "user": {
      "user_id": 66,
      "user_name": "赵秀兰"
    },
    "food": [
      {
        "description": "sunt quis irure",
        "food_name": "也回利等比装单",
        "food_id": 63,
        "category": 43
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» msg|string|true|none|none|
|» data|object|true|none|none|
|»» torder|object|true|none|none|
|»»» orderId|integer|true|none|none|
|»»» userId|integer|true|none|none|
|»»» tableId|integer|true|none|none|
|»»» totalPrice|integer|true|none|none|
|»»» memo|string|true|none|none|
|»»» status|integer|true|none|none|
|»»» createTime|string|true|none|none|
|»»» finishTime|string|true|none|none|
|»»» numPeople|integer|true|none|none|
|»» foodList|[object]|true|none|none|
|»»» description|string|false|none|none|
|»»» isLike|integer|false|none|none|
|»»» category|integer|false|none|none|
|»»» price|integer|false|none|none|
|»»» foodName|string|false|none|none|
|»»» image|string|false|none|none|
|»»» numFood|integer|false|none|none|

# 点餐/服务员/传菜消息

## GET 传菜推送消息列表

GET /waiter/take_food

显示传菜消息

> Body 请求参数

```yaml
{}

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|user_id|query|string|true|none|
|body|body|object|false|none|

> 返回示例

> 成功

```json
{
  "code": 1,
  "msg": "成功",
  "data": [
    {
      "tableId": 1,
      "orderId": 2,
      "foodId": 3,
      "foodName": "豆腐",
      "image": "www.123.com",
      "status": 2
    }
  ]
}
```

```json
{
  "code": -1,
  "msg": "失败",
  "data": {
    "user": {
      "user_id": 92,
      "user_name": "冯洋",
      "role": 13,
      "portrait": "consequat ut sunt amet Excepteur",
      "password": 79
    },
    "ordered_food": {
      "name": "比各三县社",
      "food_id": 47,
      "category": 18,
      "image": "http://dummyimage.com/400x400",
      "table_id": 37
    }
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» msg|string|true|none|none|
|» data|[object]|true|none|none|
|»» tableId|integer|false|none|none|
|»» orderId|integer|false|none|none|
|»» foodId|integer|false|none|none|
|»» foodName|string|false|none|none|
|»» image|string|false|none|none|
|»» status|integer|false|none|none|

## GET 确认传菜

GET /waiter/take_food/update

将传菜消息转为已传菜

> Body 请求参数

```yaml
order_id: "2"
food_id: "2"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» order_id|body|string|true|none|
|» food_id|body|string|true|none|

> 返回示例

> 成功

```json
{
  "code": 1,
  "msg": "成功"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# 点餐/后厨/订单

## POST 订单菜品烹饪状态

POST /back-kitchen/detail/status

改变未出餐订单菜品烹饪状态。

> Body 请求参数

```yaml
order_id: "1"
food_id: "1"
status: 0,1,2
table_id: "1"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» order_id|body|string|true|订单编号|
|» food_id|body|string|true|订单中某个菜品编号|
|» status|body|string|true|菜品烹饪状态（0-准备烹饪，1-正在烹饪，3-烹制完成）|
|» table_id|body|string|true|桌号|

> 返回示例

> 成功

```json
{
  "code": 1,
  "msg": "成功",
  "data": null
}
```

```json
{
  "code": -1,
  "msg": "失败",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» msg|string|true|none|none|
|» data|null|true|none|none|

## GET 订单列表

GET /back-kitchen/order_list

显示订单列表

> 返回示例

> 成功

```json
{
  "code": 1,
  "msg": "成功",
  "data": {
    "user": {
      "ID": 123,
      "name": "name",
      "imgUrl": "url"
    },
    "orders": {
      "todo": [
        "order_id1",
        "order_id2"
      ],
      "complete": [
        "order_id1",
        "order_id2"
      ]
    }
  }
}
```

```json
{
  "code": -1,
  "msg": "失败"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» msg|string|true|none|none|
|» data|object|true|none|none|
|»» user|object|true|none|none|
|»»» ID|integer|true|none|none|
|»»» name|string|true|none|none|
|»»» imgUrl|string|true|none|none|
|»» orders|object|true|none|none|
|»»» todo|[string]|true|none|none|
|»»» complete|[string]|true|none|none|

## GET 获取所有服务员编号

GET /back-kitchen/waiterIds

获取所有服务员编号。

> 返回示例

> 成功

```json
{
  "code": 1,
  "msg": "成功",
  "data": {
    "waiterIds": [
      1,
      2,
      3
    ]
  }
}
```

```json
{
  "code": -1,
  "msg": "失败",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» msg|string|true|none|none|
|» data|object|true|none|none|
|»» waiterIds|[integer]|true|none|none|

## GET 根据订单号获取服务员编号。

GET /back-kitchen/waiterId

根据订单号获取服务员编号。

> Body 请求参数

```yaml
user_id: "1"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» user_id|body|string|true|订单编号|

> 返回示例

> 成功

```json
{
  "code": 1,
  "msg": "成功",
  "data": 1
}
```

```json
{
  "code": -1,
  "msg": "失败",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» msg|string|true|none|none|
|» data|integer|true|none|none|

## GET 获取所有订单号

GET /back-kitchen/orderIds

获取所有订单号。

> 返回示例

> 成功

```json
{
  "code": 1,
  "msg": "成功",
  "data": {
    "orderId": [
      1,
      2,
      3,
      4
    ]
  }
}
```

```json
{
  "code": -1,
  "msg": "失败",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» msg|string|true|none|none|
|» data|object|true|none|none|
|»» orderId|[integer]|true|none|none|

## GET 订单详情

GET /back-kitchen/detail

订单详情页面

> Body 请求参数

```yaml
order_id: "1"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» order_id|body|string|true|订单编号|

> 返回示例

> 成功

```json
{
  "code": 1,
  "msg": "成功",
  "data": {
    "order_id": "abc",
    "table_id": 1,
    "waiter_name": "name",
    "waiter_id": 1,
    "order_note": "note",
    "food": [
      {
        "foodId": 1,
        "name": "name",
        "number": 1,
        "status": 1
      }
    ]
  }
}
```

```json
{
  "code": -1,
  "msg": "失败"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» msg|string|true|none|none|
|» data|object|true|none|none|
|»» orderId|integer|true|none|none|
|»» tableId|integer|true|none|none|
|»» username|string|true|none|none|
|»» userId|integer|true|none|none|
|»» memo|string|true|none|none|
|»» food|[object]|true|none|none|
|»»» foodId|integer|false|none|none|
|»»» name|string|false|none|none|
|»»» number|integer|false|none|none|
|»»» status|integer|false|none|none|

# 点餐/后厨/消息

## POST 消息编辑

POST /back-kitchen/notify

消息编辑页面

> Body 请求参数

```yaml
title: string
order_id: string
content: string
create_time: string

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» title|body|string|true|消息标题|
|» order_id|body|string|true|订单编号|
|» content|body|string|true|订单内容|
|» create_time|body|string|true|创建时间|

> 返回示例

> 成功

```json
{
  "code": 1,
  "msg": "成功"
}
```

```json
{
  "code": -1,
  "msg": "失败"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» msg|string|true|none|none|

## POST 后厨通知服务员

POST /back-kitchen/message

后厨通知服务员消息。

> Body 请求参数

```yaml
title: string
content: string
order_id: string
create_time: string
send_user: "13"
receive_user: "8"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» title|body|string|true|通知标题|
|» content|body|string|true|通知内容|
|» order_id|body|string|true|订单号|
|» create_time|body|string|true|通知创建时间|
|» send_user|body|string|true|发送通知后厨id|
|» receive_user|body|string|true|接收通知服务员id|

> 返回示例

> 成功

```json
{
  "code": 1,
  "msg": "成功",
  "data": null
}
```

```json
{
  "code": -1,
  "mgs": "失败",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# 点餐/后厨/公告

## GET 实时公告

GET /back-kitchen/notice

实时公告页面

> Body 请求参数

```yaml
user_id: string

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» user_id|body|string|true|none|

> 返回示例

> 成功

```json
{
  "code": 1,
  "msg": "成功",
  "data": {
    "notices": [
      {
        "content": "123",
        "createTime": "2022-2-2 12:00:00",
        "createTimeStr": "123",
        "noticeId": 1,
        "status": 0,
        "title": "123"
      }
    ]
  }
}
```

```json
{
  "code": -1,
  "msg": "失败"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» msg|string|true|none|none|
|» data|object|true|none|none|
|»» notices|[object]|true|none|none|
|»»» content|string|false|none|none|
|»»» createTime|string|false|none|none|
|»»» createTimeStr|string|false|none|none|
|»»» noticeId|integer|false|none|none|
|»»» status|integer|false|none|none|
|»»» title|string|false|none|none|

## POST 后厨公告消息标记为已读

POST /back-kitchen/notice/read

后厨公告消息标记为已读。

> Body 请求参数

```yaml
user_id: "13"
notice_id: "1"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» user_id|body|string|true|后厨用户id|
|» notice_id|body|string|true|公告id|

> 返回示例

> 成功

```json
{
  "code": 1,
  "msg": "成功",
  "data": null
}
```

```json
{
  "code": -1,
  "msg": "失败",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» msg|string|true|none|none|
|» data|null|true|none|none|

# 点餐/后厨/出餐

## POST 烹饪状态

POST /back-kitchen/food_status

设置烹饪状态的按钮

> Body 请求参数

```yaml
status: "1"
order_id: string
food_id: string

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» status|body|string|true|当前订单特定菜品烹饪状态|
|» order_id|body|string|true|none|
|» food_id|body|string|true|none|

> 返回示例

> 成功

```json
{
  "code": 1,
  "msg": "成功"
}
```

```json
{
  "code": -1,
  "msg": "失败"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» msg|string|true|none|none|

## GET 未出餐

GET /back-kitchen/unfinished

显示未出餐订单列表

> 返回示例

> 成功

```json
{
  "code": 9,
  "msg": "reprehenderit eu Lorem",
  "data": [
    {
      "orderId": 41,
      "tableId": 64,
      "userId": 3,
      "totalPrice": 32,
      "status": 25,
      "memo": "in",
      "createTime": "1978-12-07 12:04:11",
      "finishTime": "2001-07-24 06:18:22",
      "numPeople": 73
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» msg|string|true|none|none|
|» data|[[TOrder](#schematorder)]|true|none|none|
|»» orderId|integer|true|none|订单编号，每个订单唯一|
|»» tableId|integer|true|none|桌号|
|»» userId|integer|true|none|服务员ID|
|»» memo|string|true|none|订单备注|
|»» totalPrice|number|true|none|订单总价|
|»» status|integer|true|none|订单状态（0-未支付，1-已支付）|
|»» createTime|string|true|none|点餐时间|
|»» finishTime|string|true|none|结餐时间|
|»» numPeople|integer|true|none|用餐人数|

## GET 已出餐

GET /back-kitchen/finished

显示已出餐订单列表

> 返回示例

> 成功

```json
{
  "code": -1,
  "msg": "失败"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» msg|string|true|none|none|
|» data|[[TOrder](#schematorder)]|true|none|none|
|»» orderId|integer|true|none|订单编号，每个订单唯一|
|»» tableId|integer|true|none|桌号|
|»» userId|integer|true|none|服务员ID|
|»» memo|string|true|none|订单备注|
|»» totalPrice|number|true|none|订单总价|
|»» status|integer|true|none|订单状态（0-未支付，1-已支付）|
|»» createTime|string|true|none|点餐时间|
|»» finishTime|string|true|none|结餐时间|
|»» numPeople|integer|true|none|用餐人数|

# 登录

## POST 用户登录界面请求

POST /user/index

所有用户登录接口，其中包括餐厅管理员、餐厅服务员以及餐厅后厨。
(1) 判断code，为-1表示登录失败，此时 msg == "1"表示用户不存在，msg == "2"表示密码错误
(2) 判断code，为 1 表示登录成功，此时 data.role == 1，2，3代表：1-管理员，2-服务员，3-厨师

> Body 请求参数

```yaml
email: 1446775342@qq.com
password: "123"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» email|body|string|true|用户邮箱|
|» password|body|string|true|用户密码|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|-1失败（原因见msg），1成功|
|» data|[User](#schemauser)|true|none|none|
|»» userId|integer|true|none|员工编号与登录账号|
|»» password|string|true|none|none|
|»» username|string|true|none|无|
|»» role|integer|true|none|1-管理员，2-服务员，3-厨师|
|»» portrait|string|true|none|图片链接|
|»» phone|string|true|none|none|
|»» salary|number|true|none|none|
|»» bonus|number|true|none|none|
|» msg|string|true|none|"1"-用户名不存在，"2"-密码不存在，"success"-成功|

## GET 显示已登录员工的信息

GET /user/user_info

> Body 请求参数

```yaml
id: "1"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|string|true|管理员自己的ID|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» data|[User](#schemauser)|true|none|none|
|»» userId|integer|true|none|员工编号与登录账号|
|»» password|string|true|none|none|
|»» username|string|true|none|无|
|»» role|integer|true|none|1-管理员，2-服务员，3-厨师|
|»» portrait|string|true|none|图片链接|
|»» phone|string|true|none|none|
|»» salary|number|true|none|none|
|»» bonus|number|true|none|none|
|» code|integer|true|none|none|

# 数据可视化

## GET 销售榜前10菜品

GET /showTopFood

销售榜前10菜品信息

> 返回示例

> 成功

```json
{
  "code": 1,
  "msg": "success",
  "data": [
    {
      "foodName": "鱼香肉丝",
      "foodId": 5,
      "sales": 1388,
      "percent": 0.8218
    },
    {
      "foodName": "鱼香肉丝",
      "foodId": 22,
      "sales": 120,
      "percent": 0.071
    },
    {
      "foodName": "麻婆豆腐",
      "foodId": 2,
      "sales": 49,
      "percent": 0.029
    },
    {
      "foodName": "豆腐花",
      "foodId": 4,
      "sales": 25,
      "percent": 0.0148
    },
    {
      "foodName": "松鼠桂鱼",
      "foodId": 8,
      "sales": 21,
      "percent": 0.0124
    },
    {
      "foodName": "羊肉串",
      "foodId": 9,
      "sales": 14,
      "percent": 0.0083
    },
    {
      "foodName": "测试数据",
      "foodId": 20,
      "sales": 14,
      "percent": 0.0083
    },
    {
      "foodName": "BB面",
      "foodId": 31,
      "sales": 13,
      "percent": 0.0077
    },
    {
      "foodName": "可口可乐",
      "foodId": 33,
      "sales": 13,
      "percent": 0.0077
    },
    {
      "foodName": "东坡肉",
      "foodId": 11,
      "sales": 9,
      "percent": 0.0053
    },
    {
      "foodName": "撒尿牛丸",
      "foodId": 7,
      "sales": 8,
      "percent": 0.0047
    },
    {
      "foodName": "重庆鸡公煲",
      "foodId": 3,
      "sales": 6,
      "percent": 0.0036
    },
    {
      "foodName": "小丸子",
      "foodId": 32,
      "sales": 5,
      "percent": 0.003
    },
    {
      "foodName": "宫保鸡丁",
      "foodId": 1,
      "sales": 3,
      "percent": 0.0018
    },
    {
      "foodName": "冒菜",
      "foodId": 6,
      "sales": 1,
      "percent": 0.0006
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» msg|string|true|none|none|
|» data|[object]|true|none|none|
|»» foodName|string|false|none|none|
|»» foodId|integer|false|none|none|
|»» sales|integer|false|none|none|
|»» percent|number|false|none|none|

## POST 近M天销售额变化

POST /sale_change

展示第start天到第end天销售额随时间变化

> Body 请求参数

```yaml
start: 2022-03-08
end: 2022-03-11

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» start|body|string|true|none|
|» end|body|string|true|none|

> 返回示例

> 成功

```json
{
  "code": 1,
  "msg": "ok",
  "data": [
    {
      "time": "03-06",
      "sales": 8
    },
    {
      "time": "03-07",
      "sales": 8
    },
    {
      "time": "03-08",
      "sales": 8
    },
    {
      "time": "03-09",
      "sales": 8
    },
    {
      "time": "03-10",
      "sales": 8
    },
    {
      "time": "03-11",
      "sales": 8
    },
    {
      "time": "03-12",
      "sales": 8
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» msg|string|true|none|none|
|» data|[object]|true|none|none|
|»» time|string|false|none|none|
|»» salePrice|integer|false|none|none|

## GET 销售榜前10服务生

GET /showTopWaiter

> 返回示例

> 成功

```json
{
  "code": 1,
  "msg": "success",
  "data": [
    {
      "userName": "曾平",
      "userId": 13,
      "sales": 32,
      "percent": 0.6531
    },
    {
      "userName": "曾平",
      "userId": 8,
      "sales": 12,
      "percent": 0.2449
    },
    {
      "userName": "朱棣",
      "userId": 49,
      "sales": 4,
      "percent": 0.0816
    },
    {
      "userName": "李瑾美",
      "userId": 10,
      "sales": 1,
      "percent": 0.0204
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» msg|string|true|none|none|
|» data|[object]|true|none|none|
|»» username|string|false|none|none|
|»» userId|integer|false|none|none|
|»» sales|integer|false|none|销售额|
|»» percent|number|false|none|所占比例|

## POST 近M天销量变化

POST /sale_num_change

展示第start天到第end天销售额随时间变化

> Body 请求参数

```yaml
start: 2022-03-09
end: 2022-03-10

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|
|» start|body|string|true|none|
|» end|body|string|true|none|

> 返回示例

> 成功

```json
{
  "code": 1,
  "msg": "success",
  "data": [
    {
      "time": "2022-03-09",
      "sales": null,
      "nums": "23"
    },
    {
      "time": "2022-03-10",
      "sales": null,
      "nums": "7"
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» msg|string|true|none|none|
|» data|[object]|true|none|none|
|»» time|string|true|none|none|
|»» sales|integer|true|none|none|

## GET 今日总销售额

GET /today_sales

> 返回示例

> 成功

```json
{
  "code": 51,
  "msg": "sint quis ipsum est",
  "total": 72
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|» code|integer|true|none|none|
|» msg|string|true|none|none|
|» total|integer|true|none|none|

# 数据模型

<h2 id="tocS_Food">Food</h2>

<a id="schemafood"></a>
<a id="schema_Food"></a>
<a id="tocSfood"></a>
<a id="tocsfood"></a>

```json
{
  "foodName": "string",
  "price": 0,
  "description": "string",
  "foodId": 0,
  "isLike": 0,
  "category": 0,
  "image": "string",
  "isAvailable": 0
}

```

### 属性

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|foodName|string|true|none|菜品名称|
|price|number|true|none|菜品价格|
|description|string|true|none|菜品简介|
|foodId|integer|true|none|菜品id|
|isLike|integer|true|none|0/1是否推荐|
|category|integer|true|none|菜品类别：1-主菜，2-小吃，3-饮料|
|image|string|true|none|菜品图片url链接|
|isAvailable|integer|true|none|0/1是否可售|

<h2 id="tocS_FoosSales">FoosSales</h2>

<a id="schemafoossales"></a>
<a id="schema_FoosSales"></a>
<a id="tocSfoossales"></a>
<a id="tocsfoossales"></a>

```json
{
  "foodName": "string",
  "price": 0,
  "description": "string",
  "foodId": 0,
  "isLike": 0,
  "category": 0,
  "image": "string",
  "isAvailable": 0,
  "sales": 0
}

```

### 属性

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|foodName|string|true|none|菜品名称|
|price|number|true|none|菜品价格|
|description|string|true|none|菜品描述|
|foodId|integer|true|none|菜品 ID|
|isLike|integer|true|none|0/1是否推荐|
|category|integer|true|none|菜品类别：1-主菜，2-小吃，3-饮料|
|image|string|true|none|菜品图片连接|
|isAvailable|integer|true|none|0/1是否可售|
|sales|integer|true|none|菜品销量|

<h2 id="tocS_TOrder">TOrder</h2>

<a id="schematorder"></a>
<a id="schema_TOrder"></a>
<a id="tocStorder"></a>
<a id="tocstorder"></a>

```json
{
  "orderId": 0,
  "tableId": 0,
  "userId": 0,
  "memo": "string",
  "totalPrice": 0,
  "status": 0,
  "createTime": "string",
  "finishTime": "string",
  "numPeople": 0
}

```

### 属性

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|orderId|integer|true|none|订单编号，每个订单唯一|
|tableId|integer|true|none|桌号|
|userId|integer|true|none|服务员ID|
|memo|string|true|none|订单备注|
|totalPrice|number|true|none|订单总价|
|status|integer|true|none|订单状态（0-未支付，1-已支付）|
|createTime|string|true|none|点餐时间|
|finishTime|string|true|none|结餐时间|
|numPeople|integer|true|none|用餐人数|

<h2 id="tocS_UserSales">UserSales</h2>

<a id="schemausersales"></a>
<a id="schema_UserSales"></a>
<a id="tocSusersales"></a>
<a id="tocsusersales"></a>

```json
{
  "userId": 0,
  "username": "string",
  "role": 0,
  "portrait": "string",
  "password": "string",
  "phone": "string",
  "salary": 0,
  "bonus": 0,
  "sales": 0
}

```

### 属性

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|userId|integer|true|none|none|
|username|string|true|none|none|
|role|integer|true|none|1-管理员，2-服务员，3-厨师|
|portrait|string|true|none|none|
|password|string|true|none|none|
|phone|string|true|none|none|
|salary|number|true|none|none|
|bonus|number|true|none|none|
|sales|integer|true|none|提交的订单数量|

<h2 id="tocS_User">User</h2>

<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "userId": 0,
  "password": "string",
  "username": "string",
  "role": 0,
  "portrait": "string",
  "phone": "string",
  "salary": 0,
  "bonus": 0
}

```

### 属性

|名称|类型|必选|约束|说明|
|---|---|---|---|---|
|userId|integer|true|none|员工编号与登录账号|
|password|string|true|none|none|
|username|string|true|none|无|
|role|integer|true|none|1-管理员，2-服务员，3-厨师|
|portrait|string|true|none|图片链接|
|phone|string|true|none|none|
|salary|number|true|none|none|
|bonus|number|true|none|none|

