# Test task from the company Seeneco

## Description

To test your skills, we offer you to take a short test.

Implement an application that can display the following pages: `/` - main page `/login` - page for entering login and password `/news` - page with news (any information of the same type) `/profile` - page with arbitrary text, inaccessible without authorization.

Implement links on the site, in the header or footer: Home `/` News `/news` Profile `/profile`.

If the user clicks on the “profile” page and he is not “authorized” - redirect to the `/login` page.

The login form `/login` accepts "fake" data: `username: Admin password: 12345` If other data is entered, then a message is displayed: `Username` or `password` entered incorrectly If correct data is entered, then redirect to the `/profile` page.

User authorization information can be stored in `localStorage` with a simple `true/false` parameter. The database does not need to be implemented.

Everything you need to throw through `Redux`.

## Usage

### Starter files

Clone the repo test-task-seeneco with the following command:

```git clone git@github.com:alexweb79/test-task-seeneco.git```

### Install dependencies

```yarn install```

### Start development

```yarn start```
