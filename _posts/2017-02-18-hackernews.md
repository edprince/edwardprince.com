---
layout: post
title:  "Hacker News: One Article Per Day"
date:   2017-02-18 20:59:05
categories: jekyll update
---

So, today I have decided to start reading one article in the top 10 on Hacker News, every day for a week.
This is after I recently realised how little I read generally in my average day, and after seeing a TED
talk about the importance of reading. 

## Aims
I hope that this process will have positive-enough impact, that it will motivate me to continue this
trend out of choice from now on. This is not about becoming more aware about the technology industry,
nor is it about learning anything specific, but isntead generally enhancing my lifestyle by digesting
well-written content about a field in which I have academic investment. As a side-effect, I also hope it
will improve my ability to write well, both from reading the articles, and secondly through the analysis
I do about each article.

# Day One: The Idea Maze of Personal Logging
<link to article>

So, I have just read an article by Philip Monk about a personal logging application. Initially, I was a
tad confused as to exactly what was meant by this, despite knowing both words used! I would have found it
useful for Mr Monk to have included a short abstract about the piece, describing in simple terms exactly
what the project was. But moving on... 

His idea was to write an application that logged certain events of the day, and displayed them in chronological
order. He talks about the system design, breaking it down into two smaller components: data collection and
data analysis. He proceeds to explain about the necessity for being aware of the analysis aspect of the
application whilst doing the data collection, as it helps mould the format in which data is stored. Interestingly
he describes exactly the process that happened in my head whilst reading the principles. This was that rigid storage
would likely hinder the application, not allowing for any flexibility with events. For example, all events may
contain a time, but not all contain a person e.g `Pipe burst in bathroom`. On the other end of the spectrum
however, it cannot be too flexible (JSON, plain text) as this makes parsing for analysis very difficult. The solution
felt very elegant, and involved splitting up events into three categories: a subject, a verb, modifiers. This is
closer to a grammar rather than a dataset. The example used in the article is `I ate a burrito at 8am this morning`.
This is split up like so: `Subject: I, verb: ate, modifiers: [8am, this morning]`. This leads to a flexible yet
still strictly defined method of storing event data.

Next was choice of platform, and after deciding it should be accessible on both mobile devices as well as desktop
computers, a web application is the preferred choice (gets my vote too!). In conclusion, Mr Monk was able to create
a simple prototype that logged out events in his life, after manually entering them in on a device of some sort.

Overall, this was a fun project, and good article, makes you want to have a go at implementing it at some point.





[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
