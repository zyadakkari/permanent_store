Permanence Store
A vintage e-commerce site built using Ruby on Rails Solidus framework.

View a live version on Heroku.




Features
- homepage image carousel
- collapsible sidebar and shopping cart
- add or remove products
- create orders and checkout
- remove product from cart


How to Use
Live Version
http://www.permanencee.com/

To run locally, you must have the following prerequisites:

Ruby >= 3.1.2
Rails >= 7.0.3
Bundler >= 2.3.6
PostgreSQL >= 14.3
Then, clone this repo, cd into the project's root directory and run:

bundle install
bin/rails server
Finally, visit http://localhost:3000/ to view the application.

Reflections
This project was for an Egyptian startup looking to implement a more customised experience than is available on Shopify, Wix etc. I decided to use Solidus to speed the development cycle and ensure that I was able to meet the deadline of four weeks.

I took time to understand the code structure of Solidus and to understand dependencies. If I was to redo the project, I would spend more time understanding this at the outset of the project, I placed too much emphasis on the UI and delved too deep into this before understanding how the back end was wired. This slowed me down at parts, for example in understanding where new assets should be added. Working through this gave me a much more rigorous understanding of Rails, however, and I now feel very comfortable in my understanding of the framework.

As this was the first project I deploy fully this introduced many challenges. One of these was learning how to use AWS and connect this to my app. Overall, it was intuitive, but it took me some time to iron out some bugs. Overall I enjoyed the project immensely and enjoyed working with Solidus.

Acknowledgements
I'd like to thank the generous people in the #rails-help channel of The Odin Project's Discord that took the time to answer any questions I had and guided me through difficulties. I'd equally like to thank the Solidus support team who invested their time in helping me with some final issues.
