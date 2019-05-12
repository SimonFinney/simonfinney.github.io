---
date: 2016-04-17
title: High-fidelity solution
description: #
---

This week was the culmination of all the research and design strategy I'd been
spearheading over the last month.

My goal was to simplify the current workflow of discovering events the target
audience might be interested in, based on relevancy, location, and those around
them. In an effort to illustrate the groundwork of design language and pattern
library research, information architecture and content strategy, cognitive and
social psychology, and universal design and accessibility, I've produced a
prototype that incorporates a number of these considerations.

Due to time constraints and resources, I only managed to perform usability
testing with one participant, the details of which can be found at the end of
this post.

As a learning challenge for myself, I decided to use some tools that I wasn't
too familiar with, Adobe Experience Design and Illustrator, in an effort to try
them out and determine whether I'd use them on other projects in future.

## Proposed user flow

My first task was to develop a user flow that I felt was suitable for my primary
persona, [Eoin](https://drive.google.com/open?id=0BzA9UyHASmcNNlhldnFENlJOUmc),
and the
[experience mapping and storyboarding](../gaining-empathy#experience-mapping-and-storyboarding)
exercises I conducted in my previous post on gaining empathy.

![User flow](/images/high-fidelity-solution/User-flow.jpg)

<figcaption>User flow</figcaption>

The final user flow is as follows:

1. Upon opening the application, Eoin's able to see recommendations based on his
   friends, location, and musical interests
2. To discover what's happening this weekend, he opens the filters and selects
   the correct dates
3. Once the filtered results roll in, he selects an event that interests him
4. He's able to view information about this event, and scrolls down
5. He sees which artists are supporting and which of his friends are attending
6. Finally, he's able to compare the price of tickets and navigate to the vendor
   of his choosing

Once decided on the basic flow, I took the opportunity to develop a general
aesthetic guideline for the outputted designs.

## Design Languages and Pattern Libraries

As I made the decision early on to develop the prototype to be used on a
smartphone, I inevitably ended up conforming to Google's [material design]([https://www.google.com/design/spec/material-design/introduction]) guidelines in places, incorporating appropriate interface elements where
necessary to ensure the application felt right.

However, as discussed in my post on
[design languages and pattern libraries](../design-languages-pattern-libraries#yelp-styleguide),
I also wanted to apply bright, clear, and engaging aesthetics to the designs
without distracting the audience from their current task.

I developed a very minimal colour palette, similar in simplicity to that of
Yelp's, that was specific and fit-for-purpose across the application:

- **Primary colour:** #4178be - Used for primary actions such as navigation
- **Primary colour:** #e71d32 - Dominant background colour
- **Secondary colour:** #4b8400 - Reserved for special actions like discovering
  prices

![Colour palette](../images/pages/high-fidelity-solution/Colour-palette.png)

<figcaption>Colour palette</figcaption>

The filter button present on the landing view shows how I adapted the
[Floating Action Button](https://www.google.com/design/spec/components/buttons-floating-action-button.html)
of material design to fall in line with the colour palette I adopted:

![Filter](../images/pages/high-fidelity-solution/Filter.png)

<figcaption>Filter</figcaption>

In order to maintain it's own style as an application regardless of what
platform it may be on, I made a decision to opt-out of using Roboto as a
typeface, and instead use the classic Helvetica with a number of different
weights.

Now I'll look at how the information architecture and content strategy developed
earlier on fits in with my proposed solution.

## Information Architecture and Content Strategy

I produced a number of design artifacts while auditing
[Tickets.ie](http://www.tickets.ie) with regards to information architecture and
content strategy.

Although I never fully realised high-fidelity interfaces for individual artists
and venues, the links between these sections remain for efficient navigation.
The metadata described in the proposed
[content model and entity relationship diagram](https://drive.google.com/open?id=1RkLuzMdiFI6pFTV3tAWfy5JzLK2fJIKnDQ)
rings true across my final design.

Looking back at my
[core sample content audit](https://drive.google.com/open?id=1CeML0_uEil-w-kM94HQg14zjiE_zuyzQ9Tv-YYDUjRU),
I also addressed the following red flags from the current website:

- High character counts on navigation links and subheadings
- Removed any redundant headings and labels, making the content it conveyed more
  apparent
- Produced consistent tone, voice, and wording across calls-to-action and labels

Moving on from this, I'll discuss how I incorporated cognitive and social
psychological aspects into my designs.

## Cognitive and Social Psychology

In my post on
[cognitive and social psychology](../cognitive-social-psychology#cognitive-psychology),
I spoke about reducing cognitive load by making information easier to digest
using a combination of media and text - here's an example of that in the design
solution:

![Reducing cognitive load](../images/pages/high-fidelity-solution/Reducing-cognitive-load.png)

<figcaption>Reducing cognitive load</figcaption>

Above we can also see linking to the venue that the event is being held in,
appealing to people's want to cut corners in common workflows.

We also see the social psychological concept of scarcity taking effect - showing
how many tickets are remaining may persuade the target audience to act quickly
and purchase a ticket themselves!

Seeing just how many people you know are attending the event may sway you to
attend yourself, so the concept of social proof comes into play at the bottom of
any events details page:

![Social proof and contrast load](../images/pages/high-fidelity-solution/Social-proof-contrast.png)

<figcaption>Social proof and contrast</figcaption>

The use of contrast in both colour and size for the event tracking and buying
buttons makes the buying call-to-action more attractive.

Lastly I'll touch on universal (inclusive) design and accessibility, and how I
took the research I did in this area into my final designs.

## Universal design and accessibility

As discussed in my
[post on this topic](../universal-inclusive-design-accessibility#equitable-use),
I've made considerations for a number of principles of universal design:

- Equitable use
- Flexibility in use
- Simple and intuitive use
- Size and space for approach and use

To validate my proposed solution for equitable use, I tested my designs against
different levels of colour blindness. One of the most challenging was
tritanopia, an extremely rare condition that renders blue and green almost
indistinguishable. The colour palette I developed above provides what I feel is
enough of a noticeable distinction between actions:

![Tritanopia comparison](../images/pages/high-fidelity-solution/Tritanopia-comparison.png)

<figcaption>Tritanopia comparison</figcaption>

To demonstrate flexibility in use, I produced filtering controls that would
provide the target audience choice in the methods that they used for discovering
upcoming events, which they could do at their own pace:

![Filter panel](../images/pages/high-fidelity-solution/Filter-panel.png)

<figcaption>Filter panel</figcaption>

With regards to simple and intuitive use, the filters above illustrate the
flexibility of manipulating the event listings depending on the options they
select. There are also multiple avenues of navigation between artist, event, and
venue:

![Navigation](../images/pages/high-fidelity-solution/Navigation.png)

<figcaption>Navigation</figcaption>

Finally, for size and space for approach and use I looked at adding key actions
like filtering closer to the user's hand. As well as this, consideration was
made for the user's comfort, with no touch target being shorter than 40 pixels
in width or height.

With the prototype finished, it's now time to see it in action - Here's a
[link](http://adobe.ly/1VAFHbh) to the high-fidelity solution I produced!

## Usability testing

As much research and design effort that's put in throughout the course of a
project, you never really know which way it's going to go until you've placed
your designs in front of a user to validate, in order to identify problems with
the target audience's interaction with a product.

The goal of the testing was to determine whether the design approach used as a
result of all the considerations I made throughout the project made sense, or in
Krug's words, "Get it" testing (2006). Specifically:

- A user will understand how to find information on events they care about
- A user will be able to discover events to attend at any given time period
- A user will be able to determine their best option for purchasing a ticket

In order to streamline the testing, a
[consent form](https://drive.google.com/open?id=0BzA9UyHASmcNUFY2a2Q4OFJnSFk),
[facilitation script](https://drive.google.com/open?id=0BzA9UyHASmcNS2QzalN0Nm0tQ0U),
and [test plan](https://drive.google.com/open?id=0BzA9UyHASmcNanBVa0V2OGVKVmM)
were created.

Testing of the prototype was performed on a Google Nexus 5X in Google Chrome
using the shareable link that Adobe Experience Design generated, with screen,
face, and voice being recorded using [Lookback](https://lookback.io/).

With limited time to wrap things up, unfortunately I only managed to perform one
[usability test](https://lookback.io/watch/tY9Ra3rgGoKfStW3A) on the finished
prototype.

The participant was delegated three tasks to attempt while thinking aloud over
the space of 10 minutes:

1. Find out when Bell X1 are playing next
2. Find out what events are happing this weekend
3. Discover the best ticket prices for Battles

The participant came across a number of issues within the application:

- There was issues with the lack of scrolling functionality within Adobe
  Experience Design - the participant would inadvertently refresh the web
  browser when attempting to scroll, having to restart
- The participant selected 'Upcoming' to see what events were on this weekend
- The Floating Action Button was an unfamiliar concept to the participant
- The icon for the filter reset confused the participant
- It was not apparent to the participant that the button for confirming filters
  was a button

If I were to produce another iteration of the prototype, there are a number of
considerations I would have to make based on the problems identified above.

In order to prevent confusion between the two in future, it's worth considering
a change of copy from 'Upcoming' to 'My Events' or something along those lines.

Although not a frequent Android user, it may be worth moving the functionality
of the Floating Action Button somewhere else on the screen (perhaps in the
header beside the search) in order for the design to be platform-agnostic.

There was also confusion around the filter panel - it could be a case of moving
the confirm button to the right-hand side to make it more obvious that it's a
button or distancing it a bit from the label. The reset button icon also needs
to be revised, or perhaps it should be spelt out in English rather than relying
on iconography.

## Conclusion

Throughout the course of the last few months, as well as tightening up some
visual design and prototype development skills, I gained some new knowledge in
areas I had yet to touch on, including:

- Information architecture and content strategy
- Cognitive and social psychology
- Universal design

Now that I've been exposed to these concepts and ideas, I'll be able to bring
them forward into my designs naturally in the future.

There was a lot of things that slowed me down by own doing - I wanted to
challenge myself using tools I had little familiarity with, and as a result the
learning curve was steep and the prototype wasn't as fully developed as I
would've like it to have been.

However, I think the act of researching design languages and pattern libraries,
universal design, and producing mock-ups at a high-fidelity has given me a
better eye for visual elements like colour, layout, and typography.

To wrap up, I'll leave with my [screencast](https://youtu.be/ukCEd6OgGpg), which
has consolidated the entire process from start to finish.

## Resources

- [Google material design](https://www.google.com/design/spec/material-design/introduction.html)
- [High-fidelity solution](http://adobe.ly/1VAFHbh)
- [Screencast](https://youtu.be/ukCEd6OgGpg)
- [Screencast uploads](https://drive.google.com/open?id=0BzA9UyHASmcNWWdnS010NXNhUWc)
- [Prototype uploads](https://drive.google.com/open?id=0BzA9UyHASmcNZlVsbGd2akh5M1U)
- [Usability test](https://lookback.io/watch/tY9Ra3rgGoKfStW3A)
- [User flow](https://drive.google.com/open?id=1FfljBzfQCazBGK0SXLC3GUzNUsXIMgyWoQ)
- [Usability testing uploads](https://drive.google.com/open?id=0BzA9UyHASmcNc2xsUl81b01ZbWc)
