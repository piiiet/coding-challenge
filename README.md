# Coding Challenge - BE
A **micro service** providing unique flights coming from two sources.
It is based on **[Micro](https://www.npmjs.com/package/micro)**.

## Task
Please plan and implement a service in Node.js which consumes 2 endpoints
(https://discovery-stub.comtravo.com/source1 & https://discovery-stub.comtravo.com/source2) exposed by
discovery-stub service(details see below).
Your service should get flights from these 2 routes, merge them, remove duplicates and send them to the
client.
As an identity of the flight can be used the combination of flight numbers and dates.
Note that discovery-stub service is not stable, i.e. it can sometimes fail or reply after a couple of seconds.
The response time of your service shouldn't take longer than 1 second.
Please write tests for your implementation. Also would be great to avoid usage of Nest.js framework.
Below is the info regarding discovery service:
The URL: https://discovery-stub.comtravo.com/
API Specs: https://discovery-stub.comtravo.com/api-docs/

## Installation

```shell script
$ npm install
```
 
## Usage

```shell script
$ npm start
````
Service is now avaliable at **[localhost:3000](http://localhost:3000)**.


## Testing
We use **[Jest](https://jestjs.io/en/)** for **unit tests**. We also test **code coverage** automatically.

```shell script
$ npm test
```

## Logging
No logging implemented to keep the code simple. 

## Please Note
There's also a script **index_min**, which is ONLY given for demonstration purpose.
It's not something I would use in an enterprise environment.
It's spaghetti code, non-reusable and non-testable.
I only provide it to show that the task can be solved with basically 3 lines of code.
