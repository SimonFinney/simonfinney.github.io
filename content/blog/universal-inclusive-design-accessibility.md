---
date: 2016-04-10
title: Universal (inclusive) design and accessibility
description: #
---

For this post, I'm going to take a look at the principles of universal design,
or inclusive design as it's more commonly known, and how it and accessibility
can be applied to the current website in my final designs.

## Universal design

The Center for Universal Design describes the concept as follows:

> The design of products and environments to be usable by all people, to the
> greatest extent possible, without the need for adaptation or specialised
> design

What this is saying is that the design of all products and environments should
be agnostic and usable to the ability of all people, regardless of disabilities,
without any assistance.

By constantly planning and incorporating accessibility into your designs, it's
possible to develop an interface that's accessible to all abilities and that
provides the best experience across all technologies, including those that are
assistive (Miller, 2016).

By incorporating accessibility into a product's designs, it ultimately reaches
more of any organisation's audience. You would think it would be in their best
interest to take this on board, but in my experiences this isn't always the
case!

Below I've outlined some of the principles defined by the Center for Universal
Design (1997) with regards to the current website, and provided recommendations
for how these can be improved and implemented in my designs going forward.

### Equitable Use

Equitable use is concerned with ensuring a design is both useful and marketable
to people with diverse abilities. It's guidelines are as follows:

- 1a. Provide the same means of use for all users: identical whenever possible;
  equivalent when not
- 1b. Avoid segregating or stigmatising any users
- 1c. Provisions for privacy, security, and safety should be equally available
  to all users
- 1d. Make the design appealing to all users

Currently [Tickets.ie](https://www.tickets.ie) has a very limited colour palette
(Numerous levels of grey and orange) which may not drastically affect users with
colour blindness. If we invert the colours, we can also see that it performs for
those sensitive to brightness, and easier to distinguish for those suffering
from colour blindness:

![Equitable Use - Problem](../images/pages/universal-inclusive-design-accessibility/Tickets.ie_Equitable-Use.png)

<figcaption>Equitable Use - Problem</figcaption>

The most apparent issue lies in the distinguishability of links from other copy
on the website, although the persistent monochromatic tones may render certain
aspects of the website indistinguishable from others.

We can see how [Yelp](http://www.yelp.com/dublin) have accommodated for those
with deuteranopia, a common form of colour blindness, by integrating a limited
but effective colour palette to differentiate between different sections and
navigation elements.

![Equitable Use - Solution](../images/pages/universal-inclusive-design-accessibility/Yelp_Equitable-Use.png)

<figcaption>Equitable Use - Solution</figcaption>

The final design will address the above issues by providing clear
differentiation between navigation and copy through the use of type, the
assistance of iconography, and the use of contrasting colours to differentiate
separate sections.

### Flexibility in Use

Flexibility in use refers to a design accommodating a a wide range of individual
preferences and abilities. The recommended guidelines for this context are:

- 2a. Provide choice in methods of use
- 2b. Accommodate right or left-handed access and use
- 2c. Facilitate the user's accuracy and precision
- 2d. Provide adaptability to the user's pace

Tickets.ie in it's current form, doesn't provide a whole lot of flexibility in
terms of filtering down or sorting search results:

![Flexibility in Use](../images/pages/gaining-empathy/Tickets.ie.png)

<figcaption>Flexibility in Use - Problem</figcaption>

Providing flexibile filtering controls would allow the target audience choice in
the methods they use, and pivot easily within their context at their own pace.

![Flexibility in Use](../images/pages/universal-inclusive-design-accessibility/Flexibility-in-Use.jpg)

<figcaption>Flexibility in Use - Solution</figcaption>

### Simple and Intuitive Use

It's also important that a design is easy to understand, regardless of the
user's experience or knowledge:

- 3a. Eliminate unnecessary complexity
- 3b. Be consistent with user expectations and intuition
- 3c. Accommodate a wide range of literacy and language skills
- 3d. Arrange information consistent with its importance
- 3e. Provide effective prompting and feedback during and after task completion

The current website, as discussed in previous posts, operates in a funnel, and
has appalling navigation between artists, events, and venues, a standard of
which any web user expects today.

As addressed in my post on
[information architecture and content strategy](/2016/3/27/information-architecture-content-strategy#information-architecture),
it's intended that the target audience will be able to manipulate the event
listings purely by toggling on and off options of their choice, and users should
be able to freely navigate between artists, events, and venues without getting
trapped.

### Size and Space for Approach and Use

The final principle is concerned with providing appropriate size and space when
using a product, regardless of a user's body size, posture, or mobility:

- 7a. Provide a clear line of sight to important elements for any seated or
  standing user
- 7b. Make reach to all components comfortable for any seated or standing user
- 7c. Accommodate variations in hand and grip size
- 7d. Provide adequate space for the use of assistive devices or personal
  assistance

The current Tickets.ie website is not optimised for mobile use, so therefore can
be tricky to navigate while on a smartphone - the target audience would have to
jump through hoops to view anything on the website, in particular pinching to
zoom to access individual elements on the page and any specific controls or
functionality.

Regardless of left or right-handed users, any task would be difficult to
achieve:

![Size and Space for Approach and Use - Problem](../images/pages/universal-inclusive-design-accessibility/Tickets.ie_Size-Space-Approach-Use.png)

<figcaption>Size and Space for Approach and Use - Problem</figcaption>

In an effort to minimise fatigue for the current website on mobile, I've drafted
a quick solution below:

![Size and Space for Approach and Use - Solution](../images/pages/universal-inclusive-design-accessibility/Size-Space-Approach-Use.jpg)

<figcaption>Size and Space for Approach and Use - Solution</figcaption>

Key actions such as filtering and searching appear towards the bottom of the
screen closer to the user, as floating action buttons - if these were located at
the top of the screen, it may be hard to reach depending on whether you're left
or right-handed.

Switching between views would appear under the section's header as tabbed
navigation - While this requires some effort, it's not completely out of reach
for either handed individual.

Finally, the events for selection are displayed as cards in a descending,
scrollable list - this is more than suitable for anyone to manipulate and select
the item they require.

Now that I've addressed how some of the principles of universal design can be
applied to my designs, I'll speak briefly about accessibility and how it can be
considered in any web application.

## Accessibility

To develop a modern software application that integrates advanced user interface
controls and dynamic content, that's effectively accessible to users who rely on
assistive technology such as screen readers,
[Accessible Rich Internet Applications Suite (WAI-ARIA)](https://www.w3.org/WAI/intro/aria)
is employed (Cooper, 2016).

To meet the criteria for accessibility standards, the current website was
scanned using an accessibility policy tester, against a number of guidelines:

![Accessibility policy testing](../images/pages/universal-inclusive-design-accessibility/Tickets.ie_Policy-testing.png)

<figcaption>Accessibility policy testing</figcaption>

The results were astonishing - On one section of the website, there were **113
violations** alone! These varied from severe violations like how the structure
of certain elements on the page would prevent screen readers from navigating
successfully throughout the content, to missing significant attributes on media
and navigation elements that provide screen readers with valuable content
descriptions for those with visual impairments.

If you’re not suffering from a colour vision deficiency, it can be pretty hard
to imagine what it looks like to be colour blind. Visual impairments can vary in
severity, from colour vision deficiency which prevents those that live with it
to identify change in colour (Miller, 2016), to those who can't discern any
content, and rely on screen readers as their main interface with an application.

While my final prototype will show a proof-of-concept and not go as far as fully
engineering the application, below are a number of recommendations I've
suggested for improvement:

- Text alternatives should be provided for any non-text content
- Ensure semantic HTML document structure is provided to allow screen readers
  navigate naturally throughout the document
- Make the contrast between colour of text and it's background distinguishable
  and legible

With the last of considerations aside, I can continue with the design production
process and finally start building!

## Next steps

My final post will detail the production process of my design and prototype
using Adobe Illustrator and Experience Design - I'll walk through the typical
flow for Eoin, our primary user, and incorporate all of the artifacts I've
produced so far.

I'll also discuss the usability test I conducted to evaluate the prototype's
design, along with any materials produced.

## References

- Cooper, M. (2016). _WAI-ARIA Overview_. Retrieved April 4, 2016, from
  https://www.w3.org/WAI/intro/aria
- Miller, M.E. (2016). _Top Ten Inclusive Design Lessons_. Retrieved April 4,
  2016, from
  http://ageandability.com/2016/01/14/top-ten-inclusive-design-lessons/
- The Center for Universal Design (1997). _The Principles of Universal Design_
  (Version 2.0). NC State University.

## Resources

[Flexibility in Use](https://drive.google.com/open?id=1utChefMxn10Ti0ZI8Zm61DvWHg8naaMcKg)
