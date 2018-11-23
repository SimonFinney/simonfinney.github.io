---
date: 2016-03-27
title: Information Architecture and Content Strategy
description: #
---

This week I spent some time researching both information architecture (IA) and
content strategy, where I audited the current experience in relation to this and
developed some ideas as to how this could be applied to my final designs.

Throughout this time, I got a chance to dig in to the IA of
[Tickets.ie](http://www.tickets.ie/), from both a top-down, and bottom-up
perspective, by reverse-engineering the current website's hierarchy and content
model.

## Information architecture

At the very beginning of the IA gospel according to Morville, Arango, and
Rosenfeld (2015), the practice of IA is described as follows:

> A design discipline that is focused on making information findable and
> understandable

I took a look at the current IA of Tickets.ie, to get a better understanding of
the labelling, organisation, and structure of information on the website, and
how it's currently discovered via browsing and searching.

This first involved navigating throughout the website, developing a
[current high-level architecture sitemap](https://drive.google.com/open?id=1zCUnqwQyB5euGtULj-UJJ2oiTsVV5kMb6Q)
to get a feeling of what it's structure is composed of, and how it's browsing
and searching functions.

There were a couple of things I noticed while mapping this out:

1. The path from A to B is driven through a funnel - making a change to a
   category requires returning all the way back to the top of the hierarchy. Why
   aren't category and subcategories just filtering options?
2. You can access an event from an artist's or venue's details, but not the
   other way around - This leaves dead ends within the navigation structure!

The current website does a great job at listing everything that's on, and
sorting by event, venue, or date and time, but if you're looking for anything
else you're out of luck - Most people don't know exactly what they're looking
for or even how to search for it (Morville et al., 2015).

In an attempt to alleviate the above issues, I created an
[updated high-level architecture sitemap](https://drive.google.com/open?id=1_85mJzVulVh-y-VSwFGFVVzjPVKyz00ouQ).
Instead of forcing those who are browsing for events down a funnel with no
return, the updated sitemap conveys the idea that someone can manipulate the
event listings purely by toggling on and off options of their choice.

![Information architecture](../images/pages/information-architecture-content-strategy/Information-architecture.jpg)

<figcaption>Information architecture</figcaption>

After developing a proposed sitemap for my designs, I made an attempt at
deconstructing the
[current content model](https://drive.google.com/open?id=1RkLuzMdiFI6pFTV3tAWfy5JzLK2fJIKnDQ)
and rebuilding it again. According to Morville et al. (2015), content models
help ensure that different pieces of content are linked together in meaningful
ways to provide maximum value to those using the product.

Before, every piece of content such as event listings, artists, and venues,
flowed in a single direction towards an event with little connection.

After critiquing the content model of the current website, I was able to devise
a solution that allowed for bidirectional flow between each piece of content,
maximising the value that could be provided, and unifying the navigation for the
better.

From a psychological aspect, a potential social element could allow those using
it to see who else is attanding, so I devised the draft content model to reflect
this.

From here, the natural next step seemed to be to take a bottom-up approach and
develop an entity relationship diagram for each of these pieces of content. This
allowed me to evaluate the metadata on the current website and then expand on
it, to help determine what could be browsed, filtered, indexed, and linked in
the application.

With a foundation of the different kinds of content and how it's interconnected,
I was now able to develop a content strategy behind it.

## Content strategy

Although, the main purpose of the application is to discover and find upcoming
events, it's important to note that consistent and engaging content can
contribute greatly to the overall user experience.

According to Kissane (2011), good content is all of the below:

- Appropriate
- Useful
- User-centered
- Clear
- Consistent
- Concise

Content strategy is both a nuanced and multifaceted practice, with many
possibilities (Bloomstein, 2012). A solid content strategy can help
organisations produce content their audiences really need, and develop a
sustainable, long-term publishing plan (Kissane, 2011).

For the scope of this project, I wanted to focus on how I could effectively
reconcile all of the content on Tickets.ie, so the tone of the final designs
remained consistent and meaningful to the application's audience throughout.

I began with an exercise in establishing a message archicture via a quick
[card sorting exercise](https://drive.google.com/folderview?id=0BzA9UyHASmcNN3AxRVRsclV0XzQ&usp=sharing).
Using only a few materials, I started to describe everything I felt the
redesigns brand should offer, as well as what the audience's needs were for the
product.

![Message architecture](../images/pages/information-architecture-content-strategy/Message-architecture.jpg)

<figcaption>Message architecture</figcaption>

Once everything was laid out, I started clustering ideas and keywords that were
similar until they were distilled and sat in the middle. From here I was able to
develop some key overlapping points to carry through that I felt strongly
reflected both the brand and audience needs, which would be used as a guide when
producing content for the redesign:

- Approachable, friendly, and informal
- Consistent and modern
- Reliable and trusted
- Efficient and flexible
- Current and tailored

The next step I took was to traverse through the current website and perform a
[core sample content audit](https://drive.google.com/open?id=1CeML0_uEil-w-kM94HQg14zjiE_zuyzQ9Tv-YYDUjRU)
on the specific areas I'm going to focus on. This included critiquing the
website's headings, subheadings, fields, labels, and body copy against
appropriateness, relevancy, and character count to understand where improvements
were to be made.

Some of the key insights from the content audit include the following for
addressing:

There was a number of high character counts littered around the website,
particularly on navigation links and subheadings.

![Core content audit - High character counts](../images/pages/information-architecture-content-strategy/Core-content-audit_1-3.png)

<figcaption>Core content audit- High character counts</figcaption>

Throughout the artists, events, and venue pages there was redundant headings and
labels, with some of these being truncated in certain places.

![Core content audit - Redundancy](../images/pages/information-architecture-content-strategy/Core-content-audit_2-3.png)

<figcaption>Core content audit - Redundancy</figcaption>

Finally, calls-to-action were inconsistent with each other, both in styling and
wording.

![Core content audit - Inconsistency](../images/pages/information-architecture-content-strategy/Core-content-audit_3-3.png)

<figcaption>Core content audit - Inconsistency</figcaption>

Using the message architecture as a guide and as I move into developing the
design, I'll address these issues discovered in the core content audit to
provide the application with a consistent feel, and tone of voice.

## Next steps

In the next post, I'll look at whether cognitive and social psychological
principles are present in the current website, and leverage them to further
improve the experience.

## References

- Bloomstein, M. (2012). _Content Strategy at Work: Real-world stories to
  strengthen every interactive project_ (First ed.). Morgan Kaufmann.
- Kissane, E. (2011). _The Elements of Content Strategy_ (First ed.). A Book
  Apart.
- Morville, P., Arango, J., & Rosenfeld, L. (2015). _Information Architecture
  For the Web and Beyond_ (4th ed.). O’Reilly Media.

## Resources

- [Core sample content audit](https://drive.google.com/open?id=1CeML0_uEil-w-kM94HQg14zjiE_zuyzQ9Tv-YYDUjRU)
- [Content strategy uploads](https://drive.google.com/folderview?id=0BzA9UyHASmcNN3AxRVRsclV0XzQ&usp=sharing)
- [Information architecture uploads](https://drive.google.com/folderview?id=0BzA9UyHASmcNWVZRcXViY3RGRGs&usp=sharing)
